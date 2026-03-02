import Image from "next/image";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold tracking-widest text-yellow-400 uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            What Clients{" "}
            <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Don&apos;t take my word for it — here&apos;s what the people I&apos;ve
            worked with have to say.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass rounded-2xl p-6 flex flex-col reveal ${
                i === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote mark */}
              <div className="testimonial-quote leading-none mb-2">&ldquo;</div>

              {/* Quote text */}
              <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
