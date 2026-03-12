import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and project summaries from Humps (Demoulder Humphrey Pimentel) — project management, QA, operations, and systems work.",
};

export default function ProjectsPage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p className="font-label" style={{ color: "rgba(240,236,228,0.55)" }}>
        Projects — coming soon
      </p>
    </main>
  );
}
