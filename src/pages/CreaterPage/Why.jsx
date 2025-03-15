import React from 'react'

const Why = () => {
    const data =[
        {
          head:"Connect directly with Top Brands & Agencies",
          para:"HashFame connects you directly with verified marketing teams from brands & agencies.",
          img:"src/assets/images/brandAgencies.svg",
        },
        {
            head:"Stand Out.Expand your Network.",
            para:"Boost your visibility with tools that help you showcase your best work to decision-makers.",
            img:"src/assets/images/expandNetwork.svg",
          },
          {
            head:"Discover the best-fit opportunities",
            para:"Gain access to exclusive campaigns and trending opportunities, matching your niche & prices!",
            img:"src/assets/images/discoverOpportunities.svg",
          },
    ]
  return (
    <div className='px-[10rem] pt-[10rem] flex flex-col justify-center items-center'>
        <h1 className='text-4xl italic font-serif'> Why <span className='text-[#A44CFF]'>Join OnlyFame ?</span></h1>
        <div>
            <div>
                {data.map((items,count)=>
                <div key={count} className='flex justify-around items-center '>
                    <div>
                        <h1>{items.head}</h1>
                        <p>{items.para}</p>
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