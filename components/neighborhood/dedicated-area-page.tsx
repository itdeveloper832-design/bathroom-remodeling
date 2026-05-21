import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { getAreaData, type AreaData } from "@/lib/bathroom-remodeling-areas";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import { ShieldCheck, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type DedicatedAreaPageProps = {
  areaSlug: string;
  path: string;
};

export function getDedicatedAreaMetadata(areaSlug: string, path: string) {
  const areaData = getAreaData(areaSlug);
  if (!areaData) return null;

  return {
    title: `${areaData.areaName} Bathroom Remodeling Chandler AZ | ARZ`,
    description: `Licensed bathroom remodeling in ${areaData.areaName}, Chandler AZ. ${areaData.description} ROC338304. Free estimate: ${siteConfig.phone}.`,
    canonical: `${siteConfig.url}${path}`,
  };
}

export default function DedicatedAreaPage({ areaSlug, path }: DedicatedAreaPageProps) {
  const areaData = getAreaData(areaSlug);
  if (!areaData) notFound();

  const pageUrl = `${siteConfig.url}${path}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Chandler", url: `${siteConfig.url}/bathroom-remodeling-chandler-az/` },
          { name: areaData.areaName, url: pageUrl },
        ]}
      />
      <ServiceSchema
        serviceName={areaData.fullName}
        serviceDescription={areaData.heroDescription}
        serviceUrl={pageUrl}
      />
      <FAQSchema faqs={areaData.areaFaqs} />
      <Header />
      <main>
        <ServiceHero
          title={areaData.heroTitle}
          subtitle={areaData.heroSubtitle}
          description={areaData.heroDescription.replace(/^Transform your/i, "Update your")}
          image="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: areaData.areaName, url: pageUrl },
          ]}
        />

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              {areaData.introSection.title}
            </h2>
            {areaData.introSection.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-6">
                {para}
              </p>
            ))}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact/">Get a Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-center mb-10 text-foreground">
              Why {areaData.areaName} Homeowners Choose ARZ
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {areaData.localTrustSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex gap-3 p-5 bg-background rounded-xl border border-border"
                >
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Popular Home Styles in {areaData.areaName}
            </h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {areaData.homeStyles.map((style) => (
                <span
                  key={style}
                  className="bg-secondary px-4 py-2 rounded-lg text-sm font-medium border border-border"
                >
                  {style}
                </span>
              ))}
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Services we provide here
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
              {areaData.serviceHighlights.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-muted-foreground">
              <MapPin className="w-4 h-4 inline mr-1 text-primary" />
              Also see our{" "}
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary hover:underline">
                Chandler bathroom remodeling
              </Link>{" "}
              hub and{" "}
              <Link href="/shower-remodeling/" className="text-primary hover:underline">
                shower remodeling
              </Link>{" "}
              services.
            </p>
          </div>
        </section>

        <ServiceFAQ faqs={areaData.areaFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title={`Schedule Your ${areaData.areaName} Bathroom Consultation`}
          description="Free in-home visit, written estimate, and clear timeline. Licensed ROC338304."
        />
      </main>
      <Footer />
    </>
  );
}
