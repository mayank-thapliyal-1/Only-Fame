import React from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div>
      <div className="px-[11rem] pt-[11rem] flex justify-between items-start">
        <div>
          <div>
            <h1 className=" text-5xl font-light font-mono">
              <span className="font-bold uppercase">Connect</span> with{" "}
              <span className="font-bold uppercase">influencers</span> in{" "}
              <span className="font-bold font-stretch-ultra-expanded">
                seconds
              </span>{" "}
              not Hours
            </h1>
            <p>
              Where professional-creators, vetted-brands & genuine talent
              managers meet: to build incredible partnerships.
            </p>
          </div>
          <div>
            <button className=" rounded-4xl    font-bold text-center  px-10 py-5 hover:gap-3 border-[2px]  box-border border-[#DBDBDE]   hover:border-[3px] transition-all delay-100 duration-300 ">
              For Creators →
            </button>
            <button className=" bg-gradient-to-b from-[#8f53cf] to-[#650bc5]  rounded-4xl text-white   font-bold text-center  px-10 py-5 hover:gap-3 border-[3px]  box-border border-transparent hover:border-[#bea1dd]  transition-all delay-100 duration-300 ">
              For Brands / Agencies
            </button>
          </div>
        </div>
        <img
          className=" h-[30rem] w-[40rem] object-fill "
          src="src/assets/images/common_img/image1.jpeg"
          alt=""
        />
      </div>
      <Marquee>
        <div className=" flex  gap-5 items-center px-6 py-3 border-[0.5px] rounded-3xl">
          <img src="src/assets/images/homepage_images/IsaKhan.svg" alt="" />
          <div >
            <h1>Isa Khan</h1>
            <div>
              <span>
                <img src="src/assets/images/homepage_images/instagramIcon.svg" alt="" />
                <p>85.8k</p>
                </span><span>
                  <img src="src/assets/images/homepage_images/vedioIcon.svg" alt="" />
                  <p>825.8k</p>
                </span>
            </div>
          </div>
        </div>
    
      </Marquee>
    </div>
  );
};

export default Hero;
