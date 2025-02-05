import { Typography } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Team = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=' w-[180px]  lg:w-[220px] lg:h-[300px] h-[220px] flex flex-col items-center md:p-2 lg:p-4 bg-white rounded-2xl z-10'>
      <div className='w-full grid place-items-center'>
        <img
          src={data.image}
          alt='logo'
          className='rounded-full border-[2px] border-black w-[7rem] h-[7rem] lg:w-40 lg:h-40 object-cover'
        />
      </div>
      <Typography
        variant='h6'
        color='black'
        className='py-1 font-bold md:text-[14px] lg:text-[18px] text-center leading-[20px] lg:leading-[25px] text-[#0B66C3]'
      >
        {data.designation}
      </Typography>
      <div className='text-gray-800 md:text-[12px] lg:text-[16px] -mt-[2px]'>
        {data.name}
      </div>
      <div className='lg:mt-2 md:mt-1 flex gap-4 justify-center'>
        <FaTwitter className='lg:text-2xl md:text-xl cursor-pointer text-blue-500' />
        <FaLinkedinIn className='lg:text-2xl md:text-xl cursor-pointer text-[#0B66C3]' />
      </div>
    </div>
  );
};

export default Team;
