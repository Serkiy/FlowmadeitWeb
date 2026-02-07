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
          Transform Your Brand with
          <span className="gradient-text"> Video & Digital Marketing</span>
        </h1>
        <p className="hero-subtitle">
          We create stunning visual content that converts viewers into customers.
          Elevate your brand with our creative expertise.
        </p>
        <div className="hero-buttons">
          <a href="#packages" className="btn btn-primary">
            View Packages
            <span className="btn-icon">→</span>
          </a>
          <a href="#portfolio" className="btn btn-secondary">
            Our Work
          </a>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero
