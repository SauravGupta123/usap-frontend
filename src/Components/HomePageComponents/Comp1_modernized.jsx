import { Button } from '@material-tailwind/react';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import img3 from '../../Assets/final design.png';

function Comp1() {
  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5'></div>
      
      {/* Hero Images Section */}
      <div className='relative z-10 flex items-center justify-center px-4 py-8 md:py-12'>
        <div className='flex items-center justify-around w-full max-w-7xl'>
          {/* Left Image */}
          <div className='hidden sm:block animate-slide-up' style={{animationDelay: '0.1s'}}>
            <img
              className='w-[200px] md:w-[280px] lg:w-[320px] h-auto object-contain transform transition-all duration-300 hover:scale-105'
              src='/HomePageImages/Comp1-Images/study1.png'
              alt='Student studying'
            />
          </div>
          
          {/* Center Image */}
          <div className='animate-slide-up' style={{animationDelay: '0.2s'}}>
            <img
              className='w-[280px] sm:w-[200px] md:w-[280px] lg:w-[350px] h-auto object-contain transform transition-all duration-300 hover:scale-105'
              src='/HomePageImages/Comp1-Images/franceTower.png'
              alt='Eiffel Tower'
            />
          </div>
          
          {/* Right Image */}
          <div className='hidden sm:block animate-slide-up' style={{animationDelay: '0.3s'}}>
            <img
              className='w-[200px] md:w-[280px] lg:w-[320px] h-auto object-contain transform transition-all duration-300 hover:scale-105'
              src='/HomePageImages/Comp1-Images/study2.png'
              alt='Student with books'
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className='relative z-10 flex items-center justify-center px-4 pb-12'>
        <div className='w-full max-w-7xl'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
            
            {/* Left Button */}
            <div className='order-2 lg:order-1 animate-slide-up' style={{animationDelay: '0.4s'}}>
              <a href="/experts" className='block'>
                <button className='group px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base lg:text-lg'>
                  <span className='flex items-center gap-2'>
                    Research Experts
                    <svg className='w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                    </svg>
                  </span>
                </button>
              </a>
            </div>

            {/* Center Content */}
            <div className='order-1 lg:order-2 flex-1 text-center animate-fade-in' style={{animationDelay: '0.2s'}}>
              <div className='mb-6'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight'>
                  Universal Student Assistance Portal
                </h1>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                  (USAP)
                </h2>
              </div>
              
              <div className='max-w-4xl mx-auto'>
                <p className='text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium'>
                  USAP is a dedicated community focused on providing help and assistance to Indian students abroad. We make students' lives easier so they can focus on their professional careers and achieve success. USAP provides students with the right guidance and direction for administrative support, securing scholarships, social integration, and career opportunities.
                </p>
              </div>
            </div>

            {/* Right Button */}
            <div className='order-3 animate-slide-up' style={{animationDelay: '0.6s'}}>
              <a href="/experts" className='block'>
                <button className='group px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base lg:text-lg'>
                  <span className='flex items-center gap-2'>
                    Research & Innovation
                    <svg className='w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className='absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce-slow'></div>
      <div className='absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-bounce-slow' style={{animationDelay: '1s'}}></div>
      <div className='absolute top-1/2 left-5 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-bounce-slow' style={{animationDelay: '2s'}}></div>
    </div>
  );
}

export default Comp1;
