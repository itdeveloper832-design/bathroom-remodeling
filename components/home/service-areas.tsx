import Link from "next/link";
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
              Serving Homeowners Across Chandler, Ocotillo, Fulton Ranch, & Sun Lakes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Based in Chandler, Arizona, we provide premium <strong>bathroom remodeling services in Chandler</strong> 
              throughout the East Valley. Our team brings decades of combined experience and 
              exceptional craftsmanship to homeowners searching for a <strong>bath remodel near me</strong> or a professional <strong>bathroom contractor in Chandler AZ</strong>.
            </p>

            {/* Service Areas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Chandler", href: "/bathroom-remodeling-chandler-az/" },
                { name: "Gilbert", href: "/bathroom-remodeling-gilbert-az/" },
                { name: "Mesa", href: "/bathroom-remodeling-mesa-az/" },
                { name: "Ocotillo", href: "/bathroom-remodeling-ocotillo/" },
                { name: "Dobson Ranch", href: "/bathroom-remodeling-areas/dobson-ranch/" },
                { name: "Sun Lakes", href: "/bathroom-remodeling-sun-lakes/" },
                { name: "Fulton Ranch", href: "/bathroom-remodeling-fulton-ranch/" },
                { name: "Tempe", href: "/bathroom-remodeling-tempe-az/" },
                { name: "Ahwatukee", href: "/bathroom-remodeling-ahwatukee-az/" }
              ].map((area, index) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 animate-in fade-in slide-in-from-bottom-4 hover:border-primary transition-colors no-underline group"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground text-sm font-medium">{area.name}, AZ</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Map Side */}
          <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3334.6838369776056!2d-111.9605964!3d33.3009334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0403f517282b%3A0x64f0a47ba733e83e!2s6710%20W%20Chicago%20St%2C%20Chandler%2C%20AZ%2085226%2C%20USA!5e0!3m2!1sen!2s!4v1777130880103!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service area map showing our Chandler, Arizona location"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
