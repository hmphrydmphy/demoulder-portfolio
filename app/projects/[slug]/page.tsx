import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

// generateStaticParams tells Next.js to pre-build a page for each project slug
// at build time, rather than generating them on demand.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// generateMetadata gives each case study its own unique SEO title and description
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

// Full case study layout comes in a later step.
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <p className="font-label" style={{ color: "rgba(240,236,228,0.55)" }}>
        Case Study — coming soon
      </p>
      <h1 className="font-display" style={{ fontSize: "2rem", color: "#f0ece4", textAlign: "center", maxWidth: "600px" }}>
        {project.title}
      </h1>
    </main>
  );
}
