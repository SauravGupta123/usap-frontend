import React from 'react'

function Comp2() {
  return (
    <div className='w-full h-auto  bg-white flex flex-col justify-center items-center space-y-16 px-4 Laptop-lg:px-16 py-16 Laptop-lg:py-10'>
      <p className='font-poppins font-light text-xl text-black text-left Tablet:text-center'>We invest in research and innovation to enrich lives, drive economic growth, and create jobs and high-quality public services across the USAP.</p>
    <p className='text-[#DC222C] font-poppins font-medium text-2xl'> We are transforming tomorrow together.</p>
    <div className='w-full flex flex-col Laptop-lg:flex-row justify-around items-center space-y-8 Laptop-lg:space-y-0'>
        <img className='w-[150px] h-[150px]' src="/ResearchAndInnovationImages/image-1.svg" alt="image1"/>
        <img className='w-[150px] h-[150px]'  src="/ResearchAndInnovationImages/image-2.svg" alt="image2"/>
        <img className='w-[150px] h-[150px]'  src="/ResearchAndInnovationImages/image-3.svg" alt="image3"/>
        <img className='w-[150px] h-[150px]'  src="/ResearchAndInnovationImages/image-4.svg" alt="image4"/>
    </div>
    </div>
  )
}

export default Comp2