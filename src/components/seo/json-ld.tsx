import * as React from "react";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://essyuppay.ai/#website",
        url: "https://essyuppay.ai",
        name: "ESSYUPPAY.AI",
        description:
          "Bespoke websites, digital experiences and practical AI solutions for ambitious businesses.",
        publisher: {
          "@id": "https://essyuppay.ai/#organization",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://essyuppay.ai/#organization",
        name: "ESSYUPPAY.AI",
        url: "https://essyuppay.ai",
        email: "bhushansapkal207@gmail.com",
        telephone: "+919284197150",
        priceRange: "$$$",
        founder: {
          "@type": "Person",
          name: "Bhushan Sapkal",
          jobTitle: "Founder & Creative Developer",
          sameAs: [
            "https://github.com/bhushan-1710",
            "https://www.linkedin.com/in/bhushan-sapkal-754a34376/",
          ],
        },
        sameAs: [
          "https://github.com/bhushan-1710",
          "https://www.linkedin.com/in/bhushan-sapkal-754a34376/",
        ],
        areaServed: [
          "India",
          "United Kingdom",
          "Ireland",
          "United States",
          "Australia",
          "Worldwide Remote",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Engineering & Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Design & Development",
                description:
                  "Strategy, art direction, interface design and frontend engineering shaped around business goals.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO & Digital Visibility",
                description:
                  "Technical SEO hygiene, crawlable semantic HTML5, and structured JSON-LD entity architecture.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
