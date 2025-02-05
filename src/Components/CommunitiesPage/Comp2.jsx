import React from 'react';

function Comp2() {
  return (
    <div className='w-full h-auto  bg-[#EEEEEE] flex flex-col items-center justify-center px-4 Laptop-lg:px-[70px] '>
      {/* <div className='w-auto h-[60px] px-6 py-2 bg-[#439835] rounded-[20px] font-inter font-bold text-2xl text-[#FFFFFF] flex items-center justify-center'>
        Our Communities
      </div> */}
      <div className=' text-[#080808] rounded-[20px] flex flex-col w-full h-[6rem] items-start Laptop-lg:items-center justify-center space-y-4 px-4 Laptop-lg:px-0'>
        <p className=' font-poppins font-medium text-xl Laptop-lg:text-4xl'>
          Our Communities
        </p>
      </div>
      <div className='w-full bg-gradient-to-b from-[#6DAD8A] to-[#8BBB67] flex flex-col Tablet:flex-row justify-around items-center  space-y-6 Tablet:space-y-0 p-10'>
        <div className='flex flex-col justify-around items-center space-y-4 w-full Tablet:w-[50%] Laptop-lg:w-[35%] object-cover bg-[#FFFFFF] rounded-3xl p-4'>
          <div className='w-full h-auto p-2 rounded-[20px] font-inter font-bold text-lg text-[#000000] flex items-center justify-center'>
            Iot in Agriculture (SN KIT)
          </div>
          <div className='h-[250px] w-full overflow-hidden rounded-lg'>
            <img
              className='w-full h-full object-cover'
              src='/ResearchAndInnovationImages/image-10.svg'
              alt='image10'
            />
          </div>

          <p className='font-inter font-bold text-lg text-[#000000]'>
            {' '}
            AGRICULTURE KIT
          </p>
          <div className='bg-[#7BBB3B] w-[70%] rounded-[40px] flex flex-row justify-start items-center overflow-hidden'>
            <input
              type='text'
              className='bg-[#FFFFFF] w-[75%] h-[50px] text-[#646464] px-6 font-semibold text-base outline-none'
              placeholder='Enter Email ID'
            />
            <img
              className='px-4 cursor-pointer'
              src='/HomePageImages/Comp5-Images/search-arrow.svg'
              alt='search'
            />
          </div>
        </div>
        <div className='flex flex-col justify-around items-center space-y-4 w-full Tablet:w-[50%] Laptop-lg:w-[35%]  object-cover bg-[#FFFFFF] rounded-3xl p-4'>
          <div className='w-full h-auto p-2  rounded-[20px] font-inter font-bold text-lg text-[#000000] flex items-center justify-center'>
            Robotics and drones in Agriculture
          </div>
          <div className='h-[250px] w-full overflow-hidden rounded-lg'>
            <img
              className='w-full h-full object-cover'
              src='/ResearchAndInnovationImages/image-11.svg'
              alt='image11'
            />
          </div>
          <p className='font-inter font-bold text-lg text-[#000000]'>
            AGRICULTURE DRONE
          </p>
          <div className='bg-[#7BBB3B] w-[70%] rounded-[40px] flex flex-row justify-start items-center overflow-hidden'>
            <input
              type='text'
              className='bg-[#FFFFFF] w-[75%] h-[50px] text-[#646464] px-6 font-semibold text-base outline-none'
              placeholder='Enter Email ID'
            />
            <img
              className='px-4 cursor-pointer'
              src='/HomePageImages/Comp5-Images/search-arrow.svg'
              alt='search'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp2;
