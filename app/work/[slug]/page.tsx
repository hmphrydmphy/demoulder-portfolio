import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const next = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <main style={{ background: "var(--bg)", minHeight: "100dvh" }}>

      {/* Hero */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-20">
          <Link
            href="/work"
            className="font-label inline-flex items-center gap-2 mb-10"
            style={{ fontSize: "0.62rem", color: "var(--dim)" }}
          >
            ← All Case Studies
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            {project.featured && (
              <span
                className="font-label px-3 py-1"
                style={{ fontSize: "0.6rem", color: "var(--bg)", background: "var(--accent)" }}
              >
                Featured
              </span>
            )}
            <span className="font-label" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>
              {project.context}
            </span>
          </div>

          <h1
            className="font-display mb-8"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              lineHeight: 0.92,
              color: "var(--cream)",
              maxWidth: "900px",
            }}
          >
            {project.title}
          </h1>

          <p style={{ fontSize: "1.05rem", color: "var(--cream-dim)", maxWidth: "620px", lineHeight: 1.8 }}>
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-label px-3 py-1"
                style={{ fontSize: "0.6rem", color: "var(--cream-dim)", border: "1px solid var(--border)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-16">

          {/* Main column */}
          <div className="md:col-span-2 flex flex-col gap-14">

            {project.problem && (
              <div>
                <span className="font-label block mb-5" style={{ fontSize: "0.62rem", color: "var(--accent)" }}>
                  The Situation &amp; Challenge
                </span>
                <p style={{ fontSize: "1rem", color: "var(--cream-dim)", lineHeight: 1.8 }}>
                  {project.problem}
                </p>
              </div>
            )}

            {project.role && (
              <div>
                <span className="font-label block mb-5" style={{ fontSize: "0.62rem", color: "var(--accent)" }}>
                  My Role
                </span>
                <p style={{ fontSize: "1rem", color: "var(--cream-dim)", lineHeight: 1.8 }}>
                  {project.role}
                </p>
              </div>
            )}

            {project.process && (
              <div>
                <span className="font-label block mb-6" style={{ fontSize: "0.62rem", color: "var(--accent)" }}>
                  What I Did
                </span>
                <div className="flex flex-col gap-0" style={{ borderTop: "1px solid var(--border)" }}>
                  {project.process.map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-5 py-5"
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <span
                        className="font-label flex-shrink-0 mt-0.5"
                        style={{ fontSize: "0.58rem", color: "var(--accent)", minWidth: "24px" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p style={{ fontSize: "0.95rem", color: "var(--cream-dim)", lineHeight: 1.7 }}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.outcome && (
              <div
                className="p-10"
                style={{ background: "var(--surface)", border: "1px solid var(--border-accent)" }}
              >
                <span className="font-label block mb-5" style={{ fontSize: "0.62rem", color: "var(--accent)" }}>
                  Outcome
                </span>
                <p style={{ fontSize: "1.05rem", color: "var(--cream)", lineHeight: 1.8 }}>
                  {project.outcome}
                </p>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-10">

            {project.metrics && (
              <div>
                <div className="font-label mb-5" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>
                  Key Results
                </div>
                <div className="flex flex-col gap-0" style={{ borderTop: "1px solid var(--border)" }}>
                  {project.metrics.map((m) => (
                    <div
                      key={m}
                      className="flex items-start gap-3 py-4"
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <span style={{ color: "var(--accent)", fontSize: "0.8rem", marginTop: "2px" }}>✓</span>
                      <span style={{ fontSize: "0.88rem", color: "var(--cream-dim)", lineHeight: 1.5 }}>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.tools && (
              <div>
                <div className="font-label mb-5" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>
                  Tools &amp; Methods
                </div>
                <div className="flex flex-col gap-2">
                  {project.tools.map((t) => (
                    <span key={t} style={{ fontSize: "0.88rem", color: "var(--cream-dim)" }}>{t}</span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="font-label mb-5" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>
                Client Context
              </div>
              <span style={{ fontSize: "0.9rem", color: "var(--cream-dim)" }}>{project.context}</span>
            </div>

            {/* CTA */}
            <div
              className="p-8 mt-4"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="font-label mb-3" style={{ fontSize: "0.6rem", color: "var(--dim)" }}>
                Work with me
              </div>
              <p className="mb-6" style={{ fontSize: "0.88rem", color: "var(--cream-dim)", lineHeight: 1.65 }}>
                Need similar results? Let&apos;s talk about what you&apos;re working on.
              </p>
              <Link href="/contact" className="btn-primary block text-center">
                Get in Touch
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* Next project */}
      {next && next.slug !== slug && (
        <div style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="font-label block mb-2" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>
                  Next Case Study
                </span>
                <div
                  className="font-display"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.1, color: "var(--cream)" }}
                >
                  {next.title}
                </div>
              </div>
              <Link href={`/work/${next.slug}`} className="btn-ghost flex-shrink-0">
                View →
              </Link>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
