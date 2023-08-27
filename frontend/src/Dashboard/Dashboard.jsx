import React, {createContext, useEffect, useState} from 'react'
import './Dashboard.css'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Sidebar from '../sidebar/Sidebar'
import Icon from "../components/Icon.jsx";
import ProfilePage from "../ProfilePage/ProfilePage.jsx";
import ExplorePage from "../ExplorePage/ExplorePage.jsx";
import PeePolesPage from "../PeePolesPage/PeePolesPage.jsx";
import DogedexPage from "../DogedexPage/DogedexPage.jsx";
import AdminPage from "../AdminPage/AdminPage.jsx";
import {api} from "../../api.jsx";

dayjs.extend(relativeTime)

const shouldEnableDogedexContext = createContext(null)
const shouldEnablePeeOnPolePageContext = createContext(null)
const shouldEnableMyProfilePageContext = createContext(null)
const shouldEnableSharePostButtonContext = createContext(null)
const shouldEnableEditPostContext = createContext(null)
const shouldEnableUnlikePostContext = createContext(null)
const shouldEnableSearchOptionsContext = createContext(null)
const shouldEnableAdsContext = createContext(null)
const shouldEnableStatisticsPageContext = createContext(null)
const IsLoadingContext = createContext(null)

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false)
  const [shouldEnablePeeOnPolePage, setShouldEnablePeeOnPolePage] = useState(false)
  const [shouldEnableMyProfilePage, setShouldEnableMyProfilePage] = useState(false)
  const [shouldEnableSharePostButton, setShouldEnableSharePostButton] = useState(false)
  const [shouldEnableEditPost, setShouldEnableEditPost] = useState(false)
  const [shouldEnableUnlikePost, setShouldEnableUnlikePost] = useState(false)
  const [shouldEnableSearchOptions, setShouldEnableSearchOptions] = useState(false)
  const [shouldEnableAds, setShouldEnableAds] = useState(false)
  const [shouldEnableStatisticsPage, setShouldEnableStatisticsPage] = useState(false)
  const [shouldEnableDogedexPage, setShouldEnableDogedexPage] = useState(false)


  const [isInitialLoading, setInitialLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('FeedPage')
  window.setCurrentPageCache = setCurrentPage

  const downloadInitialData = async () => {
    //todo add loading screen and load stuff
    api.getFeatures().then(data => {
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


    setInitialLoading(false)

  }

  useEffect(() => {
    downloadInitialData()
  }, [])


  return (
    <Contexts
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      shouldEnableDogedexPage={shouldEnableDogedexPage}
      setShouldEnableDogedexPage={setShouldEnableDogedexPage}
      shouldEnablePeeOnPolePage={shouldEnablePeeOnPolePage}
      setShouldEnablePeeOnPolePage={setShouldEnablePeeOnPolePage}
      shouldEnableMyProfilePage={shouldEnableMyProfilePage}
      setShouldEnableMyProfilePage={setShouldEnableMyProfilePage}
      shouldEnableSharePostButton={shouldEnableSharePostButton}
      setShouldEnableSharePostButton={setShouldEnableSharePostButton}
      shouldEnableEditPost={shouldEnableEditPost}
      setShouldEnableEditPost={setShouldEnableEditPost}
      shouldEnableUnlikePost={shouldEnableUnlikePost}
      setShouldEnableUnlikePost={setShouldEnableUnlikePost}
      shouldEnableSearchOptions={shouldEnableSearchOptions}
      setShouldEnableSearchOptions={setShouldEnableSearchOptions}
      shouldEnableAds={shouldEnableAds}
      setShouldEnableAds={setShouldEnableAds}
      shouldEnableStatisticsPage={shouldEnableStatisticsPage}
      setShouldEnableStatisticsPage={setShouldEnableStatisticsPage}


    >
      <div
        className="App"
        style={{flexDirection: 'row'}}
        dir={"ltr"}
        data-dir={"ltr"}
      >

        {(
          <Sidebar
            currentPage={currentPage}
            onLogoClick={() => {
              setCurrentPage('FeedPage')
            }}
            onProfileClicked={() => setCurrentPage('ProfilePage')}
            onFeedClicked={() => setCurrentPage('FeedPage')}
            onExploreClicked={() => setCurrentPage('ExplorePage')}
            onPolesClicked={() => setCurrentPage('PeePolesPage')}
            onDogedexClicked={() => setCurrentPage('DogedexPage')}
            onAdminClicked={() => setCurrentPage('AdminPage')}
          ></Sidebar>
        )}

        <div className="content">

          {isInitialLoading ? (
            <div className="app-loader">
              <Icon icon="fa fa-spinner fa-spin"></Icon>
            </div>
          ) : null}
          {!isInitialLoading && currentPage === 'ProfilePage' ? (
            <ProfilePage/>
          ) : null}
          {!isInitialLoading && currentPage === 'FeedPage' ? (
            <ProfilePage/>
          ) : null}
          {!isInitialLoading && currentPage === 'ExplorePage' ? (
            <ExplorePage/>
          ) : null}
          {!isInitialLoading && currentPage === 'PeePolesPage' ? (
            <PeePolesPage/>
          ) : null}
          {!isInitialLoading && currentPage === 'DogedexPage' ? (
            <DogedexPage/>
          ) : null}
          {!isInitialLoading && currentPage === 'AdminPage' ? (
            <AdminPage/>
          ) : null}

        </div>


      </div>
    </Contexts>
  )
}

function Contexts({
                    children,
                    isLoading,
                    setIsLoading,
                    shouldEnableDogedexPage,
                    setShouldEnableDogedexPage,
                    shouldEnablePeeOnPolePage,
                    setShouldEnablePeeOnPolePage,
                    shouldEnableMyProfilePage,
                    setShouldEnableMyProfilePage,
                    shouldEnableSharePostButton,
                    setShouldEnableSharePostButton,
                    shouldEnableEditPost,
                    setShouldEnableEditPost,
                    shouldEnableUnlikePost,
                    setShouldEnableUnlikePost,
                    shouldEnableSearchOptions,
                    setShouldEnableSearchOptions,
                    shouldEnableAds,
                    setShouldEnableAds,
                    shouldEnableStatisticsPage,
                    setShouldEnableStatisticsPage,
                  }) {
  return (

    <IsLoadingContext.Provider value={[isLoading, setIsLoading]}>
      <shouldEnableDogedexContext.Provider value={[shouldEnableDogedexPage, setShouldEnableDogedexPage]}>
        <shouldEnablePeeOnPolePageContext.Provider value={[shouldEnablePeeOnPolePage, setShouldEnablePeeOnPolePage]}>
          <shouldEnableMyProfilePageContext.Provider value={[shouldEnableMyProfilePage, setShouldEnableMyProfilePage]}>
            <shouldEnableSharePostButtonContext.Provider
              value={[shouldEnableSharePostButton, setShouldEnableSharePostButton]}>
              <shouldEnableEditPostContext.Provider value={[shouldEnableEditPost, setShouldEnableEditPost]}>
                <shouldEnableUnlikePostContext.Provider value={[shouldEnableUnlikePost, setShouldEnableUnlikePost]}>
                  <shouldEnableSearchOptionsContext.Provider
                    value={[shouldEnableSearchOptions, setShouldEnableSearchOptions]}>
                    <shouldEnableAdsContext.Provider value={[shouldEnableAds, setShouldEnableAds]}>
                      <shouldEnableStatisticsPageContext.Provider
                        value={[shouldEnableStatisticsPage, setShouldEnableStatisticsPage]}>
                        {children}
                      </shouldEnableStatisticsPageContext.Provider>
                    </shouldEnableAdsContext.Provider>
                  </shouldEnableSearchOptionsContext.Provider>
                </shouldEnableUnlikePostContext.Provider>
              </shouldEnableEditPostContext.Provider>
            </shouldEnableSharePostButtonContext.Provider>
          </shouldEnableMyProfilePageContext.Provider>
        </shouldEnablePeeOnPolePageContext.Provider>
      </shouldEnableDogedexContext.Provider>
    </IsLoadingContext.Provider>
  )
}

export default Dashboard
export {
  IsLoadingContext,
  shouldEnableDogedexContext,
  shouldEnablePeeOnPolePageContext,
  shouldEnableMyProfilePageContext,
  shouldEnableSharePostButtonContext,
  shouldEnableEditPostContext,
  shouldEnableUnlikePostContext,
  shouldEnableSearchOptionsContext,
  shouldEnableAdsContext,
  shouldEnableStatisticsPageContext
}
