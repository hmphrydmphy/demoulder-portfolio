import Image from "next/image";
import { campaigns } from "@/lib/data";

export default function CampaignShowcase() {
  const large = campaigns.find((c) => c.size === "large")!;
  const small = campaigns.filter((c) => c.size === "small");

  return (
    <section id="work" className="section" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 reveal">
          <div>
            <span className="font-label block mb-5" style={{ color: "var(--accent)" }}>Campaign Work</span>
            <h2 className="font-display" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", color: "var(--cream)" }}>
              SELECTED<br />PROJECTS.
            </h2>
          </div>
          <p className="max-w-xs leading-relaxed" style={{ fontSize: "0.95rem", color: "var(--cream-dim)" }}>
            Real clients. Real deliverables. Every project driven by strategy and measurable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-px" style={{ background: "var(--border)" }}>
          {/* Large card */}
          <div className="md:col-span-3 md:row-span-2 campaign-card reveal" style={{ minHeight: "500px", background: "var(--surface)" }}>
            <div className="relative w-full h-full" style={{ minHeight: "500px" }}>
              <Image src={large.image} alt={large.brand} fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
              <div className="campaign-overlay" />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-10">
                <span className="font-label mb-4" style={{ fontSize: "0.65rem", color: "rgba(242,232,214,0.4)" }}>{large.tag}</span>
                <h3 className="font-display mb-2" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#ffffff" }}>{large.brand}</h3>
                <p className="font-label mb-5" style={{ fontSize: "0.65rem", color: "var(--accent)" }}>{large.service}</p>
                <p className="leading-relaxed max-w-md mb-8" style={{ fontSize: "0.95rem", fontFamily: "var(--font-dm-sans)", color: "rgba(242,232,214,0.6)" }}>{large.description}</p>
                <div className="flex gap-8 flex-wrap">
                  {large.results.map((r) => (
                    <div key={r.label}>
                      <div className="font-display" style={{ fontSize: "2.2rem", color: "var(--accent)" }}>{r.value}</div>
                      <div className="font-label" style={{ fontSize: "0.6rem", color: "rgba(242,232,214,0.4)" }}>{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Small cards */}
          {small.map((item, i) => (
            <div key={item.id} className="md:col-span-2 campaign-card reveal" style={{ minHeight: "245px", background: "var(--surface)", transitionDelay: `${i * 100}ms` }}>
              <div className="relative w-full h-full" style={{ minHeight: "245px" }}>
                <Image src={item.image} alt={item.brand} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
                <div className="campaign-overlay" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-7">
                  <span className="font-label mb-2" style={{ fontSize: "0.6rem", color: "rgba(242,232,214,0.4)" }}>{item.tag}</span>
                  <h3 className="font-display mb-1" style={{ fontSize: "1.8rem", color: "#ffffff" }}>{item.brand}</h3>
                  <p className="font-label" style={{ fontSize: "0.62rem", color: "var(--accent)" }}>{item.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
