import React from 'react';

import Team from '../Components/Team';
import { Typography } from '@material-tailwind/react';
import Footer from '../Components/HomePageComponents/Footer';

// import UnderConstruction from '../Components/UnderConstruction';
import NavBar from '../Components/HomePageComponents/NavBar';
import team1 from '../Assets/svg 1.png';
import team2 from '../Assets/svg 2.png';
import userLogo from '../Assets/userlogo.png';

const TeamPage = () => {
  const advisors = [
    {
      name: 'Xxx Yyy',
      image: userLogo,
      designation: 'Advisor',
    },
    {
      name: 'Xxx Yyy',
      image: userLogo,
      designation: 'Advisor',
    },   {
      name: 'Xxx Yyy',
      image: userLogo,
      designation: 'Advisor',
    },   {
      name: 'Xxx Yyy',
      image: userLogo,
      designation: 'Advisor',
    },
  ];
  const exadvisors = [
    {
      name: '',
      image: '',
      designation: '',
    },
    {
      name: '',
      image: '',
      designation: '',
    },
    {
      name: '',
      image: '',
      designation: '',
    },
  ];
  const operations = [
    {    name: 'Xxx Yyy',image: userLogo, designation: 'President' },

    { name: 'Xxx Yyy', image: userLogo, designation: 'Vice President' },

    {    name: 'Xxx Yyy', image: userLogo, designation: 'Secratery' },
    {  name: 'Xxx Yyy', image: userLogo, designation: 'Treasurer' },
  ];
  const depthead = [
    {
      name: 'Xxx Yyy', image: userLogo,
      designation: 'Technical Head',
    },
    {
      name: 'Xxx Yyy', image: userLogo,
      designation: 'Administrative Support',
    },
    {
      name: 'Xxx Yyy', image: userLogo,
      designation: 'Scholarships',
    },

    {
      name: 'Xxx Yyy', image: userLogo,
      designation: 'Accommodation & Domicile',
    },
    {
      name: 'Xxx Yyy', image: userLogo,
      designation: 'Loan & Financing',
    },
    {
      name: 'Xxx Yyy', image: userLogo,
      designation: 'Daily Life Support',
    },
    {
      name: 'Xxx Yyy', image: userLogo,
      designation: 'Career Guidance & Job Search',
    },
    {
      name: 'Xxx Yyy', image: userLogo,
      designation: 'Public Relation and Media',
    },  {
      name: 'Xxx Yyy', image: userLogo,
      designation: 'Entrepreneurship & Company Creation',
    },
    {
      name: 'Xxx Yyy', image: userLogo,
      designation: 'French Language',
    }
   
  ];
  const executive = [
    {  name: 'Xxx Yyy', image: userLogo, designation: 'Executive Member' },
    {  name: 'Xxx Yyy', image: userLogo, designation: 'Executive Member' },
    {  name: 'Xxx Yyy', image: userLogo, designation: 'Executive Member' },
    {  name: 'Xxx Yyy', image: userLogo, designation: 'Executive Member' },
  ];

  return (
    <div className='flex flex-col items-center w-full h-auto bg-gray-200'>
      <NavBar />
      <div className='w-[90%] flex items-center justify-center relative mb-[6rem]'>
        <img
          src={team2}
          alt='teamlogo'
          className='w-[9rem] sm:w-[11rem] lg:w-[16rem] z-10 absolute top-[2.5rem] sm:top-[2rem] md:top-[1.5rem] lg:top-[1rem] lg:right-[calc(70vw-0rem)] sm:right-[calc(70vw-0rem)] right-[calc(70vw-2rem)]'
        />

        <div className='w-auto px-[2rem] sm:px-[5.5rem] md:px-[10rem] lg:px-[15rem] h-[70px] sm:h-[80px] lg:h-[100px] bg-[#1E40AF] flex items-center justify-center rounded-[2rem] relative top-14'>
          <Typography
            variant='h1'
            color='white'
            className=' text-center text-[25px] sm:text-[30px] lg:text-[40px] tracking-tighter font-bold'
          >
            Meet the People Behind Our Success
          </Typography>
        </div>
        <img
          src={team1}
          alt=''
          className='w-[9rem] sm:w-[11rem] lg:w-[15rem] z-10 absolute top-[2.5rem] sm:top-[2rem] md:top-[1.5rem] lg:top-[1rem] lg:left-[calc(70vw-0rem)] sm:left-[calc(70vw-0rem)] left-[calc(70vw-2rem)]'
        />
      </div>
      <div className='w-[80%] h-auto mb-8 pb-10 rounded-b-3xl  '>
        <div className='flex flex-col items-center justify-center'>
          <Typography
            variant='h3'
            className='flex items-center justify-center mt-4 px-4 bg-[#00639A] text-white py-2 rounded-full font-bold z-10 lg:text-[30px] text-[20px]'
          >
            Advisors
          </Typography>

          <div className=' w-full border-dashed border-[#00639A] border-[8px] h-auto relative -top-7 mb-20 lg:mb-[8rem]'>
            <div className='w-full h-full flex items-center justify-center flex-wrap mt-12 lg:-mb-[9rem] -mb-[7rem] gap-12'>
              {advisors.map((item, i) => (
                <Team key={i} data={item} />
              ))}
            </div>
          </div>

          {/* <Typography
            variant='h3'
            className='flex items-center justify-center mt-4 px-4 bg-[#00639A] text-white py-2 rounded-full font-bold z-10'
          >
            External-Advisor
          </Typography>
          <div className='relative w-full'>
            <div className='absolute -top-7 w-full border-dashed border-[#00639A] border-[8px] h-[13rem]'></div>
          </div>
          <div className='w-full h-full flex items-start justify-center flex-wrap gap-12 -mt-12'>
            {exadvisors.map((item, i) => (
              <Team key={i} data={item} />
            ))}
          </div> */}
          <Typography
            variant='h3'
            className='flex items-center justify-center text-center  mt-4 px-4 bg-[#00639A] text-white py-2 rounded-full font-bold z-10 lg:text-[30px] text-[20px]'
          >
            Operation and Management
          </Typography>

          <div className=' w-full border-dashed border-[#00639A] border-[8px] h-auto relative -top-7 mb-20 lg:mb-[8rem]'>
            <div className='w-full h-full flex items-center justify-center flex-wrap mt-12 lg:-mb-[9rem] -mb-[7rem] gap-12'>
              {operations.map((item, i) => (
                <Team key={i} data={item} />
              ))}
            </div>
          </div>

          <Typography
            variant='h3'
            className='flex items-center justify-center  mt-4 px-4 bg-[#00639A] text-white py-2 rounded-full font-bold z-10 lg:text-[30px] text-[20px]'
          >
            Department Head
          </Typography>

          <div className=' w-full border-dashed border-[#00639A] border-[8px] h-auto relative -top-7 mb-20 lg:mb-[8rem]'>
            {' '}
            <div className='w-full h-full flex items-center justify-center flex-wrap mt-12 lg:-mb-[9rem] -mb-[7rem] gap-12'>
              {depthead.map((item, i) => (
                <Team key={i} data={item} />
              ))}
            </div>
          </div>

          {/* <Typography
            variant='h3'
            className='flex items-center justify-center  mt-4 px-4 bg-[#00639A] text-white py-2 rounded-full font-bold z-10 lg:text-[30px] text-[20px]'
          >
            Executive Members
          </Typography>

          <div className=' w-full border-dashed border-[#00639A] border-[8px] h-auto relative -top-7 mb-20 lg:mb-[8rem]'>
            <div className='w-full h-full flex items-center justify-center flex-wrap mt-12 lg:-mb-[9rem] -mb-[7rem] gap-12'>
              {executive.map((item, i) => (
                <Team key={i} data={item} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
