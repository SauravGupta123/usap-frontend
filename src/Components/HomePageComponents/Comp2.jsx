import React from 'react';
// import reasonsImage from '/images/reasons.png'; // Replace with your actual image path
import { useNavigate } from 'react-router-dom';
import think from '/HomePageImages/Comp2-Images/think.png';

const Comp2 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30"></div>
      <div className="absolute top-5 sm:top-10 left-5 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-blue-200 rounded-full opacity-10 animate-bounce-slow"></div>
      <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-purple-200 rounded-full opacity-10 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 max-w-7xl mx-auto">
          
          {/* Left side image */}
          <div className="w-full lg:w-1/2 flex justify-center animate-slide-up order-2 lg:order-1" style={{animationDelay: '0.1s'}}>
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
              <img
                src={think}
                alt="Reasons to Join USAP"
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-2xl shadow-2xl object-cover transform transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right side content */}
          <div className="w-full lg:w-1/2 lg:pl-8 animate-fade-in order-1 lg:order-2" style={{animationDelay: '0.3s'}}>
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/30">
              
              {/* Badge */}
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 lg:mb-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-center">
                  Why USAP?
                </h2>
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed font-medium text-center lg:text-left">
                  Explore the reasons for joining USAP and how it can help you navigate your journey as a student abroad. Discover our comprehensive support system designed for your success.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-700 font-medium text-xs sm:text-sm">Administrative Support</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-700 font-medium text-xs sm:text-sm">Career Guidance</span>
                  </div>
                  <div className="flex items-center gap-2 bg-indigo-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-indigo-700 font-medium text-xs sm:text-sm">Social Integration</span>
                  </div>
                </div>

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => navigate('/WhyUSAP')}
                    className="group bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3"
                  >
                    Learn More
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => navigate('/services')}
                    className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3"
                  >
                    Our Services
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp2;
