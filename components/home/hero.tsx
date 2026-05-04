import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Star, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// QuoteForm deferred - it's a large component with Firebase deps and is below the fold of mobile
const QuoteForm = dynamic(() => import("@/components/forms/quote-form").then(mod => mod.QuoteForm), {
  loading: () => <div className="h-[500px] bg-card/50 animate-pulse rounded-xl" aria-label="Loading quote form..." />,
  ssr: false, // Form state is client-only; skip SSR to reduce server render time
});

const trustBadges = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "15+ Years Experience" },
  { icon: Clock, label: "On-Time Guarantee" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-36 md:pt-44 lg:pt-52" aria-label="Hero section">
      {/* Background Image - LCP Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/optimized/photo-1620626011761-996317b8d101.webp"
          alt="Modern master bathroom remodeling project in Chandler AZ"
          fill
          className="object-cover"
          priority={true}
          sizes="100vw"
          quality={85}
          fetchPriority="high"
          // decoding async so main thread is not blocked while GPU decodes this large image
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 lg:pb-20 pt-10 md:pt-16 lg:pt-20">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="lg:col-span-2">
            {/* Rating Badge - static stars, avoids mapping array on every render */}
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-8">
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
              Bathroom Remodeling in Chandler AZ
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-background/80 mb-10 leading-relaxed font-light">
              Transform your home with the leading experts in <strong>bathroom remodeling in Chandler AZ</strong>. 
              Whether you need a comprehensive update or a quick tub replacement, 
              we deliver stunning, high-quality results. 
              Licensed and insured with over 15 years of local experience.
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
