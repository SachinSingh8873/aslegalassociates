'use client'

import { 
  FileText, Scale, BookOpen, CheckCircle, Shield, Briefcase, Gavel,
  Users, Building, Handshake, Landmark, Clock, Award, Target, Zap,
  X, ArrowRight, Phone, Calendar, FileSearch, TrendingUp, DollarSign
} from 'lucide-react'
import { useState } from 'react'

interface Service {
  icon: any;
  title: string;
  category: string;
  description: string;
  features: string[];
  color: string;
  iconColor: string;
  detailedDescription: string;
  cases: string[];
  documents: string[];
  process: string[];
  successRate: string;
  averageTime: string;
  pricing: string;
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const allServices: Service[] = [
    {
      icon: Gavel,
      title: 'Criminal Law',
      category: 'criminal',
      description: 'Expert defense in criminal cases including bail applications, trials, and appeals.',
      features: ['Bail Applications', 'Criminal Trials', 'Appeals & Revisions', 'Quashing of FIR'],
      color: 'from-red-50 to-red-100',
      iconColor: 'text-red-600',
      detailedDescription: 'Comprehensive criminal defense services for individuals and businesses facing criminal charges. We provide aggressive representation to protect your rights and freedom.',
      cases: [
        'Murder, attempt to murder cases',
        'Cheating, fraud, and forgery',
        'Cyber crimes and IT Act violations',
        'Domestic violence and harassment',
        'Narcotics and drug-related offenses',
        'White-collar crimes and corruption'
      ],
      documents: [
        'FIR copy and related documents',
        'Medical reports (if any)',
        'Witness statements',
        'Previous legal history',
        'Identity and address proof'
      ],
      process: [
        'Initial case evaluation and consultation',
        'Bail application filing (if arrested)',
        'Evidence collection and witness preparation',
        'Trial preparation and strategy',
        'Court appearances and arguments',
        'Appeal filing if required'
      ],
      successRate: '92%',
      averageTime: '6-24 months',
      pricing: 'Case-based (consultation fee: ₹2,000)'
    },
    {
      icon: Briefcase,
      title: 'Labour Law',
      category: 'labour',
      description: 'Comprehensive labor law services including disputes, compliance, and employee rights protection.',
      features: ['Labour Court Cases', 'Termination Disputes', 'Wage & Compensation', 'Factory Act Compliance'],
      color: 'from-amber-50 to-amber-100',
      iconColor: 'text-amber-600',
      detailedDescription: 'Expert representation in labor law matters for both employees and employers. We handle all aspects of employment law from hiring to termination.',
      cases: [
        'Wrongful termination and dismissal',
        'Wage disputes and unpaid salaries',
        'Workmen compensation claims',
        'Industrial disputes and strikes',
        'ESI and PF related matters',
        'Maternity benefit claims'
      ],
      documents: [
        'Employment contract/Appointment letter',
        'Salary slips and bank statements',
        'Termination letter (if applicable)',
        'Company policies and rules',
        'Communication records'
      ],
      process: [
        'Case analysis and legal opinion',
        'Conciliation proceedings',
        'Labour court filing and representation',
        'Evidence submission and witness examination',
        'Settlement negotiations',
        'Appeal to higher courts if needed'
      ],
      successRate: '88%',
      averageTime: '3-18 months',
      pricing: 'Retainer basis or case-based'
    },
    {
      icon: Scale,
      title: 'Civil Litigation',
      category: 'civil',
      description: 'Expert representation in property disputes, civil suits, and recovery matters.',
      features: ['Property Disputes', 'Contract Enforcement', 'Injunction Matters', 'Recovery Suits'],
      color: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
      detailedDescription: 'Comprehensive civil litigation services for property disputes, contract enforcement, and recovery matters in Delhi courts.',
      cases: [
        'Property partition and ownership disputes',
        'Rent control and eviction cases',
        'Specific performance of contracts',
        'Money recovery and debt collection',
        'Injunction and stay orders',
        'Tort and civil wrong claims'
      ],
      documents: [
        'Property documents and titles',
        'Sale agreements and contracts',
        'Legal notices and replies',
        'Court orders (if any previous)',
        'Financial transaction proofs'
      ],
      process: [
        'Document verification and legal notice',
        'Case filing and plaint drafting',
        'Evidence collection and documentation',
        'Court hearings and arguments',
        'Settlement discussions',
        'Execution of decree'
      ],
      successRate: '85%',
      averageTime: '1-3 years',
      pricing: 'Court fee + professional fee'
    },
    {
      icon: Building,
      title: 'Corporate Law',
      category: 'corporate',
      description: 'Company formation, corporate compliance, mergers & acquisitions.',
      features: ['Company Formation', 'M&A Advisory', 'Corporate Compliance', 'Board Advisory'],
      color: 'from-purple-50 to-purple-100',
      iconColor: 'text-purple-600',
      detailedDescription: 'End-to-end corporate legal services for startups, SMEs, and established businesses in Delhi NCR.',
      cases: [
        'Private/Public company registration',
        'Shareholders agreements drafting',
        'Mergers, acquisitions, and due diligence',
        'Corporate restructuring and winding up',
        'Corporate governance and compliance',
        'IPO and securities law compliance'
      ],
      documents: [
        'Company incorporation documents',
        'MOA and AOA',
        'Board meeting minutes',
        'Financial statements and audit reports',
        'Contracts and agreements'
      ],
      process: [
        'Requirement analysis and planning',
        'Document preparation and filing',
        'ROC compliance and filings',
        'Regular compliance monitoring',
        'Board and shareholder meetings',
        'Annual compliance reporting'
      ],
      successRate: '95%',
      averageTime: '2-12 weeks',
      pricing: 'Package-based or retainer'
    },
    // Add similar detailed objects for other services...
  ]

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory)

  const openServiceModal = (service: Service) => {
    setSelectedService(service)
    document.body.style.overflow = 'hidden'
  }

  const closeServiceModal = () => {
    setSelectedService(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white to-primary/5 overflow-hidden">
      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center rounded-t-2xl">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${selectedService.color}`}>
                  <selectedService.icon className={selectedService.iconColor} size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">{selectedService.title}</h3>
                  <p className="text-foreground/70">{selectedService.category.toUpperCase()} LAW</p>
                </div>
              </div>
              <button
                onClick={closeServiceModal}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-primary/5 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-accent" size={20} />
                    <span className="font-semibold">Success Rate</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">{selectedService.successRate}</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-accent" size={20} />
                    <span className="font-semibold">Avg. Time</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">{selectedService.averageTime}</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="text-accent" size={20} />
                    <span className="font-semibold">Pricing</span>
                  </div>
                  <p className="text-lg font-bold text-primary">{selectedService.pricing}</p>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-primary mb-4">Service Overview</h4>
                <p className="text-foreground/80">{selectedService.detailedDescription}</p>
              </div>

              {/* Cases Handled */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FileSearch size={20} />
                  Cases We Handle
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedService.cases.map((caseItem, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
                      <CheckCircle className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span>{caseItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Required Documents */}
                <div>
                  <h4 className="text-xl font-bold text-primary mb-4">Required Documents</h4>
                  <ul className="space-y-2">
                    {selectedService.documents.map((doc, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal Process */}
                <div>
                  <h4 className="text-xl font-bold text-primary mb-4">Legal Process</h4>
                  <div className="space-y-4">
                    {selectedService.process.map((step, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-12 pt-8 border-t border-primary/10 flex gap-4">
                <a 
                  href="#contact" 
                  onClick={closeServiceModal}
                  className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold text-center hover:bg-primary/90 transition-colors"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Calendar size={20} />
                    Book Consultation
                  </span>
                </a>
                <a 
                  href="tel:+918252207551" 
                  onClick={closeServiceModal}
                  className="flex-1 border-2 border-primary text-primary py-3 rounded-lg font-semibold text-center hover:bg-primary/5 transition-colors"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Phone size={20} />
                    Call Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Gavel size={16} />
            Comprehensive Legal Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our <span className="text-accent">Legal Services</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Expert legal representation across all major practice areas with a focus on 
            achieving favorable outcomes for our clients
          </p>
        </div>

        {/* Service Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'all', name: 'All Services', count: allServices.length },
            { id: 'criminal', name: 'Criminal Law', count: allServices.filter(s => s.category === 'criminal').length },
            { id: 'labour', name: 'Labour Law', count: allServices.filter(s => s.category === 'labour').length },
            { id: 'civil', name: 'Civil Law', count: allServices.filter(s => s.category === 'civil').length },
            { id: 'corporate', name: 'Corporate Law', count: allServices.filter(s => s.category === 'corporate').length },
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary border border-primary/20 hover:border-primary/40 hover:shadow-md'
              }`}
            >
              {category.name}
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id 
                  ? 'bg-white/20' 
                  : 'bg-primary/10'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-primary/10 hover:border-accent/30 overflow-hidden"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-primary/5 group-hover:from-white/90 group-hover:to-white/80 shadow-md transition-all duration-500 group-hover:scale-110">
                    <Icon className={`${service.iconColor} group-hover:scale-110 transition-transform duration-500`} size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/90">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 group-hover:text-foreground/80">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-foreground/60 group-hover:text-foreground/70">
                        <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <button 
                    onClick={() => openServiceModal(service)}
                    className="w-full py-3 rounded-lg bg-primary/5 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 group-hover:shadow-md flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {service.category.toUpperCase()}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-white rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Need Legal Assistance?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get a free initial consultation with Advocate Avinash Singh
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Book Free Consultation
              </a>
              <a 
                href="tel:+918252207551" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call: +91 82522 07551
              </a>
            </div>
            <p className="mt-6 text-sm opacity-80">
              ⚖️ Free first consultation • Confidential • Experienced in Delhi Courts
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}