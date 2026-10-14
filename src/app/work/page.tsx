import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SELECTED_PROJECTS, REFERENCE_PROJECTS } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Selected Work — Websites, Experiences & Platforms",
  description:
    "A selection of websites, digital experiences and experiments. Each project is presented with its real context, technical scope and verified deliverables.",
};

export default function WorkPage() {
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
              {SELECTED_PROJECTS.length} SELECTED DOSSIERS
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[var(--color-text)]">
            Work with a point of view.
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-[var(--color-text)] max-w-2xl">
            A selection of websites, digital experiences and experiments.
          </p>

          <p className="font-sans text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            Each project is presented with its real context, technical scope, and delivered artifacts. We clearly distinguish commercial client delivery from independent exploratory studies.
          </p>
        </div>
      </section>

      {/* Editorial Projects Archive Grid */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-16">
          {SELECTED_PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pb-16 border-b border-[var(--color-border-subtle)] last:border-b-0 last:pb-0"
              >
                {/* Media Container */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="group block relative rounded-[2px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-text)] shadow-sm focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-4"
                    aria-label={`View dossier for ${project.title}`}
                  >
                    <div className="aspect-[16/10] w-full relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`Preview of ${project.title}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="p-4 bg-[var(--color-bg)] border-t border-[var(--color-border)] flex items-center justify-between font-mono text-xs text-[var(--color-text-muted)]">
                      <span className="font-semibold text-[var(--color-text)]">
                        {project.title}
                      </span>
                      <span className="text-[var(--color-accent)] group-hover:underline inline-flex items-center gap-1">
                        Read breakdown <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Editorial Details Container */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant={project.isClientWork ? "default" : "citron"}>
                        {project.status}
                      </Badge>
                      <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                        {project.discipline} · {project.year}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)]">
                      <Link
                        href={`/work/${project.slug}`}
                        className="hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    <p className="font-serif italic text-xl text-[var(--color-text)]">
                      {project.headline}
                    </p>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-[2px] bg-[rgba(44,29,39,0.05)] border border-[rgba(44,29,39,0.08)] text-[var(--color-text)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <Button
                      href={`/work/${project.slug}`}
                      variant="primary"
                      size="sm"
                    >
                      <span>View case study</span>
                      <ArrowUpRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                    </Button>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] py-2 rounded-[2px]"
                      >
                        <span>Live demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Curated Reference & Architectural Benchmark Archive */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)] bg-[rgba(44,29,39,0.015)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-12">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
              <span className="uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                ARCHIVE / BENCHMARKS
              </span>
              <span>/</span>
              <span className="uppercase tracking-wider">
                {REFERENCE_PROJECTS.length} CURATED REFERENCES
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)]">
              Reference Studies & Spatial Benchmarks
            </h2>

            <p className="font-sans text-base text-[var(--color-text-muted)] leading-relaxed">
              A catalog of external benchmarks and architectural practices studied for typographic precision, spatial art direction, and structural clarity. In accordance with strict attribution standards, these sites represent external reference works owned by their respective studios, catalogued with direct visual captures from their live domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REFERENCE_PROJECTS.map((ref) => (
              <article
                key={ref.slug}
                className="group flex flex-col rounded-[2px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg)] shadow-xs transition-shadow duration-300 hover:shadow-md"
              >
                {/* Visual Capture Card Container */}
                <a
                  href={ref.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-text)] border-b border-[var(--color-border)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                  aria-label={`Visit live website for ${ref.name}`}
                >
                  <Image
                    src={ref.image}
                    alt={`Authentic live screenshot of ${ref.name} website`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <Badge variant={ref.type === "Featured Reference" ? "citron" : "mint"}>
                      {ref.type}
                    </Badge>
                  </div>
                  {ref.location && (
                    <div className="absolute bottom-2.5 right-2.5 bg-[var(--color-text)]/90 text-white px-2 py-0.5 rounded-[1px] font-mono text-[10px] tracking-wider uppercase backdrop-blur-xs">
                      {ref.location}
                    </div>
                  )}
                </a>

                {/* Content & Metadata */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] text-[var(--color-accent)] font-semibold uppercase tracking-wider">
                        {ref.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold tracking-tight text-[var(--color-text)]">
                      <a
                        href={ref.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{ref.name}</span>
                        <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                      </a>
                    </h3>

                    <p className="font-sans text-xs text-[var(--color-text-muted)] line-clamp-3 leading-relaxed">
                      {ref.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[var(--color-text-muted)]">Live Domain</span>
                    <a
                      href={ref.sourceUrl}
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
