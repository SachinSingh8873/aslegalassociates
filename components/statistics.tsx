'use client'

import { useState, useEffect, useRef } from 'react'
import { Scale, Briefcase, Smile, Calendar, Trophy, Users, CheckCircle, Award } from 'lucide-react'

// Simple Counter Component with immediate start
function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Ease out function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(target * easeOutQuart))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    // Start animation immediately with a small delay
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate)
    }, 300)

    return () => {
      clearTimeout(timeout)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [target, duration])

  return <span className="inline-block min-w-[60px]">{count}</span>
}

// Alternative Counter with more reliable animation
function SimpleCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Simple implementation without requestAnimationFrame
    let current = 0
    const increment = target / 50 // Divide animation into 50 steps
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 40) // 40ms * 50 = 2000ms total

    return () => clearInterval(timer)
  }, [target])

  return <span className="inline-block min-w-[60px]">{count}</span>
}

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 } // Lower threshold for better detection
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const stats = [
    { 
      label: 'Cases Solved', 
      value: 51, 
      icon: Scale, 
      color: 'text-primary',
      description: 'Successfully resolved cases',
      trend: '+5 this month'
    },
    { 
      label: 'Active Cases', 
      value: 15, 
      icon: Briefcase, 
      color: 'text-accent',
      description: 'Currently ongoing matters',
      trend: 'Efficient handling'
    },
    { 
      label: 'Client Satisfaction', 
      value: 100, 
      icon: Smile, 
      color: 'text-secondary',
      suffix: '%',
      description: 'Happy clients served',
      trend: 'Highest rating'
    },
    { 
      label: 'Court Appearances', 
      value: 83, 
      icon: Trophy, 
      color: 'text-primary',
      description: 'Successful appearances',
      trend: 'Experienced litigator'
    },
    { 
      label: 'Years Experience', 
      value: 1, 
      icon: Calendar, 
      color: 'text-accent',
      suffix: '+',
      description: 'Professional experience',
      trend: 'Rising expertise'
    },
    { 
      label: 'Consultations', 
      value: 198, 
      icon: Users, 
      color: 'text-secondary',
      suffix: '+',
      description: 'Legal consultations',
      trend: 'Trusted advisor'
    },
    { 
      label: 'Case Success Rate', 
      value: 95, 
      icon: CheckCircle, 
      color: 'text-primary',
      suffix: '%',
      description: 'Favorable outcomes',
      trend: 'Proven results'
    },
    { 
      label: 'Awards & Recognition', 
      value: 0, 
      icon: Award, 
      color: 'text-accent',
      suffix: '+',
      description: 'Professional accolades',
      trend: 'Excellence recognized'
    },
  ]

  return (
    <section id="statistics" className="relative py-24 bg-gradient-to-b from-white to-primary/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Trophy size={16} />
            Track Record of Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Proven <span className="text-accent">Legal Success</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Numbers that reflect dedication, expertise, and commitment to achieving 
            the best outcomes for our clients
          </p>
        </div>

        {/* Statistics Grid */}
        <div 
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="relative group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-primary/10 hover:border-accent/30 overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-accent/10 group-hover:to-accent/5 transition-all duration-500 group-hover:scale-110">
                    <Icon className={`${stat.color} group-hover:text-accent transition-colors duration-500`} size={32} />
                  </div>
                </div>

                {/* Counter - Try both versions to see which works */}
                <div className="relative mb-2">
                  <div className="text-5xl font-bold text-primary group-hover:text-accent transition-colors duration-500">
                    {isVisible ? <SimpleCounter target={stat.value} /> : <span>0</span>}
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                </div>

                {/* Label and description */}
                <h3 className="text-lg font-bold text-primary mb-2 relative">
                  {stat.label}
                </h3>
                <p className="text-sm text-foreground/70 mb-3">
                  {stat.description}
                </p>
                
                {/* Trend indicator */}
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/5 rounded-full text-xs font-semibold text-primary">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  {stat.trend}
                </div>

                {/* Progress bar */}
                {(stat.label.includes('Satisfaction') || stat.label.includes('Success')) && (
                  <div className="mt-4">
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-1000"
                        style={{ 
                          width: isVisible ? `${stat.value}%` : '0%',
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Debug button to test animation */}
        {/* <div className="text-center mt-8">
          <button
            onClick={() => setIsVisible(true)}
            className="px-4 py-2 bg-accent text-white rounded-lg text-sm"
          >
            Test Animation
          </button>
        </div> */}

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-6 shadow-lg border border-primary/10 max-w-2xl mx-auto">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <CheckCircle className="text-accent" size={24} />
            </div>
            <div className="text-left">
              <p className="text-primary font-semibold">
                Every statistic represents a client's trust and a successfully navigated legal challenge
              </p>
              <p className="text-sm text-foreground/70 mt-1">
                Committed to maintaining and exceeding these standards of excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}