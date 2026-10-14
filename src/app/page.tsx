import { HeroToProjectScene } from "@/components/sections/hero-to-project-scene";
import { SelectedWorkScene } from "@/components/sections/selected-work-scene";
import { ConceptStudyScene } from "@/components/sections/concept-study-scene";
import { Capabilities } from "@/components/sections/capabilities";
import { ClosingCta } from "@/components/sections/closing-cta";

export default function Home() {
  return (
    <div className="w-full">
      {/* 01 / Choreographed Hero & Pinned Morph Scene into Studio Tilt */}
      <HeroToProjectScene />

      {/* 02 / Asymmetric Selected Work Parallax Exhibition (Pentagram & X+O) */}
      <SelectedWorkScene />

      {/* 03 / Archival Monograph Showcase: Dunowen House Independent Concept */}
      <ConceptStudyScene />

      {/* 04 / Typographic Capabilities Editorial Sequence */}
      <Capabilities />

      {/* 05 / Contact Finale on Aubergine Ink Contrasting Surface */}
      <ClosingCta />
    </div>
  );
}
