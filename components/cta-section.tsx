import Link from 'next/link'

interface CTASectionProps {
  title: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="bg-blue-50 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-blue-950">
          {title}
        </h2>

        {description && (
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCta && (
            <Link href={primaryCta.href} className="bg-blue-950 text-white px-8 py-3 rounded font-semibold hover:bg-blue-900 transition-colors">
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} className="border-2 border-blue-950 text-blue-950 px-8 py-3 rounded font-semibold hover:bg-blue-950 hover:text-white transition-colors">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
