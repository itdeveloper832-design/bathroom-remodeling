import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-24 md:pt-28 lg:pt-32" aria-label="Hero section">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/luxury-shower-remodel-chandler.avif"
          srcSet="/images/hero/luxury-shower-remodel-chandler-640.avif 640w, /images/hero/luxury-shower-remodel-chandler-828.avif 828w, /images/hero/luxury-shower-remodel-chandler.avif 1200w"
          sizes="100vw"
          alt="Custom walk-in shower and tile bathroom remodel in Chandler AZ by ARZ Home Remodeling"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="sync"
        />
        {/* High-contrast overlay: centered layout utilizes a deep all-over navy tint overlay for peak readability */}
        <div className="absolute inset-0 bg-primary/75 lg:bg-primary/70" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-12 pb-16 lg:pt-16 lg:pb-20 flex justify-center">
        <div className="max-w-4xl mx-auto text-center text-white flex flex-col items-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-white text-xs md:text-sm font-semibold tracking-wide uppercase">
            <span className="bg-accent text-accent-foreground px-3.5 py-1.5 rounded-full shadow-sm">✓ Licensed ROC #338304</span>
            <span className="bg-white/15 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">✓ Bonded & Insured</span>
            <span className="bg-white/15 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">✓ Free In-Home Estimate</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 text-balance tracking-tight">
            Bathroom Remodeling Chandler AZ
          </h1>

          {/* Value Propositions */}
          <p className="text-lg md:text-xl text-accent font-serif mb-6 leading-relaxed font-semibold italic max-w-2xl">
            &quot;Professional Walk-In Showers, Tub-to-Shower Conversions & Custom Tile Services.&quot;
          </p>

          {/* Main Copy */}
          <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed font-light max-w-3xl">
            Need a reliable local bathroom contractor? We specialize in master-crafted{" "}
            <Link href="/walk-in-showers/" className="font-semibold underline text-accent hover:text-white transition-colors">
              walk-in showers
            </Link>
            , safety{" "}
            <Link href="/tub-to-shower-conversion/" className="font-semibold underline text-accent hover:text-white transition-colors">
              tub to shower conversions
            </Link>
            , and custom tile installations. Engineered for Chandler&apos;s hard water using vapor-tight Schluter waterproofing and stain-resistant epoxy grouting. Backed by our 2-year workmanship warranty.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-7 font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              aria-label={`Call us at ${siteConfig.phone} to speak with a project supervisor`}
            >
              <a href={`tel:${siteConfig.phoneClean}`}>
                📞 CALL NOW: {siteConfig.phone}
              </a>
            </Button>
            <Link 
              href="/gallery/" 
              className="text-white hover:text-accent font-semibold text-base underline transition-colors py-2 px-4"
            >
              Or View Completed Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
