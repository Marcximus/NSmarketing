// De tre pakkeløsninger. Alt indhold på pakkesiden, forsiden og i sammenligningstabellen kommer herfra.
// TODO: Alle priser og mængder er forslag – ret dem til jeres egne før lancering.

export type PackageId = 'silver' | 'gold' | 'black';

export type Package = {
  id: PackageId;
  name: string;
  tagline: string;
  idealFor: string;
  price: number; // kr. pr. måned ekskl. moms
  featured?: boolean;
  badge?: string;
  /** Kort opsummering af mængder, vises øverst på kortet */
  summary: { value: string; label: string }[];
  /** Vises over highlights på kortet, fx 'Alt i Silver, plus:' */
  plusLabel?: string;
  /** De vigtigste punkter på kortet – gentager ikke summary og skal stemme med sammenligningstabellen */
  highlights: string[];
};

export const packages: Package[] = [
  {
    id: 'silver',
    name: 'Silver',
    tagline: 'Den professionelle start',
    idealFor:
      'Til virksomheder, der vil have en professionel og stabil tilstedeværelse på Instagram og Facebook – uden selv at bruge tid på det.',
    price: 6995,
    summary: [
      { value: '2', label: 'kanaler' },
      { value: '8', label: 'opslag / md.' },
      { value: '2', label: 'reels / md.' },
    ],
    highlights: [
      'Instagram & Facebook',
      '16 stories om måneden',
      'Content-dag med fotograf & videograf hvert kvartal',
      'Månedlig contentplan til godkendelse',
      'Månedlig rapport og check-in',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    tagline: 'Skab synlig vækst',
    idealFor:
      'Til virksomheder, der vil bruge sociale medier aktivt til at få flere følgere, flere henvendelser og et stærkere brand.',
    price: 10995,
    featured: true,
    badge: 'Vores anbefaling', // TODO: Skift til 'Mest valgt', når det kan dokumenteres
    summary: [
      { value: '3', label: 'kanaler' },
      { value: '12', label: 'opslag / md.' },
      { value: '8', label: 'reels / md.' },
    ],
    plusLabel: 'Alt i Silver, plus:',
    highlights: [
      'TikTok som tredje kanal',
      '36 stories og 2 karruseller om måneden',
      'Content-dag med fotograf & videograf hver måned',
      'Svar på kommentarer på hverdage',
      'Månedligt strategimøde',
      'Konkurrent- & trendanalyse',
    ],
  },
  {
    id: 'black',
    name: 'Black',
    tagline: 'Maksimal synlighed',
    idealFor:
      'Til virksomheder, der vil være førende i deres branche på sociale medier – og omsætte synlighed til målbart salg.',
    price: 17995,
    summary: [
      { value: '4', label: 'kanaler' },
      { value: '16', label: 'opslag / md.' },
      { value: '12', label: 'reels / md.' },
    ],
    plusLabel: 'Alt i Gold, plus:',
    highlights: [
      'LinkedIn som fjerde kanal',
      'Stories alle hverdage og 4 karruseller om måneden',
      '2 content-dage med fotograf & videograf om måneden',
      'Meta-annoncering inkl. styring og optimering',
      'Svar på beskeder (DM) på hverdage',
      'Dedikeret account manager',
    ],
  },
];

/** Værdi i sammenligningstabellen: true = inkluderet, false = ikke inkluderet, tekst = specifik værdi */
export type Cell = boolean | string;

export type ComparisonGroup = {
  title: string;
  rows: { label: string; note?: string; values: [Cell, Cell, Cell] }[];
};

export const comparison: ComparisonGroup[] = [
  {
    title: 'Kanaler',
    rows: [
      { label: 'Instagram', values: [true, true, true] },
      { label: 'Facebook', values: [true, true, true] },
      { label: 'TikTok', values: [false, true, true] },
      { label: 'LinkedIn', values: [false, false, true] },
    ],
  },
  {
    title: 'Indhold pr. måned',
    rows: [
      { label: 'Opslag (billeder & grafik)', values: ['8', '12', '16'] },
      { label: 'Karruseller', values: [false, '2', '4'] },
      { label: 'Reels / TikToks', values: ['2', '8', '12'] },
      { label: 'Stories', values: ['16', '36', 'Dagligt på hverdage'] },
    ],
  },
  {
    title: 'Produktion',
    rows: [
      {
        label: 'Content-dag med fotograf & videograf',
        values: ['Hvert kvartal', '1 om måneden', '2 om måneden'],
      },
      { label: 'Professionel redigering af foto & video', values: [true, true, true] },
      { label: 'Tekstforfatning & hashtags', values: [true, true, true] },
      { label: 'Grafiske skabeloner i jeres identitet', values: [true, true, true] },
    ],
  },
  {
    title: 'Strategi & rapportering',
    rows: [
      { label: 'SoMe-strategi ved opstart', values: [true, true, true] },
      { label: 'Contentplan til godkendelse', values: ['Månedlig', 'Månedlig', 'Månedlig'] },
      { label: 'Rapport med indsigter', values: ['Månedlig', 'Månedlig', 'Månedlig'] },
      { label: 'Strategimøde', values: [false, 'Månedligt', 'Månedligt + workshop hvert kvartal'] },
      { label: 'Konkurrent- & trendanalyse', values: [false, true, true] },
    ],
  },
  {
    title: 'Vækst & community',
    rows: [
      { label: 'Svar på kommentarer', values: [false, 'Hverdage', 'Hverdage'] },
      { label: 'Svar på beskeder (DM)', values: [false, false, 'Hverdage'] },
      {
        label: 'Meta-annoncering (Facebook & Instagram)',
        note: 'Annoncebudget betales separat',
        values: ['Tillæg', 'Tillæg', 'Inkluderet'],
      },
    ],
  },
  {
    title: 'Service',
    rows: [
      { label: 'Fast kontaktperson', values: [true, true, 'Dedikeret account manager'] },
      { label: 'Check-in-opkald', values: ['1 om måneden', '2 om måneden', 'Ugentligt'] },
      // TODO: Bekræft – kunders svartid må aldrig være længere end løftet til nye henvendelser (én hverdag)
      { label: 'Svartid på hverdage', values: ['Inden for 24 timer', 'Samme dag', 'Inden for 2 timer'] },
    ],
  },
];

/** Gælder for alle pakker */
export const includedInAll = [
  'Fast kontaktperson, der kender jeres forretning',
  'Strategi og contentplan, I godkender, før noget bliver postet',
  'Professionel fotografering, video, redigering og tekst',
  'Grafik i jeres visuelle identitet',
  'Månedlig rapport med konkrete anbefalinger',
  'Ingen skjulte gebyrer – én fast pris om måneden',
];

// TODO: Bekræft vilkår (løbetid, opsigelse, opstart)
export const pricingNote =
  'Alle priser er pr. måned ekskl. moms. Annoncebudget og statister faktureres separat, og kørsel ud over 30 km afregnes efter statens takst. Løbetid og opsigelse aftales ved opstart.';

export const formatPrice = (n: number) => new Intl.NumberFormat('da-DK').format(n);
