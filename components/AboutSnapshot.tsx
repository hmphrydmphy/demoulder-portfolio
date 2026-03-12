import Link from "next/link";

const TRAITS = [
  { num: "01", label: "Structured thinker", desc: "I turn ambiguous situations into clear, actionable systems." },
  { num: "02", label: "Delivery-focused", desc: "I care about outcomes, not just activity. Work moves forward." },
  { num: "03", label: "Cross-functional", desc: "I speak the language of developers, designers, and executives alike." },
  { num: "04", label: "Detail-oriented", desc: "Nothing slips. Every handoff, every document, every deadline." },
];

export default function AboutSnapshot() {
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left */}
          <div className="reveal">
            <span className="font-label block mb-6" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
              About
            </span>
            <h2
              className="font-display mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9, color: "var(--cream)" }}
            >
              I BRING ORDER<br />TO OPERATIONAL<br />CHAOS.
            </h2>
            <p
              className="mb-6 leading-relaxed"
              style={{ fontSize: "1rem", color: "var(--cream-dim)", maxWidth: "480px" }}
            >
              My name is Demoulder Humphrey Pimentel — most people call me Humps. I&apos;m a Technical Project
              Manager, QA Engineer, and Operations Builder based in the Philippines.
            </p>
            <p
              className="mb-10 leading-relaxed"
              style={{ fontSize: "1rem", color: "var(--cream-dim)", maxWidth: "480px" }}
            >
              I work with founders, agencies, and fast-moving teams who need someone to handle the operational
              layer — the systems, the structure, the handoffs, and the execution — so they can focus on growth.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-ghost">
                Full Story
              </Link>
              <a
                href="/assets/resume/humps-pimentel-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right — traits */}
          <div className="flex flex-col gap-0">
            {TRAITS.map((t, i) => (
              <div
                key={t.num}
                className="reveal py-7 border-b"
                style={{
                  borderColor: "var(--border)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="flex items-start gap-6">
                  <span
                    className="font-label flex-shrink-0 mt-0.5"
                    style={{ fontSize: "0.6rem", color: "var(--accent)" }}
                  >
                    {t.num}
                  </span>
                  <div>
                    <div
                      className="font-display mb-1"
                      style={{ fontSize: "1.1rem", color: "var(--cream)", lineHeight: 1.1 }}
                    >
                      {t.label}
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "var(--cream-dim)", lineHeight: 1.65 }}>
                      {t.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
