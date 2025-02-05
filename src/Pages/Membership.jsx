import React from 'react';
import { Typography } from '@material-tailwind/react';
import SignupModel from '../Components/SignupModel';
import NavBar from '../Components/HomePageComponents/NavBar';
import Footer from '../Components/HomePageComponents/Footer';
import graphics from '../Assets/graphics01.png';
import graphics02 from '../Assets/graphics02.png';
import MembershipCard from '../Components/MembershipCard';
import { useMembershipStore } from '../../store/membershipStore';

const Membership = () => {
  const { membershipData, setSelectedMembership } = useMembershipStore();

  const handleSelectMembership = (membershipType) => {
    setSelectedMembership(membershipType);
  };

  return (
    <div className="flex flex-col gap-7 items-center bg-gray-100">
      <NavBar />
      
      {/* Header Section */}
      <div className="w-[90%] flex items-center justify-center relative mb-[6rem]">
        <img src={graphics} alt="teamlogo" className="w-[20rem] z-20 absolute -top-[2rem] lg:right-[calc(70vw-5rem)]" />
        <div className="w-auto px-[10rem] h-[90px] bg-blue-600 flex items-center justify-center rounded-[2rem] relative top-16">
          <Typography variant="h1" color="white" className="text-center ml-[5rem] text-[40px] tracking-tighter font-bold">
            Choose your membership plan
          </Typography>
        </div>
      </div>

      {/* Membership Cards Section */}
      <div className="w-[80%] h-auto bg-gray-100 flex items-center justify-center px-4 gap-8">
        {Object.entries(membershipData).map(([key, value]) => (
          // console.log(key, value),
          <MembershipCard
            key={key}
            data={value}
            onSelect={() => handleSelectMembership(key)}
          />
        ))}
      </div>

      {/* Benefits Section */}
      <div className="w-[80%] h-auto bg-[#F5F5F5] ">
        <div className="w-[480px] py-6 h-fit flex flex-col justify-start items-center bg-white rounded-3xl px-4 mx-auto">
          <Typography variant="h4" color="black" className="text-[24px]">
            Benefits
          </Typography>
          <img src={graphics02} alt="logo" className="w-[18rem] mx-auto" />
          <Typography variant="h6" className="font-thin text-[15px]">
            As an USAP member, you'll be presented with new resources, valuable opportunities, and many discounts that will help you advance your career. You can find colleagues who share your vision and commitment—those who are moving technology forward today.
          </Typography>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Membership;
