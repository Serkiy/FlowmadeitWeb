import { useState, useEffect, useRef } from 'react'
import './Packages.css'

const Packages = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const packages = [
    {
      name: 'Profesional',
      price: '3999 LEI',
      popular: false,
      features: [
        '3 Videoclipuri Profesionale',
        'Grafică Social Media',
        'Editare Video de Bază',
        '2 Revizuiri',
        'Rezoluție 1080p',
        'Livrare în 10 Zile',
        'Suport Email'
      ],
      color: '#6366f1'
    },
    {
      name: 'Starter',
      price: '1999 LEI',
      popular: true,
      features: [
        '1 Videoclip Profesional',
        '5 Postări Social Media',
        'Editare de Bază',
        '1 Revizuire',
        'Rezoluție 1080p',
        'Livrare în 7 Zile',
        'Suport Email'
      ],
      color: '#8b5cf6'
    },
    {
      name: 'Enterprise',
      price: '9999 LEI',
      popular: false,
      features: [
        'Videoclipuri Nelimitate',
        'Pachet Complet de Branding',
        'Editare Avansată & Efecte',
        'Revizuiri Nelimitate',
        'Rezoluție 4K',
        'Livrare Prioritară',
        'Suport 24/7',
        'Manager de Cont Dedicat'
      ],
      color: '#ec4899'
    }
  ]

  return (
    <section id="packages" className="packages" ref={sectionRef}>
      <div className="packages-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Alege Pachetul Perfect Pentru Tine</h2>
          <p className="section-subtitle">
            Planuri de prețuri flexibile create pentru nevoile afacerii tale
          </p>
        </div>

        <div className={`packages-grid ${isVisible ? 'visible' : ''}`}>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`package-card ${pkg.popular ? 'popular' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && <div className="popular-badge">Cel Mai Popular</div>}
              
              <div className="package-header">
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                  <span className="period">/proiect</span>
                </div>
              </div>

              <ul className="package-features">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="package-btn" style={{ background: pkg.color }}>
                Începe Acum
                <span className="btn-arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
