import React from 'react';
import allServices from '/services/allServices.png';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Comp3 = () => {
  const navigate = useNavigate();
  const handleWhatsAppClick = () => {
   
  };

  return (
    <div className="w-full mt-5 h-auto  flex items-start justify-center bg-[#FCFCFC]">
      <div className="container lg:mx-auto lg:px-4 lg:py-4 flex flex-col-reverse gap-3 lg:gap-0 lg:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="lg:w-1/3 lg:mb-3 lg:mx-auto order-2 lg:order-1">
          <div className="bg-[#DC222C] flex items-center justify-center text-center px-4 py-2 rounded-full mb-8 mt-3 w-full lg:w-auto whitespace-nowrap">
            <p className="text-white font-poppins font-bold text-lg lg:text-3xl">
            Free Support and Assistance
            </p>
          </div>

          <p className="mb-6 text-black text-lg font-poppins px-2">
            Being a student in Abroad, if you need any kind of support and assistance, feel free to generate your request through the "Universal Student Assistance Portal (USAP)". It is completely free and transparent with the help of technology.
          </p>
          <h3 className="text-2xl font-semibold font-poppins mb-4 px-2">Just follow three simple steps:</h3>
          <ul className="list-disc list-inside mb-6 text-black font-poppins text-lg px-2">
            <li>Create your account using Gmail</li>
            <li>Generate your request by selecting its category</li>
            <li>USAP will contact you and arrange a meeting</li>
          </ul>

          <p className="mb-6 text-black font-poppins text-lg px-2">
            At the end of the service, you can give your feedback.
          </p>
          <div className="flex items-center">
            <span className="text-black font-poppins px-2">Join our WhatsApp group:</span>
            <FaWhatsapp onClick={handleWhatsAppClick} className="text-green-500 text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Right side image */}
        <div className="w-max lg:w-1/2 flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
          <img
            onClick={() => navigate('/services')}
            src={allServices}
            alt="USAP Support"
            className="w-[95vw] lg:w-[40rem] lg:max-w-full h-[30rem] lg:h-[35rem] rounded-lg shadow-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Comp3;
