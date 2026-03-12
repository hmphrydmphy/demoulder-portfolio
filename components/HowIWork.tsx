const STEPS = [
  {
    num: "01",
    title: "Discover",
    headline: "Understand the problem first.",
    body: "Before touching any tool or process, I take time to understand what's actually happening — the workflows, the friction points, the communication gaps, and what the business needs to function well.",
  },
  {
    num: "02",
    title: "Structure",
    headline: "Build the right system.",
    body: "I design a system that fits the team — not a generic template. Clear ownership, logical workflows, the right tools, and a structure that people will actually follow.",
  },
  {
    num: "03",
    title: "Execute",
    headline: "Drive delivery forward.",
    body: "I manage the process, coordinate the team, track what's moving and what's not, and remove blockers before they become problems. Work gets done. Deadlines get met.",
  },
  {
    num: "04",
    title: "Document",
    headline: "Lock in what was built.",
    body: "Every system I build gets documented. SOPs, handover notes, process guides — so the team can operate independently and the work doesn't disappear when I'm done.",
  },
];

export default function HowIWork() {
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20 reveal">
          <div>
            <span className="font-label block mb-5" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
              Process
            </span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: 0.9, color: "var(--cream)" }}
            >
              HOW I<br />WORK.
            </h2>
          </div>
          <p style={{ fontSize: "1rem", color: "var(--cream-dim)", lineHeight: 1.75, maxWidth: "420px" }}>
            Every engagement follows the same philosophy: understand the problem clearly, build
            the right solution, execute with consistency, and document everything so the value stays.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="reveal p-8 md:p-10"
              style={{
                background: "var(--surface)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="flex items-end justify-between mb-8">
                <span
                  className="font-display"
                  style={{ fontSize: "4rem", color: "var(--border-accent)", lineHeight: 1 }}
                >
                  {step.num}
                </span>
                <div
                  className="w-8 h-px"
                  style={{ background: "var(--accent)" }}
                />
              </div>

              <div
                className="font-label mb-2"
                style={{ fontSize: "0.65rem", color: "var(--accent)" }}
              >
                {step.title}
              </div>
              <div
                className="font-display mb-4"
                style={{ fontSize: "1.2rem", lineHeight: 1.1, color: "var(--cream)" }}
              >
                {step.headline}
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--cream-dim)", lineHeight: 1.7 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
