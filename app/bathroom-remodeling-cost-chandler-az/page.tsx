import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import SubServices from "@/components/sub-services";
import { bathroomServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Cost Chandler AZ | Pricing Guide",
  description: "Affordable bathroom remodel financing. Get the custom bathroom you want today with low monthly payments in Chandler, AZ.",
  keywords: ["bathroom remodeling cost Chandler AZ", "bathroom remodel price", "remodeling estimate", "Chandler bathroom cost"],
  openGraph: {
    title: "Bathroom Remodeling Cost Chandler AZ | Pricing Guide",
    description: "Understanding the costs of your bathroom remodel in Chandler, AZ.",
    url: `${siteConfig.url}/bathroom-remodeling-cost-chandler-az`,
    type: "website",
  },
};

const faqs = [
  {
    question: "What is the average cost of a bathroom remodel in Chandler?",
    answer: "The average cost of a bathroom remodel in Chandler typically ranges from $10,000 to $25,000, depending on the size of the space and the quality of materials selected."
  },
  {
    question: "How can I save money on my bathroom remodel?",
    answer: "You can save money by keeping the existing layout to avoid plumbing moves, choosing high-quality but budget-friendly materials, and focusing on high-impact updates like new fixtures and paint."
  }
];

const otherServices = bathroomServices.slice(0, 3);

export default function CostPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Bathroom Remodeling Cost in Chandler" 
        serviceDescription="A comprehensive guide to bathroom remodeling costs in Chandler, AZ." 
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-cost-chandler-az`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Remodeling Cost Chandler AZ"
          subtitle="Pricing Guide & Estimates"
          description="Get a clear understanding of bathroom remodeling costs in Chandler, AZ. We provide transparent pricing and flexible financing options."
          image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Cost Guide", url: `${siteConfig.url}/bathroom-remodeling-cost-chandler-az` }]}
        />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-8 text-center">Understanding Bathroom Remodel Pricing</h2>
            <div className="prose prose-lg text-muted-foreground mx-auto text-center mb-12">
              <p>When planning a bathroom remodel in Chandler, understanding the various cost factors is essential for staying on budget. Here&apos;s a breakdown of what to expect:</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-secondary p-6 rounded-xl border border-border text-center flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Basic Refresh</h3>
                <p className="text-2xl font-bold text-primary mb-4">$5,000 - $10,000</p>
                <p className="text-sm">Includes new fixtures, painting, and minor tile work.</p>
              </div>
              <div className="bg-secondary p-6 rounded-xl border border-border text-center flex flex-col justify-center scale-105 shadow-md z-10">
                <h3 className="text-xl font-semibold text-foreground mb-2">Mid-Range</h3>
                <p className="text-2xl font-bold text-primary mb-4">$10,000 - $25,000</p>
                <p className="text-sm">Includes full vanity replacement, new flooring, and updated lighting.</p>
              </div>
              <div className="bg-secondary p-6 rounded-xl border border-border text-center flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Luxury Remodel</h3>
                <p className="text-2xl font-bold text-primary mb-4">$25,000+</p>
                <p className="text-sm">Custom cabinetry, high-end tile, premium fixtures, and layout changes.</p>
              </div>
            </div>
          </div>
        </section>

        <SubServices 
          title="Services Included in Our Estimates"
          subtitle="What We Offer"
          description="Every estimate includes professional project management and high-quality materials."
          services={otherServices.map(s => s.name)}
        />

        <ServiceCTA title="Need a custom estimate for your project?" description="Contact us today for a free, no-obligation in-home consultation and detailed pricing estimate." />
        <ServiceFAQ faqs={faqs} />
      </main>
      <Footer />
    </>
  );
}
