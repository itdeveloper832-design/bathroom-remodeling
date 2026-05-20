import { siteConfig } from "@/lib/site-config";

interface LocalBusinessSchemaProps {
  type?: "LocalBusiness" | "HomeAndConstructionBusiness";
}

export function LocalBusinessSchema({ type = "HomeAndConstructionBusiness" }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: "ARZ Home Remodeling",
    image: `${siteConfig.url}/images/new-images-logo.jpg`,
    "@id": `${siteConfig.url}/#organization`,
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
      jobTitle: "Founder & Owner",
      url: siteConfig.url,
    },
    knowsAbout: [
      "Bathroom Remodeling",
      "Shower Remodeling",
      "Bathtub Installation",
      "Tub to Shower Conversion",
      "Master Bathroom Remodeling",
      "Small Bathroom Remodeling",
      "Bathroom Tile",
      "Vanity Installation",
      "Bathroom Flooring"
    ],
    url: "https://arzhomeremodeling.com",
    telephone: "(229) 306-5591",
    email: "info@arzremodeling.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6710 W Chicago St",
      addressLocality: "Chandler",
      addressRegion: "AZ",
      postalCode: "85226",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.3009334,
      longitude: -111.9605964,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
      siteConfig.social.pinterest,
      siteConfig.social.youtube,
      siteConfig.social.linkedin,
    ].filter(Boolean),
    priceRange: "$$-$$$",
    areaServed: ["Chandler AZ","Gilbert AZ","Mesa AZ","Tempe AZ","Queen Creek AZ","Sun Lakes AZ","Ocotillo AZ","Ahwatukee AZ"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bathroom Remodeling Services in Chandler",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Remodeling",
            description: "Complete bathroom renovation services including custom showers, tub conversions, vanities, and more in Chandler AZ.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Shower Remodeling",
            description: "Custom shower remodeling with premium tile, glass enclosures, and modern fixtures.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathtub Installation",
            description: "Professional bathtub installation for new bathroom layouts and remodels.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathtub Replacement",
            description: "Bathtub replacement services for outdated, damaged, or inefficient tubs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Walk-in Shower Installation",
            description: "Accessible walk-in shower installation designed for comfort, safety, and style.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Tile Installation",
            description: "Bathroom tile installation for walls, floors, shower surrounds, and backsplashes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Vanity Installation",
            description: "Bathroom vanity installation with integrated storage, sinks, and premium countertops.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Flooring",
            description: "Bathroom flooring upgrades with durable, moisture-resistant materials.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Lighting Upgrade",
            description: "Bathroom lighting upgrades that improve visibility, ambiance, and energy efficiency.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Sink Installation",
            description: "Bathroom sink installation with updated plumbing, fixtures, and finish selections.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Plumbing Upgrade",
            description: "Bathroom plumbing upgrades that improve function, efficiency, and reliability.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5"
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
}

export function ServiceSchema({ serviceName, serviceDescription, serviceUrl }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "ConstructionBusiness",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://arzhomeremodeling.com/#organization",
      "name": "ARZ Home Remodeling",
      "url": "https://arzhomeremodeling.com",
      "telephone": "(229) 306-5591",
      "email": "info@arzremodeling.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6710 W Chicago St",
        "addressLocality": "Chandler",
        "addressRegion": "AZ",
        "postalCode": "85226",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Chandler, AZ"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "priceRange": "$12,500 - $38,000",
      "lowPrice": "12500",
      "highPrice": "38000"
    },
    "url": serviceUrl
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = siteConfig.name,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/new-images-logo.jpg`,
      },
    },
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Alias for backwards compatibility
export const BlogArticleJsonLd = ArticleSchema;

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ReviewSchemaProps {
  name: string;
  description: string;
  author: string;
  datePublished: string;
  rating: number; // 1-5
  url: string;
}

export function ReviewSchema({
  name,
  description,
  author,
  datePublished,
  rating,
  url,
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: description,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    datePublished: datePublished,
    url: url,
    name: name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PriceSchemaProps {
  serviceName: string;
  priceCurrency?: string;
  price?: string;
  priceRange?: string; // e.g., "$15,000 - $45,000"
  url: string;
  availability?: "InStock" | "PreOrder" | "OutOfStock";
}

export function PriceSchema({
  serviceName,
  priceCurrency = "USD",
  price,
  priceRange,
  url,
  availability = "InStock",
}: PriceSchemaProps) {
  let offerSchema: any = {
    "@type": "Offer",
    priceCurrency,
    availability: `https://schema.org/${availability}`,
    url: url,
  };

  if (price) {
    offerSchema.price = price;
  } else if (priceRange) {
    const numbers = priceRange.replace(/[^0-9.-]/g, '').split('-');
    const lowPrice = numbers[0] || "0";
    const highPrice = numbers[1] || lowPrice;

    offerSchema = {
      "@type": "AggregateOffer",
      priceCurrency,
      lowPrice,
      highPrice,
      offerCount: "1",
      availability: `https://schema.org/${availability}`,
      url: url,
    };
  } else {
    offerSchema.price = "0";
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: serviceName,
    image: `${siteConfig.url}/images/hero-bathroom.jpg`,
    description: `Professional ${serviceName} by ${siteConfig.name}.`,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: offerSchema,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
