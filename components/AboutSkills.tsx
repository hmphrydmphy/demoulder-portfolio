import { skills, experience } from "@/lib/data";

export default function AboutSkills() {
  return (
    <section id="about" style={{ background: "#e84f1d" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* ── Left: Bio ── */}
          <div className="reveal">
            <span className="font-label text-bg/60 block mb-4">ABOUT HUMPS</span>
            <h2
              className="font-display text-bg mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              ENGINEER.<br />STRATEGIST.<br />EXECUTOR.
            </h2>
            <p
              className="text-bg/80 text-base leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              I hold a{" "}
              <strong className="text-bg">BS in Computer Engineering</strong>{" "}
              (With Academic Distinction, 2022) from Asia Pacific College. Best
              project award, best presenter, honor&apos;s list.
            </p>
            <p
              className="text-bg/80 text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Over 4+ years I&apos;ve worked in digital marketing agencies,
              cybersecurity firms, and e-commerce operations — always at the
              intersection of{" "}
              <strong className="text-bg">strategy, quality, and execution</strong>.
              I don&apos;t just manage projects — I build systems that make
              projects succeed.
            </p>

            {/* Education badge */}
            <div
              className="inline-flex flex-col p-4 mb-8"
              style={{ background: "rgba(10,10,10,0.15)", borderLeft: "3px solid rgba(10,10,10,0.4)" }}
            >
              <span className="font-label text-bg/60 text-[10px]">EDUCATION</span>
              <span className="font-display text-bg mt-1" style={{ fontSize: "1rem" }}>
                BS COMPUTER ENGINEERING
              </span>
              <span className="text-bg/70 text-xs mt-0.5" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Asia Pacific College · With Academic Distinction · 2022
              </span>
              <span className="font-label text-bg/60 text-[10px] mt-1">
                Best Project · Best Presenter · Honor&apos;s List
              </span>
            </div>

            {/* Experience list */}
            <div className="space-y-3">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start pb-3"
                  style={{ borderBottom: "1px solid rgba(10,10,10,0.1)" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ background: "rgba(10,10,10,0.5)" }}
                  />
                  <div>
                    <div
                      className="text-bg text-xs font-semibold"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {exp.title}
                    </div>
                    <div className="font-label text-bg/60" style={{ fontSize: "0.6rem" }}>
                      {exp.company} · {exp.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Skill bars ── */}
          <div className="reveal">
            <span className="font-label text-bg/60 block mb-8">CORE SKILLS</span>

            <div className="space-y-7">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-2">
                    <span
                      className="font-label text-bg"
                      style={{ fontSize: "0.72rem" }}
                    >
                      {skill.label}
                    </span>
                    <span
                      className="font-label text-bg/60"
                      style={{ fontSize: "0.65rem" }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  {/* Bar track */}
                  <div
                    className="w-full h-0.5 rounded-full"
                    style={{ background: "rgba(10,10,10,0.2)" }}
                  >
                    {/* Bar fill */}
                    <div
                      className="skill-bar-fill h-full rounded-full"
                      style={
                        {
                          "--skill-w": `${skill.level}%`,
                          background: "#0a0a0a",
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-12">
              <span className="font-label text-bg/60 block mb-4" style={{ fontSize: "0.65rem" }}>
                PROJECT MANAGEMENT TOOLS
              </span>
              <div className="flex flex-wrap gap-2">
                {["ClickUp", "Jira", "Asana", "Monday", "MS Project", "Notion"].map((tool) => (
                  <span
                    key={tool}
                    className="font-label text-bg px-3 py-1.5"
                    style={{
                      border: "1px solid rgba(10,10,10,0.3)",
                      fontSize: "0.65rem",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
