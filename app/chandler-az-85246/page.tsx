import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { Phone, ShieldCheck, ArrowRight, Droplets, Wrench, Bath, Clock, CheckCircle2, HardHat, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Chandler 85246 Bathroom Remodeling | Call Today",
  description: "Central Chandler licensed bathroom remodelers. We stop shower leaks, build waterproof custom showers, and guarantee on-time, fixed-price project completion.",
  alternates: {
    canonical: `${siteConfig.url}/chandler-az-85246/`,
  },
};

export default function Chandler85246Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/chandler-az-85246/#localbusiness`,
        "name": "ARZ Home Remodeling - Central Chandler",
        "url": `${siteConfig.url}/chandler-az-85246/`,
        "telephone": siteConfig.phoneClean,
        "areaServed": {
          "@type": "PostalCode",
          "postalCode": "85246"
        },
        "description": "Fast, turnkey bathroom remodeling contractors serving the central Chandler 85246 district.",
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you respond to a leaking shower pan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you have an active shower leak causing structural damage, call us immediately. We prioritize emergency bathroom evaluations in central Chandler to stop the damage before it spreads to surrounding drywall and flooring."
            }
          },
          {
            "@type": "Question",
            "name": "What is a curbless shower, and can any bathroom have one?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A curbless or zero-entry shower removes the step-over curb at the shower entrance. It requires lowering the subfloor drain or slightly raising the bathroom floor level, which our licensed crews perform regularly. Most bathrooms can accommodate a curbless conversion."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
          { "@type": "ListItem", "position": 2, "name": "Central Chandler Bathroom Remodeling", "item": `${siteConfig.url}/chandler-az-85246/` }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <Clock className="w-4 h-4" /> Rapid Response Across Central Chandler
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Expert Bathroom Remodeling for Central Chandler Homeowners
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A failing shower pan, crumbling grout, or a bathroom that simply hasn't been touched since the 1990s is a real problem that needs a real solution. We are licensed general contractors who specialize in completely rebuilding bathrooms from the ground up, with a relentless focus on watertight construction, project efficiency, and permanent results you can actually live with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone call-to-action bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition shadow-lg font-bold text-lg w-full sm:w-auto flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call for Priority Scheduling
              </a>
              <a href="/contact" className="bg-secondary text-foreground border border-border px-8 py-4 rounded-xl hover:bg-secondary/80 transition shadow-sm font-bold text-lg w-full sm:w-auto">
                Request a Free Consultation
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Licensed General Contractor (ROC #338304)</div>
              <div className="flex items-center gap-2"><Droplets className="w-5 h-5 text-primary" /> Advanced Waterproofing Systems</div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> On-Time Project Completion</div>
            </div>
          </div>
        </section>

        {/* Problem & Context */}
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6 text-foreground">
                  Stopping Leaks Before They Become Disasters
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Many of the phone calls we receive from homeowners in the central 85246 district do not start as aesthetic requests. They start with phrases like "I noticed a soft spot in my shower floor" or "my neighbor downstairs said there was a water stain on their ceiling." These are urgent red flags, and they indicate a failing shower pan or severely compromised grout and tile system that has been silently leaking into your subfloor and wall framing for months or even years.
                  </p>
                  <p>
                    The mistake too many homeowners make is calling a handyman to re-caulk around the existing tile. This is a cosmetic band-aid that simply delays the inevitable. If water has been infiltrating your shower system, it has almost certainly reached the wood framing and cement board behind the tile. Organic materials in constant contact with moisture create the perfect environment for black mold, and mold requires complete removal and remediation — not just a fresh bead of silicone.
                  </p>
                  <p>
                    At ARZ Home Remodeling, we believe the only correct answer to a leaking shower is a complete tear-out and rebuild using properly engineered waterproofing systems. We remove every piece of compromised tile, backer board, and damaged framing. We treat any biological growth we encounter. Then we rebuild your shower from the studs outward using industry-leading waterproofing membranes, quality cement board, and high-performance large-format porcelain tile that is set in a waterproof epoxy tile adhesive bed. The result is a shower that will genuinely last for decades without issue.
                  </p>
                </div>
                <div className="mt-8">
                  <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone text-primary font-bold hover:underline flex items-center gap-2 text-lg">
                    Call for an Urgent Evaluation <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="font-semibold text-2xl mb-4 text-foreground border-b border-border pb-4">Why Turnkey Efficiency Matters in Chandler:</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Hiring a separate plumber, a separate tile setter, and a separate electrician for a single bathroom remodel is a recipe for miscommunication, scheduling conflicts, and wildly unpredictable final costs. As a licensed General Contractor, we directly employ or tightly manage every single trade involved in your project, from rough plumbing to final glass installation.
                </p>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground block mb-1">Guaranteed Project Timelines</strong>
                      <span className="text-muted-foreground text-sm">We never start demolition until all materials have arrived at our facility, ensuring your bathroom isn't left as a construction zone indefinitely.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground block mb-1">In-House Trade Coordination</strong>
                      <span className="text-muted-foreground text-sm">Our plumbers, electricians, and tile setters work directly under one project manager, eliminating the scheduling gaps that stretch projects out for months.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground block mb-1">Fixed-Price, Transparent Contracts</strong>
                      <span className="text-muted-foreground text-sm">The price we quote in writing is the final price. We don't use budget allowances that balloon your invoice. Surprises stop at the proposal stage.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Breakdown */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-center text-foreground">
              Our Central Chandler Bathroom Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <Bath className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Custom Walk-In Shower Builds</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Whether you are converting a bathtub into a new shower or tearing out an old acrylic prefab enclosure, we build fully custom, fully waterproofed walk-in showers using real tile. We offer an enormous range of options, from minimalist concrete-look porcelain slabs in a seamless 24x48 format, to intricate herringbone mosaic accent walls. Every shower we build includes redundant waterproofing membranes, properly sloped drain pans, and frameless glass enclosures installed by our in-house glazing team.
                </p>
                <Link href="/shower-remodeling" className="text-primary font-medium hover:underline block mb-4">
                  See Our Custom Shower Gallery →
                </Link>
                <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition">
                  Call for a Shower Build Quote
                </a>
              </div>

              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <Droplets className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Leaking Shower Pan Replacements</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A shower pan that feels spongy underfoot or shows signs of cracking is an active structural emergency. We treat these with high priority. After complete demolition, we hand-pour a properly sloped mortar shower pan, apply a fully bonded waterproofing membrane across its entire surface, and perform a flood test before any tile is ever installed. This ensures zero water escapes through the floor before the tile even goes on. We then tile over the top with premium anti-slip porcelain for a beautiful, permanent solution.
                </p>
                <Link href="/bathroom-remodeling" className="text-primary font-medium hover:underline block mb-4">
                  Learn About Our Remodeling Process →
                </Link>
                <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition">
                  Call for Emergency Assessment
                </a>
              </div>

              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <HardHat className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Vanity & Layout Modernization</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Older bathrooms waste enormous amounts of visual and functional space with clunky vanity cabinets and cluttered counter surfaces. We tear out outdated, ground-mounted vanities and install sleek, wall-mounted floating units that make the room feel considerably more spacious. We add recessed medicine cabinets with mirrored doors and integrated LED lighting on dimmers, built-in wall niches for toiletry storage between the studs, and seamless quartz countertops that require zero sealing and clean with a simple wipe.
                </p>
                <Link href="/cabinet-countertop-installation" className="text-primary font-medium hover:underline block">
                  Explore Vanity & Countertop Options →
                </Link>
              </div>

              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <Sparkles className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Hard-Water Protection Upgrades</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Chandler's water supply is notoriously high in calcium and magnesium content. Within weeks of moving into a new bathroom, you can see white scale deposits forming on glass doors and chrome fixtures. We offer a suite of hard-water protection upgrades including non-porous large-format porcelain tiles that have zero absorption, hydrophobic nano-coating treatments applied professionally to all glass surfaces, and industrial-grade epoxy grout that never absorbs minerals and never needs to be sealed. Your new bathroom stays looking showroom-clean with minimal maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center text-foreground">
              How We Manage Your Project from Start to Finish
            </h2>
            <div className="space-y-8">
              {[
                {
                  num: 1,
                  title: "Free On-Site Assessment",
                  body: "We begin every project with a detailed in-home visit to your central Chandler property. Our project estimator will inspect the existing shower and plumbing, look for any visible signs of prior water damage, take precise measurements of the space, and sit down with you to understand your vision, material preferences, and budget. This consultation is completely free and comes with absolutely no pressure to commit. Following the visit, we provide a comprehensive written estimate broken down by labor and materials."
                },
                {
                  num: 2,
                  title: "Materials Ordered, Timeline Locked",
                  body: "Once you approve the project, we immediately order all specified materials. Unlike contractors who order as they go, we wait until every piece of tile, every fixture, every panel of glass, and every plumbing supply has arrived at our warehouse before we schedule your demolition date. This simple but critical step means your bathroom will never sit half-torn apart for weeks while we wait on backordered products."
                },
                {
                  num: 3,
                  title: "Controlled Demolition & Moisture Remediation",
                  body: "Our crews arrive and immediately set up professional dust containment barriers throughout the adjacent living areas. We methodically remove all existing tile, backer board, and fixtures. Every surface exposed during demolition is carefully inspected for moisture intrusion and mold. Any compromised framing is replaced. Any biological growth is treated by licensed remediation professionals before we proceed. You receive a direct update with photos at the conclusion of every demolition day."
                },
                {
                  num: 4,
                  title: "Waterproofing, Tile & Fixture Installation",
                  body: "With a clean, structurally sound substrate confirmed, we install industry-leading waterproofing membranes on all wet surfaces, followed by high-grade cement backer board. Our master tile installers then set your chosen porcelain or natural stone with consistent, perfectly straight grout lines. After the tile reaches full cure time, we install your plumbing trim, frameless glass enclosure, vanity, mirrors, and all finish hardware. Every installation is checked for level and plumb before sign-off."
                },
                {
                  num: 5,
                  title: "Final Walkthrough & City Sign-Off",
                  body: "Your dedicated project manager conducts a final punch-list walkthrough with you before we consider any project complete. We test every valve for proper function, check every tile joint for firmness, and verify that the glass doors swing smoothly and seal correctly. If any detail is not to your satisfaction, we address it before we leave. We then coordinate the final city inspection for any permitted work and hand you all warranty documentation for materials and workmanship."
                }
              ].map((step) => (
                <div key={step.num} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">{step.num}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center text-foreground">
              Answers to Our Most Common Client Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "How fast can you respond if my shower is actively leaking?",
                  a: "If you have an active leak that is causing visible water damage or staining on adjacent walls or ceilings below, turn off the water supply to that bathroom immediately. Give us a call. We maintain priority scheduling capacity for emergency bathroom evaluations in central Chandler and can typically dispatch an estimator within 24 to 48 hours of your initial call to assess the scope of damage and provide an emergency repair plan."
                },
                {
                  q: "Will my new shower develop hard-water stains and mineral buildup?",
                  a: "Chandler's water is notoriously hard, so this is a completely valid concern. We address this proactively by selecting non-porous large-format porcelain tiles rather than natural stone, using industrial-grade epoxy grout that never absorbs minerals and requires zero sealing, and optionally applying a professional nano-coating to your glass enclosure that forces water to bead and run off, dramatically reducing scale accumulation over time."
                },
                {
                  q: "What is a curbless shower, and can my bathroom have one?",
                  a: "A curbless, or zero-entry, shower eliminates the raised curb at the shower entrance entirely. It creates a seamless, spa-like visual flow from the bathroom floor into the shower itself. Achieving this requires either lowering the drain slightly below the surrounding floor level or raising the bathroom floor to accommodate a properly sloped drain field. Our crews perform this structural floor work regularly, and most existing bathroom layouts can successfully accommodate a curbless conversion."
                },
                {
                  q: "Do I need to be home while the remodel is underway?",
                  a: "You do not need to be home every single day. We are fully licensed and insured, and our crews work under a dedicated project manager who oversees all activity on site. Many of our clients provide us with a key or garage access code. We send you a daily photo update at the end of each work day so you can see precisely what was accomplished, and your project manager is always available by phone for questions or decisions that arise."
                },
                {
                  q: "What happens if something gets damaged during construction?",
                  a: "ARZ Home Remodeling carries full general liability insurance and workers' compensation coverage. In the rare event that a crew member damages an adjacent surface, fixture, or structural element during the project, we document it, report it to you immediately, and repair or replace it at no additional cost as part of our workmanship commitment. We refuse to leave a job site with any damage that was not there when we arrived."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-secondary/40 p-8 rounded-xl border border-border">
                  <h3 className="font-semibold text-xl text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone text-xl font-bold text-primary hover:underline flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Need immediate bathroom help? Call {siteConfig.phone}.
              </a>
            </div>
          </div>
        </section>

        {/* Internal Cross-Linking */}
        <section className="py-16 bg-secondary border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Related Services & Nearby Areas</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/bathroom-remodeling" className="px-6 py-3 border border-border rounded-lg hover:border-primary transition text-foreground bg-background">Bathroom Remodeling</Link>
              <Link href="/shower-remodeling" className="px-6 py-3 border border-border rounded-lg hover:border-primary transition text-foreground bg-background">Custom Shower Builds</Link>
              <Link href="/bathtub-remodeling" className="px-6 py-3 border border-border rounded-lg hover:border-primary transition text-foreground bg-background">Bathtub Upgrades</Link>
              <Link href="/chandler-az-85224" className="px-6 py-3 border border-border rounded-lg hover:border-primary transition text-foreground bg-background">85224 Service Area</Link>
              <Link href="/chandler-az-85226" className="px-6 py-3 border border-border rounded-lg hover:border-primary transition text-foreground bg-background">85226 Service Area</Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Stop the Leak. Build Your Dream Bathroom.
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Whether it's an emergency shower failure or a long overdue bathroom upgrade, our licensed and experienced team is ready to deliver a permanent, beautiful result for your central Chandler home. Call today and get a transparent, fixed-price estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone bg-white text-primary px-10 py-5 rounded-xl hover:bg-gray-100 transition shadow-2xl font-bold text-xl w-full sm:w-auto">
                Call {siteConfig.phone} Today
              </a>
              <a href="/contact" className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white/10 transition font-bold text-xl w-full sm:w-auto">
                Submit an Online Inquiry
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
