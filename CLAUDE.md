# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Marketing website for **Centrum voor Therapie** — a one-person psychotherapy practice in Purmerend, NL run by **Mari-Louise Fongers** (ECP-certified integrative psychotherapist with ~20 years experience).

The original site (centrumvoortherapie.nl) is a dated WordPress build. This repo is a full Next.js rebuild with the same content but a modern, warm design.

Owner is the therapist's son (the user); not a developer — explanations should be plain-language. Site language is **Dutch** (English may be added later).

## Stack

- **Next.js 16.2.4** (App Router, Turbopack, React 19) — note: this version is newer than typical training data; check `node_modules/next/dist/docs/` if APIs feel off
- **Tailwind CSS v4** with `@theme inline` tokens in `src/app/globals.css`
- **Resend** for the contact form (`/api/contact`); `RESEND_API_KEY` and `CONTACT_TO` env vars
- `lucide-react` for icons, `framer-motion` available for animations
- Custom warm palette in CSS variables: `--gold`, `--gold-deep`, `--blush`, `--cream`, `--ink` etc.
- Display font Fraunces (serif), body Inter

## Commands

```bash
npm run dev      # turbopack dev server on localhost:3000
npm run build
npm run start
npm run lint
```

Deploy via `vercel --prod` — project is linked to a Vercel project owned by `nathanzebaida`.

## Repo layout

- `src/app/` — App Router pages (home, contact, over, klachten, praktijk, tarieven, werkwijze, reviews, privacy, disclaimer)
- `src/app/api/contact/route.ts` — form-submit handler that emails via Resend
- `src/components/` — `Header`, `Footer`, `WhatsAppButton`, `ContactForm`
- `src/lib/content.ts` — single source of truth for business info, conditions, certifications, tariffs, bio
- `src/lib/reviews.ts` — Google review data (4.9/5, 11 reviews, scraped manually)
- `public/images/{logo,profile,praktijk,conditions,certifications,networks}/` — all assets, locally hosted
- `_scraped/` — original WordPress HTML, screenshots, JSON snapshots from the source site (research only, not shipped)

## Content rules

- All copy is editable in `src/lib/content.ts`. **Avoid hardcoding business info in components** — pull from `business`, `conditions`, `certifications`, `tariffs`, `aboutBio`.
- Reviews live in `src/lib/reviews.ts`. Source is Google; refresh manually when new ones come in.
- Tone: warm, calm, professional. The practice serves people in vulnerable states — never use frantic CTAs, dark-mode panic copy, or urgency tricks.

## Design conventions

- Rounded shapes are large (`rounded-3xl`, `rounded-[2.5rem]`) to feel soft.
- Gradients use the gold/blush palette only; avoid blue/purple.
- The italic accent (`<span className="italic gold-text">`) is the signature pattern for headings — use sparingly, once per heading.
- The pill `btn-primary` / `btn-secondary` classes in `globals.css` are the canonical buttons.

## What NOT to add

- **No Supabase** — site is informational, no logins or stored user data.
- **No analytics tracking without a cookie banner** (NL/AVG compliance — if you add GA, also add consent UI).
- **No booking system yet** — flagged as a future feature; for now contact form + phone only.
