import React from 'react';
import fb from '../Assets/fblogo.png';
import insta from '../Assets/instalogo.png';
import linkn from '../Assets/linkdin.png';
import tweet from '../Assets/twiteer.png';

import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const ChapterCard = ({ title, imageUrl }) => {
  return (
    <div className='bg-white rounded-[1.5rem] py-4 px-6 shadow-xl w-[22rem] h-[20.5rem] flex flex-col items-center'>
      <Typography variant='h5' className='mb-2'>
        {title}
      </Typography>
      <img src={imageUrl} alt='logo' className='w-80 h-40' />
      <div className='flex items-center justify-center gap-2 my-2'>
        <Link>
          <img src={fb} alt='icon' className='w-7' />
        </Link>
        <Link>
          <img src={insta} alt='icon' className='w-6 text-gray-400' />
        </Link>
        <Link>
          <img src={linkn} alt='icon' className='w-7' />
        </Link>
        <Link>
          <img src={tweet} alt='icon' className='w-7' />
        </Link>
      </div>
      <Typography
        variant='h6'
        className='w-[7rem] rounded-3xl bg-black py-2 flex items-center justify-center mt-5'
        color='white'
      >
        Know More
      </Typography>
    </div>
  );
};

export default ChapterCard;
