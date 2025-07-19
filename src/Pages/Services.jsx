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
    // {
    //   title: 'French Language Classes',
    //   image: frenchLanguage,
    //   imgwidth: 'w-[20rem]',
    //   description: 'Master the French language with expert tutors, tailored to suit your level and pace, so you can thrive in academic and social settings.',
    // },
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
    // {
    //   title: 'PhD / Research related',
    //   image: research,
    //   description: 'If you want to more information how PhD / research works in Abroad, USAP can guide you thoroughly with all details.',
    // },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'>
      <NavBar />

      {/* Hero Section */}
      <div className='w-full relative overflow-hidden mb-16'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10'></div>
        <div className='relative z-10 w-auto px-[5rem] sm:px-[9rem] md:px-[12rem] lg:px-[16rem] h-[70px] sm:h-[80px] lg:h-[100px] bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] flex items-center justify-center rounded-[2rem] mb-12 mt-16 shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] animate-fade-in'>
          <Typography
            variant='h1'
            color='white'
            className='text-center text-[28px] sm:text-[33px] lg:text-[40px] tracking-tighter font-bold'
          >
            Services
          </Typography>
        </div>
      </div>

      {/* Animated Title Section */}
      <div className='w-[90%] flex items-center justify-center relative mb-16 animate-slide-up' style={{animationDelay: '0.2s'}}>
        <div className='w-full max-w-6xl h-auto bg-gradient-to-r from-[#284fce] via-[#1E40AF] to-[#3B82F6] flex items-center justify-center rounded-[3rem] py-6 px-8 shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]'>
          <Typography
            variant='h1'
            color='white'
            className='text-center text-[18px] sm:text-[25px] md:text-[30px] lg:text-[36px] tracking-tight font-bold leading-tight'
          >
            We are Providing Quality Services Here
          </Typography>
        </div>
      </div>

      {/* Services Introduction */}
      <div className='w-[90%] max-w-7xl mb-12 animate-slide-up' style={{animationDelay: '0.3s'}}>
        <div className='text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20'>
          <Typography
            variant='h3'
            className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4'
          >
            Comprehensive Support for Your Journey
          </Typography>
          <Typography
            variant='lead'
            className='text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'
          >
            From administrative support to career guidance, we provide end-to-end services to ensure your success in France. Our expert team is dedicated to making your educational and professional journey smooth and rewarding.
          </Typography>
        </div>
      </div>
      {/* Services Grid */}
      <div className='w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 mb-16 animate-slide-up' style={{animationDelay: '0.4s'}}>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center'>
          {services.map((service, index) => (
            <div
              key={index}
              className='w-full max-w-sm group transform transition-all duration-300 hover:scale-105 animate-slide-up'
              style={{animationDelay: `${0.5 + index * 0.1}s`}}
            >
              <ServicesCards
                title={service.title}
                description={service.description}
                image={service.image}
                imgwidth={service.imgwidth}
                isExpanded={expandedCardIndex === index}
                onExpandClick={() => handleExpandClick(index)}
                imgheight={service.imgheight}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className='w-[90%] max-w-7xl mb-16 animate-slide-up' style={{animationDelay: '0.7s'}}>
        <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20'>
          <div className='text-center mb-12'>
            <Typography
              variant='h3'
              className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4'
            >
              Our Impact in Numbers
            </Typography>
            <Typography
              variant='lead'
              className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'
            >
              See how we've helped thousands of students achieve their dreams in France
            </Typography>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center group'>
              <div className='w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <Typography variant='h4' className='text-white font-bold text-2xl'>10K+</Typography>
              </div>
              <Typography variant='h6' className='font-bold text-gray-800 mb-2'>Students Helped</Typography>
              <Typography variant='paragraph' className='text-gray-600 text-sm'>
                Successfully assisted over 10,000 students in their journey
              </Typography>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <Typography variant='h4' className='text-white font-bold text-2xl'>95%</Typography>
              </div>
              <Typography variant='h6' className='font-bold text-gray-800 mb-2'>Success Rate</Typography>
              <Typography variant='paragraph' className='text-gray-600 text-sm'>
                High success rate in visa applications and university admissions
              </Typography>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <Typography variant='h4' className='text-white font-bold text-2xl'>24/7</Typography>
              </div>
              <Typography variant='h6' className='font-bold text-gray-800 mb-2'>Support Available</Typography>
              <Typography variant='paragraph' className='text-gray-600 text-sm'>
                Round-the-clock assistance whenever you need help
              </Typography>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <Typography variant='h4' className='text-white font-bold text-2xl'>50+</Typography>
              </div>
              <Typography variant='h6' className='font-bold text-gray-800 mb-2'>University Partners</Typography>
              <Typography variant='paragraph' className='text-gray-600 text-sm'>
                Strong partnerships with top French universities
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className='w-[90%] max-w-7xl mb-16 animate-slide-up' style={{animationDelay: '0.8s'}}>
        <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center shadow-2xl transform transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]'>
          <Typography
            variant='h3'
            className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4'
          >
            Need Personalized Assistance?
          </Typography>
          <Typography
            variant='lead'
            className='text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8'
          >
            Our expert team is ready to provide personalized guidance tailored to your specific needs. Get in touch with us today!
          </Typography>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button className='px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
              Contact Our Experts
            </button>
            <button className='px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transform transition-all duration-300 hover:scale-105'>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
