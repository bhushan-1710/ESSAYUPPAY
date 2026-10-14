"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface CapabilityOffering {
  id: string;
  number: string;
  indexLabel: string;
  title: string;
  italicSubtitle: string;
  thesis: string;
  description: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  route: string;
}

const OFFERINGS: CapabilityOffering[] = [
  {
    id: "website-design-development",
    number: "01",
    indexLabel: "CAPABILITY / 01 · CORE ARCHITECTURE",
    title: "Website Design & Development",
    italicSubtitle: "Bespoke architectural digital builds without generic template bloat.",
    thesis: "Websites that command high-value authority through editorial clarity and flawless technical execution.",
    description:
      "We build bespoke web presences from initial information architecture to production Next.js engineering. Every layout decision reflects your genuine competitive advantage, with zero dependence on slow page builders or off-the-shelf themes.",
    deliverables: [
      "Information Architecture",
      "Editorial Layout Systems",
      "Next.js & React Engineering",
      "Semantic HTML & Accessible ARIA",
      "Performance Core Web Vitals",
    ],
    metrics: [
      { label: "Engineering", value: "Next.js / TypeScript" },
      { label: "Pillars", value: "Editorial & Architecture" },
      { label: "Standard", value: "Zero-Defect Code" },
    ],
    route: "/services/website-design-development",
  },
  {
    id: "digital-experiences",
    number: "02",
    indexLabel: "CAPABILITY / 02 · INTERACTION SYSTEMS",
    title: "Digital Experiences",
    italicSubtitle: "Tactile visual identities and purposeful interactive product tools.",
    thesis: "Digital spaces that feel physically tangible, responsive, and unmistakably distinct.",
    description:
      "We craft cohesive brand design languages and interactive client utilities—such as interactive material swatch tools, acquisition simulators, and spatial showcases—that establish immediate credibility in discerning client conversations.",
    deliverables: [
      "Tactile Brand Systems",
      "Interactive Product Tools",
      "Micro-Choreography & Motion",
      "Material Swatch Explorers",
      "Tailored Design Tokens",
    ],
    metrics: [
      { label: "Motion", value: "GSAP / Native Transforms" },
      { label: "System", value: "Tailored Tokens" },
      { label: "Standard", value: "Tactile Realism" },
    ],
    route: "/services",
  },
  {
    id: "seo-ai-search-visibility",
    number: "03",
    indexLabel: "CAPABILITY / 03 · DISCOVERY INFRASTRUCTURE",
    title: "SEO & AI Search Visibility",
    italicSubtitle: "Semantic crawlability engineered for modern search and answer engines.",
    thesis: "Discoverability founded on crawlable truth, structured data, and content authority.",
    description:
      "Modern visibility requires more than traditional keyword stuffing. We engineer structured JSON-LD knowledge graphs, crawlable semantic hierarchies, and high-efficiency architectures that prepare your organization for indexation across both Google and generative AI engines.",
    deliverables: [
      "Technical SEO Architecture",
      "Structured JSON-LD Knowledge Graph",
      "AI Engine Retrieval Readiness",
      "Content Hierarchy Engineering",
      "Crawlability & Indexation Audits",
    ],
    metrics: [
      { label: "Schema", value: "JSON-LD Knowledge Graph" },
      { label: "Audit", value: "Semantic Validation" },
      { label: "Standard", value: "Zero-Jank Speed" },
    ],
    route: "/services/seo-ai-search",
  },
  {
    id: "ai-automation",
    number: "04",
    indexLabel: "CAPABILITY / 04 · COMPUTATIONAL ENGINES",
    title: "AI & Automation",
    italicSubtitle: "Deterministic workflows and calculators solving defined operational problems.",
    thesis: "Practical algorithmic leverage grounded in reality—never speculative hype.",
    description:
      "We design client qualification workflows, real-time debt and yield calculators, and custom webhook API pipelines with transparent technical feasibility agreed before build. Grounded in deterministic logic that creates verifiable operational leverage.",
    deliverables: [
      "Client Qualification Funnels",
      "Real-Time Valuation Engines",
      "Custom API & Webhook Pipelines",
      "Automated Enquiry Routing",
      "Scoped Feasibility Testing",
    ],
    metrics: [
      { label: "Logic", value: "Deterministic & Scoped" },
      { label: "Pipeline", value: "Custom API & Webhooks" },
      { label: "Standard", value: "Verifiable Leverage" },
    ],
    route: "/services",
  },
];

export function Capabilities() {
  const [activeOffering, setActiveOffering] = React.useState<number>(0);

  const toggleOffering = (idx: number) => {
    setActiveOffering((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section
      id="capabilities"
      className="relative w-full py-20 lg:py-32 bg-[var(--color-bg)] border-b border-[var(--color-border-subtle)] overflow-hidden"
      aria-labelledby="capabilities-title"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-16 lg:space-y-24">
        {/* =========================================================================
            SECTION HEADER: EDITORIAL TYPOGRAPHY
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-[var(--color-border-subtle)]">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                CAPABILITIES INDEX · DISCIPLINE SEQUENCE
              </span>
            </div>
            <h2
              id="capabilities-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.04em] text-[var(--color-text)] leading-[1.02]"
            >
              Good work starts with the right problem.
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-[var(--color-text)]">
              Four disciplined capabilities. Strategy, visual authority, and engineering working as one.
            </p>
          </div>

          <div className="space-y-3 md:text-right">
            <p className="font-sans text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xs leading-relaxed md:ml-auto">
              Select any capability to inspect scope criteria, delivery mechanics, and technical standards.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--color-accent)] font-semibold transition-colors pb-1 border-b border-current"
            >
              <span>Explore full service scopes</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE TYPOGRAPHIC ACCORDION / CAPABILITIES INDEX
           ========================================================================= */}
        <div
          role="region"
          aria-label="Capabilities interactive index"
          className="divide-y divide-[var(--color-border-subtle)] border-y border-[var(--color-border-subtle)]"
        >
          {OFFERINGS.map((offering, idx) => {
            const isExpanded = activeOffering === idx;
            const contentId = `capability-content-${offering.id}`;
            const buttonId = `capability-btn-${offering.id}`;

            return (
              <div
                key={offering.id}
                className={cn(
                  "group transition-colors duration-300",
                  isExpanded ? "bg-[rgba(44,29,39,0.02)]" : "hover:bg-[rgba(44,29,39,0.01)]"
                )}
              >
                {/* Accordion Interactive Header Button */}
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isExpanded}
                  aria-controls={contentId}
                  onClick={() => toggleOffering(idx)}
                  className="w-full text-left py-8 sm:py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-4 select-none"
                >
                  {/* Left: Numbered Index & Title */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 md:gap-12 flex-1">
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={cn(
                          "font-mono text-xs sm:text-sm tracking-wider font-semibold transition-colors",
                          isExpanded ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]"
                        )}
                      >
                        [{offering.number}]
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] hidden sm:inline-block">
                        {offering.indexLabel}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3
                        className={cn(
                          "font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] transition-transform duration-300",
                          isExpanded
                            ? "text-[var(--color-text)] translate-x-1"
                            : "text-[var(--color-text)]/85 group-hover:text-[var(--color-text)] group-hover:translate-x-1"
                        )}
                      >
                        {offering.title}
                      </h3>
                      <p className="font-serif italic text-base sm:text-xl text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">
                        {offering.italicSubtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Plus/Minus State Indicator */}
                  <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] hidden lg:inline">
                      {isExpanded ? "Collapse Scope" : "Expand Scope"}
                    </span>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-[2px] border flex items-center justify-center transition-all",
                        isExpanded
                          ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white rotate-180"
                          : "border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] group-hover:border-[var(--color-text)]"
                      )}
                      aria-hidden="true"
                    >
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Accordion Expandable Content Body */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-all duration-400 ease-in-out",
                    isExpanded ? "grid-rows-[1fr] opacity-100 pb-10" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 border-t border-[var(--color-border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      {/* Left: Strategic Thesis & Description (Cols 1-7) */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-3">
                          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                            STRATEGIC THESIS
                          </span>
                          <p className="font-serif italic text-xl sm:text-2xl text-[var(--color-text)] leading-snug">
                            &ldquo;{offering.thesis}&rdquo;
                          </p>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                          {offering.description}
                        </p>

                        {/* Deliverables Tag Matrix */}
                        <div className="space-y-2.5 pt-2">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold block">
                            CORE DELIVERABLES &amp; CAPABILITIES
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {offering.deliverables.map((item) => (
                              <span
                                key={item}
                                className="px-3 py-1 font-mono text-xs rounded-[2px] bg-[rgba(44,29,39,0.06)] border border-[rgba(44,29,39,0.12)] text-[var(--color-text)] font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Technical Specs & Deep Route Trigger (Cols 8-12) */}
                      <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-[var(--color-border-subtle)] lg:pl-10 flex flex-col justify-between">
                        <div className="space-y-4">
                          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                            DELIVERY SPECIFICATION
                          </span>

                          <div className="space-y-3 font-mono text-xs divide-y divide-[var(--color-border-subtle)]">
                            {offering.metrics.map((m) => (
                              <div key={m.label} className="pt-2 first:pt-0 flex items-center justify-between">
                                <span className="text-[var(--color-text-muted)] uppercase tracking-wider">
                                  {m.label}
                                </span>
                                <span className="font-semibold text-[var(--color-text)]">
                                  {m.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6">
                          <Link
                            href={offering.route}
                            className="inline-flex items-center justify-between w-full p-4 rounded-[2px] bg-[var(--color-text)] text-white hover:bg-[var(--color-ink-deep)] transition-colors font-mono text-xs uppercase tracking-wider font-semibold group/btn"
                          >
                            <span>Inspect {offering.title} Scope</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 text-[var(--color-accent-3)]" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
