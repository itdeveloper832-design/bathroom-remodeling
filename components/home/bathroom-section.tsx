import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const bathroomFeatures = [
  "Custom Shower Designs",
  "Tub-to-Shower Conversions",
  "Vanity & Cabinet Installation",
  "Tile & Flooring",
  "Lighting & Fixtures",
  "Complete Remodels",
];

export default function BathroomSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/bathroom-showcase.jpg"
                alt="Luxury bathroom remodel featuring walk-in shower in Chandler, Arizona"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-xl animate-in fade-in slide-in-from-bottom-4 delay-300">
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-primary">500+</span>
                <span className="text-sm text-muted-foreground">Bathrooms Transformed</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Specialty
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
              Expert Bathroom Remodeling in Chandler, Arizona
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Your bathroom should be a sanctuary. Our comprehensive remodeling approach transforms 
              outdated spaces into stunning retreats that combine functionality with timeless elegance. 
              From walk-in showers to complete renovations, we bring your vision to life.
            </p>

            {/* Features List */}
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

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              <Link href="/bathroom-remodeling">
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
