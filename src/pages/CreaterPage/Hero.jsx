import React from "react";
import heropic from "/src/assets/images/createpagepic1.jpeg";
const Hero = () => {
  const ob =[
    {
      "logo":"src/assets/images/monk-e-logo.svg",
    },
    {
      "logo":"src/assets/images/adidas_logo.svg",
    },
    {
      "logo":"src/assets/images/disney-hotstar_logo.svg",
    },
    {
      "logo":"src/assets/images/msl_logo.svg",
    },
    {
      "logo":"src/assets/images/nykaa_logo.svg",
    },
    {
      "logo":"src/assets/images/ogilvy_logo.svg",
    },
    {
      "logo":"src/assets/images/oppo_logo.svg",
    },
    {
      "logo":"src/assets/images/samsung_logo.svg",
    },
    {
      "logo":"src/assets/images/sugar_logo.svg",
    },
    {
      "logo":"src/assets/images/swiggy_logo.svg",
    },
    {
      "logo":"src/assets/images/TCS_logo.svg",
    },
  ]
  return (
    <div className=" px-[11rem] pt-[11rem] flex flex-col gap-28 "> 
    <div className=" flex justify-around items-center">
      
      <div className="flex flex-col items-start gap-7 ">
        <div className=" text-[40px] font-serif ">
          One Profile. <span className=" text-[#a44cff]"> 1,300+</span> Brands &{" "}
          <span className=" text-[#a44cff]">800+</span> Agencies. Direct
          Connections.
        </div>
        <p className=" font-extralight text-xl">
          A direct connection network for Creators to get sponsored promotions,
          barter opportunities & more.
        </p>
        <button className=" bg-gradient-to-b from-[#8f53cf] to-[#650bc5] p-2 pl-6 rounded-4xl text-white flex gap-2 font-bold items-center h-[4rem] w-[11rem] hover:gap-3 border-[3px]  box-border border-transparent hover:border-[#bea1dd]  transition-all delay-100 duration-300 ">
          Get a Invite <span className="font-extralight text-2xl">→</span>
        </button>
      </div>
      <img className="h-3/12 w-1/2 object-cover" src={heropic} alt="" />
    </div>
    <marquee behavior="alternative" direction="left" className=""  >
      <div className=" flex  gap-10 animate-marquee">
      {ob.map((items,count)=>(
         <img key={count}
          src={items.logo}
        />
      ))
    }
      </div>
    </marquee>
    </div>
  );
};

export default Hero;
