import React from 'react';
import logo from '../Assets/logo.png';
import {
  Button,
  Checkbox,
  Input,
  Option,
  Radio,
  Select,
  Typography,
} from '@material-tailwind/react';

import CartComponent from '../Components/CartComponent';
import CountryState from '../Components/CountryState';
import { useContextValue } from '../Context';

const Profile = ({ setPage }) => {
  const { state, dispatch } = useContextValue();
  return (
    <div className=''>
      {/* <div className='w-full h-10 bg-black'></div> */}
      <div className='flex items-center justify-between mx-4 py-2 border-b-[2px] border-gray-300'>
        <Typography variant='h2' color='green'>
          Membership Application
        </Typography>
        <img src={logo} alt='logo' className='w-[8rem]' />
      </div>
      <div className='w-full h-[3rem] bg-gray-100 flex items-center justify-between px-4 py-2'>
        <Typography variant='h5' className='font-normal '>
          Contact Information
        </Typography>

        <Typography
          variant='h5'
          className='font-normal active text-white p-2 rounded-md'
        >
          Profile Summary
        </Typography>
        <Typography variant='h5' className='font-normal'>
          Cart
        </Typography>
        <Typography variant='h5' className='font-normal'>
          Payment
        </Typography>
        <Typography variant='h5' className='font-normal'>
          Review Order
        </Typography>
        <Typography variant='h5' className='font-normal'>
          Order Confirmation
        </Typography>
      </div>
      <div className='flex items-start justify-between w-full h-[6rem]'>
        <div className='flex items-center justify-between mx-4 py-5 border-b-[2px] border-gray-300 w-[72%]'>
          <Typography variant='h3' color='green' className='font-normal'>
            Profile Summary
          </Typography>
        </div>
        <CartComponent setPage={setPage} />
      </div>
      <Typography variant='h5' className='mx-4 '>
        Welcome ,
      </Typography>
      <Typography className='mx-4 w-[72%] tracking-wider'>
        Thank you for your interest in membership. Your selected membership(s)
        have been added to your cart. You can{' '}
        <span className='underline text-green-500'>
          review qualifications for different USAP Member grades
        </span>
        .
      </Typography>
      <Typography
        variant='h5'
        className='mx-4 my-2 border-b-[2px] border-gray-300 pb-4 w-[72%]'
      >
        Education Information
      </Typography>
      <Typography className='mx-4 w-[72%] tracking-wider'>
        An undergraduate or first university degree is a minimum requirement for
        some grades of membership. You can add certifications or advanced
        degrees to your profile at any time.
      </Typography>
      <Typography className='mx-4 w-[72%] tracking-wider mt-10'>
        Please mention your college/university name. Start by selecting country
        state/province/territory and University.
      </Typography>
      <div className='w-[55%] h-auto mx-4 mb-[4rem] '>
        <form
          action=''
          className='my-4 flex flex-col items-center justify-center gap-4 ml-4'
        >
          <CountryState />
          <Input
            label={
              <>
                <span className='font-semibold'>University/college</span>{' '}
                <span className='text-red-400'>*</span>
              </>
            }
            className='focus:shadow-lg font-semibold  bg-[#F0F2F4]'
            color='green'
            size='lg'
          />
          <div className='w-full flex items-center justify-start'>
            <Typography className='mx-2 text-gray-600'>
              Student status<span className='text-red-400'>*</span>
            </Typography>
            <div className='flex items-start justify-center w-[70%]'>
              <Radio color='green' label='Undergraduate' name='graduate' />
              <Radio color='green' label='Graduate' name='graduate' />
            </div>
          </div>
          <Input
            label={
              <>
                Degree Being Pursued <span className='text-red-400'>*</span>
              </>
            }
            className='focus:shadow-lg'
            color='green'
            size='lg'
          />
          <Input
            label={
              <>
                Academic Program <span className='text-red-400'>*</span>
              </>
            }
            className='focus:shadow-lg'
            color='green'
            size='lg'
          />

          <Input
            label={
              <>
                What is your current field of study{' '}
                <span className='text-red-400'>*</span>
              </>
            }
            className='focus:shadow-lg'
            color='green'
            size='lg'
          />
        </form>
        <span className='text-red-600 mt-4 mx-4'>* required fields</span>
      </div>
      <div className='w-[55%] border-b-[2px] border-gray-300 mb-5 ml-8'></div>
      <Button
        variant='gradient'
        color='green'
        className='w-40 rounded-2xl mx-8 mb-10'
        onClick={() => setPage(3)}
      >
        Continue
      </Button>
    </div>
  );
};

export default Profile;
