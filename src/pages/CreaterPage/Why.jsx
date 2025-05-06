import React from 'react'
import Image1 from "../../assets/images/createrpage_Images/brandAgencies.svg";
import Image2 from "../../assets/images/createrpage_Images/expandNetwork.svg";
import Image3 from "../../assets/images/createrpage_Images/discoverOpportunities.svg";
const Why = () => {
    const data =[
        {
          head:"Connect directly with Top Brands & Agencies",
          para:"OnlyFame connects you directly with verified marketing teams from brands & agencies.",
          img:`${Image1}`,
        },
        {
            head:"Stand Out.Expand your Network.",
            para:"Boost your visibility with tools that help you showcase your best work to decision-makers.",
            img:`${Image2}`,
          },
          {
            head:"Discover the best-fit opportunities",
            para:"Gain access to exclusive campaigns and trending opportunities, matching your niche & prices!",
            img:`${Image3}`,
          },
    ]
  return (
    <div className='px-[10rem] pt-[10rem] flex flex-col gap-10 justify-center items-center mt-14  '>
       <h1 className='text-4xl italic font-serif sticky top-[10rem]  '> Why <span className='text-[#A44CFF]  '>Join OnlyFame ?</span></h1>
        <div>
            <div className=' flex flex-col gap-5 z-0'>
                {data.map((items,count)=>
                <div key={count} className={`flex ${count==0?'bg-[#FBF6F4] z-10 sticky top-[15rem] ':count===1?'bg-[#F1F9F8] z-20 sticky top-[15rem] ':"bg-[#EFEFF9] z-30 stick top-0"} }  items-center justify-between w-3xl  p-10 rounded-3xl `}>
                    <div className='flex flex-col gap-10  '>
                        <h1 className='text-3xl  font-serif italic'>{items.head}</h1>
                        <p className=' font-light' >{items.para}</p>
                    </div>
                    <img src={items.img} alt="" />
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Why