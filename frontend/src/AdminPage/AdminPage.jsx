import Switch from 'react-ios-switch'

import React, {useEffect, useState} from "react";
import Feature from "./feature.jsx";


function AdminPage() {
  const [shouldEnablePeeOnPolePage, setShouldEnablePeeOnPolePage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    debugger
    fetch('http://localhost:8080/api/getFeatures')
      .then(response => response.json())
      .then(data => {
        setShouldEnablePeeOnPolePage(data.shouldEnablePeeOnPolePage)
      })
    setIsLoading(false)
  }, [])
  
  return (
    <div className={"admin-page"}>
      
      <div className="header-panel">

        <h1>
          {"Admin Page"}
        </h1>

      </div>

      {
        isLoading ? null :
          (
          <div className={"admin-page-section"}>
            <Feature featureName={"Pee On a Pole Page"} featureState={shouldEnablePeeOnPolePage}></Feature>
            <Feature featureName={"My Profile Page"} featureState={shouldEnablePeeOnPolePage}></Feature>
            <Feature featureName={"Share Post Button"} featureState={shouldEnablePeeOnPolePage}></Feature>
            <Feature featureName={"Edit Post"} featureState={shouldEnablePeeOnPolePage}></Feature>
            <Feature featureName={"Unlike Post"} featureState={shouldEnablePeeOnPolePage}></Feature>
            <Feature featureName={"Search Options"} featureState={shouldEnablePeeOnPolePage}></Feature>
            <Feature featureName={"Ads"} featureState={shouldEnablePeeOnPolePage}></Feature>
            <Feature featureName={"Statistics Page"} featureState={shouldEnablePeeOnPolePage}></Feature>
            <Feature featureName={"Dogedex Page"} featureState={shouldEnablePeeOnPolePage}></Feature>
          </div>
          )  
      }
      
    </div>

      
  )
}


export default AdminPage

