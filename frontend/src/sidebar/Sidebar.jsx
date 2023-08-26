import './Sidebar.css'
import Icon from '../components/Icon'
import logo from "../assets/houseCover.png";
import {Link, useNavigate} from "react-router-dom";
import React, {useContext, useState} from "react";
import {
  shouldEnableDogedexContext,
  shouldEnableMyProfilePageContext,
  shouldEnablePeeOnPolePageContext
} from "../Dashboard/Dashboard.jsx";
import authService from "../../authService.jsx";


const Sidebar = (props) => {
  const [shouldEnableDogedexPage, setShouldEnableDogedexPage] = useContext(shouldEnableDogedexContext)
  const [shouldEnablePeeOnPolePage, setShouldEnablePeeOnPolePage] = useContext(shouldEnablePeeOnPolePageContext)
  const [shouldEnableMyProfilePage, setShouldEnableMyProfilePage] = useContext(shouldEnableMyProfilePageContext)
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      hello {authService.getCurrentUser().username}
      <button className="logo" onClick={() => props.onLogoClick()}>
        <img src={logo} alt="logo"/>
      </button>


      <div className="sidebar-button"
           onClick={() => props.onProfileClicked()}
           data-selected={props.currentPage === 'ProfilePage'}
           style={{display: shouldEnableMyProfilePage ? 'flex' : 'none'}}

      >
        <Icon icon="fa fa-address-book"></Icon>
        {"My profile"}
      </div>

      <div className="sidebar-button"
           onClick={() => props.onFeedClicked()}
           data-selected={props.currentPage === 'FeedPage'}

      >
        <Icon icon="fa fa-dollar"></Icon>
        {"FeedPage"}
      </div>

      <div className="sidebar-button"
           onClick={() => props.onExploreClicked()}
           data-selected={props.currentPage === 'ExplorePage'}
      >
        <Icon icon="fa fa-dollar"></Icon>
        {"ExplorePage"}
      </div>

      <div className="sidebar-button"
           onClick={() => props.onPolesClicked()}
           data-selected={props.currentPage === 'PeePolesPage'}
           style={{display: shouldEnablePeeOnPolePage ? 'flex' : 'none'}}
      >
        <Icon icon="fa fa-dollar"></Icon>
        {"Pee Poles"}
      </div>

      <div className="sidebar-button"
           onClick={() => props.onDogedexClicked()}
           data-selected={props.currentPage === 'DogedexPage'}
           style={{display: shouldEnableDogedexPage ? 'flex' : 'none'}}
      >
        <Icon icon="fa fa-dollar"></Icon>
        {"DogedexPage"}
      </div>

      <div className="sidebar-button"
           onClick={() => props.onAdminClicked()}
           data-selected={props.currentPage === 'AdminPage'}
      >
        <Icon icon="fa fa-dollar"></Icon>
        {"Admin"}
      </div>


      <div className="tokens-container">
        <button onClick={()=> {
          authService.logout().then(r => {
            navigate("/");
            window.location.reload();
          })
          
          
        
        }} className="logout-btn">
          {"Log out"}
        </button>
        <div>{"DogHouse.com"}</div>
        <div>{"By Daniel & Hadar"} </div>
      </div>
    </div>
  )
}

export default Sidebar
