import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { MdDoneOutline } from 'react-icons/md';
import { BsCart4 } from 'react-icons/bs'; 
import { useNavigate } from 'react-router-dom';
import { useMembershipStore } from '../../store/membershipStore';

function MembershipCard({ data, isRecommended="true" }) {
  
  const navigate = useNavigate();
  const {getSelectedPlan, setSelectedMembership } = useMembershipStore();
  
  const handleSignup = () => {
    console.log(data);
    setSelectedMembership(data?.name);
    console.log('Selected Membership:', getSelectedPlan());

    // Retrieve email and token from localStorage
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    
    // Navigate based on authentication status
    if (!email || !token) {
      navigate('/register');
    } else {
      navigate('/membership/application');
    }
  };

  // Safeguard if `data` or its properties are not available
  const membershipName = data?.displayName || 'Membership';
  const membershipPrice = data?.price || 0;
  const membershipBenefits = data?.benefits || ['No benefits available'];

  return (
    <div className="bg-blue-600 pl-2 rounded-t-[3rem] rounded-b-[2rem] pr-2 pb-2 shadow-2xl shadow-blue-700">
      <div className="w-[15rem] h-[35rem] bg-white rounded-[2rem] flex flex-col items-center px-2">
        <Typography variant="h3" color="blue" className="mt-4 tracking-wide">
          {membershipName}
        </Typography>
        <Typography variant="h5" color="gray" className="font-thin">
          Package
        </Typography>
        <Typography variant="h3" color="black" className="my-4 italic">
          @ {membershipPrice} <span className="text-[14px]">{membershipPrice === 9999 || membershipPrice === 2499 ? 'One time' : 'Per year'}</span>
        </Typography>
        {isRecommended && (
          <div className="bg-blue-500 w-[12rem] h-[2.5rem] rounded-3xl text-white flex items-center justify-around text-[18px] font-semibold">
            Recommend <span className="bg-white text-blue-500 rounded-sm"><MdDoneOutline /></span>
          </div>
        )}
        <Typography variant="h6" color="black" className="mt-4 flex w-full items-start justify-start ml-6">
          Included:
        </Typography>
        <ul className="px-2 text-[12px] list-disc py-4">
          {membershipBenefits.map((benefit, index) => (
            <li key={index} className="ml-4 mb-1">{benefit}</li>
          ))}
        </ul>
        <Button
          onClick={handleSignup}
          className='flex justify-center px-8 py-3 items-center bg-[#1E40AF] text-sm rounded-3xl text-white shadow-sm'
        >
          <BsCart4 className='text-lg mr-2' />
          Buy now
        </Button>
      </div>
    </div>
  );
}

export default MembershipCard;
