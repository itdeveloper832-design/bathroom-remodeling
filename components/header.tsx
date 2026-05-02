'use client'

import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-poppins font-bold text-2xl text-blue-950">
          ARZ Home Remodeling
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="text-slate-700 hover:text-blue-950 transition-colors">
              {link.label}
            </Link>
          ))}
          <a href="tel:+14805551234" className="flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded">
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-4">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="block text-slate-700 hover:text-blue-950">
              {link.label}
            </Link>
          ))}
          <a href="tel:+14805551234" className="flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded w-fit">
            <Phone size={16} />
            Call Now
          </a>
        </div>
      )}
    </header>
  )
}
