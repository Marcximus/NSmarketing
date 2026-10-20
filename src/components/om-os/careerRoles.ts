// Roller på /karriere/. Bruges både til netværkskortene og til rolle-feltet i ansøgningsformularen.
// `value` er den værdi, der sendes med formularen – og som kan forudfyldes via /karriere/?rolle=...#ansoeg

import type { IconName } from '../../data/icons';

export type CareerRole = {
  value: string;
  title: string;
  text: string;
  icon: IconName;
};

export type Opening = {
  title: string;
  type: string;
  location: string;
};

// Ledige stillinger på /karriere/. Tilføj kun rigtige stillinger her – opfind ikke opslag.
// Er listen tom, vises sektionen "Åbne stillinger" slet ikke. Titlen bruges også som valgmulighed i rolle-feltet.
export const openings: Opening[] = [];

export const careerRoles: CareerRole[] = [
  {
    value: 'Fotograf/videograf',
    title: 'Fotografer & videografer',
    text: 'Du skaber stilsikkert foto og video af produkter, interiør, mad og mennesker – og har styr på lys og komposition.',
    icon: 'camera',
  },
  {
    value: 'Statist/model',
    title: 'Statister & modeller',
    text: 'Du er tryg foran kameraet og vil gerne medvirke i reels, kampagner og på content-dage.',
    icon: 'user',
  },
  {
    value: 'Content creator',
    title: 'Content creators',
    text: 'Du kender formaterne på Instagram og TikTok og skaber indhold, der fanger fra første sekund.',
    icon: 'video',
  },
  {
    value: 'Grafiker',
    title: 'Grafikere',
    text: 'Du designer skabeloner, grafik og visuelle udtryk med sans for typografi og detaljer.',
    icon: 'pen',
  },
  {
    value: 'Praktikant',
    title: 'Praktikanter',
    text: 'Du studerer medier, marketing eller design og vil lære faget i praksis – tæt på rigtige kunder.',
    icon: 'rocket',
  },
  {
    value: 'Uopfordret ansøgning',
    title: 'Uopfordret ansøgning',
    text: 'Passer du ikke ind i boksene, men har noget særligt at byde på? Skriv til os alligevel.',
    icon: 'mail',
  },
];
