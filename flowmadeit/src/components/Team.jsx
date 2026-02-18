import { useState, useEffect, useRef } from 'react'
import './Team.css'
import florinImg from '../assets/florin.jpg'
import bogdanImg from '../assets/bogdan.jpg'
import sergiuImg from '../assets/sergiu.jpeg'

const Team = () => {
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

  const team = [
    {
      name: 'Florin Brasoveanu',
      role: 'Videograf',
      image: florinImg,
      bio: '5+ ani in productie video si foto',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Bogdan Gheboianu',
      role: 'Figuratie',
      image: bogdanImg,
      bio: 'Pot fi imaginea brandului tau. Sunt un om placut si haios, clientii tai ma vor iubi!',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Sergiu Novac',
      role: 'IT - website',
      image: sergiuImg,
      bio: 'Orice tine de domeniul IT ajunge la mine',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },

  ]

  return (
    <section id="team" className="team" ref={sectionRef}>
      <div className="team-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Cunoaște Echipa Noastră</h2>
          <p className="section-subtitle">
            Profesioniști talentați și dedicați care vor să-ți aducă ideile la viață
          </p>
        </div>

        <div className={`team-grid ${isVisible ? 'visible' : ''}`}>
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
