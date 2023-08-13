import React from "react";
import pole1 from "./assets/fire-hydrant-pole.gif";
import pole2 from "./assets/lamp-pole.gif";
import pole3 from "./assets/traffic-light-pole.gif";
import pole4 from "./assets/cone-pole.gif";
import './PeePolesPage.css'
import {Link} from "react-router-dom";

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
      </div>
  )
}


export default PeePolesPage

