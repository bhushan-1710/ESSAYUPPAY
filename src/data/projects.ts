export interface Project {
  slug: string;
  number: string;
  title: string;
  headline: string;
  category: string;
  status: "Published Dossier" | "Published Portfolio" | "Platform Build" | "Client Project";
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

// Studio Tilt is the first project encountered after the hero transition.
// It is a client project: ESSYUPPAY.AI designed and engineered Studio Tilt's website.
export const FEATURED_PROJECT: Project = {
  slug: "studio-tilt",
  number: "01",
  title: "Studio Tilt",
  headline: "Studio Tilt — Architecture, Interiors & Landscape Studio",
  category: "Architecture & Interior Design",
  status: "Published Portfolio",
  isClientWork: true,
  year: "2024",
  discipline: "Design & Frontend Engineering",
  client: "Studio Tilt",
  description:
    "A studio presence for a Goa-based architecture and interior practice known for tropical modernism, contextual material palettes, and lush residential environments. The site communicates the practice's distinct architectural character through bold typography and immersive photography.",
  brief:
    "Studio Tilt needed a digital home that matched their tropical-modernist sensibility — restrained, contextual, and visually confident.",
  thinking:
    "The interface was built around the studio's photography. A half-and-half composition — logotype left, lush tropical imagery right — immediately communicates the practice's dual commitment to architectural rigour and natural context.",
  theBuild:
    "Engineered with semantic HTML5, responsive typography, accessible navigation, and high-efficiency CSS layouts optimised for portfolio showcase across devices.",
  outcome:
    "A confident, atmosphere-driven studio presence that positions Studio Tilt alongside the best international architecture practices.",
  url: "https://www.studiotilt.in/",
  image: "/images/portfolio/studio-tilt.webp",
  tags: ["Tropical Modernism", "Studio Identity", "Architecture Portfolio"],
  metrics: [
    { label: "Location", value: "Goa, India" },
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
    image: "/images/portfolio/perspect-hues.webp",
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
    image: "/images/portfolio/zeris-real-estate.webp",
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
    status: "Published Dossier",
    isClientWork: true,
    year: "2024",
    discipline: "Interface Design & Frontend Architecture",
    client: "Dunowen House",
    description:
      "A bespoke digital experience and booking interface designed for Dunowen House, elevating luxury heritage estate hospitality with refined storytelling and clear guest reservation pathways.",
    brief:
      "Modernize the estate's digital presence to reflect its exclusive private-hire offering while streamlining catering and event booking inquiries.",
    thinking:
      "Balancing immersive estate imagery with clear, friction-free booking pathways for private stays, catering, and exclusive events.",
    theBuild:
      "Semantic Next.js architecture, responsive typography scales, and accessible performance-first layout systems.",
    outcome:
      "A delivered digital hospitality platform that articulates estate heritage and drives direct booking inquiries.",
    url: "https://dunowenhouse.ie/",
    image: "/images/portfolio/dunowen-house.webp",
    tags: ["Heritage Hospitality", "Booking Pathways", "Editorial Experience"],
    metrics: [
      { label: "Discipline", value: "Hospitality UX" },
      { label: "Delivery", value: "Client Platform" },
      { label: "Performance", value: "100% Core Vitals" },
    ],
  },
  // Civilisation remains accessible in the work archive
  {
    slug: "civilisation",
    number: "05",
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
    image: "/images/portfolio/civilisation.webp",
    tags: ["Advisory Dossier", "Editorial Grid", "Information Architecture"],
    metrics: [
      { label: "Format", value: "Editorial Dossier" },
      { label: "Delivery", value: "Production Web" },
      { label: "Scope", value: "Identity & Engineering" },
    ],
  },
];

export interface PortfolioProject {
  slug: string;
  name: string;
  category: string;
  type: "Featured Work" | "Client Project" | "Archived Dossier";
  sourceUrl: string;
  image: string;
  location?: string;
  summary: string;
  tags: string[];
  caseStudySlug?: string;
}

export type ReferenceProject = PortfolioProject;

// The 7 Featured Projects in exact specified order:
// 1. Studio Tilt
// 2. Dunowen House
// 3. Pentagram
// 4. Bechtel
// 5. Aman
// 6. Harper Construction
// 7. X+O
export const FEATURED_PROJECTS: PortfolioProject[] = [
  {
    slug: "studio-tilt",
    name: "Studio Tilt",
    category: "Architecture & Interior Design",
    type: "Featured Work",
    sourceUrl: "https://www.studiotilt.in/",
    image: "/images/portfolio/studio-tilt.webp",
    location: "Goa, India",
    caseStudySlug: "studio-tilt",
    summary:
      "A studio presence for a Goa-based architecture and interior practice known for tropical modernism, contextual material palettes, and lush residential environments.",
    tags: ["Tropical Modernism", "Contextual Architecture", "Interiors"],
  },
  {
    slug: "dunowen-house",
    name: "Dunowen House",
    category: "Luxury Hospitality / Heritage Retreat",
    type: "Client Project",
    sourceUrl: "https://dunowenhouse.ie/",
    image: "/images/portfolio/dunowen-house.webp",
    location: "Ireland",
    caseStudySlug: "dunowen-house",
    summary:
      "A bespoke heritage estate hospitality platform engineered with refined editorial storytelling and direct booking pathways.",
    tags: ["Heritage Hospitality", "Client Platform", "Booking UX"],
  },
  {
    slug: "pentagram",
    name: "Pentagram",
    category: "Multidisciplinary Design & Identity",
    type: "Featured Work",
    sourceUrl: "https://www.pentagram.com/work",
    image: "/images/portfolio/pentagram.webp",
    location: "London / New York / Austin / Berlin",
    summary:
      "The world's largest independently-owned design studio, setting benchmarks in brand architecture, editorial craft, and civic identity.",
    tags: ["Brand Architecture", "Editorial Design", "Global Benchmark"],
  },
  {
    slug: "bechtel",
    name: "Bechtel",
    category: "Global Engineering & Infrastructure",
    type: "Featured Work",
    sourceUrl: "https://www.bechtel.com/",
    image: "/images/portfolio/bechtel.webp",
    location: "Reston, Virginia, USA",
    summary:
      "Enterprise engineering, construction, and project management delivering complex mega-infrastructure projects globally.",
    tags: ["Mega-Infrastructure", "Enterprise Authority", "Engineering"],
  },
  {
    slug: "aman",
    name: "Aman",
    category: "Luxury Hospitality & Sanctuaries",
    type: "Featured Work",
    sourceUrl: "https://www.aman.com/destinations",
    image: "/images/portfolio/aman.webp",
    location: "Global Sanctuaries",
    summary:
      "Pinnacle luxury resort and hotel group renowned for architectural serenity, understated elegance, and intimate connection to setting.",
    tags: ["Sanctuary Living", "Ultra-Luxury", "Architectural Serenity"],
  },
  {
    slug: "harper-construction",
    name: "Harper Construction",
    category: "Commercial & Defense Contracting",
    type: "Featured Work",
    sourceUrl: "https://harperconstruction.com/",
    image: "/images/portfolio/harper-construction.webp",
    location: "San Diego, California, USA",
    summary:
      "General contractor specializing in design-build federal, military aviation hangars, commercial, and institutional projects.",
    tags: ["Design-Build", "Aviation & Defense", "Commercial Contracting"],
  },
  {
    slug: "x-plus-o",
    name: "X+O",
    category: "Sustainable Retail & Interior Design",
    type: "Featured Work",
    sourceUrl: "https://xpluso.co/",
    image: "/images/portfolio/x-plus-o.webp",
    location: "Sydney, Australia",
    summary:
      "Design studio crafting brand-transforming retail spaces, hospitality interiors, and commercial experiences with sustainable principles.",
    tags: ["Retail Experience", "Hospitality Interiors", "Sustainable Design"],
  },
];

// The 5 More Work Projects in exact specified order:
// 1. III Studio — https://www.iiistudio.in/
// 2. Architecture Discipline — https://www.architecturediscipline.com/
// 3. REIR Studio — https://www.reir.ie/
// 4. OH Architecture — https://www.oharchitecture.com.au/
// 5. Studio Sarsh — https://www.studiosarsh.com/
export const MORE_WORK_PROJECTS: PortfolioProject[] = [
  {
    slug: "iii-studio",
    name: "III Studio",
    category: "Interior Design & Architecture",
    type: "Client Project",
    sourceUrl: "https://www.iiistudio.in/",
    image: "/images/portfolio/iii-studio.webp",
    location: "Hyderabad, India",
    summary:
      "Bespoke spatial design practice shaping intimate residential and commercial interiors guided by materiality and craftsmanship.",
    tags: ["Residential Craft", "Spatial Materiality", "Bespoke Interiors"],
  },
  {
    slug: "architecture-discipline",
    name: "Architecture Discipline",
    category: "Progressive Architecture & Urbanism",
    type: "Client Project",
    sourceUrl: "https://www.architecturediscipline.com/",
    image: "/images/portfolio/architecture-discipline.webp",
    location: "New Delhi, India",
    summary:
      "Multi-disciplinary architecture studio driven by rigorous inquiry, structural experimentation, and progressive urban design.",
    tags: ["Structural Innovation", "Urban Architecture", "Research Studio"],
  },
  {
    slug: "reir",
    name: "REIR Studio",
    category: "Conservation Architecture & Heritage",
    type: "Client Project",
    sourceUrl: "https://www.reir.ie/",
    image: "/images/portfolio/reir.webp",
    location: "Dublin, Ireland",
    summary:
      "Irish architectural practice dedicated to historic building conservation, sensitive restoration, and contemporary intervention.",
    tags: ["Historic Conservation", "Irish Heritage", "Sensitive Restoration"],
  },
  {
    slug: "oh-architecture",
    name: "OH Architecture",
    category: "Residential & Commercial Architecture",
    type: "Client Project",
    sourceUrl: "https://www.oharchitecture.com.au/",
    image: "/images/portfolio/oh-architecture.webp",
    location: "Brisbane, Australia",
    summary:
      "Award-winning Australian architecture studio specializing in climate-responsive homes, clean geometric forms, and contextual craft.",
    tags: ["Subtropical Design", "Residential Architecture", "Contextual Craft"],
  },
  {
    slug: "studio-sarsh",
    name: "Studio Sarsh",
    category: "Interior Architecture & Custom Spaces",
    type: "Client Project",
    sourceUrl: "https://www.studiosarsh.com/",
    image: "/images/portfolio/studio-sarsh.webp",
    location: "Chennai, India",
    summary:
      "Interior architecture studio creating timeless, deeply personal residential environments reflecting bespoke client lifestyles.",
    tags: ["Personal Living", "Timeless Aesthetics", "Interior Architecture"],
  },
];

// Archived dossiers: preserved routes and case-study dossiers from earlier portfolio cycles
export const ARCHIVED_PROJECTS: PortfolioProject[] = [
  {
    slug: "perspect-hues",
    name: "Perspect Hues",
    category: "Interior Design / Spatial Studio",
    type: "Archived Dossier",
    sourceUrl: "https://perspect-hues.netlify.app/",
    image: "/images/portfolio/perspect-hues.webp",
    caseStudySlug: "perspect-hues",
    summary:
      "A restrained editorial website for an interior architecture studio, built around spatial materiality, warm stone tones, dynamic swatches, and calm visual rhythm.",
    tags: ["Spatial Design", "Materiality Swatches", "Studio Identity"],
  },
  {
    slug: "zeris-real-estate",
    name: "Zeris Real Estate",
    category: "Real Estate / Digital Platform",
    type: "Archived Dossier",
    sourceUrl: "https://zeris-real-estate.netlify.app/",
    image: "/images/portfolio/zeris-real-estate.webp",
    caseStudySlug: "zeris-real-estate",
    summary:
      "A modern property discovery platform combining curated residential listings, neighbourhood exploration, direct WhatsApp interactions, and a real-time yield engine.",
    tags: ["Property Platform", "Yield Calculator", "Interactive Tooling"],
  },
  {
    slug: "civilisation",
    name: "Civilisation",
    category: "Property / Advisory",
    type: "Archived Dossier",
    sourceUrl: "https://civilisationn.netlify.app/",
    image: "/images/portfolio/civilisation.webp",
    caseStudySlug: "civilisation",
    summary:
      "A high-end property and development advisory experience structured as an editorial dossier, with complex information architecture spanning track record, capabilities, and studio philosophy.",
    tags: ["Advisory Dossier", "Editorial Grid", "Information Architecture"],
  },
];

// Preserved reference array for backwards compatibility across existing components
export const REFERENCE_PROJECTS: PortfolioProject[] = [
  ...FEATURED_PROJECTS,
  ...MORE_WORK_PROJECTS,
];
