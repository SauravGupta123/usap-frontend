import React from 'react'

function Comp4() {
  return (
    <div className='w-full h-auto bg-[#EEEEEE] py-10 Laptop-lg:py-6 px-4 Laptop-lg:px-8 flex flex-col Laptop-lg:flex-row Laptop-lg:space-x-12 space-y-4 Laptop-lg:space-y-0 '>
      <div className='w-full  h-full flex flex-col justify-center items-center space-y-8 '>
        <div className='bg-gradient-to-b from-[#CDF03E] to-[#DAF46F] h-[60px] w-full Tablet:w-auto p-4 rounded-3xl flex items-center justify-center'>
          <p className='text-[#1B2D37] font-poppins font-medium text-xl'>JOURNAL AND PUBLICATIONS </p>
        </div>
        <div className='w-full flex flex-col Tablet:flex-row justify-around items-center  space-y-4 Tablet:space-y-0'>
          <div className='w-full Tablet:w-[280px] h-[250px] flex flex-col items-center justify-center space-y-4 bg-[#FFFFFF] rounded-[10px]'>
            <img src="/ResearchAndInnovationImages/image-15.svg" alt="image15" />
            <p className='font-poppins font-medium text-base text-[#000000] text-center px-3'>Agriculture and agricultural activities</p>
          </div>
          <div className='w-full Tablet:w-[280px] h-[250px] flex flex-col items-center justify-center space-y-4 bg-[#FFFFFF] rounded-[10px]'>
            <img src="/ResearchAndInnovationImages/image-16.svg" alt="image16" />
            <p className='font-poppins font-medium text-base text-[#000000] text-center px-3'>Precision Agriculture robotics </p>
          </div>
          <div className='w-full Tablet:w-[280px] h-[250px] flex flex-col items-center justify-center space-y-4 bg-[#FFFFFF] rounded-[10px]'>
            <img className="w-[160px]" src="/ResearchAndInnovationImages/image-17.svg" alt="image17" />
            <p className='font-poppins font-medium text-base text-[#000000] text-center px-3'>Agrosense: IOT solutions for agriculture </p>
          </div>
          <div className='w-full Tablet:w-[280px] h-[250px] flex flex-col items-center justify-center space-y-4 bg-[#FFFFFF] rounded-[10px]'>
            <img className="w-[200px]" src="/ResearchAndInnovationImages/drone.svg" alt="drone" />
            <p className='font-poppins font-medium text-base text-[#000000] text-center px-3'>Drones for agriculture </p>
          </div>
        </div>
        <div className='bg-gradient-to-b from-[#CDF03E] to-[#DAF46F] h-[60px] w-full Tablet:w-auto px-6 py-4 rounded-3xl flex items-center justify-center'>
          <p className='text-[#1B2D37] font-poppins font-medium text-xl'>NEWS AND BLOGS</p>
        </div>
        <div className='w-full flex flex-col Tablet:flex-row justify-around items-center  space-y-4 Tablet:space-y-0'>
          <div className='w-full Tablet:w-[280px] h-[300px] flex flex-col space-y-3 bg-[#FFFFFF] rounded-[10px] overflow-hidden'>
            <img className='h-[60%] object-cover' src="/ResearchAndInnovationImages/image-18.svg" alt="image18" />
            <p className='font-poppins font-medium text-base text-[#000000] text-center px-3'>Higher Educational institutes create ‘Agri-Consortium’</p>
          </div>
          <div className='w-full Tablet:w-[280px] h-[300px] flex flex-col space-y-3  bg-[#FFFFFF] rounded-[10px] overflow-hidden'>
            <img className='h-[60%] object-cover' src="/ResearchAndInnovationImages/image-19.svg" alt="image19" />
            <p className='font-poppins font-medium text-base text-[#000000] text-center px-3'>UNDP and NABARD sign MoU to co-create data-driven innovations in agriculture </p>
          </div>
          <div className='w-full Tablet:w-[280px] h-[300px] flex flex-col space-y-3 bg-[#FFFFFF] rounded-[10px] overflow-hidden'>
            <img className='h-[60%] object-cover' src="/ResearchAndInnovationImages/image-20.svg" alt="image20" />
            <p className='font-poppins font-medium text-base text-[#000000] text-center px-3'>Sustainable farming by investing in Digital Farming and using Digital Land and Technology </p>
          </div>
          <div className='w-full Tablet:w-[280px] h-[300px] flex flex-col space-y-3 bg-[#FFFFFF] rounded-[10px] overflow-hidden'>
            <img className='h-[60%] object-cover' src="/ResearchAndInnovationImages/cropmonitor.jpg" alt="crop-monitor" />
            <p className='font-poppins font-medium text-base text-[#000000] text-center px-3'>Live crop monitoring using digital technology </p>
          </div>
        </div>
      </div>
      {/* <div className=' w-full Laptop-lg:w-[30%] h-full'>
        <div className='bg-[#E9FCC0] rounded-[32px] w-full h-[50%] p-6 font-inter font-normal text-base flex flex-col space-y-8'>
          <div className='flex flex-col justify-start items-start space-y-4 bg-[#FFFFFF] p-6'>
            <p>Subscribe to ISA-F emails</p>
            <p>Sign up for news, views, events and funding alerts.</p>
          </div>
          <div className='font-inter font-normal text-base bg-[#FFFFFF] p-6'>
            <p>Enter email address</p>
          </div>
          <button className='bg-[#31B052] w-[40%] h-[40px] flex items-center justify-center px-4 py-2  text-[#FFFFFF]'>Subscribe</button>
        </div>
        <div className='w-full h-[50%] flex pt-10 Tablet:pt-40 items-center justify-center'>
          <p className='font-inter font-bold text-xl text-[#FFFFFF]'>{`VIEW ALL NEWS >`}</p>
        </div>
      </div> */}
    </div>

  )
}

export default Comp4