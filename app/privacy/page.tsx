import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Humps (Demoulder Humphrey Pimentel) collects, uses, and protects your personal information submitted through the contact form and booking system.",
  // Privacy pages don't need to appear in search results
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
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
        Privacy Policy — coming soon
      </p>
    </main>
  );
}
