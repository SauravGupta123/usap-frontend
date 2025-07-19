import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { Button, Typography } from '@material-tailwind/react';
import Footer from '../Components/HomePageComponents/Footer';
import NavBar from '../Components/HomePageComponents/NavBar';

import events from '../Assets/events001.png';
const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'>
      <NavBar />
      <div className='mb-8'>
        <div className='w-full flex items-center justify-center relative mb-[8rem]'>
          <img
            src={events}
            alt='teamlogo'
            className='w-[15rem] sm:w-[18rem] lg:w-[22rem] z-10 absolute top-[2.5rem] sm:top-[2rem] md:top-[1.5rem] lg:top-[1rem] lg:left-[calc(50vw-25rem)] sm:left-[calc(50vw-20rem)] left-[calc(50vw-14rem)] transform transition-all duration-1000 hover:scale-110 animate-bounce-slow'
          />
          <div className='w-auto px-[7rem] sm:px-[12rem] lg:px-[16rem] h-[70px] sm:h-[80px] lg:h-[90px] bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] flex items-center justify-center rounded-[2rem] relative top-16 shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:scale-105'>
            <Typography
              variant='h1'
              color='white'
              className='text-center text-[30px] sm:text-[35px] lg:text-[40px] tracking-tighter font-bold animate-fade-in'
            >
              Events
            </Typography>
          </div>
        </div>
      </div>
      
      {/* Section Title */}
      <div className='text-center mb-12 px-4'>
        <Typography
          variant='h2'
          className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4'
        >
          Upcoming Events
        </Typography>
        <Typography
          variant='lead'
          className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'
        >
          Discover exciting educational opportunities and engage with fellow learners through our diverse range of events designed to enhance your academic journey.
        </Typography>
      </div>

      <div className='flex items-center justify-center px-4 py-8'>
        <div className='grid grid-cols-1 w-full max-w-7xl h-auto gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='group relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up' style={{animationDelay: '0.1s'}}>
            <div className='relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='bg-events01-image bg-cover bg-center h-[16rem] w-full relative'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300'></div>
                <div className='absolute inset-0 flex items-center justify-center p-6'>
                  <div className='text-white text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-100'>
                    <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20'>
                      <p className='text-sm leading-relaxed'>
                        An educational innovation challenge where students and 
                        professionals develop creative solutions for modern learning
                        challenges. Participants work on projects related to study
                        abroad preparation, academic success strategies, and 
                        educational technology solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-transparent p-4'>
                  <Typography
                    color='white'
                    variant='h6'
                    className='text-lg font-bold text-center drop-shadow-lg'
                  >
                    EduTech Innovation Challenge
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className='group relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up' style={{animationDelay: '0.2s'}}>
            <div className='relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='bg-events02-image bg-cover bg-center h-[16rem] w-full relative'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300'></div>
                <div className='absolute inset-0 flex items-center justify-center p-6'>
                  <div className='text-white text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-100'>
                    <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20'>
                      <p className='text-sm leading-relaxed'>
                        A comprehensive workshop series focusing on sustainable
                        education practices and academic excellence. Participants
                        learn about effective study techniques, scholarship
                        applications, and building sustainable academic careers
                        while maintaining work-life balance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent p-4'>
                  <Typography
                    color='white'
                    variant='h6'
                    className='text-lg font-bold text-center drop-shadow-lg'
                  >
                    Sustainable Learning Excellence Workshop
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className='group relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up' style={{animationDelay: '0.3s'}}>
            <div className='relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='bg-events03-image bg-cover bg-center h-[16rem] w-full relative'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300'></div>
                <div className='absolute inset-0 flex items-center justify-center p-6'>
                  <div className='text-white text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-100'>
                    <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20'>
                      <p className='text-sm leading-relaxed'>
                        A platform for students and education professionals to
                        present their research findings and academic projects.
                        The symposium features presentations on study abroad
                        experiences, academic research methodologies, and
                        educational innovation. Open to all members engaged in
                        educational research and development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 to-transparent p-4'>
                  <Typography
                    color='white'
                    variant='h6'
                    className='text-lg font-bold text-center drop-shadow-lg'
                  >
                    Academic Research Symposium
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div className='group relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up' style={{animationDelay: '0.4s'}}>
            <div className='relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='bg-team02-image bg-cover bg-center h-[16rem] w-full relative'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300'></div>
                <div className='absolute inset-0 flex items-center justify-center p-6'>
                  <div className='text-white text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-100'>
                    <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20'>
                      <p className='text-sm leading-relaxed'>
                        An exciting opportunity for students and education
                        professionals to pitch innovative educational business
                        ideas to a panel of industry experts, investors, and
                        education leaders. Focus areas include EdTech startups,
                        tutoring services, educational consultancy, and learning
                        platform development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-600 to-transparent p-4'>
                  <Typography
                    color='white'
                    variant='h6'
                    className='text-lg font-bold text-center drop-shadow-lg'
                  >
                    Education Startup Pitch Competition
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className='group relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up' style={{animationDelay: '0.5s'}}>
            <div className='relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='bg-gallery-image bg-cover bg-center h-[16rem] w-full relative'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300'></div>
                <div className='absolute inset-0 flex items-center justify-center p-6'>
                  <div className='text-white text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-100'>
                    <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20'>
                      <p className='text-sm leading-relaxed'>
                        A showcase of cutting-edge educational technologies and
                        innovative learning solutions developed by students and
                        education professionals. Participants demonstrate their
                        educational apps, learning platforms, study tools, and
                        consultancy methodologies to enhance the learning experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-600 to-transparent p-4'>
                  <Typography
                    color='white'
                    variant='h6'
                    className='text-lg font-bold text-center drop-shadow-lg'
                  >
                    EdTech Innovation Showcase
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className='group relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up' style={{animationDelay: '0.6s'}}>
            <div className='relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
              <div className='bg-about-image bg-cover bg-center h-[16rem] w-full relative'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300'></div>
                <div className='absolute inset-0 flex items-center justify-center p-6'>
                  <div className='text-white text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-100'>
                    <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20'>
                      <p className='text-sm leading-relaxed'>
                        A creative photography contest capturing the essence of
                        educational journeys, study abroad experiences, and the
                        transformative power of learning. Participants showcase
                        moments of academic achievement, cultural exchange, and
                        educational growth through their photography skills.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-600 to-transparent p-4'>
                  <Typography
                    color='white'
                    variant='h6'
                    className='text-lg font-bold text-center drop-shadow-lg'
                  >
                    Educational Journey Photography Contest
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default Events;
