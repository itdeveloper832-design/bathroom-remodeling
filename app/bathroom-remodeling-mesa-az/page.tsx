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
    absolute: "Bathroom Remodeling Mesa AZ | Licensed Contractor"
  },description: "Professional bathroom remodeling in Mesa, AZ. Custom showers, vanities & tile. Fixed pricing, 2-year warranty. Call ARZ today: (520) 569-3339. Free estimate.",
  openGraph: {title: "Bathroom Remodeling Mesa AZ | Licensed Contractor",description: "Professional bathroom remodeling in Mesa, AZ. Custom showers, vanities & tile. Fixed pricing, 2-year warranty. Call ARZ today: (520) 569-3339. Free estimate.",
    url: `${siteConfig.url}/bathroom-remodeling-mesa-az/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "Bathroom Remodeling Mesa AZ | Licensed Contractor",description: "Professional bathroom remodeling in Mesa, AZ. Custom showers, vanities & tile. Fixed pricing, 2-year warranty. Call ARZ today: (520) 569-3339. Free estimate.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-mesa.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-mesa-az/`,
  },
};

const mesaFaqs = [
  {
    question: "Do I need HOA approval for a bathroom remodel in Mesa master-planned communities?",
    answer:
      "While interior cosmetic renovations do not require HOA approval, master-planned communities in Mesa (such as Las Sendas, Eastmark, and Red Mountain Ranch) have strict regulations regarding contractor working hours, parking, dumpster placement, and noise. ARZ Home Remodeling coordinates directly with your HOA manager to ensure all guidelines are fully respected."
  },
  {
    question: "What are the top bathroom design trends in Mesa, AZ?",
    answer:
      "Currently, Mesa homeowners prefer 'desert modern' aesthetics, combining earthy-toned textured tiles, matte black or champagne bronze hardware, floating wood-toned vanities, and energy-efficient LED backlit mirrors. Frameless walk-in tile showers remain the #1 request to replace dated garden tubs."
  },
  {
    question: "What is the difference between a standard shower remodel and an ADA-accessible shower?",
    answer:
      "A standard shower remodel features a 3-to-5-inch curb step-over. An ADA-accessible shower is built flat with the bathroom floor (curbless or zero-threshold) to allow easy entry or wheelchair access, measuring at least 36\" x 36\" (or 30\" x 60\" for roll-in), equipped with hand showers, grab bars, and a folding seat."
  },
  {
    question: "How long does a bathroom remodel take in Mesa, AZ?",
    answer:
      "A guest bathroom remodel typically takes two to three weeks of active construction. A full master bathroom renovation runs four to six weeks depending on scope. We provide a firm timeline in your written proposal before any work begins."
  },
  {
    question: "Do you need a permit for bathroom remodeling in Mesa?",
    answer:
      "Cosmetic upgrades generally do not require permits. Structural changes, shower relocations, or major electrical upgrades require a City of Mesa permit. We handle all permitting as part of your project at no extra management cost."
  },
  {
    question: "How much does a bathroom remodel cost in Mesa, AZ?",
    answer:
      "Guest bath full remodels run ten thousand to eighteen thousand dollars. Tub to shower conversions are six thousand to thirteen thousand dollars. Master bathrooms range from eighteen thousand to forty five thousand dollars. We offer free, itemized estimates so you know exactly what you are getting."
  },
  {
    question: "Can you remodel my shower without replacing the whole bathroom?",
    answer:
      "Yes. We specialize in partial remodels including shower-only replacements, tub-to-shower conversions, and vanity replacements without requiring a full bathroom gut."
  }
];

const services = [
  {
    title: "Walk-In Shower Installation",
    href: "/shower-remodeling/",
    description:
      "We convert outdated tub and shower combos into open, curbless walk-in showers with frameless glass enclosures, custom tile work, and rainfall showerheads. We use the Schluter waterproofing system for a leak-proof installation.",
    price: "From $6,000",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "One of the most requested services in Mesa. We remove existing tubs, properly waterproof the substrate, and install a custom walk-in shower tailored to your layout. Adds usable space and strong ROI at resale.",
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
    title: "Mesa Local",
    body: "We have remodeled bathrooms in Dobson Ranch, Las Sendas, Eastmark, and Red Mountain Ranch.",
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    body: "You receive a written quote before any work starts. No surprises, no change-order games.",
  },
  {
    icon: Droplets,
    title: "Hard Water Expertise",
    body: "We specify tile and grout systems that resist Mesa's mineral-heavy water supply.",
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
  { step: "02", title: "In-Home Evaluation", body: "We measure, assess plumbing, and review your selections on-site in Mesa." },
  { step: "03", title: "Fixed Written Proposal", body: "You see the complete price before we start. No hidden costs." },
  { step: "04", title: "Design & Material Selection", body: "Tile, fixtures, glass, and finishes chosen together to match your style." },
  { step: "05", title: "Construction", body: "Our in-house team handles demo, waterproofing, tile, plumbing, and finishing." },
  { step: "06", title: "Final Walkthrough", body: "You inspect every detail before we close the job. 100% satisfaction required." },
];

const neighborhoods = [
  "Dobson Ranch", "Las Sendas", "Eastmark", "Red Mountain Ranch",
  "Mulberry", "Alta Mesa", "Augusta Ranch", "Falcon Field",
  "85201", "85202", "85204", "85208", "85210", "85212",
];

export default function MesaPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Mesa Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-mesa-az/" } ]} />
<ServiceSchema
        serviceName="Bathroom Remodeling in Mesa, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving Mesa, AZ. Custom shower installation, tub-to-shower conversions, master bath renovations, and complete bathroom remodels. Serving Dobson Ranch, Las Sendas, Eastmark, and all of Mesa."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-mesa-az/`}
      />
      <FAQSchema faqs={mesaFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Mesa AZ"
        priceRange="$4,500 - $45,000+"
        url={`${siteConfig.url}/bathroom-remodeling-mesa-az/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Licensed Bathroom Remodeling in Mesa, AZ"
          subtitle="Expert Transformations & Custom Shower Designs"
          description="Build the bathroom you've always wanted with Mesa's trusted remodeling team. From custom walk-in showers in Las Sendas to master suite renovations in Eastmark: we deliver high-end results with ROC Licensed expertise and fixed-price guarantees."
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Mesa AZ", url: `${siteConfig.url}/bathroom-remodeling-mesa-az/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Mesa homeowners deserve bathrooms that combine beauty with durability. Many homes in areas like Dobson Ranch 
              or Eastmark are ready for a modern upgrade, replacing builder-grade materials with high-end, custom finishes. If you've been searching for a professional <strong>bathroom remodel mesa</strong>, reliable <strong>bathroom remodeling mesa</strong>, or premium <strong>bath remodeling mesa</strong>, we are here to help.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in 
              <strong className="text-foreground"> bathroom remodeling in Mesa, AZ</strong>: from custom walk-in 
              showers in Las Sendas to full master bath transformations in Eastmark. We are a licensed Arizona 
              contractor, serving homeowners across 
              <span className="text-primary font-semibold"> 85201, 85204, 85208, and 85212</span>. Whether you need a top-rated **mesa bathroom remodeling company**, a trusted **mesa bathroom remodeling contractor**, or are seeking custom **mesa bathroom renovation** solutions, our team delivers superior results.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Inspections & Building Safety in Mesa:** Any structural layout changes (such as expanding a shower footprint or removing a load-bearing tub partition) require coordination with the **Mesa Building Safety Division**. ARZ Home Remodeling manages the entire architectural review, structural framing planning, and inspection pipeline, giving you complete peace of mind that your home's structural integrity is verified and protected.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Mesa Historic District Specializations:** For homeowners in Mesa's historic neighborhoods (like the Robson Historic District and Temple Historic District), we specialize in restoring bathrooms to fit the home's original character. We pair modern plumbing and waterproofing systems with vintage classic aesthetics, including elegant clawfoot tub restorations, timeless subway tiling, and traditional custom wood vanities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **HOA Coordination in Master-Planned Communities:** If you reside in **Las Sendas**, **Eastmark**, or **Red Mountain Ranch**, we handle direct coordination with your HOA. We ensure full compliance regarding contractor working hours, parking spaces, and dumpster placement, preventing community friction.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our local craftsmanship is trusted by homeowners across Mesa, AZ. We handle every layout upgrade, plumbing line reconfiguration, and custom tile installation with precision, making us the premier choice for your next bathroom remodeling project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Finding a reliable remodeling contractor has never been easier. We pride ourselves on clear pricing, absolute transparency, and outstanding customer service. Contact us today to discuss your vision and start planning your custom bathroom renovation.
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
              Mesa Community Landmarks & Local Bathroom Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Mesa is a vast and historic city featuring spectacular desert landmarks like the <strong>Las Sendas Golf Club</strong>, the scenic <strong>Red Mountain Park</strong>, and the bustling <strong>Mesa Arts Center</strong>. When we execute bathroom upgrades in Mesa, we tailor our designs to the local neighborhood contexts. For properties in the master-planned <strong>Eastmark</strong> development or established estates near the foothills, we construct layouts that optimize comfort and modern elegance.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Mesa Remodeling Example:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project completed on a custom desert-modern property near the <strong>Red Mountain Ranch</strong> area involved a complete master bathroom overhaul. We replaced a massive builder-grade garden tub with a gorgeous, curb-free tiled walk-in shower with linear drains, integrated heated floor systems, solid-wood double-sink vanities, and a luxury freestanding soaking tub.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Mesa Permitting & Inspections Guidelines:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              If your Mesa bathroom renovation involves moving load-bearing partition walls, expanding your plumbing footprint, or upgrading electrical sub-panels, we coordinate the complete permitting process with the <strong>City of Mesa Building Safety Division</strong> (located at 55 N Center St). We manage all drafting submissions and city inspections, ensuring complete code compliance and long-term peace of mind.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Mesa Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-lg mt-4">Expert bathroom remodeling contractor services in Mesa including tile shower installations, accessible shower remodeling, and complete bathroom renovations for families throughout the city.</p>
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
                Why Mesa Homeowners Choose Us
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
                  Solving Mesa's Hard Water Challenges
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  Like much of the East Valley, Mesa's water is incredibly hard, leading to scale buildup and grout damage. 
                  We specify materials that thrive in this environment.
                </p>
                <ul className="space-y-3 text-primary-foreground/85 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Epoxy Grout:</strong> Non-porous and resistant to mineral staining.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Nano-Coated Glass:</strong> Ensuring your shower doors stay clear of calcium spots.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Custom Tile:</strong> Carefully selected for low maintenance and longevity.</span>
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
                Mesa Bathroom Remodel Cost Guide
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
              Serving All of Mesa, AZ
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
              <Link href="/bathroom-remodeling-gilbert-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Gilbert AZ →</Link>
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
                We build bathrooms to last decades, matching rigorous technical standards to combat Mesa's hard water and desert framing movement.
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
                  The municipal water supply in Mesa averages <strong>over 300 mg/L (18+ grains per gallon) of dissolved calcium and magnesium</strong>. This hard water destroys standard cement grout and stone. We resolve this by strictly adhering to ANSI material guidelines:
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

        <ServiceFAQ faqs={mesaFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready for a Free Estimate in Mesa, AZ?"
          description="Call us directly to speak with a project supervisor. We will discuss your project, provide a phone estimate, and schedule your free in-home evaluation within forty-eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
