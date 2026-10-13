export interface Project {
  slug: string;
  number: string;
  title: string;
  headline: string;
  category: string;
  status: "Published Dossier" | "Published Portfolio" | "Platform Build" | "Independent Concept Study";
  isClientWork: boolean;
  year: string;
  discipline: string;
  client: string;
  description: string;
  brief: string;
  thinking: string;
  theBuild: string;
  outcome: string;
  url: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
}

export const FEATURED_PROJECT: Project = {
  slug: "civilisation",
  number: "01",
  title: "Civilisation",
  headline: "Civilisation — Property & Development Advisory Dossier",
  category: "Property / Advisory",
  status: "Published Dossier",
  isClientWork: true,
  year: "2024",
  discipline: "Design & Frontend Engineering",
  client: "Civilisation Advisory Group",
  description:
    "A high-end property and development advisory experience structured as an editorial dossier, with complex information architecture spanning track record, capabilities, and studio philosophy.",
  brief:
    "Civilisation required an authoritative digital presence that moved beyond commercial real-estate tropes, positioning their development advisory team alongside institutional partners and discerning private clients.",
  thinking:
    "We established an austere editorial grid with deep aubergine ink, tactile beige surfaces, and precise typography. Rather than generic feature lists, the experience unfolds as a curated intelligence dossier with structured reading states.",
  theBuild:
    "Engineered with semantic HTML5, zero-layout-shift responsive typography, accessible keyboard navigation, and high-efficiency CSS layouts optimized for instant loading on mobile and desktop.",
  outcome:
    "An institutional-grade digital dossier that communicates high-value advisory capability with restraint and editorial authority.",
  url: "https://civilisationn.netlify.app/",
  image: "/images/editorial-transition.jpg",
  tags: ["Advisory Dossier", "Editorial Grid", "Information Architecture"],
  metrics: [
    { label: "Format", value: "Editorial Dossier" },
    { label: "Delivery", value: "Production Web" },
    { label: "Scope", value: "Identity & Engineering" },
  ],
};

export const SELECTED_PROJECTS: Project[] = [
  FEATURED_PROJECT,
  {
    slug: "perspect-hues",
    number: "02",
    title: "Perspect Hues",
    headline: "Perspect Hues — Spatial Materiality & Interior Architecture Studio",
    category: "Interior Design / Spatial Studio",
    status: "Published Portfolio",
    isClientWork: true,
    year: "2024",
    discipline: "Design & Frontend Engineering",
    client: "Perspect Hues Studio",
    description:
      "A restrained editorial website for an interior architecture studio, built around spatial materiality, warm stone tones, dynamic swatches, and a calm visual rhythm.",
    brief:
      "Presenting high-craft residential and commercial interiors through material truth, tactile swatches, and spatial calmness without decorative digital noise.",
    thinking:
      "The interface was designed to reflect stone, timber, and light. We built an interactive material swatch system directly linked to portfolio cases, giving clients tactile insight into the studio's craft.",
    theBuild:
      "Crafted with semantic React components, responsive CSS grid layouts, smooth image transitions, and accessible touch/keyboard controls.",
    outcome:
      "A focused studio identity and digital showcase that establishes immediate credibility for high-end spatial projects.",
    url: "https://perspect-hues.netlify.app/",
    image: "/images/graphic-interstitial.jpg",
    tags: ["Spatial Design", "Materiality Swatches", "Studio Identity"],
    metrics: [
      { label: "Theme", value: "Material Truth" },
      { label: "Interactivity", value: "Dynamic Swatches" },
      { label: "Delivery", value: "Production Portfolio" },
    ],
  },
  {
    slug: "zeris-real-estate",
    number: "03",
    title: "Zeris Real Estate",
    headline: "Zeris Real Estate — Property Discovery Platform & Yield Engine",
    category: "Real Estate / Digital Platform",
    status: "Platform Build",
    isClientWork: true,
    year: "2024",
    discipline: "Design & Frontend Engineering",
    client: "Zeris Property Technologies",
    description:
      "A modern property discovery platform combining curated residential listings, neighbourhood exploration, direct WhatsApp interactions, and a real-time property acquisition cost calculator.",
    brief:
      "Bridging the gap between luxury property listings and financial decision-making for buyers and investors.",
    thinking:
      "We engineered an integrated yield and debt calculator directly into the listing interface, allowing buyers to model acquisition costs in real-time without leaving the listing.",
    theBuild:
      "High-performance frontend architecture with client-side reactive financial calculations, responsive grid filters, and direct WhatsApp communication triggers.",
    outcome:
      "A functional web platform combining visual desirability with practical, interactive commercial calculation tools.",
    url: "https://zeris-real-estate.netlify.app/",
    image: "/images/hero-still-life.jpg",
    tags: ["Property Platform", "Yield Calculator", "Interactive Tooling"],
    metrics: [
      { label: "Platform", value: "Discovery Engine" },
      { label: "Tooling", value: "Real-time Calculator" },
      { label: "Delivery", value: "Web Platform" },
    ],
  },
  {
    slug: "dunowen-house",
    number: "04",
    title: "Dunowen House",
    headline: "Dunowen House — Heritage Estate Hospitality Experience",
    category: "Luxury Hospitality / Heritage Retreat",
    status: "Independent Concept Study",
    isClientWork: false,
    year: "2024",
    discipline: "Interface Design & Frontend Architecture",
    client: "Independent Concept Study",
    description:
      "An independent design study exploring luxury hospitality storytelling for an 18th-century heritage estate overlooking Sands Cove in West Cork, Ireland.",
    brief:
      "Exploring how historical narrative, wild coastal geography, and private exclusive-hire booking can converge in an editorial hospitality interface.",
    thinking:
      "Prioritizing landscape photography, estate provenance dating back to 1771, and clear booking pathways for private catering and weddings.",
    theBuild:
      "Semantic HTML structure, accessible typography scales, and responsive media framing reflecting coastal Irish heritage.",
    outcome:
      "An independent concept demonstrating editorial hospitality design craft without fabricated client representation.",
    url: "https://dunowenhouse.ie/",
    image: "/images/dunowen-estate.jpg",
    tags: ["Concept Study", "Heritage Hospitality", "Booking Pathways"],
    metrics: [
      { label: "Heritage", value: "Est. 1771" },
      { label: "Status", value: "Concept Study" },
      { label: "Focus", value: "Hospitality UX" },
    ],
  },
];
