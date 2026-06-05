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
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: {
    absolute: "Bathroom Remodeling Chandler AZ | Trusted Contractors"
  },
  description: "Chandler homeowners trust us for stunning bathroom renovations. Get custom designs, quality work & a free estimate today.",
  openGraph: {
    title: "Bathroom Remodeling Chandler AZ | Licensed Contractor",
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
    title: "Bathroom Remodeling Chandler AZ | Licensed Contractor",
    description: "Licensed Chandler bathroom contractors. Walk-in showers, tub conversions, master bath renovations.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-chandler-az/`,
  },
};

const chandlerFaqs = [
  {
    question: "Do I need a permit to remodel my bathroom in Chandler, AZ?",
    answer:
      "Yes. The City of Chandler requires a building permit for any structural changes, new electrical wiring, or major plumbing relocations (like moving a toilet or shower drain). Cosmetic changes, like replacing a vanity or tiling in the existing layout, typically do not require permits. ARZ Home Remodeling manages the entire permitting process with the Chandler Development Services Department to ensure your project is 100% compliant."
  },
  {
    question: "How does Chandler's hard water affect bathroom tile and glass choices?",
    answer:
      "Chandler has exceptionally hard water, which leads to calcium and scale buildup on porous materials. We highly recommend installing non-porous large-format porcelain tile with epoxy grout and low-iron frameless glass treated with a protective hydrophobic coating (like EnduroShield). This prevents scale staining and makes cleaning simple."
  },
  {
    question: "How long does a typical bathroom remodel take in Chandler?",
    answer:
      "A standard tub-to-shower conversion or guest bathroom remodel takes 5 to 9 business days of active construction. A complete master bathroom overhaul involving plumbing relocations, custom tiling, and double-vanity installations typically takes 2 to 3 weeks from demolition to final walkthrough."
  },
  {
    question: "Do you offer senior-safe bathroom modifications in Sun Lakes?",
    answer:
      "Yes, we are highly experienced in senior-safe bathroom remodeling in Sun Lakes and south Chandler. We specialize in curbless (barrier-free) walk-in showers, ADA-compliant comfort-height toilets, heavy-duty secure grab bars, and slip-resistant floor tiling to ensure independence and peace of mind."
  },
  {
    question: "How much does a bathroom remodel chandler az cost and what are the average prices?",
    answer:
      "A typical guest bathroom remodel ranges from $4,500 to $9,000 for standard updates, and $10,000 to $18,000 for a full remodel. A custom bathroom Chandler project or master bathroom remodel Chandler can range from $18,000 to $45,000+ depending on the premium materials selected. We provide detailed bathroom remodel chandler az prices in our free itemized bids."
  },
  {
    question: "What are the top premium quartz countertop showrooms near Chandler Fashion Center in Chandler, AZ, and which offer professional installation?",
    answer:
      "For premium quartz countertops near the Chandler Fashion Center area, top local showrooms include Arizona Tile, MSI Chandler, and Bedrosians, all located a short drive away. While these showrooms display raw slabs, they typically do not handle the installation directly. As a full-service bathroom remodeler in Chandler, ARZ Home Remodeling handles the entire process: we help you select your slabs, purchase from local wholesalers, and provide professional fabrication and custom countertop installation."
  },
  {
    question: "Can you remodel my shower without replacing the whole bathroom?",
    answer:
      "Yes. We specialize in partial renovations including shower replacements, tub to shower conversions, and vanity installations without requiring a full bathroom gut."
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
      "One of the most requested services in Chandler, especially in homes with unused garden tubs. We remove the existing tub, properly waterproof the substrate, and install a custom walk-in shower tailored to your layout. Adds usable space and strong ROI at resale.",
    price: "$6,000 to $13,000",
  },
  {
    title: "Complete Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description:
      "Our master bath remodels typically include: new shower enclosure, vanity replacement, tile flooring, updated lighting, and fixture upgrades. Timeline: three to five weeks. We handle all plumbing and electrical coordination without managing multiple contractors.",
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
    title: "Chandler Local",
    body: "We have remodeled bathrooms in Sun Lakes, Fulton Ranch, Ocotillo, and Chandler Heights.",
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    body: "You receive a written quote before any work starts. No surprises, no change-order games.",
  },
  {
    icon: Droplets,
    title: "Hard Water Expertise",
    body: "We specify tile and grout systems that resist Chandler's 18+ grain mineral-heavy water supply.",
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
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Chandler Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-chandler-az/" } ]} />
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
          subtitle="Hire the Best Local Remodelers - Free Estimates"
          description="From tub-to-shower conversions in Dobson Ranch to full master bath transformations in Ocotillo: ARZ Home Remodeling is the professional choice for Chandler homeowners. Licensed AZ contractor, 2-year warranty, fixed pricing."
          image="/images/hero/luxury-shower-remodel-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Chandler AZ", url: `${siteConfig.url}/bathroom-remodeling-chandler-az/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Your bathroom is used twice a day, every day: but Chandler homes built in the 1980s through early 2000s were
              never designed with modern comfort in mind. Fiberglass tub surrounds yellow. Grout stains from Chandler's
              notoriously hard water. Builder-grade vanities from the 1990s are not helping your home value. If you've been considering a 
              <strong> bathroom remodel chandler</strong> or <strong>bathroom remodeling chandler</strong>, now is the perfect time to upgrade.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we provide smart solutions for homeowners, specializing in full renovations, a complete <strong>chandler bathroom remodel</strong>, and targeted upgrades. Whether you are looking for a <strong>luxury remodel chandler</strong>, an affordable <strong>home remodel chandler</strong>, or a functional <Link href='/tub-to-shower-conversion/' className='text-primary hover:underline font-medium'>tub-to-shower conversion</Link>, our team handles everything from design to final inspection. As a local business specializing in **chandler home remodeling**, <strong>chandler bathroom remodeling</strong>, and <strong>home remodeling chandler</strong>, we proudly serve communities across 
              <span className="text-primary font-semibold"> 85224, 85225, 85226, and 85249</span>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Navigating Chandler Building Codes & Permitting:** We coordinate all structural, plumbing, and electrical permit documentation directly with the **Chandler Development Services Department** (located in Downtown Chandler). If your remodel involves moving a toilet drain, running new circuits, or removing partition walls, we make sure everything is 100% compliant with City of Chandler building safety standards.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Combating Chandler's Hard Water:** The municipal water supply in the East Valley contains extremely high mineral levels. To prevent hard water buildup and mold, we install **Schluter-Kerdi waterproofing systems**, large-format non-porous porcelain tiles, and premium **epoxy grout** that resists calcium staining and discoloration. We also treat frameless glass doors with protective hydrophobic coatings to ensure your shower remains crystal clear.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Neighborhood-Specific Styling:** We customize our designs to match the architectural character of your Chandler community:
              * **Ocotillo:** Luxury spa-like transformations featuring curbless frameless glass enclosures, freestanding soaking tubs, and floating double vanities.
              * **Fulton Ranch:** Sleek, modern updates with premium quartz countertops, custom tiled shower niches, and high-efficiency smart fixtures.
              * **Sun Lakes:** Certified senior-safe conversions featuring zero-threshold roll-in entries, sturdy wall-anchored grab bars, and beautiful high-traction mosaic floor tiling.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From top-tier walk-in showers to precise tile work, we deliver results that blend durability with modern aesthetics. We offer transparent, itemized quotes to ensure you get exceptional value for your investment. If you have been searching for a reliable <strong>bathroom contractor in Chandler, AZ</strong>, specialized <strong>bath remodeling services chandler az</strong>, one of the premier **bathroom remodeling companies in chandler**, or professional <strong>bath remodeling companies chandler az</strong>, our team is here to help. You can also view our <Link href='/bathroom-remodel-cost-chandler/' className='text-primary hover:underline font-medium'>detailed pricing guide</Link> for current 2026 rates and affordable <strong>bathroom remodel chandler az prices</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As a leading <strong>bath remodeling contractor in Chandler, AZ</strong>, <strong>bath remodeling company chandler az</strong>, or <strong>bath remodeling contractor chandler az</strong>, we understand that every project is unique. Our team of expert <strong>bathroom remodelers chandler az</strong> and <strong>bath remodelers chandler az</strong> are skilled in handling everything from simple updates to complex structural changes, making us one of the premier <strong>remodeling companies in chandler</strong> and <strong>remodeling contractors chandler az</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We focus on premium workmanship and clear communication. Whether you search for a <strong>bathroom contractor chandler az</strong>, <strong>remodeling service chandler az</strong>, <strong>bath remodel chandler az</strong>, <strong>bathroom renovations chandler az</strong>, <strong>bathroom remodel chandler az</strong>, or simply **home remodeling chandler az** and **remodeling services chandler az**, you will find that ARZ Home Remodeling delivers unmatched reliability. We are the top choice for **chandler arizona bathroom remodeling** and **bathroom remodeling contractor chandler az** services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact/" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now for Your Free No-Obligation Bathroom Quote!
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+15205693339" className="flex items-center gap-2">
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
              <p className="text-muted-foreground text-lg mt-4">Professional bathroom remodeling contractor services including walk-in showers, accessible shower remodeling, and tile shower installation in Chandler.</p>
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
                  Chandler sits in one of Arizona's hardest water zones: the East Valley water supply averages over{" "}
                  <strong>300 mg/L of dissolved minerals</strong>. This creates three specific problems in bathrooms:
                </p>
                <ul className="space-y-3 text-primary-foreground/85 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Calcium buildup on glass enclosures and fixtures within six to twelve months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Grout staining from mineral deposits within twelve to eighteen months of standard grouting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Yellowing and discoloration of low-grade acrylic surrounds</span>
                  </li>
                </ul>
                <p className="text-primary-foreground/85 text-lg leading-relaxed">
                  Our solution: we specify <strong>epoxy grout</strong>, <strong>nano-coated glass enclosures</strong>, and tile
                  materials rated for high-mineral environments. This is something national chains do not customize: and it is why
                  homeowners who have used generic contractors call us to fix failed showers three years later.
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
              <Link href="/bathroom-remodel-cost-chandler/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
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
                Our Remodeling Process - No Surprises
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
              We are a local team dedicated to providing top-quality <strong>shower remodeling services chandler</strong> and <strong>walk-in shower installation services</strong> across the city. 
              Whether you need a <strong>bathroom remodeler in Chandler, AZ</strong>, a <strong>bath remodeler in Chandler, AZ</strong>, or are looking for <strong>bath remodeling contractors in Chandler, AZ</strong>, we have the experience to get the job done right. 
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
          description="Call us or fill out the form. We will discuss your project, give you a ballpark on the call, and schedule your free in-home evaluation within forty eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
