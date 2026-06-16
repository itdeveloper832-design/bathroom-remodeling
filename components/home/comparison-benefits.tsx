import { Check, X, ShieldAlert, Award, Sparkles, AlertCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const keyDifferentiators = [
  {
    icon: Award,
    title: "Real Hand-Laid Tile (No Hollow Plastic)",
    description:
      "We design custom showers using dense porcelain, glass, or natural stone sourced from Arizona Tile. There are no hollow molded plastic shells, giving you a lifetime of structural durability and premium aesthetics.",
  },
  {
    icon: Sparkles,
    title: "Vapor-Tight Schluter-Kerdi Barriers",
    description:
      "National brands glue sheets to your old drywall. ARZ strips your shower to the studs and installs a complete, vapor-impermeable Schluter-Kerdi waterproofing membrane—protecting your framing from Arizona's high humidity.",
  },
  {
    icon: ShieldAlert,
    title: "Mineral-Resistant Epoxy Resin Grout",
    description:
      "Chandler hard water easily stains standard cement grout used by other contractors. We use non-porous epoxy grout that completely repels calcium scaling, soap scum, and mold spores without ever needing annual resealing.",
  },
];

const compareTable = [
  {
    feature: "Waterproofing Barrier",
    acrylic: "Glue-down plastic sheet over standard drywall (Moisture Trap Risk)",
    tile: "Vapor-impermeable Schluter-Kerdi membrane system (Vapor-Tight)",
    isTileBetter: true,
  },
  {
    feature: "Base Structure & Support",
    acrylic: "Hollow, flexible acrylic tray (can flex, squeak, and crack over time)",
    tile: "Solid sloped mortar bed with high-traction, solid stone/tile layout",
    isTileBetter: true,
  },
  {
    feature: "Mineral & Grout Defense",
    acrylic: "Heavy silicone caulk joints that yellow and harbor mildew in hard water",
    tile: "Stain-resistant epoxy resin grout that repels calcium scaling",
    isTileBetter: true,
  },
  {
    feature: "Material Feel & Value (ROI)",
    acrylic: "Hollow plastic feel; generic motel look; adds very little home equity",
    tile: "Premium hand-laid porcelain or quartz; adds 60-80% value return",
    isTileBetter: true,
  },
  {
    feature: "Design Customization",
    acrylic: "Limited to catalog molds, pre-built colors, and basic sizes",
    tile: "Infinite shapes, built-in tiled niches, benches, and layout styling",
    isTileBetter: true,
  },
  {
    feature: "Typical Lifespan",
    acrylic: "5–10 years before plastic yellows, scratches, or adhesive fails",
    tile: "Lifetime durability backed by a solid 5-Year Workmanship Warranty",
    isTileBetter: true,
  },
];

export default function ComparisonBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden" id="tile-vs-acrylic">
      {/* Decorative Blur Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
            Homeowner Education
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
            Real Custom Tile vs. Rushed 1-Day Acrylic Surrounds
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Many national brands (like West Shore Home or DaBella) push "one-day bath" installs. 
            What they don't tell you is they install cheap, hollow prefabricated plastic walls. 
            ARZ builds **real custom tile showers** designed to withstand Arizona hard water for a lifetime.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Education / Pitch */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-xs">The Competitive Moat</span>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mt-2 mb-4">
                Real Tile. Not Acrylic surrounds.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Cheap acrylic shower walls are hollow and glued together using generic builder adhesives. In Chandler's dry heat and hard water environment, these adhesives degrade, trapping hot vapor behind the plastic panels—which creates the perfect breeding ground for toxic black mold.
              </p>
            </div>

            <div className="space-y-6">
              {keyDifferentiators.map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all hover:shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20 flex gap-3.5">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">Beware of the "One-Day" Trap</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A rushed 1-day crew cannot perform high-fidelity structural inspections, frame leveling, or physical shower floor sloped sub-base waterproofing. True longevity requires precise, code-compliant craftsmanship.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Grid Table */}
          <div className="lg:col-span-7 bg-card border border-border rounded-2xl p-6 lg:p-10 shadow-xl">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-2 text-foreground text-center">
              The Reality of Showers
            </h3>
            <p className="text-xs text-muted-foreground text-center mb-8">
              Compare hand-crafted local tile work against national franchise prefabricated inserts.
            </p>

            <div className="space-y-6">
              {compareTable.map((row) => (
                <div key={row.feature} className="border-b border-border/60 pb-5 last:border-0 last:pb-0">
                  <h4 className="font-bold text-foreground text-sm uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <span>✨</span> {row.feature}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Prefab column */}
                    <div className="p-3.5 rounded-lg bg-accent/5 border border-border/40 text-xs">
                      <div className="flex items-center gap-1.5 text-red-500 font-bold mb-1.5">
                        <X className="w-4 h-4 shrink-0" />
                        <span>Prefab Prefab surrounds</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{row.acrylic}</p>
                    </div>

                    {/* ARZ Tile column */}
                    <div className="p-3.5 rounded-lg bg-primary/5 border border-primary/20 text-xs shadow-inner">
                      <div className="flex items-center gap-1.5 text-primary font-bold mb-1.5">
                        <Check className="w-4 h-4 shrink-0" />
                        <span>ARZ Custom Tile</span>
                      </div>
                      <p className="text-foreground leading-relaxed font-medium">{row.tile}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3.5 text-base font-semibold shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                Choose Real Custom Tile — Request a Free Estimate
              </a>
            </div>
          </div>
        </div>

        {/* Local Codes Footer */}
        <div className="mt-20 max-w-4xl mx-auto text-center border-t border-border pt-10">
          <p className="text-muted-foreground text-lg leading-relaxed">
            All our custom tile showers follow strict{" "}
            <a
              href="https://www.chandleraz.gov/business/building-and-development/building-permits-and-inspections"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              City of Chandler building codes
            </a>{" "}
            and ANSI A108 tile installation standards. Read our dedicated{" "}
            <Link href="/blog/porcelain-vs-ceramic-tile-arizona-shower/" className="text-primary hover:underline font-semibold">
              Porcelain vs. Ceramic Tile Shower Guide
            </Link>{" "}
            to see why our materials resist hard water scaling.
          </p>
        </div>
      </div>
    </section>
  );
}
