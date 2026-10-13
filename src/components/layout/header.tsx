"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "./nav-links";
import { NavigationSheet } from "./navigation-sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const menuTriggerRef = React.useRef<HTMLButtonElement>(null);

  // Filter out Contact from inline links since it has a dedicated CTA button
  const inlineLinks = NAV_LINKS.filter((item) => item.href !== "/contact");

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[rgba(244,227,215,0.92)] backdrop-blur-md border-b border-[var(--color-border-subtle)] transition-colors">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 h-18 sm:h-20 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-4 rounded-[2px]"
          >
            <span className="font-display text-xl sm:text-2xl font-black tracking-[-0.03em] text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
              ESSYUPPAY.AI
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] bg-[rgba(44,29,39,0.06)] text-[var(--color-text-muted)] border border-[rgba(44,29,39,0.08)]">
              STUDIO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary Navigation"
          >
            {inlineLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-sans text-sm tracking-normal transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-4 rounded-[2px]",
                    isActive
                      ? "text-[var(--color-accent)] font-semibold border-b-2 border-[var(--color-accent)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-accent)] font-medium"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Desktop CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex items-center gap-1.5 font-medium tracking-normal"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Button>

            {/* Mobile / Tablet Menu Button */}
            <button
              ref={menuTriggerRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex items-center gap-2 px-3 h-11 min-h-[44px] rounded-[4px] border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[rgba(44,29,39,0.06)] active:bg-[rgba(44,29,39,0.12)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2 transition-colors cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-wider">
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Sheet */}
      <NavigationSheet
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        triggerRef={menuTriggerRef}
      />
    </>
  );
}
