"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare, MapPin, Clock, ShieldCheck, Copy, Check } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export function ClosingCta() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("bhushansapkal207@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#2C1D27] text-[#F4E3D7] py-24 sm:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="contact-finale-title"
    >
      {/* Subtle Architectural Drafting Hairline Grid on Aubergine Surface */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244, 227, 215, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(244, 227, 215, 0.25) 1px, transparent 1px)",
          backgroundSize: "6rem 6rem",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-16 lg:space-y-24 relative z-10">
        {/* =========================================================================
            TOP STATUS ROW & FINALE ACT BANNER
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[rgba(244,227,215,0.18)] font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-3)] animate-pulse" />
            <span className="uppercase tracking-widest text-[var(--color-accent-3)] font-semibold text-[11px]">
              SCENE 05 / FINAL ACT · NEW COMMISSIONS &amp; ENQUIRIES
            </span>
          </div>

          <div className="flex items-center gap-3 text-[#F4E3D7]/70 text-[11px] uppercase tracking-wider">
            <span>NASHIK, MAHARASHTRA, INDIA</span>
            <span>·</span>
            <span className="text-[var(--color-accent-2)] font-semibold">DIRECT FOUNDER REVIEW</span>
          </div>
        </div>

        {/* =========================================================================
            DIMENSIONAL CLOSING HEADLINE SEQUENCE
           ========================================================================= */}
        <div className="space-y-6 max-w-4xl">
          <h2
            id="contact-finale-title"
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.04em] leading-[0.98] text-[#F4E3D7]"
          >
            Have something worth building?
          </h2>

          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[var(--color-accent-3)] leading-snug">
            Tell us what you&apos;re creating, what needs to change, and where you want to go next.
          </p>

          <p className="font-sans text-base sm:text-lg text-[#F4E3D7]/80 max-w-2xl leading-relaxed">
            Every project brief receives candid technical feasibility feedback directly from our studio leadership. No unsolicited sales calls, no layers of account executives.
          </p>
        </div>

        {/* =========================================================================
            TWO-COLUMN FINALE STAGE: DIRECT CHANNELS (LEFT) + USABLE FORM (RIGHT)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-4">
          {/* -------------------------------------------------------------
              LEFT COLUMN: GENUINE STUDIO DOSSIER & DIRECT ALTERNATIVES (Cols 1-5)
             ------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Studio Channels Card */}
            <div className="p-6 sm:p-8 rounded-[2px] border border-[rgba(244,227,215,0.18)] bg-[rgba(244,227,215,0.03)] space-y-6 backdrop-blur-xs">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-3)] font-semibold block">
                  DIRECT STUDIO CHANNELS
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F4E3D7]">
                  Instant Contact Channels
                </h3>
              </div>

              {/* Channel 1: Email with 1-click copy */}
              <div className="space-y-2 pt-2 border-t border-[rgba(244,227,215,0.12)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#F4E3D7]/60">
                    Founder Direct Email
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 font-mono text-[10px] uppercase text-[var(--color-accent-3)] hover:text-white transition-colors cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-3 h-3 text-[var(--color-accent-2)]" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <a
                  href="mailto:bhushansapkal207@gmail.com"
                  className="flex items-center gap-2.5 font-mono text-sm sm:text-base text-[#F4E3D7] hover:text-[var(--color-accent-3)] transition-colors group break-all"
                >
                  <Mail className="w-4 h-4 text-[var(--color-accent)] shrink-0" aria-hidden="true" />
                  <span className="underline decoration-[rgba(244,227,215,0.3)] group-hover:decoration-current">
                    bhushansapkal207@gmail.com
                  </span>
                </a>
              </div>

              {/* Channel 2: WhatsApp Direct */}
              <div className="space-y-2 pt-3 border-t border-[rgba(244,227,215,0.12)]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#F4E3D7]/60 block">
                  Instant WhatsApp Message
                </span>
                <a
                  href="https://wa.me/919284197150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-mono text-sm sm:text-base text-[#F4E3D7] hover:text-[var(--color-accent-3)] transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-[var(--color-accent-2)] shrink-0" aria-hidden="true" />
                  <span className="underline decoration-[rgba(244,227,215,0.3)] group-hover:decoration-current">
                    +91 92841 97150 (Direct Chat)
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-accent-3)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Channel 3: Studio Location */}
              <div className="space-y-1.5 pt-3 border-t border-[rgba(244,227,215,0.12)] font-mono text-xs text-[#F4E3D7]/75">
                <div className="flex items-center gap-2 text-[#F4E3D7]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-accent-3)] shrink-0" aria-hidden="true" />
                  <span>Nashik, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2 text-[#F4E3D7]/60 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-[#F4E3D7]/40 shrink-0" aria-hidden="true" />
                  <span>Responses within 24 business hours</span>
                </div>
              </div>
            </div>

            {/* Direct Scoping Policy Card */}
            <div className="p-6 rounded-[2px] border border-[rgba(244,227,215,0.12)] bg-[rgba(244,227,215,0.02)] space-y-3">
              <div className="flex items-center gap-2 text-[var(--color-accent-2)] font-mono text-xs uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Working Standard &amp; Privacy</span>
              </div>
              <p className="font-sans text-xs text-[#F4E3D7]/70 leading-relaxed">
                We believe in mutual clarity. You own 100% of the source code, design systems, and IP upon delivery. All preliminary scoping sessions remain strictly confidential under NDA upon request.
              </p>
            </div>
          </div>

          {/* -------------------------------------------------------------
              RIGHT COLUMN: USABLE INTERACTIVE CONTACT FORM (Cols 6-12)
             ------------------------------------------------------------- */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-[2px] border border-[rgba(244,227,215,0.18)] bg-[rgba(244,227,215,0.03)] backdrop-blur-xs">
            <div className="space-y-2 pb-6 border-b border-[rgba(244,227,215,0.12)] mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-3)] font-semibold block">
                COMMISSION BRIEF INTAKE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4E3D7]">
                Start a Project
              </h3>
              <p className="font-serif italic text-base sm:text-lg text-[var(--color-accent-2)]">
                Provide preliminary details below. We review every submission with honest feasibility feedback.
              </p>
            </div>

            {/* Usable Dark-Themed Contact Form */}
            <React.Suspense
              fallback={
                <div className="h-72 animate-pulse rounded-[2px] bg-[rgba(244,227,215,0.05)] flex items-center justify-center font-mono text-xs text-[#F4E3D7]/50">
                  Loading intake terminal...
                </div>
              }
            >
              <ContactForm theme="dark" />
            </React.Suspense>
          </div>
        </div>

        {/* =========================================================================
            FOOTNOTE / SUB-FOOTER BASELINE
           ========================================================================= */}
        <div className="pt-12 border-t border-[rgba(244,227,215,0.15)] flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-[#F4E3D7]/60">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#F4E3D7] tracking-wider uppercase">ESSYUPPAY.AI</span>
            <span>·</span>
            <span>CINEMATIC DIGITAL STUDIO</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/work" className="hover:text-[var(--color-accent-3)] transition-colors">
              Work Archive
            </Link>
            <Link href="/services" className="hover:text-[var(--color-accent-3)] transition-colors">
              Services
            </Link>
            <Link href="/about" className="hover:text-[var(--color-accent-3)] transition-colors">
              About Studio
            </Link>
            <Link href="/privacy" className="hover:text-[var(--color-accent-3)] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
