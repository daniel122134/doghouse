import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'
import Dashboard from './Dashboard/Dashboard.jsx'
import React from "react";

import Home from "./Home/Home.jsx";
import FeedPage from "./FeedPage/FeedPage.jsx";
import LogInPage from "./LogInPage/LogInPage.jsx";
import SignUpPage from "./SignUpPage/SignUpPage.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route
          path="/app"
          Component={Dashboard}
        />
          <Route
              path="/feed"
              Component={FeedPage}
          />
          <Route
              path="/login"
              Component={LogInPage}
          />
          <Route
              path="/signup"
              Component={SignUpPage}
          />
      </Routes>
    </BrowserRouter>
  )
}


export default App

