import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { Button, Typography } from '@material-tailwind/react';
import Footer from '../Components/HomePageComponents/Footer';
import NavBar from '../Components/HomePageComponents/NavBar';
import UnderConstruction from '../Components/UnderConstruction';
import events from '../Assets/events001.png';
const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='flex flex-col bg-gray-100'>
      <NavBar />
      <div className='mb-4'>
        <div className='w-full flex items-center justify-center relative mb-[8rem]'>
          <img
            src={events}
            alt='teamlogo'
            className='w-[15rem] sm:w-[18rem] lg:w-[22rem] z-10 absolute top-[2.5rem] sm:top-[2rem] md:top-[1.5rem] lg:top-[1rem] lg:left-[calc(50vw-25rem)] sm:left-[calc(50vw-20rem)] left-[calc(50vw-14rem)]'
          />
          <div className='w-auto px-[7rem] sm:px-[12rem] lg:px-[16rem] h-[70px] sm:h-[80px] lg:h-[90px] bg-[#1E40AF] flex items-center justify-center rounded-[2rem] relative top-16'>
            <Typography
              variant='h1'
              color='white'
              className=' text-center text-[30px] sm:text-[35px] lg:text-[40px] tracking-tighter font-bold'
            >
              Events
            </Typography>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        {' '}
        <div className='grid grid-cols-1 w-[95%] xl:w-[80%] h-auto gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col items-center '>
            {' '}
            <div className='bg-events01-image bg-cover h-[14rem] w-full group'>
              <p className='bg-black bg-opacity-60 h-0 text-white group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer'>
                <span className='hidden group-hover:block p-1 transition-all delay-200'>
                  A hackathon focused on agriculture and technology, where
                  participants are challenged to develop innovative solutions to
                  address real-world agricultural problems. Eligibility is
                  typically open to students and professionals with an interest
                  in agriculture and technology.
                </span>
              </p>
            </div>
            <Typography
              color='white'
              variant='h6'
              className='bg-black bg-opacity-70 w-[100%] flex items-center justify-center py-1 px-2 relative bottom-[2.1rem]'
            >
              Agri-Hackathon
            </Typography>
          </div>
          <div className='flex flex-col items-center'>
            {' '}
            <div className='bg-events02-image bg-cover h-[14rem] w-full group'>
              <p className='bg-black bg-opacity-60 h-0 text-white group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer'>
                <span className='hidden group-hover:block p-1 transition-all delay-200'>
                  A competition that encourages members to design and implement
                  sustainable farming practices on a small scale. Participants
                  may be evaluated based on the ecological and economic
                  sustainability of their farming methods.
                </span>
              </p>
            </div>
            <Typography
              color='white'
              variant='h6'
              className='bg-black bg-opacity-70 w-[100%] flex items-center justify-center py-1 px-2 relative bottom-[2.1rem]'
            >
              Sustainable Farming Challenge
            </Typography>
          </div>
          <div className='flex flex-col items-center'>
            {' '}
            <div className='bg-events03-image bg-cover h-[14rem] w-full group'>
              <p className='bg-black bg-opacity-60 h-0 text-white group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer'>
                <span className='hidden group-hover:block p-1 transition-all delay-200'>
                  A platform for members to present their research findings and
                  projects related to agriculture. The symposium may involve
                  presentations, poster sessions, and expert evaluations. All
                  members engaged in agricultural research are eligible to
                  participate.
                </span>
              </p>
            </div>
            <Typography
              color='white'
              variant='h6'
              className='bg-black bg-opacity-70 w-[100%] flex items-center justify-center py-1 px-2 relative bottom-[2.1rem]'
            >
              Research Symposium
            </Typography>
          </div>

          <div className='flex flex-col items-center'>
            {' '}
            <div className='bg-team02-image bg-cover h-[14rem] w-full group'>
              <p className='bg-black bg-opacity-60 h-0 text-white group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer'>
                <span className='hidden group-hover:block p-1 transition-all delay-200'>
                  An event that allows members with innovative agricultural
                  business ideas to pitch their ventures to a panel of judges,
                  investors, and industry experts. The eligibility criteria may
                  include the viability, scalability, and sustainability of the
                  proposed business.
                </span>
              </p>
            </div>
            <Typography
              color='white'
              variant='h6'
              className='bg-black bg-opacity-70 w-[100%] flex items-center justify-center py-1 px-2 relative bottom-[2.1rem]'
            >
              Agripreneurship Pitch Competition
            </Typography>
          </div>
          <div className='flex flex-col items-center'>
            {' '}
            <div className='bg-gallery-image bg-cover h-[14rem] w-full group'>
              <p className='bg-black bg-opacity-60 h-0 text-white group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer'>
                <span className='hidden group-hover:block p-1 transition-all delay-200'>
                  A showcase of agricultural technologies and innovations
                  developed by members. Participants may demonstrate their
                  prototypes or products, and eligibility is typically open to
                  members who have developed relevant technologies.
                </span>
              </p>
            </div>
            <Typography
              color='white'
              variant='h6'
              className='bg-black bg-opacity-70 w-[100%] flex items-center justify-center py-1 px-2 relative bottom-[2.1rem]'
            >
              Agritech Innovation Showcase
            </Typography>
          </div>
          <div className='flex flex-col items-center'>
            {' '}
            <div className='bg-about-image bg-cover h-[14rem] w-full group'>
              <p className='bg-black bg-opacity-60 h-0 text-white group-hover:h-full transition-all duration-500 ease-in-out cursor-pointer'>
                <span className='hidden group-hover:block p-1 transition-all delay-200'>
                  A photography contest to capture the essence of sustainable
                  agriculture and its impact on communities. Members with an
                  interest in photography and agriculture are eligible to
                  participate.
                </span>
              </p>
            </div>
            <Typography
              color='white'
              variant='h6'
              className='bg-black bg-opacity-70 w-[100%] flex items-center justify-center py-1 px-2 relative bottom-[2.1rem]'
            >
              Sustainable Agro-Photography Contest
            </Typography>
          </div>
        </div>
      </div>
      {/* <div className='bg-[#033401] p-4 w-[80%]'>
        <div className='w-[100%] h-auto bg-events01-image bg-contain flex items-center justify-start mb-4'>
          <div className='bg-[#85b968] w-[55%] h-[580px]'>
            <Typography
              variant='h1'
              className='text-[2rem] md:text-[3rem] lg:text-[4rem] px-10 py-10 tracking-tight mb-4'
            >
              Agri-Hackathon
            </Typography>
            <Typography className='px-12 -mt-6 text-[1rem] tracking-widest'>
              A hackathon focused on agriculture and technology, where
              participants are challenged to develop innovative solutions to
              address real-world agricultural problems. Eligibility is typically
              open to students and professionals with an interest in agriculture
              and technology.
            </Typography>
            <Button className='px-12 mx-12 mt-20 bg-black'>
              BOOK NOW FOR EARLY BIRD PRICES
            </Button>
          </div>
        </div>
        <div className='w-[100%] h-auto bg-events01-image bg-contain flex items-center justify-end mb-4'>
          <div className='bg-[#85b968] w-[55%] h-[580px]'>
            <Typography
              variant='h1'
              className='text-[2rem] md:text-[3rem] lg:text-[4rem] px-10 py-10 tracking-tight'
            >
              Sustainable Farming Challenge
            </Typography>
            <Typography className='px-12 -mt-6 text-[1rem] tracking-widest'>
              A competition that encourages members to design and implement
              sustainable farming practices on a small scale. Participants may
              be evaluated based on the ecological and economic sustainability
              of their farming methods.
            </Typography>
            <Button className='px-12 mx-12 mt-20 bg-black'>
              BOOK NOW FOR EARLY BIRD PRICES
            </Button>
          </div>
        </div>
        <div className='w-[100%] h-auto bg-events03-image bg-cover  flex items-center justify-start mb-4'>
          <div className='bg-[#85b968] w-[55%] h-[580px]'>
            <Typography
              variant='h1'
              className='text-[2rem] md:text-[3rem] lg:text-[4rem] px-10 py-10 tracking-tight'
            >
              Research Symposium
            </Typography>
            <Typography className='px-12 -mt-6 text-[1rem] tracking-widest'>
              A platform for members to present their research findings and
              projects related to agriculture. The symposium may involve
              presentations, poster sessions, and expert evaluations. All
              members engaged in agricultural research are eligible to
              participate.
            </Typography>
            <Button className='px-12 mx-12 mt-20 bg-black'>
              BOOK NOW FOR EARLY BIRD PRICES
            </Button>
          </div>
        </div>
        <div className='w-[100%] h-auto bg-events02-image bg-contain  flex items-center justify-end mb-4'>
          <div className='bg-[#85b968] w-[55%] h-[580px]'>
            <Typography
              variant='h1'
              className='text-[2rem] md:text-[3rem] lg:text-[4rem] px-10 py-10 tracking-tight'
            >
              Agripreneurship Pitch Competition
            </Typography>
            <Typography className='px-12 -mt-6 text-[1rem] tracking-widest'>
              An event that allows members with innovative agricultural business
              ideas to pitch their ventures to a panel of judges, investors, and
              industry experts. The eligibility criteria may include the
              viability, scalability, and sustainability of the proposed
              business.
            </Typography>
            <Button className='px-12 mx-12 mt-20 bg-black'>
              BOOK NOW FOR EARLY BIRD PRICES
            </Button>
          </div>
        </div>
        <div className='w-[100%] h-auto bg-events02-image bg-contain  flex items-center justify-start mb-4'>
          <div className='bg-[#85b968] w-[55%] h-[580px]'>
            <Typography
              variant='h1'
              className='text-[2rem] md:text-[3rem] lg:text-[4rem] px-10 py-10 tracking-tight'
            >
              Agritech Innovation Showcase
            </Typography>
            <Typography className='px-12 -mt-6 text-[1rem] tracking-widest'>
              A showcase of agricultural technologies and innovations developed
              by members. Participants may demonstrate their prototypes or
              products, and eligibility is typically open to members who have
              developed relevant technologies.
            </Typography>
            <Button className='px-12 mx-12 mt-20 bg-black'>
              BOOK NOW FOR EARLY BIRD PRICES
            </Button>
          </div>
        </div>
        <div className='w-[100%] h-auto bg-local-image bg-cover  flex items-center justify-end mb-4'>
          <div className='bg-[#85b968] w-[55%] h-[580px]'>
            <Typography
              variant='h1'
              className='text-[2rem] md:text-[3rem] lg:text-[4rem] px-10 py-10 tracking-tight'
            >
              Sustainable Agro-Photography Contest
            </Typography>
            <Typography className='px-12 -mt-10 text-[1rem] tracking-widest'>
              A photography contest to capture the essence of sustainable
              agriculture and its impact on communities. Members with an
              interest in photography and agriculture are eligible to
              participate.
            </Typography>
            <Button className='px-12 mx-12 mt-10 bg-black'>
              BOOK NOW FOR EARLY BIRD PRICES
            </Button>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Events;
