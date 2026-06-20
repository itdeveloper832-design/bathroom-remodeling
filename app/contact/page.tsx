import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import ContactSection from "@/components/home/contact-section"
import { GoogleMap } from "@/components/services/google-map";
import { siteConfig } from "@/lib/site-config"
import { Phone, MapPin, Clock, Star } from "lucide-react"
import { BreadcrumbSchema, FAQSchema, ContactPageSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {title: "Contact ARZ Home Remodeling | Chandler AZ",description: "Need a bathroom remodel in Chandler, AZ? Contact ARZ Home Remodeling today for a free consultation and project estimate.",
  openGraph: {title: "Free Bathroom Estimate | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore free bathroom estimate, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/contact/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
}



const contactFaqs = [
  {
    question: "How do I get an estimate for my bathroom remodel in Chandler?",
    answer: `Call ${siteConfig.phone}. We usually answer immediately during business hours, ensuring you speak directly with a local project supervisor.`
  },
  {
    question: "What is the typical cost for a bathroom renovation in Chandler?",
    answer: "Project costs vary based on the scope of work and materials selected. We provide transparent, itemized estimates after visiting your home to ensure you have a clear understanding of the investment required for your dream bathroom."
  },
  {
    question: "Are your bathroom remodeling services licensed and insured?",
    answer: "Yes, ARZ Home Remodeling is fully licensed (Licensed Contractor - ROC #338304), bonded, and insured. We have over 15 years of experience serving Chandler and the East Valley, ensuring every project meets the highest standards of safety and quality."
  },
  {
    question: "Do you offer financing for bathroom remodeling projects?",
    answer: "Yes, we offer flexible financing options to help make your dream bathroom a reality. During your consultation, we can discuss various plans that fit your budget, including potential 0% APR options for qualifying projects."
  }
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Contact Us", url: `${siteConfig.url}/contact/` }
        ]} 
      />
      <FAQSchema faqs={contactFaqs} />
      <ContactPageSchema />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-secondary">
          <div className="container mx-auto px-4 mt-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Get In Touch
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Speak to a Project Supervisor in Chandler, AZ
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Ready to get started? Give us a call - we typically answer immediately or return voicemails within 2 hours. We&apos;ll schedule a free in-home visit to measure your space, discuss your vision, and give you a written quote with no obligation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 pt-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Phone</h3>
                <a 
                  href={`tel:${siteConfig.phoneClean}`} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Speak to a Supervisor</h3>
                <a 
                  href={`tel:${siteConfig.phoneClean}`} 
                  className="text-muted-foreground hover:text-primary transition-colors block text-sm leading-snug font-semibold"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">
                  {siteConfig.address.city}, {siteConfig.address.state}
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: {siteConfig.hours.weekdays}<br />
                  Sat: {siteConfig.hours.saturday}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />


        {/* Trust & Credentials */}
        <section className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Licensed & Bonded", value: "✓" },
                { label: siteConfig.license, value: "✓" },
                { label: "15+ Years", value: "Experienced" },
                { label: "500+ Projects", value: "Completed" }
              ].map((item, index) => (
                <div key={index}>
                  <p className="text-2xl font-bold text-primary mb-2">{item.value}</p>
                  <p className="text-sm text-background/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-medium tracking-widest text-primary uppercase">
                  Find Us
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                  Schedule a Free In-Home Consultation
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Our team is ready to visit your home in Chandler, Arizona to discuss your bathroom remodeling project.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">{siteConfig.address.full}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Phone</h3>
                  <a href={`tel:${siteConfig.phoneClean}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {siteConfig.phone}
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon-Fri: {siteConfig.hours.weekdays}<br />
                    Sat: {siteConfig.hours.saturday}
                  </p>
                </div>
              </div>

              <GoogleMap 
                lat={siteConfig.address.coordinates.lat}
                lng={siteConfig.address.coordinates.lng}
                zoom={15}
                title={siteConfig.name}
                address={siteConfig.address.full}
              />
            </div>
          </div>
        </section>

        {/* Service Area Zip Code List (Task 10C) */}
        <section className="py-16 bg-secondary border-t border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Our Service Coverage
              </span>
              <h2 className="mt-4 text-3xl font-serif font-semibold text-foreground">
                Bathroom Remodeling Service Areas & ZIP Codes
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                We provide professional, high-end bathroom design and remodeling services across Chandler and the surrounding East Valley neighborhoods.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-card border border-border rounded-2xl p-8 shadow-sm">
              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3 pb-2 border-b border-border text-primary">Chandler</h3>
                <ul className="text-muted-foreground text-sm space-y-1.5">
                  <li><strong>ZIP Codes:</strong> 85224, 85225, 85226, 85248, 85249</li>
                  <li><strong>Neighborhoods:</strong> Ocotillo, Fulton Ranch, Dobson Ranch, Layton Lakes, Andersen Springs, Cooper Commons, Fox Crossing, Gila Springs</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3 pb-2 border-b border-border text-primary">Gilbert</h3>
                <ul className="text-muted-foreground text-sm space-y-1.5">
                  <li><strong>ZIP Codes:</strong> 85233, 85234, 85295, 85296</li>
                  <li><strong>Neighborhoods:</strong> Morrison Ranch, Power Ranch, Val Vista Lakes, Double Farms</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3 pb-2 border-b border-border text-primary">Mesa & Tempe</h3>
                <ul className="text-muted-foreground text-sm space-y-1.5">
                  <li><strong>Mesa ZIPs:</strong> 85201, 85202, 85203, 85204, 85205, 85206, 85207, 85208, 85209, 85210, 85211, 85212, 85213</li>
                  <li><strong>Tempe ZIPs:</strong> 85281, 85282, 85283, 85284</li>
                </ul>
              </div>

              <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
                <div>
                  <h3 className="font-serif font-bold text-foreground text-lg mb-3 pb-2 border-b border-border text-primary">Sun Lakes & Ahwatukee</h3>
                  <ul className="text-muted-foreground text-sm space-y-1.5">
                    <li><strong>Sun Lakes:</strong> 85248 (Sun Lakes Country Club, Ironwood, Oakwood, Cottonwood)</li>
                    <li><strong>Ahwatukee:</strong> Ahwatukee Foothills, Mountain Pointe</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-foreground text-lg mb-3 pb-2 border-b border-border text-primary">Queen Creek</h3>
                  <ul className="text-muted-foreground text-sm space-y-1.5">
                    <li><strong>ZIP Codes:</strong> 85140, 85142</li>
                    <li><strong>Neighborhoods:</strong> Queen Creek Station, Sossaman Estates</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Don&apos;t see your neighborhood listed? Call <a href={`tel:${siteConfig.phoneClean}`} className="text-primary hover:underline font-semibold">{siteConfig.phone}</a> to see if we can handle your bathroom project.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

