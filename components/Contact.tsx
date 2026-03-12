"use client";

export default function Contact() {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dhpimentel/" },
    { label: "WhatsApp", href: "https://wa.me/639762608875" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ];

  return (
    <section id="contact" className="section" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="rule mb-20" />

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div className="reveal">
            <span className="font-label block mb-6" style={{ color: "var(--accent)" }}>Get in touch</span>
            <h2 className="font-display mb-8" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", lineHeight: 0.88, color: "var(--cream)" }}>
              LET&apos;S<br />BUILD<br />SOMETHING.
            </h2>
            <p className="leading-relaxed max-w-sm mb-10" style={{ fontSize: "1rem", color: "var(--cream-dim)" }}>
              Whether you need a project manager, a content strategist, or someone who can do both — I&apos;m available and ready.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { label: "hmphrydmphy@gmail.com", href: "mailto:hmphrydmphy@gmail.com" },
                { label: "+63 976 260 8875", href: "https://wa.me/639762608875", external: true },
                { label: "linkedin.com/in/dhpimentel", href: "https://www.linkedin.com/in/dhpimentel/", external: true },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="font-label flex items-center gap-3 transition-colors"
                  style={{ fontSize: "0.72rem", color: "var(--cream-dim)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream-dim)")}
                >
                  <span style={{ color: "var(--accent)" }}>→</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal">
            <div className="p-10 mb-6" style={{ border: "1px solid var(--border)", background: "var(--bg)" }}>
              <span className="font-label block mb-4" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>Email</span>
              <a
                href="mailto:hmphrydmphy@gmail.com"
                className="font-display block transition-colors"
                style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)", lineHeight: 1.15, color: "var(--cream)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
              >
                hmphrydmphy@gmail.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="mailto:hmphrydmphy@gmail.com" className="btn-red flex-1 text-center">Send an Email</a>
              <a href="https://wa.me/639762608875" target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 text-center">WhatsApp Me</a>
            </div>

            <div className="flex flex-wrap gap-2">
              {links.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label transition-colors px-4 py-2.5"
                  style={{ border: "1px solid var(--border)", fontSize: "0.62rem", color: "var(--cream-dim)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--cream-dim)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="rule mt-20 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-end gap-0.5">
            <span className="font-display text-xl tracking-widest" style={{ color: "var(--cream)" }}>HUMPS</span>
            <span className="font-display text-2xl" style={{ lineHeight: 1, color: "var(--accent)" }}>.</span>
          </div>
          <span className="font-label" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>
            © {new Date().getFullYear()} Demoulder Humphrey Pimentel · Rodriguez, Rizal, Philippines
          </span>
        </div>

      </div>
    </section>
  );
}
