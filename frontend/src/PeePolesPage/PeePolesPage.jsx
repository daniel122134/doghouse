import React, {useState} from "react";
import pole1 from "./assets/fire-hydrant-pole.gif";
import pole2 from "./assets/lamp-pole.gif";
import pole3 from "./assets/traffic-light-pole.gif";
import pole4 from "./assets/cone-pole.gif";
import pole5 from "./assets/tree-pole.png";
import pole6 from "./assets/fence-pole.gif";
import './PeePolesPage.css'
import Pole from "./Pole.jsx";


function PeePolesPage() {
    const [fireHydrentOwnerText, setfireHydrentOwnerText] = useState('owner: ?');
    const [lampOwnerText, setLampOwnerText] = useState('owner: ?');
    const [trafficLightOwnerText, setTrafficLightOwnerText] = useState('owner: ?');
    const [coneHydrentOwnerText, setConeOwnerText] = useState('owner: ?');
    const [TreeOwnerText, setTreeOwnerText] = useState('owner: ?');
    const [FenceOwnerText, setFenceOwnerText] = useState('owner: ?');

  return (
      <div className="poles">
          <Pole poleName={"fire hydrent"} poleImg={pole1} currentOwner={fireHydrentOwnerText}
                setOwmerText={setfireHydrentOwnerText}></Pole>
          <Pole poleName={"lamp"} poleImg={pole2} currentOwner={lampOwnerText}
                setOwmerText={setLampOwnerText}></Pole>
          <Pole poleName={"traffic light"} poleImg={pole3} currentOwner={trafficLightOwnerText}
                setOwmerText={setTrafficLightOwnerText}></Pole>
          <Pole poleName={"cone"} poleImg={pole4} currentOwner={coneHydrentOwnerText}
                setOwmerText={setConeOwnerText}></Pole>
          <Pole poleName={"tree"} poleImg={pole5} currentOwner={TreeOwnerText}
                setOwmerText={setTreeOwnerText}></Pole>
          <Pole poleName={"fence"} poleImg={pole6} currentOwner={FenceOwnerText}
                setOwmerText={setFenceOwnerText}></Pole>

          {/*<div className="pole">*/}
          {/*    <img src={pole1} alt="fire-hydrant-pole" />*/}
          {/*    <h2>The fire hydrent pole</h2>*/}
          {/*    <h2>{fire-hydrant-ownerText}</h2>*/}
          {/*    <button className="pee" onClick={handlePeeButtonClick("fire-hydrant")}>Pee</button>*/}
          {/*</div>*/}
      </div>
  )
}


export default PeePolesPage

