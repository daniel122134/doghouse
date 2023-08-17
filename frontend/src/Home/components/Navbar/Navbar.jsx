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
      {/*<h2 style={{marginLeft: "15px"}}>DogHouse</h2>*/}
        <div>
            <Link to="/login" className="nav-btn" >
                {"Log In"}
            </Link>
            <Link to="/signup" className="nav-btn">
                {"Sign up"}
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
