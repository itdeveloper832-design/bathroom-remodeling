import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-28 md:pt-36 lg:pt-44" aria-label="Hero section">
      <div className="absolute inset-0 z-0 bg-primary/40">
        <Image
          src="/images/optimized/photo-1620626011761-996317b8d101.avif"
          alt="Custom walk-in shower and tile bathroom remodel in Chandler AZ by ARZ Home Remodeling"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
          fetchPriority="high"
          decoding="async"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 lg:pb-20 pt-4 md:pt-6 lg:pt-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-foreground/10 border border-background/20 rounded-full px-4 py-2 mb-6">
            <span className="text-background text-sm font-medium">
              ROC Licensed #ROC338304 · Family-Owned Since {siteConfig.foundedYear}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-background leading-tight mb-2 text-balance">
            Licensed Bathroom Remodeling Experts Serving Chandler AZ
          </h1>

          <div className="mb-6">
            <a 
              href={siteConfig.googleBusinessLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background hover:text-accent transition-colors duration-200 group no-underline"
              aria-label="View our 4.9 star rating with 50+ Google Reviews"
            >
              <span className="text-accent text-lg">★★★★★</span>
              <span className="text-base font-semibold group-hover:underline">4.9 · 50+ Google Reviews</span>
            </a>
          </div>

          <p className="text-lg md:text-lg text-background/90 mb-8 leading-relaxed font-medium italic">
            "Focused exclusively on high-quality bathroom renovations. Designed for homeowners who want their bathroom done right."
          </p>

          <p className="text-lg md:text-xl text-background/80 mb-10 leading-relaxed font-light">
            Specializing in{" "}
            <Link href="/walk-in-showers/" className="font-semibold underline hover:text-primary transition-colors">
              walk-in showers
            </Link>
            ,{" "}
            <Link href="/tub-to-shower-conversion/" className="font-semibold underline hover:text-primary transition-colors">
              tub-to-shower conversions
            </Link>
            , and custom tile work. Licensed and insured with a 2-year workmanship warranty. We handle every detail from permits to finishing touches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6"
              aria-label="Get your free in-home bathroom remodel estimate"
            >
              <Link href="#contact">Get a Free In-Home Estimate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-base px-8 py-6"
              aria-label="View completed bathroom remodel projects"
            >
              <Link href="/gallery/">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
