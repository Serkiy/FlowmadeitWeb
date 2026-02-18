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
      name: 'Starter',
      price: '1250 LEI',
      popular: false,
      features: [
        '6-8 videoclipuri scurte',
        'Editare de baza material 4K',
        'postare pe 1-2 platforme',
        'O revizie',
        'FĂRĂ growth agresiv',
        'FĂRĂ figurant garantat ( plata acestuia pe zi de filamre )',
        'Suport Email'
      ],
      color: '#8b5cf6'
    },
    {
      name: 'Growth',
      price: '2250 LEI',
      popular: true,
      features: [
        '12–15 video / lună (short-form)',
        'Filmare + editare profesională material 4K',
        'Postare și managemnet account pe TikTok + Instagram + Facebook',
        'Content strategy lunar (simplu)',
        'Management pagini',
        'Growth organic (engagement, follow, community)',
        'Figurant (7 zile/lună, dacă e nevoie)',
        'Raport lunar simplu'
      ],
      color: '#6366f1'
    },
    {
      name: 'Authority',
      price: '3999 LEI',
      popular: false,
      features: [
          'Tot ceea ce este inclus in pachetul Growth la care se adauga urmatoarele:',
        '20–25 video / lună',
        'Conținut cinematic / storytelling',
        'Figurant dedicat (7 zile)',
        'Shooting foto lunar',
        'Mini branding',
        'Landing page / website simplu (1x la 3–6 luni)',
        'Prioritate fata de alti clienti',
        'Strategie clară de poziționare'
      ],
      color: '#ec4899'
    },
    {
      name: 'Web Start',
      price: '999 LEI',
      popular: false,
      features: [
        'Un landing page, curat și profesionist, pentru afaceri care vor să fie găsite online.',
        'Design simplu, modern',
        'Mobile friendly',
        'Secțiuni esențiale (Despre, Servicii, Contact)',
        'Formular de contact / WhatsApp',
        'Integrare social media'
      ],
      color: '#8b5cf6'
    },
    {
      name: 'Web Business',
      price: '1450 LEI',
      popular: true,
      features: [
        'Un website care îți oferă credibilitate și susține conținutul video.',
        'Website complet (4–5 pagini)',
        'Design personalizat',
        'Structură clară pentru conversii',
        'Pagini servicii',
        'Integrare Google Maps',
        'Formular avansat',
        'Optimizare basic SEO'
      ],
      color: '#6366f1'
    },
    {
      name: 'Web Pro',
      price: '2750 LEI',
      popular: false,
      features: [
        'Pentru afaceri care vor mai mult decât „un site frumos”.',
        'Website 6–8 pagini',
        'Design premium & UX mai bun',
        'Landing page inclus',
        'Integrare video (hero video / reels)',
        'Structură orientată spre conversii',    
        'SEO on-page extins',
        'Performanță & viteză optimizate'
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
                  <span className="period">/lună</span>
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
