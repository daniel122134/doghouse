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

dayjs.extend(relativeTime)

const IsDogodexActiveContext = createContext(null)
const IsLoadingContext = createContext(null)

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isDogodexActive, setIsDogodexActive] = useState(false)
  const [isInitialLoading, setInitialLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('FeedPage')
  window.setCurrentPageCache = setCurrentPage

  const downloadInitialData = async () => {
    //todo add loading screen and load stuff
    setInitialLoading(false)

  }

  useEffect(() => {
    downloadInitialData()
  }, [])


  return (
    <Contexts
      isLoading={isLoading}
      setIsLoading={setIsLoading}
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
                    isDogodexActive,
                    setIsDogodexActive,

                  }) {
  return (

    <IsLoadingContext.Provider value={[isLoading, setIsLoading]}>
      <IsDogodexActiveContext.Provider value={[isDogodexActive, setIsDogodexActive]}>
        {children}
      </IsDogodexActiveContext.Provider>
    </IsLoadingContext.Provider>
  )
}

export default App
export {
  IsLoadingContext,
  IsDogodexActiveContext
}
