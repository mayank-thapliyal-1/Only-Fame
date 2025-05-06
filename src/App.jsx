import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CreaterPage from "./Components/CreaterPage";
import LiveCompain from "./Components/LiveCompain";
import ProfileSection from "./Components/ProfileSection";
import ProfileData from "./pages/Profile/Profiledata";
const App = () => {
  return (
    <Router className=" text-amber-300 ">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile-data" element ={<ProfileData/>}/>
        <Route path = "/profile" element={<ProfileSection/>}/>
        <Route path="/creater-page" element={<CreaterPage />} />
        <Route path="/live-campaigns" element={<LiveCompain />} />
      </Routes>
    </Router>
  );
};

export default App;
