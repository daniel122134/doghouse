import Switch from 'react-ios-switch'
import React, {useState} from "react";
import './Feature.css'
import {api} from "../../api.jsx";

function Feature(props) {
  const [isFeatureEnabled, setFeatureState] = useState(props.featureState)


  return (
    <div className={"feature"}>
      
        <div className={"feature-name"}>
          {props.featureName}
        </div>

        <Switch
          className="toggle"
          checked={isFeatureEnabled}
          disabled={false}
          handleColor="white"
          name={'shouldEnableFeature'}
          offColor="white"
          onChange={async () => {
            await api.setFeatureState(props.featureName, !isFeatureEnabled)
            setFeatureState(!isFeatureEnabled)
            props.setFeatureStateCallback(!isFeatureEnabled)
          }}
          onColor="rgb(76, 217, 100)"
          style={undefined}
        />

      
    </div>


  )
}


export default Feature

