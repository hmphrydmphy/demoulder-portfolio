import { stats, skills, experience } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 section-tint">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-3">
            About Me
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            The Engineer Who Became{" "}
            <span className="gradient-text">a Strategist</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio + Experience column */}
          <div className="reveal">
            <p className="text-lg text-muted leading-relaxed mb-4">
              I hold a{" "}
              <span className="text-foreground font-semibold">
                Bachelor of Science in Computer Engineering
              </span>{" "}
              (With Academic Distinction, 2022) from Asia Pacific College —
              best project award, best presenter, and honor&apos;s list. But
              what I&apos;ve built since graduation is where the real work
              begins.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-6">
              Over 4+ years I&apos;ve navigated digital marketing agencies,
              cybersecurity firms, e-commerce stores, and European customer
              operations — always in a role that sits at the intersection of
              <span className="text-foreground font-semibold">
                {" "}strategy, quality, and execution
              </span>
              . I don&apos;t just manage projects — I build the systems that
              make projects succeed.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="glass px-4 py-1.5 rounded-full text-sm text-foreground/80 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Education badge */}
            <div className="glass rounded-xl p-4 flex items-start gap-4">
              <div className="text-2xl">🎓</div>
              <div>
                <div className="font-semibold text-foreground text-sm">
                  BS Computer Engineering — With Academic Distinction
                </div>
                <div className="text-xs text-muted mt-0.5">
                  Asia Pacific College, Makati, Philippines · 2022
                </div>
                <div className="text-xs text-purple-400 mt-1">
                  Best Project Development · Best Presenter · Honor&apos;s List
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Stats + Experience */}
          <div className="reveal space-y-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card text-center">
                  <div className="font-display font-bold text-4xl gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Experience timeline */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold tracking-widest text-pink-400 uppercase mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground leading-snug">
                        {exp.title}
                      </div>
                      <div className="text-xs text-muted mt-0.5">
                        {exp.company} · {exp.period}
                      </div>
                    </div>
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
