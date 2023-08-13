import React from 'react'
import './HomeMain.css'
import {Link} from "react-router-dom";
import logo from "../../assets/houseCover.png";

const HomeMain = () => {

  return (
    <div id="main">
      <div className="main-text">
          <img src={logo} alt="logo" />
          {/*<mainImage className="main-image"/>*/}
          <h2>{"Welcome to the first ever dog social network"}</h2>
          <div>
              <Link to="/app" className="main-btn" >
                  {"Log In"}
              </Link>
              <Link to="/app" className="main-btn">
                  {"Sign up"}
              </Link>
          </div>

      </div>
    </div>
  )
}

export default HomeMain