import React from "react";
import logo from "../../assets/images/common_img/OnlyFame.png";
import img from "../../assets/images/common_img/profile.png";
import reviewpic from "../../assets/images/common_img/review.png";
import img2 from "../../assets/images/homepage_images/homeimg2.png";
const Section1 = () => {
  return (
    <div className="flex flex-col gap-20 px-[13rem] pt-[10rem] p-20 font-serif italic">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-center italic ">
          {" "}
          <span className="text-[#A44CFF]  "> Everything Influencers </span> -
          in One Place{" "}
        </h1>
        <p className="text-center">
          {" "}
          Hire or Review Influencers, at the World's 1st Open-Network!
        </p>
      </div>
      <div className=" flex flex-col gap-5">
        <div className="flex gap-5 ">
          <div className="flex flex-1 h-full gap-10 pb-12  flex-col bg-[#F6EFF9] p-6 rounded-2xl border-1 border-gray-300">
            <img className="h-16 w-48 " src={logo} alt="" />
            <span className="flex flex-col gap-2">
              <p>Open for</p>
              <h1 className="font-extralight text-3xl">Brands and Agencies</h1>
            </span>
          </div>
          <div className="flex flex-3 overflow-hidden gap-3 rounded-2xl bg-[#F3F9F8] p-4 border-1 border-gray-200">
            <span className="flex flex-col gap-3 pt-6 ">
              <h1 className="text-4xl font-extralight">
                Hire Professional Influencers, Agencies, Freelancers in 2 clicks
              </h1>
              <p className="h-full pt-5">
                Looking for a Talent Agency? A Freelancer? A Videographer? Hire
                vetted partners for your project or campaign effortlessly.
              </p>
            </span>
            <img className="h-56 p-5 mt-5" src={img} alt="" />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-2 gap-4 border-1 p-6 bg-[#F0F0F9] border-gray-300 rounded-2xl">
            <span className="flex flex-col gap-6 h-fit pt-5">
              <h1 className="text-5xl font-extralight">
                70,000+ Verified Influencers & Celebs
              </h1>
              <p className="font-extralight text-xl">
                Connect with curated & hand-picked top influencers. Directly
                available to connect: on call or WhatsApp.
              </p>
            </span>
            <img className="h-80 w-72" src={img2} alt="" />
          </div>
          <div className="flex flex-1 flex-col bg-[#F9F3F2] border-1 border-gray-300 rounded-2xl p-5 gap-5 items-center">
            <span className="flex flex-1 flex-col gap-3">
              <h1 className="text-3xl font-extralight">Rate and Review</h1>
              <p>& share your working experience with Influencers.</p>
            </span>
            <img className="h-64 w-64" src={reviewpic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
