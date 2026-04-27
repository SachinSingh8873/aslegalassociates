'use client'

import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

interface ImageData {
  url: string
  alt: string
  title: string
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [showCaseHistory, setShowCaseHistory] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const images: ImageData[] = [
    {
      url: '/avinashadv3.jpg',
      alt: 'Advocate Avinash Singh - Professional Lawyer',
      title: 'Expert Legal Consultation'
    },
    {
      url: '/avinashadv1.jpg',
      alt: 'Advocate Avinash Singh - Professional Lawyer',
      title: 'Expert Legal Consultation'
    },
    {
      url: '/legal-documents.jpg', 
      alt: 'Legal Documents - Professional Law Services',
      title: 'Document Preparation & Review'
    },
    {
      url: '/court-appearance.jpg', 
      alt: 'Court Appearance - Experienced Litigator',
      title: 'Court Representation'
    },
    // {
    //   url: '/avinashadv2.jpg',
    //   alt: 'Client Consultation - Personal Legal Advice',
    //   title: 'Client-focused Approach'
    // },
    {
      url: '/client-consultation.jpg',
      alt: 'Client Consultation - Personal Legal Advice',
      title: 'Client-focused Approach'
    }
  ]

  // Handle image error
  const handleImageError = useCallback((index: number) => {
    console.error(`Failed to load image: ${images[index].url}`)
  }, [images])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      clearTimeout(timer)
    }
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return
    
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000) 

    return () => clearInterval(slideInterval)
  }, [images.length, isPaused])

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrev])

  const soonmsg = () => {
    setShowCaseHistory(true)
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-gradient-to-br from-primary to-primary/80 text-white flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile Background */}
        <div className="md:hidden absolute inset-0">
          <div className="relative w-full h-full" ref={carouselRef}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(index)}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20" />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Background Carousel */}
        <div className="hidden md:block absolute inset-0">
          <div className="relative w-full h-full" ref={carouselRef}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentImageIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(index)}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="overflow-hidden">
              <h1 
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-slideUp"
              >
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
                  const phoneNumber = '918252207551'
                  const message = encodeURIComponent('Hello Advocate Avinash Singh, I would like to schedule a legal consultation regarding my case.')
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
                  window.open(whatsappUrl, '_blank')
                }}
                className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl shadow-accent/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="Schedule a legal consultation via WhatsApp"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={soonmsg}
                className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm hover:backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="View case history (coming soon)"
              >
                View Case History
              </button>
            </div>
          </div>

          {/* Desktop Image Carousel */}
          <div className={`hidden md:flex items-center justify-center transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative group w-full max-w-xl">
              {/* Image Carousel Container */}
              <div 
                className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                role="region"
                aria-label="Image carousel"
                aria-live="polite"
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentImageIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(index)}
                      priority={index === 0}
                    />
                    {/* Image overlay with title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <p className="text-white font-semibold text-lg">{image.title}</p>
                    </div>
                  </div>
                ))}
                
                {/* Image navigation buttons */}
                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Image indicators */}
              <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Image indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary ${
                      index === currentImageIndex
                        ? 'bg-accent scale-125'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                    role="tab"
                    aria-selected={index === currentImageIndex}
                  />
                ))}
              </div>

              {/* Current image indicator */}
              <div className="text-center mt-2">
                <p className="text-white/80 text-sm" aria-live="polite">
                  {currentImageIndex + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-white/60 animate-pulse">Scroll Down</span>
          <ChevronDown 
            size={32} 
            className="text-accent animate-bounce"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Mobile Image Indicators */}
      <div className="md:hidden absolute bottom-32 left-1/2 transform -translate-x-1/2 flex gap-3 z-10" role="tablist" aria-label="Image indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary ${
              index === currentImageIndex
                ? 'bg-accent scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
            role="tab"
            aria-selected={index === currentImageIndex}
          />
        ))}
      </div>

      {/* Case History Modal */}
      {showCaseHistory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowCaseHistory(false)}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto modal-scroll" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-primary">Case History</h3>
              <button
                onClick={() => setShowCaseHistory(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-primary">Corporate Law Case</h4>
                <p className="text-sm text-gray-600">Successfully represented a tech startup in merger negotiations, resulting in favorable terms for the client.</p>
                <p className="text-xs text-gray-500 mt-1">Completed: March 2026</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-primary">Family Law Matter</h4>
                <p className="text-sm text-gray-600">Handled divorce proceedings with child custody arrangements, ensuring the best interests of the children were prioritized.</p>
                <p className="text-xs text-gray-500 mt-1">Completed: February 2025</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-primary">Criminal Defense</h4>
                <p className="text-sm text-gray-600">Defended a client in a white-collar crime case, achieving acquittal through strategic legal arguments.</p>
                <p className="text-xs text-gray-500 mt-1">Completed: January 2025</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-primary">Property Dispute</h4>
                <p className="text-sm text-gray-600">Resolved a complex property boundary dispute through mediation, avoiding costly litigation.</p>
                <p className="text-xs text-gray-500 mt-1">Completed: December 2024</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">For detailed case studies or specific inquiries, please schedule a consultation.</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
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

        /* Custom scrollbar styling */
        .modal-scroll::-webkit-scrollbar {
          width: 3px;
        }
        .modal-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .modal-scroll::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .modal-scroll::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: #888 #f1f1f1;
        }
      `}</style>
    </section>
  )
}