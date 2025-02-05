import React, { useState } from 'react';
import { Button, Checkbox, Typography } from '@material-tailwind/react';
import axios from 'axios';
import logo from '../Assets/logo.png';

const RewiewOrd = ({ setPage, paymentmode, address, selectedPlan }) => {
  const [loading2, setLoading2] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const getPaymentDetails = async () => {
    try {
      setLoading2(true);
      console.log('Payment details....');

      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/payment/pay`, {
        params: {
          amount: selectedPlan.price,
        },
      });

      console.log('res-->', res);

      const redirectUrl = res.data.message.data.instrumentResponse.redirectInfo.url;
      console.log("Redirect to this url :--- ", redirectUrl);

      window.location.replace(redirectUrl);
    } catch (error) {
      setLoading2(false);
      console.error('Error during Payment:', error);
    } finally {
      setLoading2(false);
    }
  };

  return (
    <div className='w-[90%] mx-auto'>
      <Typography variant='h3'  style={{ color: '#1E40AE' }} className='font-normal my-6'>
        Review Order
      </Typography>
      <div className='w-full h-auto mb-6 flex items-start justify-between'>
        {/* <div className='w-40% flex flex-col items-start justify-start'>
          <Typography variant='h6' className=''>
            Address for certificate disbursal
          </Typography>
          <span className='w-[15rem]'>{address ? address : '(optional)'}</span>
        </div> */}
        <div className='w-40% flex flex-col items-center justify-center'>
          <Typography variant='h6' className=''>
            Payment details:
          </Typography>
          <span>{paymentmode}</span>
        </div>
      </div>
      <div className='w-full h-auto shadow-2xl rounded-md mb-10 pt-6 flex items-start justify-between border-[2px] border-gray-200 '>
        <div className='flex items-start justify-around w-[35%]'>
          <img src={logo} alt='logo' className='w-[10rem]' />
          <div className='flex flex-col items-start justify-center'>
            <span className='text-gray-500 text-[20px] '>Description</span>
            <span className='text-blue-700 hover:underline font-semibold cursor-pointer text-[20px]'>
              USAP Membership
            </span>
            <span>({selectedPlan.name})</span>
          </div>
        </div>
        <div className='flex items-start justify-around w-[65%]'>
          <div className='flex flex-col items-start justify-start'>
            <span className='text-gray-500 text-[20px]'>
              Product Price
            </span>
            <Typography className=' tracking-normal text-center text-[20px] font-semibold'>
            &#8377;{selectedPlan.price}
            </Typography>
          </div>
          <div className='flex flex-col items-start justify-start'>
            <span className='text-gray-500 text-[20px] '>
              &#8377; Product Total
            </span>
            <Typography className=' tracking-normal text-center text-[20px] font-semibold'>
            &#8377;  {selectedPlan.price}
            </Typography>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-end border-t-[2px] border-gray-300 pt-6'>
        <div className='flex flex-col items-end justify-center'>
          <div className='flex items-center justify-between w-[25rem] font-thin'>
            <Typography className='flex items-center justify-end w-full relative right-[5rem] '>
              Net Amount:
            </Typography>
            &#8377;{selectedPlan.price}
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-end border-b-[2px] border-gray-300 py-6 mb-4'>
        <div className='flex items-center justify-between w-[25rem] '>
          <Typography variant='h6' className='text-[25px]'>
            * Total INR:
          </Typography>
          <span className='relative left-0 font-bold text-[19px]'>
            &#8377;{selectedPlan.price}
          </span>
        </div>
      </div>
      <div>
        <Checkbox
           style={{ color: '#1E40AE' }}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          label={
            <>
              I have read and accept to the USAP Terms & Conditions and USAP Terms of Membership{' '}
              <span className='text-blue-400  font-medium'>
                View the Terms & Conditions
              </span>
            </>
          }
        />
      </div>
      <Button

     
        className='w-40 rounded-2xl mt-6 mb-4 bg-[#1E40AE]'
        onClick={getPaymentDetails}
        disabled={!termsAccepted || loading2}
      >
        {loading2 ? 'Processing...' : 'Finish'}
      </Button>
      {!termsAccepted && (
        <div className='text-red-400 text-[16px]'>
          Please acknowledge the ISA-F Terms of Membership and ISA-F Terms & Conditions to complete checkout.
        </div>
      )}
      <div className='mb-20 mt-1 text-[18px] font-thin'>
        *You will be billed INR <span className='font-semibold'>{selectedPlan.price}.00</span>
      </div>
    </div>
  );
};

export default RewiewOrd;