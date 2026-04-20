import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import ServiceProcess from "@/components/service-process";
import IssuesSolved from "@/components/issues-solved";
import Benefits from "@/components/benefits";
import Tips from "@/components/tips";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { GoogleMap } from "@/components/google-map";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Bathroom Vanity Installation Chandler AZ | Pro",
  description: "Professional bathroom vanity installation in Chandler, AZ. Custom designs, expert installation, and coordinated fixtures. Free quotes!",
  keywords: ["vanity installation chandler", "bathroom vanity replacement", "double sink vanity", "custom vanity installation"],
  openGraph: {
    title: "Bathroom Vanity Installation Chandler AZ",
    description: "Professional vanity installation in Chandler with custom designs and expert installation.",
    url: `${siteConfig.url}/bathroom-vanity-installation`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/vanity-installation-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Vanity Installation - Chandler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Vanity Installation Chandler AZ",
    description: "Professional vanity installation in Chandler with custom designs and expert installation.",
    images: [`${siteConfig.url}/images/vanity-installation-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-vanity-installation`,
  },
};

const faqs = [
  {
    question: "How much does bathroom vanity installation cost in Chandler?",
    answer: "Bathroom vanity installation in Chandler costs $500-$2,000 for labor, plus the vanity cost. Standard installations range from $1,200-$4,000 total, while custom double vanities can exceed $5,000. We provide free estimates including all materials and labor."
  },
  {
    question: "Can you install double sink vanities?",
    answer: "Yes! We install single and double sink vanities in all styles including freestanding, wall-mounted, and traditional cabinets. We handle all plumbing connections, countertop installation, and finishing work."
  },
  {
    question: "Do you remove and dispose of old vanities?",
    answer: "Absolutely! We carefully remove your old vanity, disconnect plumbing, and haul away all debris. We protect your floors and walls during removal and leave your bathroom clean."
  },
  {
    question: "How long does vanity installation take?",
    answer: "Most vanity installations are completed in 1 day. Simple vanity swaps take 4-6 hours, while installations requiring plumbing modifications may take 1-2 days. We work efficiently to minimize disruption."
  }
];

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

export default function BathroomVanityInstallationPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Bathroom Vanity Installation in Chandler, Arizona"
        serviceDescription="Professional bathroom vanity installation in Chandler, Arizona. Custom designs, expert installation, and coordinated fixtures."
        serviceUrl={`${siteConfig.url}/bathroom-vanity-installation`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Vanity Installation in Chandler, Arizona"
          subtitle="Custom Vanity Installation in Chandler AZ"
          description="Transform your bathroom with expert vanity installation services featuring custom designs, premium materials, and professional craftsmanship."
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Vanity Installation", url: `${siteConfig.url}/bathroom-vanity-installation` },
          ]}
        />

        <ServiceProcess
          title="Bathroom Vanity Installation Process"
          subtitle="Our Process"
          description="Professional vanity installation with precise measurements, quality materials, and expert craftsmanship."
          steps={[
            { number: "01", icon: "Ruler", title: "Measure & Plan", description: "Precise measurements and design planning for perfect vanity fit and functionality." },
            { number: "02", icon: "Layout", title: "Select Vanity", description: "Choose from single or double vanities with coordinated countertops and fixtures." },
            { number: "03", icon: "HardHat", title: "Prep & Plumbing", description: "Plumbing adjustments and wall preparation for seamless vanity installation." },
            { number: "04", icon: "Hammer", title: "Install & Level", description: "Professional vanity installation with precise leveling and secure mounting." },
            { number: "05", icon: "Sparkles", title: "Finish & Test", description: "Countertop installation, plumbing connections, and final testing for perfect operation." },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Bathroom Vanity Installation"
          subtitle="Common Problems Fixed"
          description="We address the most common vanity installation challenges Chandler homeowners face."
          issues={[
            { problem: "Limited storage causing cluttered countertops.", solution: "Custom vanity layouts with organized drawers and smart storage solutions." },
            { problem: "Old vanities with damaged finishes or loose hardware.", solution: "New vanities with durable finishes and quality hardware that withstand moisture." },
            { problem: "Misaligned plumbing causing installation issues.", solution: "Professional plumbing adjustments for perfect vanity fit and function." },
            { problem: "Uncomfortable vanity heights for daily use.", solution: "Ergonomic height planning for comfortable grooming and bathroom use." },
            { problem: "Fixtures that don't match bathroom design.", solution: "Coordinated vanity, faucet, and hardware selections for cohesive bathroom style." },
          ]}
        />

        <Benefits
          title="Benefits of Professional Vanity Installation in Chandler"
          subtitle="Why It Matters"
          benefits={[
            { icon: "Layout", title: "Better Organization", description: "Custom storage solutions and organized layouts for improved bathroom functionality." },
            { icon: "Sparkles", title: "Professional Finish", description: "Expert installation with aligned countertops, sealed connections, and polished details." },
            { icon: "ShieldCheck", title: "Durable Installation", description: "Proper mounting, waterproofing, and quality materials for long-lasting performance." },
            { icon: "TrendingUp", title: "Increased Home Value", description: "Quality vanity installation adds significant value to your Chandler home." },
            { icon: "Timer", title: "Efficient Installation", description: "Quick, professional installation that minimizes disruption to your routine." },
          ]}
        />

        <Tips
          title="Bathroom Vanity Installation Tips & Maintenance"
          subtitle="Keep It Looking New"
          description="Expert tips to maintain your newly installed vanity and maximize its lifespan."
          tips={[
            "Choose moisture-resistant materials and finishes for Arizona's humidity variations.",
            "Add drawer organizers to keep grooming items organized and easily accessible.",
            "Install backsplashes to protect walls from water splashes and simplify cleaning.",
            "Select faucets with adequate reach to minimize water splatter on countertops.",
            "Seal around sinks and backsplashes annually to prevent water damage to cabinets.",
          ]}
        />

        <ServiceCTA title="Ready for professional vanity installation in Chandler?" description="Get expert consultation, quality materials, and professional installation for your perfect bathroom vanity." />
        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Service Area for Bathroom Vanity Installation in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We provide professional bathroom vanity installation services throughout Chandler, Arizona and surrounding areas.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby neighborhoods</li>
                <li>• Licensed vanity installation contractors</li>
                <li>• Free estimates and design consultations</li>
              </ul>
            </div>
            <div>
              <GoogleMap lat={chandlerLocation.lat} lng={chandlerLocation.lng} zoom={12} title="Bathroom Vanity Installation in Chandler, AZ" address="Chandler, Arizona" />
            </div>
          </div>
        </section>

        <ServiceCTA title="Need bathroom vanity installation in Chandler, AZ?" description="Contact us today for professional vanity installation with quality materials and expert craftsmanship." />
      </main>
      <Footer />
    </>
  );
}
