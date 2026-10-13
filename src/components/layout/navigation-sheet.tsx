"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "./nav-links";
import { cn } from "@/lib/utils";

interface NavigationSheetProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function NavigationSheet({
  isOpen,
  onClose,
  triggerRef,
}: NavigationSheetProps) {
  const pathname = usePathname();
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);

  // Manage body scroll locking and Escape key listener
  React.useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Set initial focus to close button
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        triggerRef.current?.focus();
        return;
      }

      // Simple focus trap
      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      ref={dialogRef}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[rgba(44,29,39,0.6)] backdrop-blur-[2px] transition-opacity duration-200"
        onClick={() => {
          onClose();
          triggerRef.current?.focus();
        }}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full sm:max-w-md h-full bg-[var(--color-bg)] text-[var(--color-text)] border-l border-[var(--color-border)] p-6 pb-12 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl transition-transform duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border-subtle)]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
              Menu
            </span>
            <div className="font-display text-lg font-bold tracking-tight text-[var(--color-text)]">
              ESSYUPPAY.AI
            </div>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => {
              onClose();
              triggerRef.current?.focus();
            }}
            className="w-11 h-11 flex items-center justify-center rounded-[4px] border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[rgba(44,29,39,0.06)] active:bg-[rgba(44,29,39,0.12)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2 transition-colors cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="my-auto py-8 space-y-6" aria-label="Mobile Primary Navigation">
          {NAV_LINKS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <div key={item.href} className="group">
                <Link
                  href={item.href}
                  onClick={() => {
                    onClose();
                    triggerRef.current?.focus();
                  }}
                  className={cn(
                    "flex items-baseline justify-between py-2 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-4 rounded-[2px]",
                    isActive
                      ? "text-[var(--color-accent)] font-semibold"
                      : "text-[var(--color-text)] hover:text-[var(--color-accent)]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tracking-wider text-[var(--color-text-muted)]">
                      {item.index}
                    </span>
                    <span className="font-display text-3xl sm:text-4xl tracking-tight">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={cn(
                      "w-5 h-5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                      isActive
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-text-muted)]"
                    )}
                    aria-hidden="true"
                  />
                </Link>
                {item.description && (
                  <p className="font-sans text-xs text-[var(--color-text-muted)] pl-8 pt-0.5">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </nav>

        {/* Drawer Footer Info */}
        <div className="pt-6 border-t border-[var(--color-border-subtle)] space-y-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] block">
              Direct Enquiry
            </span>
            <a
              href="mailto:bhushansapkal207@gmail.com"
              className="font-mono text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              bhushansapkal207@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[var(--color-text-muted)]">
            <a
              href="https://github.com/bhushan-1710"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/bhushan-sapkal-754a34376/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://wa.me/919284197150"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-text)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
