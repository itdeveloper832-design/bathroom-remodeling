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
import Link from "next/link";
import {
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {title: {
    absolute: "Bathroom Remodeling Gilbert AZ | Free Estimate"
  },description: "Quality bathroom remodeling in Gilbert, AZ. Walk-in showers, tile work & full bath renovations. Licensed ROC338304 & 2-year warranty. Call (520) 569-3339.",
  openGraph: {title: "Bathroom Remodeling Gilbert AZ | Free Estimate",description: "Quality bathroom remodeling in Gilbert, AZ. Walk-in showers, tile work & full bath renovations. Licensed ROC338304 & 2-year warranty. Call (520) 569-3339.",
    url: `${siteConfig.url}/bathroom-remodeling-gilbert-az/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "Bathroom Remodeling Gilbert AZ | Free Estimate",description: "Quality bathroom remodeling in Gilbert, AZ. Walk-in showers, tile work & full bath renovations. Licensed ROC338304 & 2-year warranty. Call (520) 569-3339.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-gilbert.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-gilbert-az/`,
  },
};

const gilbertFaqs = [
  {
    question: "Do I need a permit for a bathroom remodel in Gilbert, AZ?",
    answer:
      "Yes, the Town of Gilbert requires a building permit for residential bathroom remodels that alter structural walls, relocate drain systems, or run new electrical circuits. Cosmetic work like replacing a mirror or installing a new faucet does not require building permits. ARZ Home Remodeling submits all plans directly to the Gilbert Building Permits department on Civic Center Drive. We guarantee our work passes all town inspections."
  },
  {
    question: "What are the safety requirements for an ADA bathroom remodel in Gilbert?",
    answer:
      "An ADA compliant bathroom remodel focuses on safety and ease of use. The Americans with Disabilities Act standards require grab bars that support up to 250 pounds of force. We install grab bars directly into structural wall studs, not just drywall. Walk in showers must have a slip resistant floor rating. We use mosaic tiles because the extra grout lines provide traction. Toilets must have a seat height of 17 to 19 inches from the floor, which makes sitting and standing much easier."
  }
];

const services = [
  {
    title: "Walk-In Shower Installation",
    href: "/shower-remodeling/",
    description:
      "We convert outdated tub and shower combos into open, curbless walk-in showers with frameless glass enclosures, custom tile work, and rainfall showerheads. We use the Schluter waterproofing system for a leak-proof installation rated for Arizona's temperature swings.",
    price: "From $6,000",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "One of the most requested services in Gilbert. We remove existing tubs, properly waterproof the substrate, and install a custom walk-in shower tailored to your layout. Adds usable space and strong ROI at resale.",
    price: "$6,000 to $13,000",
  },
  {
    title: "Complete Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description:
      "Our master bath remodels typically include: new shower enclosure, vanity replacement, tile flooring, updated lighting, and fixture upgrades. Timeline: three to five weeks. We handle all plumbing and electrical coordination.",
    price: "$18,000 to $45,000+",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "AZ Licensed & Insured",
    body: "Every project fully covered. We carry all required Arizona contractor licensing.",
  },
  {
    icon: Star,
    title: "2-Year Workmanship Warranty",
    body: "We stand behind every tile and seam. If it fails within two years, we fix it at no charge.",
  },
  {
    icon: MapPin,
    title: "Gilbert Local",
    body: "We have remodeled bathrooms in Morrison Ranch, Power Ranch, Val Vista Lakes, and Seville.",
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    body: "You receive a written quote before any work starts. No surprises, no change-order games.",
  },
  {
    icon: Droplets,
    title: "Hard Water Expertise",
    body: "We specify tile and grout systems that resist Gilbert's mineral-heavy water supply.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    body: "Every project gets a firm written schedule. We show up when we say we will.",
  },
];

const pricingTiers = [
  {
    label: "Guest Bathroom Update",
    detail: "Vanity, toilet, fixtures, paint",
    range: "$4,500 to $9,000",
  },
  {
    label: "Guest Bathroom Full Remodel",
    detail: "Tile, shower, vanity, flooring",
    range: "$10,000 to $18,000",
  },
  {
    label: "Tub-to-Shower Conversion",
    detail: "Demo, waterproofing, custom shower build",
    range: "$6,000 to $13,000",
  },
  {
    label: "Master Bathroom Remodel",
    detail: "Full scope: shower, vanity, tile, lighting",
    range: "$18,000 to $45,000+",
  },
];

const process = [
  { step: "01", title: "Free Phone Consultation", body: "We discuss your goals, budget, and timeline. No pressure, just answers." },
  { step: "02", title: "In-Home Evaluation", body: "We measure, assess plumbing, and review your selections on-site in Gilbert." },
  { step: "03", title: "Fixed Written Proposal", body: "You see the complete price before we start. No hidden costs." },
  { step: "04", title: "Design & Material Selection", body: "Tile, fixtures, glass, and finishes chosen together to match your style." },
  { step: "05", title: "Construction", body: "Our in-house team handles demo, waterproofing, tile, plumbing, and finishing." },
  { step: "06", title: "Final Walkthrough", body: "You inspect every detail before we close the job. 100% satisfaction required." },
];

const neighborhoods = [
  "Morrison Ranch", "Power Ranch", "Val Vista Lakes", "Agritopia",
  "Seville", "Lyons Gate", "Adora Trails", "Finley Farms",
  "85233", "85234", "85295", "85296", "85297", "85298",
];

export default function GilbertPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Gilbert Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-gilbert-az/" } ]} />
<ServiceSchema
        serviceName="Bathroom Remodeling in Gilbert, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving Gilbert, AZ. Walk-in shower installation, tub-to-shower conversions, master bath renovations, and complete bathroom remodels. Serving Morrison Ranch, Power Ranch, Val Vista Lakes, and all of Gilbert."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-gilbert-az/`}
      />
      <FAQSchema faqs={gilbertFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Gilbert AZ"
        priceRange="$4,500 - $45,000+"
        url={`${siteConfig.url}/bathroom-remodeling-gilbert-az/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Licensed Bathroom Remodeling in Gilbert, AZ"
          subtitle="Luxury Transformations & Quality Craftsmanship"
          description="Transform your Gilbert home with the East Valley's trusted remodeling experts. From custom walk-in showers in Power Ranch to master suite renovations in Morrison Ranch: we deliver stunning results with a fixed-price guarantee and ROC Licensed peace of mind."
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Gilbert AZ", url: `${siteConfig.url}/bathroom-remodeling-gilbert-az/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Your bathroom should be a sanctuary, but many Gilbert homes built in the 1990s and 2000s are showing their age. Outdated tile, leaky shower pans, and garden tubs that go unused are common challenges we solve every day for local homeowners. If you have been planning a professional update, our local team is here to help.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in high quality bathroom remodeling in Gilbert, AZ: from sleek tub to shower conversions in Power Ranch to full master bath transformations in Morrison Ranch. We are a licensed Arizona contractor, serving homeowners across the <span className="text-primary font-semibold">85234, 85295, 85296, 85297, and 85298</span> ZIP codes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As a full service remodeling contractor, we coordinate everything seamlessly from design to completion. Our custom renovations include modern vanity installations, custom waterproof walk in showers, and layout configurations tailored to your family's needs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Whether you want to update a guest bath or execute a complete master suite renovation, we focus on durability and clean styling. We provide detailed project plans and clear timelines for every renovation we handle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: {siteConfig.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Speak to a Project Supervisor: {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* LOCAL COMMUNITY & PERMIT HIGHLIGHTS */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Gilbert Community Landmarks & Local Bathroom Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Gilbert is an incredibly popular family community characterized by the lush <strong>Riparian Preserve at Water Ranch</strong>, the iconic <strong>Gilbert Water Tower Plaza</strong>, and the bustling <strong>Heritage District</strong>. When we execute bathroom renovations in Gilbert, we design spaces that support dynamic family lifestyles. In communities like <strong>Power Ranch</strong> or <strong>Val Vista Lakes</strong>, we specialize in high durability materials and modern aesthetic choices that add long term property value.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Gilbert Remodeling Example:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project completed on a spacious family home in <strong>Morrison Ranch</strong> involved converting a dated 2000s guest bathroom. We removed the old fiberglass tub alcove and installed a custom walk in tile shower with Schluter Kerdi waterproofing, a frameless heavy glass enclosure, non porous porcelain tile with high performance epoxy grout, and a beautiful double vanity topped with stain resistant quartz.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Gilbert Permitting and Building Safety Guidelines:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For any structural changes, partition wall removals, or major plumbing reroutes in Gilbert, our team coordinates directly with the <strong>Town of Gilbert Planning and Development Department</strong> (located at 90 E Civic Center Dr). We handle all permit submissions and coordinate city inspections, ensuring that your home's structural framing and plumbing are fully compliant with local safety guidelines.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground text-balance">
                Our Gilbert Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-lg mt-4">Professional bathroom remodeling services in Gilbert including shower remodeling, tile installation, and accessible shower remodeling for families throughout the community.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((svc) => (
                <div key={svc.title} className="bg-background rounded-2xl p-8 border border-border flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">{svc.price}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{svc.description}</p>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline mt-auto"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST SIGNALS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Promise</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Why Gilbert Homeowners Choose Us
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustPoints.map((pt) => (
                <div key={pt.title} className="flex gap-4 p-6 bg-secondary rounded-2xl border border-border">
                  <pt.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{pt.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HARD WATER EXPERTISE */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <Droplets className="w-10 h-10 flex-shrink-0 mt-1 opacity-80" />
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                  Solving Gilbert's Hard Water Challenges
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  Gilbert's water supply is notorious for its high mineral content, leading to rapid calcium buildup and 
                  grout discoloration. A standard bathroom remodel is not enough for the East Valley.
                </p>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  We use specialized materials designed to withstand Gilbert's environment:
                </p>
                <ul className="space-y-3 text-primary-foreground/85 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Epoxy Grout:</strong> Waterproof and stain-resistant, preventing mineral absorption.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Nano-Coated Glass:</strong> Repels water and prevents calcium spotting on shower doors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Schluter Waterproofing:</strong> Ensuring a leak-proof foundation for decades.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COST GUIDE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Transparent Pricing</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Gilbert Bathroom Remodel Cost Guide
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {pricingTiers.map((tier) => (
                <div key={tier.label} className="bg-secondary rounded-2xl p-6 border border-border flex justify-between items-center gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{tier.label}</p>
                    <p className="text-muted-foreground text-sm">{tier.detail}</p>
                  </div>
                  <span className="text-primary font-bold text-lg whitespace-nowrap">{tier.range}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">How It Works</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Remodeling Process
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {process.map((step) => (
                <div key={step.step} className="bg-background rounded-2xl p-6 border border-border">
                  <span className="text-4xl font-bold text-primary/20">{step.step}</span>
                  <h3 className="font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Service Area</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-6 text-foreground">
              Serving All of Gilbert, AZ
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span key={n} className="bg-secondary border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                  {n}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/bathroom-remodeling-chandler-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Chandler AZ →</Link>
              <Link href="/bathroom-remodeling-mesa-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Mesa AZ →</Link>
              <Link href="/bathroom-remodeling-tempe-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Tempe AZ →</Link>
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS SECTION */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Engineering & Design Standards</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Technical Remodeling Specifications & Building Codes
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We build bathrooms to last decades, matching rigorous technical standards to combat Gilbert's hard water and desert framing movement.
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
                  The municipal water supply in Gilbert averages <strong>over 300 mg/L (18+ grains per gallon) of dissolved calcium and magnesium</strong>. This hard water destroys standard cement grout and stone. We resolve this by strictly adhering to ANSI material guidelines:
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

        <ServiceFAQ faqs={gilbertFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready for a Free Estimate in Gilbert, AZ?"
          description="Call us directly to speak with a project supervisor. We will discuss your project, provide a phone estimate, and schedule your free in-home evaluation within forty-eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
