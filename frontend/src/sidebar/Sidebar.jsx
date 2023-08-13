import './Sidebar.css'
import Icon from '../components/Icon'
import logo from "../assets/houseCover.png";


const Sidebar = (props) => {
  
  return (
    <div className="sidebar">

      <button className="logo" onClick={() => props.onLogoClick()}>
        <img src={logo} alt="logo"/>
      </button>
    
      
      <div className="sidebar-button"
        onClick={() => props.onProfileClicked()}
        data-selected={props.currentPage === 'Profile'}
      >
        <Icon icon="fa fa-address-book"></Icon>
        {"My profile"}
      </div>

      <div className="sidebar-button"
        onClick={() => props.onFeedClicked()}
        data-selected={props.currentPage === 'Feed'}
      >
        <Icon icon="fa fa-dollar"></Icon>
        {"Feed"}
      </div>

        <div className="sidebar-button"
             onClick={() => props.onExploreClicked()}
             data-selected={props.currentPage === 'Explore'}
        >
            <Icon icon="fa fa-dollar"></Icon>
            {"Explore"}
        </div>

        <div className="sidebar-button"
             onClick={() => props.onPolesClicked()}
             data-selected={props.currentPage === 'Poles'}
        >
            <Icon icon="fa fa-dollar"></Icon>
            {"Pee Poles"}
        </div>

        <div className="sidebar-button"
             onClick={() => props.onDogedexClicked()}
             data-selected={props.currentPage === 'Dogedex'}
        >
            <Icon icon="fa fa-dollar"></Icon>
            {"Dogedex"}
        </div>

        <div className="sidebar-button"
             onClick={() => props.onAdminClicked()}
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
