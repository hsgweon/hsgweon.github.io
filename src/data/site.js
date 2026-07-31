// ─────────────────────────────────────────────────────────────
//  SITE CONFIG  —  edit the top-level details of the site here.
//  Everything in this file is plain text. Change a value, save,
//  and the site updates. No code knowledge needed.
// ─────────────────────────────────────────────────────────────

export const site = {
  // Short site / lab name (shown in the nav + hero)
  labName: 'Gweon Lab',

  // The person
  name: 'Dr Soon Gweon',
  fullName: 'Hyun Soon Gweon',
  role: 'Associate Professor in Applied Genomics & Bioinformatics',
  institution: 'School of Biological Sciences, University of Reading',

  // One-line tagline for the hero
  tagline: 'Bioinformatics-led research on the hidden world of microbes.',

  // Rotating words in the hero (the animated "typed" line)
  heroKeywords: [
    'Microbial Ecology',
    'Metagenomics',
    'Antimicrobial Resistance',
    'Environmental Omics',
    'Tool Development',
  ],

  // The animated DNA "code" strip letters (purely decorative)
  dnaBases: 'ATCG',

  // Contact
  email: 'h.s.gweon@reading.ac.uk',
  // Obfuscated version shown on the page to deter scrapers
  emailDisplay: 'h.s.gweon [at] reading.ac.uk',
  location:
    'Health and Life Sciences Building, University of Reading, Whiteknights, Reading RG6 6EX, UK',

  // External links (leave a value empty '' to hide that icon)
  links: {
    scholar: 'https://scholar.google.com/citations?user=VOKOrbYAAAAJ&hl=en',
    github: 'https://github.com/hsgweon',
    reading: 'https://www.reading.ac.uk/ecology/staff/soon-gweon',
    linkedin: 'https://uk.linkedin.com/in/soon-gweon-8584b9233',
    orcid: '', // add your ORCID URL if you like
    twitter: '',
  },

  // Google Scholar user id — used by the auto-sync script
  scholarId: 'VOKOrbYAAAAJ',
};

// ── Headline metrics (shown as animated counters).
// These auto-update from Google Scholar too, but you can override
// here if you ever want to. Leave as null to always use Scholar's value.
export const metricsOverride = {
  citations: null, // e.g. 6488
  hIndex: null, // e.g. 26
  i10Index: null, // e.g. 38
};
