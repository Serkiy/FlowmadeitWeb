import { useState, useEffect } from 'react'
import './WelcomeOverlay.css'

const WelcomeOverlay = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after 1 second
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="welcome-overlay">
      <div className="overlay-backdrop" onClick={handleClose}></div>
      <div className="overlay-content">
        <button className="close-btn" onClick={handleClose}>×</button>
        <div className="person-container">
          <img src="/welcome-person.png" alt="Bun venit" className="person-image" />
          <div className="thought-bubble">
            <div className="bubble-content">
              <h2>Bun venit! 👋</h2>
              <p>Hai să transformăm ideile tale în realitate!</p>
            </div>
            <div className="bubble-tail"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeOverlay
