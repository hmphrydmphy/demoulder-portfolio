import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold tracking-widest text-pink-400 uppercase mb-3">
            What I Do
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Services Built for{" "}
            <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Every service is designed around one goal: measurable, sustainable
            growth for your brand.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`glass rounded-2xl p-6 reveal`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
