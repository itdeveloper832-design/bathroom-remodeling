import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-28 md:pt-36 lg:pt-40" aria-label="Hero section">
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
          decoding="sync"
          loading="eager"
        />
        {/* High-contrast overlay: centered layout utilizes a deep all-over navy tint overlay for peak readability */}
        <div className="absolute inset-0 bg-primary/75 lg:bg-primary/70" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16 lg:py-28 flex justify-center">
        <div className="max-w-4xl mx-auto text-center text-white flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-white text-xs md:text-sm font-medium">
              ROC Licensed #ROC338304 · Family-Owned Since {siteConfig.foundedYear}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 text-balance">
            Custom Bathroom Remodeling Built to Last
          </h1>

          {/* Google Review Stars */}
          <div className="mb-8">
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

          {/* Quote Block */}
          <p className="text-lg md:text-xl text-accent font-serif mb-8 leading-relaxed font-semibold italic max-w-2xl">
            &quot;Focused exclusively on high-quality bathroom renovations. Designed for homeowners who want their bathroom done right.&quot;
          </p>

          {/* Main Copy */}
          <p className="text-base md:text-lg text-white/85 mb-10 leading-relaxed font-light max-w-3xl">
            Specializing in master-crafted{" "}
            <Link href="/walk-in-showers/" className="font-semibold underline text-white hover:text-accent transition-colors">
              walk-in showers
            </Link>
            ,{" "}
            <Link href="/tub-to-shower-conversion/" className="font-semibold underline text-white hover:text-accent transition-colors">
              tub-to-shower conversions
            </Link>
            , and custom tile design. We use vapor-tight Schluter-KERDI waterproofing systems and stain-resistant epoxy grouting engineered to resist Arizona&apos;s hard water minerals. Every project is backed by a 2-year workmanship warranty and fixed-price contracts.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-semibold"
              aria-label={`Call us at ${siteConfig.phone} to get your free in-home bathroom remodel estimate`}
            >
              <a href={`tel:${siteConfig.phoneClean}`}>Get a Free In-Home Estimate</a>
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
      </div>
    </section>
  );
}
