import { BreadcrumbSchema } from "@/components/seo/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { bathroomServices } from "@/lib/bathroom-services";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    absolute: "Bathroom Remodeling Services in Chandler AZ | Showers, Vanities & Tile | ARZ"
  },
  description: "Browse all bathroom services offered by ARZ Home Remodeling in Chandler AZ. Walk-in showers, tub conversions, tile, vanities, ADA baths. Licensed ROC contractor. Free estimates.",
  openGraph: {
    title: "Bathroom Remodeling Services in Chandler AZ | Showers, Vanities & Tile | ARZ",
    description: "Browse all bathroom services offered by ARZ Home Remodeling in Chandler AZ. Walk-in showers, tub conversions, tile, vanities, ADA baths. Licensed ROC contractor. Free estimates.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Services in Chandler AZ | Showers, Vanities & Tile | ARZ",
    description: "Browse all bathroom services offered by ARZ Home Remodeling in Chandler AZ. Walk-in showers, tub conversions, tile, vanities, ADA baths. Licensed ROC contractor. Free estimates.",
  },
};

export default function ServicesPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" } ]} />
<Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Our Capabilities
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6 text-foreground text-balance">
                Professional Bathroom Remodeling Services
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Licensed bathroom remodeling in Chandler, AZ: walk-in showers, tub-to-shower conversions, tile, vanities, and full bath updates. 
                ROC338304. Written estimates and clear timelines on every project.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact/">Get Free Estimate</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bathroomServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group block bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <h2 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Bathroom Remodeling CTA */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Ready to Upgrade Your Space?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate for your renovation project. 
              Our experts will help you design the perfect layout and finishes for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/contact/">Get Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/bathroom-remodeling/">Learn About Full Remodels</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

