import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Tag, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Special Offers - Bathroom Remodeling Chandler",
  description: "Exclusive bathroom remodeling offers in Chandler, AZ. Save on showers, tile, and vanity upgrades. Limited time deals available!",
  keywords: ["bathroom remodeling offers", "special promotions", "remodeling deals chandler"],
  openGraph: {
    title: "Special Offers - Bathroom Remodeling",
    description: "Exclusive bathroom remodeling offers and promotions in Chandler, Arizona.",
    url: `${siteConfig.url}/offers`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Special Offers - Bathroom Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Offers - Bathroom Remodeling",
    description: "Exclusive bathroom remodeling offers and promotions in Chandler.",
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/offers`,
  },
};

const offers = [
  {
    title: "Shower Remodeling Package",
    discount: "Save $500",
    validUntil: "Valid through December 31, 2024",
    description: "Complete shower remodel including tile, glass enclosure, and fixtures for Chandler homeowners.",
    includes: [
      "Free design consultation",
      "Premium tile installation",
      "Frameless glass enclosure",
      "Modern fixtures and hardware",
      "Waterproofing guarantee",
    ],
    cta: "Get This Offer",
  },
  {
    title: "Walk-in Shower Special",
    discount: "15% Off",
    validUntil: "Limited time offer",
    description: "Accessible walk-in shower installation with slip-resistant tile and safety features.",
    includes: [
      "Curbless or low-threshold design",
      "Slip-resistant tile flooring",
      "Built-in bench option",
      "Grab bar installation",
      "Free safety assessment",
    ],
    cta: "Claim Discount",
  },
  {
    title: "Bathroom Tile Bundle",
    discount: "$300 Off",
    validUntil: "Book by end of month",
    description: "Professional tile installation for shower walls, floors, and backsplashes in Chandler homes.",
    includes: [
      "Premium tile materials",
      "Expert installation",
      "Waterproof membrane",
      "Grout sealing included",
      "1-year workmanship warranty",
    ],
    cta: "Schedule Now",
  },
  {
    title: "Vanity & Tile Combo",
    discount: "Save $400",
    validUntil: "New customers only",
    description: "Upgrade your bathroom with a new vanity and coordinated tile backsplash.",
    includes: [
      "Vanity installation",
      "Countertop and sink",
      "Tile backsplash",
      "Plumbing connections",
      "Free color consultation",
    ],
    cta: "Get Started",
  },
];

export default function OffersPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
                Special Offers for Chandler Homeowners
              </h1>
              <p className="text-lg text-muted-foreground">
                Exclusive bathroom remodeling deals and packages. Limited time offers on shower installations, tile work, and vanity upgrades in Chandler, Arizona.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {offers.map((offer, index) => (
                <div key={index} className="bg-card border-2 border-primary/20 rounded-lg p-8 hover:border-primary transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                      {offer.discount}
                    </div>
                    <Tag className="w-6 h-6 text-primary" />
                  </div>

                  <h2 className="font-serif text-2xl font-semibold mb-2">{offer.title}</h2>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    {offer.validUntil}
                  </div>

                  <p className="text-muted-foreground mb-6">{offer.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Includes:</h3>
                    <ul className="space-y-2">
                      {offer.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/contact">{offer.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground">
                * Offers valid for Chandler, AZ residents only. Cannot be combined with other promotions. 
                Contact us for complete terms and conditions. Free estimates available.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
