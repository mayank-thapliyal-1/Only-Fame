import React from 'react'
// import {BrowseRounter as Router,Routes,Route} from 'react-router-dom'
// import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './Components/Main'
import CreaterPage from './Components/CreaterPage'
import LiveCompain from './Components/LiveCompain';
const App = () => {
  return (
    <Router className=' text-amber-300 ' >
      <Routes>
<Route path="/" element={<Main/>} />
<Route path="/creater-page" element={<CreaterPage/>}/>
<Route path="/live-campaigns" element ={<LiveCompain/>}/>
      </Routes>
      </Router>
  )
}

export default App