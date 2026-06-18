import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function ShowerCTAFooter() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-semibold mb-6 text-foreground">
            Ready to Start Your Shower Remodel in Chandler, AZ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We serve homeowners across Chandler, Ocotillo, Fulton Ranch, Sun Lakes, Dobson Ranch, Gilbert, and the East Valley. Schedule a free in-home visit this week. We measure your shower, walk through tile and glass options with you in person, and send a written estimate with a timeline - before you commit to anything.
          </p>
        </div>

        <div className="bg-background rounded-2xl p-8 border border-border mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Call Now</p>
              <a href={`tel:${siteConfig.phoneClean}`} className="text-3xl font-semibold text-primary hover:underline">
                {siteConfig.phone}
              </a>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Speak to a Project Supervisor</p>
              <a href={`tel:${siteConfig.phoneClean}`} className="text-3xl font-semibold text-primary hover:underline">
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="text-center mb-6 pb-6 border-b border-border">
            <p className="text-foreground mb-2">
              📍 6710 W Chicago St, Chandler, AZ 85226
            </p>
            <p className="text-foreground">
              Mon–Fri: 8 AM–6 PM · Sat: 9 AM–4 PM
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              Schedule My Free Shower Estimate
            </a>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="bg-primary/10 text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/20 transition-colors text-center border border-primary"
            >
              Call {siteConfig.phone} Now
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          <strong>Local Expertise, Fair Pricing, Zero Surprises</strong><br/>
          ROC Licensed #338304 · 15+ years serving the East Valley · 500+ bathrooms completed · 2-year workmanship warranty
        </p>
      </div>
    </section>
  );
}
