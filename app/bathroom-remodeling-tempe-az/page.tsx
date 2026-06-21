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

export const metadata: Metadata = {title: "Bathroom Remodeling Tempe | Licensed Contractor | ARZ",description: "Top-rated bathroom remodeling in Tempe, AZ by ARZ. Specialized in custom walk-in showers, tub conversions, & tile work. Call for a free quote!",
  openGraph: {title: "Bathroom Remodeling Tempe AZ | ARZ Home Remodeling",description: "Trusted bathroom remodeling in Tempe, AZ. Tub-to-shower conversions, walk-in showers & custom tile. Licensed & insured. Free estimate: (520) 569-3339.",
    url: `${siteConfig.url}/bathroom-remodeling-tempe-az/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "Bathroom Remodeling Tempe AZ | ARZ Home Remodeling",description: "Trusted bathroom remodeling in Tempe, AZ. Tub-to-shower conversions, walk-in showers & custom tile. Licensed & insured. Free estimate: (520) 569-3339.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-tempe.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-tempe-az/`,
  },
};

const tempeFaqs = [
  {
    question: "How long does a bathroom remodel take in Tempe, AZ?",
    answer:
      "A standard guest bathroom remodel in Tempe typically takes two to three weeks of active construction. Larger master bathroom renovations in areas like South Tempe or Warner Ranch run four to six weeks depending on scope. We provide a firm timeline in your written proposal."
  },
  {
    question: "Do you need a permit for bathroom remodeling in Tempe?",
    answer:
      "Cosmetic upgrades like new tile or vanities generally do not require permits. Structural changes, moving plumbing lines, or major electrical work require a City of Tempe permit. We handle all permitting and inspections for you."
  },
  {
    question: "How much does a bathroom remodel cost in Tempe, AZ?",
    answer:
      "Bathroom remodeling costs in Tempe vary widely depending on layout changes, square footage, tile selections, and plumbing modifications. We provide free on-site inspections and prepare a detailed, line-item written estimate before any work begins, ensuring a fixed-price guarantee. Contact us today to schedule your quote."
  },
  {
    question: "Can you remodel my shower without replacing the whole bathroom?",
    answer:
      "Yes. We specialize in shower-only replacements and tub-to-shower conversions. This is a popular way for Tempe homeowners to modernize their space without the cost of a full gut remodel."
  },
  {
    question: "Are you licensed to do bathroom remodeling in Tempe?",
    answer:
      "Yes. We are a licensed Arizona contractor, fully insured, operating under license Licensed Contractor - ROC #338304. We provide a two year workmanship warranty on every project. We are experienced with Tempe's specific building codes and requirements."
  },
  {
    question: "Do you serve neighborhoods near ASU and Downtown Tempe?",
    answer:
      "We serve all of Tempe, including Downtown, North Tempe, South Tempe, Warner Ranch, Shalimar, and the areas surrounding ASU, plus neighboring cities like Chandler, Mesa, and Gilbert."
  },
];

const services = [
  {
    title: "Walk-In Shower Installation",
    href: "/shower-remodeling/",
    description:
      "We convert outdated tub and shower combos into open, curbless walk-in showers with frameless glass, custom tile, and rainfall showerheads. We use the Schluter waterproofing system for a leak-proof result.",
    price: "Free Custom Estimate",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "A top request in Tempe. We remove your old tub, waterproof the substrate, and install a custom walk-in shower tailored to your layout. Adds space and ROI to your Tempe home.",
    price: "Free Custom Estimate",
  },
  {
    title: "Complete Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description:
      "Our master bath remodels include: new shower enclosure, vanity replacement, tile flooring, updated lighting, and fixture upgrades. Timeline: three to five weeks. We manage all trades and coordination.",
    price: "Free Custom Estimate",
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
    body: "We stand behind our work. If it fails within two years, we fix it at no cost to you.",
  },
  {
    icon: MapPin,
    title: "Tempe Local",
    body: "We have remodeled bathrooms in Warner Ranch, South Tempe, and near the ASU area.",
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    body: "No hidden fees. You get a written quote before any work starts. No change-order games.",
  },
  {
    icon: Droplets,
    title: "Hard Water Expertise",
    body: "We use tile and grout systems designed to resist Tempe's mineral-heavy water supply.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    body: "We provide a firm schedule and stick to it. We show up when we say we will.",
  },
];

const pricingTiers = [
  {
    label: "Guest Bathroom Update",
    detail: "Vanity, toilet, fixtures, paint",
    range: "Free Custom Estimate",
  },
  {
    label: "Guest Bathroom Full Remodel",
    detail: "Tile, shower, vanity, flooring",
    range: "Free Custom Estimate",
  },
  {
    label: "Tub-to-Shower Conversion",
    detail: "Demo, waterproofing, custom shower build",
    range: "Free Custom Estimate",
  },
  {
    label: "Master Bathroom Remodel",
    detail: "Full scope: shower, vanity, tile, lighting",
    range: "Free Custom Estimate",
  },
];

const process = [
  { step: "01", title: "Free Phone Consultation", body: "We discuss your goals, budget, and timeline to ensure we are the right fit." },
  { step: "02", title: "In-Home Evaluation", body: "We measure, assess plumbing, and review your selections on-site in Tempe." },
  { step: "03", title: "Fixed Written Proposal", body: "You see the complete price before we start. No hidden costs or surprises." },
  { step: "04", title: "Design & Material Selection", body: "Tile, fixtures, and finishes chosen together to match your unique style." },
  { step: "05", title: "Construction", body: "Our in-house team handles demo, waterproofing, tile, plumbing, and finishing." },
  { step: "06", title: "Final Walkthrough", body: "You inspect every detail before we close the job. 100% satisfaction required." },
];

const neighborhoods = [
  "South Tempe", "Warner Ranch", "Shalimar", "Downtown Tempe",
  "North Tempe", "Alta Mira", "Optimist Park", "Tally Ho",
  "85281", "85282", "85283", "85284",
];

export default function TempePage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Tempe Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-tempe-az/" } ]} />
<ServiceSchema
        serviceName="Bathroom Remodeling in Tempe, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving Tempe, AZ. Custom shower installation, tub-to-shower conversions, master bath renovations, and complete bathroom remodels. Serving South Tempe, Warner Ranch, and all university-area neighborhoods."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-tempe-az/`}
      />
      <FAQSchema faqs={tempeFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Tempe AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-tempe-az/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Licensed Bathroom Remodeling in Tempe, AZ"
          subtitle="Modern Transformations & Expert Local Contractors"
          description="Elevate your Tempe home with professional remodeling services tailored to your lifestyle. From custom walk-in showers near ASU to master suite renovations in South Tempe: we deliver high-end results with ROC Licensed expertise and fixed-price guarantees."
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Tempe AZ", url: `${siteConfig.url}/bathroom-remodeling-tempe-az/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tempe homeowners value both style and functionality. Whether you live in a classic home in South Tempe or a modern space near Downtown, your bathroom should be a reflection of your lifestyle. If you have been searching for a professional team to update your space, our experts provide the high-end craftsmanship you need.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in high-quality bathroom remodeling in Tempe, AZ: from custom walk-in showers in Warner Ranch to full master bath transformations near ASU, as well as focused updates for university rentals. We are a licensed Arizona contractor, serving homeowners across the <span className="text-primary font-semibold">85281, 85282, 85283, and 85284</span> ZIP codes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our comprehensive services cover everything from full luxury layouts to custom safety additions, ensuring structural integrity and precise finishes on every single project.
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
              Tempe Community Landmarks & Local Bathroom Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tempe is a vibrant community with beautiful regional features like <strong>Tempe Town Lake</strong>, the historic <strong>Mill Avenue District</strong>, and the bustling <strong>ASU Campus</strong>. When we perform bathroom renovations in Tempe, we draw inspiration from the city's active lifestyle. For instance, in <strong>South Tempe</strong> homes near <strong>Kiwanis Park</strong>, we often design spacious family bathrooms with modern layouts and low-maintenance tiled surfaces.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Tempe Remodeling Example:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project completed near <strong>Warner Ranch</strong> involved converting a dated 1990s guest bathroom. We removed the old fiberglass tub alcove and installed a custom, space-saving curbless walk-in shower with large-format porcelain tile and a sleek matte black frameless glass enclosure, along with a modern floating double-sink vanity.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Tempe Permitting & Building Safety Guidelines:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For any structural changes, wall removals, or major plumbing reconfigurations, our team coordinates directly with the <strong>City of Tempe Community Development Department</strong> (located at 31 E 5th St). We handle all permit submissions and schedule the necessary municipal inspections to ensure that your home's upgrades comply fully with Tempe's strict local safety codes.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground text-balance">
                Our Tempe Bathroom Remodeling Services
              </h2>
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
                Why Tempe Homeowners Choose Us
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
                  Solving Tempe's Hard Water Challenges
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  Tempe's water supply is known for high mineral content, which can ruin a new bathroom if not properly planned 
                  for. We use specialized materials that stand up to the local environment.
                </p>
                <ul className="space-y-3 text-primary-foreground/85 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Epoxy Grout:</strong> Waterproof and resistant to staining from mineral buildup.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Nano-Coated Glass:</strong> Keeps your shower doors clear of calcium and water spots.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Schluter Systems:</strong> Ensuring your shower remains leak-proof for years.</span>
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
                Tempe Bathroom Remodel Cost Guide
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
              Serving All of Tempe, AZ
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
              <Link href="/bathroom-remodeling-mesa-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Mesa AZ →</Link>
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
                We build bathrooms to last decades, matching rigorous technical standards to combat Tempe's hard water and desert framing movement.
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
                  The municipal water supply in Tempe averages <strong>over 300 mg/L (18+ grains per gallon) of dissolved calcium and magnesium</strong>. This hard water destroys standard cement grout and stone. We resolve this by strictly adhering to ANSI material guidelines:
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

        <ServiceFAQ faqs={tempeFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready for a Free Estimate in Tempe, AZ?"
          description="Call us directly to speak with a project supervisor. We will discuss your project, provide a phone estimate, and schedule your free in-home evaluation within forty-eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
