# Gweon Lab — personal & lab website

Personal and lab website for **Dr Soon Gweon** — Associate Professor in Applied Genomics &
Bioinformatics, University of Reading.

**Live:** https://hsgweon.github.io

Built with [Astro](https://astro.build). Publications auto-sync from Google Scholar.

## Quick start

```bash
npm install            # install dependencies
npm run dev            # live preview at http://localhost:4321
npm run build          # production build → dist/
npm run sync-scholar   # refresh publications from Google Scholar
```

## Editing & setup

Almost all content lives in plain-text files in **`src/data/`**. See **[EDITING.md](EDITING.md)**
for the full editing reference, which also covers one-time GitHub Pages setup and deployment.

## How it's organised

```
src/
  data/             ← all editable content (site, about, research, people, vacancies, publications)
  components/       ← the page sections (Hero, About, Research, People, Publications, …)
  layouts/          ← the HTML shell
  pages/index.astro ← assembles the sections
  styles/global.css ← design tokens (colours, fonts) + base styles
scripts/
  fetch-scholar.mjs ← the Google Scholar sync script
.github/workflows/  ← auto build/deploy + monthly Scholar sync
public/images/      ← photos
_legacy/            ← the previous website, kept for reference
```
