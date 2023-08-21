import React from "react";
import pole1 from "./assets/fire-hydrant-pole.gif";
import pole2 from "./assets/lamp-pole.gif";
import pole3 from "./assets/traffic-light-pole.gif";
import pole4 from "./assets/cone-pole.gif";
import pole5 from "./assets/tree-pole.png";
import pole6 from "./assets/fence-pole.gif";
import './PeePolesPage.css'
import Pole from "./Pole.jsx";


function PeePolesPage() {
  

  return (
    <div className="poles">
      <Pole poleName={"fire hydrent"} poleImg={pole1}></Pole>
      <Pole poleName={"lamp"} poleImg={pole2}></Pole>
      <Pole poleName={"traffic light"} poleImg={pole3}></Pole>
      <Pole poleName={"cone"} poleImg={pole4}></Pole>
      <Pole poleName={"tree"} poleImg={pole5}></Pole>
      <Pole poleName={"fence"} poleImg={pole6}></Pole>
      
    </div>
  )
}


export default PeePolesPage

