import React, { useEffect, useState } from "react";
import logo from "../../assets/images/common_img/logo.png";
import { MdDelete } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setPos, Pos }) => {
    const navigate = useNavigate()
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("data"));
    if (d) {
      setPos(d.pos);
      if (d.pos != 1) setVisible(true);
    } else return;
  }, []);
  const ChangeState = (e) => {
    const value = {
      pos: e,
      change: true,
    };
    localStorage.setItem("data", JSON.stringify(value));
  };

  const changevisible = () => {
    setVisible((perv) => !perv);
  };
  const changeSection = (e) => {
    setPos(e);
    ChangeState(e);
  };
  return (
    <div className="flex  flex-col bg-[#540EA0] text-white/80 justify-between">
      <div className="flex flex-col gap-4">
        <div className="   flex p-6 pb-9 pr-10 border-b-1 border-slate-300 items-center font-bold text-white text-2xl font-serif  ">
          {" "}
          <img className=" h-16 w-16" src={logo} alt="logo" /> OnlyFame
        </div>
        <div className="flex flex-col gap-5  text-lg  font-extralight uppercase">
          <span
            className={`cursor-pointer hover:bg-effect p-3 ${
              Pos == 1 ? "bg-effect" : ""
            }`}
            onClick={() => changeSection(1)}
          >
            {" "}
            Profile{" "}
          </span>
          <span className=" flex justify-between items-center hover:bg-effect px-3 ">
            edit Profile{" "}
            {visible ? (
              <FaChevronUp
                className="h-14 cursor-pointer"
                onClick={changevisible}
              />
            ) : (
              <FaAngleDown
                className="h-14 cursor-pointer"
                onClick={changevisible}
              />
            )}
          </span>
          <div
            className={`${
              visible ? "block" : "hidden"
            } flex flex-col gap-5  text-lg  font-extralight uppercase`}
          >
            <span
              className={`cursor-pointer hover:bg-effect p-3 ${
                Pos == 2 ? "bg-effect" : ""
              }`}
              onClick={() => changeSection(2)}
            >
              Personal Info
            </span>
            <span
              className={`cursor-pointer hover:bg-effect p-3 ${
                Pos == 3 ? "bg-effect" : ""
              }`}
              onClick={() => changeSection(3)}
            >
              catogary
            </span>
          </div>
          <div className=" cursor-pointer hover:bg-effect p-3 " onClick={()=>navigate("/")}>
                Go Home
            </div>
        </div>
      </div>
      <div className="flex flex-col p-8 gap-5 text-lg uppercase font-extralight">
        <span className=" hover:scale-105 duration-300 flex items-center gap-2 cursor-pointer">
          {" "}
          <VscSignOut /> sign Out
        </span>
        <span className=" hover:scale-105 duration-300 flex items-center gap-2 cursor-pointer">
          {" "}
          <MdDelete /> Delete{" "}
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
