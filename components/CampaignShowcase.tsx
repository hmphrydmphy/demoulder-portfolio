import Image from "next/image";
import { campaigns } from "@/lib/data";

export default function CampaignShowcase() {
  const large = campaigns.find((c) => c.size === "large")!;
  const small = campaigns.filter((c) => c.size === "small");

  return (
    <section id="work" className="section" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 reveal">
          <div>
            <span className="font-label text-dim block mb-5">Campaign Work</span>
            <h2
              className="font-display text-cream"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              SELECTED<br />PROJECTS.
            </h2>
          </div>
          <p className="text-dim max-w-xs leading-relaxed" style={{ fontSize: "0.95rem" }}>
            Real clients. Real deliverables. Every project driven by strategy and measurable outcomes.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-5 gap-px" style={{ background: "var(--border)" }}>
          {/* Large card — 3 cols, 2 rows */}
          <div
            className="md:col-span-3 md:row-span-2 campaign-card reveal"
            style={{ minHeight: "500px", background: "#0a0a0a" }}
          >
            <div className="relative w-full h-full" style={{ minHeight: "500px" }}>
              <Image
                src={large.image}
                alt={large.brand}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="campaign-overlay" />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-10">
                <span className="font-label text-cream/40 mb-4" style={{ fontSize: "0.65rem" }}>
                  {large.tag}
                </span>
                <h3
                  className="font-display text-cream mb-2"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  {large.brand}
                </h3>
                <p className="font-label text-red mb-5" style={{ fontSize: "0.65rem" }}>
                  {large.service}
                </p>
                <p
                  className="text-cream/60 leading-relaxed max-w-md mb-8"
                  style={{ fontSize: "0.95rem", fontFamily: "var(--font-dm-sans)" }}
                >
                  {large.description}
                </p>
                <div className="flex gap-8 flex-wrap">
                  {large.results.map((r) => (
                    <div key={r.label}>
                      <div className="font-display text-red" style={{ fontSize: "2.2rem" }}>
                        {r.value}
                      </div>
                      <div className="font-label text-cream/40" style={{ fontSize: "0.6rem" }}>
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Small cards */}
          {small.map((item, i) => (
            <div
              key={item.id}
              className="md:col-span-2 campaign-card reveal"
              style={{
                minHeight: "245px",
                background: "#0a0a0a",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="relative w-full h-full" style={{ minHeight: "245px" }}>
                <Image
                  src={item.image}
                  alt={item.brand}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="campaign-overlay" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-7">
                  <span className="font-label text-cream/40 mb-2" style={{ fontSize: "0.6rem" }}>
                    {item.tag}
                  </span>
                  <h3 className="font-display text-cream mb-1" style={{ fontSize: "1.8rem" }}>
                    {item.brand}
                  </h3>
                  <p className="font-label text-red" style={{ fontSize: "0.62rem" }}>
                    {item.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
