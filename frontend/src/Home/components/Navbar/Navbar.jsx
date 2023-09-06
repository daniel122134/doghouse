import React from 'react'
import './Navbar.css'
import logo from '../../assets/houseCover.png'
import {Link} from "react-router-dom";

const Navbar = () => {

  return (
    <nav>
      <a href="/" className="nav-logo">
        <img src={logo} alt="dog house logo" />
      </a>
        <div>
          <button onClick={() => window.location.href='/login'} className="main-btn">
            {"Log In"}
          </button>
          <button onClick={() => window.location.href='/signup'} className="main-btn">
            {"Sign up"}
          </button>
        </div>
    </nav>
  )
}

export default Navbar
