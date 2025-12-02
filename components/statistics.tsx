'use client'

import { useState, useEffect } from 'react'
import { Scale, Briefcase, Smile, Calendar } from 'lucide-react'

function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(target * progress))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration])

  return <span>{count}</span>
}

export default function Statistics() {
  const stats = [
    { label: 'Cases Solved', value: 45, icon: Scale, color: 'text-primary' },
    { label: 'Active Cases', value: 12, icon: Briefcase, color: 'text-secondary' },
    { label: 'Client Satisfaction', value: 98, icon: Smile, color: 'text-accent', suffix: '%' },
    { label: 'Years Active', value: 1, icon: Calendar, color: 'text-primary' },
  ]

  return (
    <section id="statistics" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Professional Statistics</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <Icon className={`${stat.color} mx-auto mb-4`} size={40} />
                <div className="text-4xl font-bold text-primary mb-2">
                  <Counter target={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-foreground/70 font-semibold">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
