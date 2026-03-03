import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 reveal">
          <div>
            <span className="font-label text-dim block mb-5">Testimonials</span>
            <h2
              className="font-display text-cream"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              WHAT CLIENTS<br />SAY.
            </h2>
          </div>
          <p className="text-dim max-w-xs leading-relaxed" style={{ fontSize: "0.95rem" }}>
            Real feedback from the people I&apos;ve worked with across agencies, e-commerce, and operations.
          </p>
        </div>

        {/* Top row — 3 cards */}
        <div className="grid md:grid-cols-3 gap-0 mb-0">
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card reveal px-0 md:px-8 first:pl-0 last:pr-0"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-red" style={{ fontSize: "0.8rem" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-cream leading-relaxed mb-8"
                style={{ fontSize: "1rem", fontFamily: "var(--font-dm-sans)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div className="font-label text-cream" style={{ fontSize: "0.72rem" }}>
                  {t.name}
                </div>
                <div className="font-label text-dim mt-1" style={{ fontSize: "0.65rem" }}>
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="rule my-14" />

        {/* Bottom row — 2 cards (centered) */}
        <div className="grid md:grid-cols-2 gap-0 md:max-w-4xl">
          {testimonials.slice(3).map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card reveal px-0 md:px-8 first:pl-0"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-red" style={{ fontSize: "0.8rem" }}>★</span>
                ))}
              </div>

              <p
                className="text-cream leading-relaxed mb-8"
                style={{ fontSize: "1rem", fontFamily: "var(--font-dm-sans)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <div className="font-label text-cream" style={{ fontSize: "0.72rem" }}>
                  {t.name}
                </div>
                <div className="font-label text-dim mt-1" style={{ fontSize: "0.65rem" }}>
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
