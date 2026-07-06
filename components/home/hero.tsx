import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import fs from "fs";
import path from "path";

export default function Hero() {
  // Inline the mobile 640px hero image as base64 to eliminate the network request round-trip on mobile
  let base64MobileHero = "";
  try {
    const filePath = path.join(process.cwd(), "public/images/hero/luxury-shower-remodel-chandler-640.avif");
    base64MobileHero = `data:image/avif;base64,${fs.readFileSync(filePath).toString("base64")}`;
  } catch (err) {
    console.error("Failed to inline mobile hero image:", err);
  }

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-32 md:pt-36 lg:pt-40" aria-label="Hero section">
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet={base64MobileHero || "/images/hero/luxury-shower-remodel-chandler-640.avif"} media="(max-width: 640px)" type="image/avif" />
          <source srcSet="/images/hero/luxury-shower-remodel-chandler-828.avif" media="(max-width: 828px)" type="image/avif" />
          <img
            src="/images/hero/luxury-shower-remodel-chandler.avif"
            alt="Custom walk-in shower and tile bathroom remodel in Chandler AZ by ARZ Home Remodeling"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
        {/* High-contrast overlay: centered layout utilizes a deep all-over navy tint overlay for peak readability */}
        <div className="absolute inset-0 bg-primary/75 lg:bg-primary/70 hero-overlay" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-4 pb-6 lg:pt-6 lg:pb-8 flex justify-center hero-container">
        <div className="max-w-5xl mx-auto text-center text-white flex flex-col items-center hero-content">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-white text-xs md:text-sm font-semibold tracking-wide uppercase hero-badges">
            <span className="bg-accent text-accent-foreground px-3.5 py-1.5 rounded-full shadow-sm badge-gold">✓ Licensed ROC #338304</span>
            <span className="bg-white/15 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 badge-glass">✓ Bonded & Insured</span>
            <span className="bg-white/15 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 badge-glass">✓ Free In-Home Estimate</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight hero-title">
            Bathroom Remodeling in Chandler, AZ: Licensed Custom Tile & Design Contractors
          </h1>

          {/* Value Propositions */}
          <p className="text-base md:text-lg text-accent font-serif mb-3 leading-relaxed font-semibold italic max-w-2xl hero-subtitle">
            &quot;Professional Walk-In Showers, Tub-to-Shower Conversions & Custom Tile Services.&quot;
          </p>

          {/* Main Copy */}
          <p className="text-sm md:text-base text-white/90 mb-4 leading-relaxed font-light max-w-3xl hero-description">
            Licensed bathroom remodeling contractor (ROC #338304) in Chandler, AZ. If you are searching for a trusted bathroom remodel contractor near me, we build custom walk-in showers, tub-to-shower conversions, and tile installations designed to withstand desert hard water.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto items-center hero-buttons">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-7 font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 hero-btn-primary"
              aria-label={`Call us at ${siteConfig.phone} to speak with a project supervisor`}
            >
              <a href={`tel:${siteConfig.phoneClean}`}>
                📞 CALL NOW: {siteConfig.phone}
              </a>
            </Button>
            <Link 
              href="/gallery/" 
              className="text-white hover:text-accent font-semibold text-base underline transition-colors py-2 px-4 hero-btn-secondary"
            >
              Or View Completed Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
