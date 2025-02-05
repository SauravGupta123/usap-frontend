import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/HomePageComponents/Footer';
import { Typography } from '@material-tailwind/react';
import NavBar from '../Components/HomePageComponents/NavBar';
import ServicesCards from '../Components/ServicesCards';
import adminSupport from '/whyIsap/adminstration.png';
import scholarships from '/whyIsap/scholarship.png';
import house from '/whyIsap/houses.png';
import loan from '/whyIsap/loan.png';
import guidance from '/whyIsap/guidance.png';
import dailyLife from '/whyIsap/dailyLife.png';
import social from '/whyIsap/social.png';
import startup from '/whyIsap/startup.png';
import teacher from '/whyIsap/teacher.png';

const WhyIsap = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null); // Track the expanded card index

  const details = [
    {
      title: "Navigating Complex Administrative Processes",
      image: adminSupport,
      description: "International students often struggle with the complicated Foreign administrative system. USAP provides step-by-step support for these processes, ensuring students avoid errors and delays."
    },
    {
      title: "Access to Scholarships",
      imgwidth: 'w-[15rem]',
      image: scholarships,
      description: "Many students are unaware of the various scholarships available before admission, during their studies, or for pursuing higher education in Abroad. USAP provides vital information and application support to help students secure financial assistance that might otherwise be overlooked."
    },
    {
      title: "Housing and Domicile Registration",
      image: house,
      description: "Finding accommodation in a new country can be difficult, especially in high-demand areas like USA and Canada. USAP helps students find housing and guides them through the domicile registration process, making it easier to secure safe, affordable living arrangements."
    },
    {
      title: "Financial and Loan Assistance",
      image: loan,
      description: "International students often face challenges in accessing student loans or financing options from local banks in Abroad. USAP connects students with banks that offer tailored loan options, helping them manage their finances effectively during their studies."
    },
    {
      title: "Daily Life Support",
      image: dailyLife,
      description: "From opening a bank account to applying for CAF (housing allowance), accessing social security, and using public transportation (Navigo), many students find these daily tasks overwhelming. USAP simplifies these processes, helping students integrate into Foreign society more smoothly."
    },
    {
      title: "Language Barriers",
      image: teacher,
      description: "Many International students face difficulties because of limited proficiency in Foreign language. USAP provides access to Foreign language classes, ensuring students can overcome language barriers, both academically and in daily life."
    },
    {
      title: "Career Guidance and Job Search",
      imgwidth: 'w-[12.4rem]',
      image: guidance,
      description: "Navigating the Foreign job market is another challenge. USAP offers tailored career guidance and job search assistance, including resources for internships, part-time work, and full-time employment after graduation."
    },
    {
      title: "Entrepreneurship and Company Creation",
      imgwidth: 'w-[12.4rem]',

      image: startup,
      description: "For students interested in starting their own business or exploring entrepreneurial ventures, USAP provides entrepreneurship resources, guidance on company creation, and access to funding and incubator programs."
    },
    {
      title: "Addressing Cultural and Social Adjustment",
      image: social,
      description: "Beyond academic and financial challenges, students often experience cultural shock and need help adjusting to life in Abroad. USAP assists with social integration by offering support for daily life tasks, connecting students with local communities, and helping them feel more at home."
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle card expansion
  const handleExpandClick = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };


  return (
    <div className='flex flex-col items-center w-full'>
      <NavBar />

      <div className='w-auto px-[5rem] sm:px-[9rem] md:px-[12rem] lg:px-[16rem] h-[70px] sm:h-[80px] lg:h-[100px] bg-[#1E40AF] flex items-center justify-center rounded-[2rem] mb-12 relative top-16'>
        <Typography
          variant='h1'
          color='white'
          className=' text-center text-[28px] sm:text-[33px] lg:text-[40px] tracking-tighter font-bold'
        >
          Why USAP?
        </Typography>
      </div>
      <div className='w-[90%] flex items-center justify-center relative mb-10'>
        <div className='w-[30rem]  sm:w-[35rem] md:w-[45rem] lg:w-[55rem] xl:w-[65rem] h-[120px] sm:h-[65px] lg:h-[75px] bg-[#284fce] flex items-center justify-center rounded-[2.5rem] relative top-14 px-6'>
          <Typography
            variant=''
            color='white'
            className='text-center text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] tracking-tight font-bold leading-tight'
          >
            The need for an <em>Universal Student Assistance Portal (USAP)</em> in Abroad arises from the unique challenges that International students face when moving to a new country for their studies. Here's why such a platform is essential:
          </Typography>
        </div>
      </div>
      <div className='w-full mt-6 px-4 sm:px-6 md:px-8 lg:px-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {details.map((detail, index) => (
            <ServicesCards 
              key={index} 
              idx={index}
              title={detail.title} 
              description={detail.description} 
              image={detail.image} 
              imgwidth={detail.imgwidth}
              imgheight={detail.imgheight}
              isExpanded={expandedCardIndex === index}
              onExpandClick={() => handleExpandClick(index)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhyIsap;
