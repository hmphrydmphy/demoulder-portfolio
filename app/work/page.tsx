import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects, getFeaturedProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Case studies and project work by Demoulder Humphrey Pimentel (Humps) — Technical Project Manager, QA Engineer, and Operations Builder.",
};

export default function WorkPage() {
  const featured = getFeaturedProject();
  const all = getAllProjects();

  return (
    <main style={{ background: "var(--bg)", minHeight: "100dvh" }}>

      {/* Page header */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-20">
          <span className="font-label block mb-5" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
            Work
          </span>
          <h1
            className="font-display mb-8"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)", lineHeight: 0.88, color: "var(--cream)" }}
          >
            CASE<br />STUDIES.
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--cream-dim)", maxWidth: "540px", lineHeight: 1.8 }}>
            A selection of real engagements — each one a story about how structure, clear execution,
            and the right systems changed how a business or team operates.
          </p>
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-4">
          <Link
            href={`/work/${featured.slug}`}
            className="block group project-card"
            style={{
              border: "1px solid var(--border)",
              background: "var(--surface)",
            }}
          >
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 p-10 md:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="font-label px-3 py-1"
                    style={{ fontSize: "0.6rem", color: "var(--bg)", background: "var(--accent)" }}
                  >
                    Featured
                  </span>
                  <span className="font-label" style={{ fontSize: "0.6rem", color: "var(--dim)" }}>
                    {featured.context}
                  </span>
                </div>
                <h2
                  className="font-display mb-5"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: 1.05, color: "var(--cream)" }}
                >
                  {featured.title}
                </h2>
                <p className="mb-8 leading-relaxed" style={{ fontSize: "0.98rem", color: "var(--cream-dim)", maxWidth: "480px" }}>
                  {featured.summary}
                </p>
                {featured.metrics && (
                  <ul className="flex flex-col gap-2 mb-8">
                    {featured.metrics.slice(0, 3).map((m) => (
                      <li key={m} className="flex items-start gap-3">
                        <span style={{ color: "var(--accent)" }}>✓</span>
                        <span style={{ fontSize: "0.9rem", color: "var(--cream-dim)" }}>{m}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="arrow-hint">
                  <span className="font-label" style={{ fontSize: "0.68rem", color: "var(--accent)" }}>
                    Read full case study
                  </span>
                  <span style={{ color: "var(--accent)" }}>→</span>
                </div>
              </div>
              <div
                className="md:col-span-2 p-10 md:p-14 border-t md:border-t-0 md:border-l"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="font-label mb-3" style={{ fontSize: "0.58rem", color: "var(--dim)" }}>Tags</div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label px-3 py-1"
                      style={{ fontSize: "0.58rem", color: "var(--cream-dim)", border: "1px solid var(--border)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {featured.tools && (
                  <>
                    <div className="font-label mb-3" style={{ fontSize: "0.58rem", color: "var(--dim)" }}>Methods</div>
                    <div className="flex flex-col gap-1">
                      {featured.tools.map((t) => (
                        <span key={t} style={{ fontSize: "0.88rem", color: "var(--cream-dim)" }}>{t}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* All projects grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid md:grid-cols-2 gap-4">
          {all.filter((p) => !p.featured).map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="block group project-card"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface)",
                padding: "2.5rem",
              }}
            >
              <span className="font-label block mb-4" style={{ fontSize: "0.6rem", color: "var(--dim)" }}>
                {project.context}
              </span>
              <h2
                className="font-display mb-4"
                style={{ fontSize: "1.4rem", lineHeight: 1.1, color: "var(--cream)" }}
              >
                {project.title}
              </h2>
              <p className="mb-6 leading-relaxed" style={{ fontSize: "0.9rem", color: "var(--cream-dim)" }}>
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-label px-2.5 py-1"
                    style={{ fontSize: "0.55rem", color: "var(--cream-dim)", border: "1px solid var(--border)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="arrow-hint">
                <span className="font-label" style={{ fontSize: "0.62rem", color: "var(--accent)" }}>View project</span>
                <span style={{ color: "var(--accent)" }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}
