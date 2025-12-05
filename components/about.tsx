'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Award, BookOpen, Briefcase, Scale, Target, Users,
  CheckCircle, FileText, Shield, Gavel, GraduationCap,
  Zap, TrendingUp, Star, Clock, Globe, Building,
  ChevronRight, Phone, Calendar, ExternalLink
} from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('approach')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const expertiseAreas = [
    { 
      icon: <Briefcase size={28} />, 
      title: 'Corporate Law Services', 
      desc: 'Business contracts, M&A, compliance for Delhi companies',
      keywords: ['corporate lawyer Delhi', 'business contract lawyer', 'company formation Delhi']
    },
    { 
      icon: <Scale size={28} />, 
      title: 'Civil Litigation Expert', 
      desc: 'Property disputes, civil suits in Delhi courts',
      keywords: ['civil litigation lawyer Delhi', 'property dispute lawyer Rohini', 'civil lawyer Delhi']
    },
    { 
      icon: <Users size={28} />, 
      title: 'Family Law Specialist', 
      desc: 'Divorce, custody, maintenance cases in Delhi NCR',
      keywords: ['family lawyer Rohini', 'divorce lawyer Delhi', 'child custody lawyer']
    },
    { 
      icon: <FileText size={28} />, 
      title: 'Legal Documentation', 
      desc: 'Professional drafting and vetting of legal documents',
      keywords: ['legal document drafting', 'contract review Delhi', 'legal agreement drafting']
    },
    { 
      icon: <Shield size={28} />, 
      title: 'Legal Advisory Services', 
      desc: 'Risk assessment, compliance, and strategic legal advice',
      keywords: ['legal advisor Delhi', 'business legal consultation', 'corporate compliance']
    },
    { 
      icon: <Gavel size={28} />, 
      title: 'Dispute Resolution', 
      desc: 'Mediation, arbitration, and out-of-court settlements',
      keywords: ['dispute resolution lawyer', 'mediation Delhi', 'arbitration services']
    }
  ]

  const values = [
    { 
      title: 'Integrity First', 
      desc: 'Unwavering commitment to ethical legal practice in Delhi',
      icon: <Award className="text-accent" size={20} />
    },
    { 
      title: 'Excellence in Representation', 
      desc: 'Highest success rates in Delhi courts and legal matters',
      icon: <Star className="text-accent" size={20} />
    },
    { 
      title: 'Client-Centric Approach', 
      desc: 'Personalized legal solutions for every Delhi client',
      icon: <Users className="text-accent" size={20} />
    },
    { 
      title: 'Absolute Confidentiality', 
      desc: 'Complete privacy and security of client information',
      icon: <Shield className="text-accent" size={20} />
    }
  ]

  const stats = [
    { number: '50+', label: 'Cases Successfully Handled', icon: <TrendingUp className="text-primary" size={20} /> },
    { number: '95%', label: 'Case Success Rate in Delhi Courts', icon: <Zap className="text-accent" size={20} /> },
    { number: '24/7', label: 'Client Support & Emergency Legal Help', icon: <Clock className="text-primary" size={20} /> },
    { number: '100%', label: 'Client Satisfaction & Repeat Business', icon: <Star className="text-accent" size={20} /> }
  ]

  const courtsCovered = [
    'Rohini Courts Complex, Delhi',
    'Delhi High Court',
    'District Courts Delhi',
    'Labour Courts Delhi',
    'Consumer Courts Delhi',
    'Family Courts Delhi'
  ]

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-16 md:py-24 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden"
      itemScope
      itemType="https://schema.org/LegalService"
    >
      {/* SEO Structured Data - Hidden but indexable */}
      <div className="sr-only" itemScope itemProp="provider" itemType="https://schema.org/Person">
        <meta itemProp="name" content="Advocate Avinash Singh" />
        <meta itemProp="jobTitle" content="Legal Associate & Advocate" />
        <meta itemProp="description" content="Expert lawyer in Delhi specializing in civil litigation, family law, corporate law, and criminal law services in Rohini and Delhi NCR." />
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="addressLocality" content="Delhi" />
          <meta itemProp="addressRegion" content="Delhi" />
          <meta itemProp="addressCountry" content="IN" />
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with SEO Keywords */}
        <div className="text-center mb-12 md:mb-16">
          <div className={`inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Award size={16} />
            Top Legal Expert in Delhi & Rohini
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            About Advocate <span className="text-accent">Avinash Singh</span> - 
            <span className="block md:inline md:ml-2 mt-2">Best Lawyer in Delhi</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-6">
            Premier <strong>legal services in Delhi & Rohini</strong> specializing in civil litigation, 
            family law, corporate cases, and criminal defense with proven results in Delhi courts.
          </p>
          
          {/* Local SEO Keywords */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <span className="text-xs md:text-sm px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">
              Advocate in Delhi
            </span>
            <span className="text-xs md:text-sm px-3 py-1.5 bg-accent/10 text-accent rounded-full font-medium">
              Lawyer in Rohini
            </span>
            <span className="text-xs md:text-sm px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">
              Civil Lawyer Delhi
            </span>
            <span className="text-xs md:text-sm px-3 py-1.5 bg-accent/10 text-accent rounded-full font-medium">
              Family Law Expert
            </span>
          </div>
        </div>

        {/* Stats Bar with Animation */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg border border-primary/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">{stat.number}</div>
              <div className="text-xs md:text-sm text-foreground/70 font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image & Values */}
          <div className="space-y-12">
            {/* Professional Image with SEO */}
            <div className={`relative group transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary to-accent rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative">
                <img
                  src="/professional-office-desk-legal-documents.jpg"
                  alt="Advocate Avinash Singh - Professional Lawyer in Delhi office providing expert legal consultation"
                  title="Best Legal Services in Delhi & Rohini - Advocate Avinash Singh"
                  className="rounded-xl md:rounded-2xl shadow-2xl object-cover w-full h-64 md:h-[400px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent rounded-xl md:rounded-2xl" />
                
                {/* Image Overlay with SEO Content */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-4 transform translate-y-0 group-hover:translate-y-2 transition-all duration-500 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="text-primary" size={20} />
                    </div>
                    <div>
                      <h2 className="font-bold text-primary text-sm md:text-base">Legal Services in Delhi & Rohini</h2>
                      <p className="text-xs md:text-sm text-foreground/70 mt-1">
                        Expert representation in <strong>Delhi courts</strong> with offices in <strong>Rohini Sector 16</strong>
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        <Globe className="w-3 h-3 text-accent" />
                        <span className="text-xs text-foreground/60">Serving Delhi NCR since 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Courts Covered - Local SEO */}
            <div className={`bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl md:rounded-2xl p-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '300ms' }}>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Building className="text-accent" size={20} />
                Courts Covered in Delhi
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {courtsCovered.map((court, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors">
                    <ChevronRight className="w-3 h-3 text-accent flex-shrink-0" />
                    <span>{court}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-foreground/60 mt-4">
                Expert legal representation across all major courts in Delhi and Rohini jurisdiction.
              </p>
            </div>

            {/* Core Values */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '500ms' }}>
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-4 md:mb-6 flex items-center gap-3">
                <Target className="text-accent" size={20} />
                Our Legal Philosophy
              </h3>
              <div className="space-y-3 md:space-y-4">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl border border-primary/10 hover:border-accent/30 hover:bg-white transition-all duration-300 group bg-white/50 backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm md:text-base mb-1">{value.title}</h4>
                      <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Expertise & Approach */}
          <div className="space-y-12">
            {/* Expertise Areas with SEO */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-lg md:text-2xl font-bold text-primary mb-6 md:mb-8 flex items-center gap-3">
                <Briefcase className="text-accent" size={20} />
                Legal Services in Delhi & Rohini
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {expertiseAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 md:p-6 rounded-xl border border-primary/10 hover:border-accent hover:shadow-xl transition-all duration-500 group hover:-translate-y-1"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                      <div className="text-primary group-hover:text-accent transition-colors duration-300">
                        {area.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-primary text-base md:text-lg mb-2" itemProp="name">
                      {area.title}
                    </h3>
                    <p className="text-xs md:text-sm text-foreground/70 mb-2" itemProp="description">
                      {area.desc}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {area.keywords.map((keyword, idx) => (
                        <span key={idx} className="text-xs px-2 py-0.5 bg-primary/5 rounded-full text-foreground/60">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Approach Tabs */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {['approach', 'philosophy', 'education'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                      activeTab === tab
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white text-primary border border-primary/20 hover:border-primary/40'
                    }`}
                  >
                    {tab === 'approach' && 'Legal Strategy'}
                    {tab === 'philosophy' && 'Legal Ethics'}
                    {tab === 'education' && 'Qualifications'}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-primary/10 shadow-lg">
                {activeTab === 'approach' && (
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">
                      Strategic Legal Approach for Delhi Cases
                    </h3>
                    <p className="text-foreground/80 text-sm md:text-base">
                      Every legal case in <strong>Delhi courts</strong> receives individual attention with a strategic 
                      approach combining legal expertise with practical solutions for the best outcomes.
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm md:text-base">Comprehensive analysis of Delhi court procedures and requirements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm md:text-base">Regular updates and transparent communication with clients</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm md:text-base">Modern legal technology for efficient case management</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'philosophy' && (
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">
                      Legal Philosophy & Ethics
                    </h3>
                    <p className="text-foreground/80 text-sm md:text-base">
                      Justice extends beyond winning cases to ensuring fairness and equity for every 
                      client in <strong>Delhi and Rohini</strong>. We combine traditional legal principles 
                      with innovative approaches to deliver results.
                    </p>
                    <div className="bg-primary/5 rounded-lg md:rounded-xl p-4 md:p-6 mt-4 md:mt-6">
                      <p className="text-primary italic text-base md:text-lg font-medium leading-relaxed">
                        "The law is not just a profession, it's a calling to serve justice and uphold 
                        rights with integrity in every Delhi court."
                      </p>
                      <p className="text-right text-sm text-foreground/60 mt-2">- Advocate Avinash Singh</p>
                    </div>
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">
                      Education & Professional Credentials
                    </h3>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-primary/5 rounded-lg md:rounded-xl">
                        <GraduationCap className="text-accent mt-0.5 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-bold text-primary text-sm md:text-base">LL.B. Graduate - 2024</h4>
                          <p className="text-xs md:text-sm text-foreground/70">Specialized in Corporate & Civil Law with distinction</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-primary/5 rounded-lg md:rounded-xl">
                        <Briefcase className="text-accent mt-0.5 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-bold text-primary text-sm md:text-base">Bar Council Registration</h4>
                          <p className="text-xs md:text-sm text-foreground/70">Authorized to practice in Delhi High Court & all Delhi District Courts</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-primary/5 rounded-lg md:rounded-xl">
                        <Award className="text-accent mt-0.5 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-bold text-primary text-sm md:text-base">Certified Legal Practitioner</h4>
                          <p className="text-xs md:text-sm text-foreground/70">Continuous professional development in emerging legal areas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Section with Local SEO */}
            <div className={`bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl md:rounded-2xl p-6 md:p-8 text-center border border-primary/20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">
                Need Legal Help in Delhi or Rohini?
              </h3>
              <p className="text-sm md:text-base text-foreground/70 mb-4 md:mb-6">
                Schedule a confidential consultation with <strong>Delhi's top legal expert</strong> 
                to discuss your civil, family, or corporate law matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                >
                  <Calendar size={18} />
                  Book Free Consultation
                </a>
                <a 
                  href="tel:+918252207551" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300 text-sm md:text-base"
                >
                  <Phone size={18} />
                  Call: +91 82522 07551
                </a>
              </div>
              <p className="text-xs text-foreground/60 mt-4">
                ⚖️ Serving Delhi NCR • Free Initial Consultation • Court Experience
              </p>
            </div>
          </div>
        </div>

        {/* Local SEO Content */}
        <div className={`mt-12 md:mt-16 p-6 md:p-8 bg-white rounded-xl md:rounded-2xl border border-primary/10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '600ms' }}>
          <h3 className="text-lg md:text-2xl font-bold text-primary mb-4">
            Expert Legal Services in Delhi & Rohini - Advocate Avinash Singh
          </h3>
          <div className="space-y-4">
            <p className="text-foreground/70 text-sm md:text-base">
              As one of the <strong>leading lawyers in Delhi</strong> and <strong>best advocates in Rohini</strong>, 
              Advocate Avinash Singh provides comprehensive legal solutions for all your legal needs. 
              Whether you're searching for a <strong>"lawyer near me in Delhi"</strong> or need expert 
              representation in <strong>Delhi High Court</strong>, our firm delivers exceptional results.
            </p>
            <p className="text-foreground/70 text-sm md:text-base">
              Specializing in <strong>civil litigation in Delhi courts</strong>, <strong>family law matters in Rohini</strong>, 
              <strong> corporate legal services in Delhi NCR</strong>, and <strong>criminal defense in Delhi</strong>, 
              we combine legal expertise with a client-focused approach to achieve the best outcomes.
            </p>
            <p className="text-foreground/70 text-sm md:text-base">
              Located conveniently in <strong>Rohini Sector 16, Delhi</strong>, we serve clients across 
              Delhi NCR including Rohini, Pitampura, Shalimar Bagh, Prashant Vihar, and surrounding areas. 
              Contact us today for a <strong>free legal consultation</strong> with Delhi's trusted legal expert.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}