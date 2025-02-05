import React from 'react'

function Comp1() {
  return (
    <div className='w-full  h-auto Tablet:h-[60vh] Laptop-lg:h-auto bg-[#EEEEEE] relative flex flex-col items-center justify-start space-y-12 Tablet:space-y-24 px-4 Tablet:px-0 py-10'>
      <div className='bg-[#599121] w-auto h-auto px-20 Tablet:px-40 py-4 font-poppins font-extrabold text-lg Tablet:text-3xl text-[#FFFFFF] rounded-[50px] text-center z-10 Tablet:z-0'>
        Funding
      </div>
      <p className='font-inter font-bold text-lg '>Empowering Tomorrow's Innovations: Fueling Research Through Funding</p>
      <div className='w-full Tablet:w-auto h-auto bg-[#FFFFFF] rounded-[30px] shadow-innershadow z-10 flex flex-row justify-between items-center p-8 space-y-4 Tablet:space-y-0 Tablet:space-x-12'>
        <div className='flex flex-col items-center space-y-4 font-inter font-medium text-base'>
          <img className="h-[60px] w-[60px]" src="/ResearchPages/FundingPageImages/image2.svg" alt="image2" />
          <div className='flex flex-col items-center justify-center'>
            <p>100+</p>
            <p>Members</p>
          </div>
        </div>
        <div className='w-[1px] h-full bg-[#B2A3A3]'></div>
        <div className='flex flex-col items-center space-y-4 font-inter font-medium text-base'>
          <img className="h-[60px] w-[60px]" src="/ResearchPages/FundingPageImages/image3.svg" alt="image3" />
          <div className='flex flex-col items-center justify-center'>
            <p>10+</p>
            <p>States</p>
          </div>
        </div>
        <div className='w-[1px] h-full bg-[#B2A3A3]'></div>
        <div className='flex flex-col items-center space-y-4 font-inter font-medium text-base'>
          <img className="h-[60px] w-[60px]" src="/ResearchPages/FundingPageImages/image4.svg" alt="image4" />
          <div className='flex flex-col items-center justify-center'>
            <p>5+</p>
            <p>Events</p>
          </div>
        </div>
      </div>
      <div className='w-auto h-auto p-4 rounded-full bg-[#C5F9A6] border-[1px] border-black absolute -top-3 Tablet:-top-16 left-0 Tablet:left-[20%] Laptop-lg:left-[30%]  '>
        <img className="h-[40px] w-[40px] Tablet:h-[60px] Tablet:w-[60px]" src="/ResearchPages/FundingPageImages/image1.svg" alt="image1" />
      </div>
      <div className='w-auto h-auto p-4 rounded-full bg-[#C5F9A6] border-[1px] border-black absolute top-10 Tablet:-top-16 left-4 hidden Tablet:flex'>
        <img className="h-[80px] w-[80px]" src="/ResearchPages/FundingPageImages/image5.svg" alt="image5" />
      </div>
      <div className='w-auto h-auto p-3 rounded-full bg-[#C5F9A6] border-[1px] border-black absolute top-0 right-[13%] z-10'>
        <img className="h-[30px] w-[30px]" src="/ResearchPages/FundingPageImages/image6.svg" alt="image6" />
      </div>
      <div className='w-auto h-auto p-2 rounded-full bg-[#C5F9A6] border-[1px] border-black absolute top-[100px] Laptop-lg:top-20 left-[4%] Laptop-lg:left-[22%] hidden Tablet:flex'>
        <img className="h-[40px] w-[40px]" src="/ResearchPages/FundingPageImages/image7.svg" alt="image7" />
      </div>
      <div className='w-auto h-auto p-6 rounded-full bg-[#C5F9A6] border-[1px] border-black absolute top-36 left-[80%] Laptop-lg:left-[68%] hidden Tablet:flex'>
        <img className="h-[100px] w-[100px]" src="/ResearchPages/FundingPageImages/image8.svg" alt="image8" />
      </div>
      <div className=' absolute top-[400px] Tablet:top-[300px] Laptop-lg:top-60 left-[80%] hidden Tablet:flex '>
        <img className="h-[150px] w-[150px]" src="/ResearchPages/FundingPageImages/image9.svg" alt="image9" />
      </div>
      <div className='h-[150px] w-[150px] Laptop-lg:h-[220px] Laptop-lg:w-[220px] absolute top-60 Laptop-lg:top-60 left-0  Laptop-lg:left-[12%] hidden Tablet:flex'>
        <img className="" src="/ResearchPages/FundingPageImages/image10.svg" alt="image10" />
      </div>
      {/* <div className=' absolute bottom-0 left-0 overflow-hidden'>
        <img className='h-[150px] w-[150px] Tablet:h-auto Tablet:w-auto' src="/ResearchPages/FundingPageImages/image11.svg" alt="image11" />
      </div> */}
      <div className=' absolute -top-24 -right-[30%] Tablet:right-0 h-[220px] w-[220px]'>
        <img className='h-[100px] w-[100px] Tablet:h-auto Tablet:w-auto' src="/ResearchPages/FundingPageImages/image12.svg" alt="image12" />
      </div>
    </div>
  )
}

export default Comp1