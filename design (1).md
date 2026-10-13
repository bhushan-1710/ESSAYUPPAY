---
date: 13 October 2026
subtitle: Phase 7 · Approved design package
title: ESSYUPPAY.AI --- Design System, UX & Creative Direction
---

# ESSYUPPAY.AI

## Design system, UX architecture and creative direction

**Status:** Phase 7 package based on approved Phases 3--6\
**Website being replaced:** https://bhushan-sapkal.netlify.app/\
**Primary business objective:** Generate qualified enquiries for
higher-value digital projects.\
**Implementation status:** Design and specification only. No website
code is included in this document.

------------------------------------------------------------------------

# 1. Executive design brief

ESSYUPPAY.AI is the next step from an individual freelancer portfolio to
a distinctive, international-facing digital agency. The website must
feel art-directed and memorable, but it must also explain what the
studio does, prove its capabilities with authentic work, and make
starting a project straightforward.

The chosen direction is a deliberate hybrid:

-   **Playful Precision:** unexpected color, sculptural graphic forms
    and expressive typography.
-   **Digital Cinema:** carefully selected image expansion and
    scroll-linked transitions.
-   **Editorial discipline:** asymmetric layouts, clear hierarchy,
    useful writing and generous negative space.

These are not equal layers on every screen. Editorial hierarchy governs
usability; playful art direction creates recognition; cinematic motion
is reserved for moments where it connects one idea to the next.

The website should feel like a considered independent design studio, not
a generic SaaS template, a motion experiment with no business purpose,
or a personal portfolio with "agency" substituted into the copy.

## Success criteria

1.  A first-time visitor can identify the studio's offer and audience
    quickly.
2.  Strong, real project evidence is visible before the visitor is asked
    to enquire.
3.  Service pages explain outcomes and scope without unsupported
    promises.
4.  International prospects can understand the process without being led
    to believe the agency has offices or a team footprint it does not
    have.
5.  Contact is possible by keyboard, touch and pointer.
6.  Motion enriches the narrative without delaying access to content.
7.  The site performs well on mid-range mobile devices and slower
    connections.
8.  All client claims, testimonials, metrics and project outcomes are
    evidence-backed.

## Non-negotiable exclusions

Do not use generic purple/blue gradients, glassmorphism, floating blobs,
neon glow, a centered headline above three identical feature cards,
default Inter/Poppins typography, generic "Elevate / Unleash / Seamless"
copy, gratuitous 3D, autoplay audio, or motion that hides essential
information. Do not fabricate clients, results, testimonials, logos,
awards, office locations or project details.

------------------------------------------------------------------------

# 2. Audience, positioning and brand voice

## Primary audiences

-   Ambitious small and mid-sized businesses that need a better digital
    presence.
-   Founders and operators launching or repositioning a product or
    company.
-   Established businesses with a dated, underperforming or unclear
    website.
-   International prospects in markets including India, the UK, Ireland,
    Australia and the US.
-   Businesses exploring practical AI products or automation where the
    studio has demonstrable capability.

## Positioning statement

**ESSYUPPAY.AI builds distinctive digital experiences that make
ambitious businesses easier to understand, trust and choose.**

Use this as a working positioning statement, not as a claim that every
project has already achieved a measurable business result.

## Brand character

-   Expressive, not chaotic.
-   Confident, not inflated.
-   Technically fluent, not jargon-heavy.
-   Commercially aware, not pushy.
-   Curious and experimental, but disciplined about execution.

## Copy principles

1.  Lead with a concrete business or user benefit.
2.  Prefer active verbs and plain English.
3.  Use short, confident headings; explain the detail beneath them.
4.  Avoid empty superlatives such as "world-class", "revolutionary" or
    "game-changing".
5.  Do not imply guaranteed search rankings, AI citations, conversion
    lifts or revenue.
6.  Label concept work honestly. Clearly distinguish client projects,
    self-initiated concepts and experiments.
7.  Use "we" only if it accurately describes the agency's operating
    model. Otherwise use the studio name or neutral phrasing until the
    team structure is confirmed.
8.  Never invent testimonials. If none are approved for publication, use
    a process explanation or a verifiable project detail instead.

------------------------------------------------------------------------

# 3. Approved visual system

## 3.1 Color tokens

The following palette is locked. Do not substitute colors without a new
approval.

  ----------------------------------------------------------------------------
  Token                  Name              Hex               Intended role
  ---------------------- ----------------- ----------------- -----------------
  `--color-bg`           Peach Paper       `#F4E3D7`         Main canvas;
                                                             approximately 60%
                                                             of the overall
                                                             visual field

  `--color-text`         Aubergine Ink     `#2C1D27`         Primary text and
                                                             structural dark

  `--color-accent`       Tomato Signal     `#B72F27`         Main action,
                                                             emphasis and
                                                             selective graphic
                                                             accents

  `--color-accent-2`     Mineral Mint      `#8ABFA5`         Secondary surface
                                                             and graphic
                                                             counterpoint

  `--color-accent-3`     Pale Citron       `#F3ED8B`         Small highlight
                                                             panels and
                                                             selected details

  `--color-ink-deep`     Forest Green      `#174A3A`         Dark alternative
                                                             surface and focus
                                                             color

  `--color-surface`      White             `#FFFFFF`         Form controls and
                                                             high-clarity
                                                             surfaces

  `--color-text-muted`   Muted Aubergine   `#65535A`         Secondary text on
                                                             Peach Paper

  `--color-border`       Plum Grey         `#76636D`         Borders where
                                                             contrast is
                                                             required

  `--color-success`      Success Green     `#236B45`         Form success
                                                             state

  `--color-error`        Error Red         `#B42318`         Form errors

  `--color-focus`        Forest Green      `#174A3A`         Focus indicator
  ----------------------------------------------------------------------------

### Color-use rules

-   Use Aubergine Ink on Peach Paper for primary text.
-   Tomato Signal may be used as a primary accent; confirm
    foreground/background contrast for every pairing.
-   Mineral Mint is not a text color on Peach Paper: the previously
    measured contrast is insufficient for normal text. Use Aubergine Ink
    on Mint instead.
-   Do not place small white text on Tomato Signal unless the actual
    final pairing is verified. The approved contrast calculation
    indicated this pairing is viable, but re-test actual rendered sizes
    and states.
-   Color is not the sole indicator of errors, active states or links.
-   Every interactive state---default, hover, focus, active, disabled,
    success and error---must be checked in context.
-   Do not add gradients merely to make the palette feel more "digital".
    Use material, cropping, scale and composition for depth.

### Previously measured contrast references

The approved design-system review recorded the following pairings:
Aubergine Ink on Peach Paper 12.82:1; Muted Aubergine on Peach Paper
5.72:1; Tomato Signal on Peach Paper 4.87:1; white on Tomato Signal
6.09:1; Aubergine Ink on Mineral Mint 7.68:1; Forest Green on Mineral
Mint 4.85:1; Aubergine Ink on Pale Citron 13.18:1; white on Forest Green
10.11:1; Aubergine Ink on white 16.00:1; Mineral Mint on Peach Paper
1.67:1. These are design references, not a substitute for re-testing
final states and text sizes.

## 3.2 Typography

  -----------------------------------------------------------------------
  Role                    Typeface                Usage
  ----------------------- ----------------------- -----------------------
  Display                 Bricolage Grotesque     Hero, major section
                          Variable, weights       titles, selected
                          400--800                project titles

  Body/UI                 Instrument Sans,        Paragraphs, navigation,
                          weights 400/500/600/700 buttons, forms

  Editorial contrast      Instrument Serif,       Short pull quotes,
                          regular and italic      selected phrases,
                                                  narrative accents

  Metadata                IBM Plex Mono, weights  Project index, labels,
                          400/500                 dates, categories and
                                                  small technical notes
  -----------------------------------------------------------------------

### Type scale

  Token      Desktop base size
  -------- -------------------
  `xs`                    12px
  `sm`                    14px
  `base`                  16px
  `lg`                    20px
  `xl`                    25px
  `2xl`                   31px
  `3xl`                   39px
  `4xl`                   49px
  `5xl`                   61px

-   Hero display: 96--144px on large desktop; 48--68px on mobile,
    adjusted to fit the actual phrase and viewport.
-   Display tracking: approximately `-0.065em`.
-   Section heading tracking: approximately `-0.04em`.
-   Body tracking: 0 to `-0.01em`.
-   Metadata tracking: `0.04–0.08em`.
-   Body copy maximum measure: approximately 65 characters per line;
    case-study narrative: approximately 68 characters per line.
-   Use fluid sizing only where the resulting line breaks have been
    art-directed at mobile, tablet and desktop sizes.
-   Load only the required weights and subsets. Avoid fake bold and
    unnecessary font requests.

## 3.3 Layout and spacing

-   Grid: 4 columns mobile, 8 tablet, 12 desktop.
-   Outer margins: 20px mobile, 32px tablet, 48px desktop, 64px wide
    desktop.
-   Gutters: 12px mobile, 20px tablet, 24px desktop, 24--32px wide
    desktop.
-   Maximum content width: 1440px.
-   Spacing foundation: 8px base with 4px micro increments.
-   Approved spacing steps: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128
    and 160px.
-   Section spacing: `clamp(4rem, 9vw, 9rem)` on larger viewports;
    `clamp(3.5rem, 12vw, 5rem)` on mobile.
-   Keep one dominant focal point per viewport.
-   Use asymmetry deliberately; align to the grid even when the visual
    composition feels loose.

## 3.4 Shape, borders and depth

-   Controls: 4px radius.
-   Small overlays: 8px radius.
-   Project media: predominantly square or near-square corners,
    approximately 2px radius.
-   Borders: 1px where separation is useful.
-   No default box shadows. Use real image shadows, surface contrast and
    layering only when they serve the composition.
-   Avoid turning every content group into a card.

## 3.5 Motion tokens

  Token                  Value
  ---------------------- ----------------------------------
  `--motion-fast`        `160ms`
  `--motion-ui`          `240ms`
  `--motion-reveal`      `600ms`
  `--motion-scene`       `900ms`
  `--motion-cinematic`   `1200ms`
  `--ease-standard`      `cubic-bezier(0.2, 0, 0, 1)`
  `--ease-out`           `cubic-bezier(0.22, 1, 0.36, 1)`
  `--ease-in-out`        `cubic-bezier(0.76, 0, 0.24, 1)`

Motion should connect ideas, communicate state or guide attention. It
should not become a mandatory obstacle to reading or navigation.

------------------------------------------------------------------------

# 4. Information architecture

## Primary navigation

-   Work
-   Services
-   About
-   Insights (optional at launch if genuinely useful content is ready)
-   Start a project (primary CTA)

The ESSYUPPAY.AI wordmark links to Home. Keep the desktop navigation
lean. On mobile, use a functional sheet/drawer with a clear close
action, correct focus handling and Escape support.

## Sitemap

-   `/` --- Home
-   `/work` --- Selected work
-   `/work/[project-slug]` --- Individual case study
-   `/services` --- Services overview
-   `/services/website-design-development` --- Website design and
    development
-   `/services/seo-ai-search` --- SEO and AI-search visibility
-   `/services/branding-digital-experiences` --- Branding and digital
    experiences, only if this service is offered as a real deliverable
-   `/services/ai-products-automation` --- AI products and automation,
    only if capability and delivery scope are confirmed
-   `/about` --- Studio and process
-   `/insights` --- Useful original content; defer if there is no
    meaningful content
-   `/contact` --- Project enquiry
-   `/privacy` --- Privacy information
-   `/enquiry-received` --- Form success state, if a separate URL is
    useful
-   `/404` --- Branded not-found state

Do not publish thin service pages merely to increase the page count.
Every service page must have a clear audience, deliverables, process,
scope boundaries and a relevant CTA.

------------------------------------------------------------------------

# 5. Page-by-page wireframes and section specifications

These are content-and-layout wireframes, not finished visual comps. They
describe hierarchy and behavior while preserving room for detailed art
direction during implementation.

## 5.1 Home `/`

### Wireframe

``` text
┌─────────────────────────────────────────────────────────┐
│ Wordmark             Work Services About   [Start a project] │
├─────────────────────────────────────────────────────────┤
│ INDEX / DIGITAL STUDIO                                  │
│                                                         │
│ We make digital                                  [ART / │
│ work feel impossible                              OBJECT │
│ to ignore.                                        /IMAGE]│
│                                                         │
│ Bespoke websites, digital experiences and practical     │
│ AI solutions for ambitious businesses.                  │
│ [Start a project ↗]  [Explore selected work]             │
├─────────────────────────────────────────────────────────┤
│ FEATURED PROJECT — large editorial media / index label │
│ Project title · Discipline · Year · View case study ↗   │
├─────────────────────────────────────────────────────────┤
│ SELECTED WORK — asymmetric sequence of 2–4 projects     │
│ Large media / smaller media / text index, not uniform   │
├─────────────────────────────────────────────────────────┤
│ WHAT WE DO — typographic list of capabilities           │
│ 01 Websites  02 Digital experiences  03 Search  04 AI*  │
├─────────────────────────────────────────────────────────┤
│ APPROACH — short process narrative / numbered steps     │
├─────────────────────────────────────────────────────────┤
│ PROOF — real client evidence, work details or process   │
│ No invented testimonials, metrics or logos              │
├─────────────────────────────────────────────────────────┤
│ CLOSING STATEMENT / contrasting surface                 │
│ Have something worth building? [Start a project ↗]      │
├─────────────────────────────────────────────────────────┤
│ Wordmark · Email · Social links · Legal                  │
└─────────────────────────────────────────────────────────┘
```

### Section specifications and copy

**A. Header**

-   Desktop: wordmark left, navigation in a single horizontal line, CTA
    at the right.
-   Mobile: wordmark and menu control; menu opens a full-height or
    near-full-height sheet.
-   Sticky behavior is optional; if used, keep the header compact and do
    not let it obscure anchors.
-   CTA: **Start a project**

**B. Hero**

Eyebrow: `INDEPENDENT DIGITAL STUDIO`

Headline: **We make digital work feel impossible to ignore.**

Supporting copy:\
`Bespoke websites, digital experiences and practical AI solutions for ambitious businesses.`

Primary CTA: **Start a project ↗**\
Secondary CTA: **Explore selected work ↓**

Art direction: editorial headline composition with custom sculptural
imagery, not a centered generic hero. The exact placement of the image
and text must be designed at desktop and mobile separately. Keep the
core headline and CTA visible without requiring the visitor to wait for
an animation.

**C. Featured project**

Label: `SELECTED WORK / 01`

Headline pattern:
`[Project name] — [clear, truthful description of the work]`

Metadata: `[Discipline] · [Year] · [Project type]`

CTA: **View case study ↗**

Only use a project once the work, permission and description have been
verified. If it is a concept, label it `Independent concept` or
`Self-initiated concept`.

**D. Selected work**

Heading: **A few things we've made.**

Intro:
`Different challenges. Different visual languages. One standard: every decision has a reason.`

Show 2--4 strong projects, with deliberately varied scale and placement.
Do not invent a large portfolio to fill space. If there are only two
publishable projects, use two strong projects and supplement with a
clearly labelled experimental study.

**E. Capabilities**

Heading: **Good work starts with the right problem.**

Intro:
`The output might be a website, a sharper digital identity or a practical AI workflow. The first step is understanding what needs to change.`

Capability list: - **Websites** ---
`Strategy, design and development built around what your business needs to communicate and achieve.` -
**Digital experiences** ---
`Distinctive visual systems and useful interactions, designed as one coherent experience.` -
**Search visibility** ---
`Technical SEO and content foundations that help people discover and understand your business.` -
**AI and automation** ---
`Practical tools and workflows for defined problems, with scope and feasibility agreed before build.`

Publish only the capabilities that can be delivered reliably. CTA:
**Explore services ↗**

**F. Approach**

Heading: **Less guesswork. Better decisions.**

Steps: 1. **Understand** ---
`We clarify the audience, business goal, constraints and what success should look like.`
2. **Shape** ---
`We agree on the direction, content structure and design system before building.`
3. **Build** ---
`Design and development move together, with regular checkpoints and a clear scope.`
4. **Refine and launch** ---
`We test the experience, resolve issues and prepare the agreed handover.`

Do not promise a specific turnaround until scope, availability and
dependencies are known.

**G. Evidence / trust**

Heading: **Show the thinking. Show the work.**

Use actual project artifacts, before/after comparisons where permission
exists, genuine client quotes with approval, or a transparent process
snapshot. If testimonials and quantified results are not available, do
not insert placeholder quotes. Use an explanation of the decisions made
and the deliverables shipped.

**H. Closing CTA**

Headline: **Have something worth building?**

Body:
`Tell us what you’re working on, what needs to change and where you want to go next.`

CTA: **Start a project ↗**

**I. Footer**

Include wordmark, a contact email, relevant social links, navigation and
privacy. Do not publish invented addresses, office locations or phone
numbers. External links should have clear labels and open behavior that
is consistent across the site.

------------------------------------------------------------------------

## 5.2 Work `/work`

### Wireframe

``` text
┌─────────────────────────────────────────────────────────┐
│ HEADER                                                  │
├─────────────────────────────────────────────────────────┤
│ WORK / INDEX                                            │
│ A selection of digital problems, solved with intention. │
│ Short note on client work vs independent concepts       │
├─────────────────────────────────────────────────────────┤
│ [Large project 01]               [Project 02]           │
│ Name / scope / year              Name / scope / year    │
├─────────────────────────────────────────────────────────┤
│ [Project 03]                     [Large project 04]     │
├─────────────────────────────────────────────────────────┤
│ More work only if it is strong and publishable          │
├─────────────────────────────────────────────────────────┤
│ Want to build something? [Start a project ↗]            │
│ FOOTER                                                  │
└─────────────────────────────────────────────────────────┘
```

### Copy and behavior

Heading: **Work with a point of view.**

Intro:
`A selection of websites, digital experiences and experiments. Each project is presented with its real context and scope.`

-   Use an asymmetric editorial sequence; avoid identical project cards.
-   Add filters only if there are enough projects to make them useful.
    Do not add decorative filters with two items.
-   Each item includes a title, service/discipline, year and project
    type.
-   Hover may adjust image crop, reveal metadata or underline a title;
    focus and touch must expose equivalent information.
-   External live-site links must be labelled as external.
-   End with **Have a project in mind? Start a conversation ↗**

------------------------------------------------------------------------

## 5.3 Case study `/work/[project-slug]`

### Wireframe

``` text
HEADER
PROJECT INDEX / TYPE / YEAR
Project title with a clear, specific descriptor
One-paragraph summary: context + work delivered
Hero media / real project screenshots
THE CHALLENGE — what needed to change?
THE APPROACH — decisions and rationale
THE BUILD — real deliverables and key details
THE OUTCOME — evidence-backed, no invented metrics
Gallery: desktop, mobile, details, interaction states
Credits / role / collaborators / client permissions
NEXT PROJECT
CLOSING CTA + FOOTER
```

### Required content schema

-   Project name and publication status.
-   Client or concept designation.
-   Industry/context.
-   Problem or brief.
-   Scope and actual role.
-   Constraints and decisions.
-   Delivered artifacts.
-   Outcome, only where evidence exists.
-   Screenshots with responsive context.
-   Credits and collaborators.
-   Client permission and external URL, if applicable.

### Copy framework

**The brief**\
`[Describe the real business or user problem in plain language.]`

**The thinking**\
`[Explain the design or technical decisions, why they were selected, and what alternatives were considered.]`

**The work**\
`[List the real deliverables and the parts personally delivered.]`

**The result**\
`[Describe the verified outcome. If no measured result is available, describe what shipped rather than implying commercial impact.]`

CTA: **Discuss a similar project ↗**

Never write generic case-study claims such as "engagement soared" or
"conversions increased" without trustworthy evidence.

------------------------------------------------------------------------

## 5.4 Services `/services`

### Wireframe

``` text
HEADER
SERVICES / INDEX
Clear proposition and who the services are for
Editorial list of service lines with numbered labels
01 Website design & development
02 Branding & digital experiences (if confirmed)
03 SEO & AI-search visibility
04 AI products & automation (if confirmed)
How engagement works / scope boundaries
FAQs only where they answer real objections
CTA: Tell us what you need
FOOTER
```

### Copy

Heading: **The right digital work for the problem at hand.**

Intro:
`From a sharper website to a more useful digital workflow, the scope starts with the problem—not a preset package.`

Each service should explain: - Who it is for. - The problem it
addresses. - What is delivered. - What the client needs to provide. -
What is outside scope. - How progress and approval work. - Relevant real
examples. - A service-specific enquiry CTA.

Avoid unsubstantiated "full service" claims if the agency cannot deliver
all parts directly or through clearly disclosed collaborators.

### Service subpages

**Website design and development**\
Headline: `A website with a reason to exist.`\
Intro:
`Strategy, art direction, interface design and development shaped around your business, audience and next step.`\
Deliverables can include discovery, information architecture, visual
design, responsive implementation, content integration, technical SEO
foundations, QA and handover---but only list items included in the
agreed service.

**SEO and AI-search visibility**\
Headline: `Make the useful things easier to find.`\
Intro:
`Build a stronger foundation for search through technical hygiene, useful content structure and clear entity information.`\
Do not promise rankings, AI citations or placement in any answer engine.
Explain that results depend on competition, content, technical health,
market and time.

**Branding and digital experiences --- publish only if confirmed**\
Headline: `A clearer identity, carried through every interaction.`\
Explain actual deliverables: identity direction, visual language, web
art direction, design assets or brand guidelines, as applicable.

**AI products and automation --- publish only if confirmed**\
Headline: `Use AI where it solves a real problem.`\
Explain discovery, feasibility, workflow mapping, prototype,
integration, testing and handover only where genuinely offered. Clarify
data handling, limitations and third-party costs before implementation.

CTA: **Enquire about this service ↗**

------------------------------------------------------------------------

## 5.5 About `/about`

### Wireframe

``` text
HEADER
ABOUT / POINT OF VIEW
Large editorial statement
Founder/studio portrait only if wanted and authentic
What the studio believes
How the studio works
Capabilities and collaboration model
Real process artifacts / studio details
CTA: Work with us
FOOTER
```

### Copy

Heading: **Good design is not decoration. It is a decision.**

Intro:
`ESSYUPPAY.AI brings design, technology and commercial thinking together to build digital experiences with a clear purpose.`

Point of view: - Make the message understandable before making it
impressive. - Let the visual identity reflect the actual business. -
Build motion around meaning. - Make the experience work on a small
screen and with a keyboard. - Treat launch as a milestone, not the end
of responsibility.

Founder section copy should be written from verified biography and
experience. Do not invent years in business, a team, office locations or
credentials. If the agency is founder-led, state that clearly and
positively.

CTA: **Have a challenge to work through? Start a project ↗**

------------------------------------------------------------------------

## 5.6 Insights `/insights` (optional at launch)

Publish only if there are useful, original articles ready. No thin
filler posts.

Possible editorial themes: - What makes a website enquiry-ready? - How
to brief a website redesign. - Technical SEO foundations for a new
website. - What AI-search visibility can and cannot promise. - Choosing
between a custom website and a template. - Practical automation: when
not to use AI.

Each article should include an author, publication date, useful internal
links, clear heading structure, descriptive metadata and a meaningful
next step. No keyword-stuffed pages or mass-generated near-duplicates.

------------------------------------------------------------------------

## 5.7 Contact `/contact`

### Wireframe

``` text
HEADER
START A PROJECT
Tell us what you are trying to change or build.
Short expectation-setting paragraph
FORM:
Name*                    Business email*
Company / website         Service of interest*
Project description*      Budget range (optional)
Timeline (optional)
Privacy note
[Send project enquiry ↗]
Success / validation / error states
Alternative contact method only if verified
FOOTER
```

### Copy

Heading: **Tell us what you're building.**

Body:
`A little context is enough to start. Share the challenge, the kind of help you need and any constraints we should understand.`

Fields: - Name --- required. - Business email --- required and
validated. - Company or website --- optional. - Service of interest ---
required; options should reflect the services actually offered. -
Project description --- required. - Budget range --- optional; use
ranges appropriate to the agency's real pricing model. - Timeline ---
optional.

Submit CTA: **Send project enquiry ↗**

Success: **Thanks. Your enquiry is in.**\
`We’ll review the details and respond using the contact information you provided.`

Only promise a response time if the agency can consistently meet it. If
the form submission fails, retain entered data where safe, explain the
error in plain language and offer a verified alternative contact route.
Add server-side validation, spam protection that remains accessible,
privacy disclosure and appropriate data retention controls.

------------------------------------------------------------------------

## 5.8 Utility pages

**Privacy:** describe actual data collected, why it is collected, who
processes it, retention, contact details and applicable legal
obligations. Obtain appropriate legal review; do not use generic text as
a substitute for checking the real setup.

**404:** `This page seems to have moved.` Supporting copy:
`The work is still going somewhere. Try the project index or head back home.`
Links: **Explore work** and **Back home**.

**Enquiry received:** confirm the submission without promising a
specific reply deadline unless one is agreed.

------------------------------------------------------------------------

# 6. User journeys and conversion design

## Journey A --- A business looking for a website

Home → featured project → relevant case study → Services → Contact.

The visitor should be able to assess quality, relevance, scope and next
steps without hunting through unrelated content.

## Journey B --- An international prospect

Referral or search landing page → selected work → approach/process →
service details → enquiry.

Use clear English, transparent scope and remote-working expectations. Do
not imply a local office or local client portfolio in a country unless
true.

## Journey C --- A returning visitor

Work or service page → persistent, unobtrusive CTA → enquiry form.

Do not use aggressive pop-ups, fake urgency, countdown timers or
manipulative form patterns.

## CTA hierarchy

-   Global header: **Start a project**
-   Home hero: **Start a project** / **Explore selected work**
-   Project item: **View case study**
-   Case study: **Discuss a similar project**
-   Service detail: **Enquire about this service**
-   About: **Work with us**
-   Insights: **Discuss your challenge**
-   Contact form: **Send project enquiry**

## Trust checklist

Use only: - Authentic work and screenshots. - Correct project credits. -
Genuine testimonials with permission. - Verifiable outcomes. - Clear
process and scope. - Accurate contact and business details. -
Transparent distinction between concept work and client work.

------------------------------------------------------------------------

# 7. Component specification and adaptation rules

## 7.1 Reference components

  -------------------------------------------------------------------------------------------------------------------------------------------
  Component/reference   Verified source                                                            Intended use      Adaptation and caveat
  --------------------- -------------------------------------------------------------------------- ----------------- ------------------------
  Scroll Morph Hero by  https://21st.dev/community/components/explore/scroll-animation-component   Explore mechanics Catalogue presence is
  Prashant Som                                                                                     for hero-to-work  verified; exact
  (catalogue entry)                                                                                media expansion   source/API must be
                                                                                                                     inspected before
                                                                                                                     adoption. Restyle
                                                                                                                     completely and provide a
                                                                                                                     static fallback.

  Text Reveal by        https://preview.21st.dev/%40cnippet-dev/components/text-reveal             Line or word      Published listing shows
  Cnippet                                                                                          reveal on hero    Motion dependency and
                                                                                                   and one selected  MIT license. Verify
                                                                                                   section           repository/package
                                                                                                                     version before use;
                                                                                                                     preserve complete
                                                                                                                     accessible text and
                                                                                                                     avoid
                                                                                                                     character-by-character
                                                                                                                     overuse.

  Morphing Cursor by    https://21st.dev/community/components/explore/cursor-ui                    Optional desktop  Inspect exact component
  Jatin Yadav                                                                                      "VIEW PROJECT"    source, API and license.
  (catalogue entry)                                                                                affordance        Desktop-only
                                                                                                                     enhancement; never a
                                                                                                                     required navigation
                                                                                                                     mechanism.

  Watermelon UI base    https://ui.watermelon.sh/components                                        Form, Sheet,      Catalog lists these
  components                                                                                       Button, Dialog,   components. Copy and
                                                                                                   Accordion and     adapt only what is
                                                                                                   Sonner patterns   needed; restyle to the
                                                                                                                     approved system and
                                                                                                                     audit keyboard behavior.

  Motion for React      https://motion.dev/docs/react-use-transform                                Scroll-linked     Official docs explain
  `useTransform`                                                                                   values and visual transforming motion
                                                                                                   transforms        values. Use sparingly;
                                                                                                                     avoid animating layout
                                                                                                                     properties
                                                                                                                     unnecessarily.

  GSAP ScrollTrigger    https://gsap.com/docs/v3/Plugins/ScrollTrigger/                            One or two        Official docs support
                                                                                                   complex scroll    trigger, scrub and pin
                                                                                                   sequences         patterns. Use only where
                                                                                                                     necessary; avoid
                                                                                                                     competing with another
                                                                                                                     scroll engine.

  Lucide                https://lucide.dev/icons                                                   Functional icons  Use one icon family with
                                                                                                                     consistent stroke
                                                                                                                     weights.
  -------------------------------------------------------------------------------------------------------------------------------------------

### Important implementation rule

Do not blindly paste components from a gallery. Before adopting any
community component, verify the current source, API, dependency list,
license and responsive behavior. The component's existence on a
directory is not proof that it is production-ready or compatible with
the final repository.

## 7.2 Component behavior

**Header and mobile sheet** - Clear active/current-page indication. -
Menu button has an accessible name and expanded state. - Escape closes
the sheet; focus is managed and restored. - Navigation remains usable
without animation.

**Project item** - Whole item may be a link, but avoid nested clickable
controls. - Include visible project name and type. - Hover can crop or
scale media slightly; focus state must communicate the same
affordance. - No cursor-only instructions.

**Text reveal** - Keep semantic text in the DOM. - Do not render a
separate inaccessible animated copy of the heading. - Avoid delaying the
first meaningful content. - Respect reduced motion.

**Enquiry form** - Persistent labels, not placeholder-only labels. -
Errors are specific and associated with fields. - Success and failure
states are announced accessibly. - No false success before the server
confirms submission.

**Accordion** - Use only for genuine secondary detail or FAQs. -
Keyboard-operable and programmatically labelled. - Do not hide critical
service information inside collapsed items.

------------------------------------------------------------------------

# 8. Motion choreography and accessibility

## Page entry --- 600ms reveal

The wordmark and navigation settle first; headline lines, supporting
copy and CTA follow with restrained staggering. No long preloader. The
first screen remains understandable if all animation is disabled.

## Hero-to-work transition --- 900ms scene

A hero image can expand from its framed composition toward the featured
project section. The text and CTA remain available. On smaller screens,
use a simpler crop/opacity transition rather than forcing the desktop
composition to fit.

## Portfolio feedback --- 240ms

Adjust crop, underline or metadata emphasis. Avoid large scale jumps,
cursor trails and excessive magnetic movement. Keyboard focus must
reveal the same information.

## Section entrances --- 600ms

Use subtle directional reveals with 60--100ms stagger only for a small
group. Avoid animating every paragraph and label. Keep reading order
independent of visual timing.

## Contact finale --- 900ms

Use a shift in surface color and a concise headline/CTA composition. Do
not trap the visitor in a pinned scene or force a long scroll.

## Reduced-motion behavior

When `prefers-reduced-motion: reduce` is active: - Remove scroll pinning
and scrub-based transformations. - Disable cursor-follow, magnetic
movement, looping and auto-cycling. - Replace large movement with
immediate state or a simple opacity change. - Remove preloader
behavior. - Keep content in natural DOM order and immediately
available. - Keep controls responsive and preserve visible focus. - Test
the full site with the operating-system preference enabled.

## Smooth scrolling

Native scrolling is the default. Add Lenis only if testing demonstrates
a clear benefit and the implementation preserves anchor navigation,
keyboard operation, browser expectations and reduced-motion behavior. Do
not combine multiple smooth-scroll systems.

------------------------------------------------------------------------

# 9. Image direction, prompts and shot list

## Visual language

The art direction should feel tactile and composed: warm paper,
sculptural forms, precise hard light, strong shadows, unexpected color
relationships and negative space. Pair these with authentic digital work
and actual client imagery. Use generated imagery for supporting art
direction---not as evidence of a project that does not exist.

## Prompt A --- Hero still life

> Art-directed editorial still-life photograph for an independent
> digital design studio. A single sculptural vermilion-red geometric
> form intersects a folded peach-paper plane, with a small mineral-green
> element. Palette: peach #F4E3D7, aubergine #2C1D27, tomato red
> #B72F27, mineral green #8ABFA5. Hard directional studio light from
> upper left, long precise shadows, tactile uncoated paper, subtle
> photographic grain, 50mm lens, three-quarter camera angle, generous
> negative space on the left for oversized editorial typography. Premium
> print-campaign art direction, physically plausible materials, precise
> composition. No text, logo, gradient, floating blob, neon,
> glassmorphism or stock-photo styling.

## Prompt B --- Editorial transition image

> Sculptural editorial still life with a folded peach-paper structure,
> one deep aubergine architectural slab and a tomato-red plane
> intersected by a restrained mineral-green form. Directional hard
> light, long graphic shadows, tactile paper and matte painted surfaces,
> asymmetric framing, premium design-magazine photography. Leave clean
> negative space for a small project label. The image should feel
> physically built and photographed, not like a 3D stock render. No
> text, UI, logo, gradients, glass, glow or floating blobs.

## Prompt C --- Graphic interstitial

> Top-down editorial photograph of a folded vermilion paper ribbon
> crossing a warm peach sheet, with one small pale-citron cut-out and a
> deep aubergine shadow. Tactile fibers, crisp folds, controlled
> negative space, sharp directional light, restrained composition,
> premium art-book visual language. No typography, logos, gradients,
> glassmorphism, UI or neon.

## Real-photo and capture shot list

1.  Full-page screenshots of real client projects, desktop and mobile.
2.  Actual interaction states: navigation, forms, key transitions and
    responsive layouts.
3.  Original project assets, where permitted.
4.  Authentic founder/studio portrait if the founder wants to be
    visible.
5.  Real process artifacts: annotated wireframes, design explorations,
    prototypes or build details.
6.  Client environment/product photography with permission.
7.  Detail crops that explain craft and decisions---not decorative
    filler.
8.  For each case study, at least one wide hero image, one
    context/detail image and one mobile/responsive view where available.

## Asset production requirements

-   Generate a coherent set, not unrelated one-off images.
-   Prepare art-directed crops for desktop and mobile.
-   Prefer AVIF/WebP with responsive sizes and dimensions reserved.
-   Add descriptive alt text for informative images; use empty alt text
    for purely decorative imagery.
-   Do not use generated text inside images.
-   Keep AI-generated supporting artwork distinct from real project
    evidence.

------------------------------------------------------------------------

# 10. SEO, accessibility, performance and technical acceptance

## SEO

-   Unique, accurate title and meta description for every indexable
    page.
-   Canonical URLs and a correct sitemap/robots configuration.
-   Semantic, crawlable content rendered in the page---not only in
    animation layers.
-   Valid Organization/WebSite/BreadcrumbList schema where appropriate
    and supported by actual business data.
-   Correct social preview metadata.
-   Descriptive image filenames and alt text.
-   Internal links between services, relevant work and contact.
-   Redirect map from the existing portfolio URL structure if any URLs
    are being replaced.
-   Search Console and analytics configured with privacy and consent
    requirements considered.
-   No country doorway pages or promises of AI-search rankings.

## Accessibility

-   Target WCAG 2.2 AA.
-   Semantic landmarks and heading order.
-   Keyboard access to all functionality.
-   Visible focus indicators with sufficient contrast.
-   Minimum 44 × 44 CSS pixel touch targets where practical.
-   Form labels, instructions and associated errors.
-   200% zoom and reflow testing.
-   No hover-only content.
-   Reduced-motion support.
-   Correct image alternatives.
-   Color never used as the only state indicator.

## Performance targets

-   LCP ≤ 2.5s at the 75th percentile.
-   INP ≤ 200ms at the 75th percentile.
-   CLS ≤ 0.1 at the 75th percentile.
-   Initial JavaScript aim: ≤ 200KB compressed where feasible.
-   CSS aim: ≤ 50KB compressed where feasible.
-   Limit font files to 2--3 essential families/requests or optimized
    subsets.
-   Lazy-load below-the-fold media; prioritize the hero asset.
-   Reserve image/video dimensions.
-   Avoid autoplay video unless it has a compelling purpose and a
    lightweight fallback.
-   Treat 3D/WebGL as optional enhancement, not the default foundation.

## Technical assumptions to confirm before implementation

-   Inspect the existing repository and retain a compatible stack where
    practical.
-   Preferred direction: Next.js App Router, TypeScript and Tailwind CSS
    if the current project supports them.
-   Motion for React for standard animation.
-   GSAP ScrollTrigger only for the selected complex scroll sequence.
-   Use semantic native HTML and lightweight custom components where
    they outperform a dependency.
-   Choose and verify form delivery, email handling, spam protection,
    analytics and privacy requirements before launch.
-   Do not hard-code credentials or expose secrets in client code.

------------------------------------------------------------------------

# 11. Content readiness and launch gates

Before publication, create a content inventory with one row per
project/service/page and record:

-   Is the content true and approved?
-   Is the client name and logo permitted?
-   Is the work client work or an independent concept?
-   Are results supported by evidence?
-   Are collaborators credited?
-   Is the image licensed or owned?
-   Does the CTA lead to a working destination?
-   Has mobile content and imagery been checked?
-   Does the page have unique metadata?
-   Is the page useful enough to publish?

Do not publish empty testimonials, fake statistics, invented client
logos, fake partner badges, unverified award claims or placeholder
contact details.

------------------------------------------------------------------------

# 12. Quality assurance checklist

## Design

-   [ ] Approved palette, typefaces, grid and spacing are preserved.
-   [ ] Visual hierarchy is clear without animation.
-   [ ] Asymmetry feels intentional and aligned to the grid.
-   [ ] No default three-card template or repeated card grid.
-   [ ] Project imagery is authentic and properly credited.

## UX and content

-   [ ] The offer is understandable from the first screen.
-   [ ] Work and service paths lead naturally to contact.
-   [ ] All claims and project descriptions are verifiable.
-   [ ] Concept projects are explicitly labelled.
-   [ ] Form fields, validation and confirmation work end to end.

## Motion

-   [ ] Motion timings use approved tokens.
-   [ ] No long preloader.
-   [ ] No hover-only information.
-   [ ] Reduced-motion mode is tested.
-   [ ] Scroll behavior works on touch devices and with keyboard
    navigation.
-   [ ] Only one animation system owns each sequence.

## Accessibility and performance

-   [ ] Keyboard and focus testing complete.
-   [ ] Contrast checked for all actual states.
-   [ ] Zoom/reflow and mobile overflow checked.
-   [ ] Core Web Vitals measured in representative conditions.
-   [ ] Images, fonts and scripts optimized.
-   [ ] Errors and success states announced accessibly.

## SEO and launch

-   [ ] Titles, descriptions, canonicals and social metadata checked.
-   [ ] Sitemap, robots and redirects checked.
-   [ ] Schema contains only truthful information.
-   [ ] Analytics/privacy setup reviewed.
-   [ ] Contact details and form delivery verified.
-   [ ] 404, privacy and enquiry success states work.

------------------------------------------------------------------------

# 13. Reference library and credits

The following links are the verified starting references used for the
component and visual research. These are references to learn from and
adapt---not permission to reproduce another studio's complete design.

## Components and implementation references

1.  **21st.dev --- Scroll Animation Components**\
    https://21st.dev/community/components/explore/scroll-animation-component\
    Catalogue includes the Scroll Morph Hero by Prashant Som and other
    scroll-driven patterns. Inspect exact source and license before
    adoption.

2.  **21st.dev --- Hero Scroll Components**\
    https://21st.dev/community/components/explore/hero-scroll\
    Reference library for hero transitions and scroll-linked
    composition.

3.  **Cnippet --- Text Reveal on 21st.dev**\
    https://preview.21st.dev/%40cnippet-dev/components/text-reveal\
    Published component describes word, character and line reveal
    options; listing shows Motion dependency and MIT license. Verify
    current source/version before use.

4.  **21st.dev --- Cursor UI collection**\
    https://21st.dev/community/components/explore/cursor-ui\
    Catalogue includes Morphing Cursor by Jatin Yadav. Use only as
    optional desktop enhancement after source/API/license review.

5.  **Watermelon UI --- Components**\
    https://ui.watermelon.sh/components\
    Reference for functional React components including Button, Dialog,
    Form, Sheet, Accordion and Sonner.

6.  **Motion for React --- `useTransform`**\
    https://motion.dev/docs/react-use-transform\
    Official reference for transforming motion values.

7.  **GSAP --- ScrollTrigger documentation**\
    https://gsap.com/docs/v3/Plugins/ScrollTrigger/\
    Official reference for scroll-triggered timelines and related
    behavior.

8.  **Lucide icons**\
    https://lucide.dev/icons\
    Official icon catalogue.

## Visual research galleries

9.  **Godly Design Inspiration**\
    https://godly.design/\
    Curated work for exploring typography, art direction, layouts and
    interaction patterns.

10. **Awwwards**\
    https://www.awwwards.com/\
    Research high-craft digital experiences; evaluate usability and
    accessibility independently of award status.

11. **Behance**\
    https://www.behance.net/\
    Research visual identity systems, art direction and project
    presentation.

12. **Dribbble**\
    https://dribbble.com/\
    Useful for isolated visual studies; do not assume a shot represents
    a complete, accessible, production-ready website.

13. **Pinterest**\
    https://www.pinterest.com/\
    Useful for building a consistent reference board around material,
    color, typography and composition.

14. **MotionSites**\
    https://motionsites.org/sites\
    Reference gallery for motion-led websites. Study interaction
    principles; do not treat gallery entries as reusable component APIs.

## Credit and licensing rules

-   Credit third-party components according to their licenses and
    required notices.
-   Keep required license files and notices in the repository.
-   Do not copy proprietary imagery, branding or complete layouts.
-   Verify current terms at the time of use.
-   Record source URL, author, license and any modifications for each
    adopted community component.
-   Use original artwork and actual project screenshots for the agency's
    own identity and case studies.

------------------------------------------------------------------------

# 14. Phase 7 self-audit

Scores evaluate the quality of this specification, not a website
implementation that has not yet been built.

  ---------------------------------------------------------------------------
  Dimension                                       Score Rationale / remaining
                                                        risk
  ------------------------ ---------------------------- ---------------------
  Originality of direction                         9/10 Clear hybrid with a
                                                        distinctive tactile
                                                        palette and editorial
                                                        hierarchy; execution
                                                        must avoid default
                                                        component styling.

  Visual hierarchy                                 9/10 Strong display
                                                        typography,
                                                        asymmetric grid and
                                                        one focal point per
                                                        viewport.

  Contrast/accessibility                           8/10 Palette pairings have
                                                        been checked, but
                                                        every final component
                                                        state still requires
                                                        testing.

  Spacing/layout                                   9/10 Explicit grid,
                                                        spacing scale and
                                                        breakpoints; real
                                                        content may require
                                                        adjustment.

  Motion purpose                                   9/10 Motion is limited to
                                                        narrative transitions
                                                        and feedback;
                                                        implementation must
                                                        avoid over-animation.

  Brand fit                                        8/10 Direction fits a
                                                        creative digital
                                                        studio; final
                                                        positioning and
                                                        service list must
                                                        reflect actual
                                                        delivery capability.

  Mobile readiness                                 8/10 Mobile-first
                                                        constraints are
                                                        explicit; the final
                                                        design still needs
                                                        device testing.

  Conversion clarity                               9/10 Clear CTA hierarchy
                                                        and a short enquiry
                                                        flow; lead quality
                                                        depends on real offer
                                                        and evidence.

  Evidence integrity                              10/10 Explicit safeguards
                                                        against fabricated
                                                        projects, metrics and
                                                        testimonials.

  Production readiness                             8/10 Ready for
                                                        implementation
                                                        planning; repository,
                                                        content, service
                                                        capability, form
                                                        delivery and legal
                                                        details remain to be
                                                        verified.
  ---------------------------------------------------------------------------

## Main risks to resolve during implementation

1.  **The visual ambition could outrun the proof.** Prioritize real
    projects and transparent concept work over decorative filler.
2.  **The service range could sound broader than delivery capacity.**
    Confirm each service and publish only what can be delivered.
3.  **Motion could harm performance or accessibility.** Build a static
    baseline first, then layer in animation.
4.  **The portfolio could be too small for filters or many project
    tiles.** Use only strong, real work and let the layout scale
    naturally.
5.  **SEO and AI-search expectations could be overstated.** Describe
    work performed and limitations; never guarantee rankings or
    citations.

------------------------------------------------------------------------

# 15. Implementation handoff

Use the separate file `ESSYUPPAY_IMPLEMENTATION_PROMPT.md` as the
execution brief for Google Antigravity or Cursor. It instructs the
coding agent to inspect the existing project, preserve this approved
design system, plan before implementing, build page by page, and
validate content, accessibility, responsiveness, motion and performance.
It explicitly forbids starting from a generic template or fabricating
portfolio proof.

**Phase 7 package complete.** This document defines the approved
creative and UX direction. It does not include website code, and it does
not authorize the implementation agent to bypass review of the current
repository or invent missing content.
