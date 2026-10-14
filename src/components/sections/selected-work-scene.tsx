"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { REFERENCE_PROJECTS } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function SelectedWorkScene() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const pentagramCardRef = React.useRef<HTMLDivElement>(null);
  const xPlusOCardRef = React.useRef<HTMLDivElement>(null);

  // Pentagram (7-col wide card) and X+O (5-col card) from REFERENCE_PROJECTS
  const pentagram = REFERENCE_PROJECTS.find((p) => p.slug === "pentagram");
  const xPlusO = REFERENCE_PROJECTS.find((p) => p.slug === "x-plus-o");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Subtle parallax z-depth stagger on desktop
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.to(pentagramCardRef.current, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });

          gsap.to(xPlusOCardRef.current, {
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
      id="scene-2-selected-work"
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
                PORTFOLIO SELECTION · SELECTED WORKS
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
            <span>Explore complete archive ({REFERENCE_PROJECTS.length})</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* =========================================================================
            ASYMMETRIC EXHIBITION WALL: DUAL PROJECT SHOWCASE
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* -------------------------------------------------------------
              PENTAGRAM (7 Cols) — Global Design Benchmark
             ------------------------------------------------------------- */}
          {pentagram && (
            <div
              ref={pentagramCardRef}
              className="lg:col-span-7 space-y-6 will-change-transform"
            >
              <a
                href={pentagram.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-[2px] border border-[var(--color-border)] bg-[var(--color-text)] shadow-xl overflow-hidden focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                aria-label={`Visit live website: ${pentagram.name}`}
              >
                {/* Visual Media Framing (Aspect 16:10) */}
                <div className="aspect-[16/10] w-full relative overflow-hidden">
                  <Image
                    src={pentagram.image}
                    alt={`Authentic screenshot of ${pentagram.name} website`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="default">{pentagram.type}</Badge>
                  </div>
                </div>

                {/* Metadata Bar */}
                <div className="bg-[var(--color-bg)] border-t border-[var(--color-border)] p-3 px-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[var(--color-text-muted)]">
                  <span className="uppercase font-semibold text-[var(--color-text)]">
                    {pentagram.name} · {pentagram.category}
                  </span>
                  <span className="text-[var(--color-accent)] font-semibold inline-flex items-center gap-1">
                    Visit website <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>

              {/* Pentagram Editorial Narrative */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] block">
                    {pentagram.location}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                    {pentagram.name}
                  </h3>
                  <p className="font-serif italic text-lg sm:text-xl text-[var(--color-text)]">
                    {pentagram.category}
                  </p>
                </div>

                <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                  {pentagram.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                  {pentagram.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-[2px] bg-[rgba(44,29,39,0.05)] border border-[rgba(44,29,39,0.08)] text-[var(--color-text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={pentagram.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] hover:text-[#9E251E] font-semibold py-1 group focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
                    aria-label={`Visit live website: ${pentagram.name}`}
                  >
                    <span>Visit website</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* -------------------------------------------------------------
              X+O (5 Cols) — Sustainable Interior Design Studio
             ------------------------------------------------------------- */}
          {xPlusO && (
            <div
              ref={xPlusOCardRef}
              className="lg:col-span-5 space-y-6 lg:mt-12 will-change-transform"
            >
              <a
                href={xPlusO.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-[2px] border border-[var(--color-border)] bg-[var(--color-text)] shadow-xl overflow-hidden focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                aria-label={`Visit live website: ${xPlusO.name}`}
              >
                {/* Technical Console Crop (Aspect 4:3) */}
                <div className="aspect-[4/3] w-full relative overflow-hidden">
                  <Image
                    src={xPlusO.image}
                    alt={`Authentic screenshot of ${xPlusO.name} website`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="default">{xPlusO.type}</Badge>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-3 bg-[var(--color-text)]/90 text-[var(--color-accent-3)] px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase border border-[var(--color-accent-3)]/30 backdrop-blur-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-2)]" />
                    <span>{xPlusO.location}</span>
                  </div>
                </div>

                {/* Console Metadata Bar */}
                <div className="bg-[var(--color-bg)] border-t border-[var(--color-border)] p-3 px-4 flex items-center justify-between font-mono text-[11px] text-[var(--color-text-muted)]">
                  <span className="uppercase font-semibold text-[var(--color-text)]">
                    {xPlusO.name}
                  </span>
                  <span className="text-[var(--color-accent)] font-semibold inline-flex items-center gap-1">
                    Visit website <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>

              {/* X+O Narrative */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] block">
                    {xPlusO.location}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                    {xPlusO.name}
                  </h3>
                  <p className="font-serif italic text-lg sm:text-xl text-[var(--color-text)]">
                    {xPlusO.category}
                  </p>
                </div>

                <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {xPlusO.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                  {xPlusO.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-[2px] bg-[rgba(44,29,39,0.05)] border border-[rgba(44,29,39,0.08)] text-[var(--color-text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={xPlusO.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] hover:text-[#9E251E] font-semibold py-1 group focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
                    aria-label={`Visit live website: ${xPlusO.name}`}
                  >
                    <span>Visit website</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
