import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const kitchenFeatures = [
  "Legacy cabinet design",
  "Countertop installation",
  "Island builds",
  "Backsplash & tile",
  "Lighting design",
  "Full remodels",
];

export default function LegacySection() {
  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-4 duration-1000">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Legacy Service
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance leading-tight">
              Legacy Remodeling (Unavailable)
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This legacy service is no longer offered. Please explore our bathroom remodeling
              for current offerings.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {kitchenFeatures.map((feature, index) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group h-12"
            >
              <Link href="/">
                View Bathroom Remodeling Options
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/kitchen-showcase.jpg"
                alt="Legacy remodeling project preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-xl animate-in fade-in zoom-in-95 delay-500">
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-primary">98%</span>
                <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
