import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECT } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

export function FeaturedProject() {
  const p = FEATURED_PROJECT;

  return (
    <section
      className="w-full py-16 sm:py-24 border-b border-[var(--color-border-subtle)]"
      aria-labelledby="featured-project-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Section Index Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border-subtle)] font-mono text-xs text-[var(--color-text-muted)]">
          <div className="flex items-center gap-3">
            <span className="uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              SELECTED WORK / {p.number}
            </span>
            <span>/</span>
            <span className="uppercase tracking-wider">FEATURED DOSSIER</span>
          </div>

          <Badge variant={p.isClientWork ? "default" : "citron"}>
            {p.status}
          </Badge>
        </div>

        {/* Featured Content Layout */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-8 sm:pt-12 items-center">
            {/* Visual Media (Cols 1-7) */}
            <div className="lg:col-span-7">
              <Link
                href={`/work/${p.slug}`}
                className="group block relative rounded-[2px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-text)] shadow-sm focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-4"
                aria-label={`View case study: ${p.title}`}
              >
                <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`Editorial preview for ${p.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Media Bottom Bar */}
                <div className="p-4 bg-[var(--color-bg)] border-t border-[var(--color-border)] flex items-center justify-between font-mono text-xs text-[var(--color-text-muted)]">
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--color-text)] font-semibold">
                      {p.title}
                    </span>
                    <span>·</span>
                    <span>{p.category}</span>
                  </div>
                  <span className="text-[var(--color-accent)] group-hover:underline inline-flex items-center gap-1">
                    View case study <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </div>

            {/* Editorial Content (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs tracking-wider text-[var(--color-text-muted)] uppercase block">
                  {p.discipline} · {p.year}
                </span>
                <h2
                  id="featured-project-heading"
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[var(--color-text)]"
                >
                  {p.title}
                </h2>
                <p className="font-serif italic text-xl sm:text-2xl text-[var(--color-text)]">
                  {p.headline}
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                {p.description}
              </p>

              {/* Metrics Snapshot */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[var(--color-border-subtle)] font-mono">
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

              {/* CTA Link */}
              <div className="pt-2">
                <Link
                  href={`/work/${p.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] hover:text-[#9E251E] font-medium py-2 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
                >
                  <span>Read complete dossier</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
