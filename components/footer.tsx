'use client'

import { Linkedin, Twitter, Facebook, Github, Mail, Phone, MapPin, Scale, ArrowUpRight, ExternalLink, Code } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [creditHover, setCreditHover] = useState(false)

  const contactInfo = {
    email: 'advavinash029@gmail.com',
    phone: '+91 82522 07551',
    address: 'Rohini Sector 16, New Delhi',
    facebook: 'https://www.facebook.com/profile.php?id=100009485733390',
    linkedin: '#',
    twitter: '#',
    instagram: '#'
  }

  const services = [
    { name: 'Corporate Law', desc: 'Business contracts & compliance' },
    { name: 'Civil Litigation', desc: 'Property & civil disputes' },
    { name: 'Family Law', desc: 'Divorce & family matters' },
    { name: 'Legal Documentation', desc: 'Drafting & vetting services' },
    { name: 'Legal Advisory', desc: 'Expert legal consultation' },
    { name: 'Dispute Resolution', desc: 'Mediation & arbitration' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Me', href: '#about' },
    { name: 'Statistics', href: '#statistics' },
    { name: 'Contact', href: '#contact' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#' }
  ]

  const handleEmailClick = () => {
    navigator.clipboard.writeText(contactInfo.email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const handlePhoneClick = () => {
    const cleanPhone = contactInfo.phone.replace(/\s+/g, '')
    window.open(`tel:${cleanPhone}`, '_self')
  }

  const handleAddressClick = () => {
    const encodedAddress = encodeURIComponent(contactInfo.address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  const handleDeveloperClick = () => {
    window.open('https://itspire.online', '_blank')
  }

  return (
    <footer className="relative bg-gradient-to-b from-primary to-primary/90 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 py-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <Scale className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Advocate Avinash Singh</h3>
                <p className="text-white/80 text-sm">Legal Associate | 2024 Law Graduate</p>
              </div>
            </div>
            
            <p className="text-white/80">
              Providing exceptional legal representation with integrity, 
              dedication, and a commitment to achieving justice for every client.
            </p>
            
            <div className="space-y-3">
              {/* Email with copy functionality */}
              <div 
                onClick={handleEmailClick}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-accent" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-medium">{contactInfo.email}</p>
                </div>
                {emailCopied ? (
                  <span className="text-sm text-accent animate-pulse">Copied!</span>
                ) : (
                  <ExternalLink className="text-white/40 group-hover:text-accent" size={16} />
                )}
              </div>

              {/* Phone with click-to-call */}
              <div 
                onClick={handlePhoneClick}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-accent" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/60">Phone</p>
                  <p className="font-medium">{contactInfo.phone}</p>
                </div>
                <ExternalLink className="text-white/40 group-hover:text-accent" size={16} />
              </div>

              {/* Address with map link */}
              <div 
                onClick={handleAddressClick}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/60">Office</p>
                  <p className="font-medium">{contactInfo.address}</p>
                </div>
                <ExternalLink className="text-white/40 group-hover:text-accent" size={16} />
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              Quick Links
              <ArrowUpRight className="text-accent" size={20} />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-white/80 hover:text-accent transition-all duration-300 group py-2"
                  >
                    <span className="w-2 h-2 bg-accent/50 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    {link.name}
                    <ExternalLink className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              Legal Services
              <Scale className="text-accent" size={20} />
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium group-hover:text-accent transition-colors duration-300">
                        {service.name}
                      </span>
                      <ArrowUpRight className="text-white/40 group-hover:text-accent transition-colors duration-300" size={16} />
                    </div>
                    <p className="text-sm text-white/60">{service.desc}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter Column */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold mb-6">Connect With Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: contactInfo.linkedin, label: 'LinkedIn' },
                  { icon: Twitter, href: contactInfo.twitter, label: 'Twitter' },
                  { icon: Facebook, href: contactInfo.facebook, label: 'Facebook' },
                  { icon: Github, href: '#', label: 'GitHub' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon 
                      className="text-white group-hover:text-accent transition-colors duration-300" 
                      size={22} 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="font-bold mb-4">Office Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between text-sm">
                  <span className="text-white/60">Mon - Fri</span>
                  <span>9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-white/60">Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-white/60">Sunday</span>
                  <span className="text-accent">By Appointment</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm text-white/60">
                  Emergency consultations available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/60">
                &copy; {new Date().getFullYear()} Advocate Avinash Singh. All rights reserved.
              </p>
              <p className="text-sm text-white/40 mt-2">
                Member of the Bar Council of Delhi | Legal Practitioner
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                Disclaimer
              </a>
              <a href="#contact" className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium">
                Schedule Consultation →
              </a>
            </div>
          </div>

          {/* Developer Credit - Added this section */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <div 
                onClick={handleDeveloperClick}
                onMouseEnter={() => setCreditHover(true)}
                onMouseLeave={() => setCreditHover(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <Code className="text-accent" size={16} />
                <span className="text-white/60 text-sm">
                  Designed & Developed by{' '}
                  <span className="text-accent font-semibold group-hover:text-white transition-colors duration-300">
                    Sachin Singh
                  </span>
                </span>
                <ExternalLink 
                  className={`text-white/40 transition-all duration-300 ${creditHover ? 'translate-x-1 opacity-100' : 'opacity-0'}`} 
                  size={14} 
                />
              </div>
            </div>
          </div>

          {/* Accreditation */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-white/40">
              This website is for informational purposes only and does not constitute legal advice.
              Consult with a qualified attorney for legal guidance specific to your situation.
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ArrowUpRight className="rotate-90" size={20} />
        </button>
      </div>
    </footer>
  )
}