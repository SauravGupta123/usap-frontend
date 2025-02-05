import React from 'react'

function Comp1() {
  return (
    <div className='w-full h-[60vh] Tablet:h-[50vh] Laptop-lg:h-[calc(100vh-(80px))] bg-dronepage-background bg-cover flex flex-col justify-between items-center  relative py-10'> 
         <div className='bg-[#599121] w-auto h-auto px-4 Tablet:px-16 py-3 Tablet:py-6 font-poppins font-extrabold text-xl Tablet:text-3xl text-[#FFFFFF] rounded-[50px] text-center'>
         Our Drones in Agriculture
         </div>
         <div className='flex flex-row items-center justify-around h-auto w-auto p-3 Tablet:p-6 space-x-2 border-2 border-[#E0D5BE] border-opacity-20  bg-white bg-opacity-20  '>
       <button className='text-[#FFFFFF] font-poppins font-medium text-lg Tablet:text-2xl'>Learn More</button>
        <img className="rotate-90" src="/ResearchAndInnovationImages/Arrow.svg" alt="arrow"/>
       </div>
       <img className="absolute top-4 Tablet:-top-4 -left-2 Tablet:left-[8%] Laptop-lg:left-[23%] h-[100px] w-[100px] Tablet:h-[200px] Tablet:w-[200px]" src="/ResearchPages/DronePageImages/image-1.svg" alt="image-1"/>
        
        </div>
  )
}

export default Comp1