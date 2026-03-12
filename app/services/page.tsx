import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Project management, QA, SOP documentation, workflow design, and operations support — services offered by Humps (Demoulder Humphrey Pimentel).",
};

const WHO_FOR = [
  "Founders managing multiple projects without a clear system",
  "Agencies delivering client work across messy or undefined workflows",
  "Growing teams that need better operational structure and accountability",
  "Businesses that have outgrown spreadsheets but haven't set up a real PM system",
  "Companies that need reliable execution support without a full-time hire",
];

export default function ServicesPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100dvh" }}>

      {/* Header */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-24">
          <span className="font-label block mb-5" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>Services</span>
          <h1
            className="font-display mb-8"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)", lineHeight: 0.88, color: "var(--cream)" }}
          >
            HOW I<br />HELP.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--cream-dim)", maxWidth: "560px", lineHeight: 1.8 }}>
            I work with founders, agencies, and fast-moving teams who need reliable project management,
            cleaner operations, and better execution — delivered remotely with full accountability.
          </p>
        </div>
      </div>

      {/* Who this is for */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-label block mb-5" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>Who I Work With</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 0.92, color: "var(--cream)" }}>
              THIS IS FOR<br />YOU IF...
            </h2>
          </div>
          <ul className="flex flex-col gap-0 mt-2" style={{ borderTop: "1px solid var(--border)" }}>
            {WHO_FOR.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 py-5"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span style={{ color: "var(--accent)", fontSize: "0.8rem", marginTop: "2px", flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: "0.95rem", color: "var(--cream-dim)", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <span className="font-label block mb-12" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
          What I Offer
        </span>

        <div className="flex flex-col gap-0" style={{ borderTop: "1px solid var(--border)" }}>
          {services.map((service, i) => (
            <div
              key={service.id}
              className="grid md:grid-cols-5 gap-0 py-14"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {/* Number */}
              <div className="md:col-span-1 mb-4 md:mb-0">
                <span
                  className="font-display"
                  style={{ fontSize: "4rem", color: "var(--border-accent)", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Main content */}
              <div className="md:col-span-2 mb-8 md:mb-0 md:pr-10">
                <h2
                  className="font-display mb-4"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1.05, color: "var(--cream)" }}
                >
                  {service.title}
                </h2>
                <p style={{ fontSize: "0.95rem", color: "var(--cream-dim)", lineHeight: 1.8 }}>
                  {service.description}
                </p>
                <p className="mt-4" style={{ fontSize: "0.88rem", color: "var(--dim)", lineHeight: 1.65 }}>
                  {service.for}
                </p>
              </div>

              {/* Deliverables */}
              <div className="md:col-span-2 md:pl-10 md:border-l" style={{ borderColor: "var(--border)" }}>
                <div className="font-label mb-4" style={{ fontSize: "0.6rem", color: "var(--dim)" }}>
                  Deliverables
                </div>
                <ul className="flex flex-col gap-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span style={{ color: "var(--accent)", fontSize: "0.8rem", marginTop: "2px" }}>—</span>
                      <span style={{ fontSize: "0.9rem", color: "var(--cream-dim)", lineHeight: 1.55 }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-label block mb-4" style={{ color: "var(--dim)", fontSize: "0.62rem" }}>
                Ready to get started?
              </span>
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 0.92, color: "var(--cream)" }}>
                LET&apos;S TALK<br />ABOUT YOUR<br />PROJECT.
              </h2>
            </div>
            <div>
              <p className="mb-8" style={{ fontSize: "1rem", color: "var(--cream-dim)", lineHeight: 1.8 }}>
                Not sure which service fits? Send me a message and describe what you&apos;re working on.
                I&apos;ll tell you honestly if and how I can help.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Get in Touch</Link>
                <Link href="/work" className="btn-ghost">See Case Studies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
