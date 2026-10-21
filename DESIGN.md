---
name: Silberg Creative
description: Stille luksus for et dansk SoMe-bureau – Playfair i ink, hårstreger, guld som accent, mørkebrune bånd og marmor få, bevidste steder.
colors:
  white: "#ffffff"
  paper: "#faf7f2"
  beige: "#efe7dc"
  sand: "#dccfbe"
  line: "#e4dbcf"
  ink: "#14110f"
  ink-2: "#4b433d"
  muted: "#6f645b"
  field: "#8a7d70"
  brown: "#3a2a21"
  brown-deep: "#241914"
  gold: "#b08d57"
  gold-ink: "#7d5e2e"
  gold-light: "#d4b98a"
  cream: "#f3eee7"
  cream-muted: "#cdbfae"
  error: "#9b2c2c"
  error-on-dark: "#f2b8a8"
typography:
  display:
    fontFamily: "Playfair Display, Times New Roman, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.2rem + 4.4vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Playfair Display, Times New Roman, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4.2vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline-md:
    fontFamily: "Playfair Display, Times New Roman, Georgia, serif"
    fontSize: "clamp(2rem, 1.25rem + 2.6vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  display-compact:
    fontFamily: "Playfair Display, Times New Roman, Georgia, serif"
    fontSize: "clamp(2.75rem, 1rem + 7vh, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  display-landscape:
    fontFamily: "Playfair Display, Times New Roman, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  numeral:
    fontFamily: "Playfair Display, Times New Roman, Georgia, serif"
    fontSize: "clamp(4.5rem, 2.5rem + 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "lnum"
  quote:
    fontFamily: "Playfair Display, Times New Roman, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.35
  title-lg:
    fontFamily: "Playfair Display, Times New Roman, Georgia, serif"
    fontSize: "clamp(1.6rem, 1.3rem + 1vw, 2.1rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Playfair Display, Times New Roman, Georgia, serif"
    fontSize: "clamp(1.4rem, 1.1rem + 0.9vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Jost, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.25
  lead:
    fontFamily: "Jost, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 0.9rem + 0.6vw, 1.375rem)"
    fontWeight: 300
    lineHeight: 1.65
  body-lg:
    fontFamily: "Jost, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Jost, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: "Jost, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Jost, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Jost, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.28em"
  label-min:
    fontFamily: "Jost, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.16em"
  button:
    fontFamily: "Jost, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.16em"
  price:
    fontFamily: "Playfair Display, Times New Roman, Georgia, serif"
    fontSize: "clamp(2.4rem, 2rem + 1vw, 2.9rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "lnum, tnum"
rounded:
  none: "0px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4rem"
  "9": "6rem"
  gutter: "clamp(1.25rem, 0.5rem + 3.5vw, 3.5rem)"
  section-y: "clamp(4.5rem, 3rem + 6vw, 8.75rem)"
  measure: "30em"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.9rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.brown}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.9rem"
    height: "3.25rem"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-gold:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.brown-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.9rem"
    height: "3.25rem"
  button-gold-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.brown-deep}"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.9rem"
    height: "3.25rem"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1rem"
    height: "3.25rem"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.label-min}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.7rem"
  tag-gold:
    backgroundColor: "transparent"
    textColor: "{colors.gold-ink}"
    typography: "{typography.label-min}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.7rem"
  badge-recommended:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.brown-deep}"
    typography: "{typography.label-min}"
    rounded: "{rounded.none}"
---

# Design System: Silberg Creative

## Overview

**Creative North Star: "Stille luksus"**

Silberg Creative skal føles som et større, etableret bureau uden at råbe. Identiteten bæres af store Playfair-overskrifter i ink, hårstreger i stedet for bokse, guld som accent på knapper, streger og ikoner, mørkebrune bånd og marmor, der kun ses få og bevidste steder. Alt er skarpt: ingen runde hjørner, ingen skygger som pynt, ingen gradient-tekst. Kunden ser materialer (papir, messing, marmor, mørkt træ) frem for effekter.

Sitet er et Persuade-site (forside, pakker, cases, om os, karriere, kontakt) med to Read-sider (privatlivs- og cookiepolitik). På Persuade-siderne arbejder rytmen med store overskrifter, rolig luft og ét forfattet øjeblik: forsidens hero, hvor billedet sætter sig, og H1 afdækkes nedefra som et tæppe, der går op. Resten står stille. På Read-siderne er ambitionen præcision: en læsespalte på cirka 70 tegn, nummererede afsnit og en indholdsfortegnelse.

Skabelon-ritualet er bevidst fjernet: ingen kicker over overskrifter, ingen kursive guldord i overskrifter (undtagen forsidens ene "scene"), ingen nummererede ikonkort, intet tal-bånd, ingen marquee og ingen scroll-reveal. Hver overskrift skal bære sig selv.

**Key Characteristics:**
- Playfair Display (matcher logoets serif-wordmark) til overskrifter, Jost til brødtekst, kontroller og data.
- Varm papirgrund og beige sektioner; mørkebrune bånd som kontrast; guld kun som accent.
- Hårstreger (1px) strukturerer indhold; kort og fliser undgås.
- Marmor som materiale, kun hvor årerne kan ses.
- Spærrede versaler kun på data og kontroller, aldrig som kicker.

## Colors

En varm, dæmpet palet fra kundens brief (hvid, sort, mørkebrun, beige, guld, marmor), hvor guld er krydderiet og ikke grunden.

### Primary
- **Ink** (`ink`): Al primær tekst og primærknappen på lyse flader. Næsten sort med varm undertone, så den aldrig bliver hård mod papiret.
- **Mørkebrun** (`brown`): Bånd og flader med kontrast (løfter, CTA-bånd, Gold-pakken, kontaktkortet) og hover på primærknappen.
- **Dyb mørkebrun** (`brown-deep`): Footer, opkaldsbåndet, udtalelser på cases og den mørke marmor. `theme-color` over forsidens hero.

### Secondary
- **Messing-guld** (`gold`): Dekorativ guld – hårstreger med betydning, flueben, ikoner, rammer bag billeder, aktiv menu-understregning. Aldrig til brødtekst.
- **Guld som tekst** (`gold-ink`): Guld, der skal kunne læses på lyse flader (AA): trin-numre, små datamærker, hover på tekstlinks, caret.
- **Lys guld** (`gold-light`): Guld på mørke flader: guldknappen, badges som "Vores anbefaling", fokusring og markering på mørk, forsidens kursive "scene".

### Neutral
- **Papir** (`paper`): Sidens grundfarve. Pinned af briefet (beige/creme), også selvom detektoren kalder det cream-palette.
- **Beige** (`beige`): Skiftende sektioner (pakker, principper, FAQ, ansøgning).
- **Hvid** (`white`): Kort og formularfelter, der skal løfte sig let fra papiret.
- **Sand** (`sand`): Hårstreger og tag-kanter på beige.
- **Hårstreg** (`line`): Hårstreger på papir og hvid.
- **Sekundær tekst** (`ink-2`) og **dæmpet tekst** (`muted`): Leads, beskrivelser og meta. Begge holder AA på papir, hvid og beige.
- **Feltkant** (`field`): Kanten på inputs (3:1 mod baggrunden, WCAG 1.4.11).
- **Creme** (`cream`) og **dæmpet creme** (`cream-muted`): Tekst på mørkebrune flader.
- **Fejl** (`error`, `error-on-dark`): Fejltekst og fejlkant på lyse og mørke flader.

Hårstreger på mørke flader er `--line-on-dark`: creme ved 16 % via `color-mix`. Gennemsigtigheder skrives altid som `color-mix(in srgb, var(--token) X%, transparent)`, aldrig som nye hex- eller rgba-værdier.

### Named Rules
**The Brass Rule.** Guld er en accent: knapper på mørk, streger, ikoner, badges og små datamærker. Guld bruges aldrig til at farve et ord i en overskrift.

**The Pinned Palette Rule.** Papir, beige, mørkebrun og marmor er kundens valg. De erstattes ikke af "mere originale" farver, selvom en detektor foreslår det.

## Typography

**Display Font:** Playfair Display (med Times New Roman, Georgia)
**Body Font:** Jost (med Helvetica Neue, Arial)

**Character:** En høj-kontrast serif, der ekkoer logoets "Silberg"-wordmark, mod en geometrisk, let sans, der ekkoer det spærrede "CREATIVE". Overskrifterne står roman i ink, og hierarkiet bæres af størrelse og placering, ikke af farve eller kursiv.

### Hierarchy
- **Display** (400, clamp 2.75–4.75rem, 1.02): Kun forsidens H1. Det eneste sted med kursiv i en overskrift: ordet "scene" i lys guld.
- **Headline lg** (400, clamp 2.5–4.5rem, 1.08): Undersidernes H1 i PageHero. Altid et trin under display.
- **Display compact / landscape** (400, clamp 2.75–4.25rem / 2.25rem): Samme heroer (forsiden og PageHero) på lave laptop-skærme og på telefon på tværs.
- **Headline md** (400, clamp 2–3.25rem, 1.08): Sektions-H2.
- **Numeral** (400, clamp 4.5–6rem, lining-tal): Det dekorative 404-tal. Proces-numrene på forsiden bruger samme stemme i et mindre trin (2.75–4.25rem).
- **Quote** (400 kursiv, clamp 1.5–2.25rem, 1.35): Fremhævede citater.
- **Title lg** (400, clamp 1.6–2.1rem, 1.2): Serif-mellemtrin – tillægskategorier, netværksboksen og telefonnummeret i kontaktkortet. Løfte-titlen og juridiske afsnitstitler går fra 1.6 op til 2.25rem.
- **Title** (400, clamp 1.4–1.75rem, 1.25): H3 og titler i redaktionelle lister.
- **Title sm** (Jost 500, 1.25rem): H4 og titler i Read-mode (fx "Kort fortalt").
- **Lead** (Jost 300, clamp 1.15–1.375rem, 1.65): Indledninger, max-width `--measure`.
- **Body lg** (Jost 400, 1.1875rem): Små serif-/sans-titler i hjælpebokse og pakkevælgeren, juridiske termer.
- **Body** (Jost 400, 1.0625rem, 1.7): Brødtekst. Længere tekst har max-width `--measure` (30em, cirka 70 tegn; em-baseret, så den følger skriftstørrelsen).
- **Body md / sm** (Jost 400, 0.9375rem / 0.875rem): Beskrivelser i lister, kort, tabeller og prislister.
- **Label** (Jost 500, 0.75rem, 0.28em, versaler): Formularlabels, tabelgruppe- og kolonnehoveder, footer-kolonnetitler, topbar.
- **Label min** (Jost 500, 0.6875rem, 0.16em, versaler): Tags, badges, enheder. 0.6875rem (11 px) er gulvet; intet UI-tekst er mindre.
- **Pris** (Playfair 400, lining- og tabulære tal): Priser og nøgletal.

Overskrifter har `text-wrap: balance`; p, li, dd, blockquote, figcaption og tabelceller har `text-wrap: pretty`. Tabeller og prislister bruger tabulære lining-tal (`.tnum` eller den globale table-regel). Citater (blockquote) står i kursiv Playfair – det er redaktionel konvention, ikke en accent.

Komponenter må kun bruge trin fra rampen ovenfor (eller deres endepunkter i en clamp). Et nyt trin skal tilføjes her først – ellers melder Impeccables `design-system-font-size`-regel drift.

### Named Rules
**The No-Kicker Rule.** Ingen label-blok direkte over en h1–h3, heller ikke som hero-chip. Bærer labelen information, skrives den ind i overskriften eller leadet.

**The Roman Heading Rule.** `em` i overskrifter neutraliseres globalt (arver stil og farve). Fremhævning sker med ordvalg, størrelse, vægt og placering. Eneste undtagelse er forsidens "scene", som styles lokalt i HomeHero.

**The Tracked Caps Rule.** Spærrede versaler bruges kun på data og kontroller: labels, tabelhoveder, tags, badges, enheder, meta-rækker ("Eksempel · København"), knapper og tekstlinks.

## Layout

Containeren er 1280px plus gutter (`clamp(1.25rem, 0.5rem + 3.5vw, 3.5rem)`). Sektioner har `--section-y` (clamp 4.5–8.75rem) lodret luft; mere luft over en overskrift end under den. Sektionshoveder findes i tre varianter: venstre, centreret og split (H2 til venstre, lead til højre fra 900px, bundjusteret).

Indhold, der ellers ville være et grid af ens kort, sættes som **redaktionel liste** (`.ruled-list`): en hårstreg over hvert punkt, ingen bokse, én kolonne på mobil, to fra 720px (`--2`) og tre fra 960px (`--3`). Tillæg sættes som **prisliste** (navn og beskrivelse til venstre, pris højrestillet). Pakkerne er tre kort med subgrid, så navne, priser, nøgletal og knapper flugter.

Responsivt: alt skal være førsteklasses ved 390×844, 820×1180 og 1440×900. Lave skærme har egne regler: på laptop (min-width 1024px, max-height 820px) og på telefon på tværs (max-height 500px) bliver hero-H1 og hero-luft mindre, og `--header-h` er 64px på liggende telefon. Touch-mål er mindst 44px (`@media (pointer: coarse)`), og dekorativ hover ligger i `@media (hover: hover)`.

## Elevation & Depth

Fladt som udgangspunkt. Dybde skabes af tonale lag (papir → hvid → beige → mørkebrun), 1px hårstreger og en forskudt guldramme bag udvalgte billeder (`.frame-gold`). Den eneste skygge er en blød, forskudt `--shadow-soft` (0 24px 60px -30px, dyb mørkebrun ved 35 %) på flydende kort som teamkortet i forsidens intro. `backdrop-filter` bruges kun funktionelt på det, der klæber (sticky-headeren og tillægsnavigationen på mobil), så de forbliver læselige over indhold, der scroller under – aldrig som glas-pynt.

### Named Rules
**The Flat-By-Default Rule.** Ingen glød, ingen hårde blokskygger, ingen glas som pynt. Hvis noget skal løftes, sker det med en tonal flade eller en hårstreg.

**The Visible Marble Rule.** Marmor er PINNED brandmateriale og bruges kun, hvor årerne kan ses, via de delte klasser: `.marble` (lys, papirvask ≤ cirka 85 % via `--marble-wash`) og `.marble.marble--dark` (invert, sepia 0,5 og screen ved cirka 0,4). Tilladte steder: PageHero, forsidens proces, 404, founder-kortet på Om os og udtalelserne på Cases. Alle andre flader er flad token-farve. Under forced colors skjules marmoren.

## Shapes

Skarpe hjørner overalt (`--radius: 0`): knapper, felter, kort, tags, badges og billeder. Formsproget er rektangler, 1px linjer og små guldromber som punkttegn i lister. Linjer, markører og ikoner, der bærer funktion (menuknap, accordion-plus, listemarkører, "ikke inkluderet"-streger), tegnes med border eller currentColor, så de overlever Windows' høj kontrast.

## Components

### Buttons
Rolige, spærrede og skarpe.
- **Shape:** Skarpe hjørner (0px), min-højde 3.25rem, 1px kant.
- **Primary:** Ink-flade med papirtekst på lyse sektioner; hover skifter til mørkebrun.
- **Outline:** Transparent med ink-kant; hover fylder med ink.
- **Gold (på mørk):** Lys guld med dyb mørkebrun tekst; hover skifter til creme. Det er den primære handling på mørkebrune bånd.
- **Outline light (på mørk):** Creme tekst og creme kant ved 55 %.
- **Hover / Focus:** Farveskift og pilen rykker 4px (kun med mus). Fokus er en 2px guldring (gold-ink på lys, gold-light på mørk) med 3px offset.

### Text links
Spærrede versaler i ink med en 1px understregning, der trækker sig tilbage mod højre ved hover og skifter til gold-ink. Brødtekst-links har en guldtonet understregning (1px, offset 0.25em).

### Chips (tags)
- **Style:** Transparent, 1px sand-kant, label-min i ink-2. Guldvarianten har guldkant og gold-ink-tekst.
- **Brug:** Ydelser på cases, roller på karriere, status i cookiepolitikken. Filterknapperne på cases er kontroller med aria-pressed, ikke tags.

### Cards / Containers
- **Corner Style:** 0px.
- **Background:** Hvid på papir/beige; mørkebrun til den fremhævede pakke og kontaktkortet.
- **Shadow Strategy:** Ingen (se Elevation & Depth).
- **Border:** 1px line eller sand.
- **Brug:** Kun hvor indholdet er en reel enhed (pakker, formularer, kontaktkort). Lister af ydelser, principper, roller og brancher er `.ruled-list`, ikke kort.

### Inputs / Fields
- **Style:** Hvid flade, 1px feltkant (`field`), 0px hjørner, min-højde 3.25rem; label i spærrede versaler over feltet.
- **Focus:** Kanten bliver ink, og den globale guld-fokusring vises.
- **Error:** Fejltekst under feltet og fejlkant i `error` (`error-on-dark` på mørk). Fokus flyttes til første fejl, og en samlet status siger, hvor mange felter der mangler.
- **Status:** Uden formular-endpoint er statusteksten ærlig ("Jeres mailprogram åbner nu … Tryk send i mailen") og takker aldrig før afsendelse.

### Navigation
Spærrede versaler (0.78rem, 0.16em) i ink; aktiv side har en guldstreg under, og hover tegner stregen fra venstre. Over forsidens mørke hero er headeren creme og bliver ink efter scroll. Logoet er en inline currentColor-SVG. På mobil er der et telefonikon og en menuknap med to streger, der bliver til et kryds.

### Prisliste (signaturkomponent)
Tillæg vises som et menukort: navn i Playfair, kort beskrivelse inden for `--measure`, pris højrestillet i Playfair med lining- og tabulære tal, enhed og "Spørg os" i spærrede versaler under prisen. "Pris efter aftale" står i samme stil, men dæmpet. Hver række har et ankerid (`#tillaeg-<id>`).

## Do's and Don'ts

### Do:
- **Do** lad overskriften stå alene: Playfair i ink, roman, `text-wrap: balance`, uden label over.
- **Do** brug `.ruled-list` eller en prisliste, når flere ensartede punkter skal vises.
- **Do** brug tokens og `color-mix(in srgb, var(--token) X%, transparent)` til alle farver og gennemsigtigheder.
- **Do** hold længere tekst inden for `--measure` (30em) og UI-tekst på mindst 0.6875rem.
- **Do** brug guld som accent på knapper på mørk, streger, ikoner og badges.
- **Do** brug marmor kun via `.marble` / `.marble--dark` og kun dér, hvor årerne kan ses.
- **Do** behold "Eksempel"-mærkningen på alt eksempelindhold, indtil der er rigtige cases, udtalelser og navne.
- **Do** tegn funktionelle streger og ikoner med border eller currentColor (forced colors).

### Don't:
- **Don't** sæt en kicker, eyebrow eller hero-chip over en h1–h3.
- **Don't** farv eller kursivér enkeltord i overskrifter; eneste undtagelse er forsidens "scene".
- **Don't** byg grids af ens kort med ikon + overskrift + tekst, og sæt ikke ikoner i indrammede fliser.
- **Don't** nummerér punkter (01/02/03), medmindre rækkefølgen er information (proces, "Hvad sker der nu?", ansøgningstrin, juridiske afsnit).
- **Don't** tilføj tal-bånd, marquee eller scroll-reveal; sitet har ét forfattet bevægelsesøjeblik (forsidens hero), og ved `prefers-reduced-motion` er der ingen animation.
- **Don't** brug runde hjørner, dekorative skygger, gradient-tekst eller en farvet border-left over 1px.
- **Don't** læg marmor under en næsten opak vask, hvor årerne forsvinder.
- **Don't** tilføj nye påstande, tal eller kundenavne uden kundens bekræftelse.
