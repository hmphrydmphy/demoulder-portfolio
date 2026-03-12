# Humps — Portfolio (demoulder-portfolio)

Personal portfolio website for **Demoulder Humphrey Pimentel** (Humps).

**Positioning:** Technical Project Manager & QA Engineer
**Primary CTA:** Book a Meeting
**Live URL:** https://humphreypimentel.com *(update when deployed)*

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js (App Router) | Framework — pages, routing, API routes |
| Tailwind CSS v4 | Styling |
| TypeScript | Type safety |
| Supabase | Database — contact form submissions |
| Resend | Email — contact form notifications |
| Calendly | Booking — embedded on /book |
| Vercel | Hosting and deployment |

---

## Local Development

**Prerequisites:** Node.js 18+ installed

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment variable template
cp .env.example .env.local

# 3. Fill in your real values in .env.local
#    (See .env.example for what each variable does)

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Build and Deploy

```bash
# Check for TypeScript errors and build the production version
npm run build

# Run the production build locally to test before deploying
npm start
```

Deployment is handled automatically by Vercel — every push to `main` triggers a new deploy.

---

## Project Structure

```
app/                  Pages and API routes (Next.js App Router)
├── page.tsx          Homepage (/)
├── services/         /services
├── projects/         /projects and /projects/[slug]
├── assets/           /assets
├── contact/          /contact
├── book/             /book
├── privacy/          /privacy
├── not-found.tsx     404 page
└── api/contact/      Contact form API route

components/           Reusable UI components (built in Step 2+)
lib/                  Static data files
├── projects.ts       Case studies and project summaries
├── services.ts       Service offerings
├── testimonials.ts   Client testimonials
└── assets.ts         Work samples list
types/index.ts        TypeScript type definitions
public/assets/        Static files served directly
├── downloads/        Downloadable PDFs
├── previews/         Preview images for assets
└── resume/           Resume/CV PDF (humps-pimentel-cv.pdf)
docs/                 Project documentation
```

---

## Updating Content

All content lives in static data files in `lib/`. No database editing needed for most updates.

| What to update | File |
|---|---|
| Projects and case studies | `lib/projects.ts` |
| Services | `lib/services.ts` |
| Testimonials | `lib/testimonials.ts` |
| Work samples / assets list | `lib/assets.ts` |
| Resume / CV | Replace `public/assets/resume/humps-pimentel-cv.pdf` |

---

## Environment Variables

See `.env.example` for all required variables and what each one does.
Copy it to `.env.local` and fill in real values. Never commit `.env.local`.

---

## Documentation

| File | Contents |
|---|---|
| `CLAUDE.md` | Instructions for AI-assisted development |
| `CHANGELOG.md` | Notable changes by milestone |
| `docs/ARCHITECTURE.md` | App structure, data flow, system choices |
| `docs/DECISIONS.md` | Technical and product decisions with rationale |
| `docs/PROJECT_LOG.md` | Milestone-by-milestone progress notes |
