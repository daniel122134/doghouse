import './Sidebar.css'
import Icon from '../components/Icon'
import logo from "../assets/houseCover.png";
import {useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import {
  shouldEnableDogedexContext,
  shouldEnableMyProfilePageContext,
  shouldEnablePeeOnPolePageContext, shouldEnableStatisticsPageContext
} from "../Dashboard/Dashboard.jsx";
import authService from "../../authService.jsx";

const Sidebar = (props) => {
  const [shouldEnableDogedexPage, setShouldEnableDogedexPage] = useContext(shouldEnableDogedexContext)
  const [shouldEnablePeeOnPolePage, setShouldEnablePeeOnPolePage] = useContext(shouldEnablePeeOnPolePageContext)
  const [shouldEnableMyProfilePage, setShouldEnableMyProfilePage] = useContext(shouldEnableMyProfilePageContext)
  const [shouldEnableStatisticsPage, setShouldEnableStatisticsPage] = useContext(shouldEnableStatisticsPageContext)
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button className="logo" onClick={() => props.onLogoClick()}>
        <img src={logo} alt="logo"/>
      </button>

      <div className="sidebar-button"
           onClick={() => props.onProfileClicked()}
           data-selected={props.currentPage === 'ProfilePage'}
           style={{display: shouldEnableMyProfilePage ? 'flex' : 'none'}}

      >
        <Icon icon="fa fa-user"></Icon>
        {"My profile"}
      </div>

      <div className="sidebar-button"
           onClick={() => props.onFeedClicked()}
           data-selected={props.currentPage === 'FeedPage'}

      >
        <Icon icon="fa fa-rss"></Icon>
        {"FeedPage"}
      </div>

      <div className="sidebar-button"
           onClick={() => props.onExploreClicked()}
           data-selected={props.currentPage === 'ExplorePage'}
      >
        <Icon icon="fa fa-address-book"></Icon>
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
           onClick={() => props.onStatsClicked()}
           data-selected={props.currentPage === 'StatsPage'}
           style={{display: shouldEnableStatisticsPage ? 'flex' : 'none'}}
      >
        <Icon icon="fa fa-chart-line"></Icon>
        {"Statistics"}
      </div>

      <div className="sidebar-button"
           onClick={() => props.onDogedexClicked()}
           data-selected={props.currentPage === 'DogedexPage'}
           style={{display: shouldEnableDogedexPage ? 'flex' : 'none'}}
      >
        <Icon icon="fa fa-dog"></Icon>
        {"DogedexPage"}
      </div>

      <div className="sidebar-button"
           onClick={() => props.onAdminClicked()}
           data-selected={props.currentPage === 'AdminPage'}
           style={{display: authService.getCurrentUser() && authService.getCurrentUser().isAdmin ? 'flex' : 'none'}}

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
