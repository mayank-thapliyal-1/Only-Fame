import React, { useEffect, useState } from "react";
import Refer from "./Refer.jsx";
import Login from "./Login.jsx";
import {  useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate()
  const [size, setSize] = useState(5);
  const [visible,setVisible]= useState(false);
  const [login,setLogin] = useState(false);
  const [signIn,setSignIn] = useState(false);
  const [photoUrl,setPhotoUrl]=useState('');
  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      if (user?.uid) {
        setSignIn(true);
        setPhotoUrl(user.photoUrl);
      }
    }
  }, []);
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
          {/* <div
            style={{
              height: `${size}px`,
              width: `${size}px`,
              border: " 1px solid red",
            }}
            className={`  rounded-full flex justify-center items-center fixed mr-[9rem]  `}
          >
            <div className="h-[4px] w-[4px] bg-red-600 rounded-full "></div>
          </div>{" "} */}
          <div className=" relative left-4.5 h-3 w-3 border-1  border-red-500 animate-ping-slow  rounded-full "> </div>
            <div className="bg-red-500  right-1 rounded-full h-2 w-2 relative"></div>
         
          Live campaigns !
        </span>
        <div className=" flex gap-4 items-center">
        <span className=" text-center border-2 px-7 py-1 h-fit rounded-4xl border-[#e4e4e5] cursor-pointer font-bold hover:shadow-2xl " onClick={handleref}>
          {" "}
          Refer{" "}
        </span>
        {signIn?<img src={photoUrl} className="h-14 w-14 rounded-full object-cover" onClick={()=>navigate("/profile")} />: <span className="text-[#5811A6] box-border border-[0.5px]  font-semibold hover:border-[2px] hover:border-[#bea1dd] bg-[#F4E8FF]  px-7 py-1 rounded-4xl cursor-pointer" onClick={handlelogin}>
          {" "}
          {}
          Sign Up{" "}
        </span>}
       
        </div>
      
      </div>
      <Refer invisble={visible} onClose={()=>setVisible(false)} />
      <Login invisible={login} onClose={()=>setLogin(false)} />
    </nav>
  );
};

export default Nav;
