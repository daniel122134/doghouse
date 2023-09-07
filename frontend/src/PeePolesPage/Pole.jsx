import React, {useEffect, useState} from "react";
import './PeePolesPage.css'
import {api} from "../../api.jsx";
import authService from "../../authService.jsx";

function PeePolesPage(props) {
    const [ownerText, setOwnerText] = useState("loading owner...");

  async function loadOwner() {
    const currentOwner = (await api.getPoleOwner(props.poleName)).username;
    setOwnerText(currentOwner);
  }
  
  useEffect(() => {
    loadOwner()
  }, []);
  
  return (
      <div className="poles">
          <div className="pole">
              <img src={props.poleImg} alt="fire-hydrant-pole" />
              <h2>The {props.poleName} pole</h2>
              <h2>owner: {ownerText}</h2>
              <button className="pee" onClick={async () => {
                  await api.setPeePoleOwner(props.poleName, authService.getCurrentUser().id);
                  setOwnerText(authService.getCurrentUser().username);
              }}>Pee</button>
          </div>
      </div>
  )
}

export default PeePolesPage

