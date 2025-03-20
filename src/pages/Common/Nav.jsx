import React, { useEffect, useState } from "react";
import Refer from "./Refer.jsx";
import Login from "./Login.jsx";
import {  useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate()
  const [size, setSize] = useState(5);
  const [visible,setVisible]= useState(false);
  const [login,setLogin] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prev) => (prev == 15 ? 5 : prev + 1));
    }, 150);
    return () => clearInterval(interval);      
  });
  const handleref=()=>{
    setVisible(true);
  }
  const handlelogin=()=>{
    setLogin(true);
  }
  return (
    <nav className=" flex justify-around p-5 pt-10  w-full fixed items-center bg-white z-50">
      <img className="  h-9  " src="src/assets/images/common_img/OnlyFame.png" alt="" onClick={()=>navigate("/")} />
      <div className=" flex gap-16 items-center">
        <span className="cursor-pointer" onClick={()=>navigate("/creater-page")} > 👉🏻 For Creators</span>
        <span className="flex gap-3 justify-center items-center cursor-pointer ">
          <div
            style={{
              height: `${size}px`,
              width: `${size}px`,
              border: " 1px solid red",
            }}
            className={`  rounded-full flex justify-center items-center fixed mr-[9rem]  `}
          >
            <div className="h-[4px] w-[4px] bg-red-600 rounded-full "></div>
          </div>{" "}
          Live campaigns !
        </span>
        <span className="border-2 px-7 py-1 rounded-4xl border-[#e4e4e5] cursor-pointer font-bold hover:shadow-2xl " onClick={handleref}>
          {" "}
          Refer{" "}
        </span>
        <span className="text-[#5811A6] box-border border-[0.5px]  font-semibold hover:border-[2px] hover:border-[#bea1dd] bg-[#F4E8FF]  px-7 py-1 rounded-4xl cursor-pointer" onClick={handlelogin}>
          {" "}
          Login{" "}
        </span>
      </div>
      <Refer invisble={visible} onClose={()=>setVisible(false)} />
      <Login invisible={login} onClose={()=>setLogin(false)} />
    </nav>
  );
};

export default Nav;
