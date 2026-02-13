import { useState, useEffect, useRef } from 'react'
import './ShowcaseVideo.css'
import videoprezVideo from '../assets/Videoprez.mp4'

const ShowcaseVideo = () => {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)

        if (videoRef.current && entry.isIntersecting) {
          videoRef.current.play().then(() => {
            videoRef.current.muted = false
            videoRef.current.volume = 0.7
          }).catch(() => {
            // Keep it muted if browser blocks unmute
          })
        } else if (videoRef.current) {
          videoRef.current.muted = true
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

  return (
    <section className="showcase-video" ref={sectionRef}>
      <div className={`video-container ${isVisible ? 'visible' : ''}`}>
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="presentation-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoprezVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseVideo
