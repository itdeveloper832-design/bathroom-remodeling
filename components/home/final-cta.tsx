import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/2 translate-y-1/2" aria-hidden="true" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary-foreground/70 text-sm font-medium tracking-wider uppercase">
            Free Estimate
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mt-4 mb-6 text-primary-foreground text-balance">
            Ready for Your Bathroom Remodel in Chandler?
          </h2>
          <p className="text-primary-foreground/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a free in-home visit. We will look at your layout, talk tile and shower options, and send a clear written estimate with timeline and permit notes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 group"
            >
              <Link href="/contact/">
                Schedule Your Free Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6"
            >
              <a href={`tel:${siteConfig.phoneClean}`}>
                <Phone className="mr-2 w-4 h-4" />
                Call {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
