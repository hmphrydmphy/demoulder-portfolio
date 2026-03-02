import Image from "next/image";
import { portfolio } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 section-tint">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold tracking-widest text-orange-400 uppercase mb-3">
            Case Studies
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Work That{" "}
            <span className="gradient-text">Speaks for Itself</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Real clients. Real campaigns. Real numbers.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((item, i) => (
            <div
              key={item.id}
              className="glass rounded-2xl overflow-hidden reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.brand} campaign`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Tag */}
                <span
                  className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ background: item.accent }}
                >
                  {item.tag}
                </span>
                {/* Category */}
                <span className="absolute bottom-4 left-4 text-xs text-white/70 font-medium">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-1">
                  {item.brand}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: item.accent }}>
                  {item.campaign}
                </p>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-3">
                  {item.results.map((result) => (
                    <div
                      key={result.label}
                      className="flex-1 min-w-[100px] rounded-xl p-3 text-center"
                      style={{
                        background: `color-mix(in srgb, ${item.accent} 10%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${item.accent} 25%, transparent)`,
                      }}
                    >
                      <div
                        className="font-bold text-sm"
                        style={{ color: item.accent }}
                      >
                        {result.value}
                      </div>
                      <div className="text-xs text-muted mt-0.5">
                        {result.label}
                      </div>
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
