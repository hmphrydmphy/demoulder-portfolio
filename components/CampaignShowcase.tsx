import Image from "next/image";
import { campaigns } from "@/lib/data";

export default function CampaignShowcase() {
  const large = campaigns.find((c) => c.size === "large")!;
  const small = campaigns.filter((c) => c.size === "small");

  return (
    <section id="work" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <span className="font-label text-grey block mb-3">CAMPAIGN WORK</span>
            <h2 className="font-display text-cream" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              SELECTED<br />PROJECTS.
            </h2>
          </div>
          <p
            className="text-grey max-w-sm text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Real clients. Real deliverables. Every project driven by clear strategy and measurable outcomes.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-5 gap-4" style={{ gridTemplateRows: "auto" }}>
          {/* Large card — spans 3 columns and 2 rows */}
          <div
            className="md:col-span-3 md:row-span-2 campaign-card rounded-xl cursor-pointer reveal"
            style={{ minHeight: "480px" }}
          >
            <div className="relative w-full h-full" style={{ minHeight: "480px" }}>
              <Image
                src={large.image}
                alt={large.brand}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="campaign-overlay" />
              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                <span className="font-label text-cream/60 mb-3">{large.tag}</span>
                <h3
                  className="font-display text-cream mb-2"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  {large.brand}
                </h3>
                <p className="font-label text-red mb-4">{large.service}</p>
                <p
                  className="text-cream/70 text-sm leading-relaxed max-w-md mb-6"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {large.description}
                </p>
                {/* Results */}
                <div className="flex gap-6 flex-wrap">
                  {large.results.map((r) => (
                    <div key={r.label}>
                      <div className="font-display text-yellow" style={{ fontSize: "1.8rem" }}>
                        {r.value}
                      </div>
                      <div className="font-label text-cream/50" style={{ fontSize: "0.6rem" }}>
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Small cards — span 2 columns each, stacked */}
          {small.map((item, i) => (
            <div
              key={item.id}
              className="md:col-span-2 campaign-card rounded-xl cursor-pointer reveal"
              style={{
                minHeight: "230px",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="relative w-full h-full" style={{ minHeight: "230px" }}>
                <Image
                  src={item.image}
                  alt={item.brand}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="campaign-overlay" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <span className="font-label text-cream/50 mb-1" style={{ fontSize: "0.6rem" }}>
                    {item.tag}
                  </span>
                  <h3 className="font-display text-cream" style={{ fontSize: "1.6rem" }}>
                    {item.brand}
                  </h3>
                  <p className="font-label text-red mt-1">{item.service}</p>
                  {item.results.map((r) => (
                    <div key={r.label} className="mt-2">
                      <span className="font-display text-yellow" style={{ fontSize: "1.4rem" }}>
                        {r.value}
                      </span>
                      <span className="font-label text-cream/40 ml-2" style={{ fontSize: "0.55rem" }}>
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
