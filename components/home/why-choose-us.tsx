import Link from "next/link";
import { Shield, Clock, DollarSign, Droplets, HardHat, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed Work in Wet Areas",
    description:
      "Plumbing and electrical changes are done to Chandler code by licensed trades, not guesswork.",
  },
  {
    icon: Droplets,
    title: "Waterproofing First",
    description:
      "Schluter-Kerdi (or equal) behind tile so water does not sit in the wall cavity.",
  },
  {
    icon: Clock,
    title: "Clear Schedule",
    description:
      "You get a day-by-day plan before demo. You know when the shower is offline.",
  },
  {
    icon: HardHat,
    title: "Respect for Your Home",
    description:
      "Floor protection, daily cleanup, and work hours that fit HOA rules in planned communities.",
  },
  {
    icon: DollarSign,
    title: "Written Line-Item Estimates",
    description:
      "No vague allowances. Materials and labor are spelled out before you sign.",
  },
  {
    icon: FileCheck,
    title: "5-Year Workmanship Warranty",
    description:
      "We stand behind our Schluter-Kerdi waterproofing systems with an industry-leading 5-year warranty on custom tile showers.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
