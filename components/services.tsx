import { FileText, Scale, BookOpen, CheckCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Legal Consultation',
      description: 'Expert guidance on legal matters and risk assessment for your business needs',
      color: 'bg-blue-50',
    },
    {
      icon: BookOpen,
      title: 'Document Preparation',
      description: 'Professional drafting of legal documents with precision and compliance',
      color: 'bg-purple-50',
    },
    {
      icon: Scale,
      title: 'Court Representation',
      description: 'Skilled advocacy and representation in legal proceedings and disputes',
      color: 'bg-green-50',
    },
    {
      icon: CheckCircle,
      title: 'Contract Review',
      description: 'Thorough analysis and negotiation of contracts to protect your interests',
      color: 'bg-orange-50',
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`${service.color} rounded-lg p-8 hover:shadow-lg transition transform hover:scale-105`}
              >
                <Icon className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70 text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
