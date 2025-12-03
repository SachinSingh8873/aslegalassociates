'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Statistics from '@/components/statistics'
import Services from '@/components/services'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import AdminModal from '@/components/admin-modal'

// Import structured data components
// import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
// import FAQSchema from '@/components/seo/FAQSchema'
// import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export default function Home() {
  const [showAdmin, setShowAdmin] = useState(false)

  // Add structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Advocate Avinash Singh - AS Legal Associates",
    "url": "https://aslegalassociates.in",
    "description": "Best lawyer in Delhi & Rohini for civil litigation, family law, corporate cases, property disputes. Free initial consultation.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aslegalassociates.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  // Track page views for SEO
  // useEffect(() => {
    // Send pageview to analytics
  //   if (typeof window !== 'undefined' && window.gtag) {
  //     window.gtag('config', 'GA_MEASUREMENT_ID', {
  //       page_path: window.location.pathname,
  //     })
  //   }
  // }, [])

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://aslegalassociates.in"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Legal Services in Delhi",
              "item": "https://aslegalassociates.in#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Contact Lawyer",
              "item": "https://aslegalassociates.in#contact"
            }
          ]
        }) }}
      />

      <div className="min-h-screen bg-background text-foreground">
        {/* Hidden H1 for SEO (if not in Hero) */}
        <h1 className="sr-only">
          Advocate Avinash Singh - Top Civil & Corporate Lawyer in Delhi NCR | 
          Legal Services in Rohini | Free Consultation
        </h1>

        {/* Hidden SEO paragraphs for keyword density */}
        <div className="sr-only">
          <p>
            Looking for the <strong>best lawyer in Delhi</strong> or an <strong>advocate near me in Rohini</strong>? 
            Advocate Avinash Singh provides expert legal services for civil litigation, family law, 
            corporate cases, property disputes, and labour court matters in Delhi courts.
          </p>
          <p>
            As a leading <strong>civil lawyer in Rohini Delhi</strong> and <strong>corporate lawyer in Delhi</strong>, 
            we offer comprehensive legal solutions with free initial consultation. 
            Contact us at +91 82522 07551 for immediate legal assistance.
          </p>
          <p>
            Keywords: advocate in Delhi, best lawyer Rohini, civil lawyer Delhi, 
            family lawyer Rohini, property dispute lawyer, corporate lawyer Delhi, 
            legal associate, advocate Avinash Singh, court cases lawyer, 
            legal consultant Delhi, high court advocate, district court lawyer, 
            legal services Rohini, lawyer near me, labour court lawyer, 
            labour court, advocate near me, advocate avinash rohini, 
            avinash advocate rohini court, as legal associates
          </p>
        </div>

        <Navigation onAdminClick={() => setShowAdmin(true)} />
        <Hero />
        <About />
        <Statistics />
        <Services />
        <Contact />
        <Footer />
        <AdminModal isOpen={showAdmin} onClose={() => setShowAdmin(false)} />
      </div>
    </>
  )
}