import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[var(--color-bg)] border-t border-[var(--color-border)] text-[var(--color-text)] transition-colors mt-auto">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Column 1: Studio Identity & Positioning */}
          <div className="md:col-span-6 space-y-6">
            <Link
              href="/"
              className="inline-block font-display text-2xl sm:text-3xl font-black tracking-[-0.03em] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
            >
              ESSYUPPAY.AI
            </Link>
            <p className="font-sans text-sm sm:text-base text-[var(--color-text-muted)] max-w-md leading-relaxed">
              An independent digital design and frontend engineering studio. We build bespoke websites and digital experiences that make ambitious businesses impossible to ignore.
            </p>
            <div className="pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                Direct Contact
              </span>
              <a
                href="mailto:bhushansapkal207@gmail.com"
                className="font-mono text-base text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
              >
                <span>bhushansapkal207@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
              Index
            </h2>
            <nav className="flex flex-col space-y-2.5" aria-label="Footer Navigation">
              <Link
                href="/work"
                className="font-sans text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
              >
                Selected Work
              </Link>
              <Link
                href="/services"
                className="font-sans text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="font-sans text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
              >
                Studio &amp; About
              </Link>
              <Link
                href="/contact"
                className="font-sans text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
              >
                Start a Project
              </Link>
              <Link
                href="/privacy"
                className="font-sans text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Column 3: Verified Channels & Operating Model */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
              Channels
            </h2>
            <div className="flex flex-col space-y-2.5 font-sans text-sm">
              <a
                href="https://github.com/bhushan-1710"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1.5 py-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhushan-sapkal-754a34376/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1.5 py-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/919284197150"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1.5 py-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" aria-hidden="true" />
              </a>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-subtle)]">
              <span className="font-mono text-[11px] text-[var(--color-text-muted)] block leading-relaxed">
                Worldwide remote delivery · No fabricated locations or testimonials
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-baseline sm:items-center justify-between gap-4 font-mono text-xs text-[var(--color-text-muted)]">
          <div>
            &copy; {currentYear} ESSYUPPAY.AI. All rights reserved.
          </div>
          <div>
            Built with Playful Precision &amp; Editorial Discipline.
          </div>
        </div>
      </div>
    </footer>
  );
}
