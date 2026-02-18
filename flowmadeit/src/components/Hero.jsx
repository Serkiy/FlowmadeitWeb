import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-title">
          Transformă-ți Brandul cu
          <span className="gradient-text"> Video & Marketing Digital</span>
        </h1>
        <p className="hero-subtitle">
          Creăm conținut vizual care transformă vizitatorii în clienți.
          Ridică-ți brandul cu ajutorul expertizei si creativitatii.
        </p>
        <div className="hero-buttons">
          <a href="#packages" className="btn btn-primary">
            Vezi Pachete
            <span className="btn-icon">→</span>
          </a>
          <a href="#portfolio" className="btn btn-secondary">
            Portofoliu
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <h3>100+</h3>
            <p>Proiecte Finalizate</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Clienți Mulțumiți</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Grad de Satisfacție</p>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <svg className="arrow-down" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
