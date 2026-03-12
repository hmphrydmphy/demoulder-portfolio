import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Meeting",
  description:
    "Book a 15-minute intro call or 30-minute discovery consultation with Humps (Demoulder Humphrey Pimentel).",
};

export default function BookPage() {
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
        Book a Meeting — coming soon
      </p>
    </main>
  );
}
