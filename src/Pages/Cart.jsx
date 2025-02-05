import React from 'react';
import logo from '../Assets/logo.png';
import { Button, Typography } from '@material-tailwind/react';
import CartComponent from '../Components/CartComponent';
import Footer from '../Components/HomePageComponents/Footer';
import { useMembershipStore } from '../../store/membershipStore'; // Import the zustand store

const Cart = ({ setPage }) => {

  const { getSelectedPlan, setSelectedMembership } = useMembershipStore();
  const selectedPlan = getSelectedPlan();
  console.log(selectedPlan);
  const { name, price } = selectedPlan || {};

  return (
    <div className=''>
      <div className='flex items-center justify-between mx-4 py-2 border-b-[2px] border-gray-300'>
        <Typography variant='h2' style={{ color: '#1E40AE' }}>
          Membership Application
        </Typography>
        <img src={logo} alt='logo' className='w-[8rem]' />
      </div>
      <div className='w-full h-[3rem] bg-gray-100 flex items-center justify-between px-20 py-2'>
        <Typography
          variant='h5'
          className='font-normal active text-white p-2 rounded-md'
        >
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
      <div className='flex items-start justify-between w-full h-[6rem] mt-4'>
        <div className='flex items-center justify-between mx-4 py-4 border-b-[2px] border-gray-300 w-[72%]'>
          <Typography variant='h3' style={{ color: '#1E40AE' }} className='font-normal'>
            Cart
          </Typography>
        </div>
        {/* <CartComponent setPage={setPage} /> */}
      </div>

      <div className='w-[60%] h-[9rem] shadow-2xl rounded-md mt-10 ml-20 mb-20 pt-6 flex items-start justify-between border-[2px] border-gray-200'>
        <div className='flex items-start justify-around w-[45%]'>
          <img src={logo} alt='logo' className='w-[10rem]' />
          <div className='flex flex-col items-start justify-center'>
            <span className='text-gray-500 text-[20px]'>Description</span>
            <span className='text-blue-700 hover:underline font-semibold cursor-pointer text-[20px]'>
              USAP Membership
            </span>
            <span>({name})</span>
          </div>
        </div>
        <div className='flex items-start justify-around w-[45%]'>
          <div className='flex flex-col items-start justify-center'>
            <span className='text-gray-500 text-[20px]'>Product ID</span>
            <span className='text-[20px] text-center w-full font-semibold'>
              {/* Use a static ID or derive one from selectedPlan if needed */}
              {name}-ID-001
            </span>
          </div>
          <div className='flex flex-col items-start justify-start'>
            <span className='text-gray-500 text-[20px]'>Product Price</span>
            <Typography className='tracking-normal text-center text-[20px] font-semibold'>
              ₹{price}
            </Typography>
          </div>
        </div>
      </div>
      <Typography className='flex items-center justify-end tracking-normal text-center text-[26px] font-semibold mb-10 pt-4 pl-4 w-[70%]'>
        *Net Amount INR: ₹{price}.00
      </Typography>
      <Button

        className='w-40 rounded-2xl mx-8 mb-10 bg-[#1E40AE]'
        onClick={() => setPage(2)}
      >
        Continue
      </Button>
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;
