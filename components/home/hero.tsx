import Link from "next/link";
import Image from "next/image";
import { Star, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/forms/quote-form";

const trustBadges = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "15+ Years Experience" },
  { icon: Clock, label: "On-Time Guarantee" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 md:pt-40 lg:pt-48" aria-label="Hero section">
      {/* Background Image - LCP Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop&fm=webp"
          alt="Luxury bathroom remodel in Chandler, Arizona - best bathroom remodelers near me"
          fill
          className="object-cover"
          priority={true}
          sizes="100vw"
          quality={80}
          loading="eager"
          placeholder="empty"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="lg:col-span-2">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-background text-sm font-medium">
                4.9 Rating on Google Reviews
              </span>
            </div>

            {/* Headline - Accessible H1 */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-background leading-tight mb-6 text-balance focus-visible:outline-none">
              Best Bathroom Remodeling Contractors Chandler AZ
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-background/80 mb-10 leading-relaxed">
              Looking for affordable bathroom remodeling contractors in Chandler AZ? Hire our licensed bathroom renovation 
              contractors with 15+ years experience. Get your free bathroom remodel quote and bathroom remodel estimate today!
            </p>

            {/* CTA Buttons - Accessible */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Get your free bathroom remodel estimate"
              >
                <Link href="/contact">Get Your Free Estimate</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-black bg-black text-white hover:border-black/90 hover:bg-black/90 hover:text-white text-base px-8 py-6 focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="View our portfolio of completed bathroom remodels"
              >
                <Link href="/gallery">View Our Portfolio</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="lg:block">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
