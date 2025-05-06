import React, { useState } from "react";
import Refer from "../Common/Refer";
import Marquee from "react-fast-marquee";
import logo1 from "../../assets/images/brands-logos/monk-e-logo.svg";
import logo2 from "../../assets/images/brands-logos/adidas_logo.svg";
import logo3 from "../../assets/images/brands-logos/disney-hotstar_logo.svg";
import logo4 from "../../assets/images/brands-logos/msl_logo.svg";
import logo5 from "../../assets/images/brands-logos/nykaa_logo.svg";
import logo6 from "../../assets/images/brands-logos/ogilvy_logo.svg";
import logo7 from "../../assets/images/brands-logos/oppo_logo.svg";
import logo8 from "../../assets/images/brands-logos/samsung_logo.svg";
import logo9 from "../../assets/images/brands-logos/sugar_logo.svg";
import logo10 from "../../assets/images/brands-logos/swiggy_logo.svg";
import logo11 from "../../assets/images/brands-logos/TCS_logo.svg";
import image1 from "../../assets/images/createrpage_Images/createpagepic1.jpeg"
const Hero = () => {
  const ob = [
    {
      logo: `${logo1}`,
    },
    {
      logo: `${logo2}`,
    },
    {
      logo: `${logo3}`,
    },
    {
      logo: `${logo4}`,
    },
    {
      logo: `${logo5}`,
    },
    {
      logo: `${logo6}`,
    },
    {
      logo: `${logo7}`,
    },
    {
      logo: `${logo8}`,
    },
    {
      logo: `${logo9}`,
    },
    {
      logo: `${logo10}`,
    },
    {
      logo: `${logo11}`,
    },
  ];
  const [visible, setVisible] = useState(false);
  const handleref = () => {
    setVisible(true);
  };
  return (
    <div className=" flex flex-col gap-28 ">
      <div className=" flex justify-around items-center px-[11rem] pt-[11rem] ">
        <div className="flex flex-col items-start gap-7 ">
          <div className=" text-[40px] font-serif ">
            One Profile. <span className=" text-[#a44cff]"> 1,300+</span> Brands
            & <span className=" text-[#a44cff]">800+</span> Agencies. Direct
            Connections.
          </div>
          <p className=" font-extralight text-xl">
            A direct connection network for Creators to get sponsored
            promotions, barter opportunities & more.
          </p>
          <button
            className=" bg-gradient-to-b from-[#8f53cf] to-[#650bc5] p-2 pl-6 rounded-4xl text-white flex gap-2 font-bold items-center h-[4rem] w-[11rem] hover:gap-3 border-[3px]  box-border border-transparent hover:border-[#bea1dd]  transition-all delay-100 duration-300 "
            onClick={handleref}
          >
            Get a Invite <span className="font-extralight text-2xl">→</span>
          </button>
        </div>
        <img
          className="h-3/12 w-1/2 object-cover"
          src={image1}
          alt=""
        />
      </div>

      <Marquee direction="left" gradient={true}>
        <div className=" flex  gap-10 animate-marquee px-5  ">
          {ob.map((items, count) => (
            <img key={count} src={items.logo} />
          ))}
        </div>
      </Marquee>
      <Refer invisble={visible} onClose={() => setVisible(false)} />
    </div>
  );
};

export default Hero;
