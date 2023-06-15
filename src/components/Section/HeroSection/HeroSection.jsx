import React from 'react'
import hero from "../../assets/img/hero.png"
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <>
      <header className="hero-section">
        <img className='hero' src={hero} alt="hero" />
        <div className="container">
          <div className="main-header">
            <h1 className='main-title'>creative scroll</h1>
          </div>
        </div>
      </header>
    </>
  )
}
