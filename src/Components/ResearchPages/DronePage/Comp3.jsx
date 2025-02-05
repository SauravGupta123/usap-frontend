import React from 'react'

function Comp3() {
  return (
    <div className='w-full h-auto bg-[#EEEEEE] pt-16 px-4 Tablet:px-16 flex flex-col items-center  space-y-6'>
      <div className='w-full flex flex-col Tablet:flex-row justify-between items-center space-y-6 Tablet:space-y-0 Tablet:space-x-20 Laptop-lg:space-x-44'>
        <img className="w-full Tablet:w-[40%] h-[250px] " src="/ResearchPages/DronePageImages/image-8.svg" alt="image-8" />
        <div className='w-full Tablet:w-[50%] flex flex-col justify-center items-start space-y-6 font-inter font-semibold text-lg'>
          <p className='text-[#77C925]'>INTRODUCTION TO DRONES FOR FARMING</p>
          <p className='text-[#000000] font-medium text-base'>Revolutionize Your Farming Operations with Soil Sense's Robots & Drones Service. Experience Unmatched Precision, Efficiency, and Cost-Savings with Our Cutting-Edge Technology. Let Our Agro-Tech Solutions Take Your Farming to New Heights.</p>
        </div>
      </div>
      <div className='w-full flex flex-col Tablet:flex-row justify-between items-center space-y-6 Tablet:space-y-0 '>
      <img className="w-full Tablet:w-[50%] h-[250px] Tablet:hidden" src="/ResearchPages/DronePageImages/image-9.svg" alt="image-9" />
        <div className='w-full Tablet:w-[50%] flex flex-col justify-center items-start space-y-6 font-inter font-semibold text-lg'>
          <p>Remote Farming</p>
          <p className='text-[#77C925]'>A NEW TECHNOLOGY UNDERWAY</p>
          <p className='text-[#000000] font-medium text-base'>
            Take Control of Your Farm from Anywhere with Soil Sense Remote Farming Service. Get Real-Time Insights and Manage Your Operations with Ease, All in One Place.</p>
        </div>
        <img className="w-[50%] h-[300px] hidden Tablet:flex" src="/ResearchPages/DronePageImages/image-9.svg" alt="image-9" />
      </div>
      <div className='w-full flex flex-col Tablet:flex-row justify-between items-center space-y-6 Tablet:space-y-0'>
        <img className="w-full Tablet:w-[30%] h-[200px] Tablet:h-[250px]" src="/ResearchPages/DronePageImages/image-1.svg" alt="image-1" />
        <div className='w-full Tablet:w-[50%] flex flex-col justify-center items-start space-y-6 font-inter font-semibold text-lg'>
          <p className='text-[#77C925]'>DRONE IMAGERY SOLUTIONS</p>
          <p className='text-[#000000] font-medium text-base'>Transform Your Farming with Soil Sense's Next-Generation Drone Mapping Service. Experience the Power of AI and Machine Learning for Unmatched Precision and Efficiency. Get Ahead of the Game and Stay Ahead with Our Innovative Agro-Tech.</p>
        </div>
      </div>
    </div>
  )
}

export default Comp3