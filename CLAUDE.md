# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Marketing website for **Centrum voor Therapie** — a one-person psychotherapy practice in Purmerend, NL run by **Mari Louise Fongers** (ECP-certified integrative psychotherapist with ~20 years experience). The therapist is referred to as "Mari Louise" with no hyphen — never "Mari-Louise".

The original site (centrumvoortherapie.nl) is a dated WordPress build. This repo is a Next.js rebuild with the same content but a modern, warm design. The owner of this repo is the therapist's son (the user); not a developer — explanations should be plain-language. Site language is **Dutch** only (English may be added later).

## Stack

- **Next.js 16.2.4** (App Router, Turbopack, React 19) — note: this version is newer than typical training data; check `node_modules/next/dist/docs/` if APIs feel off
- **Tailwind CSS v4** with `@theme inline` tokens in `src/app/globals.css`
- **Lora** for headings, **Inter** for body — loaded via `next/font/google` in `src/app/layout.tsx`
- **Resend** for the contact form (`/api/contact`); requires `RESEND_API_KEY` and `CONTACT_TO` env vars
- `lucide-react` for icons; `framer-motion` available for animations
- Custom warm palette in CSS variables: `--gold`, `--gold-deep`, `--blush`, `--cream`, `--ink` etc.

## Commands

```bash
npm run dev      # turbopack dev server on localhost:3000
npm run build
npm run start
npm run lint
```

Deploy via Vercel auto-deploy on push to `main`, or `vercel --prod`. Project linked to Vercel project `centrum-voor-therapie` under team `nathans-projects-2471087c`.

## Repo layout

- `src/app/` — App Router pages: home, over, werkwijze, klachten, klachten/[slug], praktijk, tarieven, reviews, contact, privacy, disclaimer
- `src/app/api/contact/route.ts` — form-submit handler that emails via Resend (with server-side validation + safe fallback when API key missing)
- `src/app/icon.png` — favicon (the brand logo)
- `src/components/` — `Header` (with Klachten dropdown), `Footer`, `WhatsAppButton`, `ContactForm`, `Reveal` (scroll-fade)
- `src/lib/content.ts` — single source of truth for business info, conditions, certifications, tariffs, bio
- `src/lib/reviews.ts` — Google review data (4.9/5, 11 reviews)
- `public/images/{logo,profile,praktijk,conditions,certifications,educational,networks}/` — all assets, locally hosted
- `_scraped/` — original WordPress HTML, screenshots, JSON snapshots from the source site (research only, not shipped)

## Content & data

- Business info, klachten, certifications, tariffs all live in `src/lib/content.ts`. **Avoid hardcoding** — pull from `business`, `conditions`, `certifications`, `tariffs`, `aboutBio`.
- 8 klachten currently: Stress, Angst & faalangst, Burn-out, Depressie, Relatieproblemen, Chronische pijn, Trauma, Re-integratie. Each has a `/klachten/[slug]` subpage.
- 7 certifications: ECP, EAP, VIT, S.C.A.G., NVECP, EMDR-i, RBCZ. Each has its own image — never reuse.
- Reviews source is Google; refresh manually when new ones come in (`src/lib/reviews.ts`).

## Design conventions

- **Colors**: warm gold/blush palette only; never blue/purple/green.
- **Heading font**: Lora. Avoid `italic` on headings — Tailwind's `italic` utility is overridden in CSS for headings because it produced too-curly results. Use `.gold-text` or `text-gold-deep font-medium` for emphasis instead.
- **Shapes**: rounded-3xl / rounded-[2.5rem] for soft, calming containers.
- **Spacing**: every section uses `py-20`. Hero uses `pt-20 pb-20`. Don't reintroduce `py-24` or `py-16` mixed in.
- **Buttons**: use `.btn-primary` and `.btn-secondary` from globals.css. Don't roll new ones.
- **Tone**: warm, calm, professional. The audience is people in vulnerable states — never frantic CTAs, dark-mode panic copy, or urgency tricks.

## Menu structure (do not change without asking)

Right-to-left in the header:
**Klachten ▼ | Over mij | Praktijkruimte | Tarieven | Contact**

The Klachten dropdown contains: Werkwijze (link to /werkwijze) + the 8 conditions in `conditions[]`.

## Email / contact form

`src/app/api/contact/route.ts` validates server-side and sends via Resend.

- If `RESEND_API_KEY` is not set, the API logs the submission and returns `{ ok: true, skipped: true }` — the user still sees the success page, but no email is sent. Always set the key before going to production.
- The "from" header should ideally be `noreply@centrumvoortherapie.nl` once DNS is verified in Resend. Until then, `onboarding@resend.dev` works.

## What NOT to add

- **No Supabase** — site is informational, no logins or stored user data.
- **No analytics tracking without a cookie banner** (NL/AVG compliance — if you add GA, also add consent UI).
- **No booking system yet** — flagged as a future feature; for now contact form + phone only.
- **Don't reintroduce italics on headings** — they look swashy/curly.
- **Don't use Mari-Louise with a hyphen** anywhere.
