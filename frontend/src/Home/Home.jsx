import React from 'react'
import texture from './assets/texture.svg'
import './Home.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'

const Home = () => {
  return (
    <div id="landing-page">
      <header>
        <Navbar />
        <div className="home-page-texture">
          <img src={texture} alt="pingo" />
        </div>
        <Hero />
      </header>
      <Services />
      <a href="https://storyset.com/people">People illustrations by Storyset</a>
    </div>
  )
}

export default Home
