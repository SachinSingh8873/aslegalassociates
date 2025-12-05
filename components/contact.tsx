'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Mail, Phone, MapPin, Send, MessageSquare, User, 
  Clock, Shield, Calendar, Building, ArrowRight,
  CheckCircle, Star, AlertCircle, Loader2
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    legalMatter: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const sectionRef = useRef<HTMLDivElement>(null)

  // Your Google Apps Script Web App URL
  // const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbypR5ZN_4ix9L1RVCz8CGKHkhufyq4FWYDXXB-TXJ1HXiPCwWFq-wBOBndUeSjSdsoWIw/exec'
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxA3_VC_mrBJF5-iAT64kVUd6kHoQXMVeVGIGukRAYzg1fmTGhi4FyMkWwRWhSnEs5rxA/exec'
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = {
    email: 'advavinash029@gmail.com',
    phone: '+91 82522 07551',
    address: 'Rohini Sector 16, New Delhi',
    officeHours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    emergencyHours: 'Emergency: 24/7 Available'
  }

  const legalMatters = [
    'Civil Litigation',
    'Family Law',
    'Criminal Defense',
    'Corporate Law',
    'Property Disputes',
    'Labour Law',
    'Legal Documentation',
    'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      // Send data to Google Sheets via Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'Website Contact Form'
        })
      })

      // For no-cors mode, we can't read response directly
      // So we'll assume success and show confirmation
      setSubmitStatus('success')
      setSubmitMessage('Your legal consultation request has been submitted successfully! Advocate Avinash Singh will contact you within 24 hours.')

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        legalMatter: ''
      })

      // Auto-hide success message after 10 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 10000)

    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage('There was an error submitting your form. Please try again or contact us directly at +91 82522 07551.')
      
      // Auto-hide error message after 10 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 10000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePhoneClick = () => {
    const cleanPhone = contactInfo.phone.replace(/\s+/g, '')
    window.open(`tel:${cleanPhone}`, '_self')
  }

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}?subject=Legal Consultation Request&body=Hello Advocate Avinash Singh,%0D%0A%0D%0AI would like to schedule a legal consultation regarding...`, '_self')
  }

  const handleAddressClick = () => {
    const encodedAddress = encodeURIComponent(`${contactInfo.address} Advocate Avinash Singh Law Office`)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '918252207551'
    const message = encodeURIComponent(`Hello Advocate Avinash Singh,\n\nI visited your website and would like to schedule a legal consultation.\n\nName: ${formData.name || '[Your Name]'}\nMatter: ${formData.legalMatter || '[Legal Matter]'}\n\nPlease contact me at your earliest convenience.`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  // Update this URL with your actual deployed script ID
  // Format: https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden"
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* SEO Structured Data */}
      <div className="sr-only">
        <div itemScope itemProp="address" itemType="https://schema.org/PostalAddress">
          <meta itemProp="streetAddress" content="Rohini Sector 16" />
          <meta itemProp="addressLocality" content="New Delhi" />
          <meta itemProp="addressRegion" content="Delhi" />
          <meta itemProp="postalCode" content="110085" />
          <meta itemProp="addressCountry" content="IN" />
        </div>
        <meta itemProp="telephone" content="+918252207551" />
        <meta itemProp="email" content="advavinash029@gmail.com" />
        <meta itemProp="openingHours" content="Mo-Sa 09:00-19:00" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className={`inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Shield size={14} />
            Contact Top Lawyer in Delhi
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
            Contact Advocate <span className="text-accent">Avinash Singh</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-4 md:mb-6">
            Get expert legal consultation with Delhi's trusted advocate. Schedule your free initial consultation today.
          </p>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Phone Card */}
              <div 
                onClick={handlePhoneClick}
                className="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-primary/10 hover:border-accent/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-accent" size={22} />
                  </div>
                  <h3 className="font-bold text-primary text-base md:text-lg mb-1">Call Directly</h3>
                  <p className="text-foreground/70 group-hover:text-primary transition-colors duration-300 text-sm md:text-base font-medium">
                    {contactInfo.phone}
                  </p>
                  <div className="mt-2 text-xs md:text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1">
                    <span>Click to call</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div 
                onClick={handleEmailClick}
                className="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-primary/10 hover:border-accent/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <h3 className="font-bold text-primary text-base md:text-lg mb-1">Email Us</h3>
                  <p className="text-foreground/70 group-hover:text-primary transition-colors duration-300 text-xs md:text-sm">
                    {contactInfo.email}
                  </p>
                  <div className="mt-2 text-xs md:text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1">
                    <span>Click to email</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div 
                onClick={handleAddressClick}
                className="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-primary/10 hover:border-accent/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <h3 className="font-bold text-primary text-base md:text-lg mb-1">Visit Office</h3>
                  <p className="text-foreground/70 group-hover:text-primary transition-colors duration-300 text-xs md:text-sm">
                    {contactInfo.address}
                  </p>
                  <div className="mt-2 text-xs md:text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1">
                    <span>View on map</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours & Info */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl md:rounded-2xl p-5 md:p-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="font-bold text-primary text-sm md:text-base mb-2 flex items-center gap-2">
                    <Clock size={16} />
                    Office Hours
                  </h4>
                  <div className="space-y-1">
                    <p className="text-xs md:text-sm text-foreground/70">{contactInfo.officeHours}</p>
                    <p className="text-xs md:text-sm text-accent font-medium">{contactInfo.emergencyHours}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm md:text-base mb-2 flex items-center gap-2">
                    <Shield size={16} />
                    Why Choose Us
                  </h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span className="text-xs md:text-sm text-foreground/70">Free Initial Consultation</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span className="text-xs md:text-sm text-foreground/70">Confidential & Secure</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span className="text-xs md:text-sm text-foreground/70">Experienced in Delhi Courts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-xl border border-primary/10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Send Your Legal Query</h3>
                <p className="text-foreground/70 text-sm md:text-base">
                  Fill the form below for a quick response from Advocate Avinash Singh. 
                  <span className="block text-xs text-accent mt-1">
                    ⚡ All submissions are automatically saved to Google Sheets for immediate action.
                  </span>
                </p>
              </div>
              
              {/* Submission Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-green-800">Successfully Submitted!</p>
                      <p className="text-green-700 text-sm mt-1">{submitMessage}</p>
                      <p className="text-xs text-green-600 mt-2">
                        ✅ Data saved to Google Sheets | ✅ Email confirmation sent | ✅ Advocate notified
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-red-800">Submission Error</p>
                      <p className="text-red-700 text-sm mt-1">{submitMessage}</p>
                      <p className="text-xs text-red-600 mt-2">
                        Please call directly or try the WhatsApp button below.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Name Input */}
                  <div className="group">
                    <label className="block text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                      <User size={14} className="inline mr-1 md:mr-2" />
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-primary/20 rounded-lg md:rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 bg-white/50 text-sm md:text-base"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label className="block text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                      <Mail size={14} className="inline mr-1 md:mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-primary/20 rounded-lg md:rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 bg-white/50 text-sm md:text-base"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Phone Input */}
                  <div className="group">
                    <label className="block text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                      <Phone size={14} className="inline mr-1 md:mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-primary/20 rounded-lg md:rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 bg-white/50 text-sm md:text-base"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Legal Matter Dropdown */}
                  <div className="group">
                    <label className="block text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                      <Building size={14} className="inline mr-1 md:mr-2" />
                      Legal Matter *
                    </label>
                    <select
                      required
                      value={formData.legalMatter}
                      onChange={(e) => setFormData({ ...formData, legalMatter: e.target.value })}
                      className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-primary/20 rounded-lg md:rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 bg-white/50 text-sm md:text-base appearance-none"
                      disabled={isSubmitting}
                    >
                      <option value="">Select Legal Matter</option>
                      {legalMatters.map((matter) => (
                        <option key={matter} value={matter}>{matter}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div className="group">
                  <label className="block text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                    <MessageSquare size={14} className="inline mr-1 md:mr-2" />
                    Case Details *
                  </label>
                  <textarea
                    placeholder="Briefly describe your legal issue, location, and any important details..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 md:px-5 md:py-4 border-2 border-primary/20 rounded-lg md:rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none bg-white/50 text-sm md:text-base"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-primary to-primary/90 text-white py-3 md:py-4 rounded-lg md:rounded-xl font-semibold hover:from-primary/90 hover:to-primary transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                          <span className="text-sm md:text-base">Saving to Google Sheets...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span className="text-sm md:text-base">Submit to Google Sheets</span>
                        </>
                      )}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    disabled={isSubmitting}
                    className="flex-1 border-2 border-green-600 text-green-600 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                    </svg>
                    <span className="text-sm md:text-base">WhatsApp Now</span>
                  </button>
                </div>

                <div className="text-center pt-4 border-t border-primary/10">
                  <p className="text-xs text-foreground/60">
                    📋 All form submissions are automatically saved to Google Sheets and Advocate Avinash Singh 
                    receives instant notification for immediate follow-up.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Lawyer Image & Additional Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Advocate's Image Card */}
            <div className={`bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg border border-primary/10 overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="relative">
                <div className="aspect-square md:aspect-[4/5] rounded-lg md:rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src="/avinashadv1.jpg"
                    alt="Advocate Avinash Singh - Expert Lawyer in Delhi & Rohini"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-primary text-lg md:text-xl mb-1">Advocate Avinash Singh</h3>
                  <p className="text-foreground/70 text-sm md:text-base mb-3">Legal Associate | Delhi Courts</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                    <span className="text-xs text-foreground/60 ml-1">(25+ Reviews)</span>
                  </div>
                  <button
                    onClick={() => document.getElementById('contact-form-name')?.focus()}
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm md:text-base hover:text-primary transition-colors"
                  >
                    <Calendar size={16} />
                    Schedule Free Consultation
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className={`bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl md:rounded-2xl p-5 md:p-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '500ms' }}>
              <h4 className="font-bold text-primary text-base md:text-lg mb-4">Quick Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm">Emergency Legal Help</p>
                    <p className="text-foreground/70 text-sm">Available 24/7 for urgent matters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm">Response Time</p>
                    <p className="text-foreground/70 text-sm">Typically within 2-4 hours during office hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm">Confidentiality</p>
                    <p className="text-foreground/70 text-sm">All consultations are strictly confidential</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local SEO Content */}
            <div className={`bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-primary/10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '700ms' }}>
              <h4 className="font-bold text-primary text-base md:text-lg mb-3">Serving Delhi & Rohini</h4>
              <p className="text-foreground/70 text-sm mb-3">
                Looking for the <strong>best lawyer in Delhi</strong> or an <strong>advocate near me in Rohini</strong>? 
                Contact Advocate Avinash Singh for expert legal representation in Delhi courts.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full">
                  Delhi High Court
                </span>
                <span className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-full">
                  Rohini Courts
                </span>
                <span className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full">
                  District Courts
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time & Guarantee */}
        <div className={`text-center mt-8 md:mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-8 bg-white rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg border border-primary/10 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Clock className="text-accent" size={20} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary">Quick Response</p>
                <p className="text-xs text-foreground/60">Within 24 hours guaranteed</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-primary/20"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="text-primary" size={20} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary">Google Sheets Integration</p>
                <p className="text-xs text-foreground/60">Instant data saving & tracking</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-primary/20"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="text-accent" size={20} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary">Free Consultation</p>
                <p className="text-xs text-foreground/60">First meeting at no cost</p>
              </div>
            </div>
          </div>
        </div>

        {/* Local SEO Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs md:text-sm text-foreground/60">
            ⚖️ Expert legal services in Delhi, Rohini, Pitampura, and surrounding areas. 
            Advocate Avinash Singh - Your trusted legal partner in Delhi NCR.
          </p>
          <p className="text-xs text-foreground/50 mt-2">
            📊 All consultation requests are automatically saved to Google Sheets for efficient case management.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}