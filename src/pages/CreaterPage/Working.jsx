import React from "react";

const Working = () => {
  const ob = [
    {
      num: "1",
      heading: "Claim Your Profile",
      description:
        "Sign up & create your creator profile in minutes, for free.",
    },
    {
      num: "2",
      heading: "Select Your Categories",
      description: "Choose topics & interests that match your content style.",
    },
    {
      num: "3",
      heading: "Set Your Preferences",
      description: "Collaboration types, payment preferences & availability.",
    },
    {
      num: "4",
      heading: "Claim Your Profile",
      description:
        "Brands directly reach out to you with opportunities that fit.",
    },
  ];
  return (
    <div className="flex px-[11rem] py-20 items-start justify-between">
      <div className="flex flex-col p-7 justify-center items-start gap-14">
        <div className="text-5xl  font-thin  font-serif italic ">
          How Its Works
        </div>
        <div className="flex flex-col gap-10">
          {ob.map((items, count) => (
            <div key={count} className="flex  gap-5">
              <span className=" border-2 border-[#e9d6ff] rounded-full h-14 w-14 flex justify-center items-center p-4 italic">
                {items.num}
              </span>
              <span className="flex flex-col gap-2">
                <h1 className=" text-xl font-semibold">{items.heading}</h1>
                <p className=" text-[15px]">{items.description}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
      <video
        className=" h-[35rem] "
        autoPlay
        muted
        loop
        src="src/assets/images/video.mp4"
      ></video>
    </div>
  );
};

export default Working;
