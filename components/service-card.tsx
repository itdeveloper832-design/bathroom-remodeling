import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  link?: { label: string; href: string }
}

export function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-blue-100 p-3 rounded">
          <Icon className="text-blue-950" size={24} />
        </div>
        <h3 className="font-poppins font-semibold text-lg">{title}</h3>
      </div>

      <p className="text-slate-600 text-sm mb-4">{description}</p>

      {link && (
        <Link href={link.href} className="text-blue-950 font-semibold hover:text-blue-900 transition-colors text-sm">
          {link.label} →
        </Link>
      )}
    </div>
  )
}
