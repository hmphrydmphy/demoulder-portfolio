import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume & CV",
  description:
    "Professional resume of Demoulder Humphrey Pimentel (Humps) — Technical Project Manager, QA Engineer, and Operations Builder.",
};

const COMPETENCIES = [
  {
    area: "Technical Project Management",
    items: [
      "End-to-end project ownership across web, digital, and operational projects",
      "Sprint planning, backlog management, and milestone tracking",
      "Stakeholder communication and progress reporting",
      "Risk identification and blocker resolution",
      "Agile (Scrum/Kanban) delivery frameworks",
    ],
  },
  {
    area: "QA Engineering",
    items: [
      "Manual and automated QA across web and digital projects",
      "Test case creation and execution",
      "Bug tracking, triage, and escalation",
      "Release readiness and launch checklist management",
      "Cross-browser and device compatibility testing",
    ],
  },
  {
    area: "Operations & Systems",
    items: [
      "Workflow analysis, design, and documentation",
      "SOP creation and process standardization",
      "PM system setup (ClickUp, Jira, Asana, Notion, Monday.com)",
      "Dashboard configuration and operational visibility",
      "Asset organization and file management",
    ],
  },
  {
    area: "Executive & Admin Support",
    items: [
      "Calendar management for multiple executives",
      "Meeting coordination and follow-up documentation",
      "Project booking and client-facing administrative tasks",
      "Email management and task prioritization",
      "Travel logistics and scheduling",
    ],
  },
];

const TOOLS = [
  "ClickUp", "Jira", "Asana", "Monday.com", "Notion", "Trello",
  "Slack", "Figma", "Google Workspace", "Microsoft 365",
  "Zapier", "Calendly", "GitHub", "Playwright", "Shopify",
];

export default function ResumePage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100dvh" }}>

      {/* Header */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="font-label block mb-5" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
                Resume / CV
              </span>
              <h1
                className="font-display"
                style={{ fontSize: "clamp(4rem, 9vw, 8rem)", lineHeight: 0.88, color: "var(--cream)" }}
              >
                CREDENTIALS<br />&amp; PROOF.
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="/assets/resume/humps-pimentel-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Download Full CV (PDF)
              </a>
              <a
                href="https://www.linkedin.com/in/dhpimentel/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-center"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Positioning */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-label mb-3" style={{ fontSize: "0.6rem", color: "var(--dim)" }}>Full Name</div>
            <div className="font-display" style={{ fontSize: "1.4rem", color: "var(--cream)", lineHeight: 1.1 }}>
              Demoulder Humphrey Pimentel
            </div>
          </div>
          <div>
            <div className="font-label mb-3" style={{ fontSize: "0.6rem", color: "var(--dim)" }}>Role</div>
            <div className="font-display" style={{ fontSize: "1.1rem", color: "var(--cream)", lineHeight: 1.2 }}>
              Technical PM · QA Engineer · Operations Builder
            </div>
          </div>
          <div>
            <div className="font-label mb-3" style={{ fontSize: "0.6rem", color: "var(--dim)" }}>Location &amp; Availability</div>
            <div style={{ fontSize: "0.95rem", color: "var(--cream-dim)", lineHeight: 1.6 }}>
              Philippines — Remote Worldwide<br />
              <span style={{ color: "var(--accent)" }}>Available for new projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Work History */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-b" style={{ borderColor: "var(--border)" }}>
        <span className="font-label block mb-12" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
          Work History
        </span>
        <div className="flex flex-col gap-0" style={{ borderTop: "1px solid var(--border)" }}>
          {experience.map((exp) => (
            <div
              key={`${exp.title}-${exp.period}`}
              className="grid md:grid-cols-5 gap-4 py-8"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="md:col-span-1">
                <span className="font-label" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>{exp.period}</span>
              </div>
              <div className="md:col-span-4">
                <div className="font-display mb-1" style={{ fontSize: "1.1rem", color: "var(--cream)", lineHeight: 1.2 }}>
                  {exp.title}
                </div>
                <div className="font-label" style={{ fontSize: "0.65rem", color: "var(--dim)" }}>{exp.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Competencies */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <span className="font-label block mb-12" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
            Core Competencies
          </span>
          <div className="grid md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
            {COMPETENCIES.map((comp) => (
              <div key={comp.area} className="p-10" style={{ background: "var(--bg)" }}>
                <h3 className="font-display mb-6" style={{ fontSize: "1.2rem", color: "var(--cream)", lineHeight: 1.1 }}>
                  {comp.area}
                </h3>
                <ul className="flex flex-col gap-2">
                  {comp.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span style={{ color: "var(--accent)", fontSize: "0.8rem", marginTop: "2px" }}>—</span>
                      <span style={{ fontSize: "0.88rem", color: "var(--cream-dim)", lineHeight: 1.55 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-b" style={{ borderColor: "var(--border)" }}>
        <span className="font-label block mb-10" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
          Tools & Platforms
        </span>
        <div className="flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="font-label px-4 py-2.5"
              style={{ fontSize: "0.65rem", color: "var(--cream-dim)", border: "1px solid var(--border)" }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Download CTA */}
      <div style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05, color: "var(--cream)" }}>
              Want the full picture?
            </div>
            <p className="mt-3" style={{ fontSize: "0.95rem", color: "var(--cream-dim)" }}>
              Download the full CV for a complete view of my experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/assets/resume/humps-pimentel-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download CV (PDF)
            </a>
            <Link href="/contact" className="btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
