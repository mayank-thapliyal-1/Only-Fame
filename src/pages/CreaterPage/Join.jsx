import React from "react";

const Join = () => {
  return (
    <div className=" px-[11rem] py-12 flex flex-col items-center  gap-9">
      <h1 className="text-4xl italic font-serif"> <span className="text-[#B064FF]"> Join</span> OnlyFame today</h1>
      <p className="text-[20px] font-extralight">
        Join OnlyFame for free. Build your profile, connect with brands, and
        start earning instantly.
      </p>
      <button className=" bg-gradient-to-b from-[#8f53cf] to-[#650bc5] p-3 pl-6 rounded-4xl text-white flex gap-2 font-bold items-center h-[4rem] w-[11rem] hover:gap-3 border-[3px]  box-border border-transparent hover:border-[#bea1dd]  transition-all delay-100 duration-300 ">
        Get a Invite <span className="font-extralight text-2xl">→</span>
      </button>
    </div>
  );
};

export default Join;
