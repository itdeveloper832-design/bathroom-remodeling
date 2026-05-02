import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { CTASection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Bathroom Remodeling Gallery | Before & After Projects | Arizona',
  description: 'View our professional bathroom remodeling projects, shower renovations, and before & after transformations in Arizona. Custom designs and quality craftsmanship.',
  keywords: 'bathroom remodeling gallery, shower renovation photos, bathroom before and after, Arizona remodeling projects',
}

const galleryItems = [
  { id: '1', title: 'Modern Master Bathroom Renovation', image: '/images/gallery-1.jpg', category: 'Bathroom', description: 'Complete master bathroom transformation with modern fixtures' },
  { id: '2', title: 'Luxury Walk-In Shower Installation', image: '/images/gallery-2.jpg', category: 'Shower', description: 'Custom walk-in shower with premium tile and fixtures' },
  { id: '3', title: 'Guest Bathroom Remodel', image: '/images/gallery-3.jpg', category: 'Bathroom', description: 'Contemporary guest bathroom design in neutral tones' },
  { id: '4', title: 'Spa-Style Shower System', image: '/images/gallery-4.jpg', category: 'Shower', description: 'Luxury shower with rainfall head and custom tile work' },
  { id: '5', title: 'Accessible Bathroom Design', image: '/images/gallery-5.jpg', category: 'Conversion', description: 'Universal design bathroom with safety features' },
  { id: '6', title: 'Luxury Vanity Remodel', image: '/images/gallery-6.jpg', category: 'Bathroom', description: 'Premium vanity installation with quartz countertops' },
]

export default function GalleryPage() {
  return (
    <>
      <Header />
      <HeroSection
        title="Bathroom Remodeling & Renovation Gallery"
        subtitle="View our portfolio of professional bathroom remodeling projects in Arizona"
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-6 text-blue-950">
            Our Bathroom Remodeling Projects & Gallery
          </h2>
          <div className="prose prose-sm max-w-3xl mx-auto text-center text-slate-700 mb-12 space-y-4">
            <p>
              Browse our comprehensive portfolio of bathroom renovations, shower installations, and complete remodeling projects across Chandler, Phoenix, Tempe, and throughout Arizona. These projects showcase our commitment to quality craftsmanship, attention to detail, and customer satisfaction. From modern master bathrooms to luxury shower installations and practical tub-to-shower conversions, our gallery demonstrates the transformations we&apos;ve completed for Arizona homeowners.
            </p>
            <p>
              Each project represents a unique collaboration between our experienced team and homeowners who trusted us with their vision. We take pride in delivering beautiful, functional bathrooms that exceed expectations and add lasting value to homes throughout Arizona.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-blue-950 text-white text-sm px-3 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-poppins font-semibold text-lg text-blue-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-blue-950">
            What Our Bathroom Remodeling Clients Say
          </h2>
          <div className="prose prose-sm max-w-none text-slate-700 space-y-4 mb-12">
            <p>
              Our gallery represents more than just beautiful bathrooms—it represents successful partnerships with homeowners who trusted us to bring their vision to life. Each project reflects the unique needs, preferences, and personalities of the families who use these spaces every day.
            </p>
            <p>
              From initial consultation through final walkthrough, we work closely with homeowners to ensure their expectations are not just met but exceeded. Our commitment to quality, communication, and customer service has earned us an outstanding reputation throughout Arizona.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'ARZ Remodeling transformed our outdated bathroom into a modern sanctuary. The team was professional, responsive, and delivered exceptional quality.', author: 'Sarah M., Chandler' },
              { quote: 'The shower remodel exceeded our expectations. The attention to detail and craftsmanship were outstanding. We highly recommend them!', author: 'James & Linda L., Phoenix' },
              { quote: 'From start to finish, the team was excellent. They handled our tub-to-shower conversion perfectly and our bathroom is now safer and more functional.', author: 'Robert T., Tempe' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg border border-slate-200">
                <p className="text-slate-700 mb-3 italic">&quot;{testimonial.quote}&quot;</p>
                <p className="font-poppins font-semibold text-blue-950 text-sm">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-blue-950">
            Bathroom Remodeling Before & After Transformations
          </h2>
          <div className="prose prose-sm max-w-none text-slate-700 space-y-4 mb-8">
            <p>
              Our bathroom remodeling projects showcase the dramatic transformations we create for Arizona homeowners. Whether it&apos;s a complete bathroom renovation, a luxury shower installation, or a tub-to-shower conversion, each project demonstrates our expertise, attention to detail, and commitment to quality.
            </p>
            <p>
              The projects in our gallery represent just a sampling of our extensive portfolio. We&apos;ve completed bathroom remodeling projects throughout Chandler, Phoenix, Tempe, and surrounding Arizona communities, helping homeowners create bathrooms that are both beautiful and functional. Every bathroom tells a story—the vision of homeowners and the expertise of our professional contractors working together to create something truly special.
            </p>
            <p>
              Looking at these projects, you&apos;ll notice the quality of materials, the precision of installation, and the attention to detail that goes into every bathroom remodeling project we undertake. We don&apos;t just install bathrooms; we create spaces that enhance your home&apos;s value and your daily living experience.
            </p>
          </div>
          <div className="text-center mb-12">
            <p className="text-slate-700 mb-6">
              Interested in seeing more of our work and our complete project portfolio?
            </p>
            <Link href="https://arzhomeremodeling.com/gallery" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-950 text-white px-8 py-3 rounded font-semibold hover:bg-blue-900 transition-colors">
              View Complete Gallery
            </Link>
          </div>

          <div className="border-t border-slate-200 pt-12">
            <h2 className="font-poppins font-bold text-2xl mb-6 text-blue-950">
              Different Styles, Same Quality
            </h2>
            <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
              <p>
                Our bathroom remodeling portfolio showcases a wide variety of design styles and project types. From contemporary minimalist bathrooms to traditional elegant designs, from luxury master bath retreats to practical family bathrooms, and from complete remodels to focused renovations, we have experience with every style and scope of project.
              </p>
              <p>
                What remains consistent across all our work is the quality of materials, precision of installation, and attention to detail. Whether you prefer modern clean lines, classic elegance, transitional style, or spa-inspired luxury, our team can create exactly what you envision while maintaining the highest standards of craftsmanship.
              </p>
              <p>
                When you look through our gallery, you&apos;ll see that each bathroom tells a story. You&apos;ll see how we&apos;ve solved unique challenges, incorporated personal preferences, and delivered results that our clients absolutely love. Every project is a testament to our commitment to excellence and customer satisfaction.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Master Bathroom Renovations</h3>
                <p className="text-slate-600 text-sm">
                  Create your personal spa retreat with luxury fixtures, spa-like features, and premium finishes. Master bathrooms are your private sanctuary.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Guest & Family Bathrooms</h3>
                <p className="text-slate-600 text-sm">
                  Practical, beautiful bathrooms that serve the needs of your entire family and impress your guests with quality design.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Walk-In Shower Installations</h3>
                <p className="text-slate-600 text-sm">
                  Modern, accessible showers with custom tile work, premium fixtures, and luxury features like rainfall showerheads.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-poppins font-semibold text-lg text-blue-950 mb-3">Accessible Design Projects</h3>
                <p className="text-slate-600 text-sm">
                  Safety-focused bathrooms with universal design principles, grab bars, and accessible features for all ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Your Transformation?"
        description="Contact us today to discuss your remodeling project"
        primaryCta={{ label: 'Get Started', href: '/contact' }}
      />

      <Footer />
    </>
  )
}
