import React, { useEffect, useState } from "react";
import logo from "../../assets/images/OnlyFame.png";
const Nav = () => {
  const [size, setSize] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prev) => (prev == 15 ? 5 : prev + 1));
    }, 150);
    return () => clearInterval(interval);
  });

  return (
    <nav className=" flex justify-around p-5 pt-10  w-full fixed items-center bg-white z-50">
      <img className="  h-9  " src={logo} alt="" />
      <div className=" flex gap-16 items-center">
        <span> 👉🏻 For Creators</span>
        <span className="flex gap-3 justify-center items-center  ">
          <div
            style={{
              height: `${size}px`,
              width: `${size}px`,
              border: " 1px solid red",
            }}
            className={`  rounded-full flex justify-center items-center fixed mr-[9rem] `}
          >
            <div className="h-[4px] w-[4px] bg-red-600 rounded-full"></div>
          </div>{" "}
          Live campaigns !
        </span>
        <span className="border-2 px-7 py-1 rounded-4xl border-[#e4e4e5] cursor-pointer font-bold hover:shadow-2xl ">
          {" "}
          Refer{" "}
        </span>
        <span className="text-[#5811A6] box-border border-[0.5px]  font-semibold hover:border-[2px] hover:border-[#bea1dd] bg-[#F4E8FF]  px-7 py-1 rounded-4xl">
          {" "}
          Login{" "}
        </span>
      </div>
    </nav>
  );
};

export default Nav;
