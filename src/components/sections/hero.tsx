import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative w-full pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 border-b border-[var(--color-border-subtle)]"
      aria-labelledby="hero-headline"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Top Eyebrow & Status Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 sm:pb-12 border-b border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
              INDEPENDENT DIGITAL STUDIO
            </span>
            <span className="font-mono text-[10px] text-[var(--color-text-muted)]">/</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text)]">
              EST. 2024
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
              Available for select commissions
            </span>
          </div>
        </div>

        {/* Asymmetric Hero Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 sm:pt-12">
          {/* Left Column: Editorial Display Typography (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h1
              id="hero-headline"
              className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-extrabold tracking-[-0.055em] leading-[0.98] text-[var(--color-text)]"
            >
              We make digital work feel{" "}
              <span className="text-[var(--color-accent)] inline-block">
                impossible
              </span>{" "}
              to ignore.
            </h1>

            <p className="font-serif italic text-2xl sm:text-3xl text-[var(--color-text)] font-normal tracking-tight">
              Bespoke websites, digital experiences and practical AI solutions for ambitious businesses.
            </p>

            <p className="font-sans text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-xl">
              From high-craft interfaces to rigorous search foundations, we design and engineer digital systems that explain what you do, build immediate trust, and turn attention into qualified enquiries.
            </p>

            {/* CTAs Immediately Accessible */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="font-medium tracking-normal"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>

              <Button
                href="#selected-work"
                variant="secondary"
                size="lg"
                className="font-medium tracking-normal"
              >
                <span>Explore selected work</span>
                <ArrowDown className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Right Column: Tactile Editorial Artwork Still Life (Cols 8-12) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-[2px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-text)] shadow-md group">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/hero-still-life.jpg"
                  alt="Tactile studio still-life composition: folded peach paper, vermilion geometric form, and mineral green accent in hard directional studio light"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Artwork Metadata Label */}
              <div className="p-3.5 bg-[var(--color-bg)] border-t border-[var(--color-border)] flex items-center justify-between font-mono text-[11px] text-[var(--color-text-muted)]">
                <span className="uppercase tracking-wider">
                  STUDIO STILL LIFE · COMP. 01
                </span>
                <span className="text-[var(--color-accent)] font-medium">
                  #F4E3D7 / #B72F27
                </span>
              </div>
            </div>

            {/* Asymmetric Counterpoint Pill */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-[var(--color-accent-3)] text-[var(--color-text)] border border-[rgba(44,29,39,0.2)] px-3.5 py-1.5 rounded-[2px] font-mono text-xs font-medium uppercase tracking-wider shadow-sm items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              <span>Digital Cinema &amp; Playful Precision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
