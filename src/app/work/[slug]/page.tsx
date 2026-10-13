import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { SELECTED_PROJECTS, type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SELECTED_PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = SELECTED_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = SELECTED_PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project: Project = SELECTED_PROJECTS[projectIndex];
  const nextProject =
    SELECTED_PROJECTS[(projectIndex + 1) % SELECTED_PROJECTS.length];

  return (
    <article className="w-full">
      {/* Breadcrumb Navigation & Header */}
      <section className="pt-10 sm:pt-14 pb-8 sm:pb-12 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--color-text-muted)]">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 hover:text-[var(--color-text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to all work</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                INDEX / {project.number}
              </span>
              <span>·</span>
              <span className="uppercase">{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-3">
              <Badge variant={project.isClientWork ? "default" : "citron"}>
                {project.status}
              </Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                {project.discipline}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[var(--color-text)]">
              {project.title}
            </h1>

            <p className="font-serif italic text-2xl sm:text-3xl text-[var(--color-text)] leading-snug">
              {project.headline}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Media Preview */}
      <section className="w-full bg-[var(--color-text)] py-8 sm:py-12 border-b border-[var(--color-border)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="relative aspect-[16/9] w-full rounded-[2px] overflow-hidden border border-[rgba(255,255,255,0.15)] shadow-2xl">
            <Image
              src={project.image}
              alt={`Full-width hero visual for ${project.title}`}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Narrative Breakdown */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Narrative Column (Cols 1-8) */}
            <div className="lg:col-span-8 space-y-16">
              {/* The Brief */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                  01 / THE BRIEF
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                  What needed to change?
                </h2>
                <p className="font-sans text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
                  {project.brief}
                </p>
              </div>

              {/* The Thinking */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                  02 / THE THINKING
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                  Decisions &amp; Architectural Rationale
                </h2>
                <p className="font-sans text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
                  {project.thinking}
                </p>
              </div>

              {/* The Build */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                  03 / THE BUILD
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                  Deliverables &amp; Technical Execution
                </h2>
                <p className="font-sans text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
                  {project.theBuild}
                </p>
              </div>

              {/* The Outcome */}
              <div className="space-y-4 p-8 rounded-[2px] border border-[var(--color-border)] bg-[rgba(44,29,39,0.03)]">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                  04 / THE OUTCOME
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                  Evidence-Backed Result
                </h2>
                <p className="font-sans text-base sm:text-lg text-[var(--color-text)] leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Right Meta Sidebar (Cols 9-12) */}
            <aside className="lg:col-span-4 space-y-8 lg:border-l lg:border-[var(--color-border-subtle)] lg:pl-12">
              <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                  Project Dossier Spec
                </h3>

                <div className="space-y-4 divide-y divide-[var(--color-border-subtle)] font-mono text-xs">
                  <div className="pt-3 first:pt-0 space-y-1">
                    <span className="text-[var(--color-text-muted)] uppercase block">
                      Client / Context
                    </span>
                    <span className="text-[var(--color-text)] font-semibold block">
                      {project.client}
                    </span>
                  </div>

                  <div className="pt-3 space-y-1">
                    <span className="text-[var(--color-text-muted)] uppercase block">
                      Discipline
                    </span>
                    <span className="text-[var(--color-text)] font-semibold block">
                      {project.discipline}
                    </span>
                  </div>

                  <div className="pt-3 space-y-1">
                    <span className="text-[var(--color-text-muted)] uppercase block">
                      Timeline
                    </span>
                    <span className="text-[var(--color-text)] font-semibold block">
                      {project.year}
                    </span>
                  </div>

                  <div className="pt-3 space-y-1">
                    <span className="text-[var(--color-text-muted)] uppercase block">
                      Publication Status
                    </span>
                    <span className="text-[var(--color-text)] font-semibold block">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-3 pt-4 border-t border-[var(--color-border-subtle)]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] block">
                    Core Tags
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <Badge key={t} variant="default">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Live Demo Link */}
                {project.url && (
                  <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                    <Button
                      href={project.url}
                      isExternal
                      variant="primary"
                      size="sm"
                      className="w-full justify-between"
                    >
                      <span>Visit live deployment</span>
                      <ArrowUpRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                    </Button>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Next Project Nav Loop */}
      <section className="py-16 sm:py-20 bg-[rgba(44,29,39,0.02)] border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex flex-col sm:flex-row items-baseline sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] block">
              NEXT DOSSIER / {nextProject.number}
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
            >
              {nextProject.title} &rarr;
            </Link>
          </div>

          <Button href="/contact" variant="secondary" size="default">
            <span>Discuss a similar project</span>
            <ArrowUpRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </article>
  );
}
