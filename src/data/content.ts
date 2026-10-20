// Fælles indhold, der bruges på flere sider: ydelser, arbejdsproces, nøgletal, brancher, FAQ og udtalelser.

import type { IconName } from './icons';

export const services: { number: string; title: string; text: string; icon: IconName }[] = [
  {
    number: '01',
    title: 'Strategi & styring',
    text: 'Vi lægger strategien, planlægger indholdet og står for den daglige drift – med klare mål for rækkevidde, engagement og salg.',
    icon: 'compass',
  },
  {
    number: '02',
    title: 'Content production',
    text: 'Vores fotografer, videografer og redaktører kommer ud til jer og skaber billeder, reels og stories, der ligner jer – bare skarpere.',
    icon: 'camera',
  },
  {
    number: '03',
    title: 'Annoncering & vækst',
    text: 'Målrettet annoncering på Meta og TikTok, der omsætter opmærksomhed til henvendelser, bookinger og salg.',
    icon: 'target',
  },
  {
    number: '04',
    title: 'Analyse & rapportering',
    text: 'Hver måned får I en rapport, som vi gennemgår sammen. Så ved I altid, hvad der virker, og hvad vi gør næste måned.',
    icon: 'chart',
  },
];

export const process: { number: string; title: string; text: string }[] = [
  {
    number: '01',
    title: 'Uforpligtende samtale',
    text: 'Vi lærer jeres forretning, mål og målgruppe at kende – og anbefaler den pakke, der passer.',
  },
  {
    number: '02',
    title: 'Strategi & contentplan',
    text: 'Vi lægger en skræddersyet strategi og en contentplan for måneden, som I godkender.',
  },
  {
    number: '03',
    title: 'Produktion',
    text: 'Vi kommer ud til jer, fotograferer, filmer, redigerer og skriver teksterne.',
  },
  {
    number: '04',
    title: 'Udgivelse & optimering',
    text: 'Vi poster, følger op, måler resultaterne og justerer løbende for at skabe vækst.',
  },
];

// TODO: Bekræft at I kan stå inde for disse løfter
export const promises: { value: string; label: string }[] = [
  { value: '4', label: 'platforme vi mestrer' },
  { value: '1', label: 'fast kontaktperson til jer' },
  { value: '24 t', label: 'maks. svartid på hverdage' },
  { value: '100 %', label: 'skræddersyet indhold' },
];

export const industries = [
  'Restauranter & caféer',
  'Hoteller & oplevelser',
  'Skønhed & wellness',
  'Mode & retail',
  'Interiør & bolig',
  'Ejendomme',
  'Liberale erhverv',
  'Sundhed & klinikker',
];

export const disciplines = [
  'Social media management',
  'Content creation',
  'Reels & TikTok',
  'Fotografering',
  'Meta-annoncering',
  'Influencer marketing',
  'E-mail marketing',
  'SEO',
];

// TODO: Bekræft svarene – især binding, opstart og rettigheder
export const faq: { q: string; a: string }[] = [
  {
    q: 'Hvor hurtigt kan vi komme i gang?',
    a: 'Typisk inden for 1–2 uger efter vores første møde. Vi starter med et opstartsmøde, hvor vi lærer jer at kende, og derefter er jeres første contentplan klar til godkendelse.',
  },
  {
    q: 'Er der binding på pakkerne?',
    a: 'Vi aftaler løbetid og opsigelse ved opstart. Sociale medier kræver kontinuitet, så vi anbefaler mindst tre måneder for at se tydelige resultater.',
  },
  {
    q: 'Skal vi selv levere billeder og video?',
    a: 'Nej. Vi kommer ud og producerer indholdet for jer. Har I allerede gode billeder, bruger vi dem gerne som supplement.',
  },
  {
    q: 'Får vi lov at godkende indholdet, før det bliver postet?',
    a: 'Ja. Hver måned modtager I en contentplan med billeder og tekster, som I godkender, før noget bliver lagt op.',
  },
  {
    q: 'Hvem ejer indholdet?',
    a: 'I må frit bruge indholdet på jeres sociale medier. Vil I også bruge det i annoncer, print eller på hjemmesiden, kan I frikøbe det som tillæg.',
  },
  {
    q: 'Er annoncebudgettet inkluderet i prisen?',
    a: 'Nej. Annoncebudgettet betales direkte til Meta eller TikTok, så I altid har fuldt overblik. Vi står for opsætning, målretning og optimering.',
  },
  {
    q: 'Kan vi skifte pakke undervejs?',
    a: 'Ja. I kan opgradere eller tilføje tillægsydelser, når behovet ændrer sig – fx op til en sæson eller en kampagne.',
  },
  {
    q: 'Arbejder I med virksomheder i hele Danmark?',
    a: 'Ja. Vi arbejder med virksomheder i hele landet og planlægger content-dage, så de passer ind i jeres hverdag.',
  },
];

// TODO: Erstat med rigtige udtalelser fra kunder (med deres tilladelse).
// Udtalelser markeret placeholder: true er eksempler og skal udskiftes før lancering.
export const testimonials: { quote: string; name: string; company: string; placeholder?: boolean }[] = [
  {
    quote:
      'Vi har fået en profil, vi er stolte af at vise frem – og vi mærker det på antallet af bookinger. Samarbejdet er nemt, og de kender vores forretning ud og ind.',
    name: '[Kundens navn]',
    company: '[Virksomhed]',
    placeholder: true,
  },
  {
    quote:
      'Endelig slipper vi for at tænke på, hvad vi skal poste. Indholdet er gennemført, og rapporterne gør det tydeligt, hvad der virker.',
    name: '[Kundens navn]',
    company: '[Virksomhed]',
    placeholder: true,
  },
  {
    quote:
      'Professionelle fra første møde. Content-dagene er velforberedte, og indholdet ligger på et niveau, vi aldrig selv kunne have skabt.',
    name: '[Kundens navn]',
    company: '[Virksomhed]',
    placeholder: true,
  },
];
