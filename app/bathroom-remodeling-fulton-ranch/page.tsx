import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ProcessSection from "@/components/home/process-section";
import Testimonials from "@/components/home/testimonials";
import ServiceCTA from "@/components/service-cta";
import AreaIntro from "@/components/area-intro";
import AreaBenefits from "@/components/area-benefits";
import CustomFAQ from "@/components/custom-faq";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { bathroomRemodelingAreas } from "@/lib/bathroom-remodeling-areas";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Fulton Ranch Chandler AZ",
  description: "Expert bathroom remodeling in Fulton Ranch, Chandler. Licensed contractors serving this premier community. Free estimates today.",
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-fulton-ranch`,
  },
};

const areaData = bathroomRemodelingAreas["fulton-ranch"];

const issues = [
  { problem: "Outdated fixtures and old-fashioned design making your bathroom feel dated", solution: "Modern fixture upgrades and contemporary design elements that transform your space into a stylish retreat." },
  { problem: "Cramped layout with poor storage leaving you frustrated every morning", solution: "Smart space planning and custom storage solutions that maximize every inch of your bathroom." },
  { problem: "Water damage, mold, or mildew from poor ventilation or aging materials", solution: "Complete remediation, proper waterproofing, and modern ventilation systems for a healthy bathroom." },
  { problem: "Difficulty accessing the tub or shower safely, especially for seniors", solution: "Accessible designs including walk-in showers, grab bars, and barrier-free entries for safe, independent use." },
  { problem: "Inefficient water fixtures leading to high utility bills", solution: "WaterSense certified fixtures and modern appliances that reduce water usage without sacrificing performance." },
  { problem: "Poor lighting making grooming and makeup application difficult", solution: "Layered lighting design with task, ambient, and accent lighting for a well-lit, functional space." },
];

const tips = [
  "Set a realistic budget that includes a 10-15% contingency for unexpected issues that may arise during renovation.",
  "Prioritize ventilation - a good exhaust fan prevents mold and extends the life of your finishes.",
  "Consider universal design features even if you don't need them now - they add value and future-proof your investment.",
  "Choose durable, water-resistant materials for flooring and surfaces to ensure longevity.",
  "Plan your lighting carefully - task lighting at the vanity is essential for grooming.",
  "Don't skimp on storage - adequate cabinets and shelving keep your bathroom organized and clutter-free.",
  "Select timeless finishes over trendy ones for a look that will remain stylish for years.",
  "Hire licensed contractors who specialize in bathroom remodeling to ensure quality work and proper permits.",
];

export default function FultonRanchBathroomRemodelingPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Bathroom Remodeling", url: `${siteConfig.url}/bathroom-remodeling` },
    { name: "Fulton Ranch", url: `${siteConfig.url}/bathroom-remodeling-fulton-ranch` },
  ];

  const schemaFaqs = areaData.areaFaqs.map((faq) => ({ question: faq.question, answer: faq.answer }));

  return (
    <>
      <ServiceSchema serviceName={areaData.fullName} serviceDescription={`Professional bathroom remodeling services in ${areaData.areaName}, Chandler. ${areaData.description}`} serviceUrl={`${siteConfig.url}/bathroom-remodeling-fulton-ranch`} />
      <FAQSchema faqs={schemaFaqs} />
      <Header />
      <main>
        <ServiceHero title={areaData.heroTitle} description={areaData.heroDescription} backgroundImage="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop" />
        <AreaIntro title={areaData.introSection.title} description={areaData.introSection.description} trustSignals={areaData.localTrustSignals} />
        <AreaBenefits benefits={areaData.areaBenefits} />
        <ProcessSection />
        <Testimonials />
        <CustomFAQ title={`Frequently Asked Questions About Bathroom Remodeling in ${areaData.areaName}`} description={`Get answers to questions about our bathroom remodeling services specifically for ${areaData.areaName} homeowners.`} faqs={areaData.areaFaqs} />
      </main>
      <Footer />
    </>
  );
}
