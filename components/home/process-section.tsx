import { Phone, Ruler, HardHat, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Free Consultation",
    description:
      "We meet at your home, take measurements, and talk through layout, tile, and budget.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Design & Written Estimate",
    description:
      "You get material choices and a line-item price. Permits are flagged if your scope needs them.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Construction",
    description:
      "Licensed trades as needed. Waterproofing, tile, vanities, and glass installed to plan.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Final Walkthrough",
    description:
      "We fix punch-list items and leave the bath clean before we close the job.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-background text-balance">
            How a Chandler Bathroom Remodel Works
          </h2>
          <p className="text-background/70 text-lg leading-relaxed">
            From first call to final walkthrough, here is what to expect when you work with our crew.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-background/20" />
              )}
              <div className="relative bg-background/5 border border-background/10 rounded-xl p-8 text-center">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                  {step.number}
                </span>
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-background">{step.title}</h3>
                <p className="text-background/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
