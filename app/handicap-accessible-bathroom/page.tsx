import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import SubServices from "@/components/sub-services";
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";
import { CheckCircle2, Clock, DollarSign, ArrowRight } from "lucide-react";

export const metadata: Metadata = {title: "Handicap Accessible Bathrooms Chandler AZ | ADA Pros | ARZ",description: "Expert handicap accessible bathroom remodeling in Chandler, AZ. Zero-threshold roll-in showers, safety grab bars, and custom vanities. Free estimate!",
  openGraph: {title: "Handicap Accessible | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore handicap accessible, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/handicap-accessible-bathroom/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-small-bath.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - ADA Handicap Accessible Bathroom Remodeling in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Handicap Accessible | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore handicap accessible, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-small-bath.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/handicap-accessible-bathroom/`,
  },
};

const faqs = [
  {
    question: "What makes a bathroom ADA compliant?",
    answer:
      "ADA-compliant bathrooms meet accessibility standards for wheelchair access, mobility, and safety. Key features include curbless walk-in showers, grab bars, accessible vanities with knee clearance, wider doorways (minimum 32 inches), non-slip flooring, and proper lighting. We design all bathrooms to exceed minimum requirements for comfort and safety."
  },
  {
    question: "How much does an accessible bathroom remodel cost in Chandler?",
    answer:
      "ADA-compliant bathroom remodels in Chandler range from twelve thousand to twenty eight thousand dollars depending on the scope and existing layout. Curbless showers with linear drains and grab bar installation add premium features. We provide detailed written estimates before beginning work."
  },
  {
    question: "Can we retrofit an existing bathroom for accessibility?",
    answer:
      "Yes. We can retrofit most bathrooms to be ADA-compliant by removing barriers and adding accessible features. This might include replacing a bathtub with a curbless shower, widening doorways, adjusting vanity heights, and installing grab bars. Our design process ensures safety without sacrificing style."
  },
  {
    question: "Do you handle permits for accessible bathroom renovations?",
    answer:
      "Absolutely. Any accessibility modifications involving structural changes, plumbing, or electrical work require City of Chandler permits. We manage the entire permitting and inspection process to ensure full ADA compliance."
  },
  {
    question: "What grab bar styles work best in modern bathrooms?",
    answer:
      "Modern grab bars are no longer medical-looking. We install sleek stainless steel or matte black bars that coordinate with your design while providing safety. We also integrate grab bars into tile niches and coordinate them with towel bars and fixtures for a cohesive look."
  }
];

const included = [
  "Curbless shower with linear drain and sloped pan",
  "Grab bars installed per ADA specifications",
  "Accessible vanity with knee clearance space",
  "Wider doorway and improved maneuvering space",
  "Non-slip porcelain tile flooring",
  "Lowered or adjusted mirrors and shelving",
  "Proper lighting and task lighting",
  "ADA-compliant toilet and fixtures",
  "Permitting and ADA compliance review"
];

const otherServices = getRelatedServices("/ada-bathroom-remodeling/");

export default function AccessibleBathroomPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Handicap Accessible Bathroom Remodels in Chandler, AZ"
          subtitle="Create a safe, beautiful bathroom designed for accessibility and aging-in-place. ADA-compliant renovations with modern design and professional installation."
          ctaText="Get Free ADA Assessment"
          imageSrc="/images/projects/handicap-accessible-shower.avif"
          imageAlt="ADA-compliant curbless bathroom shower with grab bars"
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Why Choose Accessible Bathroom Design?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Whether you are aging in place, recovering from an injury, or planning for accessibility needs, an ADA-compliant bathroom provides safety, independence, and dignity. For technical guidelines, you can read our [ADA bathroom requirements Arizona](/blog/ada-bathroom-requirements-arizona/) guide. If you are searching for expert <strong>accessible shower remodeling chandler</strong>, professional <strong>accessible shower installation chandler</strong>, or a custom <strong>handicap accessible shower chandler</strong>, our team has the specialized expertise required.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We are leading <strong>handicap bathroom remodel contractors</strong> operating across the East Valley. Homeowners look to us for <strong>ada bathroom remodel arizona</strong> projects, as well as <strong>accessible shower remodeling arizona</strong> and <strong>accessible shower remodeling mesa</strong> updates. We also coordinate <strong>accessible shower remodeling gilbert</strong>, <strong>accessible shower installation gilbert</strong>, and <strong>accessible shower remodeling queen creek</strong> projects. Safety and style blend perfectly in our designs.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Safety First</h3>
                      <p className="text-sm text-muted-foreground">Eliminate trip hazards and install grab bars positioned for maximum support and accessibility.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Independence</h3>
                      <p className="text-sm text-muted-foreground">Accessible features like curbless showers and lowered vanities support independence and daily living.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Beautiful Design</h3>
                      <p className="text-sm text-muted-foreground">Modern accessible bathrooms are stylish. No compromise between safety and aesthetics.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6">Accessible Features We Install</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {included.map((feature, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6">ADA Bathroom Standards We Follow</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Curbless Shower Entry</h3>
                    <p className="text-muted-foreground mb-3">Eliminates trip hazards and allows wheelchair access. We install linear drains and sloped pans to ensure proper water drainage.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Grab Bars & Support Rails</h3>
                    <p className="text-muted-foreground mb-3">Installed at proper heights and angles per ADA guidelines. Modern styles integrate seamlessly with your bathroom design.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Accessible Vanities</h3>
                    <p className="text-muted-foreground mb-3">Floating vanities with knee clearance allow wheelchair access. Faucets feature lever handles for easier operation.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Wide Doorways & Maneuvering Space</h3>
                    <p className="text-muted-foreground mb-3">Minimum 32-inch doorway openings and turn-around space for wheelchairs. We assess existing layouts and recommend modifications.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Non-Slip Flooring</h3>
                    <p className="text-muted-foreground mb-3">Textured porcelain tile or specialized flooring reduces fall risk in wet environments.</p>
                  </div>
                </div>
              </div>

              <Link href="/blog/ada-bathroom-requirements-arizona/" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
                Learn More About ADA Requirements <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />

        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Accessible Bathroom Process</h2>
            <p className="text-lg text-muted-foreground mb-12">We ensure every accessible bathroom remodel meets ADA standards and your personal needs.</p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">1</div>
                <h3 className="font-semibold">Accessibility Assessment</h3>
                <p className="text-sm text-muted-foreground">We evaluate your current bathroom and identify accessibility barriers and opportunities.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">2</div>
                <h3 className="font-semibold">ADA-Compliant Design</h3>
                <p className="text-sm text-muted-foreground">We design a bathroom that exceeds ADA requirements while reflecting your style preferences.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">3</div>
                <h3 className="font-semibold">Permitting & Inspection</h3>
                <p className="text-sm text-muted-foreground">We handle all Chandler city permits and manage the inspection process for compliance.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">4</div>
                <h3 className="font-semibold">Expert Installation</h3>
                <p className="text-sm text-muted-foreground">Licensed contractors install grab bars, fixtures, and features to exact ADA specifications.</p>
              </div>
            </div>
          </div>
        </section>

        <SubServices title="Related Bathroom Services" services={otherServices} />

        <Testimonials />

        <ServiceCTA
          title="Ready for an Accessible Bathroom?"
          description="Get a free in-home ADA assessment and written estimate. No obligation. Our team specializes in creating beautiful, safe bathrooms for all abilities."
          buttonText="Schedule Free Assessment"
          buttonHref="#contact"
        />

        <ContactSection />
      </main>
      <Footer />

      <ServiceSchema
        name="Handicap Accessible Bathroom Remodeling"
        description="ADA-compliant bathroom remodels with curbless showers, grab bars, and accessible design in Chandler, AZ"
        areaServed="Chandler"
        url={`${siteConfig.url}/handicap-accessible-bathroom/`}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services/` },
          { name: "Accessible Bathrooms", url: `${siteConfig.url}/handicap-accessible-bathroom/` }
        ]}
      />

      <FAQSchema faqs={faqs} />
    </>
  );
}
