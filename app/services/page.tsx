import { BreadcrumbSchema } from "@/components/seo/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { bathroomServices } from "@/lib/bathroom-services";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {title: "Custom Bathroom Remodeling Services Chandler AZ | ARZ",description: "Browse all bathroom services offered by ARZ in Chandler, AZ: walk-in showers, tub conversions, custom tile, vanity cabinetry, and ADA retrofits.",
  alternates: {
    canonical: `${siteConfig.url}/services/`,
  },
  openGraph: {title: "Bathroom Remodel Services | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom remodel services, custom showers, tile, vanities, clear pricing, and free estimates.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "Bathroom Remodel Services | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom remodel services, custom showers, tile, vanities, clear pricing, and free estimates.",
  },
};

export default function ServicesPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" } ]} />
<Header />
      <main className="pt-24 pb-16">
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
                <a href={`tel:${siteConfig.phoneClean}`}>Speak to a Project Supervisor</a>
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
                  className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Icon overlay badge */}
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <service.icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {service.name}
                      </h2>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2 mt-0.5" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
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
                <a href={`tel:${siteConfig.phoneClean}`}>Call Now: {siteConfig.phone}</a>
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

