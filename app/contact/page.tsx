import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ContactForm } from '@/components/contact-form'
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us for Free Bathroom Remodeling Quote | Arizona',
  description: 'Contact ARZ Remodeling for a free consultation and quote on bathroom remodeling, shower renovation, or tub-to-shower conversion. Call or fill out our form today.',
  keywords: 'contact bathroom remodeler, free remodeling quote, bathroom consultation, contact remodeling contractor Arizona',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How long does a bathroom remodeling project typically take?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "Project timelines vary depending on scope and complexity. A simple shower renovation might take 2-4 weeks, while a complete bathroom remodel could take 6-12 weeks. We'll provide a detailed timeline during your consultation."
      }
    },
    {
      '@type': 'Question',
      'name': 'What is the typical cost of bathroom remodeling?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Bathroom remodeling costs vary widely based on scope, materials, and features. A simple renovation might start at $15,000, while a luxury remodel could exceed $50,000. We provide free, detailed estimates for all projects.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do you offer financing for bathroom remodeling projects?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "We can discuss financing options during your consultation. Many homeowners use home equity loans, personal loans, or credit lines. We'll help you understand all your options."
      }
    },
    {
      '@type': 'Question',
      'name': 'Can you help with bathroom design and planning?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Absolutely! Design consultation is a key part of our service. Our experienced team helps you explore options, select materials and fixtures, and create a bathroom that perfectly fits your vision and budget.'
      }
    }
  ]
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <HeroSection
        title="Contact ARZ Remodeling for Your Free Bathroom Remodeling Quote"
        subtitle="Reach out today for a free consultation and estimate on your bathroom renovation project"
        primaryCta={{ label: 'Contact Main Office', href: 'https://arzhomeremodeling.vercel.app/contact' }}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="prose prose-sm max-w-3xl mx-auto text-slate-700 space-y-4 mb-12">
            <p>
              Ready to transform your bathroom? Contact ARZ Remodeling today to schedule your free consultation with our professional team. Whether you&apos;re interested in a complete bathroom remodeling project, a luxury shower renovation, or a tub-to-shower conversion, we&apos;re here to help bring your vision to life.
            </p>
            <p>
              Our friendly team is happy to discuss your project, answer questions, and provide a detailed, obligation-free estimate. We serve homeowners throughout Chandler, Phoenix, Tempe, and all of Arizona with professional bathroom remodeling services, expert installation, and outstanding customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-poppins font-bold text-3xl mb-8 text-blue-950">
                Send us a message
              </h2>
              <p className="text-slate-600 mb-6">
                Fill out the form below and we&apos;ll get back to you within 24 hours to discuss your bathroom remodeling project.
              </p>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-poppins font-bold text-3xl mb-8 text-blue-950">
                  Get in Touch
                </h2>
                <p className="text-slate-600 mb-6">
                  Have questions? We&apos;re here to help. Reach out using any of the methods below and our team will respond promptly.
                </p>
              </div>

              <div className="flex gap-4">
                <Phone className="text-blue-950 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-poppins font-semibold text-blue-950 mb-1 text-lg">Phone</h3>
                  <p className="text-slate-600 mb-1">Call us for a free consultation</p>
                  <a href="tel:+14805551234" className="text-blue-950 font-semibold hover:text-blue-900 text-lg">
                    (480) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-blue-950 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-poppins font-semibold text-blue-950 mb-1 text-lg">Email</h3>
                  <p className="text-slate-600 mb-1">Send us an email anytime</p>
                  <a href="mailto:info@arzhomeremodeling.com" className="text-blue-950 font-semibold hover:text-blue-900 break-all">
                    info@arzhomeremodeling.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-blue-950 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-poppins font-semibold text-blue-950 mb-1 text-lg">Service Areas</h3>
                  <p className="text-slate-600 mb-2">We serve homeowners throughout Arizona including:</p>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li>• Chandler</li>
                    <li>• Phoenix</li>
                    <li>• Tempe</li>
                    <li>• And surrounding communities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-poppins font-semibold text-blue-950 mb-3">Learn More</h3>
                <p className="text-slate-600 mb-4">
                  For our complete portfolio, testimonials, and additional information about our bathroom remodeling services, visit:
                </p>
                <a href="https://arzhomeremodeling.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-950 text-white px-6 py-2 rounded font-semibold hover:bg-blue-900 transition-colors">
                  arzhomeremodeling.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-blue-950">
            What to Expect When You Contact Us
          </h2>
          <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
            <p>
              When you reach out to ARZ Remodeling, you&apos;re beginning a partnership with a team that genuinely cares about your satisfaction. Whether you fill out our contact form, call us directly, or email us, you can expect a prompt, professional response from our friendly team.
            </p>
            <p>
              During our initial consultation, we&apos;ll listen to your vision, discuss your budget and timeline, ask questions about your needs, and provide expert recommendations based on our 20+ years of experience. We&apos;ll explain your options clearly and help you make informed decisions about your bathroom remodeling project.
            </p>
            <p>
              There&apos;s never any obligation when you contact us for a consultation. Our goal is simply to understand your needs and determine if we&apos;re the right fit for your project. We believe in building relationships based on trust and transparency, and that starts with honest conversations about what you want to achieve with your bathroom remodel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Responsive Communication', desc: 'We return calls and emails promptly and keep you informed every step of the way' },
              { title: 'Expert Consultation', desc: 'Our experienced team provides honest advice and creative solutions for your bathroom needs' },
              { title: 'Flexible Scheduling', desc: 'We work with your schedule to ensure consultations and projects fit your timeline' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-poppins font-semibold text-lg text-blue-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-12">
            <h3 className="font-poppins font-bold text-2xl mb-6 text-blue-950">
              Frequently Asked Questions About Bathroom Remodeling
            </h3>
            <div className="space-y-6">
              {[
                {
                  q: 'How long does a bathroom remodeling project typically take?',
                  a: 'Project timelines vary depending on scope and complexity. A simple shower renovation might take 2-4 weeks, while a complete bathroom remodel could take 6-12 weeks. We&apos;ll provide a detailed timeline during your consultation.'
                },
                {
                  q: 'What is the typical cost of bathroom remodeling?',
                  a: 'Bathroom remodeling costs vary widely based on scope, materials, and features. A simple renovation might start at $15,000, while a luxury remodel could exceed $50,000. We provide free, detailed estimates for all projects.'
                },
                {
                  q: 'Do you offer financing for bathroom remodeling projects?',
                  a: 'We can discuss financing options during your consultation. Many homeowners use home equity loans, personal loans, or credit lines. We&apos;ll help you understand all your options.'
                },
                {
                  q: 'Can you help with bathroom design and planning?',
                  a: 'Absolutely! Design consultation is a key part of our service. Our experienced team helps you explore options, select materials and fixtures, and create a bathroom that perfectly fits your vision and budget.'
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
                  <h4 className="font-poppins font-semibold text-lg text-blue-950 mb-2">{faq.q}</h4>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-slate-200 pt-12">
              <h3 className="font-poppins font-bold text-2xl mb-6 text-blue-950">
                Getting Started with Your Bathroom Remodeling Project
              </h3>
              <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
                <p>
                  The bathroom remodeling process with ARZ Remodeling is straightforward and stress-free. Here&apos;s what you can expect when you contact us:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h4 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Step 1: Initial Contact</h4>
                  <p className="text-slate-600 text-sm">
                    Reach out via phone, email, or our contact form. We&apos;ll respond within 24 hours to schedule your free consultation.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h4 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Step 2: Free Consultation</h4>
                  <p className="text-slate-600 text-sm">
                    We visit your home, listen to your needs, ask questions, and provide expert recommendations based on our experience.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h4 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Step 3: Detailed Estimate</h4>
                  <p className="text-slate-600 text-sm">
                    We provide a comprehensive, written estimate detailing all costs, materials, timeline, and project scope.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h4 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Step 4: Project Approval</h4>
                  <p className="text-slate-600 text-sm">
                    If you&apos;re ready to proceed, we finalize the contract and schedule your project for convenient timing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
