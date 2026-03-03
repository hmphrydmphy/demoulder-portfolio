import { results } from "@/lib/data";

export default function Results() {
  return (
    <section id="results" className="section" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-20 reveal">
          <span className="font-label text-dim block mb-5">By the numbers</span>
          <h2
            className="font-display text-cream"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
          >
            RESULTS.
          </h2>
        </div>

        {/* Metric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
          {results.map((item, i) => (
            <div
              key={item.label}
              className="result-box p-10 md:p-12 reveal"
              style={{ background: "#111111", transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="font-display text-red"
                style={{ fontSize: "clamp(4.5rem, 9vw, 8rem)", lineHeight: 0.88 }}
              >
                {item.value}
              </div>
              <div className="font-label text-dim mt-3 mb-4" style={{ fontSize: "0.65rem" }}>
                {item.unit}
              </div>
              <div
                className="font-display text-cream mb-3"
                style={{ fontSize: "1.15rem", lineHeight: 1.1 }}
              >
                {item.label}
              </div>
              <p className="text-dim leading-relaxed" style={{ fontSize: "0.88rem" }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
