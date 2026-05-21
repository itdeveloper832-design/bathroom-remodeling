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
                Chandler and the East Valley have very hard water along routes like <strong>Arizona Avenue</strong> and <strong>Alma School Road</strong>. Summer heat outside and AC inside also stress cabinets and grout. We pick materials and details that hold up here, not just what looks good in a catalog photo.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <Droplets className="w-5 h-5" aria-hidden="true" />
                    Hard water and grout
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    Calcium buildup stains standard grout and glass. We use <strong>epoxy grout</strong> in many showers and recommend porcelain tile that cleans up fast after mineral deposits.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5" aria-hidden="true" />
                    Vanities that resist swelling
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    Cheap MDF swells when humidity spikes. We use plywood boxes and solid tops that survive daily showers in air-conditioned homes.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    HOA and dumpster rules
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    In <strong>Ocotillo</strong>, <strong>Fulton Ranch</strong>, and communities along the <strong>Loop 202</strong>, HOAs often control dumpster placement and work hours. We help with common architectural review steps.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <Wind className="w-5 h-5" aria-hidden="true" />
                    Ventilation
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    Undersized exhaust fans trap moisture and cause mold behind paint. We size fans to move air out of the room, not just make noise.
                  </p>
                </div>
              </div>

              <p className="text-primary-foreground/85 text-lg leading-relaxed">
                Behind tile we use <strong>Schluter-Kerdi</strong> membranes (or equal systems), not sheet plastic alone. That matters for long-term moisture control in Arizona baths.
              </p>
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
