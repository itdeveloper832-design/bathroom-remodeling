import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import TrustBadges from "@/components/home/trust-badges";
import { LocalBusinessSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bathroom Remodeling in Chandler AZ | Expert Contractors & Free Quote",
  description: "Top-rated bathroom remodeling in Chandler AZ. Licensed experts delivering custom showers, tubs & full renovations. Get a free estimate today!",
  openGraph: {
    title: "Bathroom Remodeling in Chandler AZ | Expert Contractors & Free Quote",
    description: "Top-rated bathroom remodeling in Chandler AZ. Licensed experts delivering custom showers, tubs & full renovations. Get a free estimate today!",
    type: "website",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

// Lazy load below-the-fold components for better code splitting
const AboutPreview = dynamic(() => import("@/components/home/about-preview"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const Testimonials = dynamic(() => import("@/components/home/testimonials"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const BathroomSection = dynamic(() => import("@/components/home/bathroom-section"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const ProcessSection = dynamic(() => import("@/components/home/process-section"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const Financing = dynamic(() => import("@/components/home/financing"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const FAQ = dynamic(() => import("@/components/home/faq"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const BlogPreview = dynamic(() => import("@/components/home/blog-preview"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const ContactSection = dynamic(() => import("@/components/home/contact-section"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const ComparisonBenefits = dynamic(() => import("@/components/home/comparison-benefits"), { 
  loading: () => <div className="h-80" />,
  ssr: true 
});
const FinalCTA = dynamic(() => import("@/components/home/final-cta"), { 
  loading: () => <div className="h-32" />,
  ssr: true 
});

const homeFaqs = [
  {
    question: "What types of bathroom remodeling in Chandler AZ do you offer?",
    answer:
      "We provide comprehensive bathroom remodeling in Chandler, including custom shower installations, bathtub replacements, vanity upgrades, and full master bath renovations. Our team handles everything from design to final plumbing and tile work.",
  },
  {
    question: "How much does a bathroom remodel cost in Chandler?",
    answer:
      "Bathroom remodeling costs in Chandler typically range from $8,000 for basic refreshes to over $30,000 for luxury master suite transformations. We provide detailed, transparent estimates and flexible financing options to fit your budget.",
  },
  {
    question: "Why choose ARZ Home Remodeling for my project?",
    answer:
      "With over 15 years of experience specializing in bathroom remodeling in Chandler AZ, we prioritize quality craftsmanship and customer satisfaction. We are proud of our 5-star reputation and our commitment to finishing projects on time and within budget.",
  },
  {
    question: "How do I get started with my Chandler bathroom remodel?",
    answer:
      "Getting started is easy! Contact us today to schedule a free in-home consultation. We'll discuss your vision, provide expert design advice, and give you a detailed quote for your project.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Deployment test - Check if this appears on live site */}
      {/* ✅ Deployment workflow test - 2024 */}
      <LocalBusinessSchema />
      <FAQSchema faqs={homeFaqs} />
      <Header />
      <main role="main">
        <Hero />
        <TrustBadges />
        <AboutPreview />
        <ServicesGrid />
        <WhyChooseUs />
        <Testimonials />
        <BathroomSection />
        <GalleryPreview />
        <ProcessSection />
        <ServiceAreas />
        <Financing />
        <ComparisonBenefits />
        <FAQ />
        <BlogPreview />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
