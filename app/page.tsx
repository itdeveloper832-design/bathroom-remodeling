import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ServiceCard } from '@/components/service-card'
import { Testimonials } from '@/components/testimonials'
import { CTASection } from '@/components/cta-section'
import { Waves, Droplets, RotateCcw, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bathroom Remodeling in Chandler & Phoenix, AZ | Expert Shower Renovations',
  description: 'Professional bathroom remodeling, shower renovation, and tub-to-shower conversion services in Chandler, Phoenix, and Tempe, Arizona. Licensed contractors with 20+ years experience. Free estimates.',
  keywords: 'bathroom remodeling Chandler AZ, shower renovation Phoenix, tub to shower conversion, bathroom contractors Arizona',
  openGraph: {
    title: 'Bathroom Remodeling Experts in Arizona',
    description: 'Expert bathroom and shower remodeling services in Chandler, Phoenix, and surrounding areas',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="relative min-h-screen bg-blue-950 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bathroom.jpg"
            alt="Luxury bathroom remodeling project in Arizona"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 md:py-32">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 text-balance">
            Professional Bathroom Remodeling in Chandler, Phoenix & Tempe
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Expert bathroom renovations, custom shower installations, and tub-to-shower conversions for Arizona homeowners. Licensed, insured, and ready to transform your space.
          </p>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl">
            20+ years of experience | Free consultations | Quality guarantees
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-white text-blue-950 px-8 py-4 rounded font-poppins font-bold text-lg hover:bg-blue-50 transition-colors">
              Get Free Quote
            </Link>
            <Link href="/services" className="inline-block border-2 border-white text-white px-8 py-4 rounded font-poppins font-bold text-lg hover:bg-white hover:text-blue-950 transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-4 text-blue-950">
            Expert Bathroom & Shower Remodeling Services
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Trusted bathroom contractors serving Chandler, Phoenix, Tempe, and all of Arizona with professional remodeling and renovation services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <ServiceCard
              icon={Waves}
              title="Bathroom Remodeling"
              description="Complete bathroom transformations with modern fixtures, layouts, and premium finishes. We handle everything from design to installation."
              link={{ label: 'Learn More', href: '/services' }}
            />
            <ServiceCard
              icon={Droplets}
              title="Shower Remodeling & Renovation"
              description="Custom walk-in showers, luxury shower installations, and spa-style renovations with high-quality materials and expert craftsmanship."
              link={{ label: 'Learn More', href: '/services' }}
            />
            <ServiceCard
              icon={RotateCcw}
              title="Tub to Shower Conversion"
              description="Safe and stylish conversions from traditional bathtubs to modern walk-in showers. Perfect for accessibility and space optimization."
              link={{ label: 'Learn More', href: '/services' }}
            />
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-block bg-blue-950 text-white px-8 py-3 rounded font-semibold hover:bg-blue-900 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-12 text-blue-950">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Award, title: '20+ Years Experience', desc: 'Proven track record of quality work' },
              { icon: Waves, title: 'Expert Team', desc: 'Skilled professionals dedicated to excellence' },
              { icon: Droplets, title: 'Premium Materials', desc: 'Only the finest materials and fixtures' },
              { icon: RotateCcw, title: 'On-Time Delivery', desc: 'Projects completed on schedule' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <Icon className="text-blue-950 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-poppins font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-blue-950">
            Why Homeowners Choose Professional Bathroom Remodeling
          </h2>
          <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
            <p>
              A bathroom remodeling project is one of the most impactful home improvements you can make. Whether you&apos;re looking to modernize an outdated bathroom, increase your home&apos;s value, or create a spa-like sanctuary, our expert bathroom contractors in Chandler, Phoenix, and throughout Arizona have the experience and expertise to bring your vision to life.
            </p>
            <p>
              Bathroom remodeling isn&apos;t just about aesthetics—it&apos;s about functionality, safety, and creating a space that works for your lifestyle. Our professional remodeling team specializes in designing and installing beautiful bathrooms that combine luxury finishes with practical features. From contemporary walk-in showers to elegant vanities and modern fixtures, we handle every aspect of your bathroom renovation.
            </p>
            <p>
              With over 20 years of experience in the bathroom remodeling industry, we&apos;ve completed hundreds of successful projects in Chandler, Phoenix, Tempe, and throughout Arizona. Our licensed and insured contractors are committed to delivering exceptional quality, transparent pricing, and on-time project completion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-8 text-blue-950">
            Our Comprehensive Bathroom Remodeling Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Free Consultation', desc: 'Meet with our experts to discuss your vision and needs' },
              { num: '2', title: 'Design & Planning', desc: 'Create detailed plans and select materials and finishes' },
              { num: '3', title: 'Professional Installation', desc: 'Expert installation by licensed, experienced contractors' },
              { num: '4', title: 'Final Walkthrough', desc: 'Quality inspection and handoff of your new bathroom' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-poppins font-bold text-blue-950 mb-2">{step.num}</div>
                <h3 className="font-poppins font-semibold text-lg mb-2 text-blue-950">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-blue-950">
            Professional Bathroom Remodeling Expertise
          </h2>
          <div className="prose prose-sm max-w-none text-slate-700 space-y-4 mb-8">
            <p>
              At ARZ Remodeling, we believe that a well-designed bathroom should be both beautiful and functional. When you invest in professional bathroom remodeling services, you&apos;re not just updating your space—you&apos;re enhancing your home&apos;s value, improving your quality of life, and creating a space that you&apos;ll enjoy every single day.
            </p>
            <p>
              Our expertise spans every aspect of bathroom remodeling. We understand plumbing codes, electrical requirements, building regulations, and design best practices. We know how to maximize space in small bathrooms, create spa-like atmospheres in larger ones, and incorporate accessibility features when needed. We work with premium materials from trusted suppliers and employ skilled craftspeople who take pride in their work.
            </p>
            <p>
              What makes us different is our commitment to communication and customer satisfaction. We don&apos;t just show up and install bathrooms—we listen to your needs, offer expert recommendations, explain options clearly, and keep you informed throughout the entire project. When your new bathroom is complete, you&apos;ll understand why hundreds of Arizona homeowners have chosen to trust ARZ Remodeling with their remodeling projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Quality You Can Trust</h3>
              <p className="text-slate-700 text-sm">
                We use premium materials and proven installation methods to ensure your new bathroom not only looks beautiful but also stands the test of time.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Expert Design</h3>
              <p className="text-slate-700 text-sm">
                Our experienced team helps you make smart design choices that maximize functionality, enhance aesthetics, and fit your budget.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Professional Installation</h3>
              <p className="text-slate-700 text-sm">
                Licensed, insured contractors handle every detail of your installation with precision and attention to quality.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Customer Service</h3>
              <p className="text-slate-700 text-sm">
                From your first consultation through project completion, we prioritize clear communication and your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-blue-950">
            Bathroom Remodeling Services for Every Style and Budget
          </h2>
          <div className="prose prose-sm max-w-none text-slate-700 space-y-4 mb-8">
            <p>
              Whether you&apos;re interested in a complete bathroom transformation, a luxury shower renovation, or a practical tub-to-shower conversion, our Arizona bathroom contractors have the skills and experience to deliver outstanding results. We work with homeowners throughout Chandler, Phoenix, Tempe, and surrounding areas, helping them create bathrooms that perfectly match their needs and aesthetic preferences.
            </p>
            <p>
              Our shower remodeling services include everything from custom walk-in shower installations with premium tile work to luxury spa-style systems with rainfall showerheads and body jets. We source only the highest-quality materials and fixtures from trusted manufacturers, ensuring your new bathroom is built to last.
            </p>
            <p>
              For homeowners seeking a tub-to-shower conversion, we provide safe, stylish solutions that maximize your bathroom space while improving accessibility. Whether you need ADA-compliant features or simply prefer the modern convenience of a walk-in shower, our team delivers professional installations that exceed expectations.
            </p>
          </div>
          <div className="text-center">
            <Link href="/gallery" className="inline-block bg-blue-950 text-white px-8 py-3 rounded font-semibold hover:bg-blue-900 transition-colors">
              Browse Our Gallery
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Bathroom?"
        description="Contact our team today for a free consultation and personalized quote"
        primaryCta={{ label: 'Get Free Quote', href: '/contact' }}
        secondaryCta={{ label: 'Call Now', href: 'tel:+14805551234' }}
      />

      <Footer />
    </>
  )
}
