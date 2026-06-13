import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DesignBuildShowcase() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30 border-t border-border" aria-label="3D Design Phase">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Image & Rendering Preview */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
              <Image
                src="/images/optimized/bathroom-planning-design.avif"
                alt="Modern bathroom design used for Chandler remodeling planning inspiration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                3D Visualizer Active
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-5 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block font-bold text-foreground text-sm">Fixed-Price Proposal</span>
                  <span className="text-xs text-muted-foreground">No hidden change orders</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Copy Details */}
          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase bg-primary/5 px-4 py-1.5 rounded-full">
              Planning First
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 text-foreground leading-tight text-balance">
              See Your Bathroom in 3D Before Demolition Starts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Affluent Chandler homeowners choose our design-build process to eliminate the guesswork. Under our <strong>planning-first model</strong>, our certified design team creates full-color 3D layouts of your custom tile shower, vanity placement, and lighting zones.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              We select every grout color, tile profile, and plumbing fixture with you in advance. This ensures we deliver an exact, <strong>fixed-price remodeling contract</strong> with zero surprise fees or structural layout delays once tools hit the drywall.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                <Link href="/contact/">
                  Book Design Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
