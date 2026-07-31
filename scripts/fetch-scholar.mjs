#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════
   fetch-scholar.mjs — refresh src/data/publications.json from
   Google Scholar.

   • Scrapes the public Scholar profile (no API key needed).
   • Cleans up Scholar's messy venue / title strings automatically.
   • Preserves links: pinned links in publications-links.js always
     win; otherwise a previously-known link for that paper is kept.
   • SAFE: if the scrape fails or returns too little, it exits WITHOUT
     touching the file — so the site never loses its publication list.

   Run locally:   npm run sync-scholar
   Runs monthly via .github/workflows/update-scholar.yml
   ═══════════════════════════════════════════════════════════════ */

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(__dirname, '..', 'src', 'data', 'publications.json');
const OVERRIDES_FILE = join(__dirname, '..', 'src', 'data', 'publications-links.js');

const siteSrc = await readFile(join(__dirname, '..', 'src', 'data', 'site.js'), 'utf8');
const SCHOLAR_ID = (siteSrc.match(/scholarId:\s*'([^']+)'/) || [])[1];
if (!SCHOLAR_ID) {
  console.error('✗ Could not find scholarId in src/data/site.js');
  process.exit(1);
}

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/124.0 Safari/537.36';

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&hellip;/g, '…')
    .trim();

// Fuzzy key: strip everything but letters+digits, take a prefix.
// Makes "wastewater- and" and "wastewater-and" match, etc.
const fuzzyKey = (s) => decode(s).toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 50);

// Tidy a Scholar title (drop trailing "…" truncation cleanly).
const cleanTitle = (raw) => {
  const truncated = /…/.test(raw);
  let s = decode(raw).replace(/\s*…\s*$/, '').trim();
  if (truncated) s = s.replace(/:\s*[^:]*$/, '').trim(); // drop dangling subtitle
  return s;
};

// Tidy a Scholar venue: strip trailing "vol (issue), pages" clutter.
const cleanVenue = (raw) => {
  let s = decode(raw).replace(/…+$/, '').trim();
  s = s.replace(/\s+\d+\s*\([^)]*\)\s*,.*$/, ''); // " 26 (1), e70075"
  s = s.replace(/\s+\d+\s*,.*$/, '');             // " 264, 122204"
  s = s.replace(/\s+\d+\s*\([^)]*\)\s*$/, '');    // " 26 (1)"
  s = s.replace(/,\s*[^,]*\d[^,]*$/, '');         // trailing ", 107451" / ", 2026.06…"
  s = s.replace(/[\s,]+$/, '').trim();
  return s;
};

async function fetchPage(cstart) {
  const url =
    `https://scholar.google.com/citations?user=${SCHOLAR_ID}` +
    `&hl=en&cstart=${cstart}&pagesize=100`;
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching Scholar`);
  const html = await res.text();
  if (/id="gs_captcha"|unusual traffic|not a robot/i.test(html)) {
    throw new Error('Blocked by Google Scholar (captcha).');
  }
  return html;
}

function parseMetrics(html) {
  const vals = [...html.matchAll(/class="gsc_rsb_std">(\d[\d,]*)</g)].map((m) =>
    parseInt(m[1].replace(/,/g, ''), 10)
  );
  // order: [cites all, cites recent, h all, h recent, i10 all, i10 recent]
  if (vals.length >= 6) return { citations: vals[0], hIndex: vals[2], i10Index: vals[4] };
  return null;
}

function parseRows(html) {
  const rows = [];
  const rowRe = /<tr class="gsc_a_tr">([\s\S]*?)<\/tr>/g;
  let m;
  while ((m = rowRe.exec(html))) {
    const row = m[1];
    const rawTitle = (row.match(/class="gsc_a_at"[^>]*>([\s\S]*?)<\/a>/) || [])[1] || '';
    if (!decode(rawTitle)) continue;
    const grays = [...row.matchAll(/class="gs_gray">([\s\S]*?)<\/div>/g)].map((g) => g[1]);
    const rawVenue = grays[1] || grays[0] || '';
    const citesTxt = (row.match(/class="gsc_a_ac[^"]*"[^>]*>([^<]*)</) || [])[1] || '';
    const year = parseInt((row.match(/class="gsc_a_h[^"]*"[^>]*>(\d{4})/) || [])[1], 10) || null;
    rows.push({
      title: cleanTitle(rawTitle),
      venue: cleanVenue(rawVenue),
      year,
      citations: parseInt(citesTxt.replace(/[^\d]/g, ''), 10) || 0,
    });
  }
  return rows;
}

async function main() {
  console.log(`→ Fetching Scholar profile ${SCHOLAR_ID} …`);

  let all = [];
  let metrics = null;
  for (let cstart = 0; cstart < 500; cstart += 100) {
    const html = await fetchPage(cstart);
    if (cstart === 0) metrics = parseMetrics(html);
    const rows = parseRows(html);
    if (rows.length === 0) break;
    all = all.concat(rows);
    if (rows.length < 100) break;
    await new Promise((r) => setTimeout(r, 1200)); // be polite
  }

  console.log(`→ Parsed ${all.length} publications; metrics: ${JSON.stringify(metrics)}`);

  const existing = JSON.parse(await readFile(DATA_FILE, 'utf8'));
  if (all.length < Math.max(10, existing.publications.length * 0.6)) {
    console.error(`✗ Scrape returned too few results (${all.length}). File left untouched.`);
    process.exit(1);
  }

  // Manual link overrides (always win) + hidden-entry list
  let overrides = {};
  let hidden = [];
  try {
    const mod = await import('file://' + OVERRIDES_FILE + `?t=${Date.now()}`);
    overrides = mod.linkOverrides || {};
    hidden = (mod.hiddenTitles || []).map((s) => s.toLowerCase());
  } catch {}
  const overrideEntries = Object.entries(overrides).map(([k, v]) => [k.toLowerCase(), v]);

  // Looks like a citation string, not a real title?
  // (Scholar occasionally lists a paper again with its full author list as
  //  the "title", e.g. "Mason KE, van Agtmaal M, … (2018) Land use driven …")
  const looksLikeCitation = (title) => {
    const t = decode(title);
    return /\(\d{4}\)/.test(t) && t.split(',').length > 3;
  };

  // Drop hidden + citation-junk entries, then de-duplicate (keep most-cited)
  all = all.filter((p) => {
    const t = decode(p.title).toLowerCase();
    if (hidden.some((h) => t.includes(h))) return false;
    if (looksLikeCitation(p.title)) return false;
    return true;
  });
  const byKey = new Map();
  for (const p of all) {
    const k = fuzzyKey(p.title);
    const prev = byKey.get(k);
    if (!prev || p.citations > prev.citations) byKey.set(k, p);
  }
  all = [...byKey.values()];

  // Previously-known links, keyed fuzzily, as a fallback
  const priorLink = new Map(
    existing.publications.filter((p) => p.link).map((p) => [fuzzyKey(p.title), p.link])
  );

  const resolveLink = (title) => {
    const t = decode(title).toLowerCase();
    for (const [key, url] of overrideEntries) if (t.includes(key)) return url;
    return priorLink.get(fuzzyKey(title)) || '';
  };

  const publications = all
    .map((p) => ({ ...p, link: resolveLink(p.title) }))
    .sort((a, b) => (b.year || 0) - (a.year || 0) || b.citations - a.citations);

  const out = {
    _meta: {
      note:
        'Auto-generated by scripts/fetch-scholar.mjs from Google Scholar. ' +
        'To pin a link permanently, add it to src/data/publications-links.js.',
      source: `https://scholar.google.com/citations?user=${SCHOLAR_ID}&hl=en`,
      lastUpdated: new Date().toISOString().slice(0, 10),
      citations: metrics?.citations ?? existing._meta.citations,
      hIndex: metrics?.hIndex ?? existing._meta.hIndex,
      i10Index: metrics?.i10Index ?? existing._meta.i10Index,
    },
    publications,
  };

  await writeFile(DATA_FILE, JSON.stringify(out, null, 2) + '\n', 'utf8');
  const withLinks = publications.filter((p) => p.link).length;
  console.log(`✓ Wrote ${publications.length} publications (${withLinks} with links).`);
}

main().catch((err) => {
  console.error('✗ ' + err.message);
  console.error('  Existing publications.json left unchanged.');
  process.exit(1);
});
