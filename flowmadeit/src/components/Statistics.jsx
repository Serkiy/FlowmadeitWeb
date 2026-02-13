import { useState, useEffect, useRef } from 'react'
import './Statistics.css'

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    views: 0,
    awards: 0
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const animateCounters = () => {
    const targets = {
      projects: 100,
      clients: 200,
      views: 76000,
      awards: 2
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounts({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        views: Math.floor(targets.views * progress),
        awards: Math.floor(targets.awards * progress)
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, stepDuration)
  }

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K'
    }
    return num.toString()
  }

  const stats = [
    {
      label: 'Proiecte Finalizate',
      value: counts.projects,
      suffix: '+',
      icon: '🎬'
    },
    {
      label: 'Clienți Mulțumiți',
      value: counts.clients,
      suffix: '+',
      icon: '👥'
    },
    {
      label: 'Vizualizări Totale',
      value: formatNumber(counts.views),
      suffix: '+',
      icon: '👁️'
    },
    {
      label: 'Premii Câștigate',
      value: counts.awards,
      suffix: '+',
      icon: '🏆'
    }
  ]

  

  return (
    <section id="stats" className="statistics" ref={sectionRef}>
      <div className="statistics-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Impactul Nostru În Cifre</h2>
          <p className="section-subtitle">
            Rezultate reale care îți vor propulsa afacerea 
          </p>
        </div>

        <div className={`stats-grid ${isVisible ? 'visible' : ''}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">
                {stat.value}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
