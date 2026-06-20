import { Card } from "@/components/ui/card";

interface ShowerType {
  title: string;
  description: string;
  priceRange: string;
}

interface ShowerTypesProps {
  title?: string;
  subtitle?: string;
}

const showerTypes: ShowerType[] = [
  {
    title: "Walk-In Tile Showers",
    description:
      "Custom porcelain or natural stone tile showers with a low curb or curbless entry. We handle waterproofing, niche installation, bench framing, and frameless glass. Most popular upgrade in Chandler homes replacing old fiberglass surrounds.",
    priceRange: "Mid-Range Scope",
  },
  {
    title: "Frameless Glass Shower Enclosures",
    description:
      "Frameless glass panels cut to your exact opening, leaving no aluminum channels collecting soap scum. Works on new tile installs and retrofits. Clear, low-iron, or frosted glass options. Most homeowners in Fulton Ranch and Ocotillo request frameless for a clean, modern look.",
    priceRange: "Standard to Custom Upgrade",
  },
  {
    title: "Curbless / Zero-Threshold Showers",
    description:
      "A curbless shower in Chandler eliminates the step-over lip, which is ideal for aging in place, ADA compliance, or just a cleaner look. We slope the pan floor to a linear or center drain and install slip-resistant tile (COF 0.60+). Common in Sun Lakes and near Chandler Regional Medical Center.",
    priceRange: "Luxury Custom Scope",
  },
  {
    title: "Tub-to-Shower Conversion",
    description:
      "Remove an unused garden tub, reset the drain, waterproof the floor pan and walls with Schluter-Kerdi, and build a full walk-in shower in the same footprint. Our most-requested project in older Chandler ranch homes.",
    priceRange: "Mid-Range Scope",
  },
  {
    title: "Shower Tile Replacement",
    description:
      "Cracked grout, failing caulk, or stained builder-grade tile? We demo the old tile down to the substrate, inspect for moisture damage, re-waterproof if needed, and install new porcelain. Chandler's hard water destroys standard grout fast, so we recommend epoxy grout on all shower walls.",
    priceRange: "Standard Level",
  },
  {
    title: "Master Bath Shower Upgrades",
    description:
      "Expand a small master shower into a double-entry or rain-head shower. Relocate the valve, add a bench, or convert a soaking tub alcove into a wet room. Popular in Chandler master suites built in the 2000s that have outdated tile and low ceilings.",
    priceRange: "Luxury Custom Scope",
  },
];

export default function ShowerTypes({ title = "Types of Shower Remodels We Do in Chandler, AZ", subtitle }: ShowerTypesProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-semibold mb-4 text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {showerTypes.map((showerType, index) => (
            <Card key={index} className="p-8 bg-secondary border-border hover:border-primary transition-colors">
              <div className="mb-4">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {showerType.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-4">
                  Project Scope: {showerType.priceRange}
                </p>
              </div>
              <p className="text-foreground/90 leading-relaxed text-sm">
                {showerType.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
