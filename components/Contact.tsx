export default function Contact() {
  const socials = [
    {
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/dhpimentel/",
    },
    {
      label: "WHATSAPP",
      href: "https://wa.me/639762608875",
    },
    {
      label: "INSTAGRAM",
      href: "https://instagram.com",
    },
    {
      label: "TIKTOK",
      href: "https://tiktok.com",
    },
  ];

  return (
    <section id="contact" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Top line */}
        <div
          className="w-full mb-16"
          style={{ height: "1px", background: "rgba(245,240,232,0.08)" }}
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Heading + CTA */}
          <div className="reveal">
            <span className="font-label text-grey block mb-6">GET IN TOUCH</span>
            <h2
              className="font-display text-cream mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.9 }}
            >
              LET&apos;S<br />BUILD<br />SOMETHING.
            </h2>
            <p
              className="text-grey text-base leading-relaxed max-w-sm mb-10"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Whether you need a project manager, a content strategist, or
              someone who can do both — I&apos;m available and ready.
            </p>
            {/* Links */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hmphrydmphy@gmail.com"
                className="font-label text-cream hover:text-yellow transition-colors flex items-center gap-3"
              >
                <span style={{ color: "#e84f1d" }}>→</span>
                hmphrydmphy@gmail.com
              </a>
              <a
                href="https://wa.me/639762608875"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-cream hover:text-yellow transition-colors flex items-center gap-3"
              >
                <span style={{ color: "#e84f1d" }}>→</span>
                +63 976 260 8875
              </a>
              <a
                href="https://www.linkedin.com/in/dhpimentel/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-cream hover:text-yellow transition-colors flex items-center gap-3"
              >
                <span style={{ color: "#e84f1d" }}>→</span>
                linkedin.com/in/dhpimentel
              </a>
            </div>
          </div>

          {/* Right: Big email + CTAs */}
          <div className="reveal">
            {/* Email block */}
            <div
              className="p-8 mb-6"
              style={{ border: "1px solid rgba(245,240,232,0.08)" }}
            >
              <span className="font-label text-grey block mb-3" style={{ fontSize: "0.6rem" }}>
                EMAIL
              </span>
              <a
                href="mailto:hmphrydmphy@gmail.com"
                className="font-display text-cream hover:text-yellow transition-colors block"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", lineHeight: 1.1 }}
              >
                hmphrydmphy@gmail.com
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="mailto:hmphrydmphy@gmail.com"
                className="font-label text-cream px-6 py-4 text-center flex-1 transition-all duration-200 hover:brightness-110"
                style={{ background: "#e84f1d", fontSize: "0.72rem" }}
              >
                SEND AN EMAIL
              </a>
              <a
                href="https://wa.me/639762608875"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-cream font-label text-cream px-6 py-4 text-center flex-1"
                style={{ fontSize: "0.72rem" }}
              >
                WHATSAPP ME
              </a>
            </div>

            {/* Social row */}
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label text-grey hover:text-cream transition-colors px-4 py-2"
                  style={{
                    border: "1px solid rgba(245,240,232,0.08)",
                    fontSize: "0.6rem",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(245,240,232,0.06)" }}
        >
          <div className="flex items-end gap-0.5">
            <span className="font-display text-cream text-xl tracking-widest">HUMPS</span>
            <span className="font-display text-red text-2xl pb-0.5">.</span>
          </div>
          <span className="font-label text-grey" style={{ fontSize: "0.6rem" }}>
            © {new Date().getFullYear()} Demoulder Humphrey Pimentel · Rodriguez, Rizal, Philippines
          </span>
        </div>
      </div>
    </section>
  );
}
