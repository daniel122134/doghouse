import React from 'react'
import texture from './assets/background.jpg'
import './Home.css'
import Navbar from './components/Navbar/Navbar.jsx'
import HomeMain from './components/HomeMain/HomeMain.jsx'
import Services from './components/Services/Services.jsx'

const Home = () => {
  return (
    <div id="landing-page">
      <header>
        <Navbar />
        <div className="home-page-texture">
          <img src={texture} alt="DogHouse" />
        </div>
        <HomeMain />
      </header>
      <Services />
    </div>
  )
}

export default Home
