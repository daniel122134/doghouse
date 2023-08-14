import Switch from 'react-ios-switch'

import React, {useEffect, useState} from "react";
import Feature from "./feature.jsx";
import './AdminPage.css'
import {api} from "../../api.jsx";


function AdminPage() {
  const [shouldEnablePeeOnPolePage, setShouldEnablePeeOnPolePage] = useState(false)
  const [shouldEnableMyProfilePage, setShouldEnableMyProfilePage] = useState(false)
  const [shouldEnableSharePostButton, setShouldEnableSharePostButton] = useState(false)
  const [shouldEnableEditPost, setShouldEnableEditPost] = useState(false)
  const [shouldEnableUnlikePost, setShouldEnableUnlikePost] = useState(false)
  const [shouldEnableSearchOptions, setShouldEnableSearchOptions] = useState(false)
  const [shouldEnableAds, setShouldEnableAds] = useState(false)
  const [shouldEnableStatisticsPage, setShouldEnableStatisticsPage] = useState(false)
  const [shouldEnableDogedexPage, setShouldEnableDogedexPage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    debugger

    api.getFeatures().then(data => {
        debugger
        setShouldEnablePeeOnPolePage(data['Pee On a Pole Page']===1)
        setShouldEnableMyProfilePage(data['My Profile Page']===1)
        setShouldEnableSharePostButton(data['Share Post Button']===1)
        setShouldEnableEditPost(data['Edit Post']===1)
        setShouldEnableUnlikePost(data['Unlike Post']===1)
        setShouldEnableSearchOptions(data['Search Options']===1)
        setShouldEnableAds(data['Ads']===1)
        setShouldEnableStatisticsPage(data['Statistics Page']===1)
        setShouldEnableDogedexPage(data['Dogedex Page']===1)  
        
        setIsLoading(false)
      })
    
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
            <div className={"features-section"}>
              <Feature featureName={"Pee On a Pole Page"} featureState={shouldEnablePeeOnPolePage}></Feature>
              <Feature featureName={"My Profile Page"} featureState={shouldEnableMyProfilePage}></Feature>
              <Feature featureName={"Share Post Button"} featureState={shouldEnableSharePostButton}></Feature>
              <Feature featureName={"Edit Post"} featureState={shouldEnableEditPost}></Feature>
              <Feature featureName={"Unlike Post"} featureState={shouldEnableUnlikePost}></Feature>
              <Feature featureName={"Search Options"} featureState={shouldEnableSearchOptions}></Feature>
              <Feature featureName={"Ads"} featureState={shouldEnableAds}></Feature>
              <Feature featureName={"Statistics Page"} featureState={shouldEnableStatisticsPage}></Feature>
              <Feature featureName={"Dogedex Page"} featureState={shouldEnableDogedexPage}></Feature>
            </div>

            <div className={"logs-section"}>
            
            </div>
          </div>
          )  
      }
      
    </div>

      
  )
}


export default AdminPage

