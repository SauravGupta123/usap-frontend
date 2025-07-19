import React, { useEffect } from 'react';
import Footer from '../Components/HomePageComponents/Footer';
import { Typography } from '@material-tailwind/react';

import NavBar from '../Components/HomePageComponents/NavBar';


import about01 from '../Assets/about01.png';

const About = () => {
  const data = {
    header: 'Why Choose ISA-F?',
    title: '',
    body: ''  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'>
      <NavBar />
      
      {/* Hero Section */}
      <div className='w-full relative overflow-hidden mb-16'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10'></div>
        <div className='relative z-10 w-auto px-[5rem] sm:px-[9rem] md:px-[12rem] lg:px-[16rem] h-[70px] sm:h-[80px] lg:h-[100px] bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] flex items-center justify-center rounded-[2rem] mb-12 mt-16 shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] animate-fade-in'>
          <Typography
            variant='h1'
            color='white'
            className='text-center text-[28px] sm:text-[33px] lg:text-[40px] tracking-tighter font-bold'
          >
            About Us
          </Typography>
        </div>
      </div>

      {/* Animated Title Section */}
      <div className='w-[90%] flex items-center justify-center relative mb-16 animate-slide-up' style={{animationDelay: '0.2s'}}>
        <div className='w-full max-w-6xl h-auto bg-gradient-to-r from-[#284fce] via-[#1E40AF] to-[#3B82F6] flex items-center justify-center rounded-[3rem] py-6 px-8 shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]'>
          <Typography
            variant='h1'
            color='white'
            className='text-center text-[18px] sm:text-[25px] md:text-[30px] lg:text-[36px] tracking-tight font-bold leading-tight'
          >
            We are Providing Quality Services Here
          </Typography>
        </div>
      </div>
      <div className='w-[80%] h-auto mt-6 lg:mt-10'>
        <div className='flex flex-col items-center px-2 py-1 sm:px-4 sm:py-2 lg:px-10 lg:py-4'>
          <Typography
            variant='h5'
            color='black'
            className='font-thin tracking-wide text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px]'
          >
         USAP is a dedicated community focused on providing help and assistance to Indian students in France. USAP makes students lives easier France so that they can focus on their professional carries and have successful job in France. USAP provides the students with the right guidance and direction, whether it is administrative support, securing scholarships, social integration, or career opportunities. We understand the complexities of adjusting to a new country, and our team is here to ensure you have the necessary resources and advice for a successful journey in France.
          </Typography>
        </div>
      </div>
      {/* Main Content Section */}
      <div className='w-[90%] max-w-7xl h-auto mb-16 animate-slide-up' style={{animationDelay: '0.3s'}}>
        <div className='flex flex-col items-center px-4 py-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20'>
          <div className='max-w-4xl text-center'>
            <Typography
              variant='h3'
              className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6'
            >
              Welcome to USAP
            </Typography>
            <Typography
              variant='h5'
              color='black'
              className='font-light tracking-wide text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-gray-700'
            >
              USAP is a dedicated community focused on providing help and assistance to Indian students in France. USAP makes students lives easier in France so that they can focus on their professional careers and have successful jobs in France. USAP provides students with the right guidance and direction, whether it is administrative support, securing scholarships, social integration, or career opportunities. We understand the complexities of adjusting to a new country, and our team is here to ensure you have the necessary resources and advice for a successful journey in France.
            </Typography>
          </div>
        </div>
      </div>

      {/* Image and Info Cards Section */}
      <div className='flex flex-col 2xl:flex-row items-center justify-between w-[90%] max-w-7xl mb-16 gap-8 2xl:gap-16 animate-slide-up' style={{animationDelay: '0.4s'}}>
        <div className='group relative transform transition-all duration-300 hover:scale-105'>
          <img
            src={about01}
            alt='About USAP'
            className='w-[22rem] sm:w-[25rem] xl:w-[32rem] rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>

        <div className='bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 w-full xl:w-[80%] rounded-3xl p-8 space-y-8 shadow-2xl transform transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]'>
          {/* Mission and Vision Section */}
          <div className='space-y-4 transform transition-all duration-300 hover:translate-x-2'>
            <div className='flex items-center space-x-3'>
              <div className='w-2 h-8 bg-white rounded-full'></div>
              <Typography 
                variant='h5' 
                className='text-white font-bold text-xl md:text-2xl'
              >
                Mission and Vision
              </Typography>
            </div>
            <Typography
              variant='paragraph'
              color='white'
              className='font-light leading-relaxed text-[13px] md:text-[15px] 2xl:text-[17px] pl-5 border-l-2 border-white/30'
            >
              Our mission at USAP is to empower Indian students and professionals in France by providing comprehensive support that simplifies their journey, from administrative support, social integration, to career opportunities. We envision becoming the leading resource for Indian students free of cost. We foster a vibrant community where members can thrive academically and professionally, and seamlessly integrate into French society and culture.
            </Typography>
          </div>

          {/* USAP at a glance Section */}
          <div className='space-y-4 transform transition-all duration-300 hover:translate-x-2'>
            <div className='flex items-center space-x-3'>
              <div className='w-2 h-8 bg-white rounded-full'></div>
              <Typography 
                variant='h5' 
                className='text-white font-bold text-xl md:text-2xl'
              >
                USAP at a Glance
              </Typography>
            </div>
            <Typography
              variant='paragraph'
              color='white'
              className='font-light leading-relaxed text-[13px] md:text-[15px] 2xl:text-[17px] pl-5 border-l-2 border-white/30'
            >
              USAP is your gateway to navigating the vibrant world of student life in France. We bridge the gap between dreams and reality, providing the tools and support you need to succeed.
            </Typography>
          </div>

          {/* Awards Section */}
          <div className='space-y-4 transform transition-all duration-300 hover:translate-x-2'>
            <div className='flex items-center space-x-3'>
              <div className='w-2 h-8 bg-white rounded-full'></div>
              <Typography 
                variant='h5' 
                className='text-white font-bold text-xl md:text-2xl'
              >
                Awards & Recognition
              </Typography>
            </div>
            <Typography
              variant='paragraph'
              color='white'
              className='font-light leading-relaxed text-[13px] md:text-[15px] 2xl:text-[17px] pl-5 border-l-2 border-white/30'
            >
              By giving out awards, USAP motivates students and mentors to make significant contributions in relevant sectors for the advancement of society. We celebrate excellence and inspire continuous growth.
            </Typography>
          </div>
        </div>
      </div>

      {/* Statistics/Features Section */}
    

      {/* Call to Action Section */}
      <div className='w-[90%] max-w-7xl mb-16 animate-slide-up' style={{animationDelay: '0.6s'}}>
        <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center shadow-2xl transform transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]'>
          <Typography
            variant='h3'
            className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4'
          >
            Ready to Start Your Journey?
          </Typography>
          <Typography
            variant='lead'
            className='text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8'
          >
            Join thousands of Indian students who have successfully navigated their academic and professional journey in France with USAP's support.
          </Typography>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button className='px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
              Get Started Today
            </button>
            <button className='px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transform transition-all duration-300 hover:scale-105'>
              Learn More
            </button>
          </div>
        </div>
      </div>

     <Footer />
    </div>
  );
};

export default About;
