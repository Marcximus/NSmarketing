// Tillægsydelser, der kan lægges oven i enhver pakke. Vises på pakkesiden under #tillaeg.
// TODO: Alle priser er forslag – ret til jeres egne. Sæt price til null for "Pris efter aftale".

// Hvert tillæg kan linkes direkte med /pakkeloesninger/#tillaeg-<id> (fx #tillaeg-statister).

export type Addon = {
  id: string;
  name: string;
  description: string;
  price: string | null; // fx 'Fra 1.500 kr.' – null = 'Pris efter aftale'
  unit?: string; // fx 'pr. md.' eller 'pr. person'
};

export type AddonCategory = {
  id: string;
  title: string;
  intro: string;
  items: Addon[];
};

export const addonCategories: AddonCategory[] = [
  {
    id: 'produktion',
    title: 'Produktion & content',
    intro: 'Mere og større indhold – fra statister til ekstra content-dage.',
    items: [
      {
        id: 'statister',
        name: 'Statister & modeller',
        description:
          'Vi caster og booker statister, modeller og håndmodeller til jeres optagelser, så indholdet får liv og ansigter.',
        price: 'Fra 1.500 kr.',
        unit: 'pr. person pr. optagedag',
      },
      {
        id: 'content-dag',
        name: 'Ekstra content-dag',
        description:
          'En ekstra dag med fotograf og videograf til kampagner, events, nyheder eller sæsonindhold.',
        price: 'Fra 4.500 kr.',
        unit: 'pr. dag',
      },
      {
        id: 'video',
        name: 'Video & kampagnefilm',
        description:
          'Produktvideoer, kampagnefilm og reels – fra idé og manuskript til færdigklippet film.',
        price: 'Fra 3.900 kr.',
        unit: 'pr. film',
      },
      {
        id: 'fotopakke',
        name: 'Fotopakke',
        description:
          'Professionelle produkt-, portræt- og stemningsbilleder til hjemmeside, sociale medier og print.',
        price: 'Fra 3.500 kr.',
      },
      {
        id: 'frikob',
        name: 'Frikøb af content',
        description:
          'Fulde rettigheder til billeder og video, så I frit kan bruge dem i print, på hjemmesiden og i egne kampagner.',
        price: null,
      },
      {
        id: 'grafik',
        name: 'Grafisk design & print',
        description: 'Flyers, menukort, skilte, præsentationer og skabeloner i jeres visuelle identitet.',
        price: 'Fra 1.200 kr.',
        unit: 'pr. opgave',
      },
    ],
  },
  {
    id: 'annoncering',
    title: 'Annoncering & vækst',
    intro: 'Betalt synlighed, der omsætter opmærksomhed til kunder.',
    items: [
      {
        id: 'meta-ads',
        name: 'Meta-annoncering',
        description:
          'Målrettede kampagner på Facebook og Instagram. Opsætning, målgrupper, test og løbende optimering. Annoncebudget betales separat.',
        price: 'Fra 2.500 kr.',
        unit: 'pr. md.',
      },
      {
        id: 'tiktok-ads',
        name: 'TikTok-annoncering',
        description:
          'Annoncer i TikToks eget format, der når en yngre og meget engageret målgruppe. Annoncebudget betales separat.',
        price: 'Fra 2.500 kr.',
        unit: 'pr. md.',
      },
      {
        id: 'boost',
        name: 'Boost af opslag',
        description:
          'Strategisk boost af jeres bedste opslag for ekstra rækkevidde i lokalområdet. Annoncebudget betales separat.',
        price: 'Fra 750 kr.',
        unit: 'pr. md.',
      },
      {
        id: 'influencer',
        name: 'Influencermarketing',
        description:
          'Vi finder, kontakter og koordinerer samarbejder med influencers, der passer til jeres brand.',
        price: null,
      },
    ],
  },
  {
    id: 'synlighed',
    title: 'Synlighed ud over SoMe',
    intro: 'Bliv fundet på Google og hold kunderne tæt i indbakken.',
    items: [
      {
        id: 'seo',
        name: 'SEO',
        description:
          'Søgeordsanalyse, teknisk og on-page optimering samt indhold, der får jer fundet på Google.',
        price: 'Fra 3.500 kr.',
        unit: 'pr. md.',
      },
      {
        id: 'email',
        name: 'E-mailmarketing',
        description:
          'Nyhedsbreve og automatiske flows, der holder kunderne varme og skaber genkøb.',
        price: 'Fra 2.000 kr.',
        unit: 'pr. md.',
      },
      {
        id: 'web',
        name: 'Hjemmeside & landingssider',
        description: 'Skarpe sider, der matcher jeres SoMe-univers og konverterer besøgende til kunder.',
        price: null,
      },
    ],
  },
  {
    id: 'kanaler',
    title: 'Kanaler & community',
    intro: 'Flere platforme og en aktiv dialog med jeres følgere.',
    items: [
      {
        id: 'linkedin',
        name: 'LinkedIn-management',
        description:
          'Professionel tilstedeværelse på LinkedIn for virksomheden og ledelsen – med opslag, der styrker jeres position.',
        price: 'Fra 2.500 kr.',
        unit: 'pr. md.',
      },
      {
        id: 'ekstra-kanal',
        name: 'Ekstra kanal',
        description: 'Udvid jeres pakke med TikTok, Pinterest eller en anden platform.',
        price: 'Fra 1.995 kr.',
        unit: 'pr. md.',
      },
      {
        id: 'profil',
        name: 'Oprettelse & optimering af profiler',
        description:
          'Vi opretter eller gennemgår jeres profiler med bio, profilbillede, highlights, links og kontaktinfo.',
        price: 'Fra 1.500 kr.',
        unit: 'engangsbeløb',
      },
      {
        id: 'community',
        name: 'Kundehenvendelser & beskeder',
        description: 'Vi besvarer kommentarer og beskeder i jeres egen tone – også når I har travlt.',
        price: 'Fra 1.500 kr.',
        unit: 'pr. md.',
      },
      {
        id: 'engagement',
        name: 'Interaktion & engagement',
        description:
          'Aktiv interaktion med følgere, samarbejdspartnere og lokale profiler for at øge jeres rækkevidde.',
        price: 'Fra 1.000 kr.',
        unit: 'pr. md.',
      },
      {
        id: 'repost',
        name: 'Repost af stories',
        description: 'Vi deler kunders og samarbejdspartneres omtale af jer, så flere kan se, hvad andre siger om jer.',
        price: 'Fra 500 kr.',
        unit: 'pr. md.',
      },
    ],
  },
];

export const addonNote = 'Alle priser er ekskl. moms. Kørsel ud over 30 km afregnes efter statens takst.';
