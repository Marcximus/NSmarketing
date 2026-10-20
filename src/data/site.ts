// Centrale oplysninger om virksomheden. Ret her, så opdateres hele hjemmesiden.
// Felter markeret med TODO skal udfyldes/bekræftes før lancering.

export const site = {
  name: 'Silberg Creative',
  url: 'https://silbergcreative.dk',
  tagline: 'Social media management & content',
  description:
    'Silberg Creative er et SoMe-bureau, der håndterer strategi, content, annoncering og rapportering på Instagram, Facebook, TikTok og LinkedIn – alt samlet i én fast månedlig pakke.',

  phone: '91 91 91 60',
  phoneHref: 'tel:+4591919160',
  email: 'NS@SilbergCreative.dk',
  emailHref: 'mailto:NS@SilbergCreative.dk',

  // TODO: Udfyld når det er på plads – felter med null vises ikke på siden.
  cvr: null as string | null,
  address: null as { street: string; zip: string; city: string } | null,
  serviceArea: 'Vi arbejder med virksomheder i hele Danmark',

  // TODO: Bekræft tidsfristen for "Bliv ringet op samme dag" på kontaktsiden. null = linjen vises ikke.
  callbackCutoff: '15.00' as string | null,

  // TODO: Bekræft åbningstider
  hours: [
    { days: 'Mandag – torsdag', time: '09.00 – 17.00' },
    { days: 'Fredag', time: '09.00 – 16.00' },
    { days: 'Lørdag – søndag', time: 'Efter aftale' },
  ],

  // TODO: Indsæt links til jeres egne profiler
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
    { label: 'TikTok', href: 'https://www.tiktok.com/', icon: 'tiktok' },
  ],

  // Formularer sendes hertil (fx Formspree eller Web3Forms). Tom streng = åbner mailprogram som fallback.
  // TODO: Opret gratis endpoint og indsæt URL'en her.
  formEndpoint: '',
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Pakkeløsninger', href: '/pakkeloesninger/' },
  { label: 'Tillægsydelser', href: '/pakkeloesninger/#tillaeg' },
  { label: 'Cases', href: '/cases/' },
  { label: 'Om os', href: '/om-os/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const footerNav: NavItem[] = [
  { label: 'Pakkeløsninger', href: '/pakkeloesninger/' },
  { label: 'Tillægsydelser', href: '/pakkeloesninger/#tillaeg' },
  { label: 'Cases', href: '/cases/' },
  { label: 'Om Silberg Creative', href: '/om-os/' },
  { label: 'Karriere', href: '/karriere/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const legalNav: NavItem[] = [
  { label: 'Privatlivspolitik', href: '/privatlivspolitik/' },
  { label: 'Cookiepolitik', href: '/cookiepolitik/' },
];
