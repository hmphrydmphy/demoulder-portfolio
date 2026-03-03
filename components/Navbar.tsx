"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(10,10,10,0.9)", borderColor: "rgba(245,240,232,0.08)" } : {}}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-end gap-0.5 group">
          <span className="font-display text-cream text-2xl tracking-widest group-hover:text-cream/80 transition-colors">
            HUMPS
          </span>
          <span className="text-red text-3xl leading-none pb-0.5">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-label text-grey hover:text-cream transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--red)" }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 font-label text-cream px-5 py-2.5 transition-all duration-200 hover:bg-cream hover:text-bg"
          style={{ border: "1px solid rgba(245,240,232,0.2)" }}
        >
          HIRE ME
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
          style={{
            background: "rgba(10,10,10,0.97)",
            backdropFilter: "blur(16px)",
            borderColor: "rgba(245,240,232,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label text-grey hover:text-cream transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-label text-cream px-5 py-3 text-center mt-2"
            style={{ border: "1px solid var(--red)", background: "var(--red)" }}
            onClick={() => setMenuOpen(false)}
          >
            HIRE ME
          </a>
        </div>
      )}
    </header>
  );
}
