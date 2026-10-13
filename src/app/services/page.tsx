import type { Metadata } from "next";
import { ArrowUpRight, Check, X } from "lucide-react";
import { ACTIVE_SERVICES } from "@/data/services";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services — Website Design, Engineering & Search Visibility",
  description:
    "The right digital work for the problem at hand. We provide bespoke website design, frontend engineering and technical search visibility with clear scope boundaries.",
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
            <span className="uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              SERVICES / INDEX
            </span>
            <span>/</span>
            <span className="uppercase tracking-wider">
              {ACTIVE_SERVICES.length} ACTIVE DISCIPLINES
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[var(--color-text)]">
            The right digital work for the problem at hand.
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-[var(--color-text)] max-w-2xl">
            From a sharper website to a durable search foundation.
          </p>

          <p className="font-sans text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            The scope starts with the problem—not a pre-packaged bundle. We publish only the capabilities we deliver directly, with clear boundaries on what is and isn&apos;t included.
          </p>
        </div>
      </section>

      {/* Services Breakdown List */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-20">
          {ACTIVE_SERVICES.map((service) => (
            <article
              key={service.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-20 border-b border-[var(--color-border-subtle)] last:border-b-0 last:pb-0"
            >
              {/* Left Column: Header & Scope Summary */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                    SERVICE / {service.number}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)]">
                    {service.title}
                  </h2>
                  <p className="font-serif italic text-xl text-[var(--color-text)]">
                    {service.headline}
                  </p>
                </div>

                <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                  {service.intro}
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Button
                    href={`/services/${service.slug}`}
                    variant="primary"
                    size="sm"
                  >
                    <span>Read detailed spec</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                  </Button>

                  <Button
                    href={`/contact?service=${service.slug}`}
                    variant="secondary"
                    size="sm"
                  >
                    <span>Enquire about this service</span>
                  </Button>
                </div>
              </div>

              {/* Right Column: In-Depth Deliverables & Boundaries */}
              <div className="lg:col-span-7 space-y-8">
                {/* Audience & Problem */}
                <div className="p-6 rounded-[2px] border border-[var(--color-border)] bg-[rgba(44,29,39,0.02)] space-y-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                      Who It Is For
                    </span>
                    <p className="font-sans text-sm text-[var(--color-text)] leading-relaxed">
                      {service.audience}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-border-subtle)]">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                      The Problem It Addresses
                    </span>
                    <p className="font-sans text-sm text-[var(--color-text)] leading-relaxed">
                      {service.problem}
                    </p>
                  </div>
                </div>

                {/* Deliverables Grid */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                    Included Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((d) => (
                      <div
                        key={d}
                        className="flex items-start gap-2.5 p-3 rounded-[2px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)] font-sans text-xs text-[var(--color-text)]"
                      >
                        <Check className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope Boundaries */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                    Explicitly Out of Scope
                  </h3>
                  <div className="space-y-2">
                    {service.outOfScope.map((o) => (
                      <div
                        key={o}
                        className="flex items-start gap-2.5 font-sans text-xs text-[var(--color-text-muted)]"
                      >
                        <X className="w-4 h-4 text-[var(--color-error)] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Honest Caveat */}
                <div className="p-4 rounded-[2px] border border-[var(--color-border-subtle)] bg-[rgba(243,237,139,0.2)] font-mono text-xs text-[var(--color-text)] leading-relaxed">
                  <strong className="block font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-1">
                    Realistic Expectation Notice
                  </strong>
                  {service.caveats}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Engagement Model Overview */}
      <section className="py-16 sm:py-24 bg-[rgba(44,29,39,0.02)] border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-12">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
              ENGAGEMENT PRINCIPLES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-text)]">
              How we partner with you.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              We operate as a focused independent studio. You work directly with senior creative engineering capability—no account managers, no markup tiers, and no outsourced junior teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans text-sm">
            <div className="p-6 rounded-[2px] border border-[var(--color-border)] bg-[var(--color-bg)] space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] block">
                01 / Defined Scope
              </span>
              <h3 className="font-display text-lg font-bold text-[var(--color-text)]">
                Agreed Milestones
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Before writing code, we document architecture, deliverables, and approval checkpoints. No creeping hourly charges or hidden extras.
              </p>
            </div>

            <div className="p-6 rounded-[2px] border border-[var(--color-border)] bg-[var(--color-bg)] space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] block">
                02 / Code Ownership
              </span>
              <h3 className="font-display text-lg font-bold text-[var(--color-text)]">
                Complete Repositories
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                You own 100% of the repository, assets, and build pipeline. You can host anywhere (Vercel, Netlify, Cloudflare, AWS) without lock-in.
              </p>
            </div>

            <div className="p-6 rounded-[2px] border border-[var(--color-border)] bg-[var(--color-bg)] space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] block">
                03 / Direct Collaboration
              </span>
              <h3 className="font-display text-lg font-bold text-[var(--color-text)]">
                Founder-Led Execution
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Technical questions and design considerations are answered directly by the creator building your site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Service CTA */}
      <section className="py-16 sm:py-24 text-center">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
            READY TO BEGIN
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)] max-w-xl mx-auto">
            Tell us what you need built.
          </h2>
          <p className="font-sans text-base text-[var(--color-text-muted)] max-w-md mx-auto">
            Share your brief and we will respond with an honest feasibility review.
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
