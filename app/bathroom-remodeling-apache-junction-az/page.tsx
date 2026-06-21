import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import {  ServiceSchema, FAQSchema, PriceSchema , BreadcrumbSchema } from "@/components/seo/json-ld";
import AreaBenefits from "@/components/area-benefits";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Droplets, Clock } from "lucide-react";

export const metadata: Metadata = {title: "Bathroom Remodeling Apache Junction | Licensed Contractor | ARZ",description: "Top-rated bathroom remodeling in Apache Junction, AZ by ARZ. Specialized in custom walk-in showers, tub conversions, & tile work. Call for a free quote!",
  openGraph: {title: "Bathroom Remodeling Apache Junction AZ | ARZ",description: "Licensed bathroom remodeling in Apache Junction, AZ. Custom showers, tub conversions & tile. Schluter waterproofing system. Free estimate: (520) 569-3339.",
    url: `${siteConfig.url}/bathroom-remodeling-apache-junction-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-apache-junction-az/`,
  },
};

const apacheJunctionFaqs = [
  {
    question: "How much does a bathroom remodel cost in Apache Junction?",
    answer:
      "Bathroom remodeling costs in Apache Junction depend on layout changes, square footage, tile selections, and fixture choices. We provide free on-site inspections and prepare a detailed, line-item written estimate before any work begins, ensuring a fixed-price guarantee. Contact us today to schedule your quote."
  },
  {
    question: "Do you need a permit for bathroom remodeling in Apache Junction?",
    answer:
      "Yes, major structural, electrical, or plumbing alterations require building permits from the City of Apache Junction Building Division. Permits ensure all safety codes are met, especially in older East Valley homes. Simple cosmetic swaps like replacing vanity cabinets or standard floor tile updates do not require permits. We manage the entire permitting process for you."
  },
  {
    question: "What materials work best in Apache Junction's hard water?",
    answer:
      "Apache Junction's municipal water has exceptionally high mineral counts, averaging over three hundred milligrams per liter of dissolved solids. We recommend porcelain tile because it is non porous and resists white scale stains far better than natural stone. We also exclusively use epoxy grout, which resists mineral penetration and discoloration, and premium plywood vanities that stand up to summer humidity."
  }
];

export default function ApacheJunctionPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Apache Junction Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-apache-junction-az/" } ]} />
<ServiceSchema
        serviceName="Bathroom Remodeling in Apache Junction, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving Apache Junction, AZ. Custom walk-in showers, master bath upgrades, and tub-to-shower conversions for local families."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-apache-junction-az/`}
      />
      <FAQSchema faqs={apacheJunctionFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Apache Junction"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-apache-junction-az/`}
      />
      <Header />
      <main>
        <ServiceHero
          title="Apache Junction’s Trusted Bathroom Remodeling Experts"
          subtitle="Quality Craftsmanship Near the Superstition Mountains"
          description="Ready to upgrade your space? We provide professional bathroom remodeling services tailored to Apache Junction homeowners. From curbless walk-in showers to custom vanity installations, we deliver beautiful, desert-ready results on time and on budget."
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Apache Junction", url: `${siteConfig.url}/bathroom-remodeling-apache-junction-az/` },
          ]}
        />

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6">Local Bathroom Renovations in Apache Junction</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nestled near the beautiful Superstition Mountains, Apache Junction is home to unique properties, 
              from classic desert ranches to modern family builds. We help local residents enhance their comfort, 
              safety, and home equity with professional bathroom transformations. Whether you are looking for an 
              extensive master suite overhaul or a focused bathroom remodel in Apache Junction that families trust 
              for quality and speed, we have you covered.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We specialize in <strong>bathroom remodeling in Apache Junction, AZ</strong>, offering modern curbless 
              showers, tub-to-shower conversions, and premium tile services that withstand the harsh desert climate and 
              highly mineralized municipal water. We serve all local zip codes including <strong>85119 and 85120</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Superstition Foothills & Gold Canyon Custom Styling:** For homeowners in Gold Canyon and the Superstition Foothills, we design custom bathrooms that highlight the surrounding natural desert beauty. Our popular 'desert-modern' design packages utilize premium travertine-look porcelain tiles, copper or warm oil-rubbed bronze plumbing hardware, and window layouts configured to maximize views of the Superstition Mountains while maintaining absolute privacy.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Septic & Rural Plumbing Customizations:** Rural properties in Apache Junction often run on private septic systems and well-water supplies. We make sure all fixture installations are fully compatible, incorporating high-efficiency low-flow showerheads and Comfort Height toilets that conserve water without sacrificing pressure. We also integrate custom water-softener loops to defend your brand-new plumbing and tiles from mineral scale.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild size="lg">
                <a href={`tel:${siteConfig.phoneClean}`}>Speak to a Project Supervisor</a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href={`tel:${siteConfig.phoneClean}`}>Call Now: {siteConfig.phone}</a>
              </Button>
            </div>
          </div>
        </section>

        {/* LOCAL COMMUNITY & PERMIT HIGHLIGHTS */}
        <section className="py-16 lg:py-24 bg-secondary border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Apache Junction Community Landmarks & Local Bathroom Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Apache Junction is framed by the jaw-dropping <strong>Superstition Mountains</strong> and the historical <strong>Lost Dutchman State Park</strong>. When we execute bathroom renovations in Apache Junction, we draw inspiration from the raw beauty of the Sonoran Desert. In communities bordering the <strong>Apache Trail</strong> or Gold Canyon, we specify color palettes and stone finishes that echo the natural desert landscape.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Apache Junction Remodeling Example:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project completed near the <strong>Superstition Foothills</strong> community involved remodeling a spacious guest bathroom. We replaced an old builder-grade acrylic tub with a beautiful walk-in tile shower using sand-toned textured porcelain tile, secure wall-anchored grab bars, and dynamic slip-resistant mosaic flooring to ensure comfort, luxury, and safety.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Apache Junction Permitting & Building Safety Guidelines:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When structural changes or plumbing re-routes are executed in Apache Junction, our team coordinates with the <strong>Apache Junction Development Services Department</strong> (located at 300 E Superstition Blvd). We manage all permit filings and structural inspections directly, ensuring your home's septic compatibility and local safety compliance are fully verified.
            </p>
          </div>
        </section>

        <AreaBenefits 
          benefits={[
            "Custom Walk-in Shower Installs",
            "Modern Tub-to-Shower Conversions",
            "Hard Water Defense Grout Systems",
            "Slip-Resistant Flooring (DCOF >= 0.42)",
            "Licensed AZ Contractor Support",
            "Fixed Pricing: No Hidden Fees"
          ]} 
          cityName="Apache Junction" 
        />
        
        {/* TECHNICAL SPECIFICATIONS SECTION */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Engineering & Design Standards</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Technical Remodeling Specifications & Building Codes
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We build bathrooms to last decades, matching rigorous technical standards to combat Apache Junction's hard water and desert framing movement.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  1. Waterproofing & Moisture Control (TCNA Standards)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  We build all custom tiled showers in compliance with the **Tile Council of North America (TCNA) B421 and B422** standards. Instead of traditional cement boards and PVC liners which degrade and leak, we install the **Schluter-KERDI waterproofing system**.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground text-sm">
                  <li><strong>Vapor Permeance:</strong> The KERDI membrane features a water vapor permeance rating of <strong>&lt; 0.5 perms</strong> (tested under ASTM E96 Procedure E), making it completely vapor-tight and preventing steam from rotting your wood framing.</li>
                  <li><strong>Decoupling & Crack Isolation:</strong> The bonded sheet membrane decouples the tile layer from the subfloor, absorbing the natural expansion and contraction of desert framing, preventing grout joints from cracking.</li>
                </ul>
              </div>

              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-primary" />
                  2. Hard Water Mitigation & Tile Standards (ANSI A118)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  The municipal water supply in Apache Junction averages <strong>over 300 mg/L (18+ grains per gallon) of dissolved calcium and magnesium</strong>. This hard water destroys standard cement grout and stone. We resolve this by strictly adhering to ANSI material guidelines:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground text-sm">
                  <li><strong>Epoxy Grout (ANSI A118.3):</strong> We upgrade our grout to 100% solid epoxy resins. Unlike porous cement grouts, epoxy grout is completely non-porous and chemically inert, resisting staining, scale buildup, and acid cleaning.</li>
                  <li><strong>Thin-Set Mortar (ANSI A118.15):</strong> We use improved modified dry-set cement mortar to bond dense, large-format porcelain tiles (water absorption rate <strong>&lt; 0.5%</strong> per ASTM C373), preventing tiles from releasing due to slab movement or moisture cycles.</li>
                </ul>
              </div>

              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  3. Advanced Plumbing & Scald Prevention (ASSE 1016)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Modern mechanical systems are essential to safety and system longevity. We upgrade and secure every in-wall plumbing component:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground text-sm">
                  <li><strong>Anti-Scald Mixing Valves:</strong> We install pressure-balancing and thermostatic mixing valves certified to <strong>ASSE 1016 / ASME A112.18.1</strong> standards. This maintains water temperature within &plusmn;3.6&deg;F (&plusmn;2&deg;C) despite pressure drops elsewhere in the home.</li>
                  <li><strong>PEX-a Piping Systems:</strong> We utilize PEX-a (expansion-fitting) piping for supply lines. PEX-a resists hard water scaling, eliminates the risk of pinhole leaks common in aging copper pipes, and absorbs thermal expansion without stress.</li>
                  <li><strong>Drain Expansion:</strong> In all tub-to-shower conversions, we expand the original 1.5-inch waste line to a code-compliant <strong>2-inch waste and vent line</strong> to handle high-flow modern shower heads without back-ponding.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <ServiceFAQ faqs={apacheJunctionFaqs} />
        <Testimonials />
        <ContactSection />
        
        <ServiceCTA
          title="Ready for a New Bathroom in Apache Junction?"
          description="Contact us today to schedule your free in-home evaluation and see why your neighbors trust us for their renovations."
        />
      </main>
      <Footer />
    </>
  );
}
