import { Metadata } from 'next'
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import SubServices from "@/components/sub-services";
import IssuesSolved from "@/components/issues-solved";
import Benefits from "@/components/benefits";
import Tips from "@/components/tips";
import ProcessSection from "@/components/home/process-section";
import Testimonials from "@/components/home/testimonials";
import ServiceAreas from "@/components/home/service-areas";
import ServiceCTA from "@/components/service-cta";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { serviceContent } from "@/lib/service-content-data";

export const metadata: Metadata = {
  title: 'Bathroom Remodeling Services Chandler AZ | Best',
  description: 'Best bathroom remodeling services Chandler AZ. Affordable bathroom remodeling cost, professional bathroom contractor. Free bathroom remodeling estimate!',
  keywords: ['bathroom remodeling services Chandler AZ', 'affordable bathroom remodeling services Chandler AZ', 'professional bathroom remodeling services Chandler AZ', 'bathroom remodeling Chandler AZ', 'bathroom remodeling cost Chandler AZ', 'bathroom remodeling price Chandler AZ', 'bathroom remodeling estimate Chandler AZ', 'bathroom remodeling quote Chandler AZ', 'best bathroom remodeling Chandler AZ', 'bathroom remodeling company Chandler AZ', 'bathroom remodeling professional Chandler AZ', 'bathroom remodeling near me Chandler AZ', 'hire bathroom remodeling Chandler AZ', 'bathroom remodeling installation Chandler AZ'],
  openGraph: {
    title: 'Bathroom Remodeling Services Chandler AZ | Best',
    description: 'Best bathroom remodeling services Chandler AZ. Affordable bathroom remodeling, free quotes!',
    url: `${siteConfig.url}/bathroom-remodeling`,
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`,
        width: 1200,
        height: 630,
        alt: 'Bathroom Remodeling Chandler Arizona - ARZ Home Remodeling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bathroom Remodeling Services Chandler AZ',
    description: 'Best bathroom remodeling services Chandler AZ. Affordable, professional!',
    images: [`${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling`,
  },
}

const serviceFaqs = serviceContent["bathroom-remodeling"].faqs;

export default function BathroomRemodelingPage() {
  const bathRemodelData = serviceContent["bathroom-remodeling"];
  
  return (
    <>
      <ServiceSchema
        serviceName="Bathroom Remodeling Services in Chandler, Arizona"
        serviceDescription="Professional bathroom remodeling services including shower remodeling, bathtub installation, vanity installation, tile work, flooring, lighting, and complete bathroom renovations. Serving Chandler, Arizona and surrounding areas."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling`}
      />
      <FAQSchema faqs={serviceFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Best Bathroom Remodeling Services Chandler AZ"
          description="Looking for professional bathroom remodeling services Chandler AZ? Affordable bathroom remodeling services, bathroom remodeling company near me. Get your free bathroom remodeling estimate today!"
        />
        <SubServices />
        <IssuesSolved
          title="Issues We Solve with Bathroom Remodeling"
          subtitle="Common Problems Fixed"
          description="We address the most common bathroom remodeling challenges Chandler homeowners face."
          issues={bathRemodelData.issues}
        />
        <Benefits
          title="Benefits of a Full Bathroom Remodel"
          subtitle="Why Remodel Your Bathroom"
          description="Discover how a complete bathroom remodeling transformation can improve your home's value and your quality of life."
          benefits={bathRemodelData.benefits}
        />
        <Tips
          title="Expert Bathroom Remodeling Tips"
          subtitle="Professional Insights"
          description="Smart strategies to make the most of your bathroom remodeling project."
          tips={bathRemodelData.tips}
        />
        <ProcessSection />
        <Testimonials />
        <ServiceAreas />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
