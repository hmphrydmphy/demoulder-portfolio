"use client";

import Link from "next/link";
import { getFeaturedProject, getProjectSummaries } from "@/lib/projects";

export default function FeaturedWork() {
  const featured = getFeaturedProject();
  const summaries = getProjectSummaries().slice(0, 3);

  return (
    <section id="work" className="section" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <span className="font-label block mb-5" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
              Case Studies
            </span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: 0.9, color: "var(--cream)" }}
            >
              SELECTED<br />WORK.
            </h2>
          </div>
          <div className="max-w-xs">
            <p style={{ fontSize: "0.95rem", color: "var(--cream-dim)", lineHeight: 1.7 }}>
              Real engagements. Real outcomes. Every project tells a story about how structure
              and clear execution changed the way a business operates.
            </p>
          </div>
        </div>

        {/* Featured case study */}
        {featured && (
          <Link
            href={`/work/${featured.slug}`}
            className="block mb-6 group reveal"
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg)",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
          >
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left — content */}
              <div className="md:col-span-3 p-10 md:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="font-label px-3 py-1"
                    style={{
                      fontSize: "0.6rem",
                      color: "var(--bg)",
                      background: "var(--accent)",
                    }}
                  >
                    Featured Case Study
                  </span>
                  <span
                    className="font-label"
                    style={{ fontSize: "0.6rem", color: "var(--dim)" }}
                  >
                    {featured.context}
                  </span>
                </div>

                <h3
                  className="font-display mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.05, color: "var(--cream)" }}
                >
                  {featured.title}
                </h3>

                <p
                  className="mb-8 leading-relaxed"
                  style={{ fontSize: "0.98rem", color: "var(--cream-dim)", maxWidth: "480px" }}
                >
                  {featured.summary}
                </p>

                {featured.metrics && (
                  <ul className="flex flex-col gap-2 mb-8">
                    {featured.metrics.slice(0, 3).map((m) => (
                      <li key={m} className="flex items-start gap-3">
                        <span style={{ color: "var(--accent)", fontSize: "0.9rem", marginTop: "1px" }}>✓</span>
                        <span style={{ fontSize: "0.9rem", color: "var(--cream-dim)", lineHeight: 1.5 }}>{m}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  <span
                    className="font-label"
                    style={{ fontSize: "0.68rem", color: "var(--accent)" }}
                  >
                    Read full case study
                  </span>
                  <span style={{ color: "var(--accent)" }}>→</span>
                </div>
              </div>

              {/* Right — tags/details */}
              <div
                className="md:col-span-2 p-10 md:p-14 flex flex-col justify-between border-t md:border-t-0 md:border-l"
                style={{ borderColor: "var(--border)" }}
              >
                <div>
                  <div className="font-label mb-3" style={{ fontSize: "0.58rem", color: "var(--dim)" }}>
                    Role
                  </div>
                  <div
                    className="font-display mb-10"
                    style={{ fontSize: "1.2rem", color: "var(--cream)", lineHeight: 1.1 }}
                  >
                    {featured.role?.split("—")[0].trim()}
                  </div>

                  <div className="font-label mb-3" style={{ fontSize: "0.58rem", color: "var(--dim)" }}>
                    Tags
                  </div>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-label px-3 py-1"
                        style={{
                          fontSize: "0.58rem",
                          color: "var(--cream-dim)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {featured.tools && (
                    <>
                      <div className="font-label mb-3" style={{ fontSize: "0.58rem", color: "var(--dim)" }}>
                        Tools & Methods
                      </div>
                      <div className="flex flex-col gap-1">
                        {featured.tools.map((tool) => (
                          <span
                            key={tool}
                            style={{ fontSize: "0.88rem", color: "var(--cream-dim)" }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Summary cards */}
        <div className="grid md:grid-cols-3 gap-px mb-14" style={{ background: "var(--border)" }}>
          {summaries.map((p, i) => (
            <Link
              key={p.id}
              href={`/work/${p.slug}`}
              className="block group reveal"
              style={{
                background: "var(--bg)",
                padding: "2.5rem",
                transition: "background 0.3s",
                transitionDelay: `${i * 80}ms`,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg)")}
            >
              <span
                className="font-label block mb-4"
                style={{ fontSize: "0.6rem", color: "var(--dim)" }}
              >
                {p.context}
              </span>
              <h3
                className="font-display mb-4"
                style={{ fontSize: "1.25rem", lineHeight: 1.1, color: "var(--cream)" }}
              >
                {p.title}
              </h3>
              <p
                className="mb-6 leading-relaxed"
                style={{ fontSize: "0.88rem", color: "var(--cream-dim)" }}
              >
                {p.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-label px-2.5 py-1"
                    style={{
                      fontSize: "0.55rem",
                      color: "var(--cream-dim)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                <span className="font-label" style={{ fontSize: "0.62rem", color: "var(--accent)" }}>
                  View project
                </span>
                <span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center reveal">
          <Link href="/work" className="btn-ghost">
            View All Case Studies
          </Link>
        </div>

      </div>
    </section>
  );
}
