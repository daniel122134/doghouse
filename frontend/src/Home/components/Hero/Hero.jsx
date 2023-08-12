import React from 'react'
import './Hero.css'
import HeroImage from './HeroImage.jsx'
import {Link} from "react-router-dom";

const Hero = () => {

  return (
    <div id="hero">
      <div className="hero-text">
        <h1>{"DogHouse"}</h1>
        <h2>{"Welcome to the first ever dog social network"}</h2>
        <Link to="/app" className="hero-btn" >
          {"Start Now"}
        </Link>
      </div>
      <div className="hero-image">
        <HeroImage />
      </div>
    </div>
  )
}

export default Hero
