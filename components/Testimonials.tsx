import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 reveal">
          <div>
            <span className="font-label block mb-5" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
              Testimonials
            </span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: 0.9, color: "var(--cream)" }}
            >
              WHAT CLIENTS<br />SAY.
            </h2>
          </div>
          <p
            className="max-w-xs leading-relaxed"
            style={{ fontSize: "0.95rem", color: "var(--cream-dim)" }}
          >
            Real feedback from the people I&apos;ve worked with across agencies, e-commerce,
            operations, and cybersecurity.
          </p>
        </div>

        {/* Top row — 2 testimonials */}
        <div className="grid md:grid-cols-2 gap-px mb-px" style={{ background: "var(--border)" }}>
          {testimonials.slice(0, 2).map((t, i) => (
            <div
              key={t.id}
              className="reveal p-10 md:p-14"
              style={{
                background: "var(--bg)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} style={{ fontSize: "0.75rem", color: "var(--accent)" }}>★</span>
                ))}
              </div>

              <p
                className="leading-relaxed mb-10"
                style={{
                  fontSize: "1.05rem",
                  fontFamily: "var(--font-dm-sans)",
                  color: "var(--cream)",
                  lineHeight: 1.8,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-end justify-between border-t pt-8" style={{ borderColor: "var(--border)" }}>
                <div>
                  <div className="font-label" style={{ fontSize: "0.72rem", color: "var(--cream)" }}>{t.name}</div>
                  <div className="font-label mt-1" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>{t.context}</div>
                </div>
                <div
                  className="font-display text-6xl leading-none opacity-10"
                  style={{ color: "var(--accent)" }}
                >
                  "
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row — 2 testimonials */}
        <div className="grid md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
          {testimonials.slice(2).map((t, i) => (
            <div
              key={t.id}
              className="reveal p-10 md:p-14"
              style={{
                background: "var(--bg)",
                transitionDelay: `${(i + 2) * 80}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} style={{ fontSize: "0.75rem", color: "var(--accent)" }}>★</span>
                ))}
              </div>

              <p
                className="leading-relaxed mb-10"
                style={{
                  fontSize: "1.05rem",
                  fontFamily: "var(--font-dm-sans)",
                  color: "var(--cream)",
                  lineHeight: 1.8,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-end justify-between border-t pt-8" style={{ borderColor: "var(--border)" }}>
                <div>
                  <div className="font-label" style={{ fontSize: "0.72rem", color: "var(--cream)" }}>{t.name}</div>
                  <div className="font-label mt-1" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>{t.context}</div>
                </div>
                <div
                  className="font-display text-6xl leading-none opacity-10"
                  style={{ color: "var(--accent)" }}
                >
                  "
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
