# Changelog

All notable changes to the Humps portfolio project.

---

## [Unreleased]

### Milestone 1 — Project Scaffolding (Step 1)
- Set up project folder structure (all routes, lib, types, docs, public)
- Updated design system: renamed `--red` to `--accent`, cleaned up old component-specific CSS, added `--surface-2`, `--accent-dim`, `--border-accent` tokens
- Updated `@theme inline` block so all custom colors are usable as Tailwind utility classes
- Updated root layout metadata for new positioning: Technical Project Manager & QA Engineer
- Added `metadataBase` for correct Open Graph URL resolution
- Created stub pages for: `/services`, `/projects`, `/projects/[slug]`, `/assets`, `/contact`, `/book`, `/privacy`
- Created `app/not-found.tsx` for styled 404 page
- Created `app/api/contact/route.ts` placeholder for contact form API
- Created `types/index.ts` with all TypeScript types: Project, Service, Asset, Testimonial, ContactSubmission, ApiResponse
- Created `lib/projects.ts` — 1 featured case study + 3 lighter summaries
- Created `lib/services.ts` — 5 services with full detail
- Created `lib/testimonials.ts` — 4 anonymized testimonials
- Created `lib/assets.ts` — 5 work samples with visibility tiers (download / preview / request)
- Created `.env.example` with all required variables and inline documentation
- Created `README.md`, `CLAUDE.md`, `CHANGELOG.md`
- Created `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROJECT_LOG.md`
- Created public folder structure: `/assets/downloads/`, `/assets/previews/`, `/assets/resume/`, `/images/`

---

*Format based on [Keep a Changelog](https://keepachangelog.com)*
