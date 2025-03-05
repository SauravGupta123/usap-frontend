import React from 'react';
import isapMobile from '/isapPhone.jpg';
import playStore from '/playstore.svg';
import isapLogo from '/HomePageImages/NavBarImages/USAP_logo.png';

const MobileApp = () => {
  return (
    <div className="bg-white w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-60">
      <section className=" mx-auto flex flex-col lg:flex-row items-center justify-between lg:justify-center px-4 sm:px-8  gap-8">
        <div className="left flex flex-col items-center lg:items-start gap-6 sm:gap-8 lg:w-1/2">
          <div className="w-32 sm:w-36 lg:w-40">
            <img 
              src={isapLogo} 
              alt="isapLogo"
              className="w-full h-auto" 
            />
          </div>
          
          <div className="content flex flex-col gap-3 sm:gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-center lg:text-left">
              <span className="text-navy-900">Hassle Free Experience with</span>
              <br />
              <span className="text-red-500">USAP France App</span>
            </h1>
            
            <h2 className="text-gray-600 text-base sm:text-lg max-w-xl text-center lg:text-left">
              The Fastest and easiest way to connect with us to get your request resolved.
            </h2>
          </div>

          <div className="flex justify-center lg:justify-start gap-4">
            <a 
              href="https://play.google.com/store/apps/details?id=com.dps.isap&pcampaignid=web_share" target='_blank' rel='noreferrer'
              className="inline-flex items-center gap-2 bg-black text-white px-4 sm:px-6 py-1 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <img 
                src={playStore} 
                alt="Play Store" 
                className="w-6 sm:w-8 h-8 sm:h-10"
              />
              <span className="text-xs sm:text-sm font-medium">
                GET IT ON
                <br className="fontse" />
                <span className="font-bold text-base sm:text-lg">Google Play</span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="w-[260px] sm:w-[280px] md:w-[280px] md:h-[420px] mx-auto">
            <img 
              src={isapMobile} 
              alt="Mobile App Interface"
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;