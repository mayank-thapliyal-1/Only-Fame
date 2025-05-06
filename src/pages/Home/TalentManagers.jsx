import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../assets/images/homepage_images/monkey.svg";
import logo2 from "../../assets/images/homepage_images/social.svg";
import logo3 from "../../assets/images/homepage_images/world.svg";
import logo4 from "../../assets/images/homepage_images/sorted.svg";

const TalentManagers = () => {
    const [speed,setSpeed] = useState(80);
  const ob = [
    {
      img: logo1,
      head: "MonkE",
      link: "www.monke.com",
    },
    {
      img: logo2,
      head: "SocialTAG",
      link: "www.socialtag.in",
    },
    {
      img: logo3,
      head: "WLDD Private Lim...",
      link: "www.wldd.market",
    },
    {
      img: logo4,
      head: "Bartergram",
      link: "www.aakashmakhika.in",
    },
  ];
  return (
    <div className="font-serif py-14 flex items-center flex-col gap-10">
      <div className="px-[16rem]  flex flex-col gap-5">
        <h1 className="text-4xl italic p-0">
          {" "}
          <span className="text-[#A44CFF]">4000+</span> Actors, Sport stars,
          Singers & more. Partner with Vetted-Managers!
        </h1>
        <p className="text-base font-extralight">
          Connect-Instantly with  <span className="font-semibold">EXCLUSIVE</span>  talent managers, across genres,
          niches & regions.
        </p>
      </div>
      <Marquee direction="right" speed={speed}>
        <div className="flex justify-around w-screen transform-content   ">
          {ob.map((items, i) => (
            <div
              key={i}
              className="flex gap-5 items-center border-1 hover:bg-gray-100 cursor-pointer border-gray-300 p-2 rounded-2xl w-72 h-24"
            >
              <img className="h-16" src={items.img} alt="logo" />
              <span className="flex flex-col gap-4 h-16 ">
                <h1 className="font-bold">{items.head}</h1>
                <p>{items.link}</p>
              </span>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee direction="left" speed={80}>
        <div className="flex justify-around w-screen ">
          {ob.map((items, i) => (
            <div
              key={i}
              className="flex gap-5 hover:bg-gray-100 cursor-pointer items-center border-1 border-gray-300 p-2 rounded-2xl w-72 h-24"
            >
              <img className="h-16" src={items.img} alt="logo" />
              <span className="flex flex-col gap-4 h-16 ">
                <h1 className="font-bold">{items.head}</h1>
                <p>{items.link}</p>
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TalentManagers;
