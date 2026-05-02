import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { CTASection } from '@/components/cta-section'
import { Waves, Droplets, RotateCcw, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bathroom Remodeling Services in Arizona | Shower Renovations & Conversions',
  description: 'Professional bathroom remodeling, shower renovation, and tub-to-shower conversion services in Chandler, Phoenix, and Arizona. Expert contractors with 20+ years experience.',
  keywords: 'bathroom remodeling services, shower renovation, tub to shower conversion, bathroom contractors Arizona, professional remodeling services',
}

const services = [
  {
    icon: Waves,
    title: 'Complete Bathroom Remodeling',
    description: 'Transform your entire bathroom with our comprehensive remodeling services. From layout design to installation, we handle every detail with professional expertise and quality craftsmanship.',
    features: ['Modern fixtures and design', 'Quality flooring options', 'Professional installation', 'Licensed and insured'],
    image: '/images/bathroom-remodel-1.jpg',
    link: 'https://arzhomeremodeling.vercel.app/services/bathroom-remodeling',
    longDescription: `Our complete bathroom remodeling services are designed to transform outdated bathrooms into beautiful, functional spaces that enhance your home's value and your daily living experience. Whether you're starting from scratch or updating an existing bathroom, our expert contractors in Chandler, Phoenix, and throughout Arizona bring years of professional experience to every project.

A full bathroom remodel includes everything from plumbing and electrical updates to fixture selection, tile installation, vanity design, lighting, and finishing touches. We work closely with homeowners to understand their vision, budget, and timeline, creating detailed plans that ensure every aspect of the project is handled professionally.

Our bathroom remodeling team is skilled in all design styles—from modern and minimalist to traditional and spa-like—and we source only premium materials and fixtures from trusted manufacturers. With our expertise in bathroom design, we can maximize your space, improve functionality, and create a bathroom you'll love for years to come.`,
  },
  {
    icon: Droplets,
    title: 'Luxury Shower Remodeling',
    description: 'Create your dream shower with custom installations featuring premium materials, spa-like features, and expert design. From simple upgrades to full renovations.',
    features: ['Walk-in shower systems', 'Custom tile work', 'Rainfall showerheads', 'Professional waterproofing'],
    image: '/images/shower-renovation-1.jpg',
    link: 'https://arzhomeremodeling.vercel.app/services/shower-remodeling',
    longDescription: `Shower renovations are one of the most impactful ways to upgrade your bathroom. Our professional shower remodeling services include everything from simple fixture upgrades to complete custom shower installations with premium materials and luxury spa-like features.

Whether you want a spacious walk-in shower with frameless glass enclosure, a rainfall showerhead, body jets, or custom tile work, our experienced contractors can bring your vision to life. We specialize in professional waterproofing, ensuring your new shower is built to last without leaks or moisture problems.

We work with homeowners throughout Arizona—from Chandler to Phoenix to Tempe—to create showers that combine beauty with functionality. Our shower remodeling process includes expert design consultation, material selection, and precise installation by licensed contractors. We handle all aspects of the project, including plumbing, tile work, glass enclosures, and finishing touches.`,
  },
  {
    icon: RotateCcw,
    title: 'Tub to Shower Conversion',
    description: 'Safe and stylish conversions from traditional bathtubs to modern walk-in showers. Ideal for accessibility, space optimization, and modern living.',
    features: ['ADA compliant options', 'Safety-focused design', 'Space maximization', 'Affordable solutions'],
    image: '/images/tub-to-shower-1.jpg',
    link: 'https://arzhomeremodeling.vercel.app/services/tub-to-shower',
    longDescription: `A tub-to-shower conversion is a practical and stylish solution for homeowners looking to modernize their bathroom while improving functionality and accessibility. Whether you rarely use your bathtub or need a more accessible bathing solution, our professional conversion services can transform your space.

Our tub-to-shower conversions are designed with safety, functionality, and aesthetics in mind. We can create ADA-compliant showers with grab bars and accessible seating, modern walk-in showers with minimal barriers, or luxury spa-style installations. The conversion process involves removing the existing tub, preparing the space, installing proper waterproofing, and creating a custom shower that fits your specific needs.

Serving Chandler, Phoenix, Tempe, and throughout Arizona, our experienced contractors have completed countless successful tub-to-shower conversions. We handle all aspects of the project—from structural modifications to plumbing and electrical work—ensuring a professional installation that's built to last. Whether you're concerned about accessibility for aging parents or simply prefer a modern shower, we deliver safe, beautiful solutions.`,
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <HeroSection
        title="Professional Bathroom Remodeling Services"
        subtitle="Expert bathroom, shower, and tub remodeling services across Arizona with premium craftsmanship"
        primaryCta={{ label: 'Get Free Quote', href: '/contact' }}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-4 text-blue-950">
            Our Remodeling Services
          </h2>
          <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto">
            We specialize in bathroom and shower remodeling for homeowners in Chandler, Phoenix, Tempe, and throughout Arizona
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 space-y-20">
          {services.map((service, idx) => {
            const Icon = service.icon
            const isEven = idx % 2 === 0
            return (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className={isEven ? 'order-1' : 'order-2'}>
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg mb-8">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={isEven ? 'order-2' : 'order-1'}>
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-950" size={24} />
                  </div>
                  <h3 className="font-poppins font-semibold text-2xl mb-4 text-blue-950">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg">{service.description}</p>
                  
                  <div className="prose prose-sm max-w-none text-slate-700 mb-6">
                    <p>{service.longDescription}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-poppins font-semibold text-blue-950 mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-3 text-slate-600">
                          <CheckCircle size={18} className="text-blue-950 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={service.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-950 text-white px-6 py-3 rounded font-semibold hover:bg-blue-900 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-blue-950">
            The Value of Professional Bathroom Remodeling
          </h2>
          <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
            <p>
              Bathroom remodeling is one of the most popular home improvement projects because it delivers a high return on investment while significantly improving your daily living experience. A modern, well-designed bathroom adds value to your home and creates a personal retreat where you can relax and rejuvenate.
            </p>
            <p>
              Whether you&apos;re updating an outdated bathroom, improving accessibility for family members, or simply wanting to enjoy a more beautiful and functional space, professional remodeling services ensure the job is done right. Our team brings expertise that ensures code compliance, proper installation, and professional results that you&apos;ll appreciate for years to come.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Increased Home Value', desc: 'Bathroom remodeling typically returns 60-80% of investment when selling your home' },
              { title: 'Improved Functionality', desc: 'Modern fixtures and layouts make daily routines easier and more enjoyable' },
              { title: 'Better Water Efficiency', desc: 'Updated fixtures reduce water consumption and lower utility bills' },
              { title: 'Enhanced Safety', desc: 'Modern bathrooms include safety features like grab bars and slip-resistant surfaces' },
              { title: 'Increased Comfort', desc: 'Create a spa-like atmosphere with luxury features and thoughtful design' },
              { title: 'Peace of Mind', desc: 'Professional installation with warranties ensures quality and durability' },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <h3 className="font-poppins font-semibold text-lg text-blue-950 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-blue-950">
            Why Hire Professional Bathroom Contractors?
          </h2>
          <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
            <p>
              Bathroom remodeling is a significant home improvement project that requires professional expertise. Attempting DIY bathroom renovation can lead to costly mistakes, building code violations, and poor quality results. Our licensed and insured bathroom contractors bring years of experience, specialized knowledge, and access to premium materials that ensure your project is completed correctly and beautifully.
            </p>
            <p>
              When you hire our professional remodeling team in Chandler, Phoenix, or anywhere in Arizona, you get experienced contractors who understand local building codes, have established relationships with quality suppliers, and possess the skills to handle complex plumbing and electrical work. We manage every detail of your project, from initial consultation and design planning to final inspection and cleanup.
            </p>
            <p>
              Our commitment to customer satisfaction means we listen to your needs, provide transparent pricing, and keep you informed throughout the remodeling process. We take pride in delivering bathroom projects that exceed expectations and add lasting value to your home.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Bathroom Remodeling Project?"
        description="Contact our experienced team today for a free consultation and detailed estimate on your bathroom, shower, or tub-to-shower conversion project"
        primaryCta={{ label: 'Request Free Quote', href: '/contact' }}
        secondaryCta={{ label: 'Call Us', href: 'tel:+14805551234' }}
      />

      <Footer />
    </>
  )
}
