import React, { useState } from 'react'
import Refer from '../Common/Refer';
import Marquee from 'react-fast-marquee';
const Connect = () => {
    const [visible,setVisible]= useState(false);
    const handleref=()=>{
      setVisible(true);
    }
  return (
    <div className='py-[5rem] font-serif items-center flex flex-col gap-9'>
        <h1 className='text-4xl font-extralight px-[18rem] text-center'>Connect with <span className='text-[#A44CFF]'>1,500+</span>  brands & agencies actively looking to collaborate!
        </h1>
        <button
            className=" bg-gradient-to-b from-[#8f53cf] to-[#650bc5] p-2  rounded-4xl text-white flex gap-2 font-bold items-center justify-center h-[4rem] w-[11rem] hover:gap-3 border-[3px]  box-border border-transparent hover:border-[#bea1dd]  transition-all delay-100 duration-300 "
            onClick={handleref}
          >
            Get a Invite
          </button>
          <Refer invisble={visible} onClose={() => setVisible(false)} />
            <Marquee>

            </Marquee>
    </div>
  )
}

export default Connect