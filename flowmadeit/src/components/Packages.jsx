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
      name: 'Professional',
      price: '$999',
      popular: false,
      features: [
        '3 Professional Videos',
        'Social Media Graphics',
        'Basic Video Editing',
        '2 Revisions',
        '1080p Resolution',
        'Delivery in 10 Days',
        'Email Support'
      ],
      color: '#6366f1'
    },
    {
      name: 'Starter',
      price: '$499',
      popular: true,
      features: [
        '1 Professional Video',
        '5 Social Media Posts',
        'Basic Editing',
        '1 Revision',
        '1080p Resolution',
        'Delivery in 7 Days',
        'Email Support'
      ],
      color: '#8b5cf6'
    },
    {
      name: 'Enterprise',
      price: '$2499',
      popular: false,
      features: [
        'Unlimited Videos',
        'Complete Branding Package',
        'Advanced Editing & Effects',
        'Unlimited Revisions',
        '4K Resolution',
        'Priority Delivery',
        '24/7 Support',
        'Dedicated Account Manager'
      ],
      color: '#ec4899'
    }
  ]

  return (
    <section id="packages" className="packages" ref={sectionRef}>
      <div className="packages-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Choose Your Perfect Package</h2>
          <p className="section-subtitle">
            Flexible pricing plans designed to fit your business needs
          </p>
        </div>

        <div className={`packages-grid ${isVisible ? 'visible' : ''}`}>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`package-card ${pkg.popular ? 'popular' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="package-header">
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                  <span className="period">/project</span>
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
                Get Started
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
