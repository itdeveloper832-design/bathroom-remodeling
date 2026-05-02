import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { CTASection } from '@/components/cta-section'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About ARZ Remodeling | Expert Bathroom Contractors in Arizona',
  description: 'Learn about our professional bathroom remodeling team with 20+ years of experience in Chandler, Phoenix, and Arizona. Licensed, insured contractors dedicated to quality craftsmanship.',
  keywords: 'bathroom remodeling contractors, professional remodeling company Arizona, licensed bathroom contractors, experienced remodelers',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <HeroSection
        title="About Our Team"
        subtitle="Professional expertise in home remodeling with over 20 years of experience"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-blue-950">
              Professional Bathroom Remodeling Contractors in Arizona
            </h2>
            <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
              <p>
                ARZ Remodeling is Arizona&apos;s trusted team of professional bathroom remodeling contractors, dedicated to transforming homes with quality craftsmanship and meticulous attention to detail. With over 20 years of experience in bathroom remodeling, shower renovations, and tub-to-shower conversions, we&apos;ve earned a reputation for reliability, quality materials, and exceptional customer satisfaction throughout Chandler, Phoenix, Tempe, and all of Arizona.
              </p>
              <p>
                Our journey in the home remodeling industry has been built on a foundation of expertise, integrity, and commitment to customer satisfaction. We started with a simple vision: to provide homeowners with professional, high-quality bathroom remodeling services that transform outdated spaces into beautiful, functional sanctuaries. Over more than two decades, we&apos;ve completed hundreds of successful projects, earning the trust and respect of countless Arizona homeowners.
              </p>
              <p>
                Every bathroom remodeling project we undertake is an opportunity to exceed expectations and create beautiful, functional spaces that enhance your home&apos;s value and your quality of life. We understand that a bathroom remodeling project is a significant investment, which is why we approach every project with the highest standards of professionalism, attention to detail, and customer service.
              </p>
              <p>
                Our team consists of licensed, insured, and highly skilled contractors who specialize in all aspects of bathroom remodeling. From architectural design and space planning to plumbing, electrical work, tile installation, and final finishing touches, we handle every element of your project with expertise and care. We stay current with the latest bathroom design trends, materials, and building code requirements, ensuring your new bathroom is both beautiful and compliant.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-poppins font-bold text-2xl mb-6 text-blue-950">
                What Sets Us Apart
              </h3>
              <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
                <p>
                  In a competitive market, we distinguish ourselves through superior craftsmanship, transparent communication, and unwavering commitment to customer satisfaction. When you choose ARZ Remodeling for your bathroom project, you&apos;re choosing a team that views your home as if it were our own.
                </p>
                <p>
                  We believe in quality over shortcuts. We source premium materials from trusted manufacturers, employ skilled craftspeople, and manage every detail of your project with precision. Our comprehensive bathroom remodeling services include design consultation, material selection, structural modifications, plumbing and electrical updates, tile work, fixture installation, and finishing touches.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 border border-slate-200 h-fit">
              <h3 className="font-poppins font-semibold text-xl mb-6 text-blue-950">
                Why Choose ARZ Remodeling
              </h3>
              <ul className="space-y-4">
                {[
                  'Licensed, bonded, and insured contractors',
                  '20+ years of bathroom remodeling experience',
                  'Premium quality materials and fixtures',
                  'On-time project completion guarantee',
                  'Free consultations and detailed estimates',
                  'Professional customer service from start to finish',
                  'Transparent pricing with no hidden costs',
                  'Local expertise serving Chandler, Phoenix, Tempe, and Arizona'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-950 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-12">
            <h3 className="font-poppins font-bold text-2xl mb-6 text-blue-950">
              Our Commitment to You
            </h3>
            <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
              <p>
                When you partner with ARZ Remodeling, you&apos;re getting more than bathroom remodeling services—you&apos;re investing in a relationship with a team committed to your complete satisfaction. We communicate clearly throughout every phase of your project, keeping you informed about progress, timelines, and any decisions that need to be made. We respect your home, your time, and your investment.
              </p>
              <p>
                Our goal is to make the bathroom remodeling process as smooth and enjoyable as possible. From the initial consultation where we understand your vision and discuss your budget, through the design and planning phase, to the professional installation and final walkthrough, we&apos;re here to guide you every step of the way. We take pride in our work and stand behind the quality of every project we complete.
              </p>
              <p>
                We believe in building long-term relationships with our clients. Many homeowners who have worked with us for their bathroom remodeling projects return to us for other home improvement needs, which is a testament to the quality of our work and the trust we&apos;ve earned. We&apos;re not just contractors—we&apos;re your partners in creating the home you&apos;ve always wanted.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-12">
            <h3 className="font-poppins font-bold text-2xl mb-6 text-blue-950">
              Bathroom Remodeling Excellence Across Arizona
            </h3>
            <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
              <p>
                Whether you&apos;re looking to update an outdated bathroom, increase your home&apos;s value, or create a spa-like retreat, ARZ Remodeling has the expertise and dedication to bring your vision to life. We serve homeowners throughout Chandler, Phoenix, Tempe, and all of Arizona with professional bathroom remodeling services that combine quality, expertise, and exceptional customer service.
              </p>
              <p>
                Our team is constantly updating their knowledge of new materials, design trends, and installation techniques. We understand that bathroom remodeling is an investment, and we&apos;re committed to delivering results that provide lasting value and enjoyment for your family.
              </p>
              <p>
                When you choose ARZ Remodeling, you&apos;re choosing a local company with deep roots in Arizona. We understand the unique climate, building challenges, and design preferences of Arizona homeowners. We&apos;re proud to be part of the communities we serve, and we take that responsibility seriously by delivering exceptional work and service every single day.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-12">
            <h3 className="font-poppins font-bold text-2xl mb-6 text-blue-950">
              Professional Credentials & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Licensed & Insured</h4>
                <p className="text-slate-700">
                  All our contractors are fully licensed, bonded, and insured. We comply with all Arizona building codes and regulations. Your peace of mind is our priority.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Specialized Training</h4>
                <p className="text-slate-700">
                  Our team continuously updates their skills with latest techniques, materials, and design trends. We invest in ongoing professional development.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Quality Guarantees</h4>
                <p className="text-slate-700">
                  We stand behind our work with comprehensive warranties and guarantees. Your satisfaction is guaranteed, or we make it right.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Community Involvement</h4>
                <p className="text-slate-700">
                  We&apos;re proud members of the Arizona business community and maintain strong relationships with suppliers and industry partners.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-blue-50 rounded-lg p-8 border border-slate-200 text-center">
              <h3 className="font-poppins font-bold text-2xl mb-4 text-blue-950">
                Ready to Start Your Bathroom Remodeling Project?
              </h3>
              <p className="text-slate-700 mb-6">
                Contact us today for a free consultation and discover why Arizona homeowners trust ARZ Remodeling for their bathroom renovations. Our experienced team is ready to help you create the bathroom of your dreams.
              </p>
              <Link href="/contact" className="inline-block bg-blue-950 text-white px-8 py-3 rounded font-semibold hover:bg-blue-900 transition-colors">
                Get Free Consultation
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-poppins font-bold text-2xl mb-4 text-blue-950">
              For more information about our team and services
            </h2>
            <Link href="https://arzhomeremodeling.com" target="_blank" rel="noopener noreferrer" className="text-blue-950 font-semibold text-lg hover:text-blue-900 transition-colors">
              Visit arzhomeremodeling.com
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Let&apos;s Transform Your Home"
        description="Contact us today for a free consultation and quote"
        primaryCta={{ label: 'Get Free Quote', href: '/contact' }}
      />

      <Footer />
    </>
  )
}
