import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesSection() {
  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <span className="font-label block mb-5" style={{ color: "var(--accent)", fontSize: "0.68rem" }}>
              Services
            </span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: 0.9, color: "var(--cream)" }}
            >
              HOW I<br />HELP.
            </h2>
          </div>
          <div className="max-w-sm">
            <p style={{ fontSize: "0.95rem", color: "var(--cream-dim)", lineHeight: 1.75 }}>
              I work best with founders, agencies, and teams that need reliable operational
              and project management support — remote, structured, and execution-focused.
            </p>
            <Link href="/services" className="btn-ghost mt-6 inline-block">
              All Services
            </Link>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {services.slice(0, 3).map((service, i) => (
            <div
              key={service.id}
              className="reveal p-10"
              style={{
                background: "var(--bg)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div
                className="font-label mb-2"
                style={{ fontSize: "0.62rem", color: "var(--accent)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="font-display mb-4"
                style={{ fontSize: "1.4rem", lineHeight: 1.05, color: "var(--cream)" }}
              >
                {service.title}
              </h3>
              <p
                className="mb-6 leading-relaxed"
                style={{ fontSize: "0.9rem", color: "var(--cream-dim)" }}
              >
                {service.description}
              </p>
              <div
                className="pt-6 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="font-label mb-3" style={{ fontSize: "0.58rem", color: "var(--dim)" }}>
                  Deliverables
                </div>
                <ul className="flex flex-col gap-1.5">
                  {service.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span style={{ color: "var(--accent)", fontSize: "0.75rem", marginTop: "1px" }}>—</span>
                      <span style={{ fontSize: "0.85rem", color: "var(--cream-dim)", lineHeight: 1.5 }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="grid md:grid-cols-2 gap-px mt-px"
          style={{ background: "var(--border)" }}
        >
          {services.slice(3).map((service, i) => (
            <div
              key={service.id}
              className="reveal p-10"
              style={{
                background: "var(--bg)",
                transitionDelay: `${(i + 3) * 80}ms`,
              }}
            >
              <div
                className="font-label mb-2"
                style={{ fontSize: "0.62rem", color: "var(--accent)" }}
              >
                {String(i + 4).padStart(2, "0")}
              </div>
              <h3
                className="font-display mb-4"
                style={{ fontSize: "1.4rem", lineHeight: 1.05, color: "var(--cream)" }}
              >
                {service.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ fontSize: "0.9rem", color: "var(--cream-dim)" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
