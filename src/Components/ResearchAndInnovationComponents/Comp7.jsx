import React from 'react';
import { Link } from 'react-router-dom';

function Comp7() {
  return (
    <div className='w-full h-auto  bg-gradient-to-b from-[#8BBB67] to-[#9CCC78] flex flex-col items-center justify-center space-y-8 px-4 Laptop-lg:px-[70px] py-10'>
      <div className='w-auto h-[60px] p-4 bg-[#439835] rounded-[20px] font-inter font-bold text-lg Tablet:text-2xl text-[#FFFFFF] flex items-center justify-center'>
        Our Research and Projects
      </div>
      <div className='w-full  flex flex-col Laptop-lg:flex-row justify-around items-center  space-y-8 Laptop-lg:space-y-0 '>
        <div className='flex flex-col justify-around items-center space-y-4 w-full Tablet:w-[50%] Laptop-lg:w-[40%] bg-[#FFFFFF] rounded-3xl p-4'>
          <div className='w-full h-[59px]  rounded-[20px] font-inter font-bold text-lg Tablet:text-xl text-[#000000] flex items-center justify-center'>
            Jowar Research Paper
          </div>
          <div className='h-[250px] w-full overflow-hidden rounded-lg'>
            <img
              className='w-full h-full object-cover'
              src='/ResearchAndInnovationImages/image-12.svg'
              alt='image12'
            />
          </div>
          <div className='w-full flex flex-row justify-between items-center px-4'>
            <p className='font-inter font-bold text-base  text-[#000000]'>
              Cultivating Jowar for Resilient Agriculture
            </p>
            <Link to={'/research/jower-research-paper'}>
              <button className='w-auto h-auto px-4 py-2 rounded-[10px] bg-[#439835] text-[#FFFFFF] font-semibold text-xs Tablet:text-base'>
                Know More
              </button>
            </Link>
          </div>
        </div>

        <div className='flex flex-col justify-around items-center space-y-4 w-full Tablet:w-[50%] Laptop-lg:w-[40%] bg-[#FFFFFF] rounded-3xl p-4'>
          <div className='w-full h-[59px]  rounded-[20px] font-inter font-bold text-lg Tablet:text-xl text-[#000000] flex items-center justify-center'>
            Iot in Agriculture Research
          </div>
          <div className='h-[250px] w-full overflow-hidden rounded-lg'>
            <img
              className='w-full h-full object-cover'
              src='/ResearchAndInnovationImages/image-13.svg'
              alt='image13'
            />
          </div>
          <div className='w-full flex flex-row justify-between items-center px-4'>
            <p className='font-inter font-bold text-base  text-[#000000] text-left'>
              Role of sensors in crop production{' '}
            </p>
            <Link to='/research/iot-kit-paper'>
              {' '}
              <button className='w-auto h-auto px-4 py-2 rounded-[10px] bg-[#439835] text-[#FFFFFF] font-semibold text-xs Tablet:text-base'>
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp7;
