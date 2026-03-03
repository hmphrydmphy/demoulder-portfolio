"use client";

import { useState } from "react";
import { ceoSlides } from "@/lib/data";

export default function CeoSlideshow() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
    }, 300);
  };

  const prev = () => go((current - 1 + ceoSlides.length) % ceoSlides.length);
  const next = () => go((current + 1) % ceoSlides.length);

  const slide = ceoSlides[current];

  return (
    <section
      className="py-24"
      style={{ background: "#111" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 reveal">
          <div>
            <span className="font-label text-grey block mb-3">CEO PITCH DECK</span>
            <h2
              className="font-display text-cream"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              CONVINCE THE<br />DECISION-MAKER.
            </h2>
          </div>
          <p
            className="text-grey max-w-xs text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            A 6-slide deck designed to show any C-suite why Humps is the right hire.
          </p>
        </div>

        {/* Slide container */}
        <div
          className="relative rounded-xl overflow-hidden"
          style={{ minHeight: "500px" }}
        >
          {/* Slide */}
          <div
            key={slide.id}
            className={`w-full ${animating ? "opacity-0" : "opacity-100 slide-enter"} transition-opacity duration-300`}
            style={{
              background: slide.bg,
              minHeight: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* ── Cover slide ── */}
            {slide.type === "cover" && (
              <div className="p-12 md:p-20 flex flex-col items-center text-center">
                <span className="font-label mb-6" style={{ color: slide.accent, opacity: 0.7 }}>
                  {slide.label}
                </span>
                <h1
                  className="font-display mb-4"
                  style={{
                    fontSize: "clamp(6rem, 18vw, 16rem)",
                    color: slide.accent,
                    lineHeight: 0.85,
                  }}
                >
                  {slide.headline}
                </h1>
                <p className="font-label text-cream/60 mb-6">{slide.sub}</p>
                <p
                  className="text-cream/50 max-w-md text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {slide.body}
                </p>
              </div>
            )}

            {/* ── Split stat slide ── */}
            {slide.type === "split-stat" && (
              <div className="grid md:grid-cols-2 min-h-[500px]">
                <div
                  className="flex flex-col justify-center p-12 md:p-16"
                  style={{ background: "#e84f1d" }}
                >
                  <span className="font-label text-bg/60 block mb-6" style={{ fontSize: "0.6rem" }}>
                    {slide.label}
                  </span>
                  <div
                    className="font-display text-bg mb-3"
                    style={{ fontSize: "clamp(5rem, 12vw, 10rem)", lineHeight: 0.85 }}
                  >
                    {slide.stat}
                  </div>
                  <p className="font-label text-bg/70" style={{ fontSize: "0.65rem" }}>
                    {slide.statLabel}
                  </p>
                </div>
                <div className="flex flex-col justify-center p-12 md:p-16" style={{ background: "#111" }}>
                  <h2
                    className="font-display text-cream mb-6 whitespace-pre-line"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                  >
                    {slide.headline}
                  </h2>
                  <p
                    className="text-grey leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.95rem" }}
                  >
                    {slide.sub}
                  </p>
                  <p
                    className="font-label"
                    style={{ color: slide.accent, fontSize: "0.65rem" }}
                  >
                    {slide.body}
                  </p>
                </div>
              </div>
            )}

            {/* ── Process slide ── */}
            {slide.type === "process" && (
              <div className="p-12 md:p-20">
                <span className="font-label text-grey block mb-3" style={{ fontSize: "0.6rem" }}>
                  {slide.label}
                </span>
                <h2
                  className="font-display text-cream mb-12"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  {slide.headline}
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {slide.steps?.map((step) => (
                    <div key={step.num}>
                      <div
                        className="font-display mb-3"
                        style={{ fontSize: "3.5rem", color: slide.accent, lineHeight: 1 }}
                      >
                        {step.num}
                      </div>
                      <div
                        className="font-display text-cream mb-2"
                        style={{ fontSize: "1.4rem" }}
                      >
                        {step.title}
                      </div>
                      <p
                        className="text-grey text-xs leading-relaxed"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Portfolio proof slide ── */}
            {slide.type === "portfolio" && (
              <div className="p-12 md:p-20">
                <span className="font-label text-grey block mb-3" style={{ fontSize: "0.6rem" }}>
                  {slide.label}
                </span>
                <h2
                  className="font-display text-cream mb-10"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  {slide.headline}
                </h2>
                <div className="grid sm:grid-cols-3 gap-5">
                  {slide.cases?.map((c) => (
                    <div
                      key={c.brand}
                      className="p-6"
                      style={{
                        border: `1px solid ${slide.accent}33`,
                        background: `${slide.accent}08`,
                      }}
                    >
                      <span
                        className="font-label block mb-3"
                        style={{ color: slide.accent, fontSize: "0.6rem" }}
                      >
                        {c.tag}
                      </span>
                      <div
                        className="font-display text-cream mb-2"
                        style={{ fontSize: "1.3rem" }}
                      >
                        {c.brand}
                      </div>
                      <div
                        className="font-display text-yellow mb-1"
                        style={{ fontSize: "1.6rem" }}
                      >
                        {c.result}
                      </div>
                      <p
                        className="text-grey text-xs"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {c.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Services slide ── */}
            {slide.type === "services" && (
              <div className="p-12 md:p-20">
                <span className="font-label text-grey block mb-3" style={{ fontSize: "0.6rem" }}>
                  {slide.label}
                </span>
                <h2
                  className="font-display text-cream mb-10"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  {slide.headline}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {slide.items?.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span style={{ color: slide.accent }} className="font-label mt-0.5">
                        →
                      </span>
                      <span
                        className="text-cream/80 text-sm"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <span className="font-label text-grey block mb-3" style={{ fontSize: "0.6rem" }}>
                    TOOLS I USE
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {slide.tools?.map((tool) => (
                      <span
                        key={tool}
                        className="font-label px-3 py-1.5 text-cream"
                        style={{
                          border: `1px solid ${slide.accent}44`,
                          fontSize: "0.6rem",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── CTA slide ── */}
            {slide.type === "cta" && (
              <div
                className="flex flex-col items-center justify-center text-center p-12 md:p-20"
                style={{ minHeight: "500px" }}
              >
                <span
                  className="font-label mb-4"
                  style={{ color: slide.accent, opacity: 0.7, fontSize: "0.6rem" }}
                >
                  {slide.label}
                </span>
                <h2
                  className="font-display mb-6"
                  style={{
                    fontSize: "clamp(4rem, 12vw, 10rem)",
                    color: slide.accent,
                    lineHeight: 0.9,
                  }}
                >
                  {slide.headline}
                </h2>
                <p
                  className="mb-8 text-lg"
                  style={{
                    color: `${slide.accent}cc`,
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {slide.sub}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a
                    href={`mailto:${slide.email}`}
                    className="font-label px-8 py-3 transition-all"
                    style={{
                      background: slide.accent,
                      color: "#e84f1d",
                      border: "1px solid rgba(10,10,10,0.3)",
                      fontSize: "0.7rem",
                    }}
                  >
                    {slide.email}
                  </a>
                  <a
                    href="https://wa.me/639762608875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label px-8 py-3"
                    style={{
                      border: `1px solid ${slide.accent}60`,
                      color: slide.accent,
                      fontSize: "0.7rem",
                    }}
                  >
                    {slide.whatsapp}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Slide counter badge */}
          <div
            className="absolute top-4 right-4 font-label text-cream/40"
            style={{ fontSize: "0.65rem" }}
          >
            {current + 1} / {ceoSlides.length}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          {/* Dot navigation */}
          <div className="flex gap-2">
            {ceoSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="transition-all duration-200"
                style={{
                  width: i === current ? "2rem" : "0.5rem",
                  height: "0.25rem",
                  background: i === current ? "#e84f1d" : "rgba(245,240,232,0.2)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="font-label px-5 py-2.5 transition-all duration-200 text-cream"
              style={{
                border: "1px solid rgba(245,240,232,0.12)",
                fontSize: "0.7rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(245,240,232,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              ← PREV
            </button>
            <button
              onClick={next}
              className="font-label px-5 py-2.5 text-cream transition-all duration-200"
              style={{
                background: "#e84f1d",
                fontSize: "0.7rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.filter = "brightness(1.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.filter = "brightness(1)";
              }}
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
