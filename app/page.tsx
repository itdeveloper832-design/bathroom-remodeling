import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import QuickAnswers from "@/components/home/quick-answers";
import { LocalBusinessSchema, FAQSchema, SpeakableSchema, OrganizationSchema, WebSiteSchema } from "@/components/seo/json-ld";
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
import { HomeBelowFold } from "@/components/home/home-below-fold";

const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"), {
  loading: () => (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 h-96 bg-muted/30 rounded-2xl animate-pulse" />
    </div>
  ),
});
export const metadata: Metadata = {
  title: {
    absolute: "Chandler Bathroom Remodeling | 5-Star Rated, Licensed Contractor | Free Estimate"
  },
  description: "Custom walk-in showers & tub-to-shower conversions in Chandler. Fixed pricing from $6,000. ROC licensed since 2010. Serving Ocotillo, Fulton Ranch & East Valley. Call for a free in-home estimate.",
  openGraph: {
    title: "Chandler Bathroom Remodeling | 5-Star Rated, Licensed Contractor | Free Estimate",
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
};

const faqSchemaItems = homeFaqs.map((f) => ({
  question: f.question,
  answer: faqAnswerPlain(f.answer),
}));

export default function HomePage() {
  return (
    <>
      <head>
        <WebSiteSchema />
        <FAQSchema faqs={faqSchemaItems} />
        <SpeakableSchema url={`${siteConfig.url}/`} />
      </head>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <QuickAnswers />
        <div className="content-visibility-auto">
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
