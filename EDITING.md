# Editing & setup reference

This site is built with [Astro](https://astro.build). Almost all content lives in a handful of plain-text files in the **`src/data/`** folder. Changing a value and saving updates the site — no coding knowledge is required.

For first-time deployment configuration, see [First-time setup](#first-time-setup) at the end of this document.

---

## Two ways to edit

### Option A — Edit directly on GitHub (no local setup)

1. Open the repository on GitHub: `github.com/hsgweon/hsgweon.github.io`
2. Open the file to change (e.g. `src/data/people.js`).
3. Click the pencil (Edit) icon in the top-right.
4. Make the change, scroll down, and click **Commit changes**.
5. After ~1–2 minutes GitHub rebuilds and republishes the site automatically.

### Option B — Edit locally (for larger changes / live preview)

```bash
git clone https://github.com/hsgweon/hsgweon.github.io.git
cd hsgweon.github.io
npm install
npm run dev
```

Open **http://localhost:4321** to see the site update live while editing. To publish:

```bash
git add -A
git commit -m "Update content"
git push
```

The site rebuilds and republishes automatically.

---

## What's in `src/data/` — where each thing is changed

| Content                                          | File                              |
| ------------------------------------------------ | --------------------------------- |
| Name, role, email, links, hero keywords          | `src/data/site.js`                |
| The "About" bio and photo                         | `src/data/about.js`               |
| Research themes (the cards)                       | `src/data/research.js`            |
| Team members, group photos, past members         | `src/data/people.js`              |
| The "Join" / vacancies text                       | `src/data/vacancies.js`           |
| Publication links (pin a DOI permanently)         | `src/data/publications-links.js`  |
| The publications list itself                      | *(auto-synced — see below)*       |

Each file contains comments (lines starting with `//`) describing every field. Editing mostly means changing text inside quotes `'like this'`.

### Formatting rules
- Keep the **quotes** `'...'` around text and the **commas** `,` at the end of lines.
- To add an item to a list, copy an existing `{ ... }` block and edit it.
- Basic HTML works in bio and vacancy text: `<a href="...">link</a>`, `<b>bold</b>`, `<em>italic</em>`.
- Photos go in the **`public/images/`** folder and are referenced as `/images/filename.jpg`.

---

## Publications — automatic updates

The publications list is not maintained by hand. A GitHub Action checks the Google Scholar
profile **on the 1st of every month** and updates the list, citation counts, h-index and
i10-index automatically.

- **Run it on demand** instead of waiting: repository → **Actions** tab → **Sync Google Scholar** → **Run workflow**.
- Citation counts, h-index, i10-index and new papers all refresh automatically.
- **To add a cleaner link to a paper** (Scholar does not always expose a DOI): add an entry in
  `src/data/publications-links.js`, where it is kept permanently:
  ```js
  'a snippet of the paper title': 'https://doi.org/10.xxxx/xxxxx',
  ```
- **To hide a malformed or duplicate entry** that Scholar sometimes lists: add a snippet of its
  title to the `hiddenTitles` list in the same file.

If Google blocks the automatic check (it can happen — scrapers are not always welcome), the job
simply fails and the existing list is left unchanged. It can be re-run later.

---

## Changing the look

- The accent colour (`#CB2957`), background and text colours live at the top of
  `src/styles/global.css` as `--accent`, `--bg` and `--ink`. Changing `--accent` re-themes the
  whole site.
- Fonts, spacing and the rest of the styling are in that same file and in each component under
  `src/components/`.

---

## Recovering an earlier version

Every version is saved in git, so nothing is permanently lost.
- On GitHub, open the file → **History** → select an earlier version.
- The previous website is preserved on the **`legacy-site-backup`** branch and in the
  **`_legacy/`** folder.

---

## First-time setup

These steps are only needed once, after the code is first pushed to GitHub. They take about two
minutes.

### 1. Switch GitHub Pages to "GitHub Actions"

The previous site was served straight from an `index.html` in the repository root. This site is
**built** by Astro, so GitHub Pages needs to deploy the build output instead.

1. Open the repository → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Nothing needs to be saved — it applies immediately.

### 2. Push the code (triggers the first deploy)

```bash
git add -A
git commit -m "Rebuild site with Astro"
git push
```

The **Build & Deploy site** workflow then runs (see the **Actions** tab); once it completes, the
site is live at **https://hsgweon.github.io**.

### 3. (Optional) Test the Scholar auto-sync

Repository → **Actions** → **Sync Google Scholar** → **Run workflow**. This refreshes
`src/data/publications.json`, and if anything changed, commits it and redeploys automatically.

### Notes

- **Custom domain.** To use one, add a `public/CNAME` file containing the domain and set it under
  Settings → Pages.
- **Nothing is lost.** The previous website is preserved in the `_legacy/` folder (the old
  `index.html` and `assets/`) and on the `legacy-site-backup` git branch.
- **Local preview:** `npm install`, then `npm run dev` → http://localhost:4321
- **Refresh publications locally:** `npm run sync-scholar`
