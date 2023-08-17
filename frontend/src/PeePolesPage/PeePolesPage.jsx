import React from "react";
import pole1 from "./assets/fire-hydrant-pole.gif";
import pole2 from "./assets/lamp-pole.gif";
import pole3 from "./assets/traffic-light-pole.gif";
import pole4 from "./assets/cone-pole.gif";
import pole5 from "./assets/tree-pole.png";
import pole6 from "./assets/fence-pole.gif";
import './PeePolesPage.css'
import {Link} from "react-router-dom";
import {api} from "../../api.jsx";


function PeePolesPage() {
  return (
      <div className="poles">
          <div className="pole">
              <img src={pole1} alt="fire-hydrant-pole" />
              <h2>The fire Hydrent pole</h2>
              <h2>owner: </h2>
              <Link to="/app" className="pee">
                  {"Pee"}
              </Link>
          </div>

          <div className="pole">
              <img src={pole2} alt="lamp-pole" />
              <h2>The lamp pole</h2>
              <h2>owner: </h2>
              <Link to="/app" className="pee">
                  {"Pee"}
              </Link>
          </div>

          <div className="pole">
              <img src={pole3} alt="traffic-light-pole" />
              <h2>The traffic light pole</h2>
              <h2>owner: </h2>
              <Link to="/app" className="pee">
                  {"Pee"}
              </Link>
          </div>

          <div className="pole">
              <img src={pole4} alt="cone-pole" />
              <h2>The cone pole</h2>
              <h2>owner: </h2>
              <Link to="/app" className="pee">
                  {"Pee"}
              </Link>
          </div>

          <div className="pole">
              <img src={pole5} alt="tree-pole" />
              <h2>The tree pole</h2>
              <h2>owner: </h2>
              <Link to="/app" className="pee">
                  {"Pee"}
              </Link>
          </div>

          <div className="pole">
              <img src={pole6} alt="fence-pole" />
              <h2>The fence pole</h2>
              <h2>owner: </h2>
              <button className="pee"
                  onClick={async () => {
                  await api.setPeePoleOwner('fence', 0)
              }} >
                  {"Pee"}
              </button>
          </div>
      </div>
  )
}


export default PeePolesPage

