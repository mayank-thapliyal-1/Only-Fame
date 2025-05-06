import React from "react";
const Refer = ({ invisble, onClose }) => {
  if (!invisble) return null;
  const handleClose = (e) => {
    if (e.target.id == "wrapper") onClose();
  };
  return (
    <div
      className=" fixed inset-0 z-50 bg-opacity-50  backdrop-blur-sm  flex justify-center items-center "
      onClick={handleClose}
      id="wrapper"
    >
      <div className=" border-1 border-gray-300  bg-white h-[40rem] w-[50rem] flex items-center justify-between px-14 gap-20  rounded-4xl  ">
        <button
          className=" font-sans absolute place-self-start right-[21rem] top-[6rem] p-2 px-4 hover:scale-110 text-2xl rounded-full hover:border-1 hover:border-slate-200  "
          onClick={onClose}
        >
          X
        </button>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            className=" h-[25rem] w-[30rem] p-0 object-contain"
            src="src/assets/images/common_img/get-app-link.png"
            alt=""
          />
          <img
            className="h-12 w-40 object-contain"
            src="src/assets/images/common_img/OnlyFame.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-7 items-start">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-serif italic">
              Invite Your Friends to{" "}
              <span className="text-[#a44cff]"> OnlyFame!</span>{" "}
            </h1>
            <p className="font-extralight  text-xl">
              "Invite influencers & brands to OnlyFame and grow your network!"
            </p>
          </div>
          <form action="" className="flex flex-col gap-6 items-start p-0 ">
            <input
              type="email"
              required
              className=" bg-gray-300 p-4 rounded-3xl w-[20rem]"
              placeholder="Email"
            />
            <input
              type="text"
              required
              className=" bg-gray-300 p-4 rounded-3xl w-[20rem]"
              placeholder="Name"
            />
            <button className=" bg-gradient-to-b from-[#8f53cf] to-[#650bc5]  rounded-4xl text-white text-center text-xl font-extralight h-[3rem] w-[9rem] hover:gap-3 border-[3px]  box-border border-transparent hover:border-[#bea1dd]  transition-all delay-100 duration-300 ">
              {" "}
              Refer{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Refer;
