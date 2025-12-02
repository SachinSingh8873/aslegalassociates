'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Statistics from '@/components/statistics'
import Services from '@/components/services'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import AdminModal from '@/components/admin-modal'

export default function Home() {
  const [showAdmin, setShowAdmin] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onAdminClick={() => setShowAdmin(true)} />
      <Hero />
      <About />
      <Statistics />
      <Services />
      <Contact />
      <Footer />
      <AdminModal isOpen={showAdmin} onClose={() => setShowAdmin(false)} />
    </div>
  )
}
