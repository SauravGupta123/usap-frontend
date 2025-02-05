import React, { useState } from 'react';
import europeanPayLogo from '/HomePageImages/Comp4-Images/ComingSoon.jpg';
import infotech from '/HomePageImages/Comp4-Images/ComingSoon.jpg';
import pramitFoundationLogo from '/HomePageImages/Comp4-Images/ComingSoon.jpg';
import laxmibaiSeva from '/HomePageImages/Comp4-Images/ComingSoon.jpg';
import comingSoon from '/HomePageImages/Comp4-Images/ComingSoon.jpg';

function Comp4() {
  const [selectedPartner, setSelectedPartner] = useState('funding');

  return (
    <div className='w-full h-auto bg-[#ffffff] py-11 space-y-[55px] flex flex-col justify-center items-center'>
      <div className='bg-[#DC222C] flex items-center justify-center text-center px-6 py-4 rounded-full'>
        <p className='text-white font-poppins font-extrabold text-xl Laptop-lg:text-4xl'>
          Our Partners
        </p>
      </div>

      <p className='text-center text-sm text-black font-semibold w-full max-w-[800px] mb-4'>
        We are proud to partner with some of the most innovative and reputable organizations. Together, we strive to deliver high-quality solutions.
      </p>

      {/* Button Controls - Modified for 2x2 grid on mobile */}
      <div className='w-full flex flex-wrap sm:flex-nowrap justify-center items-center px-4 gap-4 sm:space-x-4'>
        <button
          className={`w-[calc(50%-0.5rem)] sm:w-auto px-6 py-2 rounded-full font-semibold ${
            selectedPartner === 'funding' ? 'bg-[#1C1C1E] text-white' : 'bg-[#F1F1F1] text-black'
          }`}
          onClick={() => setSelectedPartner('funding')}
        >
          Funding Partners
        </button>
        <button
          className={`w-[calc(50%-0.5rem)] sm:w-auto px-6 py-2 rounded-full font-semibold ${
            selectedPartner === 'social' ? 'bg-[#1C1C1E] text-white' : 'bg-[#F1F1F1] text-black'
          }`}
          onClick={() => setSelectedPartner('social')}
        >
          Social Partners
        </button>
        <button
          className={`w-[calc(50%-0.5rem)] sm:w-auto px-6 py-2 rounded-full font-semibold ${
            selectedPartner === 'localOrganizations' ? 'bg-[#1C1C1E] text-white' : 'bg-[#F1F1F1] text-black'
          }`}
          onClick={() => setSelectedPartner('localOrganizations')}
        >
          Local Organizations
        </button>
        <button
          className={`w-[calc(50%-0.5rem)] sm:w-auto px-6 py-2 rounded-full font-semibold ${
            selectedPartner === 'universities' ? 'bg-[#1C1C1E] text-white' : 'bg-[#F1F1F1] text-black'
          }`}
          onClick={() => setSelectedPartner('universities')}
        >
          Universities
        </button>
      </div>

      {/* Partners Logos */}
      <div className='w-full flex flex-col md:flex-row justify-center items-center mt-10 space-y-8 md:space-y-0 md:space-x-8'>
        {selectedPartner === 'funding' ? (
          <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0'>
            <a href="https://european-pay.fr/" target='_blank'>
              <img
                className='h-[100px] mx-4'
                src={europeanPayLogo}
                alt='European Pay'
              />
            </a>
            <a href="https://soniconsultancy.in/" target='_blank'>
              <img
                className='h-[100px] mx-4'
                src={infotech}
                alt='infotech'
              />
            </a>
          </div>
        ) : selectedPartner === 'localOrganizations' || selectedPartner === 'universities' ? (
          <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8'>
            <img
              className='h-[100px]'
              src={comingSoon}
              alt='Coming Soon'
            />
          </div>
        ) : (
          <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8'>
            <a href="https://pramitfoundation.soniconsultancy.in/" target='_blank'>
              <img
                className='h-[100px]'
                src={pramitFoundationLogo}
                alt='Pramit Foundation'
              />
            </a>
            <a href="https://www.facebook.com/LBJSSR" target='_blank'>
              <img
                className='h-[100px]'
                src={laxmibaiSeva}
                alt='Laxmibai Seva'
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comp4;