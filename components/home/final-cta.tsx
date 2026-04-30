import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-primary-foreground/70 text-sm font-medium tracking-wider uppercase">
              Start Your Transformation
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mt-4 mb-6 text-primary-foreground text-balance">
              Ready for Your Bathroom Remodel in Chandler, AZ?
            </h2>
            <p className="text-primary-foreground/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Don&apos;t wait any longer to build the oasis you deserve. As the premier choice for bathroom remodeling Chandler AZ, we guarantee transparent pricing, zero hidden fees, and an on-time completion standard. Schedule your free in-home consultation and let our remodeling experts bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 group"
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
                className="border-black bg-black text-white hover:bg-primary-foreground hover:text-primary text-base px-8 py-6"
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now: {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
