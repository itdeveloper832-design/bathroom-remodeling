import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import QuickAnswers from "@/components/home/quick-answers";
import { LocalBusinessSchema, FAQSchema, SpeakableSchema, OrganizationSchema, WebSiteSchema, VideoSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { homeFaqs, faqAnswerPlain } from "@/lib/home-faqs";

const LocalTrust = dynamic(() => import("@/components/home/local-trust"));
const AboutPreview = dynamic(() => import("@/components/home/about-preview"));
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"));
const ChandlerProjects = dynamic(() => import("@/components/home/chandler-projects"));
const DesignBuildShowcase = dynamic(() => import("@/components/home/design-build-showcase"));
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"));
const PricingTable = dynamic(() => import("@/components/home/pricing-table"));
const BathroomSection = dynamic(() => import("@/components/home/bathroom-section"));
const ProcessSection = dynamic(() => import("@/components/home/process-section"));
const ChandlerExpertise = dynamic(() => import("@/components/home/chandler-expertise"));
const PopularProjects = dynamic(() => import("@/components/home/popular-projects"));
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"));
const Financing = dynamic(() => import("@/components/home/financing"));
const ComparisonBenefits = dynamic(() => import("@/components/home/comparison-benefits"));
const FAQ = dynamic(() => import("@/components/home/faq"));
const BlogPreview = dynamic(() => import("@/components/home/blog-preview"));
const FinalCTA = dynamic(() => import("@/components/home/final-cta"));
const VideoShowcase = dynamic(() => import("@/components/home/video-showcase"));
import { HomeBelowFold } from "@/components/home/home-below-fold";
import { LazySection } from "@/components/ui/lazy-section";

const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"), {
  loading: () => (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 h-96 bg-muted/30 rounded-2xl animate-pulse" />
    </div>
  ),
});
export const metadata: Metadata = {
  title: {
    absolute: "Bathroom Remodeling Chandler AZ | Licensed, ROC-Certified | Free Estimate"
  },
  description: "Custom walk-in showers & tub-to-shower conversions in Chandler. Fixed pricing from $6,000. ROC licensed since 2010. Serving Ocotillo, Fulton Ranch & East Valley. Call for a free in-home estimate.",
  openGraph: {
    title: "Bathroom Remodeling Chandler AZ | Licensed, ROC-Certified | Free Estimate",
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
          <LazySection height="150px">
            <LocalTrust cityName="Chandler" />
          </LazySection>
          <LazySection height="450px">
            <AboutPreview />
          </LazySection>
          <LazySection height="600px">
            <ServicesGrid />
          </LazySection>
          <LazySection height="600px">
            <ChandlerProjects />
          </LazySection>
          <LazySection height="500px">
            <DesignBuildShowcase />
          </LazySection>
          <LazySection height="500px">
            <WhyChooseUs />
          </LazySection>
          <LazySection height="500px">
            <PricingTable />
          </LazySection>
          <LazySection height="400px">
            <BathroomSection />
          </LazySection>
          <LazySection height="600px">
            <ProcessSection />
          </LazySection>
          <LazySection height="400px">
            <ChandlerExpertise />
          </LazySection>
          <LazySection height="500px">
            <PopularProjects />
          </LazySection>
          <LazySection height="450px">
            <VideoShowcase />
          </LazySection>
          <LazySection height="300px">
            <ServiceAreas />
          </LazySection>
          <LazySection height="400px">
            <Financing />
          </LazySection>
          <LazySection height="500px">
            <ComparisonBenefits />
          </LazySection>
          <LazySection height="600px">
            <FAQ />
          </LazySection>
          <LazySection height="500px">
            <BlogPreview />
          </LazySection>
          <LazySection height="600px">
            <GalleryPreview />
          </LazySection>
          <LazySection height="800px">
            <HomeBelowFold />
          </LazySection>
          <LazySection height="300px">
            <FinalCTA />
          </LazySection>
        </div>
      </main>
      <Footer />
    </>
  );
}
