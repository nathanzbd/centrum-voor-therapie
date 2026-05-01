# Centrum voor Therapie

Website voor **Centrum voor Therapie** in Purmerend — psychotherapie praktijk van Mari Louise Fongers (ECP gecertificeerd, ~20 jaar ervaring).

- **Live:** https://centrum-voor-therapie.vercel.app
- **Domein (later):** centrumvoortherapie.nl
- **Hosting:** Vercel
- **Repo:** github.com/nathanzbd/centrum-voor-therapie

## Stack

- Next.js 16 (App Router) · React 19 · Tailwind CSS v4
- Lora (display) + Inter (body) via `next/font/google`
- Resend voor het contactformulier
- `lucide-react` icons

## Lokaal draaien

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # productie build
```

## Pagina's

| Pad | Inhoud |
|-----|--------|
| `/` | Home — hero, klachten, quote, reviews, certificaten, CTA |
| `/over` | Over Mari Louise — bio + certificeringen |
| `/werkwijze` | Integratieve psychotherapie uitleg |
| `/klachten` | Overzicht klachten |
| `/klachten/[slug]` | Subpagina per klacht (8 totaal) |
| `/praktijk` | Praktijkruimte galerij + bereikbaarheid |
| `/tarieven` | Tarieven & vergoedingen |
| `/reviews` | Alle Google reviews |
| `/contact` | Formulier + map + WhatsApp |
| `/privacy` · `/disclaimer` | Juridisch |

## Inhoud aanpassen

Eén bron voor alle praktijk-info: **`src/lib/content.ts`** (telefoon, email, adres, USPs, klachten, certificaten, tarieven, bio).
Reviews staan in **`src/lib/reviews.ts`**.

## Environment variabelen (Vercel)

| Naam | Waarvoor |
|------|----------|
| `RESEND_API_KEY` | Mailen vanuit het contactformulier (verplicht voor productie) |
| `CONTACT_TO` | E-mailadres dat berichten ontvangt (default: centrumvoortherapie@gmail.com) |
| `CONTACT_FROM` | Afzender header (default: Resend's sandbox; eigen domein als DNS klaar is) |

## Mappenstructuur

```
src/
├── app/                 Next.js App Router pagina's & API
│   ├── api/contact/     Contactformulier handler (Resend)
│   ├── klachten/[slug]/ Dynamische klacht-subpagina's
│   └── ...
├── components/          Header, Footer, ContactForm, Reveal, WhatsAppButton
└── lib/                 content.ts + reviews.ts (single source of truth)

public/images/
├── certifications/      ECP, EAP, VIT, SCAG, NVECP, EMDR-i, RBCZ
├── conditions/          Watercolor klacht-illustraties
├── educational/         Tree-of-growth, yin-yang flowers
├── logo/                Logo varianten
├── praktijk/            5 praktijkruimte foto's
└── profile/             Mari Louise portretfoto's

_scraped/                Onderzoek (originele site HTML, screenshots, reviews JSON)
```

## Deploy

Push naar `main` deployt automatisch naar productie via de Vercel-GitHub integratie. Handmatig:

```bash
vercel --prod
```
