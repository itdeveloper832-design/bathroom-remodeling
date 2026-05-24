import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const bathroomFeatures = [
  "Walk-in shower remodels",
  "Tub-to-shower conversions",
  "Vanity and quartz tops",
  "Porcelain tile floors and walls",
  "Bathroom lighting upgrades",
  "Full bath and master suite remodels",
];

export default function BathroomSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/optimized/photo-1600566752355-35792bedcfea.webp"
                alt="Tiled walk-in shower bathroom remodel in Chandler Arizona"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-primary">500+</span>
                <span className="text-sm text-muted-foreground">Bathrooms Completed</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Focus</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
              Custom Tile Bathrooms Built for Daily Use
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We build real tile showers and full bath remodels, not one-day acrylic-only installs. Your bathroom should be easy to clean, safe to step into, and sized for how you actually live. We handle layout, waterproofing, tile, glass, vanities, and final details.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {bathroomFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
              <Link href="/bathroom-remodeling/">
                Explore Bathroom Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
