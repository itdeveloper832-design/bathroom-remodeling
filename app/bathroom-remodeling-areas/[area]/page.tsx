import { notFound } from "next/navigation";
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
import { getAreaData, getAllAreaSlugs } from "@/lib/bathroom-remodeling-areas";
import AreaInterlinking from "@/components/area-interlinking";
import LocalTrust from "@/components/home/local-trust";

export async function generateStaticParams() {
  const slugs = getAllAreaSlugs();
  return slugs.map((slug) => ({
    area: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const areaData = getAreaData(areaSlug);

  if (!areaData) return {};

  return {
    title: `${areaData.areaName} Bathroom Remodeling: Licensed Pros & Free Quotes`,
    description: `Top-rated bathroom remodeling in ${areaData.areaName}, Chandler. Licensed experts for custom showers, master bath renovations, and tub conversions. Get a free estimate!`,
    openGraph: {
      title: `${areaData.areaName} Bathroom Remodeling: Licensed Pros & Free Quotes`,
      description: `Transform your ${areaData.areaName} home with expert bathroom remodeling. Licensed contractors, luxury designs, and affordable pricing.`,
      url: `${siteConfig.url}/bathroom-remodeling-areas/${areaSlug}/`,
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.url}/bathroom-remodeling-areas/${areaSlug}/`,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: areaSlug } = await params;
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
          title={`Licensed Bathroom Remodeling in ${areaData.areaName}`}
          subtitle={areaData.heroSubtitle || "Professional Local Renovations"}
          description={areaData.heroDescription}
          backgroundImage="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
        />
        <AreaIntro
          title={areaData.introSection.title}
          description={areaData.introSection.description}
          trustSignals={areaData.localTrustSignals}
        />
        <LocalTrust cityName={areaData.areaName} />
        <AreaBenefits benefits={areaData.areaBenefits} cityName={areaData.areaName} />
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
