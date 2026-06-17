import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "ROC#", label: "338304 Licensed" },
];

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/optimized/bathroom-remodeling-licensed-crew.avif"
                alt="ARZ Home Remodeling licensed contractor crew performing bathroom remodel in Chandler AZ"
                fill
                className="object-cover"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

            </div>
            <div className="absolute -bottom-10 left-4 right-4 lg:-bottom-12 lg:left-8 lg:right-8">
              <div className="grid grid-cols-4 gap-2 lg:gap-4 bg-card border border-border rounded-xl p-4 lg:p-6 shadow-xl">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="block font-serif text-xl lg:text-2xl font-bold text-primary">
                      {stat.value}
                    </span>
                    <span className="text-xs lg:text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-12 lg:pt-0">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">About Us</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
              Chandler Bathroom Remodelers Since {siteConfig.foundedYear ?? 2010}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Since {siteConfig.foundedYear ?? 2010}, ARZ Home Remodeling has focused on bathrooms only. We are not a handyman listing. We are a licensed crew that handles demolition, plumbing coordination, tile, vanities, glass, and final walkthroughs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Homeowners call us from older ranch homes near <strong>Downtown Chandler</strong> and <strong>Arizona Avenue</strong>, from neighborhoods by <strong>Chandler Fashion Center</strong> and <strong>Alma School Road</strong>, and from <strong>Ocotillo</strong>, <strong>Fulton Ranch</strong>, <strong>Sun Lakes</strong>, and the <strong>Loop 202</strong> area near Intel. We know local HOA rules and how long Chandler inspections usually take.
            </p>
            <div className="mb-8 p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-start gap-3">
              <span className="text-accent text-xl mt-0.5">💎</span>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Wholesale Sourcing Partners</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We guide you through private selection visits directly at our local wholesale distributors (<strong>Arizona Tile</strong>, <strong>Bedrosians</strong>, and <strong>MSI</strong>) so you select high-end slabs, quartz countertops, and porcelain tile at contractor-level builder pricing.
                </p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
              <Link href="/about/">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
