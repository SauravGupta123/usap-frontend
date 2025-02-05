import { Button, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import banner from '../Assets/banner2.png';
import Accordian from './Accordian';
import img1 from '../Assets/image1.png';
import img2 from '../Assets/image2.png';
import img3 from '../Assets/image 2.png';
import img4 from '../Assets/image4.png';
import img5 from '../Assets/image5.png';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [readmore, setReadmore] = useState(false);
  const navigate = useNavigate();
  const data = [
    {
      header: 'Welcome, members!',
      title: 'Access member resources',
      body: "We are thrilled to have you as part of our community dedicated to sustainable agriculture and innovation. Together, we'll make a positive impact in the world of farming. Let's grow and learn together!",
    },
    {
      header: 'Get connected',
      title: 'Explore what ISA-F can offer you',
      body: 'Connecting with ISA-F is your path to unlocking a world of opportunities in sustainable agriculture and innovation. By joining us, you gain access to a vibrant community of like-minded individuals, cutting-edge research, and the chance to actively contribute to a more sustainable future in agriculture. Together, we can drive meaningful change and make a lasting impact.',
    },
    {
      header: 'Get involved',
      title: 'Enrich your experience with ISA-F',
      body: 'Get involved with ISA-F and be a catalyst for change in agriculture! Join us in shaping a sustainable future, one innovation at a time. Your passion and ideas can make a real difference.',
    },
  ];

  return (
    <>
      <div className='h-[650px]'>
        <div className='relative h-full w-full'>
          <img
            src={banner}
            alt='image1'
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/75'>
            <div className='w-3/4 text-center md:w-2/4'>
              <Typography
                variant='h1'
                color='white'
                className='text-2xl md:text-3xl lg:text-4xl mb-6 opacity-90'
              >
                Indian Student  Assistance Portal (USAP)
              </Typography>
              <Typography
                variant='lead'
                color='white'
                className='mb-12 opacity-60'
              >
                The Farmer is the only man in our economy who buys everything in
                retail, sells everything in wholesale and pays the freight both
                ways
              </Typography>
              <div className='flex justify-center gap-2'>
                <Button
                  size='lg'
                  color='green'
                  onClick={() => navigate('/membership')}
                >
                  Join Now
                </Button>
                <Button
                  size='lg'
                  color='white'
                  variant='text'
                  onClick={() => navigate('/gallery')}
                >
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[450px] flex items-center justify-around p-4 bg-gray-100'>
        <div className=' w-[400px] h-full'>
          <span className='text-blue-gray-900 text-2xl font-semibold'>
            Welcome To
          </span>
          <Typography variant='h2' className='mb-8 opacity-80'>
            Universal Student Assistance Portal  
          </Typography>
          <span className=''>
          USAP aims to enhance farming efficiency and productivity through
            research and development initiatives. By promoting collaboration and
            knowledge-sharing, ISA-F strives to create a platform for
            agricultural innovation and positive environmental impact. Join 
            in its mission to transform agriculture for a more sustainable
            future.
          </span>
          <Button
            size='md'
            variant='gradient'
            className='mt-10 block bg-black'
            onClick={() => setReadmore(!readmore)}
          >
            Read More
          </Button>
        </div>

        <div className=' w-[400px] h-full'>
          <img src={img1} alt='img1' className='object-contain' />
        </div>
        <div className='w-[400px] h-full'>
          <img src={img2} alt='img2' />
        </div>
      </div>
      {readmore && (
        <div className='w-full flex flex-col items-center bg-gray-100 h-auto'>
          <div className='w-[80%] bg-gray-100 h-auto border-[5px] border-dotted border-green-500 mb-8'>
            <Typography variant='text' className='px-20 py-10 text-center'>
            USAP, short for the Indian Student  Assistance Portal, is an
              portal at the forefront of sustainable agriculture and
              innovation in the agricultural sector. Their core mission revolves
              around research and development initiatives aimed at
              revolutionizing farming practices. By introducing innovative
              techniques and technologies, USAP seeks to boost the efficiency
              and productivity of farming operations while maintaining a strong
              commitment to sustainable agricultural practices. USAP's impact
              extends to the educational realm through the establishment of
              student chapters. These chapters play a vital role in promoting
              awareness and understanding of sustainable agriculture among
              students, fostering collaboration, and providing a platform for
              aspiring agricultural enthusiasts to engage in innovative projects
              and initiatives. USAP also actively collaborates with industry
              experts and professionals, facilitating knowledge-sharing and
              networking opportunities for students interested in agriculture.
              Through a structured approach that includes well-defined roles and
              responsibilities within student chapters, USAP encourages active
              participation in research programs and initiatives. By supporting
              these chapters, USAP empowers the next generation of agricultural
              leaders to contribute to the ongoing transformation of the
              agricultural landscape. As USAP continues to champion
              sustainability and innovation in agriculture, it welcomes
              individuals and organizations alike to join their mission, driving
              positive change in the agricultural industry for a more
              sustainable and productive future.
            </Typography>
          </div>
        </div>
      )}
      <div className='flex justify-center w-full mb-2 bg-gray-100 gap-4'>
        {data.map((item, index) => (
          <Accordian key={index} data={item} />
        ))}
      </div>
      <div className='flex flex-col items-center w-full h-[600px] bg-gray-50'>
        <Typography variant='h4' className=' mt-10 text-blue-gray-900'>
          We want to give them best available facilities & Braille techniques
          ...
        </Typography>
        <div className='flex items-center justify-center w-full h-full gap-10'>
          <div className='w-[280px] h-[80%] bg-white rounded-3xl shadow-xl flex flex-col items-center p-4'>
            <div className='w-40 h-40 '>
              <img src={img3} alt='logo' />
            </div>
            <span className='font-semibold text-center'>
              {' '}
              Opportunities for Innovation
            </span>
            <span className='mt-4 font-normal text-center text-[12px]'>
            USAP provides a platform for you to explore and engage in
              innovative agricultural projects and initiatives. Whether you're
              interested in cutting-edge technologies, sustainable practices, or
              research-driven solutions, we offer opportunities for you to
              contribute to agricultural innovation.
            </span>
            <Button size='sm' color='blue' variant='text' className='mt-4'>
              Read More
            </Button>
          </div>
          <div className='w-[280px] h-[80%] bg-white rounded-3xl shadow-xl flex flex-col items-center relative top-6 p-4'>
            <div className='w-[6rem] h-[6rem] mb-8'>
              <img src={img4} alt='logo' />
            </div>
            <span className='mt-4 font-semibold text-center'>
              {' '}
              Collaborative Learning
            </span>
            <span className='mt-4 font-normal text-center text-[12px]'>
              Joining USAP means becoming part of a collaborative environment
              where you can learn from industry experts, connect with fellow
              students passionate about agriculture, and gain valuable insights
              through seminars, workshops, and field visits.
            </span>
            <Button size='sm' color='blue' variant='text' className='mt-6'>
              Read More
            </Button>
          </div>
          <div className='w-[280px] h-[80%] bg-white rounded-3xl shadow-xl flex flex-col items-center p-4'>
            <div className='w-[8rem] h-[8rem] mb-8'>
              <img src={img5} alt='logo' />
            </div>
            <span className='font-semibold text-center'>
              {' '}
              Networking and Industry Exposure
            </span>
            <span className='mt-4 font-normal text-center text-[12px]'>
            USAP facilitates connections with industry professionals and
              experts in agriculture. Through guest lectures, panel discussions,
              and participation in research projects, you'll have the chance to
              network and gain exposure to the broader agricultural community.
            </span>
            <Button size='sm' color='blue' variant='text' className='mt-5'>
              Read More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
