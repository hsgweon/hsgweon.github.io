// ─────────────────────────────────────────────────────────────
//  PUBLICATION LINK OVERRIDES
//
//  Google Scholar doesn't reliably expose DOIs, so links are pinned
//  here. Anything in this map is ALWAYS used and survives every
//  auto-sync run.
//
//  Key   = a distinctive lowercase snippet of the paper title
//          (matching is case-insensitive + "contains"-based, so a
//          short unique part of the title is enough).
//  Value = the URL to link to (DOI preferred).
//
//  To add a new paper's link: copy a line, paste a snippet of its
//  title and its DOI. That's it.
// ─────────────────────────────────────────────────────────────

export const linkOverrides = {
  'soil bacterial networks are less stable under drought': 'https://doi.org/10.1038/s41467-018-05516-7',
  'land use driven change in soil ph affects microbial carbon': 'https://doi.org/10.1038/s41467-018-05980-1',
  'environment and host as large-scale controls of ectomycorrhizal': 'https://doi.org/10.1038/s41586-018-0189-9',
  'pipits: an automated pipeline': 'https://doi.org/10.1111/2041-210X.12399',
  'catchment-scale biogeography of riverine': 'https://doi.org/10.1038/ismej.2014.166',
  'contrasting community assembly processes structure lotic': 'https://doi.org/10.1111/1462-2920.15337',
  'the ph optimum of soil exoenzymes': 'https://doi.org/10.1016/j.soilbio.2019.107601',
  'the impact of sequencing depth on the inferred': 'https://doi.org/10.1186/s40793-019-0347-1',
  'soil ph effects on the interactions between dissolved zinc': 'https://doi.org/10.1007/s11356-015-4538-z',
  'interacting effects of land use type': 'https://doi.org/10.1016/j.soilbio.2020.108072',
  'niche and local geography shape the pangenome': 'https://doi.org/10.1126/sciadv.abe3868',
  'a pile of pipelines': 'https://doi.org/10.1111/1755-0998.13847',
  'organisation of the pantothenate': 'https://doi.org/10.1046/j.1365-313X.2003.01940.x',
  'mapping and validating predictions of soil bacterial': 'https://doi.org/10.1016/j.apsoil.2015.06.018',
  'genomic surveillance of escherichia coli and klebsiella': 'https://doi.org/10.1099/mgen.0.000391',
  'a genomic epidemiological study shows': 'https://doi.org/10.1099/mgen.0.000630',
  'environmental metabarcoding reveals contrasting belowground': 'https://doi.org/10.1007/s00248-017-0984-0',
  'accumulation of polybrominated diphenyl ethers and microbiome': 'https://doi.org/10.1016/j.ecoenv.2019.109882',
  'genomic network analysis of environmental and livestock f-type': 'https://doi.org/10.1038/s41396-021-00926-w',
  'rhizosphere bacteria are more strongly related to plant root': 'https://doi.org/10.1007/s11104-020-04479-3',
  'helminth burden and ecological factors': 'https://doi.org/10.1038/ismej.2016.153',
  'dissemination and persistence of antimicrobial resistance': 'https://doi.org/10.1016/j.watres.2024.122204',
  'nutrients influence the dynamics of klebsiella': 'https://doi.org/10.1016/j.watres.2020.115707',
  'accumulation of nylon microplastics': 'https://doi.org/10.1016/j.scitotenv.2022.155089',
  'genetic, epigenetic and microbiome characterisation of an earthworm': 'https://doi.org/10.1016/j.envpol.2019.113238',
  'population-level faecal metagenomic profiling': 'https://doi.org/10.1016/j.eclinm.2021.100910',
  'sedimentary dna records long': 'https://doi.org/10.1002/edn3.344',
  'beyond taxonomic identification': 'https://doi.org/10.3389/fmicb.2021.682886',
  'rearing and foraging affects bumblebee': 'https://doi.org/10.1111/1758-2229.12299',
  'equine grass sickness': 'https://doi.org/10.1186/s42523-021-00131-2',
  'citizen science monitoring reveals links between honeybee': 'https://doi.org/10.1038/s41598-022-18672-0',
  'host genetic variation shape the fungal endophyte': 'https://doi.org/10.1016/j.funeco.2022.101162',
  'characterization of communal sink drain': 'https://doi.org/10.1002/edn3.196',
  'bacterial communities in larger islands': 'https://doi.org/10.1038/s41396-021-00976-0',
  'neonicotinoid use on cereals and sugar beet': 'https://doi.org/10.1016/j.agee.2020.107205',
  'integration of dna extraction, metabarcoding': 'https://doi.org/10.1016/j.mex.2021.101303',
  'assessment of the bimodality': 'https://doi.org/10.1038/ismej.2016.142',
  'gut and faecal bacterial community of the terrestrial isopod': 'https://doi.org/10.1007/s10646-021-02477-4',
  'complete mitochondrial genome of the blackfly': 'https://doi.org/10.1080/23802359.2016.1209091',
  'hierarchical effects of long‐term agricultural stressors': 'https://doi.org/10.1111/1758-2229.13106',
  'hierarchical effects of long-term agricultural stressors': 'https://doi.org/10.1111/1758-2229.13106',
  'evaluating the effectiveness of sodium hypochlorite': 'https://doi.org/10.1002/edn3.70057',
  'heavy metal contamination and ecological risk in kabompo': 'https://doi.org/10.1080/26395940.2025.2549084',
  'longitudinal bacterial community dynamics and sodium hypochlorite': 'https://doi.org/10.1016/j.scitotenv.2024.175349',
  'mycobial community assemblages in sink drains': 'https://doi.org/10.1002/edn3.375',
  'unlocking river biofilm microbial diversity': 'https://doi.org/10.1111/1755-0998.70075',
  'microbial diversity and antimicrobial resistance in faecal': 'https://doi.org/10.1371/journal.pone.0282584',
  'taxonomic filtering accompanies functional expansion': 'https://doi.org/10.1093/ismejo/wrag131',
  'bio-linux as a tool for bioinformatics training': 'https://doi.org/10.1109/BIBE.2012.6399736',
};

// ─────────────────────────────────────────────────────────────
//  HIDDEN ENTRIES  (optional)
//  Google Scholar occasionally lists malformed or duplicate entries.
//  Add a distinctive lowercase snippet of any title you want hidden
//  from the website. Matching is case-insensitive + "contains"-based.
// ─────────────────────────────────────────────────────────────

export const hiddenTitles = [
  'mj bailey i ri griffiths', // malformed Scholar entry (author fragment)
];

