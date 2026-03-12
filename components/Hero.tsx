import Image from "next/image";
import { heroStats } from "@/lib/data";
import FloatingIcons from "./FloatingIcons";
import {
  SiJira,
  SiNotion,
  SiAsana,
  SiTrello,
  SiSlack,
  SiFigma,
} from "react-icons/si";

const TOOLS = [
  { Icon: SiJira,   name: "Jira",   color: "#2684FF" },
  { Icon: SiNotion, name: "Notion", color: "#e8e0cc" },
  { Icon: SiAsana,  name: "Asana",  color: "#F06A6A" },
  { Icon: SiTrello, name: "Trello", color: "#0079BF" },
  { Icon: SiSlack,  name: "Slack",  color: "#e8b96e" },
  { Icon: SiFigma,  name: "Figma",  color: "#F24E1E" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--bg)", minHeight: "100dvh" }}
    >
      {/* Floating icons — background layer */}
      <FloatingIcons />

      {/* Warm radial glow top-right */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(232,144,10,0.08) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          style={{ minHeight: "100dvh", paddingTop: "7rem", paddingBottom: "5rem" }}
        >
          {/* ── Left: Text ── */}
          <div>
            {/* Available badge */}
            <div className="flex items-center gap-2 mb-8 animate-fade-up">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#22c55e", boxShadow: "0 0 8px rgba(34,197,94,0.6)" }}
              />
              <span className="font-label" style={{ color: "var(--cream-dim)", fontSize: "0.68rem" }}>
                Available for new projects
              </span>
            </div>

            {/* Role */}
            <span
              className="font-label block mb-3 animate-fade-up delay-100"
              style={{ color: "var(--accent)", fontSize: "0.7rem" }}
            >
              Technical PM · QA Engineer · Operations Builder
            </span>

            {/* Name */}
            <h1
              className="font-display animate-fade-up delay-100"
              style={{
                fontSize: "clamp(5rem, 13vw, 11rem)",
                color: "var(--cream)",
                lineHeight: 0.88,
              }}
            >
              HUMPS
            </h1>

            <p
              className="font-label animate-fade-up delay-200 mt-3 mb-2"
              style={{ color: "var(--dim)", fontSize: "0.65rem" }}
            >
              Demoulder Humphrey Pimentel
            </p>

            <p
              className="animate-fade-up delay-300 mt-5 mb-10 max-w-md"
              style={{
                color: "var(--cream-dim)",
                fontSize: "1rem",
                fontFamily: "var(--font-dm-sans)",
                lineHeight: 1.8,
              }}
            >
              I bring structure, clarity, and execution to fast-moving teams.
              Based in the Philippines — working remotely with founders, agencies,
              and growing businesses worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-fade-up delay-400 mb-14">
              <a href="/work" className="btn-primary">View Case Studies</a>
              <a href="/contact" className="btn-ghost">Let&apos;s Talk</a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 animate-fade-up delay-500 mb-12">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-display"
                    style={{ fontSize: "2.6rem", color: "var(--accent)", lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-label mt-1" style={{ color: "var(--cream-dim)", fontSize: "0.62rem" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tools strip */}
            <div className="animate-fade-up delay-600">
              <span className="font-label block mb-4" style={{ fontSize: "0.6rem", color: "var(--dim)" }}>
                Tools I Use
              </span>
              <div className="flex flex-wrap gap-5">
                {TOOLS.map(({ Icon, name, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2"
                    style={{ color: "var(--cream-dim)" }}
                  >
                    <Icon size={16} color={color} />
                    <span className="font-label" style={{ fontSize: "0.58rem" }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="flex justify-center md:justify-end items-center animate-fade-up delay-200">
            <div className="relative" style={{ width: "380px", height: "500px", maxWidth: "85vw" }}>
              {/* Warm glow blob behind */}
              <div
                aria-hidden="true"
                className="absolute pointer-events-none"
                style={{
                  inset: 0,
                  background: "rgba(232,144,10,0.08)",
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  transform: "translate(20px, 20px) scale(1.06)",
                }}
              />
              {/* Amber border ring */}
              <div
                aria-hidden="true"
                className="absolute pointer-events-none"
                style={{
                  inset: "-3px",
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  border: "2px solid rgba(232,144,10,0.3)",
                }}
              />
              {/* Photo */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/humps-profile.jpg"
                  alt="Demoulder Humphrey Pimentel — Technical Project Manager & QA Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 85vw, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-600">
        <span className="font-label" style={{ fontSize: "0.6rem", color: "var(--dim)" }}>scroll</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
      </div>
    </section>
  );
}
