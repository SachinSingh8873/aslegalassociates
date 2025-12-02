"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation({ onAdminClick }: { onAdminClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
    {/* Logo ke liye <img> tag use karein */}
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center overflow-hidden">
              <img 
                  src="/logo.png"  // Yahan apne logo image ka path dalen
                  alt="AS" 
                  className="w-full h-full object-cover" // Image ko div ke andar fit karne ke liye
              />
          </div>
          <span className="text-xl font-bold  sm:inline">AS Legal Associates</span>
      </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection("hero")} className="hover:text-accent transition">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-accent transition">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:text-accent transition">
              Services
            </button>
            <button onClick={() => scrollToSection("statistics")} className="hover:text-accent transition">
              Statistics
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-accent transition">
              Contact
            </button>
            <button onClick={onAdminClick} className="text-xs opacity-50 hover:opacity-100 transition">
              Admin
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("statistics")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded"
            >
              Statistics
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
