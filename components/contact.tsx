'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Thank you for your message. We will contact you soon!');
  }

  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition">
            <Mail className="text-primary mx-auto mb-4" size={40} />
            <h3 className="font-bold text-primary mb-2">Email</h3>
            <p className="text-foreground/70">advavinash029@gmail.com</p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition">
            <Phone className="text-secondary mx-auto mb-4" size={40} />
            <h3 className="font-bold text-primary mb-2">Phone</h3>
            <p className="text-foreground/70">+91 82522 07551</p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition">
            <MapPin className="text-primary mx-auto mb-4" size={40} />
            <h3 className="font-bold text-primary mb-2">Office</h3>
            <p className="text-foreground/70">Rohini Sector 16, New Delhi</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-12 shadow-xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Your Phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
