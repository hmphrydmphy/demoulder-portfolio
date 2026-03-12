import { skills, experience } from "@/lib/data";
import {
  SiClickup,
  SiJira,
  SiAsana,
  SiNotion,
  SiShopify,
  SiTrello,
} from "react-icons/si";

const TOOLS = [
  { Icon: SiClickup, name: "ClickUp", color: "#7B68EE" },
  { Icon: SiJira,    name: "Jira",    color: "#2684FF" },
  { Icon: SiAsana,   name: "Asana",   color: "#F06A6A" },
  { Icon: SiNotion,  name: "Notion",  color: "#0f0c08" },
  { Icon: SiShopify, name: "Shopify", color: "#2a5a1a" },
  { Icon: SiTrello,  name: "Trello",  color: "#0079BF" },
];

export default function AboutSkills() {
  return (
    <section id="about" style={{ background: "var(--accent)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left — Bio + Experience */}
          <div className="reveal">
            <span className="font-label block mb-6" style={{ color: "rgba(15,12,8,0.5)", fontSize: "0.68rem" }}>
              About Humps
            </span>
            <h2
              className="font-display mb-10"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", color: "var(--bg)", lineHeight: 0.88 }}
            >
              ENGINEER.<br />STRATEGIST.<br />EXECUTOR.
            </h2>

            <p className="leading-relaxed mb-5 text-base" style={{ color: "rgba(15,12,8,0.8)", fontFamily: "var(--font-dm-sans)" }}>
              I hold a{" "}
              <strong style={{ color: "var(--bg)" }}>BS in Computer Engineering</strong>{" "}
              (With Academic Distinction, 2022) from Asia Pacific College — Best Project award,
              Best Presenter, Honor&apos;s List.
            </p>
            <p className="leading-relaxed mb-12 text-base" style={{ color: "rgba(15,12,8,0.8)", fontFamily: "var(--font-dm-sans)" }}>
              4+ years across digital marketing agencies, cybersecurity firms, and e-commerce
              operations — always at the intersection of{" "}
              <strong style={{ color: "var(--bg)" }}>strategy, quality, and execution</strong>.
            </p>

            {/* Experience */}
            <div className="space-y-5">
              {experience.map((exp, i) => (
                <div key={i} className="flex gap-4 items-start pb-5" style={{ borderBottom: "1px solid rgba(15,12,8,0.12)" }}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "rgba(15,12,8,0.4)" }} />
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--bg)", fontFamily: "var(--font-dm-sans)" }}>
                      {exp.title}
                    </div>
                    <div className="font-label mt-0.5" style={{ color: "rgba(15,12,8,0.5)", fontSize: "0.62rem" }}>
                      {exp.company} · {exp.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills + Tools */}
          <div className="reveal">
            <span className="font-label block mb-10" style={{ color: "rgba(15,12,8,0.5)", fontSize: "0.68rem" }}>
              Core Skills
            </span>

            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-3">
                    <span className="font-label" style={{ color: "var(--bg)", fontSize: "0.72rem" }}>{skill.label}</span>
                    <span className="font-label" style={{ color: "rgba(15,12,8,0.45)", fontSize: "0.65rem" }}>{skill.level}%</span>
                  </div>
                  <div className="w-full rounded-full" style={{ height: "1px", background: "rgba(15,12,8,0.15)" }}>
                    <div
                      className="skill-bar-fill rounded-full"
                      style={{ "--skill-w": `${skill.level}%`, height: "1px" } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools with icons */}
            <div className="mt-14">
              <span className="font-label block mb-6" style={{ color: "rgba(15,12,8,0.5)", fontSize: "0.65rem" }}>
                Tools
              </span>
              <div className="grid grid-cols-2 gap-3">
                {TOOLS.map(({ Icon, name, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 px-4 py-3"
                    style={{ background: "rgba(15,12,8,0.08)", border: "1px solid rgba(15,12,8,0.12)" }}
                  >
                    <Icon size={18} color={color} />
                    <span className="font-label" style={{ color: "var(--bg)", fontSize: "0.65rem" }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
