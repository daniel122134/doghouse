import React, {createContext, useEffect, useState} from 'react'
import './Dashboard.css'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Sidebar from '../sidebar/Sidebar'
import Icon from "../components/Icon.jsx";
import ProfilePage from "../ProfilePage/ProfilePage.jsx";
import AdminPage from "../AdminPage/AdminPage.jsx";

dayjs.extend(relativeTime)

const IsLoadingContext = createContext(null)

function App() {
  const [isLoading, setIsLoading] = useState(false)
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


  return  (
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
            onLogoClick={() => {setCurrentPage('FeedPage')}}
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
          {!isInitialLoading && currentPage === 'Profile' ? (
            <ProfilePage />
          ) : null}

          {!isInitialLoading && currentPage === 'FeedPage' ? (
            <ProfilePage />
          ) : null}

          {!isInitialLoading && currentPage === 'AdminPage' ? (
            <AdminPage />
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
                  }) {
  return (


    <IsLoadingContext.Provider
      value={[isLoading, setIsLoading]}
    >
      {children}
    </IsLoadingContext.Provider>
  )
}

export default App
export {
  IsLoadingContext,
}
