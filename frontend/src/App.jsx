import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'
import Dashboard from './Dashboard/Dashboard.jsx'
import React from "react";

import Home from "./Home/Home.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route
          path="/app"
          Component={PingoApp}
        />
      </Routes>
    </BrowserRouter>
  )
}


function PingoApp() {

  return (
    <Dashboard/>
  )

}

export default App

