export default function Contact() {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dhpimentel/" },
    { label: "WhatsApp", href: "https://wa.me/639762608875" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ];

  return (
    <section id="contact" className="section" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="rule mb-20" />

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div className="reveal">
            <span className="font-label text-dim block mb-6">Get in touch</span>
            <h2
              className="font-display text-cream mb-8"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", lineHeight: 0.88 }}
            >
              LET&apos;S<br />BUILD<br />SOMETHING.
            </h2>
            <p className="text-dim leading-relaxed max-w-sm mb-10" style={{ fontSize: "1rem" }}>
              Whether you need a project manager, a content strategist, or someone who can do both
              — I&apos;m available and ready.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:hmphrydmphy@gmail.com"
                className="font-label text-cream flex items-center gap-3 hover:text-red transition-colors"
                style={{ fontSize: "0.72rem" }}
              >
                <span className="text-red">→</span>
                hmphrydmphy@gmail.com
              </a>
              <a
                href="https://wa.me/639762608875"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-cream flex items-center gap-3 hover:text-red transition-colors"
                style={{ fontSize: "0.72rem" }}
              >
                <span className="text-red">→</span>
                +63 976 260 8875
              </a>
              <a
                href="https://www.linkedin.com/in/dhpimentel/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-cream flex items-center gap-3 hover:text-red transition-colors"
                style={{ fontSize: "0.72rem" }}
              >
                <span className="text-red">→</span>
                linkedin.com/in/dhpimentel
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="reveal">
            {/* Email block */}
            <div className="p-10 mb-6" style={{ border: "1px solid var(--border)" }}>
              <span className="font-label text-dim block mb-4" style={{ fontSize: "0.62rem" }}>Email</span>
              <a
                href="mailto:hmphrydmphy@gmail.com"
                className="font-display text-cream hover:text-red transition-colors block"
                style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)", lineHeight: 1.15 }}
              >
                hmphrydmphy@gmail.com
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="mailto:hmphrydmphy@gmail.com"
                className="btn-red flex-1 text-center"
              >
                Send an Email
              </a>
              <a
                href="https://wa.me/639762608875"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex-1 text-center"
              >
                WhatsApp Me
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-2">
              {links.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label text-dim hover:text-cream transition-colors px-4 py-2.5"
                  style={{ border: "1px solid var(--border)", fontSize: "0.62rem" }}
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
            <span className="font-display text-cream text-xl tracking-widest">HUMPS</span>
            <span className="font-display text-red text-2xl" style={{ lineHeight: 1 }}>.</span>
          </div>
          <span className="font-label text-dim" style={{ fontSize: "0.62rem" }}>
            © {new Date().getFullYear()} Demoulder Humphrey Pimentel · Rodriguez, Rizal, Philippines
          </span>
        </div>

      </div>
    </section>
  );
}
