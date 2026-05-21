import Link from "next/link";
import { MapPin } from "lucide-react";
import { getCanonicalNeighborhoodLink } from "@/lib/seo-canonical-map";

const areas = [
  { name: "Chandler", href: "/bathroom-remodeling-chandler-az/" },
  { name: "Gilbert", href: "/bathroom-remodeling-gilbert-az/" },
  { name: "Mesa", href: "/bathroom-remodeling-mesa-az/" },
  { name: "Tempe", href: "/bathroom-remodeling-tempe-az/" },
  { name: "Queen Creek", href: "/bathroom-remodeling-queen-creek-az/" },
  { name: "Apache Junction", href: "/bathroom-remodeling-apache-junction-az/" },
  { name: "Ocotillo", href: getCanonicalNeighborhoodLink("ocotillo") },
  { name: "Fulton Ranch", href: getCanonicalNeighborhoodLink("fulton-ranch") },
  { name: "Sun Lakes", href: getCanonicalNeighborhoodLink("sun-lakes") },
  { name: "Downtown Chandler", href: getCanonicalNeighborhoodLink("downtown-chandler") },
  { name: "Cooper Commons", href: getCanonicalNeighborhoodLink("cooper-commons") },
  { name: "Dobson Ranch", href: "/bathroom-remodeling-dobson-ranch/" },
  { name: "Ahwatukee", href: "/bathroom-remodeling-ahwatukee-az/" },
];

export default function ServiceAreas() {
  return (
    <section className="py-20 lg:py-32 bg-secondary" id="service-areas">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Service Areas</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
              Chandler, Ocotillo, Fulton Ranch, Sun Lakes & the East Valley
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are based at <strong>6710 W Chicago St, Chandler, AZ 85226</strong>. If you searched for a{" "}
              <strong>bathroom remodel near me</strong> or a <strong>bathroom remodeling contractor in Chandler AZ</strong>,
              we likely serve your neighborhood.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Local projects include homes near <strong>Ray Road</strong>, <strong>Gilbert Road</strong>, the{" "}
              <strong>Price Corridor</strong>, and areas around <strong>Hamilton High School</strong> and{" "}
              <strong>Chandler Fashion Center</strong>.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {areas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 hover:border-primary transition-colors no-underline group"
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-foreground text-sm font-medium">{area.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Chandler ZIP hubs:{" "}
              {["85248", "85249", "85224", "85225", "85226"].map((zip, i) => (
                <span key={zip}>
                  {i > 0 ? " · " : ""}
                  <Link href={`/chandler-az-${zip}/`} className="text-primary hover:underline">
                    {zip}
                  </Link>
                </span>
              ))}
            </p>
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3334.6838369776056!2d-111.9605964!3d33.3009334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0403f517282b%3A0x64f0a47ba733e83e!2s6710%20W%20Chicago%20St%2C%20Chandler%2C%20AZ%2085226%2C%20USA!5e0!3m2!1sen!2s!4v1777130880103!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ARZ Home Remodeling bathroom contractor location in Chandler Arizona"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
