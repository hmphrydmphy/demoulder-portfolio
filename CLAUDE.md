# CLAUDE.md — Humps Portfolio

Instructions for AI-assisted development on this project.

---

## Project Summary

Personal portfolio for **Demoulder Humphrey Pimentel** (Humps).
Positioning: Technical Project Manager & QA Engineer.
Primary CTA: Book a Meeting.
Stack: Next.js + Tailwind CSS v4 + Supabase + Vercel.

---

## Developer Context

- The owner is a beginner. Explain every step in plain language.
- Follow this workflow strictly: Planning → Architecture → Implementation → QA.
- One step at a time. Do not jump ahead.
- Before major changes, confirm with the user.
- Never expose secrets in frontend code.
- Never commit `.env.local`.

---

## Commands

```bash
npm run dev     # Start dev server at localhost:3000
npm run build   # Build for production (also type-checks)
npm run lint    # Run ESLint
```

---

## Key File Locations

| File | Purpose |
|---|---|
| `app/layout.tsx` | Root layout — metadata, fonts, Navbar/Footer |
| `app/globals.css` | Design tokens, typography helpers, base styles |
| `app/page.tsx` | Homepage |
| `lib/projects.ts` | All project/case study data |
| `lib/services.ts` | All service data |
| `lib/testimonials.ts` | All testimonial data |
| `lib/assets.ts` | All work sample data |
| `types/index.ts` | TypeScript types used across the project |
| `app/api/contact/route.ts` | Contact form API (Supabase + Resend) |
| `.env.example` | Template for environment variables |

---

## Design System

Defined in `app/globals.css`.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0a0a0a` | Page background |
| `--surface` | `#111111` | Card backgrounds |
| `--cream` | `#f0ece4` | Primary text |
| `--cream-dim` | `rgba(240,236,228,0.55)` | Secondary text |
| `--accent` | `#10B981` | Emerald — CTAs, highlights |
| `--border` | `rgba(240,236,228,0.07)` | Subtle borders |

Fonts:
- `font-display` (Bebas Neue) — large headings
- `font-sans` (DM Sans) — body text (default)
- `font-label` (Space Mono) — labels, tags, buttons

---

## Environment Variables

See `.env.example`. All secrets go in `.env.local` (never committed).

Variables with `NEXT_PUBLIC_` prefix are visible in the browser — only use for non-secret values.
Variables without `NEXT_PUBLIC_` are server-only — use for API keys and database credentials.

---

## Content Rules

- Testimonials: first name or initial only. No employer names, company names, or private details.
- Projects: anonymize client details. Use context like "US Client — E-commerce Brand".
- Never use lorem ipsum. All placeholder text should be meaningful.

---

## Decisions Log

See `docs/DECISIONS.md` for all architectural and product decisions with rationale.
