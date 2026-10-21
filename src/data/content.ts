// Fælles indhold, der bruges på flere sider: ydelser, arbejdsproces, løfter, brancher, FAQ og udtalelser.

export const services: { title: string; text: string }[] = [
  {
    title: 'Strategi & styring',
    text: 'Vi lægger strategien, planlægger indholdet og står for den daglige drift – med klare mål for rækkevidde, engagement og salg.',
  },
  {
    title: 'Produktion & content',
    text: 'Vores fotografer, videografer og redaktører kommer ud til jer og skaber billeder, reels og stories, der ligner jer – bare skarpere.',
  },
  {
    title: 'Annoncering & vækst',
    text: 'Målrettet annoncering på Meta og TikTok, der omsætter opmærksomhed til henvendelser, bookinger og salg.',
  },
  {
    title: 'Analyse & rapportering',
    text: 'Hver måned får I en rapport, som vi gennemgår sammen. Så ved I altid, hvad der virker, og hvad vi gør næste måned.',
  },
];

export const process: { number: string; title: string; text: string }[] = [
  {
    number: '01',
    title: 'Uforpligtende møde',
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
// '24 timer på hverdage' svarer til "Vi svarer inden for én hverdag" på resten af sitet. Svartid for kunder
// afhænger af pakken og står i sammenligningstabellen i packages.ts – den må aldrig være længere end dette.
// '1–2 uger' matcher FAQ'en "Hvor hurtigt kan vi komme i gang?".
// Løfterne skrives som sætninger, ikke som et tal-bånd.
export const commitments: string[] = [
  'Én fast kontaktperson til jer',
  'Svar inden for 24 timer på hverdage',
  'Opstart 1–2 uger efter første møde',
  'Vi mestrer Instagram, Facebook, TikTok og LinkedIn',
];

export const industries = [
  'Restauranter & caféer',
  'Hoteller & oplevelser',
  'Skønhed & wellness',
  'Mode & detailhandel',
  'Interiør & bolig',
  'Ejendomme',
  'Liberale erhverv',
  'Sundhed & klinikker',
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
    a: 'Ophavsretten til foto og video ligger hos os, og I får brugsret til indholdet på jeres egne sociale medier – også i de annoncer, vi kører for jer. Vil I bruge det i print, på hjemmesiden eller i egne kampagner, kan I frikøbe de fulde rettigheder som tillæg.',
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
    a: 'Ja. Vi arbejder med virksomheder i hele landet og planlægger content-dage, så de passer ind i jeres hverdag. Kørsel ud over 30 km fra os afregnes efter statens takst.',
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
