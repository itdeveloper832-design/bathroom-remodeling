import Link from "next/link";
import { Droplets, CheckCircle2, Shield, Wind } from "lucide-react";

export default function ChandlerExpertise() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <Droplets className="w-10 h-10 flex-shrink-0 mt-1 opacity-80" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Built for Chandler Homes: Hard Water, Heat, and HOAs
              </h2>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-6">
                Chandler and the East Valley present unique environmental challenges along major corridors like <strong>Arizona Avenue</strong>, <strong>Alma School Road</strong>, and the <strong>Loop 202</strong>. Extreme summer temperatures outside, coupled with constant indoor air conditioning, put high physical stress on structural framing, drywall, cabinetry, and tile grout. We select specific commercial-grade materials and engineering details to ensure your bathroom remodel withstands these conditions for decades.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <Droplets className="w-5 h-5" aria-hidden="true" />
                    Hard Water and Grout Scaling Defense
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    Chandler municipal water contains exceptionally high mineral levels, often exceeding 18 grains of hardness (over 300 mg/L of dissolved calcium). Evaporating water leaves behind rock-hard calcium scale. To prevent this, we specify dense, non-porous porcelain tiles and upgrade our installations to 100% solid epoxy resin grout (conforming to ANSI A118.3 standards) that completely repels mineral penetration.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5" aria-hidden="true" />
                    Vanities Engineered to Resist Swelling
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    Cheap builder-grade Medium Density Fiberboard (MDF) vanities absorb moisture during showers, causing the wood to swell, warp, and split under rapid humidity cycles. We design and install custom vanities built exclusively from multi-layered furniture-grade marine plywood boxes with solid wood face frames and heavy-duty quartz vanity tops.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    Planned Community HOA Coordination
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    In master-planned communities like <strong>Ocotillo</strong>, <strong>Fulton Ranch</strong>, and <strong>Cooper Commons</strong>, HOA rules govern contractor working hours, parking, and dumpster placement. We manage the entire HOA architectural approval submission process, protecting your driveway with wood backing boards and complying with all community rules.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <Wind className="w-5 h-5" aria-hidden="true" />
                    High-Capacity Exterior Ventilation
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    Undersized builder-grade exhaust fans fail to clear moist air, leading to mold buildup behind drywall. We calculate the exact CFM (Cubic Feet per Minute) volume requirements for your space and install high-capacity, ultra-quiet fans (rated at 110 CFM or higher) routed directly to the home's exterior.
                  </p>
                </div>
              </div>

              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-6">
                Underneath every tiled surface, we secure your home using the <strong>Schluter-KERDI waterproofing system</strong>. This vapor-impermeable sheet membrane completely isolates the tile substrate from wood framing, preventing steam from rotting wall studs.
              </p>

              <div className="mt-16 pt-16 border-t border-white/10">
                <h3 className="font-serif text-2xl font-semibold text-white mb-6">
                  Our Professional Design-Build & 3D Rendering Process
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  A successful bathroom renovation requires meticulous preparation before demolition begins. To guarantee you love the final results, we combine advanced 3D visual rendering technology with an integrated day-by-day scheduling process.
                </p>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h4 className="font-bold text-white mb-2">1. 3D Spatial Rendering & Pre-Visualization</h4>
                    <p className="text-xs text-primary-foreground/85 leading-relaxed">
                      We construct a detailed 3D color model of your bathroom's exact physical footprint. You can preview different tile patterns, accent niches, custom double vanity configurations, and quartz slabs. This visual walkthrough eliminates guesswork and ensures total alignment on the layout.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h4 className="font-bold text-white mb-2">2. Structural Plumbing & Layout Re-Routing</h4>
                    <p className="text-xs text-primary-foreground/85 leading-relaxed">
                      When converting garden tubs to walk-in showers, we inspect the subfloor framing and expand the original 1.5-inch waste line to a code-compliant 2-inch drain stack. This ensures rapid drainage and prevents water backups from modern high-flow showerheads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Accessible Baths</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-2 mb-6 text-foreground">
            ADA and Aging-in-Place Bathroom Remodeling
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Safe bathrooms do not have to look institutional. We build curbless showers, grab bars blocked into studs, comfort-height toilets, and open vanities for wheelchair approach. Popular near <strong>Chandler Regional</strong> and in <strong>Sun Lakes</strong> retirement communities.
          </p>
          <ul className="space-y-3 text-muted-foreground mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Curbless showers</strong> for wheelchair access and fewer trip hazards.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Grab bars</strong> anchored into framing, not only into tile.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Slip-resistant tile</strong> with COF 0.60 or higher on shower floors.</span>
            </li>
          </ul>
          <Link href="/ada-bathroom-remodeling/" className="text-primary font-medium hover:underline">
            View ADA bathroom remodeling services
          </Link>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">
            Bathroom Services in Chandler
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Walk-In Showers", href: "/shower-remodeling/", desc: "Tile, frameless glass, niches." },
              { title: "Tub To Shower", href: "/tub-to-shower-conversion/", desc: "Garden tub removal and new shower." },
              { title: "Master Bath", href: "/master-bathroom-remodel/", desc: "Primary suite layout and finishes." },
              { title: "Bathroom Tile", href: "/bathroom-tile-installation/", desc: "Floors, walls, epoxy grout." },
              { title: "Vanities & Quartz", href: "/bathroom-vanity-installation/", desc: "Counters and storage." },
              { title: "Small Bath", href: "/small-bathroom-remodeling/", desc: "Guest and hall baths." },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
