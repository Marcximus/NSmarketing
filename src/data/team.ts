// Teamet bag Silberg Creative. Vises på /om-os/.
// TODO: Udfyld navne og billeder på de personer, I rent faktisk samarbejder med
// (fastansatte, freelancere og faste partnere tæller alle med). Personer uden navn vises som rolle.

import type { IconName } from './icons';

export type TeamMember = {
  role: string;
  name: string | null;
  description: string;
  icon: IconName;
  lead?: boolean;
};

export const team: TeamMember[] = [
  {
    role: 'Founder & Creative Director',
    name: null, // TODO: fx 'N. Silberg'
    description: 'Står i spidsen for strategi, kreativ retning og kvalitet i alt, hvad vi leverer.',
    icon: 'sparkle',
    lead: true,
  },
  {
    role: 'Social Media Manager',
    name: null,
    description: 'Jeres faste kontaktperson, der planlægger, poster og følger op hver dag.',
    icon: 'calendar',
  },
  {
    role: 'Fotograf & videograf',
    name: null,
    description: 'Fanger jeres produkter, rum og mennesker på content-dagene.',
    icon: 'camera',
  },
  {
    role: 'Content editor',
    name: null,
    description: 'Klipper reels, retoucherer billeder og skriver tekster, der lyder som jer.',
    icon: 'video',
  },
  {
    role: 'Grafisk designer',
    name: null,
    description: 'Skaber skabeloner og grafik, der holder jeres visuelle identitet skarp.',
    icon: 'pen',
  },
  {
    role: 'Performance specialist',
    name: null,
    description: 'Planlægger, optimerer og rapporterer på jeres annoncering.',
    icon: 'target',
  },
];

// Netværk af specialister, der tilknyttes efter behov
export const network = [
  'Statister & modeller',
  'Influencers & content creators',
  'Copywritere',
  'SEO-specialister',
  'Webudviklere',
  'Droneoperatører',
];
