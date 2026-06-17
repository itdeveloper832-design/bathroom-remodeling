import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Tub-to-shower conversion",
    description:
      "Remove a tub (often a garden tub), reset the drain, waterproof the pan and walls, and build a walk-in shower with tile and glass. Our most requested project in Chandler.",
    href: "/tub-to-shower-conversion/",
    srText: " about Tub-to-Shower Conversions",
  },
  {
    title: "Walk-in shower with tile and glass",
    description:
      "Porcelain tile walls, shower niche, rainfall head, and frameless glass. Works well for aging in place with a low curb.",
    href: "/shower-remodeling/",
    srText: " about Shower Remodeling",
  },
  {
    title: "Master bathroom remodel",
    description:
      "Double vanity, quartz countertops, new lighting, flooring, and a larger shower. Common in Fulton Ranch and Ocotillo primary suites.",
    href: "/master-bathroom-remodel/",
    srText: " about Master Bathroom Remodeling",
  },
  {
    title: "Accessible and ADA bathroom updates",
    description:
      "Curbless showers, grab bars blocked into studs, comfort-height toilets, and slip-resistant tile (COF 0.60+).",
    href: "/ada-bathroom-remodeling/",
    srText: " about ADA Bathroom Remodeling",
  },
];

export default function PopularProjects() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <span className="text-primary text-sm font-medium tracking-wider uppercase">
          Popular Projects
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-10 text-foreground">
          What Chandler Homeowners Ask Us to Build
        </h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-border rounded-xl p-6 md:p-8 bg-card hover:border-primary/30 transition-colors"
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <Link
                href={project.href}
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                aria-label={`Learn more${project.srText}`}
              >
                Learn more
                <span className="sr-only">{project.srText}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
