import { Lightbulb } from "lucide-react";

interface TipsProps {
  title: string;
  subtitle: string;
  description: string;
  tips: string[];
}

export default function Tips({ title, subtitle, description, tips }: TipsProps) {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              {subtitle}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance leading-tight">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tips List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
