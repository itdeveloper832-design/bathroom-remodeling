import { Wrench, ShieldAlert, Award, MapPin } from "lucide-react";

interface ProjectCaseStudy {
  location: string;
  projectType: string;
  problem: string;
  fix: string;
  result: string;
}

const projects: ProjectCaseStudy[] = [
  {
    location: "Ocotillo, Chandler",
    projectType: "Tub-to-Shower Conversion",
    problem: "Outdated garden tub was unused and taking up valuable floor space in a tight master bathroom layout.",
    fix: "Removed the tub, recessed the floor joists to install a flat base, reset the drain, and completed a frameless walk-in shower with custom porcelain tile and premium waterproofing.",
    result: "Homeowner reclaimed 12 sq ft of floor space and gained a safer, highly functional, and beautiful daily walk-in shower.",
  },
  {
    location: "Fulton Ranch, Chandler",
    projectType: "Luxury Master Bathroom Remodel",
    problem: "Outdated 1995 double vanity and leaking gold fixtures with severe municipal hard water scale buildup.",
    fix: "Installed modern double vanities made of premium wood, high-density quartz countertops, and a custom tile shower utilizing epoxy grout defense.",
    result: "Created a modern desert-spa retreat that resists hard water mineral deposits and dramatically simplified daily cleanup.",
  },
  {
    location: "Sun Lakes, Chandler",
    projectType: "Handicap Accessible Shower",
    problem: "A high 16-inch step-in bathtub wall created a major slip hazard and barrier for an elderly senior aging in place.",
    fix: "Converted the tub into a zero-threshold, barrier-free curbless roll-in shower. Installed solid structural backing, certified grab bars, and non-slip mosaic tile flooring.",
    result: "Homeowner achieved total bathing independence and peace of mind under complete ADA-compliance guidelines.",
  },
];

export default function ChandlerProjects() {
  return (
    <section className="py-20 lg:py-32 bg-background border-t border-border" aria-label="Real Chandler Projects">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase bg-primary/5 px-4 py-1.5 rounded-full">
            Local Proof
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 text-foreground text-balance">
            Real Chandler Projects & Case Studies
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            See how ARZ Home Remodeling resolves actual bathroom layouts and plumbing challenges for our neighbors in local Chandler master-planned communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Accent Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/20 transition-colors pointer-events-none" />
              
              <div>
                {/* Header Info */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {project.projectType}
                    </h3>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className="space-y-5 my-6">
                  {/* Problem */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldAlert className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Problem</h4>
                      <p className="text-foreground/90 text-sm leading-relaxed">{project.problem}</p>
                    </div>
                  </div>

                  {/* Fix */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Wrench className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Our Solution</h4>
                      <p className="text-foreground/90 text-sm leading-relaxed">{project.fix}</p>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Result</h4>
                      <p className="text-foreground/90 text-sm leading-relaxed font-medium">{project.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
