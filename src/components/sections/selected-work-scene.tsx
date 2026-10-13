"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SELECTED_PROJECTS } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function SelectedWorkScene() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const perspectCardRef = React.useRef<HTMLDivElement>(null);
  const zerisCardRef = React.useRef<HTMLDivElement>(null);

  // Projects 02 (Perspect Hues) and 03 (Zeris Real Estate)
  const perspect = SELECTED_PROJECTS.find((p) => p.slug === "perspect-hues");
  const zeris = SELECTED_PROJECTS.find((p) => p.slug === "zeris-real-estate");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Subtle parallax z-depth stagger on desktop
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.to(perspectCardRef.current, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });

          gsap.to(zerisCardRef.current, {
            yPercent: -14, // Moves faster, creating physical spatial separation between cards
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 lg:py-32 bg-[var(--color-bg)] border-b border-[var(--color-border-subtle)] overflow-hidden"
      aria-labelledby="scene-2-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--color-border-subtle)]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                PORTFOLIO ARCHIVE / 02–03 · SPATIAL SYSTEMS
              </span>
            </div>
            <h2
              id="scene-2-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.04em] text-[var(--color-text)] leading-[1.02]"
            >
              A few things we&apos;ve made.
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-[var(--color-text)]">
              Different challenges. Different visual languages. One standard: every decision has a reason.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--color-accent)] font-semibold transition-colors pb-1 border-b border-current"
          >
            <span>Explore complete archive ({SELECTED_PROJECTS.length})</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* =========================================================================
            ASYMMETRIC EXHIBITION WALL: DUAL PROJECT SHOWCASE
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* -------------------------------------------------------------
              PROJECT 02: PERSPECT HUES (7 Cols) — Tactile Materiality Atelier
             ------------------------------------------------------------- */}
          {perspect && (
            <div
              ref={perspectCardRef}
              className="lg:col-span-7 space-y-6 will-change-transform"
            >
              <Link
                href={`/work/${perspect.slug}`}
                className="group block relative rounded-[2px] border border-[var(--color-border)] bg-[var(--color-text)] shadow-xl overflow-hidden focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                aria-label={`View case study: ${perspect.title}`}
              >
                {/* Visual Media Framing (Aspect 16:10) */}
                <div className="aspect-[16/10] w-full relative overflow-hidden">
                  <Image
                    src={perspect.image}
                    alt={`Preview of ${perspect.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="mint">{perspect.status}</Badge>
                  </div>

                  {/* Corner Atelier Tag */}
                  <div className="absolute bottom-3 right-3 bg-[var(--color-text)]/90 text-white px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase backdrop-blur-xs">
                    FIG. 02 · MATERIAL SWATCH SYSTEM
                  </div>
                </div>

                {/* Overlapping Material Swatches Ribbon */}
                <div className="bg-[var(--color-bg)] border-t border-[var(--color-border)] p-3 px-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[var(--color-text-muted)]">
                  <span className="uppercase font-semibold text-[var(--color-text)]">
                    {perspect.title} · {perspect.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#E5D7CE] border border-black/20" title="Limestone" />
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#2C1D27] border border-white/20" title="Aubergine Ink" />
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#8ABFA5] border border-black/20" title="Mineral Mint" />
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-accent)] font-medium">
                      Swatches Active
                    </span>
                  </div>
                </div>
              </Link>

              {/* Perspect Editorial Narrative */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] block">
                    {perspect.discipline} · {perspect.year}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                    {perspect.title}
                  </h3>
                  <p className="font-serif italic text-lg sm:text-xl text-[var(--color-text)]">
                    {perspect.headline}
                  </p>
                </div>

                <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                  {perspect.description}
                </p>

                {/* Verified Scope / Deliverables */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[var(--color-border-subtle)] font-mono text-xs">
                  {perspect.metrics.map((m) => (
                    <div key={m.label} className="space-y-0.5">
                      <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] block">
                        {m.label}
                      </span>
                      <span className="text-xs font-semibold text-[var(--color-text)] block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/work/${perspect.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] hover:text-[#9E251E] font-semibold py-1 group"
                  >
                    <span>View project breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* -------------------------------------------------------------
              PROJECT 03: ZERIS REAL ESTATE (5 Cols) — Technical Platform Console
             ------------------------------------------------------------- */}
          {zeris && (
            <div
              ref={zerisCardRef}
              className="lg:col-span-5 space-y-6 lg:mt-12 will-change-transform"
            >
              <Link
                href={`/work/${zeris.slug}`}
                className="group block relative rounded-[2px] border border-[var(--color-border)] bg-[var(--color-text)] shadow-xl overflow-hidden focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                aria-label={`View case study: ${zeris.title}`}
              >
                {/* Technical Console Crop (Aspect 4:3) */}
                <div className="aspect-[4/3] w-full relative overflow-hidden">
                  <Image
                    src={zeris.image}
                    alt={`Preview of ${zeris.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="citron">{zeris.status}</Badge>
                  </div>

                  {/* Reactive Calculator Console Pill */}
                  <div className="absolute bottom-3 left-3 bg-[var(--color-text)]/90 text-[var(--color-accent-3)] px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase border border-[var(--color-accent-3)]/30 backdrop-blur-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                    <span>ENGINE: REAL-TIME YIELD CALCULATOR</span>
                  </div>
                </div>

                {/* Console Metadata Bar */}
                <div className="bg-[var(--color-bg)] border-t border-[var(--color-border)] p-3 px-4 flex items-center justify-between font-mono text-[11px] text-[var(--color-text-muted)]">
                  <span className="uppercase font-semibold text-[var(--color-text)]">
                    {zeris.title}
                  </span>
                  <span className="text-[var(--color-accent)] font-semibold">
                    {zeris.year} · WEB ENGINE
                  </span>
                </div>
              </Link>

              {/* Zeris Technical Narrative */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] block">
                    {zeris.discipline} · {zeris.year}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                    {zeris.title}
                  </h3>
                  <p className="font-serif italic text-lg sm:text-xl text-[var(--color-text)]">
                    {zeris.headline}
                  </p>
                </div>

                <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {zeris.description}
                </p>

                {/* Verified Scope / Deliverables */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[var(--color-border-subtle)] font-mono text-xs">
                  {zeris.metrics.map((m) => (
                    <div key={m.label} className="space-y-0.5">
                      <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] block">
                        {m.label}
                      </span>
                      <span className="text-xs font-semibold text-[var(--color-text)] block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/work/${zeris.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] hover:text-[#9E251E] font-semibold py-1 group"
                  >
                    <span>Explore platform engine</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
