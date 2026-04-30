import * as Icons from "lucide-react";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

export default function Benefits({ title, subtitle, benefits }: BenefitsProps) {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {subtitle}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-background text-balance">
            {title}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = (Icons as any)[benefit.icon];
            return (
              <div
                key={benefit.title}
                className="text-center animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  {Icon && <Icon className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-background">
                  {benefit.title}
                </h3>
                <p className="text-background/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
