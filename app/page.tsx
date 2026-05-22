import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import QuickAnswers from "@/components/home/quick-answers";
import { LocalBusinessSchema, FAQSchema, SpeakableSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { homeFaqs, faqAnswerPlain } from "@/lib/home-faqs";

const LocalTrust = dynamic(() => import("@/components/home/local-trust"));
const AboutPreview = dynamic(() => import("@/components/home/about-preview"));
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"));
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"));
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
  title: "Bathroom Remodeling in Chandler AZ - ROC338304 Licensed Contractor | ARZ",
  description: `Licensed bathroom remodeling in Chandler, AZ. Walk-in showers, tub-to-shower conversions, tile & master baths. Free estimate: ${siteConfig.phone}. ROC338304.`,
  openGraph: {
    title: "Bathroom Remodeling in Chandler AZ - Professional Contractor",
    description:
      "Licensed Chandler bathroom contractor for walk-in showers, tub conversions, and custom tile. Free in-home estimates.",
    type: "website",
    url: `${siteConfig.url}/`,
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
      <LocalBusinessSchema />
      <FAQSchema faqs={faqSchemaItems} />
      <SpeakableSchema url={`${siteConfig.url}/`} />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <QuickAnswers />
        <div className="content-visibility-auto">
          <LocalTrust cityName="Chandler" />
          <AboutPreview />
          <ServicesGrid />
          <WhyChooseUs />
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
