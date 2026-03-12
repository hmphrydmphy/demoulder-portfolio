# Decisions — Humps Portfolio

Architectural and product decisions with rationale.

---

## DEC-001 — Use existing demoulder-portfolio folder as base
**Date:** 2026-03-10
**Decision:** Build inside the existing `demoulder-portfolio` folder rather than creating a new Next.js project.
**Rationale:** The folder already has Next.js 16, Tailwind v4, and TypeScript configured correctly. Reusing it saves setup time and avoids redundant installs.
**Impact:** The old content strategist positioning (components, page.tsx, metadata) has been replaced entirely. Old components in `components/` are now orphaned and can be deleted once the new components are built.

---

## DEC-002 — Static data files over CMS for V1
**Date:** 2026-03-10
**Decision:** Store all content (projects, services, testimonials, assets) as TypeScript data files in `lib/`, not in Supabase or a headless CMS.
**Rationale:** Humphrey is the only editor. Content changes infrequently. Static files are simpler, faster, and require no database reads. Migrating to a CMS in V2 is straightforward.
**Impact:** All content updates require editing a file and pushing to GitHub. Vercel auto-deploys.

---

## DEC-003 — Supabase for contact form storage only (V1)
**Date:** 2026-03-10
**Decision:** Use Supabase only for storing contact form submissions in V1.
**Rationale:** The contact form is the only user-submitted data. Everything else is static. Keeping Supabase usage minimal reduces complexity and setup time.
**Impact:** Only one table needed: `contact_submissions`.

---

## DEC-004 — Calendly embed for booking (V1)
**Date:** 2026-03-10
**Decision:** Use Calendly embedded on `/book` rather than building a custom scheduler.
**Rationale:** Custom schedulers are complex to build, test, and maintain. Calendly handles availability, Google Meet links, reminders, and rescheduling out of the box. For V1, reliability matters more than control.
**Impact:** Booking data lives in Calendly, not Supabase. Rescheduling and cancellations are handled by Calendly automatically.

---

## DEC-005 — Resend for email notifications
**Date:** 2026-03-10
**Decision:** Use Resend to send email notifications when someone submits the contact form.
**Rationale:** Resend works natively with Next.js API routes. Free tier is sufficient. Simple to set up. More reliable than using Gmail directly.
**Impact:** Requires a Resend account and API key in environment variables.

---

## DEC-006 — Emerald (#10B981) as accent color
**Date:** 2026-03-10
**Decision:** Keep the existing emerald green as the primary accent color.
**Rationale:** Green communicates delivery, success, and growth — directly aligned with PM/QA positioning. The dark background with cream text and emerald accent reads as premium and modern.
**Note:** The original CSS named this variable `--red` (a mistake from the previous portfolio). Renamed to `--accent`.

---

## DEC-007 — Asset visibility tiers
**Date:** 2026-03-10
**Decision:** Each work sample has one of three visibility states: `download`, `preview`, or `request`.
**Rationale:** Not all samples should be freely downloadable. Sensitive or proprietary templates can be gated behind a request form, while lighter samples can be downloaded directly. This gives Humphrey control without building an auth system.
**Impact:** `AssetCard` component must render different UI per visibility state.

---

## DEC-008 — No auth in V1
**Date:** 2026-03-10
**Decision:** No authentication system in V1. The site is fully public.
**Rationale:** There is no content that requires a login. Adding auth for a one-person admin system adds complexity without meaningful benefit at this stage.
**Future:** If a client portal or private case study section is added in V2, Supabase Auth is the natural fit.

---

## DEC-009 — Project depth tiers (featured vs summary)
**Date:** 2026-03-10
**Decision:** 1 featured case study with full depth (problem/process/outcome/metrics) + 2–3 lighter summaries.
**Rationale:** Building full case studies for every project before launch would delay the site significantly. One deep, polished case study is more effective than several shallow ones. Summaries can be upgraded to full case studies later.
**Impact:** `featured: boolean` flag in `lib/projects.ts` controls which template is used.

---

## DEC-010 — /privacy page added
**Date:** 2026-03-10
**Decision:** Add a `/privacy` page covering contact form data handling and Calendly booking data.
**Rationale:** Trust signal for visitors submitting contact forms. Also best practice when collecting any personal data (name, email). Page is excluded from search indexing.
