import React, { useEffect,useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/HomePageComponents/Footer';
import { Typography } from '@material-tailwind/react';
import NavBar from '../Components/HomePageComponents/NavBar';
import ServicesCards from '../Components/ServicesCards';
import adminSupport from '/services/administrativeSupport.png';
import scholarships from '/services/scholarship.png';
import accomodation from '/services/accomodation.png';
import loan from '/services/loan.png';
import support from '/services/support.png';
import frenchLanguage from '/services/french.png';
import careerGuidance from '/services/job.png';
import entrepreneurship from '/services/Entrepreneurship.png';
import college from '/services/college.png';
import research from '/services/research.png';

const Services = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null); // Track the expanded card index
  const handleExpandClick = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };
  const services = [
    {
      title: 'Administrative Support',
      image: adminSupport,
      imgwidth: 'w-[15rem]',
      ingheight: 'h-50',
      description: 'Get hassle-free assistance for all your administrative needs, from student visas to residency cards  applications, ensuring smooth transitions throughout your stay in Abroad.',
    },
    {
      title: 'Scholarships',
      image: scholarships,
      description: 'Maximize your potential with scholarships! We guide you through opportunities before admission, during your studies, and for higher education in Abroad.',
    },
    {
      title: 'Accommodation & Domicile',
      image: accomodation,
      description: 'Find your perfect home away from home. Our team helps you secure accommodations and assists with domicile formalities for a comfortable stay.',
    },
    {
      title: 'Loan & Financing',
      image: loan,
      description: 'We assist you in securing student loans and financing from top French banks, giving you financial freedom to focus on your studies.',
    },
    {
      title: 'Daily Life Support',
      image: support,
      description: 'From setting up your bank account and Navigo card to CAF, social security, and CVEC, we’ll ensure you have everything in place for a smooth daily life in Abroad.',
    },
    {
      title: 'French Language Classes',
      image: frenchLanguage,
      imgwidth: 'w-[20rem]',
      description: 'Master the French language with expert tutors, tailored to suit your level and pace, so you can thrive in academic and social settings.',
    },
    {
      title: 'Career Guidance & Job Search',
      image: careerGuidance,
      description: 'Unlock your career potential with personalized guidance on internships, job placements, and navigating the French job market.',
    },
    {
      title: 'Entrepreneurship & Company Creation',
      image: entrepreneurship,
      description: 'Turn your ideas into reality! We provide support to help you start your business or venture while studying in Abroad.',
    },
    {
      title: 'Collage / University enquiry',
      image: college,
      description: 'You can explore and choose the university based on your course and ask the USAP for its authenticity.',
    },
    {
      title: 'PhD / Research related',
      image: research,
      description: 'If you want to more information how PhD / research works in Abroad, USAP can guide you thoroughly with all details.',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col items-center w-full'>
      <NavBar />

      <div className='w-auto px-[5rem] sm:px-[9rem] md:px-[12rem] lg:px-[16rem] h-[70px] sm:h-[80px] lg:h-[100px] bg-[#1E40AF] flex items-center justify-center rounded-[2rem] mb-12 relative top-16'>
        <Typography
          variant='h1'
          color='white'
          className=' text-center text-[28px] sm:text-[33px] lg:text-[40px] tracking-tighter font-bold'
        >
          Services
        </Typography>
      </div>
      <div className='w-[90%] flex items-center justify-center relative mb-10'>
        <div className='w-[35rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] xl:w-[65rem] h-[70px] sm:h-[70px] lg:h-[80px] bg-[#284fce] flex items-center justify-center rounded-[3rem] relative top-14'>
          <Typography
            variant='h1'
            color='white'
            className='text-center text-[18px] sm:text-[25px] md:text-[33px] lg:text-[40px] tracking-tighter font-bold'
          >
            We are Providing Quality Services Here
          </Typography>
        </div>
      </div>
      <div className='w-full mt-6 px-4 sm:px-6 md:px-8 lg:px-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {services.map((service, index) => (
            <ServicesCards
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              imgwidth={service.imgwidth}
              isExpanded={expandedCardIndex === index}
              onExpandClick={() => handleExpandClick(index)}
              imgheight={service.imgheight} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
