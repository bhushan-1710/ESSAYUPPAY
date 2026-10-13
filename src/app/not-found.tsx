import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20 px-5 sm:px-8">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
            ERROR 404 / NOT FOUND
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.04em] text-[var(--color-text)]">
            This page seems to have moved.
          </h1>
        </div>

        <p className="font-serif italic text-2xl text-[var(--color-text)]">
          The work is still going somewhere.
        </p>

        <p className="font-sans text-base text-[var(--color-text-muted)] leading-relaxed max-w-md mx-auto">
          The link you followed may have expired, or the dossier has been relocated. Try the project index or head back to the studio homepage.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button href="/work" variant="primary" size="default">
            <span>Explore work</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
          </Button>

          <Button href="/" variant="secondary" size="default">
            <ArrowLeft className="w-4 h-4 mr-1.5" aria-hidden="true" />
            <span>Back home</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
