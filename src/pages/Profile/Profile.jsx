import React from "react";
import ProfilePic from "../../assets/images/homepage_images/IsaKhan.svg";
import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";

const Profile = () => {
  return (
    <div className="flex flex-col p-10 flex-2 font-mono  bg-gray-50 w-full">
      {/* profile head  */}
      <div className="flex  gap-10 p-3 pb-6 border-b-1 border-muted ">
        {" "}
        <img
          src={ProfilePic}
          className="h-36 w-36 object-cover border-2 rounded-full border-slate-200"
          alt=""
        />
        <div className="flex flex-col gap-2 p-4 justify-center">
          {" "}
          <h1 className="text-3xl font-bold text-dark">Isa Khan</h1>
          <div className="flex gap-4">
            <p className="flex items-center gap-2 text-lg text-muted font-extralight">
              <IoLocationOutline /> Delhi
            </p>
            <p className="flex items-center gap-2 text-lg text-muted font-extralight">
              <IoCalendarOutline />
              Joined Oct2025
            </p>
          </div>
        </div>
      </div>
      {/* profile body  */}
      <div className=" flex flex-col py-7 gap-10">
        {/* About  */}
        <div className="flex flex-col gap-3">
          <h1 className=" text-xl ">About</h1>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            quis! Quae molestias quo quis fuga voluptatem minima animi natus
            nemo obcaecati alias distinctio laboriosam suscipit nisi consequatur
            assumenda, culpa praesentium!
          </p>
        </div>
        {/* Content Langunage  */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl "> Content Language</h1>
          <div className="flex items-center gap-6">
            {" "}
            <span className="text-base border-1 border-gray-400 rounded-3xl cursor-pointer hover:border-primary hover:text-white hover:bg-primary p-3 px-4 text-gray-800 duration-300">
              Hindi{" "}
            </span>
            <span className="text-base border-1 border-gray-400 rounded-3xl cursor-pointer hover:bord hover:text-white hover:border-primary hover:bg-primary p-3 px-4 text-gray-800">
              English
            </span>
          </div>
        </div>
        {/* catogary */}
        <div className="flex flex-col gap-6">
          <h1 className="text-xl ">Catogory</h1>
          <div className="flex  gap-4">
            <span className="border-1 border-slate-400 text-base text-800 rounded-3xl p-3 px-5 hover:text-white hover:border-primary hover:bg-primary cursor-pointer duration-300">
              Entertainment
            </span>
            <span className="border-1 border-slate-400 text-base text-800 rounded-3xl p-3 px-5 hover:text-white hover:border-primary hover:bg-primary cursor-pointer duration-300">
              Faison
            </span>
            <span className="border-1 border-slate-400 text-base text-800 rounded-3xl p-3 px-5 hover:text-white hover:border-primary hover:bg-primary cursor-pointer duration-300">
              Gym
            </span>
            <span className="border-1 border-slate-400 text-base text-800 rounded-3xl p-3 px-5 hover:text-white hover:border-primary hover:bg-primary cursor-pointer duration-300">
              Dance
            </span>
          </div>
        </div>
        {/* phone number  */}
        <div className="flex gap-3 items-center">
            <h1 className="text-lg ">Phone  </h1> 
            <span className="text-base p-0 font-extralight text-skyblue hover:underline hover:scale-102 cursor-pointer duration-200">9089091545</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
