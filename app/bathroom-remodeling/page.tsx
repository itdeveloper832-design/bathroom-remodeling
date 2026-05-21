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
import ServiceFAQ from "@/components/service-faq";
import {  ServiceSchema, FAQSchema , BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { serviceContent } from "@/lib/service-content-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Chandler: Licensed Pros & Free Estimates",
  description: "Bathroom remodeling in Chandler, AZ by licensed contractors. Custom showers, master baths, tub-to-shower conversions, and tile. ROC338304. Free estimate.",
  openGraph: {
    title: "Bathroom Remodeling Chandler: Licensed Pros & Free Estimates",
    description: `Expert bathroom remodeling in Chandler, AZ. Licensed ROC338304. Free estimates: ${siteConfig.phone}.`,
    url: `${siteConfig.url}/bathroom-remodeling`,
    type: "website",
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
    description: 'Expert bathroom renovations in Chandler AZ. Licensed, fixed pricing, free estimates.',
    images: [`${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling/`,
  },
}

const serviceFaqs = serviceContent["bathroom-remodeling"].faqs;

export default function BathroomRemodelingPage() {
  const bathRemodelData = serviceContent["bathroom-remodeling"];
  
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling", url: "https://arzhomeremodeling.com/bathroom-remodeling/" } ]} />
<ServiceSchema
        serviceName="Bathroom Remodeling Services in Chandler, Arizona"
        serviceDescription="Comprehensive renovation services including custom showers, bathtub installation, vanity upgrades, tile work, flooring, and complete bathroom makeovers. Serving Chandler, Arizona and surrounding areas."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling/`}
      />
      <FAQSchema faqs={serviceFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Remodeling Services in Chandler AZ"
          subtitle="Licensed AZ Contractor - Free Estimates"
          description="Looking to upgrade your space? We provide comprehensive bathroom remodeling services tailored to your style and budget. Connect with our local Chandler contractors for a free design consultation and estimate today!"
        />

        {/* CHANDLER-SPECIFIC CTA BANNER */}
        <section className="py-10 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div>
                <p className="text-primary-foreground font-semibold text-lg">
                  Looking for our Chandler, AZ dedicated page?
                </p>
                <p className="text-primary-foreground/75 text-sm mt-1">
                  Full local content, pricing guide, neighborhood coverage, and Chandler-specific FAQs.
                </p>
              </div>
              <Link
                href="/bathroom-remodeling-chandler-az/"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold rounded-xl px-6 py-3 hover:bg-primary-foreground/90 transition-colors whitespace-nowrap"
              >
                Bathroom Remodeling Chandler AZ <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <SubServices />
        <IssuesSolved
          title="Common Bathroom Issues We Solve"
          subtitle="Solutions for Your Space"
          description="From outdated layouts to water damage, we address the most frequent challenges Chandler homeowners face with their washrooms."
          issues={bathRemodelData.issues}
        />
        <Benefits
          title="Benefits of a Full Renovation"
          subtitle="Why Upgrade Your Space"
          description="Discover how a complete bathroom transformation can dramatically improve your home's value and your daily routine."
          benefits={bathRemodelData.benefits}
        />
        <Tips
          title="Expert Renovation Tips"
          subtitle="Professional Insights"
          description="Smart strategies to make the most of your upcoming home improvement project."
          tips={bathRemodelData.tips}
        />
        <ProcessSection />
        <Testimonials category="bathroom-remodeling" />
        <ServiceAreas />

        {/* INTERNAL LINKING SECTION */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold text-center mb-6 text-foreground">Explore Specific Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/bathroom-remodeling-chandler-az/" className="bg-background border border-border rounded-xl p-4 hover:border-primary transition-colors group">
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">Chandler Landing Page</p>
                <p className="text-muted-foreground text-xs mt-1">Full local SEO page</p>
              </Link>
              <Link href="/shower-remodeling/" className="bg-background border border-border rounded-xl p-4 hover:border-primary transition-colors group">
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">Shower Remodeling in Chandler</p>
                <p className="text-muted-foreground text-xs mt-1">Walk-ins, frameless glass</p>
              </Link>
              <Link href="/tub-to-shower-conversion/" className="bg-background border border-border rounded-xl p-4 hover:border-primary transition-colors group">
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">Tub-to-Shower Conversion</p>
                <p className="text-muted-foreground text-xs mt-1">From $6,000</p>
              </Link>
              <Link href="/master-bathroom-remodel/" className="bg-background border border-border rounded-xl p-4 hover:border-primary transition-colors group">
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">Master Bathroom Remodel</p>
                <p className="text-muted-foreground text-xs mt-1">Full-scope renovations</p>
              </Link>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={serviceFaqs} />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}

