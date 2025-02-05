import { Button } from '@material-tailwind/react';
import React from 'react';
import ChapterCard from '../../Pages/ChapterCard';
import cuimg from '../../Assets/cuimg.png';
import { NavLink } from 'react-router-dom';

const Comp5 = () => {
  return (
    <div>
      {' '}
      <div className=' flex justify-center py-8 bg-[#ffffff] mt-2 '>
        <div className='bg-[#DC222C] flex items-center justify-center text-center px-6 py-4 rounded-full'>
          <p className='text-white font-poppins font-medium text-xl Laptop-lg:text-4xl'>
            Our France Research Experts
          </p>
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center py-4 bg-[#ffffff]'>
        <div className='w-[95%] flex flex-col Laptop-lg:flex-row items-center justify-around space-y-6 Laptop-lg:space-y-0'>
          <div className='bg-[#3052c3] w-full Laptop-lg:w-[25%] h-auto Laptop-lg:h-[450px] rounded-[32px] flex flex-col items-center justify-center space-y-4 p-4'>
            <div className='rounded-full border-[6px] border-[#B88027] w-[120px] h-[120px] overflow-hidden text-black'>
              <img
                className='w-full h-full'
                src='/GlobalResearchExpertImages/kartikey.png'
                alt='kartikey'
              />
            </div>
            <p className='text-white font-poppins font-medium text-xl'>
              Kartikey Pandey
            </p>
            <p className='text-white font-poppins font-medium text-lg'>
              PhD Candidate
            </p>
            <p className='text-white font-poppins font-medium text-lg text-center'>
              Nano Science / Material Chemistry
            </p>
            <div className='flex flex-row justify-around  items-center'>
              <img src='/GlobalResearchExpertImages/France.svg' alt='France' />
              <p className='text-white font-poppins font-medium text-lg'>
                France
              </p>
            </div>
            <div className='flex flex-row justify-between  items-center space-x-6'>
              <img src='/GlobalResearchExpertImages/Mail.svg' alt='mail' />
              <a
                href='http://www.linkedin.com/in/kartikey-pandey-b00a4216b'
                target='_blank'
              >
                <img
                  src='/GlobalResearchExpertImages/linkedin.svg'
                  alt='linkedin'
                />
              </a>
            </div>
          </div>
          <div className='bg-[#3052c3] w-full Laptop-lg:w-[25%] h-auto Laptop-lg:h-[450px] rounded-[32px] flex flex-col items-center justify-center space-y-4 p-4'>
            <div className='rounded-full border-[6px] border-[#B88027] w-[120px] h-[120px] overflow-hidden text-black'>
              <img
                className='w-full h-full'
                src='/GlobalResearchExpertImages/urcel.jpg'
                alt='urcel'
              />
            </div>
            <p className='text-white font-poppins font-medium text-xl'>
              Urcel Kalenga
            </p>
            <p className='text-white font-poppins font-medium text-lg'>
              PostDoc
            </p>
            <p className='text-white font-poppins font-medium text-lg text-center'>
              GIS and remote sensing
            </p>
            <div className='flex flex-row justify-around  items-center'>
              <img src='/GlobalResearchExpertImages/France.svg' alt='France' />
              <p className='text-white font-poppins font-medium text-lg'>
                France
              </p>
            </div>
            <div className='flex flex-row justify-between  items-center space-x-6'>
              <img src='/GlobalResearchExpertImages/Mail.svg' alt='mail' />
              <a
                href='https://www.linkedin.com/in/urcel-kalenga-793467b5/'
                target='_blank'
              >
                <img
                  src='/GlobalResearchExpertImages/linkedin.svg'
                  alt='linkedin'
                />
              </a>
            </div>
          </div>
          <div className='bg-[#3052c3] w-full Laptop-lg:w-[25%] h-auto Laptop-lg:h-[450px] rounded-[32px] flex flex-col items-center justify-center space-y-2 p-4'>
            <div className='rounded-full border-[6px] border-[#B88027] w-[120px] h-[120px] overflow-hidden text-black'>
              <img
                className='w-full h-full'
                src='/GlobalResearchExpertImages/Mehtab.jpg'
                alt='mehtab'
              />
            </div>
            <p className='text-white font-poppins font-medium text-xl'>
              Mehtab Alam SYED
            </p>
            <p className='text-white font-poppins font-medium text-lg'>
              PhD Student
            </p>
            <p className='text-wh font-poppins font-medium text-lg text-center'>
              Epidemiology (One Health), Text Mining, NLP, Information Retrieval
            </p>
            <div className='flex flex-row justify-around  items-center'>
              <img src='/GlobalResearchExpertImages/France.svg' alt='France' />
              <p className='text-white font-poppins font-medium text-lg'>
                France
              </p>
            </div>
            <div className='flex flex-row justify-between  items-center space-x-6'>
              <img src='/GlobalResearchExpertImages/Mail.svg' alt='mail' />
              <a
                href='https://www.linkedin.com/in/syed-mehtab-alam-b4564a30/'
                target='_blank'
              >
                <img
                  src='/GlobalResearchExpertImages/linkedin.svg'
                  alt='linkedin'
                />
              </a>
            </div>
          </div>
        </div>
        <NavLink to={'/experts'} className='pb-4'>
          {' '}
          <Button className='mt-6 h-auto w-[100px] sm:h-[55px] sm:w-[160px] Tablet:w-[180px] rounded-[40px] bg-[#051731] text-[#F8F8F8] font-poppins font-medium text-lg Tablet:text-xl'>
            Read More
          </Button>
        </NavLink>
      </div>
      <div className=' flex justify-center py-8 bg-[#ffffff]'>
        <div className='bg-[#DC222C] flex items-center justify-center text-center px-6 py-4 rounded-full'>
          <p className='text-white font-poppins font-medium text-xl Laptop-lg:text-4xl'>
            Our Connected Universities and Colleges
          </p>
        </div>
      </div>


      <div className='w-full flex flex-col items-center justify-center py-8 bg-[#ffffff]'>
        <div className='w-[80%] flex items-center justify-between flex-wrap md:flex-nowrap gap-4'>
          <ChapterCard title={'Chandigarh University'} imageUrl={cuimg} />
          <ChapterCard title={'Chandigarh University'} imageUrl={cuimg} />
          <ChapterCard title={'Chandigarh University'} imageUrl={cuimg} />
        </div>
        <NavLink to={'/chapter'} className='pt-4'>
          {' '}
          <Button className='mt-6 h-auto w-[100px] sm:h-[55px] sm:w-[160px] Tablet:w-[180px] rounded-[40px] bg-[#051731] text-[#F8F8F8] font-poppins font-medium text-lg Tablet:text-xl'>
            Read More
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Comp5;
