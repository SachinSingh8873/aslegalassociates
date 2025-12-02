'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Hero() {

  const soonmsg=()=>{
    alert("This feature will be Availlable Soon.");
  }

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary to-primary/80 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Advocate Avinash Singh
            </h1>
            <p className="text-xl text-white/90">2024 Law Graduate | Legal Associate</p>
            <p className="text-lg text-white/80">
              Dedicated to providing exceptional legal representation and comprehensive legal solutions for your business and personal needs.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition transform hover:scale-105" onClick={soonmsg}>
                Schedule Consultation
              </button>
              <button className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition" onClick={soonmsg}>
                View Case History
              </button>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <img
              src="/avinashadv1.jpg"
              alt="Advocate Avinash Singh"
              className="rounded-lg shadow-2xl object-cover w-full h-96"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-accent" />
      </div>
    </section>
  )
}
