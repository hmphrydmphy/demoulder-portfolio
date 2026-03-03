import { heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* Red diagonal panel — absolutely positioned */}
      <div
        className="absolute inset-y-0 left-0 z-0 hidden md:block"
        style={{
          width: "54%",
          background: "#e84f1d",
          clipPath: "polygon(0 0, 100% 0, 84% 100%, 0 100%)",
        }}
      />
      {/* Mobile red strip */}
      <div
        className="absolute top-0 left-0 right-0 md:hidden"
        style={{ height: "55%", background: "#e84f1d" }}
      />

      {/* Content grid */}
      <div className="relative z-10 grid md:grid-cols-2 min-h-screen">
        {/* ── Left: Name + CTA ── */}
        <div className="flex flex-col justify-center px-8 md:px-16 pt-28 pb-16 md:py-0">
          {/* Label */}
          <span className="font-label text-bg/60 mb-4 animate-fade-up">
            Content Strategist · Project Manager
          </span>

          {/* Name */}
          <h1
            className="font-display text-bg animate-fade-up delay-100"
            style={{ fontSize: "clamp(5.5rem, 16vw, 14rem)" }}
          >
            HUMPS
          </h1>

          {/* Full name */}
          <p className="font-label text-bg/70 mt-2 mb-6 animate-fade-up delay-200">
            Demoulder Humphrey Pimentel
          </p>

          {/* Tagline */}
          <p
            className="text-bg/80 text-base md:text-lg leading-relaxed mb-10 max-w-xs animate-fade-up delay-300"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            I build content systems that make brands impossible to ignore.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 animate-fade-up delay-400">
            <a href="#work" className="btn-dark font-label text-sm px-6 py-3">
              VIEW WORK
            </a>
            <a href="#contact" className="btn-outline-on-red font-label text-sm px-6 py-3">
              LET&apos;S TALK
            </a>
          </div>
        </div>

        {/* ── Right: Stats ── */}
        <div className="flex flex-col justify-center px-8 md:px-16 pb-20 md:py-0 gap-6">
          {/* Available badge */}
          <div className="flex items-center gap-2 animate-fade-up delay-200">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#4ade80", boxShadow: "0 0 8px #4ade80" }}
            />
            <span className="font-label text-grey">Available for new projects</span>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-6 animate-fade-up`}
                style={{
                  border: "1px solid rgba(245,240,232,0.08)",
                  animationDelay: `${0.3 + i * 0.1}s`,
                }}
              >
                <div
                  className="font-display text-yellow"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  {stat.value}
                </div>
                <div className="font-label text-grey mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 animate-fade-up delay-500">
            <span className="font-label text-grey">📍 Rodriguez, Rizal, Philippines</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600"
        style={{ color: "rgba(245,240,232,0.3)" }}
      >
        <span className="font-label" style={{ fontSize: "0.6rem" }}>SCROLL</span>
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(245,240,232,0.4), transparent)" }}
        />
      </div>
    </section>
  );
}
