import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-28 md:pt-36 lg:pt-44" aria-label="Hero section">
      <div className="absolute inset-0 z-0 bg-foreground/40">
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
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 lg:pb-20 pt-4 md:pt-6 lg:pt-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-foreground/10 border border-background/20 rounded-full px-4 py-2 mb-6">
            <div className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-background text-sm font-medium">
              4.9 on Google · ROC338304 · {siteConfig.foundedYear ? `Since ${siteConfig.foundedYear}` : "15+ years"}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-background leading-tight mb-6 text-balance">
            Bathroom Remodeling Chandler AZ — Licensed, Local, Focused Only on Bathrooms
          </h1>

          <p className="text-lg md:text-xl text-background/80 mb-10 leading-relaxed font-light">
            ARZ Home Remodeling is a licensed Arizona bathroom contractor (ROC #338304) serving Chandler, Ocotillo, Fulton Ranch, Sun Lakes, and the East Valley since 2010. We specialize exclusively in bathroom remodeling, building custom{" "}
            <Link href="/shower-remodeling/" className="font-semibold underline hover:text-primary transition-colors">
              walk-in showers
            </Link>
            ,{" "}
            <Link href="/tub-to-shower-conversion/" className="font-semibold underline hover:text-primary transition-colors">
              tub-to-shower conversions
            </Link>
            , tile work, vanities, and full master bath remodels with proper waterproofing and permits when required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6"
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
