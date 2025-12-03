'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = {
    email: 'advavinash029@gmail.com',
    phone: '+91 82522 07551',
    address: 'Rohini Sector 16, New Delhi'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
      alert('Thank you for your message! We will contact you soon.')
    }, 1000)
  }

  const handlePhoneClick = () => {
    // Remove spaces and special characters for tel: link
    const cleanPhone = contactInfo.phone.replace(/\s+/g, '')
    window.open(`tel:${cleanPhone}`, '_self')
  }

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_self')
  }

  const handleAddressClick = () => {
    const encodedAddress = encodeURIComponent(contactInfo.address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-primary/5 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-slideUp">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-6">
            Have a legal question or need consultation? Reach out to me directly
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto animate-pulse"></div>
        </div>

        {/* Contact Info Cards - Enhanced with hover effects */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div 
            onClick={handleEmailClick}
            className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-primary/10 hover:border-accent/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-primary text-xl mb-2">Email Us</h3>
              <p className="text-foreground/70 group-hover:text-primary transition-colors duration-300">
                {contactInfo.email}
              </p>
              <div className="mt-4 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to compose email →
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div 
            onClick={handlePhoneClick}
            className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-primary/10 hover:border-accent/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-accent" size={28} />
              </div>
              <h3 className="font-bold text-primary text-xl mb-2">Call Now</h3>
              <p className="text-foreground/70 group-hover:text-primary transition-colors duration-300 text-lg font-medium">
                {contactInfo.phone}
              </p>
              <div className="mt-4 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to call directly →
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div 
            onClick={handleAddressClick}
            className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-primary/10 hover:border-accent/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-primary text-xl mb-2">Visit Office</h3>
              <p className="text-foreground/70 group-hover:text-primary transition-colors duration-300">
                {contactInfo.address}
              </p>
              <div className="mt-4 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to view on map →
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - Enhanced */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto border border-primary/10">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-primary mb-3">Send a Message</h3>
              <p className="text-foreground/70">Fill out the form below and I'll get back to you shortly</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="group">
                  <label className="block text-sm font-medium text-primary mb-2">
                    <User size={16} className="inline mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-primary/20 rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 bg-white/50"
                  />
                </div>

                {/* Email Input */}
                <div className="group">
                  <label className="block text-sm font-medium text-primary mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-primary/20 rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 bg-white/50"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="group">
                <label className="block text-sm font-medium text-primary mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-primary/20 rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 bg-white/50"
                />
              </div>

              {/* Message Input */}
              <div className="group">
                <label className="block text-sm font-medium text-primary mb-2">
                  <MessageSquare size={16} className="inline mr-2" />
                  Your Message
                </label>
                <textarea
                  placeholder="Please describe your legal matter..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-primary/20 rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none bg-white/50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary/90 text-white py-4 rounded-xl font-semibold hover:from-primary/90 hover:to-primary transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Response Time Note */}
        <div className="text-center mt-12">
          <p className="text-foreground/60 text-sm">
            ⚖️ Typical response time: 24-48 hours | Emergency calls prioritized
          </p>
        </div>
      </div>
    </section>
  )
}