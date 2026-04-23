"use client";

import { useParams, notFound } from "next/navigation";
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
import { getAreaData } from "@/lib/bathroom-remodeling-areas";
import AreaInterlinking from "@/components/area-interlinking";

export default function AreaPage() {
  const params = useParams();
  const areaSlug = params.area as string;

  const areaData = getAreaData(areaSlug);

  if (!areaData) {
    notFound();
  }

  // Convert area FAQs to match the FAQSchema format
  const schemaFaqs = areaData.areaFaqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <ServiceSchema
        serviceName={areaData.fullName}
        serviceDescription={`Professional bathroom remodeling services in ${areaData.areaName}, Chandler. ${areaData.description} Complete bathroom renovations, shower installations, fixture upgrades, and more.`}
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-areas/${areaSlug}`}
      />
      <FAQSchema faqs={schemaFaqs} />
      <Header />
      <main>
        <ServiceHero
          title={areaData.heroTitle}
          description={areaData.heroDescription}
          backgroundImage="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
        />
        <AreaIntro
          title={areaData.introSection.title}
          description={areaData.introSection.description}
          trustSignals={areaData.localTrustSignals}
        />
        <AreaBenefits benefits={areaData.areaBenefits} />
        <ProcessSection />
        <Testimonials />
        <CustomFAQ
          title={`Frequently Asked Questions About Bathroom Remodeling in ${areaData.areaName}`}
          description={`Get answers to questions about our bathroom remodeling services specifically for ${areaData.areaName} homeowners.`}
          faqs={areaData.areaFaqs}
        />
        <AreaInterlinking />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
