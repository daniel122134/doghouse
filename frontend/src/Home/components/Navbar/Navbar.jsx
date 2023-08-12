import React from 'react'
import './Navbar.css'
import logo from '../../../assets/react.svg'
import {Link} from "react-router-dom";

const Navbar = () => {

  return (
    <nav>
      <a href="/" className="nav-logo">
        <img src={logo} alt="ping logo" />
      </a>
      <h2 style={{marginLeft: "15px"}}>Pingo</h2>
      <Link to="/app" className="nav-btn">
        {"Start Now"}
      </Link>
    </nav>
  )
}

export default Navbar
