import React from 'react';
import Header from '../Components/Header';
import banner from '../Assets/researchbanner.png';
import { Typography } from '@material-tailwind/react';
import marketimg from '../Assets/market-analysis 1.png';
import researchimg1 from '../Assets/research1.png';
import researchimg2 from '../Assets/research 2.png';
import researchimg3 from '../Assets/analytics 1.png';
import iotimg from '../Assets/iotimg.png';
import highlights01 from '../Assets/highlights01.png';
import highlights02 from '../Assets/highlights02.png';
import highlights03 from '../Assets/highlights03.png';
import droneimg from '../Assets/droneimg.png';
import news01 from '../Assets/news01.png';
import news02 from '../Assets/news02.png';
import news03 from '../Assets/news03.png';
import journal from '../Assets/journal01.png';
import { Link } from 'react-router-dom';
import research01 from '../Assets/research01.png';
import research02 from '../Assets/research02.png';
import funding01 from '../Assets/funding01.png';
import Footer from '../Components/Footer';
const ResearchInnovation = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      <div className='w-[80%] mb-10'>
        <div className=''>
          <img src={banner} alt='image1' className='object-cover' />
        </div>
        <Typography
          variant='h4'
          className='bg-[#D9D9D9] w-[35rem] rounded-lg h-auto px-4 py-2 flex items-center justify-center font-thin relative -top-14 left-2 drop-shadow-2xl'
        >
          EXPLORE RESEARCH AND INNOVATION
        </Typography>
        <div className='w-full flex items-center justify-around -ml-7'>
          <Typography
            variant='h5'
            className='bg-[#5BEBE3] w-[25rem] rounded-lg h-auto px-4 py-2 flex items-center justify-center ml-2 drop-shadow-2xl -mt-4'
          >
            We invest in research and innovation to enrich lives, drive economic
          growth, and create jobs and high-quality public services acpross the
          USAP. We are transforming tomorrow together.
          </Typography>
          <img src={marketimg} alt='image1' className='object-contain' />
          <img src={researchimg1} alt='image1' className='object-cover' />
          <img src={researchimg2} alt='image1' className='object-cover' />
          <img src={researchimg3} alt='image1' className='object-cover' />
        </div>
        <Typography
          variant='h4'
          className='bg-[#85b968] hover:underline rounded-lg cursor-pointer w-[25rem] h-auto px-4 py-2 flex items-center justify-center font-thin text-white my-4 mx-2'
        >
          HIGHLIGHTS
        </Typography>
        <div className='flex item-center justify-around '>
          <div className='flex flex-col'>
            <img src={highlights01} alt='image1' className='object-cover' />
            <Link to='https://nexusrobotics.ca/'>
              <Typography variant='h5' className='underline w-[300px] my-1'>
                Nexus Robotics develops Robotic Weeders
              </Typography>
            </Link>
          </div>
          <div className='flex flex-col'>
            <img src={highlights02} alt='image1' className='object-cover' />
            <Link to='https://arvaintelligence.com/'>
              <Typography variant='h5' className='underline w-[300px] my-1'>
                Arva Intelligence provides AI-powered Crop Planning
              </Typography>
            </Link>
          </div>
          <div className='flex flex-col'>
            <img src={highlights03} alt='image1' className='object-cover' />
            <Link to='https://www.equinoxsdrones.com/'>
              <Typography variant='h5' className='underline w-[300px] my-1'>
                Equinox’s Drones offers Drone Solutions for Farmers
              </Typography>
            </Link>
          </div>
        </div>
        <Typography
          variant='h4'
          className='bg-[#85b968] hover:underline rounded-lg cursor-pointer w-[25rem] h-auto px-4 py-2 flex items-center justify-center font-thin text-white my-4 mx-2'
        >
          JOURNAL AND PUBLICATIONS
        </Typography>
        <div className='flex item-center justify-between'>
          <div className='flex flex-col'>
            <img src={journal} alt='image1' className='object-cover' />
            <Typography
              variant='h4'
              className='bg-[#F8FC31] mt-2 px-4 py-2 rounded-lg'
            >
              Coming Soon....
            </Typography>
          </div>

          <div className='w-[20rem] h-[20rem] bg-[#DABABA] relative -top-4 flex flex-col items-center '>
            <div className='flex flex-col items-start justify-start mx-4'>
              <div className='bg-[#D9D9D9] w-full p-4 mt-8 font-semibold text-lg'>
                Subscribe to USAP emails
              </div>
              <div className='bg-[#D9D9D9] w-full p-4'>
                Sign up for news, views, events and funding alerts.
              </div>
              <form className='py-4 flex flex-col'>
                <input
                  type='email'
                  placeholder='Enter email address'
                  className='bg-[#D9D9D9] placeholder:text-black px-3 py-2 border-none outline-none w-[15rem]'
                />
              </form>
              <button className='bg-[#5493F2] px-4 py-2 text-white w-[10rem]'>
                Subscribe
              </button>
            </div>
            <Link
              to='https://blog.tech-land.in/sustainable-farming-by-investing-and-using-digital-land-technology/'
              target='_blank'
            >
              {' '}
              <Typography
                variant='h4'
                className='bg-[#85b968] w-auto h-auto px-4 py-2 rounded-lg flex items-center justify-center font-thin text-white mt-14 -ml-[8rem]'
              >
                Blog
              </Typography>
            </Link>
          </div>
        </div>
        <Typography
          variant='h4'
          className='bg-[#85b968] hover:underline rounded-lg cursor-pointer w-[15rem] h-auto px-4 py-2 flex items-center justify-center font-thin text-white my-4 mx-2'
        >
          NEWS
        </Typography>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <img src={news01} alt='image1' className='object-cover w-80' />
            <Link
              to='https://economictimes.indiatimes.com/news/economy/agriculture/higher-educational-institutes-create-agri-consortium/articleshow/103983465.cms
'
            >
              <Typography variant='h6' className='underline w-[300px] my-1'>
                Higher educational institutes create ‘Agri-Consortium
              </Typography>
            </Link>

            <span className='text-gray-500'>22 September 2023</span>
          </div>
          <div className='flex flex-col'>
            <img src={news02} alt='image1' className='object-cover w-80' />
            <Link to='https://economictimes.indiatimes.com/news/economy/agriculture/undp-and-nabard-sign-mou-to-co-create-data-driven-innovations-in-agriculture/articleshow/103602232.cms'>
              <Typography variant='h6' className='underline w-[320px] my-1'>
                UNDP and NABARD sign MoU to co-create data-driven innovations in
                agriculture
              </Typography>
            </Link>

            <span className='text-gray-500'>24 September 2023</span>
          </div>
          <div className='flex flex-col'>
            <img
              src={news03}
              alt='image1'
              className='object-cover w-80 relative -top-[3.2rem]'
            />
            <Link
              to='https://blog.tech-land.in/sustainable-farming-by-investing-and-using-digital-land-technology/'
              target='_blank'
            >
              <Typography
                variant='h6'
                className='underline w-[320px] relative -top-[3.2rem] my-1'
              >
                Sustainable Farming By Investing In Digital Farming And Using
                Digital Land Technology.
              </Typography>
            </Link>
          </div>
        </div>
        <Typography
          variant='h4'
          className='bg-[#85b968] hover:underline rounded-lg cursor-pointer w-[20rem] h-auto px-4 py-2 flex items-center justify-center font-thin text-white mb-4 mx-2'
        >
          {`VIEW ALL NEWS >`}
        </Typography>
        <div className='w-full h-80 bg-[#85b968] rounded-xl flex flex-col mx-2  gap-10 px-20 pt-10'>
          <Typography variant='h2' color='white'>
            WHO WE ARE?
          </Typography>
          <Typography variant='h4' color='white' className='font-thin'>
          USAP aims to enhance farming efficiency and productivity through
            research and development initiatives. By promoting collaboration and
            knowledge-sharing, ISA-F strives to create a platform for
            agricultural innovation and positive environmental impact. Join ISA-F
            in its mission to transform agriculture for a more sustainable
            future.
          </Typography>
        </div>
        <Typography
          variant='h4'
          className='bg-[#85b968] rounded-lg hover:underline cursor-pointer w-[15rem] h-auto px-4 py-2 flex items-center justify-center font-thin text-white my-4 mx-2'
        >
          OUR INNOVATION
        </Typography>
        <div className='flex items-start justify-between w-[90%]'>
          <div className='flex flex-col items-center justify-center'>
            <Typography
              variant='h4'
              className='bg-[#ABFFF5] w-[30rem] h-auto px-4 py-2 flex items-center rounded-lg justify-center my-4 mx-2'
            >
              Iot in Agriculture (SN KIT)
            </Typography>
            <img
              src={iotimg}
              alt='iot'
              className='w-[25rem] object-cover rounded-lg'
            />
            <Typography
              variant='h4'
              className='underline w-[30rem] h-auto px-4 py-2 my-2 mx-2 flex items-center justify-center'
            >
              SN SILOS AGRICULTURE KIT
            </Typography>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Typography
              variant='h4'
              className='bg-[#ABFFF5] w-[30rem] h-auto px-4 py-2 flex items-center justify-center rounded-lg my-4 mx-2'
            >
              Robotics and drones in Agriculture
            </Typography>
            <img
              src={droneimg}
              alt='iot'
              className='w-[30rem] object-cover rounded-lg'
            />
            <Typography
              variant='h4'
              className='underline w-[30rem] h-auto px-4 py-2 my-2 mx-2'
            >
              SN SILOS AGRICULTURE DRONE
            </Typography>
          </div>
        </div>
        <Typography
          variant='h4'
          className='bg-[#85b968] hover:underline rounded-lg cursor-pointer w-[30rem] h-auto px-4 py-2 flex items-center justify-center font-thin text-white my-4 mx-2'
        >
          OUR RESEARCH AND PROJECTS
        </Typography>
        <div className='flex items-center justify-between w-[90%]'>
          <div className='flex flex-col items-center justify-center'>
            <Typography
              variant='h4'
              className='bg-[#FFF7AB] rounded-lg w-[28rem] h-auto px-4 py-2 flex items-center justify-center my-4 mx-2'
            >
              Jowar Research Paper
            </Typography>
            <img
              src={research01}
              alt='iot'
              className=' object-cover rounded-lg w-[25rem] h-[18rem]'
            />
            <Typography
              variant='h4'
              className='underline w-[25rem] h-auto px-4 my-2 flex items-center justify-center'
            >
              Cultivating Jowar for Resilient Agriculture
            </Typography>
          </div>
          <div>
            <Typography
              variant='h4'
              className='bg-[#FFF7AB] rounded-lg w-[28rem] h-auto px-4 py-2 flex items-center justify-center my-4 mx-2'
            >
              Iot in Agriculture Research
            </Typography>
            <img
              src={research02}
              alt='iot'
              className=' object-cover rounded-lg w-[25rem]'
            />
            <Typography
              variant='h4'
              className='underline w-[28rem] h-auto px-4 my-2 flex items-center justify-center'
            >
              Role of sensors in crop production by analysing soil health
            </Typography>
          </div>
        </div>
        <Typography
          variant='h4'
          className='bg-[#85b968] rounded-lg w-[15rem] h-auto px-4 py-2 flex items-center justify-center font-thin text-white my-4 mx-2 hover:underline cursor-pointer'
        >
          FUNDINGS
        </Typography>
        <div className='flex items-center justify-between w-[90%]'>
          <img
            src={funding01}
            alt='iot'
            className=' object-cover w-[25rem] rounded-lg h-[25rem]'
          />
          <div className='w-[25rem] h-[25rem] bg-[#FFF7AB] rounded-lg pt-14 px-6'>
            <Typography
              variant='h4'
              className='px-4 hover:underline cursor-pointer'
            >
              {`>`} Funding opportunities
            </Typography>
            <Typography
              variant='h4'
              className='px-4 hover:underline cursor-pointer'
            >
              {`>`} How to Apply
            </Typography>
            <Typography
              variant='h4'
              className='px-4 hover:underline cursor-pointer'
            >
              {`>`} Find funding partners
            </Typography>
            <Typography
              variant='h4'
              className='px-4 hover:underline cursor-pointer'
            >
              {`>`} How projects are chosen for funding
            </Typography>
            <Typography
              variant='h4'
              className='px-4 hover:underline cursor-pointer'
            >
              {`>`} Managing a project
            </Typography>
            <Typography
              variant='h4'
              className='px-4 hover:underline cursor-pointer'
            >
              {`>`} Tender opportunites for research and innovation
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResearchInnovation;
