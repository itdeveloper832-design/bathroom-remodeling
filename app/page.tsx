import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import TrustBadges from "@/components/home/trust-badges";
import { LocalBusinessSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Best Bathroom Remodeling Contractors Chandler AZ | Free Quote",
  description: "Professional bathroom remodeling contractors Chandler AZ. Affordable bathroom remodel services, licensed & insured. Get your free bathroom remodel estimate today!",
  openGraph: {
    title: "Best Bathroom Remodeling Contractors Chandler AZ",
    description: "Professional bathroom remodeling contractors Chandler AZ. Free bathroom remodel quote!",
    type: "website",
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
const FinalCTA = dynamic(() => import("@/components/home/final-cta"), { 
  loading: () => <div className="h-32" />,
  ssr: true 
});

const homeFaqs = [
  {
    question: "What bathroom remodel services do you offer in Chandler AZ?",
    answer:
      "Our bathroom remodel services in Chandler AZ include: bathroom remodeling contractors, shower remodel, bathtub replacement, bathroom installation services, bathroom repair services, custom bathroom remodel services, master bathroom remodel, and small bathroom remodel. We're your local bathroom remodeling service providers.",
  },
  {
    question: "How much does bathroom remodel cost in Chandler AZ?",
    answer:
      "Bathroom remodel cost in Chandler AZ varies by scope. Affordable bathroom remodeling contractors offer basic updates from $5,000, mid-range bathroom renovation cost $10,000-$20,000, and luxury bathroom remodel cost $25,000+. Get your free bathroom remodel estimate today!",
  },
  {
    question: "How do I hire bathroom remodeling contractors in Chandler AZ?",
    answer:
      "To hire bathroom remodeling contractors in Chandler AZ, contact us for a free bathroom remodel quote. We're licensed bathroom remodeling contractors, bonded and insured, serving Chandler, Sun Lakes, Ahwatukee, Tempe, Mesa, and South Phoenix. Top rated bathroom remodeling company!",
  },
  {
    question: "Are you affordable bathroom remodeling contractors in Chandler AZ?",
    answer:
      "Yes! We're affordable bathroom remodeling contractors in Chandler AZ with flexible financing. Professional bathroom remodeling contractors with 15+ years experience. Get your free bathroom remodeling estimate with same day bathroom remodel quotes available!",
  },
];

export default function HomePage() {
  return (
    <>
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
        <FAQ />
        <BlogPreview />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
