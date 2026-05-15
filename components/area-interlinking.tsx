import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bathroomServices } from "@/lib/bathroom-services";

export default function AreaInterlinking() {
  const services = [
    { name: "Bathroom Remodeling", href: "/bathroom-remodeling-chandler-az/", description: "Luxury bath renovations and complete bathroom transformations." },
    { name: "Master Bath Remodel", href: "/master-bathroom-remodel/", description: "Create a spa-like retreat with high-end fixtures and finishes." },
    { name: "Tub-to-Shower", href: "/tub-to-shower-conversion/", description: "Modernize your space by converting unused tubs into walk-in showers." },
    { name: "Shower Remodeling", href: "/shower-remodeling/", description: "Custom tile work, frameless glass, and modern shower solutions." },
    { name: "Vanity Installation", href: "/bathroom-vanity-installation/", description: "Update your bathroom with custom vanities and stone countertops." },
    { name: "Small Bath Remodel", href: "/small-bathroom-remodeling/", description: "Maximize space and style in guest baths and powder rooms." },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
              Our Local Expertise in Chandler
            </h2>
            <p className="text-muted-foreground text-lg">
              Specialized bathroom remodeling solutions for every East Valley home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-6 bg-background rounded-xl border border-border hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center flex flex-wrap justify-center gap-6">
            <Link 
              href="/bathroom-remodel-cost-chandler/" 
              className="text-primary hover:underline font-medium"
            >
              Chandler Price Guide →
            </Link>
            <Link 
              href="/services/" 
              className="text-primary hover:underline font-medium"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
