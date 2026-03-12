import { brands } from "@/lib/data";

export default function Brands() {
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="mb-20 reveal">
          <span className="font-label block mb-5" style={{ color: "var(--accent)" }}>Brand Identities</span>
          <h2 className="font-display" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", color: "var(--cream)" }}>
            BRAND WORK.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
          {brands.map((brand, i) => (
            <div key={brand.name} className="brand-card reveal" style={{ background: "var(--bg)", transitionDelay: `${i * 80}ms` }}>
              <div className="relative flex flex-col justify-end p-6" style={{ background: brand.bg, minHeight: "220px" }}>
                <span className="font-display absolute top-4 right-5 opacity-15" style={{ fontSize: "6rem", color: brand.text, lineHeight: 1 }}>
                  {brand.name.charAt(0)}
                </span>
                <div>
                  <span className="font-label block mb-2" style={{ color: brand.text, opacity: 0.45, fontSize: "0.58rem" }}>Brand Identity</span>
                  <h3 className="font-display" style={{ color: brand.text, fontSize: "clamp(1rem, 2vw, 1.4rem)", lineHeight: 1 }}>{brand.name}</h3>
                </div>
              </div>
              <div className="p-6" style={{ background: "var(--surface)" }}>
                <p className="mb-5" style={{ fontSize: "0.88rem", fontFamily: "var(--font-dm-sans)", color: "var(--cream-dim)" }}>{brand.tagline}</p>
                <div className="flex gap-2">
                  {brand.swatches.map((s) => (
                    <div key={s} className="w-5 h-5 rounded-full" style={{ background: s, border: "1px solid rgba(242,232,214,0.1)" }} title={s} />
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
