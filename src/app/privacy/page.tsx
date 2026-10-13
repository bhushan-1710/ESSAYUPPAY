import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Data Handling & Disclosure",
  description:
    "Transparent data collection, usage, and retention disclosure for ESSYUPPAY.AI. We collect only what is necessary to evaluate project inquiries.",
};

export default function PrivacyPage() {
  return (
    <article className="w-full">
      {/* Header */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-6">
          <div className="flex items-center gap-4 font-mono text-xs text-[var(--color-text-muted)]">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[var(--color-text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] rounded-[2px]"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back home</span>
            </Link>
            <span>/</span>
            <span className="uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              LEGAL DISCLOSURE
            </span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.04em] text-[var(--color-text)]">
              Privacy Policy
            </h1>
            <p className="font-serif italic text-2xl text-[var(--color-text)]">
              Transparent, minimal data collection without invasive tracking.
            </p>
            <p className="font-mono text-xs text-[var(--color-text-muted)]">
              Last updated: October 2026 · ESSYUPPAY.AI Studio
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-12 font-sans text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[var(--color-text)] tracking-tight">
              1. Information We Collect
            </h2>
            <p>
              When you submit a project enquiry through our contact form, we collect the details you voluntarily provide:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
              <li>Full Name or Representative Name</li>
              <li>Business or Professional Email Address</li>
              <li>Company Name or Website URL (optional)</li>
              <li>Service of Interest</li>
              <li>Project Description and Requirements</li>
              <li>Estimated Budget Range and Timeline (optional)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[var(--color-text)] tracking-tight">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is collected and processed exclusively for legitimate business communication purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
              <li>Evaluating technical scope, creative fit, and commercial feasibility.</li>
              <li>Preparing relevant proposal materials and scheduling introductory consultations.</li>
              <li>Responding directly to questions or specifications you share.</li>
            </ul>
            <p className="font-medium text-[var(--color-text)]">
              We never sell, rent, monetize, or distribute client contact details to third-party advertisers, data brokers, or marketing syndicates.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[var(--color-text)] tracking-tight">
              3. Third-Party Processors &amp; Infrastructure
            </h2>
            <p>
              To deliver emails securely, form submissions are handled via our server action using <strong>Resend</strong> (email infrastructure). Transmission occurs over encrypted TLS connections. We do not use third-party marketing tracking pixels, session replay software, or cross-site fingerprinting scripts.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[var(--color-text)] tracking-tight">
              4. Cookies &amp; Tracking
            </h2>
            <p>
              ESSYUPPAY.AI does not deploy invasive advertising or profiling cookies. Any state preservation (such as session-level navigation preferences or form error states) is strictly functional.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[var(--color-text)] tracking-tight">
              5. Data Retention &amp; Your Rights
            </h2>
            <p>
              We retain enquiry correspondence only as long as necessary to facilitate potential project engagements. You retain full rights under applicable data protection frameworks to request inspection, rectification, or immediate deletion of your communication records.
            </p>
            <p>
              To request data removal or ask privacy questions, contact founder Bhushan Sapkal directly at{" "}
              <a
                href="mailto:bhushansapkal207@gmail.com"
                className="text-[var(--color-accent)] underline font-mono text-xs focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
              >
                bhushansapkal207@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
