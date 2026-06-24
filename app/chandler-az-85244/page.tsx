import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { Phone, ShieldCheck, ArrowRight, Droplets, Wrench, Bath, MapPin, CheckCircle2, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "85244 Chandler Bathroom Remodeling | Historic Homes",
  description: "Older home bathroom specialists near downtown Chandler. We fix subfloors, replace aging pipes, and rebuild custom showers from the studs. ROC #338304.",
  alternates: {
    canonical: `${siteConfig.url}/chandler-az-85244/`,
  },
};

export default function Chandler85244Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/chandler-az-85244/#localbusiness`,
        "name": "ARZ Home Remodeling - Historic Chandler",
        "url": `${siteConfig.url}/chandler-az-85244/`,
        "telephone": siteConfig.phoneClean,
        "areaServed": {
          "@type": "PostalCode",
          "postalCode": "85244"
        },
        "description": "Licensed contractors specializing in updating aging bathrooms and historic plumbing in the Chandler 85244 area.",
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you remodel a bathroom with old galvanized pipes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. When we open up the walls in older Chandler homes, we frequently replace failing galvanized lines with modern PEX piping to ensure your new bathroom is up to current plumbing code."
            }
          },
          {
            "@type": "Question",
            "name": "What if my bathroom floor is not level?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlevel slabs are common in older properties. Our teams perform extensive concrete prep and subfloor leveling before laying any new tile to guarantee a flawless, crack-free finish."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
          { "@type": "ListItem", "position": 2, "name": "Historic Chandler Bathroom Remodeling", "item": `${siteConfig.url}/chandler-az-85244/` }
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Restoring & Modernizing Bathrooms in Older Chandler Properties
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Older homes near the downtown Chandler district require contractors who genuinely understand structural complexity. We are licensed professionals experienced in diagnosing failing plumbing, leveling shifted concrete slabs, treating hidden mold, and building stunning, watertight custom showers that stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone call-to-action bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition shadow-lg font-bold text-lg w-full sm:w-auto flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call for a Custom Estimate
              </a>
              <a href="/contact" className="bg-secondary text-foreground border border-border px-8 py-4 rounded-xl hover:bg-secondary/80 transition shadow-sm font-bold text-lg w-full sm:w-auto">
                Request an On-Site Consultation
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Licensed General Contractor (ROC #338304)</div>
              <div className="flex items-center gap-2"><Wrench className="w-5 h-5 text-primary" /> Structural & Plumbing Experts</div>
              <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Downtown Chandler District</div>
            </div>
          </div>
        </section>

        {/* Problem & Context */}
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6 text-foreground">
                  The Hidden Challenges Behind Every Older Bathroom
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Remodeling a bathroom in a home that was built several decades ago is an entirely different discipline than working on a newer construction property. The older neighborhoods surrounding the 85244 postal district are filled with homes that have tremendous character and craftsmanship. But behind their walls, you often find a different story altogether. Decades of minor plumbing leaks, shifting foundation slabs, outdated electrical wiring, and aging galvanized pipes create a hidden layer of complexity that standard contractors are simply not prepared to handle.
                  </p>
                  <p>
                    At ARZ Home Remodeling, we view a complete demolition as an investigation as much as a construction project. When we strip your bathroom down to the bare studs, we are looking for the root causes of your current problems, not just the visible symptoms. We have encountered everything from cast-iron drain pipes that were installed slightly out of level decades ago — causing chronic slow drains — to entire subfloor sections that are so rotten from a slow, long-term toilet flange leak that they need complete replacement before a single tile can be set.
                  </p>
                  <p>
                    This thorough approach protects your investment. A beautiful new bathroom built on top of a compromised foundation is simply ticking clock. Within a few years, that brand-new tile will begin to crack and grout will crumble, because the underlying structure was never properly addressed. We fix the unseen problems first, and only then do we build the beautiful, lasting custom bathroom that you deserve.
                  </p>
                </div>
                <div className="mt-8">
                  <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone text-primary font-bold hover:underline flex items-center gap-2 text-lg">
                    Talk to an Expert About Your Home <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="font-semibold text-2xl mb-4 text-foreground border-b border-border pb-4">What We Routinely Discover in Older Homes:</h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start">
                    <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground block mb-1">Corroded Galvanized Plumbing</strong>
                      <span className="text-muted-foreground text-sm">Galvanized steel pipes rust from the inside out over decades. This builds up sediment that restricts water flow, causes brown discoloration, and eventually leaks. We replace every accessible section with clean, flexible PEX tubing.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <HardHat className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground block mb-1">Shifted or Unlevel Concrete Slabs</strong>
                      <span className="text-muted-foreground text-sm">Arizona's desert soil contracts and expands with temperature and moisture. Over time, concrete foundations shift. We use self-leveling underlayment and custom concrete floating to create a perfectly level tile substrate.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Droplets className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground block mb-1">Hidden Mold & Moisture Damage</strong>
                      <span className="text-muted-foreground text-sm">A leaking shower pan or failing grout can silently feed mold colonies inside the wall cavity for years. We safely remediate all biological growth and replace damaged framing before rebuilding.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground block mb-1">Outdated Electrical Wiring</strong>
                      <span className="text-muted-foreground text-sm">Modern bathrooms require GFCI-protected outlets and dedicated circuits for heated floors and ventilation fans. We upgrade the electrical while the walls are open to bring the entire space up to current NEC code.</span>
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
              Tailored Bathroom Services for the 85244 Area
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <Bath className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Complete Bathroom Gut Restorations</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We strip old bathrooms completely down to the bare studs and concrete slab. This full-exposure approach lets us inspect every inch of framing, identify historic water damage, assess the plumbing, and start with a completely clean, correctly prepared substrate. We then install Schluter-Kerdi waterproofing membranes across every wall and floor surface before any tile is set. The result is a bathroom built to the highest modern standards, inside an older home with original character and charm.
                </p>
                <Link href="/bathroom-remodeling" className="text-primary font-medium hover:underline block mb-4">
                  See Our Full Bathroom Remodeling Process →
                </Link>
                <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition">
                  Call for a Gut-Rehab Quote
                </a>
              </div>

              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <Droplets className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Accessible Walk-In Shower Conversions</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Many older homes near downtown Chandler were built with high-threshold bathtubs that present a serious tripping and falling hazard for aging homeowners. We specialize in converting these outdated, dangerous tub-shower combos into fully accessible, curbless walk-in showers. We incorporate built-in teak benches, stainless steel grab bars strategically positioned at the correct ADA heights, and slip-resistant porcelain floor tiles with a coefficient of friction that exceeds safety standards. Your new shower becomes both a safety feature and a design statement.
                </p>
                <Link href="/tub-to-shower-conversion" className="text-primary font-medium hover:underline block mb-4">
                  Explore Walk-In Shower Options →
                </Link>
                <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition">
                  Schedule a Safety Consultation
                </a>
              </div>

              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Plumbing Code Updates</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  An older bathroom remodel is often the perfect opportunity to address failing plumbing before it becomes an emergency. When the walls are open, replacing aging galvanized supply lines with modern PEX tubing, upgrading outdated two-handle faucet valves to thermostatic pressure-balancing cartridges, and re-pitching drain lines are all work that can be done efficiently and affordably. These hidden improvements add decades of reliable function and prevent the very expensive water damage that results from aging pipe failures.
                </p>
              </div>

              <div className="p-8 border border-border rounded-2xl hover:shadow-md transition bg-secondary/30">
                <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Vanity & Storage Modernization</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Older bathroom vanities were typically built-in, bulky furniture pieces with small, round sinks and outdated chrome hardware. We replace these with sleek, modern floating vanity bases, which make the room feel more open and make cleaning the floor dramatically easier. We install deeply under-mounted rectangular sinks, seamless quartz countertops without any grout lines to scrub, and frameless mirrors that are wired directly to the electrical for integrated LED lighting. Modern hardware in matte black or brushed nickel ties the entire space together.
                </p>
                <Link href="/cabinet-countertop-installation" className="text-primary font-medium hover:underline block">
                  View Vanity & Countertop Options →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center text-foreground">
              Our Step-by-Step Process for Older Homes
            </h2>
            <div className="space-y-8">
              {[
                {
                  num: 1,
                  title: "Structural Discovery Consultation",
                  body: "Before we ever produce a quote, we schedule an in-home visit at your older Chandler property. We don't just measure the room. We assess the age of the plumbing under the sink, inspect the existing tile for signs of previous leaks, check whether the subfloor feels solid and level underfoot, and talk through any prior repairs you are aware of. Only by understanding the full picture can we provide you with an accurate, transparent, fixed-price proposal with no surprise charges."
                },
                {
                  num: 2,
                  title: "Careful Demolition & Damage Assessment",
                  body: "Once the project begins, we set up professional dust containment barriers throughout the work area and demolish the old bathroom methodically. Unlike general handymen who simply rip everything out and move on, we carefully document everything we encounter inside the walls and floor. We photograph the plumbing condition, frame damage, and any mold colonies we find. This documentation is shared directly with you before we proceed, ensuring complete transparency and giving you the opportunity to make informed decisions about any additional structural remediation."
                },
                {
                  num: 3,
                  title: "Code Upgrades & Structural Repair",
                  body: "This is where older home remodeling diverges entirely from new construction. After demolition, we replace all corroded galvanized piping with clean PEX lines and properly pitch drain runs. We treat and frame out any sections where mold is present and install moisture-resistant Densglass sheathing rather than standard drywall. If the concrete slab is uneven, we pour precision self-leveling compound across the floor and allow it to fully cure before any tile installation begins. Only once the structure is sound do we move to the aesthetic phase of the remodel."
                },
                {
                  num: 4,
                  title: "Waterproofing, Tiling & Installation",
                  body: "We apply a redundant waterproofing strategy using continuous liquid membrane on all wet wall surfaces as well as a Schluter-Ditra uncoupling membrane on the floor. This protects your home from future water infiltration regardless of natural tile movement or minor settling. Our master tile craftsmen then set your chosen porcelain or stone, maintaining perfectly consistent grout joints, plumb vertical lines, and carefully mitered corners. All niches, shelves, and built-in features are tile-set to the same exacting standard as the main walls."
                },
                {
                  num: 5,
                  title: "Final Inspection & Handover",
                  body: "After all fixtures, glass enclosures, and hardware are installed, we grout, caulk, and perform a deep cleaning of the entire space. Your dedicated project manager then walks through every single detail with you, checking the function of every valve, confirming every tile is firmly bonded, and ensuring the glass enclosure operates smoothly. We handle the final City of Chandler inspection and only consider the project truly complete when you are completely satisfied."
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
              Questions About Remodeling Older Chandler Properties
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "What happens if you find black mold behind my old shower?",
                  a: "This is unfortunately very common in older properties. If we uncover mold or mildew colonies during demolition, we immediately stop construction and show you exactly what we found. We never simply cover the problem up. We coordinate with certified local remediation professionals to safely treat the affected framing. Once the space is cleared and air-tested, we rebuild the wall cavity with moisture-resistant materials to prevent recurrence."
                },
                {
                  q: "My home has old galvanized plumbing everywhere. Can you still remodel just one bathroom?",
                  a: "Yes. We focus on replacing all galvanized supply lines that are accessible within the walls and floor of your specific bathroom project. We can isolate and replumb just the fixtures in that room using modern PEX connections that tap into the main lines. While we strongly encourage homeowners to consider replacing their full plumbing over time, a single-bathroom replumb is absolutely feasible and very beneficial."
                },
                {
                  q: "Do I have to handle the city permits myself?",
                  a: "Absolutely not. Remodeling an older home almost always requires permits, particularly when we are moving drain locations, upgrading electrical panels, or making structural changes to framing. As licensed General Contractors under ROC #338304, we draft and submit all plans directly to the City of Chandler Building Division and coordinate all on-site inspections from start to finish."
                },
                {
                  q: "My bathroom floor seems very uneven. Can you still install large-format tile?",
                  a: "Large-format tiles, typically 24x24 or larger, are incredibly unforgiving on an uneven substrate. If you lay them on an unlevel slab, they will crack within a year or two due to inadequate contact underneath. Before any tile touches your floor, our crews will pour self-leveling compound or hand-float the concrete to ensure it is perfectly flat. This critical step is what separates a long-lasting tile installation from one that fails prematurely."
                },
                {
                  q: "How long does it take to remodel a bathroom in an older home?",
                  a: "Older homes require significantly more preparation time than new construction projects. A full gut restoration in a 85244 property typically runs between 4 to 6 weeks of active construction. The additional time accounts for structural repairs, waiting for self-leveling compounds to fully cure, the longer permit review times associated with older properties, and the extra care required when working around aged plumbing and electrical systems. We always provide a realistic timeline upfront so you can plan your daily routine accordingly."
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
                <Phone className="w-5 h-5" /> Have a structural question? Call {siteConfig.phone} directly.
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
              <Link href="/chandler-az-85225" className="px-6 py-3 border border-border rounded-lg hover:border-primary transition text-foreground bg-background">85225 Service Area</Link>
              <Link href="/chandler-az-85286" className="px-6 py-3 border border-border rounded-lg hover:border-primary transition text-foreground bg-background">85286 Service Area</Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Your Older Home Deserves the Right Contractor
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Don't trust your older property to a crew that lacks the experience to deal with aging plumbing, shifted slabs, and historic construction. Our licensed team has the expertise to handle the complexity and deliver a stunning, lasting result.
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
