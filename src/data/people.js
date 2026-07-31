// ─────────────────────────────────────────────────────────────
//  PEOPLE  —  current team, group photos, and past members.
//  To add a member: copy a { ... } block and edit the fields.
//    name  : person's name
//    role  : their role / project (basic HTML allowed)
//    photo : optional — path to an image in /public/images/ ('' for none)
// ─────────────────────────────────────────────────────────────

export const currentMembers = [
  {
    name: 'Ana Carolina Yamakawa',
    role: 'PhD (2022–present)',
    photo: '',
  },
  {
    name: 'Ashinsa de Silva Wijeyeratne',
    role: 'PhD (2022–present)',
    photo: '',
  },
  {
    name: 'Oliver J Hasimuna',
    role: 'PhD (2023–present)',
    photo: '',
  },
  {
    name: 'Calum S McKinney',
    role: 'PhD (2025–present)',
    photo: '',
  },

];

// Group photos (shown in a small gallery). caption is optional.
export const groupPhotos = [
  { src: '/images/lab-group-2023.jpg', caption: 'Gweon Lab — Summer 2023' },
  { src: '/images/lab-wetlab-2021.jpeg', caption: 'Gweon Lab — Spring 2020' },
];

// Past members — format each as:  'Name · Role · (dates)'
// Roles are auto-grouped in this order on the page: PhD, MSc, UROP, Undergraduate.
// (Within a role, they appear in the order listed here — newest cohorts first.)
export const pastMembers = [
  // PhD
  'Zoe Withey · PhD · (2019–2024)',

  // MSc
  'Lucy Bates · MSc · (2020–2021)',
  'Alex Stormer · MSc · (2020–2021)',

  // UROP
  'Emily Wright · UROP · (2022–2023)',

  // Undergraduate
  'Marcello Beltrami · Undergraduate · (2022–2023)',
  'Phoebe French · Undergraduate · (2022–2023)',
  'Jasper Almond · Undergraduate · (2022–2023)',
  'James Bussingham · Undergraduate · (2022–2023)',
  'Alex Thomas · Undergraduate · (2022–2023)',
  'Naomi Jenkins Martinez · Undergraduate · (2021–2022)',
  'Elsie Fell · Undergraduate · (2021–2022)',
  'Alisha Awan · Undergraduate · (2021–2022)',
  'Naol Duguma · Undergraduate · (2021–2022)',
  'Ed Neary · Undergraduate · (2021–2022)',
  'Elin Smith · Undergraduate · (2021–2022)',
  'Jack Lindsell · Undergraduate · (2020–2021)',
  'Lucy Wells · Undergraduate · (2019–2020)',
  'Laura O’Gallagher · Undergraduate · (2019–2020)',
  'Max Long · Undergraduate · (2019–2020)',
  'Kai Smith · Undergraduate · (2019–2020)',
  'Kieren Mundy · Undergraduate · (2019–2020)',
];
