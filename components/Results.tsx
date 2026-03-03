import { results } from "@/lib/data";

export default function Results() {
  return (
    <section id="results" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 reveal">
          <span className="font-label text-grey block mb-3">BY THE NUMBERS</span>
          <h2 className="font-display text-cream" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            RESULTS.
          </h2>
        </div>

        {/* 4-column metric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map((item, i) => (
            <div
              key={item.label}
              className="result-box p-8 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Big number */}
              <div
                className="font-display text-yellow mb-1"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                {item.value}
              </div>
              {/* Unit */}
              <div className="font-label text-red mb-3" style={{ fontSize: "0.65rem" }}>
                {item.unit}
              </div>
              {/* Label */}
              <div
                className="font-display text-cream mb-2"
                style={{ fontSize: "1.1rem", lineHeight: 1.1 }}
              >
                {item.label}
              </div>
              {/* Sub */}
              <p
                className="text-grey text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
