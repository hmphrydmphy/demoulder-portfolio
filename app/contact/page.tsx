import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Demoulder Humphrey Pimentel (Humps) — Technical Project Manager, QA Engineer, and Operations Builder available for remote engagements.",
};

export default function ContactPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100dvh" }}>
      {/* Page header */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-16">
          <span className="font-label block mb-5" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
            Contact
          </span>
          <h1
            className="font-display mb-6"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)", lineHeight: 0.88, color: "var(--cream)" }}
          >
            LET&apos;S<br />WORK<br />TOGETHER.
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--cream-dim)", maxWidth: "480px", lineHeight: 1.8 }}>
            I&apos;m available for project management, operations support, QA, and executive assistance
            engagements — remote, part-time or full-time.
          </p>
        </div>
      </div>

      {/* Reuse the Contact section component */}
      <Contact />
    </main>
  );
}
