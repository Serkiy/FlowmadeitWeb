import { useState, useEffect, useRef } from 'react'
import './ShowcaseVideo.css'

const ShowcaseVideo = () => {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)

        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.muted = false
            videoRef.current.volume = 0.7
            videoRef.current.play()
          } else {
            videoRef.current.muted = true
          }
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
            <source src="/Videoprez.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseVideo
