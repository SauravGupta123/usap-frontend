import React, { useEffect } from 'react';
import Footer from '../Components/HomePageComponents/Footer';
import UnderConstruction from '../Components/UnderConstruction';
import NavBar from '../Components/HomePageComponents/NavBar';
import Comp1 from '../Components/CommunitiesPage/Comp1';
import Comp2 from '../Components/CommunitiesPage/Comp2';
import Comp3 from '../Components/CommunitiesPage/Comp3';

const Communities = () => {
  // const data = {
  //   header: 'Why Choose ISA-F?',
  //   title: '',
  //   body: 'Choosing ISA-F means joining a passionate community of individuals who share a common vision: to make agriculture more sustainable, efficient, and environmentally responsible. We offer a unique blend of education, collaboration, and real-world impact that empowers our members to drive positive change in the world of farming. Together, we are sowing the seeds of innovation and reaping the benefits of a more sustainable and productive agricultural future. Join us in this exciting journey of transformation.',
  // };
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className='flex flex-col items-center w-full'>
      <NavBar />
      <Comp1 />
      <Comp2 />
      <Comp3 />
      {/* <div className='h-auto w-[80%]'>
        <div className='h-full w-full'>
          <div className='text-center bg-local-image bg-cover bg-no-repeat w-full h-auto flex items-center justify-around'>
            <div className='relative -top-20 right-10 bg-[#E3EEEF] w-80 h-auto py-2 flex items-center justify-center px-4 bg-opacity-40 rounded-md'>
              <Typography variant='h2' color='black' className='px-4 py-2'>
                Communities
              </Typography>
            </div>

            <div className='relative left-10 top-[6rem] pb-[20rem]'>
              <div className=''>
                <Accordian data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center bg-gray-100 w-[80%] h-[200px]'>
        <div className='w-[20rem] h-[90%] bg-white mx-4 flex flex-col items-center rounded-2xl px-8 shadow-xl hover:scale-110 transition ease-in-out duration-300 '>
          <div>
            <img
              src={img1}
              alt='soilsense'
              className='w-[7rem] h-[7rem] object-contain'
            />
          </div>
          <Typography variant='h4' color='black' className='-mt-4'>
            Soil Sense
          </Typography>
          <span className='text-[12px]'>
            Transforming farming through education
          </span>
        </div>
        <div className='w-[20rem] h-[90%] bg-white mx-4 flex flex-col items-center rounded-2xl px-8 shadow-xl hover:scale-110 transition ease-in-out duration-300 '>
          <div>
            <img
              src={img2}
              alt='soilsense'
              className='w-[7rem] h-[7rem] object-contain'
            />
          </div>
          <Typography variant='h4' color='black' className='-mt-4'>
            Tech Land
          </Typography>
          <span className='text-[12px]'>Invest with highest Interest rate</span>
        </div>
        <div className='w-[20rem] h-[90%] bg-white mx-4 flex flex-col items-center rounded-2xl px-8 shadow-xl hover:scale-110 transition ease-in-out duration-300 '>
          <div>
            <img
              src={img3}
              alt='soilsense'
              className='w-[7rem] h-[7rem] object-contain'
            />
          </div>
          <Typography variant='h4' color='black' className='-mt-4'>
            Organic chef
          </Typography>
          <span className='text-[12px]'>
            Transforming farming through education
          </span>
        </div>
      </div>
      <div className='my-6 w-[80%] h-[500px] bg-gray-100 flex items-center justify-center'>
        <div className='w-[40%] h-[80%] px-10 py-4  mx-5'>
          <Typography variant='h4' color='black' className=''>
            Journal
          </Typography>
          <Typography variant='h6' color='black' className='mt-40'>
            comming soon...
          </Typography>
        </div>
        <div className='w-[40%] h-[80%] px-10 py-4 mx-5'>
          <Typography variant='h4' color='black' className=''>
            Technical Communities
          </Typography>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Communities;
