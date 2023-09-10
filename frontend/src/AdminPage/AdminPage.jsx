import React, {useContext, useEffect, useState} from "react";
import Feature from "./Feature.jsx";
import './AdminPage.css'
import {
  shouldEnableDogedexContext,
  shouldEnableEditPostContext,
  shouldEnableMyProfilePageContext,
  shouldEnablePeeOnPolePageContext,
  shouldEnableSearchOptionsContext,
  shouldEnableSharePostButtonContext,
  shouldEnableStatisticsPageContext,
  shouldEnableUnlikePostContext
} from "../Dashboard/Dashboard.jsx";
import EventLog from "./EventLog.jsx";
import ExploreDogs from "../ExploreDogs/ExploreDogs.jsx";
import {api} from "../../api.jsx";

function AdminPage() {
  const [shouldEnablePeeOnPolePage, setShouldEnablePeeOnPolePage] = useContext(shouldEnablePeeOnPolePageContext)
  const [shouldEnableMyProfilePage, setShouldEnableMyProfilePage] = useContext(shouldEnableMyProfilePageContext)
  const [shouldEnableSharePostButton, setShouldEnableSharePostButton] = useContext(shouldEnableSharePostButtonContext)
  const [shouldEnableEditPost, setShouldEnableEditPost] = useContext(shouldEnableEditPostContext)
  const [shouldEnableUnlikePost, setShouldEnableUnlikePost] = useContext(shouldEnableUnlikePostContext)
  const [shouldEnableSearchOptions, setShouldEnableSearchOptions] = useContext(shouldEnableSearchOptionsContext)
  const [shouldEnableStatisticsPage, setShouldEnableStatisticsPage] = useContext(shouldEnableStatisticsPageContext)
  const [shouldEnableDogedexPage, setShouldEnableDogedexPage] = useContext(shouldEnableDogedexContext)
  const [isLoading, setIsLoading] = useState(true)
  const [allUsers, setAllUsers] = useState([])
  
  useEffect(() => {
    api.getAllUsers().then((users) => {
      setAllUsers(users)
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
            <div className={"admin-page-container"}>
              <div className={"admin-page-section"}>
                <div className={"features-section"}>
                  <Feature featureName={"Pee On a Pole Page"} featureState={shouldEnablePeeOnPolePage}
                           setFeatureStateCallback={setShouldEnablePeeOnPolePage}></Feature>
                  <Feature featureName={"My Profile Page"} featureState={shouldEnableMyProfilePage}
                           setFeatureStateCallback={setShouldEnableMyProfilePage}></Feature>
                  <Feature featureName={"Share Post Button"} featureState={shouldEnableSharePostButton}
                           setFeatureStateCallback={setShouldEnableSharePostButton}></Feature>
                  <Feature featureName={"Edit Post"} featureState={shouldEnableEditPost}
                           setFeatureStateCallback={setShouldEnableEditPost}></Feature>
                  <Feature featureName={"Unlike Post"} featureState={shouldEnableUnlikePost}
                           setFeatureStateCallback={setShouldEnableUnlikePost}></Feature>
                  <Feature featureName={"Search Options"} featureState={shouldEnableSearchOptions}
                           setFeatureStateCallback={setShouldEnableSearchOptions}></Feature>
                  <Feature featureName={"Statistics Page"} featureState={shouldEnableStatisticsPage}
                           setFeatureStateCallback={setShouldEnableStatisticsPage}></Feature>
                  <Feature featureName={"Dogedex Page"} featureState={shouldEnableDogedexPage}
                           setFeatureStateCallback={setShouldEnableDogedexPage}></Feature>
                </div>

                <div className={"logs-section"}>
                  <EventLog/>
                </div>
              </div>
              
              <ExploreDogs userList={allUsers} mode={"admin"}/>
            </div>
          )
      }
    </div>
  )
}


export default AdminPage

