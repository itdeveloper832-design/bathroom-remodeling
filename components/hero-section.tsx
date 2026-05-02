import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  backgroundClass?: string
}

export function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundClass = 'bg-gradient-to-r from-blue-950 to-blue-900',
}: HeroSectionProps) {
  return (
    <section className={`${backgroundClass} text-white py-20 md:py-32`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCta && (
            <Link href={primaryCta.href} className="bg-white text-blue-950 px-8 py-3 rounded font-semibold hover:bg-slate-100 transition-colors">
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-blue-950 transition-colors">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
