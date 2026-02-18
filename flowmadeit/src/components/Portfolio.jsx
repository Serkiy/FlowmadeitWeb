import { useState, useEffect, useRef } from 'react'
import './Portfolio.css'
import haisalucramVideo from '../assets/haisalucram.mp4'
import selllVideo from '../assets/selll.mp4'
import ytVideo from '../assets/yt.mp4'
import dv1 from '../assets/DV1.png'
import dv2 from '../assets/DV2.png'
import dv3 from '../assets/DV3.png'
import dv4 from '../assets/DV4.png'
import ss1 from '../assets/SS1.jpeg'
import ss2 from '../assets/SS2.jpeg'
import ss3 from '../assets/SS3.jpeg'
import ss4 from '../assets/SS4.jpeg'
import s1 from '../assets/S1.mov'
import s2 from '../assets/S2.mov'
import s3 from '../assets/S3.mov'
import s4 from '../assets/S4.mov'
import s5 from '../assets/S5.mov'

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('toate')
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
    {
      title: 'Digital Video 1',
      category: 'video',
      description: 'Conținut video profesional',
      media: dv1,
      type: 'image'
    },
    {
      title: 'Digital Video 2',
      category: 'video',
      description: 'Producție video creativă',
      media: dv2,
      type: 'image'
    },
    {
      title: 'Digital Video 3',
      category: 'video',
      description: 'Storytelling vizual',
      media: dv3,
      type: 'image'
    },
    {
      title: 'Digital Video 4',
      category: 'video',
      description: 'Content marketing video',
      media: dv4,
      type: 'image'
    },
    {
      title: 'Social Strategy 1',
      category: 'video',
      description: 'Strategii social media',
      media: ss1,
      type: 'image'
    },
    {
      title: 'Social Strategy 2',
      category: 'video',
      description: 'Engagement și creștere',
      media: ss2,
      type: 'image'
    },
    {
      title: 'Social Strategy 3',
      category: 'video',
      description: 'Campanii virale',
      media: ss3,
      type: 'image'
    },
    {
      title: 'Social Strategy 4',
      category: 'video',
      description: 'Brand awareness',
      media: ss4,
      type: 'image'
    },
    {
      title: 'Web Project 1',
      category: 'webdev',
      description: 'Website design & development',
      media: s1,
      type: 'video'
    },
    {
      title: 'Web Project 2',
      category: 'webdev',
      description: 'Landing page optimization',
      media: s2,
      type: 'video'
    },
    {
      title: 'Web Project 3',
      category: 'webdev',
      description: 'E-commerce solution',
      media: s3,
      type: 'video'
    },
    {
      title: 'Web Project 4',
      category: 'webdev',
      description: 'Web application development',
      media: s4,
      type: 'video'
    },
    {
      title: 'Web Project 5',
      category: 'webdev',
      description: 'Full-stack web platform',
      media: s5,
      type: 'video'
    }
  ]

  const filters = ['toate', 'video', 'webdev']

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
              {filter === 'toate' ? 'Toate' : filter === 'video' ? 'Video' : 'Web Development'}
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
