import React from 'react';
// import reasonsImage from '/images/reasons.png'; // Replace with your actual image path
import { useNavigate } from 'react-router-dom';
import think from '/HomePageImages/Comp2-Images/think.png';

const Comp2 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-16 h-auto flex items-start justify-center bg-[#FCFCFC]">
      <div className="container lg:mx-auto lg:px-4 lg:py-4 flex flex-col-reverse gap-3 lg:gap-0 lg:flex-row items-center justify-between">
        {/* Left side image */}
        <div className="w-max lg:w-1/2 flex justify-center order-1 lg:order-1 mb-6 lg:mb-0">
          <img
            // Replace with your actual image path
            src={think}
            alt="Reasons to Join USAP"
            className="w-[90vw] lg:w-[30rem] lg:max-w-full h-[19rem] lg:h-[21rem] rounded-lg "
          />
        </div>

        {/* Right side content */}
        <div className=" w-[95vw] px-3 lg:px-0 lg:w-[27rem]   lg:h-[22rem]  lg:mb-3 lg:mx-auto order-2 lg:order-2">
          <div className="bg-[#DC222C] flex items-center justify-center text-center px-4 py-2 rounded-full mb-8 mt-3 w-full lg:w-auto whitespace-nowrap">
            <p className="text-white font-poppins font-bold text-lg lg:text-3xl">
              Why USAP?
            </p>
          </div>

          <p className="mb-6 text-black text-lg font-poppins px-2">
            Explore the reasons for joining USAP and how it can help you navigate your journey as a student in France.
          </p>

          <button
            onClick={() => navigate('/WhyUSAP')} // Redirect to the "Why ISAP" page
            className="bg-[#DC222C] text-white font-poppins font-bold text-base lg:text-lg px-4 py-1 rounded-full transition duration-300 hover:bg-[#C21E2A] lg:mt-5">
            Learn More
          </button>

        </div>
      </div>
    </div>
  );
};

export default Comp2;
