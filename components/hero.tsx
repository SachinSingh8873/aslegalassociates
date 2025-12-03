'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on initial render and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Trigger fade-in animation
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      clearTimeout(timer)
    }
  }, [])

  const soonmsg = () => {
    alert("This feature will be Available Soon.")
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-gradient-to-br from-primary to-primary/80 text-white flex items-center overflow-hidden"
    >
      {/* Background Image for Mobile */}
      <div className="md:hidden absolute inset-0 z-0">
        <img
          src="/avinashadv1.jpg"
          alt="Advocate Avinash Singh"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-slideUp">
                Advocate Avinash Singh
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-xl text-white/90 animate-slideUp delay-100">
                2024 Law Graduate | Legal Associate
              </p>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-lg text-white/80 animate-slideUp delay-200">
                Dedicated to providing exceptional legal representation and comprehensive 
                legal solutions for your business and personal needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slideUp delay-300">
              <button 
                onClick={() => {
                  const phoneNumber = '918252207551' // Your phone number without + or spaces
                  const message = encodeURIComponent('Hello Advocate Avinash Singh, I would like to schedule a legal consultation regarding my case.')
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
                  window.open(whatsappUrl, '_blank')
                }}
                className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl shadow-accent/20"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={soonmsg}
                className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm hover:backdrop-blur-md">
                View Case History
              </button>
            </div>
          </div>

          {/* Desktop Image */}
          <div className={`hidden md:flex items-center justify-center transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <img
                src="/avinashadv1.jpg"
                alt="Advocate Avinash Singh"
                className="relative rounded-lg shadow-2xl object-cover w-full h-96 transition-transform duration-500 group-hover:scale-105 border-4 border-white/10 group-hover:border-accent/30"/>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-white/60 animate-pulse">Scroll Down</span>
          <ChevronDown 
            size={32} 
            className="text-accent animate-bounce" 
          />
        </div>
      </div>

      {/* Add custom animation keyframes in global CSS or use Tailwind extensions */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        .animate-slideUp.delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        .animate-slideUp.delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animate-slideUp.delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}