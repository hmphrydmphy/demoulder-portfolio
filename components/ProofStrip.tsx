const ITEMS = [
  "Technical Project Manager",
  "QA Engineer",
  "Operations & Systems Builder",
  "SOP Creation",
  "Agile Delivery",
  "Cross-functional Coordination",
  "Executive Support",
  "Workflow Design",
  "Available Remote Worldwide",
  "Based in the Philippines",
];

export default function ProofStrip() {
  return (
    <div
      className="relative overflow-hidden py-4 border-y"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--surface), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--surface), transparent)" }}
      />

      {/* Scrolling track */}
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: "proof-scroll 30s linear infinite" }}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5">
            <span
              className="font-label"
              style={{ fontSize: "0.65rem", color: "var(--cream-dim)", letterSpacing: "0.12em" }}
            >
              {item}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "var(--accent)" }}
            />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes proof-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
