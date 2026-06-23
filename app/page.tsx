import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import { LocalBusinessSchema, FAQSchema, SpeakableSchema, OrganizationSchema, WebSiteSchema, VideoSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { homeFaqs, faqAnswerPlain } from "@/lib/home-faqs";

import BelowFoldLoader from "@/components/home/below-fold-loader";

export const metadata: Metadata = {
  title: "Licensed Bath Remodelers | Chandler AZ Bathroom Remodeling",
  description: "Upgrade your bathroom with Chandler's trusted remodeling contractor. Custom walk-in showers, vanity installs, and master bath renovations. Call for a free estimate!",
  openGraph: {
    title: "ARZ Home Remodeling | Bathroom Remodeling Chandler AZ",
    description: "Licensed bathroom remodeling in Chandler & East Valley. Walk-in showers, tub conversions & custom tile. 2-year warranty. Free estimate: (520) 569-3339.",
    type: "website",
    url: `${siteConfig.url}/`,
    images: [
      {
        url: `${siteConfig.url}/images/og-homepage.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Custom Bathroom Remodeling in Chandler, AZ",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
  other: {
    "og:type": "business.business",
  },
};

const faqSchemaItems = homeFaqs.map((f) => ({
  question: f.question,
  answer: faqAnswerPlain(f.answer),
}));

const homepageVideos = [
  {
    name: "Ocotillo Luxury Master Suite Tour",
    description: "Walkthrough tour of a completed luxury master suite bathroom remodel in Ocotillo, Chandler, AZ. Features custom curbless walk-in shower and epoxy grout.",
    thumbnailUrl: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
    uploadDate: "2025-03-15T08:00:00Z",
    duration: "PT2M45S",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "Fulton Ranch Tub-to-Shower Conversion",
    description: "Smartphone video walkthrough of a custom garden tub-to-shower conversion in Fulton Ranch, Chandler, AZ, using premium Schluter-KERDI waterproofing.",
    thumbnailUrl: `${siteConfig.url}/images/hero/luxury-shower-remodel-chandler.webp`,
    uploadDate: "2025-01-20T09:00:00Z",
    duration: "PT1M55S",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export default function HomePage() {
  return (
    <>
        <WebSiteSchema />
        <FAQSchema faqs={faqSchemaItems} />
        <SpeakableSchema url={`${siteConfig.url}/`} />
        <VideoSchema videos={homepageVideos} />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <BelowFoldLoader />
      </main>
      <Footer />
    </>
  );
}
