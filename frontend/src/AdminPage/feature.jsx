import Switch from 'react-ios-switch'

import React, {useState} from "react";


function Feature(props) {
  const [isFeatureEnabled, setFeatureState] = useState(props.featureState)


  return (
    <div className={"feature"}>
      
        <div>
          {props.featureName}
        </div>

        <Switch
          className="toggle"
          checked={isFeatureEnabled}
          disabled={false}
          handleColor="white"
          name={'shouldEnablePeeOnPolePage'}
          offColor="white"
          onChange={() => {
            setFeatureState(!isFeatureEnabled)
          }}
          onColor="rgb(76, 217, 100)"
          style={undefined}
        />

      
    </div>


  )
}


export default Feature

