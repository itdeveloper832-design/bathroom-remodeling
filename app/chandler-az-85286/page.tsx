import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { Phone, ShieldCheck, ArrowRight, Droplets, Wrench, Bath, Home, MapPin, CheckCircle2, ClipboardCheck, HardHat, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Chandler 85286 Bathroom Remodeling | Get a Free Quote",
  description: "South Chandler's licensed bathroom remodeling team. We convert unused garden tubs into luxury walk-in showers. ROC #338304. Call for a free estimate.",
  alternates: {
    canonical: `${siteConfig.url}/chandler-az-85286/`,
  },
};

export default function Chandler85286Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/chandler-az-85286/#localbusiness`,
        "name": "ARZ Home Remodeling - South Chandler",
        "url": `${siteConfig.url}/chandler-az-85286/`,
        "telephone": siteConfig.phoneClean,
        "areaServed": {
          "@type": "PostalCode",
          "postalCode": "85286"
        },
        "description": "Expert bathroom remodeling contractors specializing in master suite updates and tub-to-shower conversions in South Chandler.",
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you control dust when tearing out an old bathroom?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use heavy-duty negative air machines, zip-wall dust barriers, and specialized HEPA vacuums during demolition to protect your HVAC system from fine silica dust."
            }
          },
          {
            "@type": "Question",
            "name": "Is it worth removing my massive garden tub?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, tub-to-shower conversions are highly requested in South Chandler. Converting an unused garden tub into a massive, curbless walk-in shower adds significant appraisal value to the property."
            }
          }
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
        
        {/* Hero Section */}
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              South Chandler's Premier Bathroom Remodeling Experts
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Tired of looking at that massive, unused garden tub from the early 2000s? We help homeowners in South Chandler completely modernize their master bathrooms with curbless showers, premium slab finishes, and zero-headache project management. From the initial demolition to the final coat of hydrophobic sealant, our licensed teams handle everything in-house.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone call-to-action bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition shadow-lg font-bold text-lg w-full sm:w-auto flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now for a Free Estimate
              </a>
              <a href="/contact" className="bg-secondary text-foreground border border-border px-8 py-4 rounded-xl hover:bg-secondary/80 transition shadow-sm font-bold text-lg w-full sm:w-auto">
                Request a Design Consultation
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Licensed General Contractor (ROC #338304)</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Strict Dust Mitigation</div>
            </div>
          </div>
        </section>

        {/* The Problem & Context */}
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6 text-foreground">
                  Upgrading South Chandler Homes Built for the 2000s
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    If you live in Sun Groves, Carino Estates, Springfield, or any of the beautiful master-planned neighborhoods surrounding Tumbleweed Park, chances are your home was built roughly fifteen to twenty years ago. The architecture in these areas is stunning, and the lot sizes are incredibly generous. However, the master bathrooms often reflect the trends of a bygone era. They frequently feature cramped, dark shower stalls situated right next to massive, drop-in fiberglass garden tubs that just sit there collecting dust month after month.
                  </p>
                  <p>
                    Today's homeowners are changing how they use their spaces. The daily ritual of a luxurious, expansive shower has completely replaced the occasional soak in a garden tub. That is why <Link href="/" className="text-primary hover:underline font-medium">ARZ Home Remodeling</Link> specializes in reclaiming that wasted square footage. We are experts at safely demolishing old layouts, tearing out those bulky tubs, and installing expansive, open-concept walk-in showers. By updating your bathroom with local, high-quality porcelain slabs, frameless glass enclosures, and modern fixtures, we breathe entirely new life into your master suite.
                  </p>
                  <p>
                    Furthermore, the real estate market in the East Valley is incredibly competitive. A modernized, spa-like master bathroom is one of the very few home improvements that consistently yields a massive return on investment when it comes time to appraise or sell your home. Buyers in the 85286 zip code are specifically looking for turnkey properties where the master bath serves as a private, high-end retreat rather than a relic of 2004 builder-grade finishes.
                  </p>
                </div>
                <div className="mt-8">
                  <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone text-primary font-bold hover:underline flex items-center gap-2 text-lg">
                    Speak Directly With Our Project Managers <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="font-semibold text-2xl mb-4 text-foreground border-b border-border pb-4">Our Approach to Clean Construction:</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Arizona remodeling kicks up a staggering amount of drywall and silica tile dust. We absolutely refuse to just hang a cheap plastic sheet and hope for the best. Our teams take your indoor air quality seriously. We use heavy-duty negative air machines, professional ZipWall temporary containment systems, and commercial HEPA filtration to ensure your family and pets aren't breathing in hazardous construction debris while we work inside your home.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start"><Droplets className="w-6 h-6 text-primary flex-shrink-0 mt-1" /> <div><strong className="text-foreground block mb-1">Hard-Water Resistant Epoxy Grout</strong><span className="text-muted-foreground text-sm">Standard grout breaks down quickly in Chandler's highly mineralized water. We utilize advanced epoxy grouts that never need sealing and actively resist staining and crumbling.</span></div></li>
                  <li className="flex gap-4 items-start"><Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" /> <div><strong className="text-foreground block mb-1">Modern Plumbing Infrastructure</strong><span className="text-muted-foreground text-sm">We don't reuse aging valves. We install brand new PEX plumbing manifolds and high-end brass thermostatic mixing valves behind the walls for flawless water pressure and temperature control.</span></div></li>
                  <li className="flex gap-4 items-start"><ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" /> <div><strong className="text-foreground block mb-1">Lifetime Waterproofing</strong><span className="text-muted-foreground text-sm">We utilize the industry-leading Schluter-Kerdi waterproofing membrane system behind every single tile we lay, ensuring your shower will never rot, mold, or leak into the surrounding drywall.</span></div></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Breakdown */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-center text-foreground">
              Comprehensive Bathroom Renovation Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <Bath className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Tub-to-Shower Conversions</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our most sought-after service in the 85286 area. We completely remove your old, bulky bathtub and the surrounding dated tile. In its place, we construct a stunning, oversized walk-in shower. We can build curbless (zero-entry) floors for seamless accessibility, integrate custom recessed shower niches for your shampoos and soaps, and install heavy-duty frameless glass doors that make the entire room feel twice as large. We manage all the necessary plumbing reroutes to move the drain from the tub location to the center of your new shower pan.
                </p>
                <Link href="/tub-to-shower-conversion" className="text-primary font-medium hover:underline mb-4 block">
                  See Our Conversion Process →
                </Link>
              </div>

              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <Home className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Full Master Suite Overhauls</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  For homeowners looking to completely gut and reimagine their master bathroom, we offer full-scale structural remodeling. This includes tearing out awkward dropped soffits to raise the ceiling height, moving non-load-bearing walls to expand the footprint, and installing dual floating vanities with under-cabinet LED lighting. We handle all complex electrical wiring for heated floors, smart mirrors, and high-CFM exhaust fans to ensure your new master suite is as functional as it is breathtaking.
                </p>
                <Link href="/master-bathroom-remodel" className="text-primary font-medium hover:underline mb-4 block">
                  Explore Master Bathrooms →
                </Link>
              </div>

              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Guest & Hallway Bathrooms</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Your guest bathrooms endure heavy use, especially if you have children or frequent visitors. We replace chipped fiberglass tub inserts with durable, deep-soaking cast iron or acrylic tubs surrounded by custom, floor-to-ceiling tile. We install durable quartz countertops that withstand toothpaste stains and heavy use, ensuring the secondary bathrooms in your home match the quality and aesthetic of your newly remodeled master suite.
                </p>
              </div>

              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <Droplets className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Shower Pan Replacements</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  If your shower floor feels spongy or you are noticing water stains on the ceiling below, your shower pan has failed. We specialize in emergency shower pan replacements. We tear out the compromised floor, remediate any mold or wood rot in the joists, and pour a perfectly sloped concrete shower pan, sealed with a highly advanced waterproof membrane to guarantee it will never leak again.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Remodeling Process */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center text-foreground">
              Our Step-by-Step Remodeling Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">In-Home Consultation & Design</h3>
                  <p className="text-muted-foreground leading-relaxed">We begin by visiting your South Chandler home to measure the space and discuss your vision. We talk through material options, layout changes, and functionality. Following the meeting, we provide a detailed, fixed-price proposal. Unlike other contractors, we refuse to use allowances that unexpectedly drive up your final bill. The price we quote is the price you pay.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Material Sourcing & Permitting</h3>
                  <p className="text-muted-foreground leading-relaxed">To prevent the massive supply chain delays that plague this industry, we partner closely with local East Valley and Phoenix-based slab yards and tile distributors. You get to hand-pick your materials locally. Once everything is ordered, our team pulls all necessary plumbing, electrical, and structural permits directly from the City of Chandler.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Clean Demolition & Rough-In</h3>
                  <p className="text-muted-foreground leading-relaxed">We set up our extensive dust mitigation barriers and negative air scrubbers. Then, our crews carefully demolish the old bathroom down to the bare studs. This exposes the framing, allowing us to inspect for historic water damage, reroute plumbing drains for your new shower, and pull new electrical circuits for upgraded lighting and vanity mirrors.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Waterproofing & Tile Installation</h3>
                  <p className="text-muted-foreground leading-relaxed">Before a single tile is laid, we install cement backer board and apply a continuous layer of waterproofing membrane across the floor and up the walls. Our master tile setters then painstakingly lay out your chosen porcelain, ceramic, or natural stone tile, ensuring perfectly straight grout lines, level surfaces, and flawless niche integrations.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Fixtures, Finish, & Walkthrough</h3>
                  <p className="text-muted-foreground leading-relaxed">We install the final touches: custom frameless glass enclosures, high-end showerheads, freestanding bathtubs, and dual sink vanities. After a deep clean of the site, your dedicated project manager will walk you through the finished bathroom to ensure every single detail meets your exacting standards and our rigorous quality requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive FAQs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center text-foreground">
              Questions From Our South Chandler Clients
            </h2>
            <div className="space-y-8">
              <div className="bg-secondary/40 p-8 rounded-xl border border-border">
                <h3 className="font-semibold text-xl text-foreground mb-3">How do you handle the severe dust when removing old tile?</h3>
                <p className="text-muted-foreground leading-relaxed">We take indoor air quality incredibly seriously. Demolishing old ceramic tile and drywall creates a massive plume of fine silica dust that can easily ruin carpets, cover furniture, and clog your home's HVAC system. Before a single hammer swings, we set up ZipWall containment systems from floor to ceiling. We seal off the HVAC return and supply registers located inside the bathroom. Finally, we run commercial-grade negative air scrubbers that vent the contaminated air outside or pass it through a HEPA filter, ensuring your home stays immaculate.</p>
              </div>

              <div className="bg-secondary/40 p-8 rounded-xl border border-border">
                <h3 className="font-semibold text-xl text-foreground mb-3">Is it a bad idea to remove the only bathtub in the house?</h3>
                <p className="text-muted-foreground leading-relaxed">This is a highly common concern. If the bathtub in your master suite is literally the only bathtub in the entire home, we usually recommend keeping at least one tub somewhere in the house—typically by updating the guest bathroom tub. This preserves resale value for young families who need a place to bathe toddlers. However, if your home already has a tub in the guest bath, converting your master bathroom's unused garden tub into a massive, luxurious walk-in shower is highly desired by today's buyers and is not a detriment to resale value.</p>
              </div>

              <div className="bg-secondary/40 p-8 rounded-xl border border-border">
                <h3 className="font-semibold text-xl text-foreground mb-3">Where do you source your tile, quartz, and vanities?</h3>
                <p className="text-muted-foreground leading-relaxed">We refuse to rely on big-box stores or cheap online retailers that ship materials from overseas, as this inevitably leads to cracked products and massive project delays. Instead, we partner closely with premium, local East Valley and Phoenix-based slab yards and wholesale tile distributors. This allows you to physically visit the showroom, touch the materials, and hand-pick the exact quartz slab or porcelain tile that will be installed in your home. This local sourcing guarantees quality and keeps the project timeline strictly on track.</p>
              </div>

              <div className="bg-secondary/40 p-8 rounded-xl border border-border">
                <h3 className="font-semibold text-xl text-foreground mb-3">Do you pull permits for bathroom remodels in Chandler?</h3>
                <p className="text-muted-foreground leading-relaxed">Absolutely. While a simple "rip and replace" of cosmetic tile might not always require heavy permitting, any time we alter the structural framing, move plumbing drain lines, or add dedicated electrical circuits (such as for a new steam shower unit or heated flooring), we pull the necessary permits. We handle the entire bureaucratic process with the City of Chandler's Building Division to ensure your home remains strictly up to code, safe, and fully insured.</p>
              </div>

              <div className="bg-secondary/40 p-8 rounded-xl border border-border">
                <h3 className="font-semibold text-xl text-foreground mb-3">How long does a typical master bathroom remodel take?</h3>
                <p className="text-muted-foreground leading-relaxed">A complete gut and rebuild of a master bathroom in the 85286 area typically takes between 3 to 5 weeks of active construction, depending on the complexity of the custom glass, the extent of plumbing reroutes, and the amount of custom tile work required. Because we are highly organized and source materials locally, we do not start demolition until all primary materials have arrived at our facility. This ensures that once we start tearing your bathroom apart, our crews are working consistently every day until the job is finished, minimizing the disruption to your daily life.</p>
              </div>

              <div className="bg-secondary/40 p-8 rounded-xl border border-border">
                <h3 className="font-semibold text-xl text-foreground mb-3">Can you fix a shower that was built incorrectly by another contractor?</h3>
                <p className="text-muted-foreground leading-relaxed">Yes, unfortunately, a large portion of our business involves "rescue operations." Many un-licensed contractors or DIY enthusiasts fail to properly waterproof the shower pan, leading to severe leaks, black mold, and rotting subfloors within just a few years. We can come in, completely demolish the failed shower, remediate the structural damage, and rebuild the shower using the proper Schluter-Kerdi waterproofing systems so it lasts for decades.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone text-xl font-bold text-primary hover:underline flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Have a specific question? Call {siteConfig.phone} directly.
              </a>
            </div>
          </div>
        </section>

        {/* Final Heavy CTA */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Transform Your South Chandler Home?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Don't leave your most important spaces to chance. Partner with a licensed, highly experienced local contractor who guarantees flawless execution, strict dust mitigation, and transparent pricing. Let's build the bathroom you've always wanted.
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
