import Link from "next/link";
import { Shield, Clock, DollarSign, Droplets, HardHat, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "AZ Licensed Contractor (ROC #338304)",
    description:
      "We are licensed with the Arizona Registrar of Contractors. Every electrical, plumbing, and framing change meets the 2021 International Residential Code. We handle municipal permits directly at the Chandler Development Services office on Buffalo St.",
  },
  {
    icon: Droplets,
    title: "Vapor-Tight Schluter-KERDI Substrates",
    description:
      "We install the complete Schluter-KERDI vapor-tight membrane system behind your tile. This membrane isolates wood studs from steam, preventing mold and wood rot. It also handles natural desert framing shifts without cracking grout.",
  },
  {
    icon: Clock,
    title: "2-Year Workmanship Warranty",
    description:
      "We stand behind our craftsmanship with a written 2-year warranty on all installations. From the plumbing valves inside the wall to the custom tile joints outside, if anything fails due to our work, we repair it at zero cost.",
  },
  {
    icon: HardHat,
    title: "Hard Water Scale Defense",
    description:
      "Chandler water averages 18 to 22 grains of hardness. We defend your investment by using non-porous porcelain tile (ASTM C373) and solid epoxy resin grout (ANSI A118.3). This grout repels scale, stains, and acid cleaners for years.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
            Why Chandler Homeowners Hire ARZ
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            You deserve a bathroom contractor who shows up prepared, pulls permits when needed, and finishes what they start. We are{" "}
            <a href="https://www.nari.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              NARI
            </a>{" "}
            members and hold an active{" "}
            <a href="https://roc.az.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              Arizona ROC
            </a>{" "}
            license (ROC338304). From a{" "}
            <Link href="/shower-remodeling/" className="text-primary hover:underline font-medium">
              shower remodel
            </Link>{" "}
            to a full primary bath, we handle permits, inspections, and punch list before we leave.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
