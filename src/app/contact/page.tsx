import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowUpRight, Mail, MessageSquare, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Start a Project — Project Enquiry & Scoping",
  description:
    "Tell us what you're building. Share your challenge, constraints and goals. We review briefs with honest engineering feasibility and clear scope boundaries.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
            <span className="uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              START A PROJECT
            </span>
            <span>/</span>
            <span className="uppercase tracking-wider">
              NEW COMMISSIONS
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[var(--color-text)]">
            Tell us what you&apos;re building.
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-[var(--color-text)] max-w-2xl">
            A little context is enough to start.
          </p>

          <p className="font-sans text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            Share the challenge, the kind of help you need and any constraints we should understand. We respond with thoughtful technical and creative feasibility feedback.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Channels Layout */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column (Cols 1-8) */}
            <div className="lg:col-span-8">
              <Suspense
                fallback={
                  <div className="min-h-[400px] flex items-center justify-center font-mono text-xs text-[var(--color-text-muted)]">
                    Loading enquiry form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Sidebar Channels & Response Expectations (Cols 9-12) */}
            <aside className="lg:col-span-4 space-y-8 lg:border-l lg:border-[var(--color-border-subtle)] lg:pl-12">
              {/* Response Expectations */}
              <div className="p-6 rounded-[2px] border border-[var(--color-border)] bg-[rgba(44,29,39,0.02)] space-y-4">
                <div className="flex items-center gap-2 text-[var(--color-accent)] font-mono text-xs uppercase tracking-wider font-semibold">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>Response Time</span>
                </div>
                <p className="font-sans text-sm text-[var(--color-text)] leading-relaxed">
                  We review every qualified enquiry within <strong>1–2 business days</strong> with preliminary feedback on direction, scope feasibility, and next steps.
                </p>
              </div>

              {/* Direct Alternative Routes */}
              <div className="space-y-4">
                <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                  Direct Inquiries
                </h2>

                <div className="space-y-3 font-mono text-xs">
                  <a
                    href="mailto:bhushansapkal207@gmail.com"
                    className="flex items-center justify-between p-3.5 rounded-[2px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
                      <span>bhushansapkal207@gmail.com</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>

                  <a
                    href="https://wa.me/919284197150"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-[2px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
                      <span>WhatsApp (+91 92841 97150)</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Verified Operating Location */}
              <div className="p-4 rounded-[2px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)] space-y-1 font-mono text-xs text-[var(--color-text-muted)]">
                <span className="text-[var(--color-text)] font-semibold block">
                  Operating Model
                </span>
                <span>Independent Studio · Worldwide Remote</span>
                <span className="block text-[11px] pt-1">
                  Available for contracts across India, Europe, UK, and US time zones.
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
