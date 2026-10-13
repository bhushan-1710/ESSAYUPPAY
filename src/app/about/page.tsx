import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About — Studio Principles & Operating Methodology",
  description:
    "Good design is not decoration. It is a decision. ESSYUPPAY.AI is an independent digital studio founded by Bhushan Sapkal, engineering tactile digital experiences with commercial discipline.",
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Clarity Before Spectacle",
    description:
      "Make the message understandable before making it impressive. If a visitor cannot tell what your business solves in five seconds, visual gymnastics cannot rescue the experience.",
  },
  {
    number: "02",
    title: "Truth in Visual Identity",
    description:
      "Let the visual system reflect the authentic company. We avoid generic tech clichés—neon glows, floating gradient blobs, and empty buzzwords—in favour of tactile, enduring design choices.",
  },
  {
    number: "03",
    title: "Motion With Purpose",
    description:
      "Every animation must connect ideas, indicate state, or direct focus. We reject gratuitous preloader locks and sluggish scroll scrubbing that impede natural reading.",
  },
  {
    number: "04",
    title: "Universal Usability",
    description:
      "An interface must perform seamlessly on a modest mobile device with touch, and navigate gracefully with a keyboard. Accessibility is an architectural requirement, not an afterthought.",
  },
  {
    number: "05",
    title: "Launch Is a Milestone, Not the End",
    description:
      "Shipping code is the beginning of real-world feedback. We build modular, well-documented architectures with clean handover so teams retain full control of their digital asset.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
            <span className="uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              ABOUT / STUDIO
            </span>
            <span>/</span>
            <span className="uppercase tracking-wider">
              PHILOSOPHY &amp; MODEL
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[var(--color-text)]">
            Good design is not decoration. It is a decision.
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-[var(--color-text)] max-w-3xl">
            ESSYUPPAY.AI brings design, technology and commercial thinking together to build digital experiences with a clear purpose.
          </p>
        </div>
      </section>

      {/* Philosophy & Principles Grid */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-16">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
              OUR BELIEFS / FIVE STANDARDS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)]">
              What governs every decision we make.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRINCIPLES.map((p) => (
              <div
                key={p.number}
                className="p-8 rounded-[2px] border border-[var(--color-border)] bg-[rgba(44,29,39,0.02)] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-[var(--color-accent)] block">
                    PRINCIPLE {p.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[var(--color-text)]">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Operating Model (Verified Bio Only) */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)] bg-[rgba(44,29,39,0.02)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Col: Studio Structure */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                LEADERSHIP / OPERATING MODEL
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)]">
                Founder-led. Engineering-driven.
              </h2>
              <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                ESSYUPPAY.AI is an independent, founder-led studio directed by creative developer Bhushan Sapkal. We work without agency bloat, coordinating directly with founders and teams to deliver high-craft production digital systems.
              </p>
              <div className="p-4 rounded-[2px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)] font-mono text-xs text-[var(--color-text-muted)] space-y-1.5">
                <span className="text-[var(--color-text)] font-semibold block">
                  Studio Standards:
                </span>
                <span>• Worldwide remote collaboration</span>
                <br />
                <span>• No fabricated team sizes or ghost offices</span>
                <br />
                <span>• Direct access to the engineer building your product</span>
              </div>
            </div>

            {/* Right Col: Verified Biography */}
            <div className="lg:col-span-7 space-y-8 p-8 rounded-[2px] border border-[var(--color-border)] bg-[var(--color-bg)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[var(--color-text)]">
                      Bhushan Sapkal
                    </h3>
                    <span className="font-mono text-xs text-[var(--color-accent)] font-medium">
                      Founder · Frontend Designer &amp; Developer
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">
                    EST. 2024
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                  Working across the intersection of art direction, frontend architecture, and technical digital visibility, Bhushan builds web experiences that stand out through typographic discipline, material truth, and tactile motion.
                </p>

                <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                  Rather than relying on closed website builders or bloated dependencies, the studio focuses on clean Next.js, React, and TypeScript foundations with strict performance budgets (LCP &lt; 2.5s, zero layout shift) and comprehensive accessibility (WCAG 2.2 AA).
                </p>
              </div>

              {/* Verified External Channels */}
              <div className="pt-6 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center gap-6 font-mono text-xs">
                <a
                  href="https://github.com/bhushan-1710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text)] hover:text-[var(--color-accent)] inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
                >
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhushan-sapkal-754a34376/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text)] hover:text-[var(--color-accent)] inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a
                  href="mailto:bhushansapkal207@gmail.com"
                  className="text-[var(--color-text)] hover:text-[var(--color-accent)] inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
                >
                  <span>Direct Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing About CTA */}
      <section className="py-16 sm:py-24 text-center">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
            WORK TOGETHER
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)] max-w-xl mx-auto">
            Have a challenge to work through?
          </h2>
          <p className="font-sans text-base text-[var(--color-text-muted)] max-w-md mx-auto">
            Let&apos;s evaluate the problem, review scope boundaries, and build something exceptional together.
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
