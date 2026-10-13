"use client";

import * as React from "react";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, CheckCircle2, AlertCircle, Mail, MessageSquare } from "lucide-react";
import { submitContactEnquiry, type ContactFormState } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  theme?: "light" | "dark";
}

export function ContactForm({ theme = "light" }: ContactFormProps) {
  const isDark = theme === "dark";
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "website-design-development";

  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContactEnquiry,
    {}
  );

  const inputBase = isDark
    ? "w-full h-11 px-3.5 rounded-[2px] border bg-[rgba(244,227,215,0.06)] text-[#F4E3D7] placeholder-[rgba(244,227,215,0.35)] font-sans text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-accent-3)] focus-visible:outline-offset-1"
    : "w-full h-11 px-3.5 rounded-[4px] border bg-[var(--color-surface)] text-[var(--color-text)] font-sans text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-1";

  const labelBase = isDark
    ? "font-mono text-xs uppercase tracking-wider text-[#F4E3D7] font-medium"
    : "font-mono text-xs uppercase tracking-wider text-[var(--color-text)] font-medium";

  const borderDefault = isDark
    ? "border-[rgba(244,227,215,0.18)] hover:border-[rgba(244,227,215,0.4)]"
    : "border-[var(--color-border)] hover:border-[var(--color-text)]";

  return (
    <div className="w-full space-y-8">
      {/* Success Banner */}
      {state.success && (
        <div
          role="status"
          aria-live="polite"
          className={cn(
            "p-6 rounded-[2px] border space-y-3",
            isDark
              ? "border-[var(--color-success)] bg-[rgba(138,191,165,0.12)] text-[#F4E3D7]"
              : "border-[var(--color-success)] bg-[rgba(35,107,69,0.08)]"
          )}
        >
          <div className="flex items-center gap-3 text-[var(--color-success)]">
            <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
            <h3 className="font-display text-xl font-bold">
              Thanks. Your enquiry is in.
            </h3>
          </div>
          <p className={cn("font-sans text-sm leading-relaxed", isDark ? "text-[#F4E3D7]/90" : "text-[var(--color-text)]")}>
            {state.message ||
              "We'll review your project details and respond using the contact information you provided."}
          </p>
        </div>
      )}

      {/* Unconfigured / Server Warning Banner (Honest, never fakes delivery) */}
      {state.unconfigured && (
        <div
          role="alert"
          aria-live="assertive"
          className={cn(
            "p-6 rounded-[2px] border space-y-4",
            isDark
              ? "border-[var(--color-accent-3)]/40 bg-[rgba(243,237,139,0.12)] text-[#F4E3D7]"
              : "border-[var(--color-border)] bg-[rgba(243,237,139,0.3)] text-[var(--color-text)]"
          )}
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[var(--color-accent-3)] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-[var(--color-accent-3)]">
                Email Delivery Pipeline Notice
              </h3>
              <p className={cn("font-sans text-sm leading-relaxed", isDark ? "text-[#F4E3D7]/90" : "text-[var(--color-text)]")}>
                {state.error}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
                <a
                  href="mailto:bhushansapkal207@gmail.com"
                  className="inline-flex items-center gap-1.5 text-[var(--color-accent-3)] hover:text-white font-semibold underline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-3)]"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Send direct email</span>
                </a>
                <a
                  href="https://wa.me/919284197150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-1.5 font-semibold underline focus-visible:outline-2",
                    isDark ? "text-[#F4E3D7] hover:text-white focus-visible:outline-[var(--color-accent-3)]" : "text-[var(--color-text)] focus-visible:outline-[var(--color-focus)]"
                  )}
                >
                  <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>WhatsApp (+91 92841 97150)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Standard Error Banner */}
      {state.error && !state.unconfigured && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 rounded-[2px] border border-[var(--color-error)] bg-[rgba(180,35,24,0.15)] flex items-start gap-3 text-white"
        >
          <AlertCircle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="font-sans text-sm text-[var(--color-accent-3)]">
            {state.error}
          </p>
        </div>
      )}

      {/* Main Form — Rendered until successfully confirmed */}
      {!state.success && (
        <form action={formAction} className="space-y-6" noValidate>
          {/* Honeypot hidden field for spam protection */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_trap">Leave empty</label>
            <input
              type="text"
              id="website_trap"
              name="website_trap"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Row 1: Name & Business Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className={cn(labelBase, "flex items-center justify-between")}
              >
                <span>Full Name <span className="text-[var(--color-accent)]">*</span></span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                aria-required="true"
                aria-invalid={!!state.fieldErrors?.name}
                aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
                className={cn(
                  inputBase,
                  state.fieldErrors?.name
                    ? "border-[var(--color-error)]"
                    : borderDefault
                )}
                placeholder="e.g. Elena Vance"
              />
              {state.fieldErrors?.name && (
                <p id="name-error" className="font-sans text-xs text-[var(--color-accent)] font-medium">
                  {state.fieldErrors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className={cn(labelBase, "flex items-center justify-between")}
              >
                <span>Business Email <span className="text-[var(--color-accent)]">*</span></span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-required="true"
                aria-invalid={!!state.fieldErrors?.email}
                aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
                className={cn(
                  inputBase,
                  state.fieldErrors?.email
                    ? "border-[var(--color-error)]"
                    : borderDefault
                )}
                placeholder="elena@company.com"
              />
              {state.fieldErrors?.email && (
                <p id="email-error" className="font-sans text-xs text-[var(--color-accent)] font-medium">
                  {state.fieldErrors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Company / Website & Service of Interest */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="company"
                className={cn(labelBase, "block")}
              >
                Company / Website <span className={cn("font-normal", isDark ? "text-[#F4E3D7]/60" : "text-[var(--color-text-muted)]")}>(Optional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className={cn(inputBase, borderDefault)}
                placeholder="e.g. Vance Advisory or domain.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="service"
                className={cn(labelBase, "flex items-center justify-between")}
              >
                <span>Service of Interest <span className="text-[var(--color-accent)]">*</span></span>
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue={serviceParam}
                key={serviceParam}
                aria-required="true"
                aria-invalid={!!state.fieldErrors?.service}
                aria-describedby={state.fieldErrors?.service ? "service-error" : undefined}
                className={cn(
                  inputBase,
                  isDark && "bg-[#2C1D27]",
                  state.fieldErrors?.service
                    ? "border-[var(--color-error)]"
                    : borderDefault
                )}
              >
                <option value="website-design-development">
                  Website Design &amp; Development
                </option>
                <option value="seo-ai-search">
                  SEO &amp; AI Search Visibility
                </option>
                <option value="custom-digital-experience">
                  Custom Platform / Digital Experience
                </option>
                <option value="exploratory-advisory">
                  Technical Architecture Advisory
                </option>
              </select>
              {state.fieldErrors?.service && (
                <p id="service-error" className="font-sans text-xs text-[var(--color-accent)] font-medium">
                  {state.fieldErrors.service}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Budget Range & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="budget"
                className={cn(labelBase, "block")}
              >
                Estimated Budget Range <span className={cn("font-normal", isDark ? "text-[#F4E3D7]/60" : "text-[var(--color-text-muted)]")}>(Optional)</span>
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue=""
                className={cn(inputBase, isDark && "bg-[#2C1D27]", borderDefault)}
              >
                <option value="">Select an approximate range...</option>
                <option value="$3,000 - $5,000">$3,000 – $5,000 (Focused Web Scope)</option>
                <option value="$5,000 - $10,000">$5,000 – $10,000 (Complete Production Build)</option>
                <option value="$10,000+">$10,000+ (Multi-Section / Platform Engine)</option>
                <option value="To be determined">Let&apos;s determine based on scope</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="timeline"
                className={cn(labelBase, "block")}
              >
                Target Timeline <span className={cn("font-normal", isDark ? "text-[#F4E3D7]/60" : "text-[var(--color-text-muted)]")}>(Optional)</span>
              </label>
              <select
                id="timeline"
                name="timeline"
                defaultValue=""
                className={cn(inputBase, isDark && "bg-[#2C1D27]", borderDefault)}
              >
                <option value="">Select target delivery...</option>
                <option value="Immediate (Next 2-4 weeks)">Immediate (Next 2–4 weeks)</option>
                <option value="1-2 months">1–2 months</option>
                <option value="Flexible / Exploration">Flexible / Scoping phase</option>
              </select>
            </div>
          </div>

          {/* Row 4: Project Description */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className={cn(labelBase, "flex items-center justify-between")}
            >
              <span>Project Description <span className="text-[var(--color-accent)]">*</span></span>
              <span className={cn("font-normal", isDark ? "text-[#F4E3D7]/60" : "text-[var(--color-text-muted)]")}>Min. 10 characters</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              required
              aria-required="true"
              aria-invalid={!!state.fieldErrors?.description}
              aria-describedby={state.fieldErrors?.description ? "description-error" : undefined}
              className={cn(
                "w-full p-3.5 rounded-[2px] border font-sans text-sm transition-colors resize-y min-h-[120px] focus-visible:outline-2 focus-visible:outline-offset-1",
                isDark
                  ? "bg-[rgba(244,227,215,0.06)] text-[#F4E3D7] placeholder-[rgba(244,227,215,0.35)] focus-visible:outline-[var(--color-accent-3)]"
                  : "bg-[var(--color-surface)] text-[var(--color-text)] focus-visible:outline-[var(--color-focus)]",
                state.fieldErrors?.description
                  ? "border-[var(--color-error)]"
                  : borderDefault
              )}
              placeholder="Tell us what you are trying to change, the current challenges you face, and what a successful outcome looks like..."
            />
            {state.fieldErrors?.description && (
              <p id="description-error" className="font-sans text-xs text-[var(--color-accent)] font-medium">
                {state.fieldErrors.description}
              </p>
            )}
          </div>

          {/* Privacy Note */}
          <div className="pt-2">
            <p className={cn("font-sans text-xs leading-relaxed", isDark ? "text-[#F4E3D7]/70" : "text-[var(--color-text-muted)]")}>
              We respect your privacy. The information you provide is strictly used to evaluate your enquiry and prepare a relevant response. We never share or sell client contact data.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isPending}
              variant={isDark ? "citron" : "primary"}
              size="lg"
              className="w-full sm:w-auto font-medium"
            >
              <span>{isPending ? "Sending project enquiry..." : "Send project enquiry"}</span>
              <ArrowUpRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
