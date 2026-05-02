import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import TrustBadges from "@/components/home/trust-badges";
import { LocalBusinessSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
const Testimonials = dynamic(() => import("@/components/home/testimonials"));
const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"));
const ContactSection = dynamic(() => import("@/components/home/contact-section"));

export const metadata: Metadata = {
  title: "Bathroom Remodeling Chandler AZ | Expert Team",
  description:
    "Licensed bathroom remodeling contractors in Chandler, AZ. Shower renovations, tub replacements & full remodels. Free quotes: (229) 306-5591.",
  keywords: [
    "bathroom remodel chandler",
    "bathroom remodel chandler az",
    "bathroom remodeling chandler",
    "bathroom remodeling chandler az",
    "bath remodel chandler",
    "home remodel chandler",
    "remodeling contractors chandler az",
    "bathroom remodeling contractor phoenix",
  ],
  openGraph: {
    title: "Bathroom Remodeling Chandler AZ | Expert Team",
    description:
      "Licensed bathroom remodeling contractors in Chandler, AZ. Shower renovations, tub replacements & full remodels. Free quotes: (229) 306-5591.",
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
};

import AboutPreview from "@/components/home/about-preview";
import ServicesGrid from "@/components/home/services-grid";
import WhyChooseUs from "@/components/home/why-choose-us";
import BathroomSection from "@/components/home/bathroom-section";
import ProcessSection from "@/components/home/process-section";
import ServiceAreas from "@/components/home/service-areas";
import Financing from "@/components/home/financing";
import FAQ from "@/components/home/faq";
import BlogPreview from "@/components/home/blog-preview";
import ComparisonBenefits from "@/components/home/comparison-benefits";
import FinalCTA from "@/components/home/final-cta";


const homeFaqs = [
  {
    question: "What types of bathroom remodeling do you offer in Chandler, AZ?",
    answer:
      "We offer complete bathroom remodeling in Chandler AZ including full bathroom renovations, master bath remodels, vanity installation, tile work, flooring, and lighting upgrades. Our licensed remodeling contractors handle every trade — no subcontractor shuffle.",
  },
  {
    question: "How much does a bathroom remodel cost in Chandler, AZ?",
    answer:
      "Bathroom remodel costs in Chandler typically range from $4,500 for a guest bath update to $45,000+ for a full master bath renovation. Tub-to-shower conversions run $6,000–$13,000. We provide free, itemized written estimates before any work begins.",
  },
  {
    question: "Are you licensed remodeling contractors in Chandler, AZ?",
    answer:
      "Yes. We are a licensed Arizona contractor serving homeowners across Chandler, Gilbert, Mesa, Tempe, and the East Valley. Every project includes a 2-year workmanship warranty and we pull all required city permits.",
  },
  {
    question: "Do you offer shower remodeling in Chandler, AZ?",
    answer:
      "Yes. Our shower remodeling in Chandler includes walk-in shower installation, frameless glass enclosures, custom tile work, curbless shower conversions, and shower replacement. We use Schluter waterproofing to prevent leaks in Arizona's extreme temperature swings.",
  },
  {
    question: "How long does shower remodeling take in Chandler?",
    answer:
      "A shower-only remodel in Chandler typically takes 1–2 weeks. A full shower replacement with custom tile and frameless glass takes 2–3 weeks. We provide a firm written timeline before any work starts.",
  },
  {
    question: "Do you offer bathtub remodeling and replacement in Chandler, AZ?",
    answer:
      "Yes. Our bathtub remodeling services in Chandler include full tub replacement, bathtub-to-shower conversion, soaking tub installation, and jetted tub upgrades. We also specialize in tub-to-shower conversions for unused garden tubs — the most popular service in Chandler homes built 1985–2005.",
  },
  {
    question: "What is the most popular bath remodel project in Chandler homes?",
    answer:
      "The tub-to-shower conversion is by far the most requested service in Chandler. Most homes built in the 1990s and early 2000s have a garden tub that goes unused. We remove it, waterproof the substrate, and install a modern walk-in shower — adding usable space and strong resale ROI.",
  },
  {
    question: "What neighborhoods in Chandler do you serve?",
    answer:
      "We serve all of Chandler, AZ including Dobson Ranch, Sun Lakes, Ocotillo, Fulton Ranch, Chandler Heights, Gila Springs, Fox Crossing, and Cooper Commons, plus Gilbert, Mesa, Tempe, and Ahwatukee.",
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={homeFaqs} />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <TrustBadges />
        <AboutPreview />
        <ServicesGrid />
        <WhyChooseUs />
        <BathroomSection />
        <ProcessSection />
        <ServiceAreas />
        <Financing />
        <ComparisonBenefits />
        <FAQ />
        <BlogPreview />
        <Testimonials />
        <GalleryPreview />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
