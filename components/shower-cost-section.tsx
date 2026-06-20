import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

interface CostRow {
  projectType: string;
  range: string;
  included: string;
}

const costData: CostRow[] = [
  {
    projectType: "Shower tile replacement (same footprint)",
    range: "Standard Level",
    included: "Demo, waterproofing check, new porcelain tile, epoxy grout, caulk",
  },
  {
    projectType: "New walk-in tile shower",
    range: "Mid-Range Scope",
    included: "Full demo, Schluter waterproofing, tile, niche, frameless glass panel",
  },
  {
    projectType: "Tub-to-shower conversion",
    range: "Mid-Range Scope",
    included: "Tub removal, drain reset, waterproofing, tile, glass door or panel",
  },
  {
    projectType: "Curbless / ADA shower",
    range: "Luxury Custom Scope",
    included: "Linear drain, sloped pan, slip-resistant tile, grab bars, optional glass",
  },
  {
    projectType: "Master bath shower expansion",
    range: "Luxury Custom Scope",
    included: "Layout changes, plumbing relocation, large-format tile, rainfall head",
  },
];

export default function ShowerCostSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-semibold mb-4 text-foreground">
            How Much Does Shower Remodeling Cost in Chandler, AZ?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Shower remodeling updates vary in scope based on sizing, tile choice, glass type, and layout adjustments. We provide free on-site consultations to prepare detailed, line-item written estimates.
          </p>
        </div>

        <div className="overflow-x-auto mb-8 border border-border rounded-2xl">
          <table className="w-full">
            <thead>
              <tr className="bg-background border-b border-border">
                <th className="px-6 py-4 text-left font-semibold text-foreground">Project Type</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Project Scope</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">What's Included</th>
              </tr>
            </thead>
            <tbody>
              {costData.map((row, index) => (
                <tr key={index} className="border-b border-border last:border-b-0 hover:bg-background/50 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">{row.projectType}</td>
                  <td className="px-6 py-4 text-primary font-semibold">{row.range}</td>
                  <td className="px-6 py-4 text-foreground/80 text-sm">{row.included}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-background rounded-2xl p-8 border border-border mb-8">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
            Closing Note
          </h3>
          <p className="text-foreground/90 mb-4 leading-relaxed">
            These are Chandler-area ranges based on our recent projects. Your price depends on your existing layout, tile selection, and whether we need to move plumbing or pull a permit. We provide a written line-item estimate before any work starts, with no vague "allowances."
          </p>
          <a
            href={`tel:${siteConfig.phoneClean}`}
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Call Now for a Written Estimate: {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
