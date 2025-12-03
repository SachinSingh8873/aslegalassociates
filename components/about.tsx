'use client'

import { useState } from 'react'
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  Scale, 
  Target, 
  Users,
  CheckCircle,
  FileText,
  Shield,
  Gavel
} from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('approach')

  const expertiseAreas = [
    { icon: <Briefcase size={24} />, title: 'Corporate Law', desc: 'Business contracts, compliance, M&A' },
    { icon: <Scale size={24} />, title: 'Civil Litigation', desc: 'Property disputes, civil suits' },
    { icon: <Users size={24} />, title: 'Family Law', desc: 'Divorce, custody, property settlement' },
    { icon: <FileText size={24} />, title: 'Documentation', desc: 'Legal drafting and vetting' },
    { icon: <Shield size={24} />, title: 'Legal Advisory', desc: 'Risk assessment and compliance' },
    { icon: <Gavel size={24} />, title: 'Dispute Resolution', desc: 'Mediation and arbitration' }
  ]

  const values = [
    { title: 'Integrity', desc: 'Unwavering commitment to ethical practice' },
    { title: 'Excellence', desc: 'Highest standards in legal representation' },
    { title: 'Client-Centric', desc: 'Tailored solutions for every case' },
    { title: 'Confidentiality', desc: 'Absolute privacy of client information' }
  ]

  const stats = [
    { number: '50+', label: 'Cases Handled' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Client Support' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-background to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award size={16} />
            Professional Profile
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Advocate <span className="text-accent">Avinash Singh</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Committed to providing exceptional legal representation with a modern approach and unwavering dedication to justice
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-foreground/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image & Values */}
          <div className="space-y-12">
            {/* Professional Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative">
                <img
                  src="/professional-office-desk-legal-documents.jpg"
                  alt="Legal practice"
                  className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 transform translate-y-0 group-hover:translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Legal Excellence</h4>
                      <p className="text-sm text-foreground/70">2024 Law Graduate | Legal Associate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Target className="text-accent" size={24} />
                Our Core Values
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl border border-primary/10 hover:border-accent/30 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{value.title}</h4>
                      <p className="text-sm text-foreground/70">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Expertise & Approach */}
          <div className="space-y-12">
            {/* Expertise Areas */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <Briefcase className="text-accent" size={24} />
                Areas of Expertise
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {expertiseAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl border border-primary/10 hover:border-accent hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                      <div className="text-primary group-hover:text-accent transition-colors duration-300">
                        {area.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-primary text-lg mb-2">{area.title}</h4>
                    <p className="text-foreground/70 text-sm">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Approach Tabs */}
            <div>
              <div className="flex gap-2 mb-8">
                {['approach', 'philosophy', 'education'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === tab? 'bg-primary text-white shadow-lg': 'bg-white text-primary border border-primary/20 hover:border-primary/40'}`}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-8 border border-primary/10 shadow-lg">
                {activeTab === 'approach' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-primary mb-4">Strategic Legal Approach</h4>
                    <p className="text-foreground/80">
                      Every case receives individual attention with a strategic approach combining legal expertise 
                      with practical solutions. I believe in proactive legal counsel that prevents issues before they arise.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-accent" size={20} />
                        <span>Comprehensive case analysis and strategy</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-accent" size={20} />
                        <span>Regular client updates and transparent communication</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-accent" size={20} />
                        <span>Modern legal technology integration</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'philosophy' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-primary mb-4">Legal Philosophy</h4>
                    <p className="text-foreground/80">
                      Justice is not just about winning cases but about ensuring fairness and equity. 
                      I combine traditional legal principles with innovative approaches to deliver results.
                    </p>
                    <div className="bg-primary/5 rounded-xl p-6 mt-6">
                      <p className="text-primary italic text-lg font-medium">
                        "The law is not a profession, it's a calling to serve justice and uphold rights with integrity."
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-primary mb-4">Education & Credentials</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                        <Award className="text-accent mt-1" size={24} />
                        <div>
                          <h5 className="font-bold text-primary">LL.B. Graduate - 2024</h5>
                          <p className="text-foreground/70 text-sm">Specialized in Corporate & Civil Law</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                        <Briefcase className="text-accent mt-1" size={24} />
                        <div>
                          <h5 className="font-bold text-primary">Bar Council Registration</h5>
                          <p className="text-foreground/70 text-sm">Authorized to practice in Delhi & NCR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20">
              <h4 className="text-xl font-bold text-primary mb-4">Ready to Discuss Your Case?</h4>
              <p className="text-foreground/70 mb-6">
                Schedule a confidential consultation to explore your legal options
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen size={20} />
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}