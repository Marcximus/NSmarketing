# Silberg Creative – hjemmeside

Hjemmeside for **Silberg Creative**, et SoMe-bureau, der står for social media management, content, annoncering og rapportering.
Sitet er bygget i [Astro](https://astro.build) som en hurtig, statisk hjemmeside. Det sætter ingen cookies og bruger ingen tredjepartsscripts.

## Sider

| Side | URL |
| --- | --- |
| Forside | `/` |
| Pakkeløsninger + tillægsydelser | `/pakkeloesninger/` (tillæg på `#tillaeg`) |
| Cases | `/cases/` |
| Om os | `/om-os/` |
| Karriere | `/karriere/` |
| Kontakt | `/kontakt/` |
| Privatlivspolitik / Cookiepolitik | `/privatlivspolitik/`, `/cookiepolitik/` |

## Ret indhold – uden at røre designet

Næsten al tekst, alle priser og alle kontaktoplysninger ligger samlet i `src/data/`:

| Fil | Indhold |
| --- | --- |
| `src/data/site.ts` | Telefon, e-mail, CVR, adresse, åbningstider, sociale medier, formular-endpoint, menu |
| `src/data/packages.ts` | De 3 pakker (Silver, Gold, Black), priser, indhold og sammenligningstabel |
| `src/data/addons.ts` | Tillægsydelser (statister, e-mail marketing, SEO osv.) og priser |
| `src/data/content.ts` | Ydelser, arbejdsproces, løfter, brancher, FAQ og kundeudtalelser |
| `src/data/cases.ts` | Cases/kunder med billeder |
| `src/data/team.ts` | Teamet og netværket af specialister |

Alt, der skal udfyldes eller bekræftes, er markeret med `TODO` i filerne.

## Billeder og logo – hvad vi skal bruge

Læg filerne direkte i chatten med Claude, eller upload dem til mappen `assets-inbox/` i GitHub-repoet ("Add file → Upload files"). Send dem i den bedst mulige kvalitet, uden at komprimere dem først. Vi konverterer og optimerer dem selv.

| Hvad | Format | Størrelse |
| --- | --- | --- |
| Logo (sort og hvid version) | **SVG**, PDF, AI eller EPS (vektor). Ellers PNG med gennemsigtig baggrund | min. 3000 px bred |
| Ikon/monogram (hvis det findes) | SVG | – |
| Hero-billede til forsiden | JPG/HEIC, liggende, med luft til tekst i venstre side | min. 2400 × 1600 px |
| Portræt af founder | JPG/HEIC, stående 4:5 | min. 1600 × 2000 px |
| Portrætter af team/freelancere (valgfrit) | JPG/HEIC, stående 4:5, gerne samme baggrund | min. 1200 × 1500 px |
| Behind-the-scenes fra shoots | 6–10 billeder, både liggende og stående | min. 2000 px |
| Cases (pr. kunde) | 1–3 billeder, 4:3 + kundenavn, branche, by, ydelser, kanaler, kort beskrivelse og evt. resultater | min. 1600 × 1200 px |
| Kundelogoer (med tilladelse) | SVG eller PNG med gennemsigtig baggrund | – |
| Kundeudtalelser (med tilladelse) | Citat + navn + virksomhed | – |

Indtil da bruger sitet midlertidige fotos fra Unsplash (se `src/assets/images/CREDITS.md`). Billederne erstattes ved at lægge en ny fil med **samme filnavn** i `src/assets/images/`.

Logoet i `public/brand/` er vektoriseret ud fra den JPG, vi fik. Har I den originale vektorfil, bør den bruges i stedet.

## Før lancering – tjekliste

- [ ] Priser på pakker og tillægsydelser (`packages.ts`, `addons.ts`)
- [ ] Pakkenavne (Silver / Gold / Black) godkendt
- [ ] CVR-nummer og adresse (`site.ts`). E-handelsloven § 7 kræver normalt, at hjemmesiden oplyser en geografisk adresse. Adressen vises automatisk i footer, på kontaktsiden og i privatlivspolitikken, når den er sat.
- [ ] Åbningstider og tidsfristen for "Bliv ringet op samme dag" (`site.ts` → `hours`, `callbackCutoff`)
- [ ] Links til egne profiler på Instagram, Facebook, LinkedIn og TikTok (`site.ts`)
- [ ] Formular-endpoint oprettet, fx gratis hos [Formspree](https://formspree.io) eller [Web3Forms](https://web3forms.com), og URL'en indsat i `site.ts` → `formEndpoint`. Indtil da åbner formularerne brugerens mailprogram.
- [ ] Svar i FAQ bekræftet (binding, opstart, rettigheder) (`content.ts`)
- [ ] Løfterne (svartid, fast kontaktperson osv.) bekræftet (`content.ts`)
- [ ] Rigtige cases, kundeudtalelser og team indsat. **Eksempelindholdet (markeret `placeholder: true` / "[Kundenavn]") må ikke gå live**, da det ville være vildledende markedsføring.
- [ ] Egne fotos i stedet for Unsplash-placeholders
- [ ] Privatlivspolitik gennemlæst og CVR indsat
- [ ] Opbevaringsfristerne i privatlivspolitikken bekræftet (afsnit 06)
- [ ] Tilføjes Google Analytics, Meta Pixel, YouTube, kort eller lignende: indfør samtykkebanner og opdater både cookiepolitik og privatlivspolitik (se kommentaren øverst i `src/pages/cookiepolitik.astro`)
- [ ] Domæne peger på hostingen, og `site` i `astro.config.mjs` / `url` i `site.ts` passer

## Udvikling

Kræver Node.js 20 eller nyere.

```bash
npm install
npm run dev       # udviklingsserver på http://localhost:4321
npm run build     # bygger det færdige site til dist/
npm run preview   # viser det byggede site lokalt
npm run check     # tjekker typer og Astro-filer
```

Marmorteksturen er genereret med `python3 scripts/generate-marble.py`.

## Hosting

`npm run build` giver en mappe (`dist/`) med rene HTML-, CSS- og billedfiler, som kan lægges på alle webhoteller. Anbefalet: **Vercel** eller **Netlify** (gratis, automatisk deploy fra GitHub, HTTPS inkluderet). Klassiske danske webhoteller som Simply.com og one.com virker også: upload indholdet af `dist/` via FTP.
