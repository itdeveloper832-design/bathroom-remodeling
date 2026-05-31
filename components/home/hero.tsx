import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { QuoteForm } from "@/components/forms/quote-form";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-28 md:pt-36 lg:pt-40" aria-label="Hero section">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero/luxury-shower-remodel-chandler.avif"
          type="image/avif"
          fetchPriority="high"
        />
      </head>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/luxury-shower-remodel-chandler.avif"
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
        {/* High-contrast overlays for peak legibility: solid primary on mobile, elegant side-fading gradient on desktop */}
        <div className="absolute inset-0 bg-primary/85 lg:bg-gradient-to-r lg:from-primary/95 lg:via-primary/80 lg:to-primary/30" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 lg:pb-24 pt-4 md:pt-6 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-white text-sm font-medium">
                ROC Licensed #ROC338304 · Family-Owned Since {siteConfig.foundedYear}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4 text-balance">
              Licensed Bathroom Remodeling Experts Serving Chandler AZ
            </h1>

            <div className="mb-6">
              <a 
                href={siteConfig.googleBusinessLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors duration-200 group no-underline"
                aria-label={`View our ${siteConfig.googleRating} star rating with ${siteConfig.googleReviewsCount} Google Reviews`}
              >
                <span className="text-accent text-lg">★★★★★</span>
                <span className="text-base font-semibold group-hover:underline">{siteConfig.googleRating} · {siteConfig.googleReviewsCount} Google Reviews</span>
              </a>
            </div>

            <p className="text-lg md:text-lg text-white/90 mb-8 leading-relaxed font-medium italic">
              "Focused exclusively on high-quality bathroom renovations. Designed for homeowners who want their bathroom done right."
            </p>

            <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed font-light">
              Specializing in{" "}
              <Link href="/walk-in-showers/" className="font-semibold underline text-white hover:text-accent transition-colors">
                walk-in showers
              </Link>
              ,{" "}
              <Link href="/tub-to-shower-conversion/" className="font-semibold underline text-white hover:text-accent transition-colors">
                tub-to-shower conversions
              </Link>
              , and custom tile work. Licensed and insured with a 5-year workmanship warranty. We handle every detail from permits to finishing touches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold"
                aria-label="Get your free in-home bathroom remodel estimate"
              >
                <Link href="#contact">Get a Free In-Home Estimate</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-base px-8 py-6 font-semibold"
                aria-label="View completed bathroom remodel projects"
              >
                <Link href="/gallery/">View Our Work</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
