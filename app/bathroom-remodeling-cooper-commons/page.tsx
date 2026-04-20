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
  title: "Bathroom Remodeling Cooper Commons Chandler AZ",
  description: "Expert bathroom remodeling in Cooper Commons, Chandler. Licensed contractors serving this prestigious neighborhood. Free estimates today.",
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-cooper-commons`,
  },
};

const areaData = bathroomRemodelingAreas["cooper-commons"];

export default function CooperCommonsBathroomRemodelingPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Bathroom Remodeling", url: `${siteConfig.url}/bathroom-remodeling` },
    { name: "Cooper Commons", url: `${siteConfig.url}/bathroom-remodeling-cooper-commons` },
  ];

  const schemaFaqs = areaData.areaFaqs.map((faq) => ({ question: faq.question, answer: faq.answer }));

  return (
    <>
      <ServiceSchema serviceName={areaData.fullName} serviceDescription={`Professional bathroom remodeling services in ${areaData.areaName}, Chandler. ${areaData.description}`} serviceUrl={`${siteConfig.url}/bathroom-remodeling-cooper-commons`} />
      <FAQSchema faqs={schemaFaqs} />
      <Header />
      <main>
        <ServiceHero title={areaData.heroTitle} description={areaData.heroDescription} backgroundImage="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop" />
        <AreaIntro title={areaData.introSection.title} description={areaData.introSection.description} trustSignals={areaData.localTrustSignals} />
        <AreaBenefits benefits={areaData.areaBenefits} />
        <ProcessSection />
        <Testimonials />
        <CustomFAQ title={`Frequently Asked Questions About Bathroom Remodeling in ${areaData.areaName}`} description={`Get answers to questions about our bathroom remodeling services specifically for ${areaData.areaName} homeowners.`} faqs={areaData.areaFaqs} />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
