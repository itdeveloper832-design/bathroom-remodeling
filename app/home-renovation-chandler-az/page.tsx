import { BreadcrumbSchema } from "@/components/seo/json-ld";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { ArrowRight, Bath, ShowerHead, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Renovation Services - ARZ Home Remodeling",
  description: "ARZ Home Remodeling specializes exclusively in premium bathroom renovations in Chandler, AZ. Learn more about our custom shower and bath designs.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.url}/home-renovation-chandler-az/`,
  },
};

export default function HomeRenovationPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Home Renovation Chandler Az", url: "https://arzhomeremodeling.com/home-renovation-chandler-az/" } ]} />
<Header />
      <main className="min-h-[80vh] flex flex-col justify-center items-center py-24 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
            Specializing Exclusively in Premium Bathroom Remodeling
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            In order to deliver the highest level of craftsmanship, structural integrity, and dedicated local expertise, 
            <strong> ARZ Home Remodeling focuses 100% of our operations on premium bathroom transformations.</strong> 
            We no longer offer general whole-home renovations or structural carpentry services.
          </p>
          
          <div className="border border-border rounded-2xl p-6 bg-secondary/50 mb-10 text-left">
            <h2 className="font-serif text-xl font-medium text-foreground mb-4 text-center">
              Our Premium Bathroom Specialties
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link 
                href="/bathroom-remodeling-chandler-az/" 
                className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border hover:border-primary transition-colors group"
              >
                <Bath className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Bathroom Remodeling</p>
                  <p className="text-xs text-muted-foreground">Full custom transformations</p>
                </div>
              </Link>
              <Link 
                href="/shower-remodeling/" 
                className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border hover:border-primary transition-colors group"
              >
                <ShowerHead className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Shower Remodeling</p>
                  <p className="text-xs text-muted-foreground">Modern tiles & curbless pans</p>
                </div>
              </Link>
              <Link 
                href="/tub-to-shower-conversion/" 
                className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border hover:border-primary transition-colors group"
              >
                <ArrowRight className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Tub-to-Shower</p>
                  <p className="text-xs text-muted-foreground">Maximize your floor space</p>
                </div>
              </Link>
              <Link 
                href="/ada-bathroom-remodeling/" 
                className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border hover:border-primary transition-colors group"
              >
                <ArrowRight className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">ADA Bathrooms</p>
                  <p className="text-xs text-muted-foreground">Safe, elegant accessibility</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/bathroom-remodeling-chandler-az/">
                View Bathroom Services
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact/">
                Get a Free Estimate
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
