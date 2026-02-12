import { useState, useEffect, useRef } from 'react'
import './ShowcaseVideo.css'

const ShowcaseVideo = () => {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <section className="showcase-video" ref={videoRef}>
      <div className={`video-container ${isVisible ? 'visible' : ''}`}>
        <div className="video-wrapper">
          <video
            className="presentation-video"
            autoPlay
            loop
            muted
            playsInline
          >
            {/* Înlocuiește src cu video-ul tău de prezentare */}
            <source src="/video-prezentare.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseVideo
