import React, {useState} from "react";
import './PeePolesPage.css'
import {api} from "../../api.jsx";


function PeePolesPage(props) {
    const [ownerText, setOwnerText] = useState(props.currentOwner);

  return (
      <div className="poles">
          <div className="pole">
              <img src={props.poleImg} alt="fire-hydrant-pole" />
              <h2>The {props.poleName} pole</h2>
              <h2>{ownerText}</h2>
              <button className="pee" onClick={async () => {
                  await api.setPeePoleOwner(props.poleName, 1);
                  setOwnerText('owner: admin');
              //     change to actual owner name***********
              }}>Pee</button>
          </div>
      </div>
  )
}


export default PeePolesPage

