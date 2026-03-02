export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decorative orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-float pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, #a855f7 20%, transparent), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-float delay-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, #ec4899 15%, transparent), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-muted mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to new opportunities · Rodriguez, Rizal, PH
        </div>

        {/* Name */}
        <h1 className="animate-fade-up delay-100 font-display font-bold text-6xl md:text-8xl mb-4 leading-tight">
          <span className="gradient-text">Demoulder</span>
          <br />
          <span className="text-foreground text-4xl md:text-5xl font-semibold">
            Humphrey Pimentel
          </span>
        </h1>

        {/* Title */}
        <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted font-medium mb-2 tracking-wide">
          Marketing Expert &amp; Creative Strategist
        </p>
        <p className="animate-fade-up delay-200 text-base text-muted/70 font-medium mb-6 tracking-wide">
          Project Manager · QA Engineer · Operations Specialist
        </p>

        {/* Tagline */}
        <p className="animate-fade-up delay-300 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed mb-10">
          I combine a{" "}
          <span className="text-foreground font-semibold">
            Computer Engineering background
          </span>{" "}
          with hands-on experience in marketing, QA, and operations to deliver
          results that are{" "}
          <span className="text-foreground font-semibold">
            measurable and built to last
          </span>
          .
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="btn-gradient px-8 py-3.5 rounded-full text-base font-semibold text-white inline-block"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn-outline px-8 py-3.5 rounded-full text-base font-semibold text-foreground inline-block"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up delay-500 mt-20 flex flex-col items-center gap-2 text-muted text-sm">
          <span>Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </div>
    </section>
  );
}
