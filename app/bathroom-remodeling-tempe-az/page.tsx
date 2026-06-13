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
    absolute: "Tempe Bath Remodel | Chandler AZ Bathroom Remodeling"
  },description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore tempe bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
  openGraph: {title: "Tempe Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore tempe bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-remodeling-tempe-az/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "Tempe Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore tempe bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
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
      "Guest bath remodels in Tempe run ten thousand to eighteen thousand dollars. Tub to shower conversions typically range from six thousand to thirteen thousand dollars. Full master suite renovations range from eighteen thousand to forty five thousand dollars. We offer free, detailed estimates for every project."
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
    price: "From $6,000",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "A top request in Tempe. We remove your old tub, waterproof the substrate, and install a custom walk-in shower tailored to your layout. Adds space and ROI to your Tempe home.",
    price: "$6,000 to $13,000",
  },
  {
    title: "Complete Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description:
      "Our master bath remodels include: new shower enclosure, vanity replacement, tile flooring, updated lighting, and fixture upgrades. Timeline: three to five weeks. We manage all trades and coordination.",
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
        priceRange="$4,500 - $45,000+"
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
              Tempe homeowners value both style and functionality. Whether you live in a classic home in South Tempe or a 
              modern space near Downtown, your bathroom should be a reflection of your lifestyle. If you've been searching for a professional <strong>bathroom remodel tempe</strong>, reliable <strong>bathroom remodeling tempe</strong>, or custom <strong>bathroom renovation tempe</strong>, our team provides the high-end craftsmanship you need.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in 
              <strong className="text-foreground"> bathroom remodeling in Tempe, AZ</strong>: from custom walk-in 
              showers in Warner Ranch to full master bath transformations near ASU, as well as focused **bathroom remodeling north tempe** homeowners trust for university rental updates. We are a licensed Arizona 
              contractor, serving homeowners across 
              <span className="text-primary font-semibold"> 85281, 85282, 85283, and 85284</span>. Whether you seek the best **tempe bathroom remodel**, **bathroom remodeling tempe az**, or **bathroom renovation tempe az** services, we coordinate every design element.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our comprehensive services cover everything from full luxury layouts to custom safety additions, including complete **bathroom renovations tempe az** and modern upgrades. As a licensed team, we are proud to be among the top **bathroom remodel contractors tempe**, ensuring structural integrity and precise finishes on every single project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact/" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now for Your Free No-Obligation Bathroom Quote!
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+14805693339" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </Link>
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

        <ServiceFAQ faqs={tempeFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready for a Free Estimate in Tempe, AZ?"
          description="Call us or fill out the form. We will discuss your project and schedule your free in-home evaluation within forty eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
