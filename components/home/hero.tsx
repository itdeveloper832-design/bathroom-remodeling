import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Star, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";



const trustBadges = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "15+ Years Experience" },
  { icon: Clock, label: "On-Time Guarantee" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-28 md:pt-32 lg:pt-36" aria-label="Hero section">
      {/* Background Image - LCP Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/optimized/photo-1620626011761-996317b8d101.webp"
          alt="Modern master bathroom remodeling project in Chandler AZ"
          fill
          className="object-cover"
          priority={true}
          sizes="100vw"
          quality={90}
          fetchPriority="high"
          // decoding sync so the browser prioritizes rendering the critical LCP image
          decoding="sync"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 lg:pb-20 pt-4 md:pt-6 lg:pt-8">
        <div className="max-w-4xl">
          {/* Hero Content */}
          <div>
            {/* Rating Badge - static stars, avoids mapping array on every render */}
            <div className="inline-flex items-center gap-2 bg-foreground/10 border border-background/20 rounded-full px-4 py-2 mb-8">
              <div className="flex" aria-hidden="true">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
              </div>
              <span className="text-background text-sm font-medium">
                4.9 Rating on Google Reviews
              </span>
            </div>

            {/* Headline - Accessible H1 */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-background leading-tight mb-6 text-balance focus-visible:outline-none">
              #1 Bathroom Remodeling Contractors in Chandler, AZ
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-background/80 mb-10 leading-relaxed font-light">
              Transform your daily routine with a luxury bathroom designed for your lifestyle. As expert <Link href="/" className="font-semibold underline hover:text-primary transition-colors">bathroom remodeling contractors</Link> in Chandler, we are <strong>ROC Licensed</strong> specialists in <Link href="/shower-remodeling/" className="font-semibold underline hover:text-primary transition-colors">walk-in shower remodeling</Link>, <Link href="/tub-to-shower-conversion/" className="font-semibold underline hover:text-primary transition-colors">tub to shower conversions</Link>, and master bath renovations. Get a free, itemized estimate today.
            </p>

            {/* CTA Buttons - Accessible */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Get your free bathroom remodel estimate"
              >
                <Link href="#contact">Get a Free Estimate</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-base px-8 py-6 focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="View our portfolio of completed bathroom remodels"
              >
                <Link href="/gallery/">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
