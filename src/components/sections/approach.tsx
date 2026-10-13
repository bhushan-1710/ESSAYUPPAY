import * as React from "react";
import { Check } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We clarify the audience, business goal, constraints, and what success should look like. No assumptions or generic templates.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "We agree on the creative direction, content structure, and design system tokens before committing to code.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Design and engineering move together, with regular checkpoints, clean component architectures, and strict scope discipline.",
  },
  {
    number: "04",
    title: "Refine & Launch",
    description:
      "We rigorously test the experience across viewports, keyboard access, and performance budgets, preparing a clean handover.",
  },
];

export function Approach() {
  return (
    <section
      className="w-full py-16 sm:py-24 border-b border-[var(--color-border-subtle)]"
      aria-labelledby="approach-title"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-16">
        {/* Process Narrative */}
        <div className="space-y-12">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
              METHODOLOGY / WORKING PROCESS
            </span>
            <h2
              id="approach-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.04em] text-[var(--color-text)]"
            >
              Less guesswork. Better decisions.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              Every stage has clear criteria and agreed outputs. We do not disappear for weeks or present unexpected surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div
                key={s.number}
                className="p-6 rounded-[2px] border border-[var(--color-border)] bg-[rgba(44,29,39,0.02)] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs font-semibold text-[var(--color-accent)] block">
                    STEP {s.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[var(--color-text)]">
                    {s.title}
                  </h3>
                  <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence & Trust Guarantee */}
        <div className="pt-12 border-t border-[var(--color-border-subtle)] space-y-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] block">
              INTEGRITY / TRUST COMMITMENT
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
              Show the thinking. Show the work.
            </h3>
            <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed">
              We never fabricate testimonials, partner logos, or unrealistic commercial metrics. Our reputation is built on authentic engineering standards and verifiable deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            <div className="flex items-start gap-3 p-4 rounded-[2px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)]">
              <Check className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="font-semibold text-[var(--color-text)] block">WCAG 2.2 AA Baseline</span>
                <span className="text-[var(--color-text-muted)]">Visible focus states, 44px touch targets, and semantic landmarks.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-[2px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)]">
              <Check className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="font-semibold text-[var(--color-text)] block">Core Web Vitals Discipline</span>
                <span className="text-[var(--color-text-muted)]">Sub-2.5s LCP, zero CLS layouts, and lightweight compressed assets.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-[2px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)]">
              <Check className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="font-semibold text-[var(--color-text)] block">Transparent Code Ownership</span>
                <span className="text-[var(--color-text-muted)]">Clean TypeScript repositories with zero vendor lock-in or proprietary traps.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
