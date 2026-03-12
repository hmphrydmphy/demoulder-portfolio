import { results } from "@/lib/data";

export default function Results() {
  return (
    <section id="results" className="section" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="mb-20 reveal">
          <span className="font-label block mb-5" style={{ color: "var(--accent)" }}>By the numbers</span>
          <h2 className="font-display" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", color: "var(--cream)" }}>
            RESULTS.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
          {results.map((item, i) => (
            <div key={item.label} className="result-box p-10 md:p-12 reveal" style={{ background: "var(--bg)", border: "1px solid var(--border)", transitionDelay: `${i * 80}ms` }}>
              <div className="font-display" style={{ fontSize: "clamp(4.5rem, 9vw, 8rem)", lineHeight: 0.88, color: "var(--accent)" }}>
                {item.value}
              </div>
              <div className="font-label mt-3 mb-4" style={{ fontSize: "0.65rem", color: "var(--dim)" }}>{item.unit}</div>
              <div className="font-display mb-3" style={{ fontSize: "1.15rem", lineHeight: 1.1, color: "var(--cream)" }}>{item.label}</div>
              <p className="leading-relaxed" style={{ fontSize: "0.88rem", color: "var(--cream-dim)" }}>{item.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
