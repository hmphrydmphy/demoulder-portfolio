"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
        scrolled ? "backdrop-blur-md border-b" : "bg-transparent"
      }`}
      style={
        scrolled
          ? { background: "rgba(15,12,8,0.92)", borderColor: "rgba(242,232,214,0.07)" }
          : {}
      }
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-end gap-0.5 group">
          <span
            className="font-display text-2xl tracking-widest group-hover:opacity-75 transition-opacity"
            style={{ color: "var(--cream)" }}
          >
            HUMPS
          </span>
          <span className="text-3xl leading-none pb-0.5" style={{ color: "var(--accent)" }}>.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-label transition-colors duration-200 relative group"
                style={{ color: "var(--cream-dim)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream-dim)")}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--accent)" }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center font-label px-5 py-2.5 transition-opacity duration-200 hover:opacity-85"
          style={{ background: "var(--accent)", color: "var(--bg)", fontSize: "0.68rem" }}
        >
          HIRE ME
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[
            menuOpen ? "rotate-45 translate-y-2" : "",
            menuOpen ? "opacity-0" : "",
            menuOpen ? "-rotate-45 -translate-y-2" : "",
          ].map((cls, i) => (
            <span
              key={i}
              className={`block h-0.5 w-6 transition-all duration-300 ${cls}`}
              style={{ background: "var(--cream)" }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
          style={{
            background: "rgba(15,12,8,0.97)",
            backdropFilter: "blur(16px)",
            borderColor: "rgba(242,232,214,0.07)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-label"
              style={{ color: "var(--cream-dim)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-label px-5 py-3 text-center mt-2"
            style={{ background: "var(--accent)", color: "var(--bg)" }}
            onClick={() => setMenuOpen(false)}
          >
            HIRE ME
          </Link>
        </div>
      )}
    </header>
  );
}
