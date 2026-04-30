import Link from "next/link";
import { Button } from "@/components/ui/button";
import { bathroomServices } from "@/lib/bathroom-services";
import { type LucideIcon } from "lucide-react";

const services = bathroomServices;

type SubServiceItem = {
  icon: LucideIcon;
  title?: string;
  name?: string;
  description: string;
  href?: string;
};

interface SubServicesProps {
  title?: string;
  subtitle?: string;
  description?: string;
  services?: (SubServiceItem | string)[];
}

export default function SubServices({
  title = "Our Specialized Services",
  subtitle,
  description = "From complete remodels to specific upgrades, we offer comprehensive bathroom services.",
  services: customServices,
}: SubServicesProps) {
  const servicesToRender = customServices ?? services;

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {subtitle && (
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
                {subtitle}
              </p>
            )}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesToRender.map((serviceInput, index) => {
              const service = typeof serviceInput === 'string'
                ? bathroomServices.find(s => s.name === serviceInput)
                : serviceInput;
                
              if (!service) return null;
              
              const Icon = service.icon as LucideIcon;
              const serviceName = 'title' in service ? service.title : (service as any).name;

              return (
              <div
                key={`${serviceName}-${index}`}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="w-12 h-12 mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {serviceName}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button asChild variant="outline" size="sm" aria-label={`Explore our ${serviceName} services`}>
                  <Link href={service.href ?? "/services"}>Explore {serviceName}</Link>
                </Button>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}