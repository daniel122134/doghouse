import React, {createContext, useEffect, useState} from 'react'
import './Dashboard.css'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Sidebar from '../sidebar/Sidebar'

dayjs.extend(relativeTime)

const IsLoadingContext = createContext(null)

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoading, setInitialLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('campaigns')
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
            onLogoClick={async () => {setCurrentPage('campaigns')}}
            onProfileClicked={() => setCurrentPage('Profile')}
            onFeedClicked={() => setCurrentPage('Feed')}
            onExploreClicked={() => setCurrentPage('Explore')}
            onPolesClicked={() => setCurrentPage('Poles')}
            onDogedexClicked={() => setCurrentPage('Dogedex')}
            onAdminClicked={() => setCurrentPage('Admin')}
          ></Sidebar>
        )}
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
