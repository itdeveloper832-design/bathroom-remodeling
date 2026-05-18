import { Sparkles, Clock, DollarSign, HeartHandshake, Ruler, Shield } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Expert Craftsmanship",
    description:
      "Our master craftsmen bring decades of combined experience to every project, ensuring flawless execution and stunning results.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description:
      "We respect your time with detailed project timelines and a commitment to finishing on schedule, every time.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees or surprises. Get detailed, upfront quotes that include everything from materials to final cleanup.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Service",
    description:
      "Work directly with our design team to bring your vision to life with custom solutions tailored to your needs.",
  },
  {
    icon: Ruler,
    title: "Premium Materials",
    description:
      "We source only the finest materials from trusted suppliers, ensuring durability and timeless beauty.",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description:
      "Stand behind our work with comprehensive warranties that give you peace of mind for years to come.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
            Top-Rated Bathroom Remodeling in Chandler, AZ
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            When searching for a reliable team, you deserve contractors who prioritize craftsmanship, transparency, and timelines. We proudly serve homeowners throughout Chandler and the East Valley, delivering custom designs tailored to your aesthetic and budget. As proud members of <a href="https://www.nari.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">NARI</a> and fully licensed with the <a href="https://roc.az.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Arizona Registrar of Contractors</a>, we handle every detail, from obtaining local permits to the final quality inspection. Whether you need a full renovation or custom <a href="/shower-remodeling/" className="text-primary hover:underline font-medium">shower remodeling</a>, our experts deliver lasting quality.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
