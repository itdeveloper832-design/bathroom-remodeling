import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import ContactSection from "@/components/home/contact-section"
import { GoogleMap } from "@/components/services/google-map";
import { siteConfig } from "@/lib/site-config"
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react"
import { BreadcrumbSchema, FAQSchema, ContactPageSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: {
    absolute: "Free Bathroom Remodel Estimates | ARZ Home Remodeling"
  },
  description: "Contact Chandler's top-rated bathroom remodeling contractor. Fill out our form or call (520) 569-3339 to schedule a free in-home consultation today.",
  openGraph: {
    title: "Free Bathroom Remodel Estimates - ARZ Home Remodeling",
    description: "Contact Chandler's top-rated bathroom remodeling contractor. Fill out our form or call (520) 569-3339 to schedule a free in-home consultation today.",
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
    answer: `Call ${siteConfig.phone} or use our contact form. We usually respond within 2 business hours and can schedule a free in-home consultation in Chandler and the East Valley.`
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
        <section className="pt-28 md:pt-40 lg:pt-48 pb-24 md:pb-32 bg-secondary">
          <div className="container mx-auto px-4 mt-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Get In Touch
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Get Your Free Bathroom Remodel Estimate in Chandler, AZ
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Ready to get started? Fill out the form below or give us a call - we typically respond
                within 2 business hours. We&apos;ll schedule a free in-home visit to measure your space,
                discuss your vision, and give you a written quote with no obligation.
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
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Email</h3>
                <a 
                  href={`mailto:${siteConfig.email}`} 
                  className="text-muted-foreground hover:text-primary transition-colors block text-sm leading-snug"
                >
                  {siteConfig.email}
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

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                What Customers Say
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Trusted by Chandler Homeowners
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  project: "Master Bathroom Remodel",
                  text: "Chandler Bathroom Remodeling transformed our outdated bathroom into a luxury spa-like retreat. The craftsmanship is exceptional!",
                  rating: 5
                },
                {
                  name: "Mike Davis",
                  project: "Walk-in Shower Installation",
                  text: "Professional, punctual, and the quality of work exceeded all expectations. Highly recommend to anyone in Chandler!",
                  rating: 5
                },
                {
                  name: "Jennifer Martinez",
                  project: "Bathroom Vanity Upgrade",
                  text: "Best decision we made for our home. The team was respectful, clean, and the final result is stunning.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div>
                    <p className="font-serif font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

