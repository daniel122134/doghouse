import './Sidebar.css'
// import logo from '../assets/react.svg'
import Icon from '../components/Icon'
import logo from "../assets/houseCover.png";


// import {useContext, useState} from "react";
const Sidebar = (props) => {
  
  // const [tokens, setTokens] = useContext(TokensContext)
  
  return (
    <div className="sidebar">

        {/* eslint-disable-next-line react/prop-types */}
      <button className="logo" onClick={() => props.onLogoClick()}>
        <img src={logo} alt="logo"/>
        {/*<div className="doghouse-title">DogHouse</div>*/}
      </button>
    
      
      <div className="sidebar-button"
        onClick={() => props.onContactsClicked()}
        data-selected={props.currentPage === 'My profile'}
      >
        <Icon icon="fa fa-address-book"></Icon>
        {"My profile"}
      </div>

      <div className="sidebar-button"
        onClick={() => props.onPricingClicked()}
        data-selected={props.currentPage === 'Feed'}
      >
        <Icon icon="fa fa-dollar"></Icon>
        {"Feed"}
      </div>

        <div className="sidebar-button"
             onClick={() => props.onPricingClicked()}
             data-selected={props.currentPage === 'Explore'}
        >
            <Icon icon="fa fa-dollar"></Icon>
            {"Explore"}
        </div>

        <div className="sidebar-button"
             onClick={() => props.onPricingClicked()}
             data-selected={props.currentPage === 'Pee Poles'}
        >
            <Icon icon="fa fa-dollar"></Icon>
            {"Pee Poles"}
        </div>

        <div className="sidebar-button"
             onClick={() => props.onPricingClicked()}
             data-selected={props.currentPage === 'Dogedex'}
        >
            <Icon icon="fa fa-dollar"></Icon>
            {"Dogedex"}
        </div>

        <div className="sidebar-button"
             onClick={() => props.onPricingClicked()}
             data-selected={props.currentPage === 'Admin'}
        >
            <Icon icon="fa fa-dollar"></Icon>
            {"Admin"}
        </div>


      <div className="tokens-container">
        <div>{"DogHouse.com"}</div>
        <div>{"By Daniel & Hadar"} </div>
      </div>
    </div>
  )
}

export default Sidebar
