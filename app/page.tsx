import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import QuickAnswers from "@/components/home/quick-answers";
import { LocalBusinessSchema, FAQSchema, SpeakableSchema, OrganizationSchema, WebSiteSchema, VideoSchema, PriceSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { homeFaqs, faqAnswerPlain } from "@/lib/home-faqs";

const LocalTrust = dynamic(() => import("@/components/home/local-trust"), { ssr: true });
const AboutPreview = dynamic(() => import("@/components/home/about-preview"), { ssr: true });
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"), { ssr: true });
const ChandlerProjects = dynamic(() => import("@/components/home/chandler-projects"), { ssr: true });
const DesignBuildShowcase = dynamic(() => import("@/components/home/design-build-showcase"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"), { ssr: true });
const PricingTable = dynamic(() => import("@/components/home/pricing-table"), { ssr: true });
const BathroomSection = dynamic(() => import("@/components/home/bathroom-section"), { ssr: true });
const ProcessSection = dynamic(() => import("@/components/home/process-section"), { ssr: true });
const ChandlerExpertise = dynamic(() => import("@/components/home/chandler-expertise"), { ssr: true });
const PopularProjects = dynamic(() => import("@/components/home/popular-projects"), { ssr: true });
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"), { ssr: true });
const Financing = dynamic(() => import("@/components/home/financing"), { ssr: true });
const ComparisonBenefits = dynamic(() => import("@/components/home/comparison-benefits"), { ssr: true });
const FAQ = dynamic(() => import("@/components/home/faq"), { ssr: true });
const BlogPreview = dynamic(() => import("@/components/home/blog-preview"), { ssr: true });
const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"), { ssr: true });
const FinalCTA = dynamic(() => import("@/components/home/final-cta"), { ssr: true });
const VideoShowcase = dynamic(() => import("@/components/home/video-showcase"), { ssr: true });
const HomeBelowFold = dynamic(() => import("@/components/home/home-below-fold").then((m) => m.HomeBelowFold), { ssr: true });

export const metadata: Metadata = {
  title: {
    absolute: "Custom Bath Remodeling Chandler AZ | ARZ Home Remodeling"
  },
  description: "Transform your bathroom with advanced waterproofing, custom double vanities, and curbless walk-in showers in Chandler. Request a free estimate today!",
  openGraph: {
    title: "Custom Bath Remodeling Chandler AZ | ARZ Home Remodeling",
    description: "Transform your bathroom with advanced waterproofing, custom double vanities, and curbless walk-in showers in Chandler. Request a free estimate today!",
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
        <PriceSchema
          serviceName="Bathroom Remodeling Services"
          priceRange="$12,500 - $38,000"
          url={`${siteConfig.url}/`}
        />
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
