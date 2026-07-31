// ─────────────────────────────────────────────────────────────
//  RESEARCH THEMES  —  the cards shown in the Research section.
//  Add / remove / reorder items in this array. Each card has:
//    icon   : a short emoji or symbol (decorative)
//    title  : the theme name
//    blurb  : one-line summary
//    tags   : keywords shown as small pills
// ─────────────────────────────────────────────────────────────

export const researchIntro =
  'We are a bioinformatics-led lab working to understand the abundance, diversity, activity and interactions of microbes across a wide range of ecosystems — combining cutting-edge sequencing, state-of-the-art molecular biology, and big-data analysis on dedicated HPC.';

export const researchThemes = [
  {
    icon: '🧬',
    title: 'Metagenomics & Meta-transcriptomics',
    blurb:
      'Reading whole microbial communities — who is there, and what are they doing — from soils, water and the built environment.',
    tags: ['Multi-omics', 'Shotgun', 'Community assembly'],
  },
  {
    icon: '🛡️',
    title: 'Antimicrobial Resistance',
    blurb:
      'Tracking the emergence, dissemination and persistence of AMR along the wastewater–river continuum and in clinical settings.',
    tags: ['AMR', 'One Health', 'Surveillance'],
  },
  {
    icon: '🚰',
    title: 'Microbes of the Built Environment',
    blurb:
      'Hospital and campus sink drains as hotspots for microbial communities and resistant pathogens.',
    tags: ['Sink drains', 'Biofilms', 'Pathogens'],
  },
  {
    icon: '🌱',
    title: 'Soil & Freshwater Microbial Ecology',
    blurb:
      'How land use, pH, nutrients and disturbance shape bacterial and fungal communities and the functions they drive.',
    tags: ['Soil pH', 'Biogeography', 'Fungi'],
  },
  {
    icon: '⚙️',
    title: 'Tool & Algorithm Development',
    blurb:
      'Building open, reproducible bioinformatics pipelines that the wider community can pick up and run.',
    tags: ['Pipelines', 'Reproducibility', 'Open source'],
  },
  {
    icon: '🐝',
    title: 'eDNA & Biomonitoring',
    blurb:
      'Environmental DNA and citizen-science approaches for national-scale, long-term biodiversity monitoring.',
    tags: ['eDNA', 'Metabarcoding', 'Citizen science'],
  },
];
