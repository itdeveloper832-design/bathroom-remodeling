import {
  Lightbulb,
  Droplets,
  Palette,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const tips = [
  {
    icon: Lightbulb,
    title: "Lighting Matters",
    description: "Layer different types of lighting for the best ambiance and functionality."
  },
  {
    icon: Droplets,
    title: "Ventilation is Key",
    description: "Proper ventilation prevents moisture damage and maintains air quality."
  },
  {
    icon: Palette,
    title: "Choose Timeless Colors",
    description: "Neutral colors provide flexibility and won't go out of style quickly."
  },
  {
    icon: Shield,
    title: "Invest in Quality",
    description: "High-quality fixtures and materials save money in the long run."
  }
];

type TipItem = string | { icon?: LucideIcon; title: string; description: string };

interface TipsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  tips?: TipItem[];
}

function normalizeTip(tip: TipItem, index: number) {
  if (typeof tip === "string") {
    return {
      icon: Sparkles,
      title: `Tip ${index + 1}`,
      description: tip,
    };
  }

  return {
    icon: tip.icon ?? Lightbulb,
    title: tip.title,
    description: tip.description,
  };
}

export default function Tips({
  title = "Expert Tips",
  subtitle,
  description = "Professional advice to help you make the best decisions for your bathroom remodel.",
  tips: customTips,
}: TipsProps) {
  const tipsToRender = customTips ?? tips;

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {subtitle && (
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
                {subtitle}
              </p>
            )}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tipsToRender.map((tip, index) => {
              const normalizedTip = normalizeTip(tip, index);
              const Icon = normalizedTip.icon;
              return (
                <div
                  key={`${normalizedTip.title}-${index}`}
                  className="text-center animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                    {normalizedTip.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {normalizedTip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}