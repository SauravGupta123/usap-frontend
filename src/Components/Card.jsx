import { Avatar, Rating, Typography } from '@material-tailwind/react';
import React from 'react';
import gallery from '../Assets/communitie.png';

const Card = () => {
  return (
    <div className='w-full h-full bg-white rounded-2xl'>
      <div className='px-4 py-6 w-full h-auto'>
        <img src={gallery} alt='gallery' className='rounded-lg' />
        <div className=' text-center flex items-center w-auto'>
          <Avatar
            src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
            alt='image'
            size='lg'
          />
          <div className='flex flex-col justify-center ml-4'>
            <Typography variant='h6' className='mt-4'>
              Tania Andrew
            </Typography>
            <Rating value={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
