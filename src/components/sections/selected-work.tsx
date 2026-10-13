import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SELECTED_PROJECTS } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

export function SelectedWork() {
  // Take projects 02, 03, 04 (excluding featured 01 which is above)
  const remainingProjects = SELECTED_PROJECTS.slice(1);
  const perspect = remainingProjects[0];
  const zeris = remainingProjects[1];
  const dunowen = remainingProjects[2];

  return (
    <section
      className="w-full py-16 sm:py-24 border-b border-[var(--color-border-subtle)]"
      aria-labelledby="selected-work-title"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--color-border-subtle)] pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
              PORTFOLIO ARCHIVE / 02–04
            </span>
            <h2
              id="selected-work-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.04em] text-[var(--color-text)]"
            >
              A few things we&apos;ve made.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              Different challenges. Different visual languages. One standard: every decision has a reason.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--color-accent)] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
          >
            <span>Explore all work ({SELECTED_PROJECTS.length})</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Card 01: Perspect Hues (Span 7 cols - Wide Horizontal Focus) */}
          {perspect && (
            <div className="lg:col-span-7">
              <Link
                href={`/work/${perspect.slug}`}
                className="group block rounded-[2px] border border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-4"
              >
                <div className="aspect-[16/10] w-full relative overflow-hidden bg-[var(--color-text)]">
                  <Image
                    src={perspect.image}
                    alt={`Preview of ${perspect.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="mint">{perspect.status}</Badge>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs text-[var(--color-text-muted)]">
                    <span className="uppercase tracking-wider">
                      {perspect.number} · {perspect.category}
                    </span>
                    <span>{perspect.year}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {perspect.title}
                  </h3>

                  <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {perspect.description}
                  </p>

                  <div className="pt-2 font-mono text-xs text-[var(--color-accent)] flex items-center gap-1 group-hover:underline">
                    <span>View project breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Card 02: Zeris Real Estate (Span 5 cols - Compact Vertical Focus) */}
          {zeris && (
            <div className="lg:col-span-5">
              <Link
                href={`/work/${zeris.slug}`}
                className="group block h-full rounded-[2px] border border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-4 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-[var(--color-text)]">
                    <Image
                      src={zeris.image}
                      alt={`Preview of ${zeris.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="default">{zeris.status}</Badge>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between font-mono text-xs text-[var(--color-text-muted)]">
                      <span className="uppercase tracking-wider">
                        {zeris.number} · {zeris.category}
                      </span>
                      <span>{zeris.year}</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                      {zeris.title}
                    </h3>

                    <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {zeris.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 font-mono text-xs text-[var(--color-accent)] flex items-center gap-1 group-hover:underline">
                  <span>Explore platform engine</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </Link>
            </div>
          )}

          {/* Card 03: Dunowen House (Span 12 cols - Full-Width Panoramic Study) */}
          {dunowen && (
            <div className="lg:col-span-12 mt-4">
              <Link
                href={`/work/${dunowen.slug}`}
                className="group block rounded-[2px] border border-[var(--color-border)] bg-[rgba(44,29,39,0.02)] p-6 sm:p-8 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="citron">{dunowen.status}</Badge>
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                        {dunowen.discipline} · {dunowen.year}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                      {dunowen.title}
                    </h3>

                    <p className="font-sans text-sm text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
                      {dunowen.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex lg:justify-end">
                    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] group-hover:underline font-medium">
                      <span>Inspect concept brief</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
