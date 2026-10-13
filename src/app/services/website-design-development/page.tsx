import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, Check, X } from "lucide-react";
import { ACTIVE_SERVICES } from "@/data/services";
import { Button } from "@/components/ui/button";

const service = ACTIVE_SERVICES[0];

export const metadata: Metadata = {
  title: "Website Design & Development — Custom Next.js Architecture",
  description:
    "Strategy, art direction, interface design and frontend engineering shaped around your business, audience and next step. Built with Next.js, React and TypeScript.",
};

export default function WebsiteServicePage() {
  return (
    <article className="w-full">
      {/* Header */}
      <section className="pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-6">
          <div className="flex items-center gap-4 font-mono text-xs text-[var(--color-text-muted)]">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 hover:text-[var(--color-text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to all services</span>
            </Link>
            <span>/</span>
            <span className="uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              SERVICE / 01
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.04em] text-[var(--color-text)]">
              {service.title}
            </h1>
            <p className="font-serif italic text-2xl sm:text-3xl text-[var(--color-text)]">
              {service.headline}
            </p>
            <p className="font-sans text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              {service.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive Breakdown */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Core Narrative */}
            <div className="lg:col-span-8 space-y-16">
              {/* Problem & Audience */}
              <div className="space-y-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                  01 / AUDIENCE &amp; CONTEXT
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                  Who needs this and why?
                </h2>
                <div className="p-6 rounded-[2px] border border-[var(--color-border)] bg-[rgba(44,29,39,0.02)] space-y-4">
                  <p className="font-sans text-sm sm:text-base text-[var(--color-text)] leading-relaxed">
                    <strong>Target Audience:</strong> {service.audience}
                  </p>
                  <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed pt-2 border-t border-[var(--color-border-subtle)]">
                    <strong>The Problem:</strong> {service.problem}
                  </p>
                </div>
              </div>

              {/* Deliverables Breakdown */}
              <div className="space-y-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                  02 / DELIVERABLES
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                  What ships in production
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.deliverables.map((d) => (
                    <div
                      key={d}
                      className="p-4 rounded-[2px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)] flex items-start gap-3"
                    >
                      <Check className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-sans text-xs sm:text-sm text-[var(--color-text)] font-medium">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Process */}
              <div className="space-y-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                  03 / PROCESS &amp; CHECKPOINTS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                  How the project unfolds
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, idx) => (
                    <div
                      key={step}
                      className="p-4 rounded-[2px] border border-[var(--color-border)] bg-[rgba(44,29,39,0.02)] flex items-baseline gap-4"
                    >
                      <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                        PHASE 0{idx + 1}
                      </span>
                      <span className="font-sans text-sm text-[var(--color-text)] font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Boundaries & Requirements Sidebar */}
            <aside className="lg:col-span-4 space-y-8 lg:border-l lg:border-[var(--color-border-subtle)] lg:pl-12">
              <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                  Engagement Boundaries
                </h3>

                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase text-[var(--color-text)] font-semibold block">
                    What we need from you
                  </span>
                  <ul className="space-y-2 font-sans text-xs text-[var(--color-text-muted)]">
                    {service.clientRequirements.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <span className="text-[var(--color-accent)]">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[var(--color-border-subtle)] space-y-4">
                  <span className="font-mono text-xs uppercase text-[var(--color-text)] font-semibold block">
                    Explicitly out of scope
                  </span>
                  <ul className="space-y-2 font-sans text-xs text-[var(--color-text-muted)]">
                    {service.outOfScope.map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-[var(--color-error)] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[var(--color-border-subtle)]">
                  <Button
                    href={`/contact?service=${service.slug}`}
                    variant="primary"
                    size="sm"
                    className="w-full justify-between"
                  >
                    <span>Enquire about this service</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
}
