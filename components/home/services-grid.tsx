import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShowerHead, Bath, LayoutGrid, Sparkles, Accessibility, Layers } from "lucide-react";

const services = [
  {
    name: "Shower Remodeling",
    href: "/shower-remodeling/",
    description: "Custom curbless walk-in showers with Schluter-KERDI waterproofing, premium porcelain tile, frameless glass, and epoxy grout.",
    icon: ShowerHead,
    image: "/images/services/shower-remodeling.jpg",
    alt: "Custom walk-in shower remodel with floor-to-ceiling tile in Chandler AZ",
  },
  {
    name: "Tub to Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description: "We demolish garden tubs, expand drain lines to code, and build a custom walk-in shower. ASSE 1016 scald-prevention valves included.",
    icon: Bath,
    image: "/images/services/tub-to-shower-conversion.jpg",
    alt: "Tub to shower conversion with open walk-in design in Chandler AZ",
  },
  {
    name: "Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description: "Full primary suite renovations — double vanities, custom quartz countertops, freestanding soaking tubs, and detailed lighting under one ROC license.",
    icon: Sparkles,
    image: "/images/services/master-bathroom-remodel.jpg",
    alt: "Luxury master bathroom remodel with double vanity and soaking tub",
  },
  {
    name: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description: "Non-porous porcelain tile (ASTM C373) on floors and shower walls with solid epoxy grout (ANSI A118.3) to repel hard water minerals.",
    icon: LayoutGrid,
    image: "/images/services/bathroom-tile-installation.jpg",
    alt: "Professional bathroom tile installation with large format porcelain tiles",
  },
  {
    name: "Vanity & Countertop Installation",
    href: "/bathroom-vanity-installation/",
    description: "Custom vanities built from marine plywood with quartz or granite countertops, undermount sinks, and matte black or brass plumbing fixtures.",
    icon: Layers,
    image: "/images/services/vanity-countertop-installation.jpg",
    alt: "Double vanity installation with quartz countertop in a Chandler bathroom",
  },
  {
    name: "Small & Guest Bathroom Remodel",
    href: "/small-bathroom-remodeling/",
    description: "We maximize tight powder rooms with space-saving floating vanities, comfort-height toilets, and custom tiling to enhance light and value.",
    icon: Bath,
    image: "/images/services/small-bathroom-remodel.jpg",
    alt: "Small guest bathroom remodel with modern fixtures and bright tiling",
  },
  {
    name: "Handicap Accessible Bathroom",
    href: "/handicap-accessible-bathroom/",
    description: "ADA-compliant updates with curbless showers, structural grab bar backing, and slip-resistant mosaic tile rated COF 0.60+ for senior safety.",
    icon: Accessibility,
    image: "/images/services/handicap-accessible-bathroom.jpg",
    alt: "Handicap accessible bathroom with grab bars and curbless shower entry",
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
              className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Icon overlay badge */}
                <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <service.icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {service.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2 mt-0.5" aria-hidden="true" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{service.description}</p>
              </div>
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
