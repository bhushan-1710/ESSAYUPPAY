"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SELECTED_PROJECTS } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

export function ConceptStudyScene() {
  const dunowen = SELECTED_PROJECTS.find((p) => p.slug === "dunowen-house");

  if (!dunowen) return null;

  return (
    <section
      id="dunowen-house"
      className="relative w-full py-20 lg:py-28 bg-[rgba(44,29,39,0.03)] border-b border-[var(--color-border-subtle)]"
      aria-labelledby="scene-3-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-12">
        {/* Archival Monograph Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--color-border-subtle)] font-mono text-xs">
          <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
            <span className="text-[var(--color-accent)] font-semibold uppercase tracking-wider">
              CLIENT COMMISSION · HOSPITALITY
            </span>
            <span>·</span>
            <span className="uppercase tracking-widest text-[11px]">
              {dunowen.category}
            </span>
          </div>

          <Badge variant="mint">{dunowen.status}</Badge>
        </div>

        {/* Archival Layout Grid: Asymmetric Monograph Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heritage Editorial Monograph Narrative (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2
                id="scene-3-heading"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.04em] text-[var(--color-text)] leading-[1.04]"
              >
                {dunowen.title}
              </h2>

              <p className="font-serif italic text-2xl sm:text-[1.75rem] text-[var(--color-text)] leading-snug">
                {dunowen.headline}
              </p>
            </div>

            <p className="font-sans text-base text-[var(--color-text-muted)] leading-relaxed">
              {dunowen.description}
            </p>

            {/* Evidence-Backed Scope / Specs */}
            <div className="grid grid-cols-3 gap-3 pt-2 font-mono text-xs">
              {dunowen.metrics.map((m) => (
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

            <div className="pt-2 flex flex-wrap items-center gap-5">
              <Link
                href={`/work/${dunowen.slug}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] hover:text-[#9E251E] font-semibold py-2 group focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
              >
                <span>Read complete dossier</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              {dunowen.url && (
                <a
                  href={dunowen.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--color-accent)] font-semibold py-2 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
                  aria-label={`Visit live website for ${dunowen.title}`}
                >
                  <span>Visit website</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Heritage Archival Photographic Passe-Partout (Cols 7-12) */}
          <div className="lg:col-span-6">
            <div
              className="group block relative rounded-[2px] border border-[var(--color-border)] bg-[var(--color-bg)] p-3 sm:p-4 shadow-xl"
            >
              <Link
                href={`/work/${dunowen.slug}`}
                className="block relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-[1px] overflow-hidden bg-[var(--color-text)] border border-[rgba(118,99,109,0.3)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                aria-label={`Inspect ${dunowen.title} case study`}
              >
                <Image
                  src={dunowen.image}
                  alt="Dunowen House luxury estate hospitality website preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </Link>

              {/* Passe-Partout Bottom Ticket Bar */}
              <div className="mt-3 px-1 pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between font-mono text-[11px] text-[var(--color-text-muted)]">
                <span className="uppercase font-medium text-[var(--color-text)]">
                  DUNOWEN HOUSE · LUXURY RETREAT
                </span>
                <div className="flex items-center gap-4">
                  <Link
                    href={`/work/${dunowen.slug}`}
                    className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors font-medium inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
                  >
                    <span>Read dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  {dunowen.url && (
                    <a
                      href={dunowen.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent)] hover:underline inline-flex items-center gap-1 font-medium focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
                      aria-label={`Visit live website for ${dunowen.title}`}
                    >
                      <span>Visit website</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
