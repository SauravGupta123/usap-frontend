import React from 'react';

function Comp3() {
  return (
    <div className='w-full h-auto  bg-[#EEEEEE] flex flex-col items-center justify-center px-4 Laptop-lg:px-[70px] '>
      {/* <div className='w-auto h-[60px] px-6 py-2 bg-[#439835] rounded-[20px] font-inter font-bold text-2xl text-[#FFFFFF] flex items-center justify-center'>
        BENEFITS
      </div> */}
      <div className=' text-[#080808] rounded-[20px] flex flex-col w-full h-[7rem] items-start Laptop-lg:items-center justify-center space-y-4 px-4 Laptop-lg:px-0'>
        <p className='font-poppins font-medium text-xl Laptop-lg:text-4xl '>
          BENEFITS
        </p>
      </div>
      <div className='w-full bg-gradient-to-b from-[#6DAD8A] to-[#8BBB67] flex flex-col Tablet:flex-row justify-around items-center p-10 space-y-6 Tablet:space-y-0'>
        <div className='flex flex-col justify-around items-center space-y-2 w-full Laptop-lg:w-[40%] object-cover bg-[#FFFFFF] rounded-3xl p-6'>
          <div className=' flex items-center justify-center'>
            <p className='w-auto h-auto px-4 py-2 bg-[#7BBB3B] rounded-[20px] font-poppins font-bold text-lg text-[#FAF6F6]'>
              Benefits of IOT KIT
            </p>
            <img
              className='w-[150px] h-[150px]'
              src='/CommunitiesPageImages/Image2.svg'
              alt='image2'
            />
          </div>
          <div className='h-[350px] w-full overflow-hidden rounded-[32px] bg-gradient-to-r from-[#00B09B] to-[#96C93D] p-6'>
            <div className='flex flex-row justify-between '>
              <img
                className='w-[160px] h-[160px]'
                src='/CommunitiesPageImages/Image4.svg'
                alt='image4'
              />
              <img
                className='w-[160px] h-[160px]'
                src='/CommunitiesPageImages/Image5.svg'
                alt='image5'
              />
            </div>
            <div className='flex flex-row justify-center items-center '>
              <img
                className='w-[160px] h-[160px]'
                src='/CommunitiesPageImages/Image6.svg'
                alt='image6'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-around items-center space-y-3 w-full Laptop-lg:w-[40%] object-cover bg-[#FFFFFF] rounded-3xl p-6'>
          <div className=' flex items-center justify-center'>
            <p className='w-auto h-auto px-4 py-2 bg-[#7BBB3B] rounded-[20px] font-poppins font-bold text-lg text-[#FAF6F6]'>
              Benefits of Drones
            </p>
            <img
              className='w-[150px] h-[150px]'
              src='/CommunitiesPageImages/Image3.svg'
              alt='image3'
            />
          </div>
          <div className='h-[350px] w-full overflow-hidden rounded-[32px] bg-gradient-to-r from-[#00B09B] to-[#96C93D] p-6'>
            <div className='flex flex-row justify-between '>
              <img
                className='w-[160px] h-[160px]'
                src='/CommunitiesPageImages/Image7.svg'
                alt='image7'
              />
              <img
                className='w-[160px] h-[160px]'
                src='/CommunitiesPageImages/Image8.svg'
                alt='image8'
              />
            </div>
            <div className='flex flex-row justify-center items-center '>
              <img
                className='w-[160px] h-[160px]'
                src='/CommunitiesPageImages/Image9.svg'
                alt='image9'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp3;
