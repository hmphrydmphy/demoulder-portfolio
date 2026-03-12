"use client";

import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--accent)", padding: "6rem 0" }}
    >
      {/* Subtle texture lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span
              className="font-label block mb-5"
              style={{ fontSize: "0.65rem", color: "rgba(15,12,8,0.6)" }}
            >
              Ready to work together?
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                lineHeight: 0.9,
                color: "var(--bg)",
              }}
            >
              LET&apos;S BUILD<br />SOMETHING<br />THAT WORKS.
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(15,12,8,0.75)",
                lineHeight: 1.75,
                maxWidth: "380px",
              }}
            >
              If your team needs structure, better workflows, or reliable project management
              — I&apos;m available and ready to start.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                style={{
                  background: "var(--bg)",
                  color: "var(--cream)",
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  padding: "1rem 2rem",
                  display: "inline-block",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Get in Touch
              </Link>
              <a
                href="/assets/resume/humps-pimentel-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: "1px solid rgba(15,12,8,0.35)",
                  color: "var(--bg)",
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  padding: "1rem 2rem",
                  display: "inline-block",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(15,12,8,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                Download CV
              </a>
            </div>

            {/* Contact quick links */}
            <div className="flex items-center gap-6 mt-2">
              <a
                href="mailto:hmphrydmphy@gmail.com"
                className="font-label"
                style={{ fontSize: "0.62rem", color: "rgba(15,12,8,0.6)", textDecoration: "underline" }}
              >
                hmphrydmphy@gmail.com
              </a>
              <a
                href="https://wa.me/639762608875"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label"
                style={{ fontSize: "0.62rem", color: "rgba(15,12,8,0.6)", textDecoration: "underline" }}
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
