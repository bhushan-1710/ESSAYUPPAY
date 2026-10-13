"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FEATURED_PROJECT } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function HeroToProjectScene() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const heroCopyRef = React.useRef<HTMLDivElement>(null);
  const mediaStageRef = React.useRef<HTMLDivElement>(null);
  const heroImageLayerRef = React.useRef<HTMLDivElement>(null);
  const civilisationImageLayerRef = React.useRef<HTMLDivElement>(null);
  const civilisationDossierRef = React.useRef<HTMLDivElement>(null);

  const p = FEATURED_PROJECT;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // =========================================================================
      // DESKTOP PINNED CINEMATIC MORPH (lg+ & motion enabled)
      // =========================================================================
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          // 1. Initial State: Civilisation image is masked (clip-path wipe), text is offset
          gsap.set(civilisationImageLayerRef.current, {
            clipPath: "inset(0% 0% 0% 100%)",
          });
          gsap.set(civilisationDossierRef.current, {
            autoAlpha: 0,
            x: 60,
          });

          // 2. Entrance Animation on initial load
          const entranceTl = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          entranceTl
            .from(".hero-status-row-item", {
              opacity: 0,
              y: -10,
              duration: 0.5,
              stagger: 0.08,
            })
            .from(
              ".hero-title-line",
              {
                opacity: 0,
                y: 35,
                duration: 0.8,
                stagger: 0.08,
              },
              "-=0.3"
            )
            .from(
              ".hero-editorial-sub",
              {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.06,
              },
              "-=0.5"
            )
            .from(
              mediaStageRef.current,
              {
                opacity: 0,
                scale: 0.94,
                y: 30,
                duration: 0.9,
                ease: "power2.out",
              },
              "-=0.5"
            );

          // 3. Pinned Scroll-Controlled Hero-to-Project Morph
          // Total distance: 180vh. Morph executes dynamically, leaving a solid reading hold.
          const morphTl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=180%",
              pin: true,
              scrub: 1.2,
              anticipatePin: 1,
            },
          });

          // Phase 1 (Progress 0.0 -> 0.45):
          // Hero text glides gracefully to the left without disappearing prematurely
          morphTl.to(
            heroCopyRef.current,
            {
              x: -80,
              autoAlpha: 0,
              duration: 0.45,
              ease: "power2.inOut",
            },
            0
          );

          // Media Stage Transformation:
          // The frame expands and translates across the grid from Right to Left!
          // NEVER fades out. Stays 100% opaque throughout!
          morphTl.to(
            mediaStageRef.current,
            {
              xPercent: -142, // Translates cleanly to the left 7-column zone
              scale: 1.05,
              duration: 0.55,
              ease: "power2.inOut",
            },
            0.05
          );

          // Phase 2 (Progress 0.25 -> 0.60):
          // Architectural Curtain / Aperture Wipe inside the media frame:
          // Unmasks the Civilisation Property Dossier with 100% opacity!
          morphTl.to(
            civilisationImageLayerRef.current,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.35,
              ease: "power2.inOut",
            },
            0.25
          );

          // The layered paper elements and hero ticket strip tuck in cleanly
          morphTl.to(
            [".hero-paper-layer", ".hero-ticket-strip"],
            {
              opacity: 0,
              scale: 0.96,
              duration: 0.3,
              ease: "power2.inOut",
            },
            0.2
          );

          // Phase 3 (Progress 0.40 -> 0.70):
          // Civilisation case study content glides into place on the right
          morphTl.to(
            civilisationDossierRef.current,
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            0.4
          );

          // Phase 4 (Progress 0.70 -> 1.00):
          // Solid Reading Hold - Scene stays pinned, stable, and sharp
          morphTl.to({}, { duration: 0.3 });
        }
      );

      // Mobile / Reduced Motion: Ensure clean static visibility
      mm.add(
        "(max-width: 1023px), (prefers-reduced-motion: reduce)",
        () => {
          gsap.set([civilisationDossierRef.current, heroCopyRef.current], {
            clearProps: "all",
          });
          gsap.set(civilisationImageLayerRef.current, {
            clipPath: "none",
          });
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative z-30 w-full bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      {/* =========================================================================
          DESKTOP CINEMATIC STAGE (lg+ & motion-safe)
         ========================================================================= */}
      <div className="hidden lg:block motion-reduce:hidden relative min-h-screen w-full overflow-hidden">
        {/* Architectural Drafting Hairline Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(118, 99, 109, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(118, 99, 109, 0.25) 1px, transparent 1px)",
            backgroundSize: "8rem 8rem",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 pt-8 pb-10 min-h-screen flex flex-col justify-between relative z-10">
          {/* Top Editorial Status Row */}
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-[var(--color-border-subtle)] font-mono text-xs">
            <div className="hero-status-row-item flex items-center gap-3 text-[var(--color-text-muted)]">
              <span className="font-semibold text-[var(--color-text)] uppercase tracking-wider">
                ESSYUPPAY.AI / STUDIO
              </span>
              <span>·</span>
              <span className="uppercase tracking-widest text-[11px]">
                EST. 2024 · PUNE, IN (18.5204° N, 73.8567° E)
              </span>
            </div>

            <div className="hero-status-row-item flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              <span className="text-[var(--color-text)] font-medium uppercase tracking-wider text-[11px]">
                Available for select commissions
              </span>
            </div>
          </div>

          {/* Master Canvas Area: Pinned Interactive Stage */}
          <div className="relative flex-1 py-8 flex items-center">
            {/* -------------------------------------------------------------
                LEFT SIDE: HERO TYPOGRAPHY & NARRATIVE (Cols 1-7)
               ------------------------------------------------------------- */}
            <div
              ref={heroCopyRef}
              className="w-[58%] pr-8 xl:pr-12 space-y-6 relative z-10 will-change-transform"
            >
              <div className="space-y-2">
                <div className="hero-editorial-sub flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    INDEPENDENT DIGITAL DESIGN &amp; CODE
                  </span>
                </div>

                <h1
                  id="hero-title"
                  className="font-display text-[3.25rem] xl:text-[3.85rem] font-extrabold tracking-[-0.05em] leading-[0.98] text-[var(--color-text)]"
                >
                  <span className="block overflow-hidden">
                    <span className="hero-title-line block">We make digital</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="hero-title-line block">
                      work feel{" "}
                      <span className="text-[var(--color-accent)] font-serif italic font-normal tracking-tight relative inline-block">
                        impossible
                        <span
                          className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[var(--color-accent)] opacity-80"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="hero-title-line block">to ignore.</span>
                  </span>
                </h1>
              </div>

              <p className="hero-editorial-sub font-serif italic text-2xl xl:text-[1.75rem] text-[var(--color-text)] font-normal leading-snug">
                Bespoke websites, digital experiences and practical AI solutions for ambitious businesses.
              </p>

              <p className="hero-editorial-sub font-sans text-[15px] xl:text-base text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                From high-craft interfaces to rigorous search foundations, we design and engineer digital systems that explain what you do, build immediate trust, and turn attention into qualified enquiries.
              </p>

              {/* Accessible CTAs */}
              <div className="hero-editorial-sub pt-2 flex items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="font-medium shadow-xs hover:shadow-md transition-shadow"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>

                <Button
                  href="#selected-work"
                  variant="secondary"
                  size="lg"
                  className="font-medium"
                >
                  <span>Explore selected work</span>
                  <ArrowDown className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* -------------------------------------------------------------
                RIGHT SIDE: MASTER MORPHING MEDIA STAGE (100% OPAQUE THROUGHOUT)
                Starts on Right (Cols 8-12) -> Expands and Translates to Left
               ------------------------------------------------------------- */}
            <div className="absolute right-0 w-[42%] flex justify-end pointer-events-none">
              <div
                ref={mediaStageRef}
                className="relative w-full max-w-[540px] select-none will-change-transform pointer-events-auto"
              >
                {/* Tactile Layer 1: Deep Aubergine Offset Paper Backplane */}
                <div
                  className="hero-paper-layer absolute inset-0 bg-[var(--color-text)] rounded-[2px] transform -rotate-2 translate-x-3 translate-y-3 opacity-90 shadow-xl border border-[var(--color-border)] will-change-transform"
                  aria-hidden="true"
                />

                {/* Tactile Layer 2: Geometric Registration Sheet in Peach Paper */}
                <div className="relative bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[2px] p-2 shadow-2xl">
                  {/* Architectural Crosshair Corners */}
                  <div className="hero-paper-layer absolute top-1 left-1.5 font-mono text-[9px] text-[var(--color-text-muted)] select-none">
                    +
                  </div>
                  <div className="hero-paper-layer absolute top-1 right-1.5 font-mono text-[9px] text-[var(--color-text-muted)] select-none">
                    +
                  </div>

                  {/* Mineral Mint Geometric Registration Tab */}
                  <div
                    className="hero-paper-layer absolute -top-1.5 right-6 bg-[var(--color-accent-2)] text-[var(--color-text)] font-mono text-[9px] font-semibold px-2 py-0.5 rounded-[1px] shadow-xs"
                    aria-hidden="true"
                  >
                    TAB 01 · 50MM
                  </div>

                  {/* Dual Photographic Core (Aspect 5:4) - 100% Opaque Wipe */}
                  <div className="aspect-[5/4] xl:aspect-[4/3] w-full relative rounded-[1px] overflow-hidden bg-[var(--color-text)] border border-[rgba(118,99,109,0.3)]">
                    {/* Visual 1: Studio Still Life (Prompt A) */}
                    <div
                      ref={heroImageLayerRef}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src="/images/hero-still-life.jpg"
                        alt="Tactile studio still life: folded peach paper, vermilion geometric form, and mineral green accent in hard directional studio light"
                        fill
                        priority
                        sizes="(max-width: 1440px) 45vw, 600px"
                        className="object-cover"
                      />
                      <div className="absolute bottom-2.5 right-2.5 bg-[var(--color-text)]/90 text-white px-2 py-0.5 rounded-[1px] font-mono text-[10px] tracking-wider uppercase">
                        COMP. 01 · STILL LIFE
                      </div>
                    </div>

                    {/* Visual 2: Civilisation Property Dossier (Unmasked via Clip-Path Wipe) */}
                    <div
                      ref={civilisationImageLayerRef}
                      className="absolute inset-0 w-full h-full z-10 will-change-[clip-path]"
                    >
                      <Image
                        src={p.image}
                        alt={`Property and development advisory dossier preview for ${p.title}`}
                        fill
                        priority
                        sizes="(max-width: 1440px) 55vw, 750px"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-[var(--color-text)] text-white px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider rounded-[2px] border border-white/20">
                        SELECTED WORK / {p.number}
                      </div>
                    </div>
                  </div>

                  {/* Dossier Ticket Strip */}
                  <div className="hero-ticket-strip mt-2 px-1 py-1.5 border-t border-[var(--color-border-subtle)] flex items-center justify-between font-mono text-[10px] text-[var(--color-text-muted)] will-change-transform">
                    <span className="uppercase tracking-wider font-medium text-[var(--color-text)]">
                      FIG. 01 / CODED CRAFT
                    </span>
                    <span className="text-[var(--color-accent)] font-semibold">
                      #F4E3D7 · #B72F27
                    </span>
                  </div>
                </div>

                {/* Tactile Layer 3: Tactile Citron Specimen Overlap Tag */}
                <div className="hero-paper-layer absolute -bottom-3 -left-3 bg-[var(--color-accent-3)] text-[var(--color-text)] border border-[rgba(44,29,39,0.3)] px-3 py-1.5 rounded-[2px] font-mono text-[11px] font-semibold uppercase tracking-wider shadow-md flex items-center gap-2 will-change-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span>Playful Precision &amp; Digital Cinema</span>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------
                RIGHT SIDE (PROGRESS 0.4+): CIVILISATION CASE STUDY DOSSIER
                Glides into the vacant Right Column as the image expands Left
               ------------------------------------------------------------- */}
            <div
              id="civilisation"
              ref={civilisationDossierRef}
              className="absolute right-0 w-[42%] pl-6 xl:pl-8 space-y-5 opacity-0 will-change-transform z-20 pointer-events-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-subtle)] font-mono text-xs">
                <span className="text-[var(--color-accent)] font-semibold uppercase tracking-wider">
                  FEATURED DOSSIER
                </span>
                <Badge variant="default">{p.status}</Badge>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider block">
                  {p.discipline} · {p.year}
                </span>
                <h2 className="font-display text-4xl xl:text-5xl font-extrabold tracking-[-0.04em] leading-[1.02] text-[var(--color-text)]">
                  {p.title}
                </h2>
                <p className="font-serif italic text-xl xl:text-2xl text-[var(--color-text)]">
                  {p.headline}
                </p>
              </div>

              <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed">
                {p.description}
              </p>

              {/* Evidence-Backed Truthful Deliverables & Scope */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[var(--color-border-subtle)] font-mono">
                {p.metrics.map((m) => (
                  <div key={m.label} className="space-y-1">
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
                  href={`/work/${p.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] hover:text-[#9E251E] font-semibold py-2 group"
                >
                  <span>Read complete dossier</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Dossier Navigation Indicator */}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-subtle)] font-mono text-xs text-[var(--color-text-muted)]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-ping" />
              <span>SCROLL TO ADVANCE SCENE 01 → 02</span>
            </div>
            <span>SEC. 01 / CINEMATIC EXPANSION</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & REDUCED-MOTION ADAPTIVE FLOW (< lg or motion-reduced)
          Flawless responsive typography, no overflow, honest data, natural scroll
         ========================================================================= */}
      <div className="block lg:hidden motion-reduce:block motion-reduce:lg:block px-5 sm:px-8 md:px-12 lg:px-16 py-8 lg:py-16 space-y-9 border-b border-[var(--color-border-subtle)]">
        {/* Mobile Status Row */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)] font-mono text-[11px]">
          <span className="text-[var(--color-text)] font-semibold uppercase tracking-wider">
            ESSYUPPAY.AI / STUDIO
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
            <span className="text-[var(--color-text-muted)] uppercase tracking-tight text-[10px]">
              Available
            </span>
          </div>
        </div>

        {/* Mobile Hero Content */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              INDEPENDENT DIGITAL STUDIO
            </span>
          </div>

          <h1 className="font-display text-[1.95rem] sm:text-4xl font-extrabold tracking-[-0.04em] leading-[1.08] text-[var(--color-text)]">
            <span className="block">We make digital</span>
            <span className="block">
              work feel{" "}
              <span className="text-[var(--color-accent)] font-serif italic font-normal">
                impossible
              </span>
            </span>
            <span className="block">to ignore.</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[var(--color-text)] leading-snug">
            Bespoke websites, digital experiences and practical AI solutions for ambitious businesses.
          </p>

          <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed">
            From high-craft interfaces to rigorous search foundations, we design and engineer digital systems that explain what you do, build immediate trust, and turn attention into qualified enquiries.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/contact" variant="primary" size="default">
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="#selected-work" variant="secondary" size="default">
              <span>Explore work</span>
              <ArrowDown className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* Mobile Layered Artwork Installation */}
        <div className="relative pt-2">
          <div className="relative bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[2px] p-2 shadow-md">
            <div className="aspect-[4/3] w-full relative rounded-[1px] overflow-hidden bg-[var(--color-text)]">
              <Image
                src="/images/hero-still-life.jpg"
                alt="Tactile studio still life"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="p-2 border-t border-[var(--color-border-subtle)] font-mono text-[10px] text-[var(--color-text-muted)] flex justify-between">
              <span className="uppercase font-medium text-[var(--color-text)]">COMP. 01 · STILL LIFE</span>
              <span className="text-[var(--color-accent)] font-semibold">#F4E3D7 / #B72F27</span>
            </div>
          </div>
        </div>

        {/* Seamless Mobile Transition into Featured Project */}
        <div id="selected-work" className="pt-8 border-t border-[var(--color-border-subtle)] space-y-5">
          <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-[var(--color-border-subtle)]">
            <span className="text-[var(--color-accent)] font-semibold uppercase tracking-wider">
              SELECTED WORK / {p.number}
            </span>
            <Badge variant="default">{p.status}</Badge>
          </div>

          <Link
            href={`/work/${p.slug}`}
            className="block relative rounded-[2px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-text)] shadow-sm"
          >
            <div className="aspect-[16/10] w-full relative">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
            <div className="p-3 bg-[var(--color-bg)] border-t border-[var(--color-border)] flex items-center justify-between font-mono text-xs">
              <span className="font-semibold text-[var(--color-text)]">{p.title}</span>
              <span className="text-[var(--color-accent)] inline-flex items-center gap-1 font-medium">
                View case study <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          <div className="space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--color-text)]">
              {p.title}
            </h2>
            <p className="font-serif italic text-lg text-[var(--color-text)]">
              {p.headline}
            </p>
            <p className="font-sans text-sm text-[var(--color-text-muted)]">
              {p.description}
            </p>

            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[var(--color-border-subtle)] font-mono text-xs">
              {p.metrics.map((m) => (
                <div key={m.label} className="space-y-0.5">
                  <span className="text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] block">
                    {m.label}
                  </span>
                  <span className="text-[11px] font-semibold text-[var(--color-text)] block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
