# Architecture — Humps Portfolio

## Overview

A Next.js App Router portfolio site for Demoulder Humphrey Pimentel (Humps).
Positioning: Technical Project Manager & QA Engineer.

---

## Sitemap

```
/ (Homepage)
├── /services
├── /projects
│   └── /projects/[slug]    ← Individual case study pages
├── /assets
├── /contact
├── /book
└── /privacy
```

---

## Page Goals

| Page | Primary Goal | Primary Action |
|---|---|---|
| `/` | First impression, position Humps, push to booking | Book a Meeting |
| `/services` | Show offerings in enough detail that a client self-qualifies | Book a call |
| `/projects` | Prove experience through real work | Read a case study |
| `/projects/[slug]` | Deep trust signal — one full case study | Book a Meeting |
| `/assets` | Show quality of documentation and thinking | Download or request |
| `/contact` | Low-friction message channel | Submit form |
| `/book` | Direct scheduling, zero friction | Pick a slot on Calendly |
| `/privacy` | Legal trust signal for form/booking | Read only |

---

## Data Flow

### Static content (V1)
Projects, services, testimonials, and assets are stored as static TypeScript data files in `lib/`. No database needed to read them.

```
lib/projects.ts     → /projects, /projects/[slug], homepage preview
lib/services.ts     → /services, homepage preview
lib/testimonials.ts → homepage testimonials section
lib/assets.ts       → /assets
```

### Contact form flow
```
Visitor fills form → POST /api/contact →
  ├── Save to Supabase (contact_submissions table)
  └── Send email via Resend → your inbox
→ Visitor sees success message
```

### Booking flow
```
Visitor clicks "Book a Meeting" → /book →
  Calendly embed (hosted by Calendly)
  └── Handles scheduling, reminders, Google Meet link
```

---

## Supabase (V1)

Only one table is used in V1.

**Table: `contact_submissions`**

| Column | Type | Notes |
|---|---|---|
| `id` | UUID | Auto-generated primary key |
| `name` | Text | Visitor's name |
| `email` | Text | Visitor's email |
| `subject` | Text | Subject line |
| `message` | Text | Message body |
| `created_at` | Timestamp | Auto-set on insert |
| `is_read` | Boolean | Default false — manually toggle to mark read |

Row Level Security (RLS) is enabled. The anon key can only INSERT (submit).
Reading submissions requires the service role key (server-side only).

---

## Component Structure

```
components/
├── layout/
│   ├── Navbar.tsx           ← Top nav with links and Book CTA
│   ├── Footer.tsx           ← Links, copyright, social icons
│   └── MobileMenu.tsx       ← Hamburger menu for mobile
├── ui/
│   ├── Button.tsx           ← Primary, ghost, accent variants
│   ├── Card.tsx             ← Generic card wrapper
│   ├── Badge.tsx            ← Small tag e.g. "PM", "QA"
│   └── SectionHeader.tsx    ← Consistent heading + subtitle pattern
├── home/
│   ├── Hero.tsx
│   ├── ServicesPreview.tsx
│   ├── ProjectsPreview.tsx
│   ├── HowIWork.tsx         ← 4-step process section
│   ├── Results.tsx          ← Proof/metrics section
│   ├── Testimonials.tsx
│   ├── AboutSnapshot.tsx
│   └── CTABanner.tsx
├── services/
│   └── ServiceCard.tsx
├── projects/
│   ├── ProjectCard.tsx
│   └── CaseStudyLayout.tsx
├── assets/
│   └── AssetCard.tsx        ← Handles all 3 visibility states
└── contact/
    └── ContactForm.tsx
```

---

## SEO Strategy

- Every page exports a `metadata` object with unique `title` and `description`
- Root layout sets `title.template: "%s | Humps"` so all page titles are consistent
- `metadataBase` is set for correct Open Graph URL resolution
- `robots.txt` and `sitemap.xml` will be added via Next.js App Router conventions
- Person schema markup on homepage for E-E-A-T signals
- `/privacy` is excluded from search indexing (`robots: { index: false }`)

### Target keywords by page

| Page | Primary keywords |
|---|---|
| `/` | Humps, Demoulder Humphrey Pimentel, Remote Project Manager Philippines |
| `/services` | Project Management System Setup, SOP Documentation, QA Support |
| `/projects` | Project management case study, QA process improvement |
| `/assets` | SOP template, QA checklist template, project management documentation |

---

## Deployment

| Layer | Service |
|---|---|
| Code | GitHub (private repo) |
| Hosting | Vercel (auto-deploys on push to `main`) |
| Database | Supabase |
| Email | Resend |
| Booking | Calendly (embedded) |
| Domain | To be purchased — update `NEXT_PUBLIC_SITE_URL` |

---

## Auth

No authentication in V1. The site is fully public.
Supabase submissions are write-only via the anon key + RLS.
You review submissions by logging into the Supabase dashboard directly.
