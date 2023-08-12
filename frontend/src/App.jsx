import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./sidebar/Sidebar.jsx";

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('profile')

  return (
    <div>
      <Sidebar
        currentPage={currentPage}
        
        onLogoClick={async () => {
          setCurrentPage('profile')
        }}
        onPricingClicked={() => setCurrentPage('pricing')}
        onContactsClicked={() => setCurrentPage('contacts')}
      ></Sidebar>
      

    </div>
  )
}

export default App
