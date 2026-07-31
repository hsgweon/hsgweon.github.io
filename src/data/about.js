// ─────────────────────────────────────────────────────────────
//  ABOUT  —  the "who I am" bio paragraphs.
//  Each string in `bio` becomes a paragraph. Edit freely.
//  Basic HTML is allowed (e.g. <a href="...">, <b>, <em>).
// ─────────────────────────────────────────────────────────────

export const about = {
  // Photo lives in /public/images/ — change the filename to swap it.
  photo: '/images/soon-gweon.jpg',

  bio: [
    `I am an Associate Professor at the <a href="https://www.reading.ac.uk/biologicalsciences/" target="_blank" rel="noopener">School of Biological Sciences, University of Reading</a> (2017&ndash;present). I read Genetics at the University of Nottingham and Bioinformatics (Structural Biology) at the University of Cambridge. Before Reading, I spent several years at the <a href="https://www.ceh.ac.uk/" target="_blank" rel="noopener">UK Centre for Ecology &amp; Hydrology</a> (2011&ndash;2017).`,

    `My research sits at the interface of <b>molecular ecology, applied genomics and bioinformatics</b>. I combine computational analysis with molecular techniques to ask &mdash; and answer &mdash; questions about the microbial world.`,

    `My group studies the abundance, diversity, activity and interactions of microbes across ecosystems &mdash; from soils and rivers to hospital sink drains &mdash; using metagenomics, metabarcoding and genomics, backed by dedicated HPC infrastructure.`,
  ],

  // Short highlight chips shown under the bio
  facts: [
    { label: 'Genetics', detail: 'Univ. of Nottingham' },
    { label: 'Bioinformatics', detail: 'Univ. of Cambridge' },
    { label: 'UKCEH', detail: '2011–2017' },
    { label: 'Univ. of Reading', detail: '2017–present' },
  ],
};
