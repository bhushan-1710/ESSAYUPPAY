export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  headline: string;
  intro: string;
  audience: string;
  problem: string;
  deliverables: string[];
  clientRequirements: string[];
  outOfScope: string[];
  process: string[];
  caveats: string;
}

export const ACTIVE_SERVICES: ServiceItem[] = [
  {
    slug: "website-design-development",
    number: "01",
    title: "Website Design & Development",
    headline: "A website with a reason to exist.",
    intro:
      "Strategy, art direction, interface design and development shaped around your business, audience and next commercial step. Built with Next.js, TypeScript and accessible semantic code.",
    audience:
      "Ambitious founders, operators, and established companies whose current website feels generic, dated, or fails to explain their true value.",
    problem:
      "Most digital agencies rely on bloated themes, slow drag-and-drop builders, or generic templates that look identical to competitors and fail basic accessibility and performance audits.",
    deliverables: [
      "Information Architecture & Sitemap Strategy",
      "Tactile Editorial Art Direction & Typography System",
      "Full Component Library in Next.js & React",
      "Semantic HTML5 & Accessible Controls (WCAG 2.2 AA)",
      "Zero Layout Shift (CLS < 0.1) & High-Performance Speed",
      "Clean Handover with Full Source Code Ownership",
    ],
    clientRequirements: [
      "Clear business goals, target audience definition, and core offerings",
      "Access to brand guidelines, logos, and high-resolution media",
      "Designated decision-maker for milestone approvals",
    ],
    outOfScope: [
      "Ongoing ad spend management and media buying",
      "Speculative multi-page brand copywriting from scratch",
      "Proprietary backend database hosting (we build client-owned)",
    ],
    process: [
      "Discovery & Information Architecture Mapping",
      "Direction, Typography & Layout Checkpoint",
      "Component Engineering & Interactive Build",
      "Cross-Device QA, Accessibility & Handover",
    ],
    caveats:
      "Turnaround depends on agreed project scope, asset availability, and milestone review speed. We agree on fixed scope boundaries before build.",
  },
  {
    slug: "seo-ai-search",
    number: "02",
    title: "SEO & Digital Visibility",
    headline: "Make the useful things easier to find.",
    intro:
      "Build a durable foundation for search discovery through technical code hygiene, crawlable semantic structure, schema entities, and high-clarity content hierarchy.",
    audience:
      "Businesses launching a new digital presence or restructuring an underperforming website that isn't being indexed, discovered, or cited accurately.",
    problem:
      "Agencies often sell vague SEO packages with hollow promises of #1 rankings or guaranteed answer engine placements, ignoring foundational crawlability, semantic metadata, and technical site health.",
    deliverables: [
      "Technical Hygiene Audit & Crawlability Remediation",
      "Semantic Heading Order & HTML5 Landmark Structure",
      "Structured JSON-LD Schema (Organization, WebSite, Breadcrumbs)",
      "OpenGraph, Social & Image Metadata Optimization",
      "XML Sitemap & Robots.txt Architecture",
      "Clean URL Canonical Mapping & Redirect Matrix",
    ],
    clientRequirements: [
      "Access to Search Console / Webmaster Tools",
      "Domain registrar and DNS access for verification",
      "Clear understanding of core services and audience search intent",
    ],
    outOfScope: [
      "Black-hat backlink purchasing or spam indexing schemes",
      "Guaranteed #1 ranking placements on Google or AI search engines",
      "Paid Search (PPC) ad spend management",
    ],
    process: [
      "Technical Audit & Entity Baseline Analysis",
      "Semantic Code & Metadata Architecture",
      "Verification, Submission & Robots Configuration",
      "Indexing Verification & Search Health Handover",
    ],
    caveats:
      "We do not promise specific search rankings or AI citations. Search results depend on external algorithms, content relevance, competition, domain history, and time.",
  },
];
