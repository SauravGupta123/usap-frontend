import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/HomePageComponents/Footer';
import { Typography } from '@material-tailwind/react';
import Accordian from '../Components/Accordian';
import NavBar from '../Components/HomePageComponents/NavBar';
import UnderConstruction from '../Components/UnderConstruction';
import bottle from '../Assets/bottle.png';
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
    <div className='flex flex-col items-center w-full'>
      <NavBar />
      {/* <div className='h-auto w-[80%]'>
        <div className='h-full w-full'>
          <div className='text-center bg-about-image bg-cover bg-no-repeat w-full h-auto flex items-center justify-around'>
            <div className='relative -top-20 right-10 bg-[#E3EEEF] w-80 h-auto py-2 flex items-center justify-center px-4 bg-opacity-40 rounded-md'>
              <Typography variant='h2' color='black' className='px-4 py-2'>
                About
              </Typography>
            </div>

            <div className='relative left-10 top-[6rem] pb-[20rem]'>
              <div className=''>
                <Accordian data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>  */}
      <div className='w-auto px-[5rem] sm:px-[9rem] md:px-[12rem] lg:px-[16rem] h-[70px] sm:h-[80px] lg:h-[100px] bg-[#1E40AF] flex items-center justify-center rounded-[2rem] mb-12 relative top-16'>
        <Typography
          variant='h1'
          color='white'
          className=' text-center text-[28px] sm:text-[33px] lg:text-[40px] tracking-tighter font-bold'
        >
          About Us
        </Typography>
      </div>
      <div className='w-[90%] flex items-center justify-center relative mb-10'>
        {/* <img
          src={bottle}
          alt='teamlogo'
          className='w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[22rem] z-10 absolute -top-[4rem] sm:-top-[5.5rem] md:-top-[7rem] lg:-top-[9rem] xl:left-[calc(50vw-42rem)] lg:left-[calc(50vw-40rem)] md:left-[calc(50vw-31.5rem)] sm:left-[calc(50vw-25rem)] left-[calc(50vw-20rem)]'
        /> */}
        <div className='w-[35rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] xl:w-[65rem] h-[70px] sm:h-[70px] lg:h-[80px] bg-[#284fce] flex items-center justify-center rounded-[3rem] relative top-14'>
          <Typography
            variant='h1'
            color='white'
            className='text-center text-[18px] sm:text-[25px] md:text-[33px] lg:text-[40px] tracking-tighter font-bold ml-[calc(50vw-13rem)] sm:ml-8 md:marker:l-4 lg:ml-0 '
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
      <div className='flex flex-col 2xl:flex-row items-center justify-between w-[80%] mb-10 gap-6 2xl:gap-14'>
        <img
          src={about01}
          alt='iot'
          className='w-[22rem] sm:w-[25rem] xl:w-[32rem] rounded-lg'
        />
   <div className='bg-custom-gradient w-full xl:w-[80%] rounded-3xl p-8 space-y-6'>
  {/* Mission and Vision Section */}
  <div className='space-y-3'>
    <Typography 
      variant='h5' 
      className='text-white font-semibold text-xl md:text-2xl border-b border-white/20 pb-2'
    >
      Mission and Vision
    </Typography>
    <Typography
      variant='paragraph'
      color='white'
      className='font-light leading-relaxed text-[12px] md:text-[14px] 2xl:text-[16px]'
    >
      Our mission at USAP is to empower Indian students and professionals in France by providing comprehensive support that simplifies their journey, from administrative support, social integration, to career opportunities. We envision becoming the leading resource for Indian students free of cost. We fostering a vibrant community where members can thrive academically and professionally, and seamlessly integrate into French society and culture.
    </Typography>
  </div>

  {/* USAP at a glance Section */}
  <div className='space-y-3'>
    <Typography 
      variant='h5' 
      className='text-white font-semibold text-xl md:text-2xl border-b border-white/20 pb-2'
    >
      USAP at a glance
    </Typography>
    <Typography
      variant='paragraph'
      color='white'
      className='font-light leading-relaxed text-[12px] md:text-[14px] 2xl:text-[16px]'
    >
      USAP is your gateway to navigating the vibrant world of student life in France
    </Typography>
  </div>

  {/* Awards Section */}
  <div className='space-y-3'>
    <Typography 
      variant='h5' 
      className='text-white font-semibold text-xl md:text-2xl border-b border-white/20 pb-2'
    >
      Awards
    </Typography>
    <Typography
      variant='paragraph'
      color='white'
      className='font-light leading-relaxed text-[12px] md:text-[14px] 2xl:text-[16px]'
    >
      By giving out awards, USAP motivates students and mentors to make significant contributions in relevant sectors for the advancement of society.
    </Typography>
  </div>
</div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
