import { useState, useEffect, useRef } from 'react'
import './Portfolio.css'
import haisalucramVideo from '../assets/haisalucram.mp4'
import selllVideo from '../assets/selll.mp4'
import ytVideo from '../assets/yt.mp4'

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
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

  const projects = [
    {
      title: 'Hai sa lucram!',
      category: 'video',
      description: 'Ce mai astepti',
      media: haisalucramVideo,
      type: 'video'
    },
    {
      title: 'Vanzari',
      category: 'video',
      description: 'Cifra de vanzare',
      media: selllVideo,
      type: 'video'
    },
    {
      title: 'Statistica',
      category: 'video',
      description: 'Grafice si statistici',
      media: ytVideo,
      type: 'video'
    },

  ]

  const filters = ['toate', 'video', 'social']

  const filteredProjects = activeFilter === 'toate'
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      <div className="portfolio-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Portofoliul Nostru</h2>
          <p className="section-subtitle">
            Descoperă cele mai recente proiecte și povești de succes
          </p>
        </div>

        <div className={`filter-buttons ${isVisible ? 'visible' : ''}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'toate' ? 'Toate' : filter === 'video' ? 'Video' : 'Social Media'}
            </button>
          ))}
        </div>

        <div className={`portfolio-grid ${isVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="portfolio-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-image">
                {project.type === 'video' ? (
                  <video 
                    src={project.media} 
                    alt={project.title}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img src={project.media} alt={project.title} />
                )}
                <div className="portfolio-overlay">
                  <div className="portfolio-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button className="view-btn">Vezi Proiectul →</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
