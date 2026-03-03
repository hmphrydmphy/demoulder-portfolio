import { brands } from "@/lib/data";

export default function Brands() {
  return (
    <section className="py-24" style={{ background: "#111" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 reveal">
          <span className="font-label text-grey block mb-3">BRAND IDENTITIES</span>
          <h2 className="font-display text-cream" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            BRAND WORK.
          </h2>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className="brand-card rounded-xl overflow-hidden reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Color block (top 60%) */}
              <div
                className="relative flex items-end justify-start p-5"
                style={{
                  background: brand.bg,
                  minHeight: "200px",
                }}
              >
                {/* Brand mark — large initial */}
                <span
                  className="font-display absolute top-5 right-5 opacity-20"
                  style={{
                    fontSize: "5rem",
                    color: brand.text,
                    lineHeight: 1,
                  }}
                >
                  {brand.name.charAt(0)}
                </span>
                {/* Brand name */}
                <div>
                  <p className="font-label mb-1" style={{ color: brand.text, opacity: 0.6, fontSize: "0.55rem" }}>
                    BRAND IDENTITY
                  </p>
                  <h3
                    className="font-display leading-none"
                    style={{
                      color: brand.text,
                      fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                    }}
                  >
                    {brand.name}
                  </h3>
                </div>
              </div>

              {/* Bottom panel */}
              <div
                className="p-4"
                style={{ background: "#1a1a1a", borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <p
                  className="text-grey text-xs leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {brand.tagline}
                </p>
                {/* Color swatches */}
                <div className="flex gap-1.5">
                  {brand.swatches.map((swatch) => (
                    <div
                      key={swatch}
                      className="w-6 h-6 rounded-full border"
                      style={{
                        background: swatch,
                        borderColor: "rgba(255,255,255,0.1)",
                      }}
                      title={swatch}
                    />
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
