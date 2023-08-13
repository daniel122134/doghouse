import React from 'react'
import './HomeMain.css'
import {Link} from "react-router-dom";
import cover from "../../assets/houseCover.png";

const HomeMain = () => {

  return (
    <div id="hero">
      <div className="hero-text">
          <img src={cover} alt="logo" />
          {/*<HeroImage className="hero-image"/>*/}
        <h2>{"Welcome to the first ever dog social network"}</h2>
        <Link to="/app" className="hero-btn" >
          {"Start Now"}
        </Link>
      </div>
    </div>
  )
}

export default HomeMain
