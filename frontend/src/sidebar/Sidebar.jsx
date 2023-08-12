import './Sidebar.css'
import logo from '../assets/react.svg'
import Icon from '../components/Icon'

import {useContext, useState} from "react";
const Sidebar = (props) => {
  
  // const [tokens, setTokens] = useContext(TokensContext)
  
  return (
    <div className="sidebar">

      <button className="logo" onClick={() => props.onLogoClick()}>
        <img
          src={logo}
          alt="logo"
          style={{ width: '50px', height: '50px' }}
        />
        <div className="doghouse-title">DogHouse</div>
      </button>
    
      
      <div
        className="sidebar-button"
        onClick={() => props.onContactsClicked()}
        data-selected={props.currentPage === 'contacts'}
      >
        <Icon icon="fa fa-address-book"></Icon>
        {"Contacts"}
      </div>

      <div
        className="sidebar-button"
        onClick={() => props.onPricingClicked()}
        data-selected={props.currentPage === 'pricing'}
      >
        <Icon icon="fa fa-dollar"></Icon>
        {"Pricing"}
      </div>

      <div className="tokens-container">
        <div>{"DogHouse.com"}</div>
        <div>{"By Daniel & Hadar"} </div>
      </div>
    </div>
  )
}

export default Sidebar
