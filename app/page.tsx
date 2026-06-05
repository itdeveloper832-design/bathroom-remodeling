import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import QuickAnswers from "@/components/home/quick-answers";
import { LocalBusinessSchema, FAQSchema, SpeakableSchema, OrganizationSchema, WebSiteSchema, VideoSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { homeFaqs, faqAnswerPlain } from "@/lib/home-faqs";

import LocalTrust from "@/components/home/local-trust";
import AboutPreview from "@/components/home/about-preview";
import ServicesGrid from "@/components/home/services-grid";

import ChandlerProjects from "@/components/home/chandler-projects";
import DesignBuildShowcase from "@/components/home/design-build-showcase";
import WhyChooseUs from "@/components/home/why-choose-us";
import PricingTable from "@/components/home/pricing-table";
import BathroomSection from "@/components/home/bathroom-section";
import ProcessSection from "@/components/home/process-section";
import ChandlerExpertise from "@/components/home/chandler-expertise";
import PopularProjects from "@/components/home/popular-projects";
import VideoShowcase from "@/components/home/video-showcase";
import ServiceAreas from "@/components/home/service-areas";
import Financing from "@/components/home/financing";
import ComparisonBenefits from "@/components/home/comparison-benefits";
import FAQ from "@/components/home/faq";
import BlogPreview from "@/components/home/blog-preview";
import GalleryPreview from "@/components/home/gallery-preview";
import { HomeBelowFold } from "@/components/home/home-below-fold";
import FinalCTA from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Chandler AZ | Free Design Quote",
  description: "Transform your bathroom with Chandler's trusted remodeling experts. Custom showers, tile, vanities & free in-home estimates.",
  openGraph: {
    title: "Bathroom Remodeling Chandler AZ - Licensed Contractor",
    description:
      "Custom walk-in showers & tub-to-shower conversions in Chandler. Fixed pricing from $6,000. ROC licensed since 2010. Serving Ocotillo, Fulton Ranch & East Valley. Call for a free in-home estimate.",
    type: "website",
    url: `${siteConfig.url}/`,
    images: [
      {
        url: `${siteConfig.url}/images/og-homepage.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Luxury Bathroom Remodeling in Chandler, AZ",
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
    thumbnailUrl: `${siteConfig.url}/images/services/chandler-bathroom-remodel.webp`,
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
        <QuickAnswers />
        <div>
          <LocalTrust cityName="Chandler" />
          <AboutPreview />
          <ServicesGrid />
          <ChandlerProjects />
          <DesignBuildShowcase />
          <WhyChooseUs />
          <PricingTable />
          <BathroomSection />
          <ProcessSection />
          <ChandlerExpertise />
          <PopularProjects />
          <VideoShowcase />
          <ServiceAreas />
          <Financing />
          <ComparisonBenefits />
          <FAQ />
          <BlogPreview />
          <GalleryPreview />
          <HomeBelowFold />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
