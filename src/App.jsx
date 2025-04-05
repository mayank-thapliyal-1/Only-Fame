import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CreaterPage from "./Components/CreaterPage";
import LiveCompain from "./Components/LiveCompain";
import Profile from "./Components/Profile";
const App = () => {
  return (
    <Router className=" text-amber-300 ">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path = "/profile" element={<Profile/>}/>
        <Route path="/creater-page" element={<CreaterPage />} />
        <Route path="/live-campaigns" element={<LiveCompain />} />
      </Routes>
    </Router>
  );
};

export default App;
