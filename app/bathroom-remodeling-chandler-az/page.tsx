import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema } from "@/components/seo/json-ld";
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
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Chandler’s Top-Rated Bathroom Remodeling Contractor | Free Estimates",
  description:
    "Hire the best bathroom remodeling contractor in Chandler, AZ. We specialize in high-quality walk-in showers, tub-to-shower conversions, and master bath renovations. Licensed company, free estimates — call (229) 306-5591 today!",
  keywords: [
    "bathroom remodeling chandler az",
    "bathroom remodel chandler az",
    "bathroom remodeling services chandler",
    "affordable bathroom remodeling chandler az",
    "cheap bathroom remodeling chandler az",
    "bathroom remodel chandler az cost",
    "bathroom remodel chandler az prices",
    "bathroom remodeling contractor chandler",
    "bathroom remodelers chandler az",
    "bathroom contractor chandler az",
    "bath remodel near me",
  ],
  openGraph: {
    title: "Bathroom Remodeling Chandler AZ | ARZ Home Remodeling",
    description:
      "Licensed Chandler bathroom contractors. Walk-in showers, tub conversions, master bath renovations. Free estimates.",
    url: `${siteConfig.url}/bathroom-remodeling-chandler-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Chandler Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Chandler AZ | Free Estimates",
    description: "Licensed Chandler bathroom contractors. Walk-in showers, tub conversions, master bath renovations.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-chandler-az/`,
  },
};

const chandlerFaqs = [
  {
    question: "How long does a bathroom remodel take in Chandler, AZ?",
    answer:
      "A guest bathroom remodel typically takes 2–3 weeks. A full master bathroom renovation runs 4–6 weeks depending on scope. We provide a firm timeline in your written proposal before any work begins.",
  },
  {
    question: "Do you need a permit for bathroom remodeling in Chandler?",
    answer:
      "Cosmetic upgrades (vanity swap, paint, fixtures) generally don't require permits. Structural changes, shower relocations, or electrical upgrades require a Chandler city permit. We handle all permitting as part of your project at no extra management cost.",
  },
  {
    question: "How much does a bathroom remodel cost in Chandler, AZ?",
    answer:
      "A typical bathroom remodel chandler az cost ranges from $10,000–$18,000 for full guest baths. Tub-to-shower conversions are $6,000–$13,000. Master bathrooms range from $18,000–$45,000+. We provide free, itemized estimates with competitive bathroom remodel chandler az prices.",
  },
  {
    question: "Can you remodel my shower without replacing the whole bathroom?",
    answer:
      "Yes. We specialize in partial remodels including shower-only replacements, tub-to-shower conversions, and vanity replacements without requiring a full bathroom gut.",
  },
  {
    question: "Are you licensed to do bathroom remodeling in Arizona?",
    answer:
      "Yes. We are a licensed Arizona contractor, fully insured, with a 2-year workmanship warranty on every project. We handle all required Chandler city permits.",
  },
  {
    question: "Do you serve neighborhoods outside central Chandler?",
    answer:
      "We serve all of Chandler including Dobson Ranch, Sun Lakes, Ocotillo, Fulton Ranch, Chandler Heights, Gila Springs, Fox Crossing, and Cooper Commons — plus surrounding East Valley cities including Gilbert, Tempe, and Mesa.",
  },
];

const services = [
  {
    title: "Walk-In Shower Installation",
    href: "/shower-remodeling/",
    description:
      "We convert outdated tub/shower combos into open, curbless walk-in showers with frameless glass enclosures, custom tile work, and rainfall showerheads. We use the Schluter waterproofing system for a leak-proof installation rated for Arizona's temperature swings.",
    price: "From $6,000",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "One of the most requested services in Chandler — especially in homes with unused garden tubs. We remove the existing tub, properly waterproof the substrate, and install a custom walk-in shower tailored to your layout. Adds usable space and strong ROI at resale.",
    price: "$6,000–$13,000",
  },
  {
    title: "Complete Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description:
      "Our master bath remodels typically include: new shower enclosure, vanity replacement, tile flooring, updated lighting, and fixture upgrades. Timeline: 3–5 weeks. We handle all plumbing and electrical coordination — no managing multiple contractors.",
    price: "$18,000–$45,000+",
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
    body: "We stand behind every tile and seam. If it fails within 2 years, we fix it — no charge.",
  },
  {
    icon: MapPin,
    title: "Chandler Local",
    body: "We've remodeled bathrooms in Sun Lakes, Fulton Ranch, Ocotillo, Dobson Ranch, and Chandler Heights.",
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    body: "You receive a written quote before any work starts. No surprises, no change-order games.",
  },
  {
    icon: Droplets,
    title: "Hard Water Expertise",
    body: "We specify tile and grout systems that resist Chandler's 300+ mg/L mineral-heavy water supply.",
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
    range: "$4,500 – $9,000",
  },
  {
    label: "Guest Bathroom Full Remodel",
    detail: "Tile, shower, vanity, flooring",
    range: "$10,000 – $18,000",
  },
  {
    label: "Tub-to-Shower Conversion",
    detail: "Demo, waterproofing, custom shower build",
    range: "$6,000 – $13,000",
  },
  {
    label: "Master Bathroom Remodel",
    detail: "Full scope — shower, vanity, tile, lighting",
    range: "$18,000 – $45,000+",
  },
];

const process = [
  { step: "01", title: "Free Phone Consultation", body: "We discuss your goals, budget, and timeline. No pressure — just answers." },
  { step: "02", title: "In-Home Evaluation", body: "We measure, assess plumbing, and review your selections on-site in Chandler." },
  { step: "03", title: "Fixed Written Proposal", body: "You see the complete price before we start. No hidden costs." },
  { step: "04", title: "Design & Material Selection", body: "Tile, fixtures, glass, and finishes chosen together to match your style." },
  { step: "05", title: "Construction", body: "Our in-house team handles demo, waterproofing, tile, plumbing, and finishing." },
  { step: "06", title: "Final Walkthrough", body: "You inspect every detail before we close the job. 100% satisfaction required." },
];

const neighborhoods = [
  "Dobson Ranch", "Sun Lakes", "Ocotillo", "Fulton Ranch",
  "Chandler Heights", "Gila Springs", "Fox Crossing", "Cooper Commons",
  "85224", "85225", "85226", "85249",
];

export default function ChandlerBathroomRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Bathroom Remodeling in Chandler, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving Chandler, AZ. Walk-in shower installation, tub-to-shower conversions, master bath renovations, vanity replacement, and complete bathroom remodels. Serving Dobson Ranch, Sun Lakes, Ocotillo, Fulton Ranch, and all of Chandler."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-chandler-az/`}
      />
      <FAQSchema faqs={chandlerFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Chandler AZ"
        priceRange="$4,500 - $45,000+"
        url={`${siteConfig.url}/bathroom-remodeling-chandler-az/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Chandler’s Top-Rated Bathroom Remodeling Contractor"
          subtitle="Hire the Best Local Remodelers — Free Estimates"
          description="From tub-to-shower conversions in Dobson Ranch to full master bath transformations in Ocotillo — ARZ Home Remodeling is the professional choice for Chandler homeowners. Licensed AZ contractor, 2-year warranty, fixed pricing."
          image="/images/optimized/photo-1620626011761-996317b8d101.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Chandler AZ", url: `${siteConfig.url}/bathroom-remodeling-chandler-az/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Your bathroom is used twice a day, every day — but Chandler homes built in the 1980s through early 2000s were
              never designed with modern comfort in mind. Fiberglass tub surrounds yellow. Grout stains from Chandler's
              notoriously hard water. Builder-grade vanities from 1994 aren't doing your home value any favors.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in high-quality <strong>bathroom remodeling in Chandler, AZ</strong> — from professional tub-to-shower
              conversions in Dobson Ranch to full master bath transformations in Ocotillo. As a trusted <strong>bathroom contractor in Chandler AZ</strong>, we serve homeowners across 
              <span className="text-primary font-semibold"> 85224, 85225, 85226, and 85249</span>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Whether you are searching for a <strong>bath remodel near me</strong> or looking for the most reliable <strong>bathroom remodelers in Chandler AZ</strong>, 
              our team delivers results that blend durability with modern aesthetics. We understand that finding <strong>affordable bathroom remodeling in Chandler AZ</strong> 
              is a priority, which is why we offer transparent, itemized quotes for every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact/" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now for Your Free No-Obligation Bathroom Quote!
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+12293065591" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Chandler Bathroom Remodeling Services
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

        <LocalTrust cityName="Chandler" />

        {/* TRUST SIGNALS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Promise</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Why Chandler Homeowners Choose Us
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
                  Understanding Chandler's Bathroom Remodel Challenges
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  Chandler sits in one of Arizona's hardest water zones — the East Valley water supply averages over{" "}
                  <strong>300 mg/L of dissolved minerals</strong>. This creates three specific problems in bathrooms:
                </p>
                <ul className="space-y-3 text-primary-foreground/85 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Calcium buildup on glass enclosures and fixtures within 6–12 months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Grout staining from mineral deposits within 12–18 months of standard grouting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Yellowing and discoloration of low-grade acrylic surrounds</span>
                  </li>
                </ul>
                <p className="text-primary-foreground/85 text-lg leading-relaxed">
                  Our solution: we specify <strong>epoxy grout</strong>, <strong>nano-coated glass enclosures</strong>, and tile
                  materials rated for high-mineral environments. This is something national chains don't customize — and it's why
                  homeowners who've used generic contractors call us to fix failed showers 3 years later.
                </p>
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
                Chandler Bathroom Remodel Cost Guide
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Pricing varies based on tile selection, plumbing relocation, and fixture grade. We offer written fixed-price
                quotes and financing for qualified homeowners.
              </p>
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
            <div className="text-center">
              <Link href="/bathroom-remodeling-cost-chandler-az/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                View our full Chandler cost guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">How It Works</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Remodeling Process — No Surprises
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
              Serving All of Chandler, AZ
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We are a local <strong>bathroom remodeling company in Chandler</strong> dedicated to serving every neighborhood in the city plus the greater East Valley. 
              If you've been looking for a <strong>bathroom remodeler in Chandler AZ</strong> that knows the local building codes and hard water challenges, look no further. 
              Here are some of the areas we cover most:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span key={n} className="bg-secondary border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                  {n}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/bathroom-remodeling-gilbert-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Gilbert AZ →</Link>
              <Link href="/bathroom-remodeling-mesa-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Mesa AZ →</Link>
              <Link href="/bathroom-remodeling-ocotillo/" className="hover:text-primary transition-colors">Ocotillo Bathroom Remodeling →</Link>
              <Link href="/bathroom-remodeling-sun-lakes/" className="hover:text-primary transition-colors">Sun Lakes Bathroom Remodeling →</Link>
            </div>
          </div>
        </section>

        {/* INTERNAL LINK SECTION */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">Explore Our Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/shower-remodeling/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Shower Remodeling in Chandler</p>
                <p className="text-muted-foreground text-sm mt-1">Walk-ins, frameless glass, custom tile</p>
              </Link>
              <Link href="/tub-to-shower-conversion/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Tub-to-Shower Conversion</p>
                <p className="text-muted-foreground text-sm mt-1">Remove the tub, gain a custom shower</p>
              </Link>
              <Link href="/master-bathroom-remodel/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Master Bathroom Remodel</p>
                <p className="text-muted-foreground text-sm mt-1">Full-scope master suite transformations</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <ServiceFAQ faqs={chandlerFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        <ServiceCTA
          title="Ready for a Free Estimate in Chandler, AZ?"
          description="Call us or fill out the form. We'll discuss your project, give you a ballpark on the call, and schedule your free in-home evaluation within 48 hours."
        />
      </main>
      <Footer />
    </>
  );
}
