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
  title: "Master Bathroom Remodel Chandler AZ | Luxury Designs",
  description: "Luxury master bathroom remodel Chandler AZ. Custom designs, premium materials, and expert craftsmanship. Transform your master bath today!",
  keywords: ["master bathroom remodel Chandler", "luxury bathroom design", "custom master bath", "master suite renovation"],
  openGraph: {
    title: "Master Bathroom Remodel Chandler AZ | Luxury Designs",
    description: "Create the ultimate retreat with a custom master bathroom remodel in Chandler, AZ.",
    url: `${siteConfig.url}/master-bathroom-remodel`,
    type: "website",
  },
};

const faqs = [
  {
    question: "What features are popular in luxury master bathrooms?",
    answer: "Popular features include large walk-in showers with multiple heads, freestanding soaking tubs, double vanities with premium countertops, heated floors, and custom smart lighting."
  },
  {
    question: "How long does a master bathroom remodel take?",
    answer: "A comprehensive master bathroom remodel typically takes 4-6 weeks, allowing time for custom cabinetry, detailed tile work, and premium fixture installations."
  }
];

const otherServices = bathroomServices
  .filter(s => s.href !== "/master-bathroom-remodel")
  .slice(0, 3);

export default function MasterBathPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Master Bathroom Remodeling in Chandler" 
        serviceDescription="Transform your master bathroom into a luxury retreat with our expert design and remodeling services." 
        serviceUrl={`${siteConfig.url}/master-bathroom-remodel`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Master Bathroom Remodel Chandler AZ"
          subtitle="Luxury Master Suite Transformations"
          description="Elevate your daily routine with a stunning master bathroom remodel. We specialize in creating high-end, custom retreats tailored to your vision."
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Master Bath", url: `${siteConfig.url}/master-bathroom-remodel` }]}
        />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Create Your Private Oasis</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Your master bathroom should be more than just a functional space—it should be a sanctuary. 
              Our design team works closely with you to incorporate the luxury features and personal touches 
              that make your master suite truly exceptional.
            </p>
          </div>
        </section>

        <SubServices 
          title="Complementary Services"
          subtitle="Complete Transformations"
          description="We handle every aspect of your master bath project, from tile to custom vanities."
          services={otherServices.map(s => s.name)}
        />

        <ServiceCTA title="Ready to design your dream master bath?" description="Schedule a free design consultation today and let us bring your luxury vision to life." />
        <ServiceFAQ faqs={faqs} />
      </main>
      <Footer />
    </>
  );
}
