import Link from "next/link";
import { ArrowUpRight, ShowerHead, Bath, LayoutGrid, Sparkles, Accessibility } from "lucide-react";

const services = [
  {
    name: "Shower Remodeling",
    href: "/shower-remodeling/",
    description: "We build curbless, barrier-free walk-in showers. Our crew installs the vapor-tight Schluter-KERDI waterproofing membrane to isolate framing from moisture. We set premium porcelain tile with chemical-resistant epoxy grout to protect your space from water damage and desert slab movement.",
    icon: ShowerHead,
  },
  {
    name: "Tub to Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description: "We demolish old garden tubs, inspect the subfloor framing, and saw-cut the concrete slab to expand the waste line. We upgrade the original 1.5-inch drain to a code-compliant 2-inch line under the 2021 International Residential Code. We also install ASSE 1016 scald-prevention valves.",
    icon: Bath,
  },
  {
    name: "Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description: "We manage complete primary suite renovations. This includes layout moves, double vanities constructed from furniture-grade marine plywood, custom quartz countertops, freestanding soaking tubs, and detailed lighting grids. We handle the entire design-build process under our ROC license.",
    icon: Sparkles,
  },
  {
    name: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description: "We lay non-porous porcelain tile (ASTM C373 water absorption under 0.5%) on bathroom floors and shower walls. We use solid epoxy resin grout (ANSI A118.3) to repel hard water minerals, preventing the heavy white scale scale and discoloration typical in East Valley homes.",
    icon: LayoutGrid,
  },
  {
    name: "Vanity & Countertop Installation",
    href: "/bathroom-vanity-installation/",
    description: "We build and install custom bathroom vanities using multi-layered plywood boxes that resist swelling in desert humidity. We install quartz or granite countertops with undermount sinks, new brass or matte black plumbing fixtures, and integrated storage to fit your layout.",
    icon: LayoutGrid,
  },
  {
    name: "Small & Guest Bathroom Remodel",
    href: "/small-bathroom-remodeling/",
    description: "We optimize tight powder rooms and guest baths to maximize floor space and resale value. We install space-saving floating vanities, comfort-height toilets, and bright custom tiling to make the space feel larger. We handle all plumbing adjustments with flexible PEX supply lines.",
    icon: Bath,
  },
  {
    name: "Handicap Accessible Bathroom",
    href: "/handicap-accessible-bathroom/",
    description: "We design safe, elegant, ADA-compliant accessibility updates. We install low-profile and curbless entries, secure structural stud backing for grab bars, and lay slip-resistant mosaic floor tile with a high COF rating of 0.60 or more. We serve seniors near Chandler Regional Medical Center.",
    icon: Accessibility,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-secondary" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
            What Does Bathroom Remodeling Include?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Licensed <strong>bathroom remodeling in Chandler AZ</strong> covers showers, conversions, tile, vanities, lighting, and full room updates. Pick a service below or call for a whole-bath plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group block bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors"
          >
            See All Services
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
