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

const serviceFaqs = [
  {
    question: "What is the bathroom remodeling cost in Chandler AZ?",
    answer: "Bathroom remodeling cost in Chandler AZ varies: affordable bathroom remodeling services start at $5,000, mid-range bathroom remodeling services cost $10,000-$20,000. Get your free bathroom remodeling estimate with transparent bathroom remodeling price!",
  },
  {
    question: "How do I hire bathroom remodeling services in Chandler AZ?",
    answer: "To hire bathroom remodeling services in Chandler AZ, contact us for a free bathroom remodeling quote. Our professional bathroom remodeling services include consultation, design, and installation. We're the best bathroom remodeling company in Chandler AZ.",
  },
  {
    question: "Do you offer affordable bathroom remodeling services in Chandler AZ?",
    answer: "Yes! We offer affordable bathroom remodeling services in Chandler AZ with flexible financing. Our bathroom remodeling services include budget-friendly options. Get your bathroom remodeling estimate for near me Chandler AZ services!",
  },
  {
    question: "Are you professional bathroom remodeling contractors in Chandler AZ?",
    answer: "Yes! We're professional bathroom remodeling services in Chandler AZ with 15+ years experience. Company bathroom remodeling services are fully licensed and insured. Best bathroom remodeling near me Chandler AZ!",
  },
  {
    question: "What bathroom remodeling services do you offer in Chandler AZ?",
    answer: "Our bathroom remodeling services in Chandler AZ include: bathroom remodeling installation, bathroom renovation services, bathroom upgrade services, bathroom contractor services, and bathroom remodeling company services. Professional bathroom remodeling near me!",
  },
  {
    question: "What is the bathroom remodeling price in Chandler AZ?",
    answer: "Bathroom remodeling price in Chandler AZ varies by scope. Our bathroom remodeling services include cost-effective options. Contact us for bathroom remodeling quote and bathroom remodeling estimate Chandler AZ!",
  },
];

export default function BathroomRemodelingPage() {
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
        <IssuesSolved />
        <Benefits />
        <Tips />
        <ProcessSection />
        <Testimonials />
        <ServiceAreas />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
