import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ServiceAreas() {
  return (
    <section className="py-20 lg:py-32 bg-secondary" id="service-areas">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Service Areas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
              Proudly Serving Chandler & Surrounding Communities
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Based in Chandler, Arizona, we provide premium bathroom remodeling 
              throughout the East Valley. Our team brings decades of combined experience and 
              exceptional craftsmanship to homeowners searching for professional bathroom remodelers.
            </p>

            {/* Service Areas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {siteConfig.serviceAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground text-sm font-medium">{area}, AZ</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Side */}
          <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <iframe
              src="https://www.google.com/maps?q=Chandler,AZ&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service area map showing Chandler, Arizona and surrounding areas"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
