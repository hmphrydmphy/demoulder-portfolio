import { heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* Red diagonal panel */}
      <div
        className="absolute inset-y-0 left-0 z-0 hidden md:block"
        style={{
          width: "52%",
          background: "#e84f1d",
          clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)",
        }}
      />
      {/* Mobile: red top half */}
      <div
        className="absolute top-0 left-0 right-0 md:hidden"
        style={{ height: "52%", background: "#e84f1d" }}
      />

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 min-h-screen">

        {/* Left — name + CTA */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-32 pb-16 md:py-0">
          <span className="font-label text-bg/50 mb-6 animate-fade-up" style={{ color: "rgba(10,10,10,0.5)" }}>
            Content Strategist · Project Manager
          </span>

          <h1
            className="font-display animate-fade-up delay-100"
            style={{
              fontSize: "clamp(7rem, 20vw, 18rem)",
              color: "#0a0a0a",
              lineHeight: 0.88,
            }}
          >
            HUMPS
          </h1>

          <p
            className="font-label animate-fade-up delay-200 mt-4 mb-2"
            style={{ color: "rgba(10,10,10,0.55)", fontSize: "0.68rem" }}
          >
            Demoulder Humphrey Pimentel
          </p>

          <p
            className="text-bg/75 text-base leading-relaxed mb-10 max-w-xs animate-fade-up delay-300"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(10,10,10,0.75)" }}
          >
            I build content systems that make brands impossible to ignore.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-up delay-400">
            <a href="#work" className="btn-dark-on-red">View Work</a>
            <a href="#contact" className="btn-ghost-on-red">Let&apos;s Talk</a>
          </div>
        </div>

        {/* Right — stats */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 pb-20 md:py-0 gap-8">
          <div className="flex items-center gap-2 animate-fade-up delay-200">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#4ade80", boxShadow: "0 0 8px rgba(74,222,128,0.6)" }}
            />
            <span className="font-label text-dim" style={{ fontSize: "0.68rem" }}>
              Available for new projects
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-8 animate-fade-up`}
                style={{
                  background: "#0a0a0a",
                  animationDelay: `${0.3 + i * 0.08}s`,
                }}
              >
                <div
                  className="font-display text-red"
                  style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                >
                  {stat.value}
                </div>
                <div className="font-label text-dim mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          <span className="font-label text-dim animate-fade-up delay-500" style={{ fontSize: "0.68rem" }}>
            📍 Rodriguez, Rizal, Philippines
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-up delay-600"
      >
        <span className="font-label" style={{ fontSize: "0.6rem", color: "rgba(240,236,228,0.25)" }}>
          scroll
        </span>
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(240,236,228,0.25), transparent)" }}
        />
      </div>
    </section>
  );
}
