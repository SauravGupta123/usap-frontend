import React, { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import Cart from './Cart';
import Payment from './Payment';
import RewiewOrd from './RewiewOrd';
import OrderConfirmation from '../Components/OrderConfirmation';
import { useMembershipStore } from '../../store/membershipStore';
import Footer from '../Components/HomePageComponents/Footer';

const JoiningPage = () => {
  const [page, setPage] = useState(1);
  const [paymentmode, setPaymentMode] = useState(null);
  const [address, setAddress] = useState('');
  const { getSelectedPlan } = useMembershipStore();
  const selectedPlan = getSelectedPlan();
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderStep = () => {
    switch (page) {
      case 1:
        return <Cart setPage={setPage} selectedPlan={selectedPlan} />;
      case 2:
        return <Payment setPage={setPage} setPaymentMode={setPaymentMode} />;
      case 3:
        return (
          <RewiewOrd
            setPage={setPage}
            paymentmode={paymentmode}
            address={address}
            selectedPlan={selectedPlan}
          />
        );
      case 4:
        return <OrderConfirmation />;
      default:
        return null;
    }
  };

  const getStepColor = (stepNumber) => {
    return page === stepNumber ? 'text-blue-500 font-semibold' : 'text-gray-500';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className='w-full bg-gray-100 py-4'>
        <div className='w-full max-w-6xl mx-auto flex items-center justify-between px-4'>
          <Typography variant='h5' className={`font-normal ${getStepColor(1)}`}>
            Cart
          </Typography>
          <Typography variant='h5' className={`font-normal ${getStepColor(2)}`}>
            Payment
          </Typography>
          <Typography variant='h5' className={`font-normal ${getStepColor(3)}`}>
            Review Order
          </Typography>
          <Typography variant='h5' className={`font-normal ${getStepColor(4)}`}>
            Order Confirmation
          </Typography>
        </div>
      </div>
      <div className="flex-grow">
        {renderStep()}
      </div>
      <Footer hideJoinNow="true"/>
    </div>
  );
};

export default JoiningPage;
