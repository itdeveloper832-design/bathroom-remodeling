import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">ARZ Home Remodeling</h3>
            <p className="text-slate-300">Professional home remodeling and renovation services across Arizona.</p>
            <p className="mt-4 text-slate-300 text-sm">
              {/* Verified Arizona Registrar of Contractors license number */}
              ROC Licensed | License #ROC338304 - <a href="https://roc.az.gov" target="_blank" rel="noopener" className="hover:text-white transition-colors underline">Licensed by the Arizona Registrar of Contractors</a>
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Contact Info</h4>
            <p className="text-slate-300">
              Address: 6710 W Chicago St, Chandler, AZ 85226
            </p>
            <p className="text-slate-300">
              Phone: <a href="tel:2293065591" className="hover:text-white transition-colors">(229) 306-5591</a>
            </p>
            <p className="text-slate-300">
              Email: <a href="mailto:info@arzremodeling.com" className="hover:text-white transition-colors">info@arzremodeling.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; 2024 ARZ Home Remodeling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
