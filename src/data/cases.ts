// Cases / kunder. Vises på /cases/ og udvalgte på forsiden.
// TODO: Disse er eksempler (placeholder: true). Udskift med rigtige kunder, billeder og resultater.
// Indtil der er rigtige cases, skal uddrag beskrive hensigten med indholdet – ikke opnåede resultater
// (markedsføringsloven). Undgå også før/efter-formater for kosmetiske behandlinger.

import type { ImageMetadata } from 'astro';
import restaurant from '../assets/images/case-restaurant.jpg';
import hotel from '../assets/images/case-hotel.jpg';
import beauty from '../assets/images/case-beauty.jpg';
import interior from '../assets/images/case-interior.jpg';
import realestate from '../assets/images/case-realestate.jpg';
import cafe from '../assets/images/case-cafe.jpg';

export type CaseService = 'SoMe' | 'Video' | 'Foto' | 'Annoncering' | 'E-mail' | 'Statister';

export type Case = {
  id: string;
  client: string; // kundens navn
  industry: string; // branche – bruges som overskrift indtil rigtige navne er på plads
  location: string;
  excerpt: string;
  services: CaseService[];
  channels: ('instagram' | 'facebook' | 'tiktok' | 'linkedin')[];
  image: ImageMetadata;
  imageAlt: string;
  featured?: boolean;
  placeholder?: boolean;
};

export const cases: Case[] = [
  {
    id: 'restaurant',
    client: '[Kundenavn]',
    industry: 'Restaurant & cocktailbar',
    location: 'København',
    excerpt:
      'Et nyt visuelt univers med stemningsfulde reels fra køkkenet og baren – skabt til at fylde bordene på hverdage.',
    services: ['SoMe', 'Video', 'Foto'],
    channels: ['instagram', 'facebook', 'tiktok'],
    image: restaurant,
    imageAlt: 'Anrettet ret og cocktails i dæmpet restaurantbelysning',
    featured: true,
    placeholder: true,
  },
  {
    id: 'hotel',
    client: '[Kundenavn]',
    industry: 'Boutiquehotel',
    location: 'Nordsjælland',
    excerpt:
      'Indhold, der skal sælge oplevelsen, før gæsten ankommer – kombineret med annoncering mod weekendophold.',
    services: ['SoMe', 'Foto', 'Annoncering'],
    channels: ['instagram', 'facebook'],
    image: hotel,
    imageAlt: 'Lyst hotelværelse med naturlige materialer',
    featured: true,
    placeholder: true,
  },
  {
    id: 'beauty',
    client: '[Kundenavn]',
    industry: 'Skønhedsklinik',
    location: 'Aarhus',
    excerpt: 'Trygge, æstetiske reels og forklarende indhold, der gør behandlingerne nemme at forstå.',
    services: ['SoMe', 'Video', 'Statister'],
    channels: ['instagram', 'tiktok'],
    image: beauty,
    imageAlt: 'Rolig klinik med plejeprodukter',
    featured: true,
    placeholder: true,
  },
  {
    id: 'interior',
    client: '[Kundenavn]',
    industry: 'Interiørbutik & webshop',
    location: 'Online',
    excerpt: 'Produktfoto, stylede reels og nyhedsbreve, der binder sociale medier og webshop sammen.',
    services: ['SoMe', 'Foto', 'E-mail'],
    channels: ['instagram', 'facebook'],
    image: interior,
    imageAlt: 'Stylet stue med møbler i naturtoner',
    placeholder: true,
  },
  {
    id: 'realestate',
    client: '[Kundenavn]',
    industry: 'Ejendomsmægler',
    location: 'Storkøbenhavn',
    excerpt: 'Boligvideoer og LinkedIn-indhold, der skal styrke mæglerens lokale position.',
    services: ['SoMe', 'Video'],
    channels: ['instagram', 'linkedin'],
    image: realestate,
    imageAlt: 'Moderne bolig fotograferet udefra',
    placeholder: true,
  },
  {
    id: 'cafe',
    client: '[Kundenavn]',
    industry: 'Café & bageri',
    location: 'Odense',
    excerpt: 'Hverdagsindhold med varme og personlighed – og statister, der giver liv til caféen.',
    services: ['SoMe', 'Foto', 'Statister'],
    channels: ['instagram', 'facebook', 'tiktok'],
    image: cafe,
    imageAlt: 'Kaffe og bagværk på et cafébord',
    placeholder: true,
  },
];
