import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Star, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// QuoteForm deferred - large component with Firebase deps, loaded after hero paints
// Note: ssr:false is only valid in Client Components; hero.tsx is a Server Component
const QuoteForm = dynamic(() => import("@/components/forms/quote-form").then(mod => mod.QuoteForm), {
  loading: () => <div className="h-[500px] bg-card/50 animate-pulse rounded-xl" aria-label="Loading quote form..." />,
});

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
          sizes="(max-width: 768px) 100vw, 1920px"
          quality={50}
          fetchPriority="high"
          // decoding sync so the browser prioritizes rendering the critical LCP image
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 lg:pb-20 pt-4 md:pt-6 lg:pt-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="lg:col-span-2">
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
              Chandler Bathroom Remodeling | Top Bathroom Remodel Chandler
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-background/80 mb-10 leading-relaxed font-light">
              Experience the best <strong>bathroom remodeling in Chandler</strong> with our expert team. As your local <strong>bathroom remodelers in Chandler AZ</strong>, we deliver stunning results for any <strong>bathroom remodel in Chandler AZ</strong>. From luxury shower renovations to quick tub-to-shower conversions, we are the licensed experts you can trust.
            </p>

            {/* CTA Buttons - Accessible */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Get your free bathroom remodel estimate"
              >
                <Link href="/contact/">Get Your Free Estimate</Link>
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

          {/* Right Column - Quote Form - Dynamically Loaded */}
          <div className="lg:block">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
