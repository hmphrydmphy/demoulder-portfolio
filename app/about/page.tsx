import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Demoulder Humphrey Pimentel (Humps) — Technical Project Manager, QA Engineer, and Operations Builder based in the Philippines.",
};

const SKILLS = [
  { category: "Project Management", items: ["Agile / Scrum / Kanban", "Sprint planning", "Stakeholder management", "Risk tracking", "Milestone reporting"] },
  { category: "QA Engineering", items: ["Manual QA", "Test planning", "Bug tracking", "Automated QA support", "Release readiness"] },
  { category: "Operations & Systems", items: ["Workflow design", "SOP creation", "Process documentation", "Dashboard setup", "Asset management"] },
  { category: "Executive Support", items: ["Calendar management", "Meeting coordination", "Travel logistics", "Email management", "ClickUp / Notion / Asana"] },
];

const VALUES = [
  { label: "Clarity over complexity", body: "I believe the best systems are the ones people actually use. I build for simplicity, not sophistication." },
  { label: "Ownership and follow-through", body: "If I take something on, it gets done. No hand-holding. No chasing. Just results." },
  { label: "Documentation as a deliverable", body: "Every system I build gets documented — so the value stays long after I'm gone." },
  { label: "Communication first", body: "I keep everyone in the loop. No surprises, no guessing games, no missed updates." },
];

export default function AboutPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100dvh" }}>

      {/* Hero */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-24">
          <span className="font-label block mb-5" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>About</span>
          <h1
            className="font-display mb-10"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)", lineHeight: 0.88, color: "var(--cream)" }}
          >
            DEMOULDER<br />HUMPHREY<br />PIMENTEL.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--cream-dim)", maxWidth: "580px", lineHeight: 1.8 }}>
            Most people call me Humps. I&apos;m a Technical Project Manager, QA Engineer, and Operations Builder
            based in the Philippines — working remotely with founders, agencies, and fast-moving teams worldwide.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-28">
          <div>
            <span className="font-label block mb-6" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>My Story</span>
            <div className="flex flex-col gap-5" style={{ fontSize: "1rem", color: "var(--cream-dim)", lineHeight: 1.85 }}>
              <p>
                I started my career as a web developer intern, which gave me a foundation in how technical
                projects are actually built — not just managed. That perspective shapes everything I do as a PM and operations professional.
              </p>
              <p>
                Over the years, I&apos;ve worked in digital marketing agencies, cybersecurity firms, e-commerce businesses,
                and startup environments. Each one taught me something different about how teams break down, how systems fail,
                and how the right structure makes everything easier.
              </p>
              <p>
                What I do now sits at the intersection of project management, QA engineering, and operational design.
                I step into environments that are messy or moving too fast, and I build the systems and structure that
                help them deliver consistently and scale confidently.
              </p>
              <p>
                I work remotely, asynchronously, and across time zones — with the same level of responsiveness and
                professionalism you&apos;d expect from someone sitting next to you.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <Link href="/contact" className="btn-primary">Work with Me</Link>
              <a
                href="/assets/resume/humps-pimentel-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Values */}
          <div>
            <span className="font-label block mb-6" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>What I Stand For</span>
            <div className="flex flex-col gap-0" style={{ borderTop: "1px solid var(--border)" }}>
              {VALUES.map((v) => (
                <div key={v.label} className="py-7" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div
                    className="font-display mb-2"
                    style={{ fontSize: "1.1rem", color: "var(--cream)", lineHeight: 1.1 }}
                  >
                    {v.label}
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--cream-dim)", lineHeight: 1.65 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <span className="font-label block mb-12" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
            Core Competencies
          </span>
          <div className="grid md:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
            {SKILLS.map((group) => (
              <div key={group.category} className="p-8 md:p-10" style={{ background: "var(--bg)" }}>
                <div
                  className="font-display mb-5"
                  style={{ fontSize: "1.1rem", color: "var(--cream)", lineHeight: 1.1 }}
                >
                  {group.category}
                </div>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: "var(--accent)", fontSize: "0.7rem", marginTop: "3px" }}>—</span>
                      <span style={{ fontSize: "0.88rem", color: "var(--cream-dim)", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <span className="font-label block mb-12" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
          Work History
        </span>
        <div className="flex flex-col gap-0 max-w-3xl" style={{ borderTop: "1px solid var(--border)" }}>
          {experience.map((exp) => (
            <div
              key={`${exp.title}-${exp.period}`}
              className="flex flex-col md:flex-row md:items-center justify-between gap-2 py-6"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div>
                <div className="font-display" style={{ fontSize: "1.05rem", color: "var(--cream)", lineHeight: 1.2 }}>
                  {exp.title}
                </div>
                <div className="font-label mt-1" style={{ fontSize: "0.65rem", color: "var(--dim)" }}>
                  {exp.company}
                </div>
              </div>
              <span className="font-label flex-shrink-0" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>
                {exp.period}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="font-label block mb-3" style={{ color: "var(--dim)", fontSize: "0.62rem" }}>
              Want to see the work?
            </span>
            <div className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05, color: "var(--cream)" }}>
              Check out the case studies.
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/work" className="btn-primary">View Case Studies</Link>
            <Link href="/contact" className="btn-ghost">Get in Touch</Link>
          </div>
        </div>
      </div>

    </main>
  );
}
