'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', phone: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-4 py-2 border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-950"
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-4 py-2 border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-950"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-4 py-2 border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-950"
        required
      />
      <textarea
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full px-4 py-2 border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-950 resize-none h-32"
        required
      />
      <Button type="submit" className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold">
        Send Message
      </Button>
      {submitted && (
        <p className="text-green-600 text-center font-semibold">Message sent! We&apos;ll contact you soon.</p>
      )}
    </form>
  )
}
