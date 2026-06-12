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
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import {  ServiceSchema, FAQSchema , BreadcrumbSchema, PriceSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { serviceContent } from "@/lib/service-content-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Bathroom Remodeling Chandler AZ | Free Design Quote"
  },
  description: "Transform your Chandler home with custom master bathroom remodeling, luxury walk-in showers, double vanities, and premium waterproofing. Free estimates.",
  openGraph: {
    title: "Bathroom Remodeling Chandler | Licensed Pros",
    description: `Custom master bath design, luxury curbless showers, double vanities, and Schluter waterproofing in Chandler, AZ. ROC338304. Call: ${siteConfig.phone}.`,
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
    description: 'Specialized bathroom renovations in Chandler, AZ. From luxury walk-in showers to custom double vanities. Fixed-price contracts. ROC338304.',
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
      <PriceSchema
        serviceName="Bathroom Remodeling"
        priceRange="$12,500 - $38,000"
        url={`${siteConfig.url}/bathroom-remodeling/`}
      />
      <FAQSchema faqs={serviceFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Custom Bathroom Remodeling Built to Last"
          subtitle="Lifetime Waterproofing & Fixed-Price Contracts"
          description="Transform your bathroom with advanced Schluter-KERDI waterproofing systems, stain-resistant epoxy grouting, and custom engineering designed to withstand Arizona's hard water. Enjoy a seamless, stress-free remodel with our dedicated design-build team and a guaranteed fixed-price contract."
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

        {/* CHANDLER SPECIFIC REMODELING SPECIALTIES */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
                Remodeling Specialties
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
                Tailored Bath Renovation Solutions in Chandler
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We design and build custom bathrooms matching Chandler homeowners' specific needs, focusing on high-durability materials and space-efficient layouts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary/40 border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Master Bathroom Remodeling & Luxury Renovations</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Transform your master suite into a private spa retreat. We specialize in layout expansions, converting standard alcove spaces into large curbless walk-in showers with dual heads, freestanding soaking tubs, and custom-lit recess niches.
                </p>
                <ul className="text-xs text-muted-foreground space-y-2 border-t border-border/50 pt-4">
                  <li>• Custom walk-in tiled showers with integrated bench seating</li>
                  <li>• Freestanding acrylic and cast-iron soaking tubs</li>
                  <li>• Premium wall-recessed storage and custom display shelves</li>
                </ul>
              </div>

              <div className="bg-secondary/40 border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Double Vanity Installation & Custom Storage</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Eliminate morning bottlenecks by upgrading to a double vanity. We reroute plumbing, relocate electrical outlets for integrated styling, and install custom quartz countertops with undermount sinks and soft-close cabinetry.
                </p>
                <ul className="text-xs text-muted-foreground space-y-2 border-t border-border/50 pt-4">
                  <li>• Seamless plumbing rerouting for dual sink configurations</li>
                  <li>• Durable quartz, granite, and engineered stone vanity tops</li>
                  <li>• Built-in electrical power drawers and smart organizer trays</li>
                </ul>
              </div>

              <div className="bg-secondary/40 border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Walk-In Shower Remodeling & Tub Conversions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Replace outdated tub-shower combos with high-end walk-in showers. Every shower we build utilizes vapor-tight Schluter-KERDI waterproofing systems, linear drains, and custom-cut frameless glass enclosures.
                </p>
                <ul className="text-xs text-muted-foreground space-y-2 border-t border-border/50 pt-4">
                  <li>• Zero-threshold curbless entry designs for seamless transitions</li>
                  <li>• Linear shower drains and custom sloped mud pans</li>
                  <li>• Hydrophobic nano-coated frameless glass panels</li>
                </ul>
              </div>

              <div className="bg-secondary/40 border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Small & Guest Bathroom Remodeling</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Maximize every square inch of secondary bathrooms and powder rooms. We install floating vanities, wall-hung toilets, and large-format tiles to visually expand compact footprints while creating smart storage.
                </p>
                <ul className="text-xs text-muted-foreground space-y-2 border-t border-border/50 pt-4">
                  <li>• Floating vanities and wall-hung fixtures to free up floor space</li>
                  <li>• Large-format porcelain tiles to minimize grout lines</li>
                  <li>• Custom built-in linen cabinets and corner shelving units</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
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

        {/* CHANDLER REMODELING COST SECTION */}
        <section className="py-20 lg:py-32 bg-muted/40 border-t border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
                Remodeling Budget & Pricing
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
                Bathroom Remodeling Costs in Chandler, AZ
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Understanding typical budget brackets and planning for the key physical factors that influence your final investment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* ENTRY TIER */}
              <div className="bg-background rounded-2xl border border-border p-8 relative flex flex-col">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Entry-Level Updates</h3>
                <p className="text-xs text-primary font-medium tracking-wide uppercase mb-6">Secondary & Powder Baths</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  Ideal for half-baths or minor cosmetic updates where all structural assets remain in place. Typically includes replacing floor surfaces, mounting a new pre-fabricated stock vanity with standard undermount bowls, and installing water-efficient toilets.
                </p>
                <div className="border-t border-border pt-6 mt-auto">
                  <p className="text-xs text-muted-foreground mb-1">Typical Investment Range</p>
                  <p className="text-2xl font-semibold text-foreground font-serif">$4,500 – $9,000</p>
                </div>
              </div>

              {/* MID TIER */}
              <div className="bg-background rounded-2xl border-2 border-primary/20 p-8 relative flex flex-col shadow-sm">
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-primary-foreground text-[10px] font-semibold tracking-wider uppercase py-1 px-3 rounded-full">
                  Most Popular
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Mid-Range Renovations</h3>
                <p className="text-xs text-primary font-medium tracking-wide uppercase mb-6">Full Guest & Family Baths</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  A complete space overhaul including full drywall demolition. Includes upgrading standard tub enclosures to porcelain tile surrounds, installing custom-sized double vanities with quartz tops, replacing flooring, and relocating light fixtures.
                </p>
                <div className="border-t border-border pt-6 mt-auto">
                  <p className="text-xs text-muted-foreground mb-1">Typical Investment Range</p>
                  <p className="text-2xl font-semibold text-foreground font-serif">$10,000 – $18,000</p>
                </div>
              </div>

              {/* LUXURY TIER */}
              <div className="bg-background rounded-2xl border border-border p-8 relative flex flex-col">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Luxury Master Suites</h3>
                <p className="text-xs text-primary font-medium tracking-wide uppercase mb-6">Full Layout Conversions</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  Full custom master bedroom suite integration. Includes layout expansion, replacing old tubs with zero-threshold curbless tile showers, custom-fit frameless glass enclosures, premium freestanding soaking tubs, custom double vanities, and built-in niches.
                </p>
                <div className="border-t border-border pt-6 mt-auto">
                  <p className="text-xs text-muted-foreground mb-1">Typical Investment Range</p>
                  <p className="text-2xl font-semibold text-foreground font-serif">$18,000 – $45,000+</p>
                </div>
              </div>
            </div>

            {/* COST FACTORS */}
            <div className="bg-secondary/35 rounded-3xl p-8 lg:p-12 border border-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center lg:text-left">
                Primary Factors Influencing Your Total Remodeling Cost
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground text-base mb-2">Bathroom Size & Scope</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Expanding your master layout or tearing down walls for a larger footprint requires added framing, drywall repairs, and local permit coordination, boosting structural costs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base mb-2">Tile Selection & Layout</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Stock ceramic options keep costs low, whereas large-format porcelain, natural stone, or intricate mosaic patterns require highly skilled layout labor and specialized thin-sets.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base mb-2">Plumbing Relocation</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Keeping sinks and toilets in their original physical footprint is cost-effective. Moving drain stacks or water lines underneath your subfloor can add significantly to the budget.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base mb-2">Custom Double Vanities</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Upgrading to dual sink layouts with solid wood frames, soft-close hardware, custom quartz countertops, and built-in power outlets increases utility and adds long-term home value.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base mb-2">Frameless Glass Showers</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Custom-cut frameless heavy glass panels with hydrophobic nano-coating offer a high-end visual aesthetic and are required for curbless zero-threshold walk-ins.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base mb-2">Premium Solid Metal Fixtures</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Solid brass mixing valves and pressure-balanced shower fixtures resist mineral buildup from Chandler's hard water, providing better long-term reliability than plastic alternatives.
                  </p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-border/50 text-center">
                <p className="text-muted-foreground text-sm">
                  Want a detailed itemized breakdown of bathroom costs in your neighborhood? View our complete{" "}
                  <Link href="/bathroom-remodel-cost-chandler/" className="text-primary hover:underline font-medium">
                    Chandler Bathroom Remodeling Cost Guide
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials category="bathroom-remodeling" />

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

