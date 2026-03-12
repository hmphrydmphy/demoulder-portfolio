import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Samples",
  description:
    "Downloadable templates, SOPs, checklists, dashboards, and process diagrams created by Humps (Demoulder Humphrey Pimentel).",
};

export default function AssetsPage() {
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
        Work Samples — coming soon
      </p>
    </main>
  );
}
