import { siteConfig } from "@/lib/site-config";


interface LocalBusinessSchemaProps {
  type?: "LocalBusiness" | "HomeAndConstructionBusiness" | "GeneralContractor";
}

export function LocalBusinessSchema({ type = "HomeAndConstructionBusiness" }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: "ARZ Home Remodeling",
    description: siteConfig.description,
    image: `${siteConfig.url}/images/new-images-logo.jpg`,
    "@id": `${siteConfig.url}/#organization`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleRating.toString(),
      reviewCount: siteConfig.googleReviewsCount.toString(),
      bestRating: "5",
      worstRating: "1"
    },
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
      jobTitle: "Founder & Owner",
      url: siteConfig.url,
      credentials: {
        "@type": "EducationalOccupationalCredential",
        name: "Arizona Registrar of Contractors License",
        identifier: "ROC338304"
      }
    },
    license: "ROC338304",
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
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
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

export function ServiceSchema({ serviceName, serviceDescription, serviceUrl, serviceType }: ServiceSchemaProps & { serviceType?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType || serviceName,
    "name": serviceName,
    "description": serviceDescription,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.googleRating.toString(),
      "reviewCount": siteConfig.googleReviewsCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteConfig.url}/#organization`,
      "name": "ARZ Home Remodeling",
      "url": siteConfig.url,
      "telephone": siteConfig.phone,
      "email": siteConfig.email,
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
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image,
    author: {
      "@type": "Person",
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

interface SpeakableSchemaProps {
  url: string;
  cssSelectors?: string[];
}

export function SpeakableSchema({
  url,
  cssSelectors = ["#main-content h1", "#quick-answers-heading", ".quick-answer-text"],
}: SpeakableSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
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
      ratingValue: siteConfig.googleRating.toString(),
      reviewCount: siteConfig.googleReviewsCount.toString(),
      bestRating: "5",
      worstRating: "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PersonSchemaProps {
  name?: string;
  jobTitle?: string;
  affiliation?: string;
  url?: string;
  credentials?: string;
  licenseNumber?: string;
}

export function PersonSchema({
  name = siteConfig.owner,
  jobTitle = "Founder & Owner, Licensed Contractor",
  affiliation = "ARZ Home Remodeling",
  url = siteConfig.url,
  credentials = "Arizona Registrar of Contractors License",
  licenseNumber = "ROC338304",
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    jobTitle: jobTitle,
    affiliation: {
      "@type": "Organization",
      name: affiliation,
      url: url,
    },
    url: url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    credentials: [
      {
        "@type": "EducationalOccupationalCredential",
        name: credentials,
        identifier: licenseNumber,
      },
    ],
    knowsAbout: [
      "Bathroom Remodeling",
      "Home Construction",
      "Arizona Building Codes",
      "Customer Service",
      "Project Management",
    ],
    workLocation: {
      "@type": "Place",
      name: "Chandler, Arizona",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface OrganizationSchemaProps {
  url?: string;
  logo?: string;
}

export function OrganizationSchema({
  url = siteConfig.url,
  logo = `${siteConfig.url}/images/new-images-logo.jpg`,
}: OrganizationSchemaProps = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    "name": "ARZ Home Remodeling",
    "url": url,
    "logo": logo,
    "image": logo,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6710 W Chicago St",
      "addressLocality": "Chandler",
      "addressRegion": "AZ",
      "postalCode": "85226",
      "addressCountry": "US"
    },
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      siteConfig.social.linkedin,
    ].filter(Boolean),
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone,
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebSiteSchemaProps {
  url?: string;
}

export function WebSiteSchema({ url = siteConfig.url }: WebSiteSchemaProps = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": url,
    "name": "ARZ Home Remodeling",
    "alternateName": ["ARZ Home Remodeling", "ARZ Home Remodeling Chandler"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ContactPageSchemaProps {
  url?: string;
}

export function ContactPageSchema({ url = `${siteConfig.url}/contact/` }: ContactPageSchemaProps = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": "Contact ARZ Home Remodeling",
    "description": "Contact Chandler's top-rated bathroom remodeling contractor. Get a free written estimate for your master bath or shower remodel.",
    "mainEntity": {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteConfig.url}/#organization`,
      "name": "ARZ Home Remodeling",
      "telephone": siteConfig.phone,
      "email": siteConfig.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6710 W Chicago St",
        "addressLocality": "Chandler",
        "addressRegion": "AZ",
        "postalCode": "85226",
        "addressCountry": "US"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface VideoObjectProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  embedUrl: string;
}

interface VideoSchemaProps {
  videos: VideoObjectProps[];
}

export function VideoSchema({ videos }: VideoSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": videos.map((video) => ({
      "@type": "VideoObject",
      "name": video.name,
      "description": video.description,
      "thumbnailUrl": video.thumbnailUrl,
      "uploadDate": video.uploadDate,
      "duration": video.duration,
      "embedUrl": video.embedUrl,
      "publisher": {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": "ARZ Home Remodeling",
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}/images/new-images-logo.jpg`
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
