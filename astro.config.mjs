import { defineConfig } from 'astro/config';

// https://astro.build
// Deployed to GitHub Pages at the domain root (hsgweon.github.io),
// so `site` is the bare domain and `base` stays '/'.
export default defineConfig({
  site: 'https://hsgweon.github.io',
  base: '/',
  build: {
    // Cleaner URLs, e.g. /research/ instead of /research.html
    format: 'directory',
  },
});
