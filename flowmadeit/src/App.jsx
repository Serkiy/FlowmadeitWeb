import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import ShowcaseVideo from './components/ShowcaseVideo'
import Packages from './components/Packages'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Statistics from './components/Statistics'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">FlowMadeIt</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#stats">Stats</a></li>
          </ul>
        </div>
      </nav>

      <Hero />
      <ShowcaseVideo />
      <Packages />
      <Portfolio />
      <Team />
      <Statistics />
      <Footer />
    </div>
  )
}

export default App
