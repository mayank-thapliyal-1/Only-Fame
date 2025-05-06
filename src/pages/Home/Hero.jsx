import React from "react";
import Marquee from "react-fast-marquee";
import IsaKhan from "../../assets/images/homepage_images/IsaKhan.svg"
import DevanshKamboj from "../../assets/images/homepage_images/DevanshKamboj.svg"
import Suprava from "../../assets/images/homepage_images/KumariSuprava.svg"
import Vaisnavi from "../../assets/images/homepage_images/VaishnaviPrakash.svg"
import Kangan from "../../assets/images/homepage_images/kangan.svg"
import Image from "../../assets/images/common_img/image1.jpg"
import Instalogo from "../../assets/images/homepage_images/instagramIcon.svg"
import YTLogo from "../../assets/images/homepage_images/vedioIcon.svg"
const Hero = () => {
  const object = [
    {
      profile: `${IsaKhan}`,
      name: "Isa Khan",
      insta: "825k",
      yt: "825k",
    },
    {
      profile:`${DevanshKamboj}`,
      name: "Devansh Kamboj",
      insta: "128k",
      yt: "128k",
    },
    {
      profile: `${Suprava}`,
      name: "Kumari Suprava",
      insta: "152.8k",
      yt: "152.8k",
    },
    {
      profile:`${Vaisnavi}`,
      name: "Vaishnavi PraKash",
      insta: "152.8k",
      yt: "152.8k",
    },
    {
      profile: `${Kangan}`,
      name: "Kangan",
      insta: "268k",
      yt: "268k",
    },
  ];
  return (
    <div className="flex flex-col gap-20">
      <div className="px-[13rem]  pt-[11rem] flex justify-between items-start">
        <div className=" flex flex-col gap-16"> 
          <div className=" flex flex-col gap-4 pt-6">
            <h1 className=" text-5xl font-light font-mono ">
              <span className="font-bold uppercase">Connect</span> with{" "}
              <span className="font-bold uppercase">influencers</span> in{" "}
              <span className="font-bold font-stretch-ultra-expanded">
                seconds
              </span>{" "}
              not Hours
            </h1>
            <p className=" font-extralight text-gray-400">
              Where professional-creators, vetted-brands & genuine talent
              managers meet: to build incredible partnerships.
            </p>
          </div>
          <div className="flex gap-10">
            <button className=" rounded-4xl    font-bold text-center  px-10 py-5 hover:gap-3 border-[2px]  box-border border-[#DBDBDE]   hover:border-[3px] transition-all delay-100 duration-300 ">
              For Creators →
            </button>
            <button className=" bg-gradient-to-b from-[#8f53cf] to-[#650bc5]  rounded-4xl text-white   font-bold text-center  px-10 py-5 hover:gap-3 border-[3px]  box-border border-transparent hover:border-[#bea1dd]  transition-all delay-100 duration-300 ">
              For Brands / Agencies
            </button>
          </div>
        </div>
        <img
          className=" h-[25rem] w-[30rem] object-fill "
          src={Image}
          alt="hero-page image"
        />
      </div>
      <div>
        <Marquee speed={110} className=" p-2  flex hover:delay-500 ">
          {object.map((items, i) => (
            <div
              key={i}
              className=" flex  gap-5 items-center px-6 py-3 rounded-3xl shadow-md cursor-pointer hover:bg-gray-200 border-1 border-[#ECEDF1] mx-4"
            >
              <img src={items.profile} className="h-14" alt="profile pic" />
              <div className=" flex flex-col gap-2 ">
                <h1> {items.name} </h1>
                <div className=" flex gap-3  ">
                  <span className="flex border-r-2 pr-3 border-gray-400 gap-2">
                    <img
                      src={Instalogo}
                      alt=" insta logo"
                    />
                    <p>{items.insta}</p>
                  </span>
                  <span className="flex gap-2">
                    <img
                      src={YTLogo}
                      alt="yt logo"
                    />
                    <p>{items.yt}</p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee  direction="right" className=" p-2  hover:duration-1000 flex ">
          {object.map((items, i) => (
            <div
              key={i}
              className=" flex  gap-5 items-center hover:delay-500 cursor-pointer hover:bg-gray-200 px-6 py-3 rounded-3xl shadow-md border-1 border-[#ECEDF1] mx-4"
            >
              <img src={items.profile} className="h-14" alt="profile pic" />
              <div className=" flex flex-col gap-2 ">
                <h1> {items.name} </h1>
                <div className=" flex gap-3  ">
                  <span className="flex border-r-2 pr-3 border-gray-400 gap-2">
                    <img
                      src={Instalogo}
                      alt=" insta logo"
                    />
                    <p>{items.insta}</p>
                  </span>
                  <span className="flex gap-2">
                    <img
                      src={YTLogo}
                      alt="yt logo"
                    />
                    <p>{items.yt}</p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
