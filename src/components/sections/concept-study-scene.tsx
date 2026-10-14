"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
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
              INDEPENDENT STUDY · ARCHIVE
            </span>
            <span>·</span>
            <span className="uppercase tracking-widest text-[11px]">
              EST. 1771 · SANDS COVE, WEST CORK (51.5833° N, 8.9167° W)
            </span>
          </div>

          <Badge variant="citron">{dunowen.status}</Badge>
        </div>

        {/* Archival Layout Grid: Asymmetric Monograph Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heritage Editorial Monograph Narrative (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[var(--color-accent-3)]/60 border border-[rgba(44,29,39,0.2)] font-mono text-[11px] text-[var(--color-text)]">
                <Compass className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                <span className="uppercase font-semibold tracking-wider">
                  SELF-INITIATED CONCEPT STUDY · NO CLIENT AFFILIATION
                </span>
              </div>

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

            <div className="p-4 rounded-[2px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)] space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-[var(--color-text)] block">
                EDITORIAL INTENT &amp; HYPOTHESIS
              </span>
              <p className="font-sans text-xs text-[var(--color-text-muted)] leading-relaxed">
                Exploring how historical provenance, wild coastal geography, and private exclusive-hire booking converge in an editorial hospitality interface without fabricated client claims.
              </p>
            </div>

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
                <span>Inspect architectural concept dossier</span>
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
                aria-label={`Inspect ${dunowen.title} concept`}
              >
                <Image
                  src={dunowen.image}
                  alt="Dunowen House concept study editorial still life"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Archival Specimen Stamp */}
                <div className="absolute top-3 right-3 bg-[var(--color-bg)]/95 text-[var(--color-text)] border border-[var(--color-border)] px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase shadow-xs">
                  PROVENANCE · 1771
                </div>
              </Link>

              {/* Passe-Partout Bottom Ticket Bar */}
              <div className="mt-3 px-1 pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between font-mono text-[11px] text-[var(--color-text-muted)]">
                <span className="uppercase font-medium text-[var(--color-text)]">
                  DUNOWEN ESTATE · WEST CORK
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
