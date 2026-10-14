import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  FEATURED_PROJECTS,
  MORE_WORK_PROJECTS,
  ARCHIVED_PROJECTS,
  type PortfolioProject,
} from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Work — Websites, Experiences & Platforms",
  description:
    "A selection of websites, digital experiences and architectural platforms delivered by ESSYUPPAY.AI and our engineering team.",
};

function ProjectCard({ project }: { project: PortfolioProject }) {
  const getBadgeVariant = (type: PortfolioProject["type"]) => {
    switch (type) {
      case "Featured Work":
        return "default";
      case "Independent Concept Study":
        return "citron";
      case "Client Project":
        return "mint";
      case "Archived Dossier":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <article className="group flex flex-col rounded-[2px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg)] shadow-xs transition-shadow duration-300 hover:shadow-md">
      {/* Visual Capture Card Container */}
      <a
        href={project.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-text)] border-b border-[var(--color-border)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
        aria-label={`Visit live website for ${project.name}`}
      >
        <Image
          src={project.image}
          alt={`Authentic live screenshot of ${project.name} website`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <Badge variant={getBadgeVariant(project.type)}>
            {project.type}
          </Badge>
        </div>
        {project.location && (
          <div className="absolute bottom-2.5 right-2.5 bg-[var(--color-text)]/90 text-white px-2 py-0.5 rounded-[1px] font-mono text-[10px] tracking-wider uppercase backdrop-blur-xs">
            {project.location}
          </div>
        )}
      </a>

      {/* Content & Metadata */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[11px] text-[var(--color-accent)] font-semibold uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold tracking-tight text-[var(--color-text)]">
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1.5"
            >
              <span>{project.name}</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
            </a>
          </h3>

          <p className="font-sans text-xs text-[var(--color-text-muted)] line-clamp-3 leading-relaxed">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[10px]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-[1px] bg-[rgba(44,29,39,0.04)] border border-[rgba(44,29,39,0.06)] text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between font-mono text-[11px]">
          {project.caseStudySlug ? (
            <Link
              href={`/work/${project.caseStudySlug}`}
              className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors font-medium inline-flex items-center gap-1"
            >
              <span>Case dossier</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          ) : (
            <span className="text-[var(--color-text-muted)]">Live Project</span>
          )}

          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline inline-flex items-center gap-1 font-medium"
          >
            <span>Visit site</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function WorkPage() {
  const totalCount = FEATURED_PROJECTS.length + MORE_WORK_PROJECTS.length;

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
            <span className="uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              WORK / INDEX
            </span>
            <span>/</span>
            <span className="uppercase tracking-wider">
              {totalCount} SELECTED WORKS
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[var(--color-text)]">
            Work with a point of view.
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-[var(--color-text)] max-w-2xl">
            Websites, digital experiences and architectural platforms.
          </p>

          <p className="font-sans text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            Portfolio of digital products, studio platforms, and bespoke web applications delivered by ESSYUPPAY.AI and our engineering team.
          </p>
        </div>
      </section>

      {/* 01 / Featured Work */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              <span className="uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                01 / FEATURED WORK
              </span>
              <span>·</span>
              <span className="uppercase tracking-wider">
                {FEATURED_PROJECTS.length} PROJECTS
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)]">
              Featured Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 02 / More Work */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)] bg-[rgba(44,29,39,0.015)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-2)]" />
              <span className="uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                02 / MORE WORK
              </span>
              <span>·</span>
              <span className="uppercase tracking-wider">
                {MORE_WORK_PROJECTS.length} CLIENT SITES
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)]">
              More Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MORE_WORK_PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 03 / Archived Dossiers */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
              <span className="uppercase tracking-widest text-[var(--color-text-muted)] font-semibold">
                03 / ARCHIVE
              </span>
              <span>·</span>
              <span className="uppercase tracking-wider">
                {ARCHIVED_PROJECTS.length} PUBLISHED DOSSIERS
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-text)]">
              Archived Dossiers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARCHIVED_PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Work CTA */}
      <section className="py-16 sm:py-24 bg-[rgba(44,29,39,0.02)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
            WORK WITH US
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)] max-w-2xl mx-auto">
            Have a project in mind? Start a conversation.
          </h2>
          <p className="font-sans text-base text-[var(--color-text-muted)] max-w-lg mx-auto">
            Share what you need to build and we&apos;ll schedule an exploratory technical review.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="lg">
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
