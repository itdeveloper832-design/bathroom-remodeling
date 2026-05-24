import Link from "next/link";
import { ArrowUpRight, ShowerHead, Bath, LayoutGrid, Sparkles, Accessibility } from "lucide-react";

const services = [
  {
    name: "Shower Remodeling",
    href: "/shower-remodeling/",
    description: "Custom tile showers, frameless glass, shower niches, and Schluter waterproofing.",
    icon: ShowerHead,
  },
  {
    name: "Tub to Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description: "Replace an unused tub with a walk-in shower. Common for garden tubs in Chandler ranch homes.",
    icon: Bath,
  },
  {
    name: "Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description: "Layout updates, double vanity, quartz tops, lighting, and a larger primary shower.",
    icon: Sparkles,
  },
  {
    name: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description: "Porcelain floors and shower walls, epoxy grout, and slip-resistant finishes.",
    icon: LayoutGrid,
  },
  {
    name: "Vanity & Countertop Installation",
    href: "/bathroom-vanity-installation/",
    description: "Floating vanities, quartz countertops, and plywood boxes that hold up in desert humidity.",
    icon: LayoutGrid,
  },
  {
    name: "Small & Guest Bathroom Remodel",
    href: "/small-bathroom-remodeling/",
    description: "Tight layouts, powder rooms, and hall baths with space-saving design.",
    icon: Bath,
  },
  {
    name: "Handicap Accessible Bathroom",
    href: "/handicap-accessible-bathroom/",
    description: "ADA-compliant designs with curbless showers, grab bars, and accessible vanities.",
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
