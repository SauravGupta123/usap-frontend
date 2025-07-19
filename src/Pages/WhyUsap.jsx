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
import { Link } from 'react-router-dom';

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
            Why USAP?
          </Typography>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className='w-[90%] max-w-7xl mb-16 animate-slide-up' style={{animationDelay: '0.2s'}}>
        <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20'>
          <div className='text-center mb-8'>
            <Typography
              variant='h3'
              className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6'
            >
              Universal Student Assistance Portal
            </Typography>
            <Typography
              variant='lead'
              className='text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed'
            >
              The need for a <span className='font-semibold italic text-blue-600'>Universal Student Assistance Portal (USAP)</span> arises from the unique challenges that international students face when moving to a new country for their studies. We bridge the gap between dreams and reality, providing comprehensive support for every step of your journey.
            </Typography>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className='w-[90%] max-w-7xl mb-12 animate-slide-up' style={{animationDelay: '0.3s'}}>
        <div className='text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 shadow-xl'>
          <Typography
            variant='h4'
            className='text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4'
          >
            Addressing Every Challenge You Face
          </Typography>
          <Typography
            variant='lead'
            className='text-lg text-white/90 max-w-4xl mx-auto leading-relaxed'
          >
            From administrative complexities to cultural adaptation, we understand the hurdles international students encounter and provide tailored solutions for each challenge.
          </Typography>
        </div>
      </div>
      {/* Challenges Grid */}
      <div className='w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 mb-16 animate-slide-up' style={{animationDelay: '0.4s'}}>
        <div className='text-center mb-12'>
          <Typography
            variant='h3'
            className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4'
          >
            Challenges We Address
          </Typography>
          <Typography
            variant='lead'
            className='text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'
          >
            Every international student faces unique challenges. Here's how USAP provides solutions for each one.
          </Typography>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
          {details.map((detail, index) => (
            <div
              key={index}
              className='w-full max-w-sm group transform transition-all duration-300 hover:scale-105 animate-slide-up'
              style={{animationDelay: `${0.5 + index * 0.1}s`}}
            >
              <ServicesCards 
                idx={index}
                title={detail.title} 
                description={detail.description} 
                image={detail.image} 
                imgwidth={detail.imgwidth}
                imgheight={detail.imgheight}
                isExpanded={expandedCardIndex === index}
                onExpandClick={() => handleExpandClick(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories Section */}
      <div className='w-[90%] max-w-7xl mb-16 animate-slide-up' style={{animationDelay: '0.7s'}}>
        <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20'>
          <div className='text-center mb-12'>
            <Typography
              variant='h3'
              className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4'
            >
              Why Students Choose USAP
            </Typography>
            <Typography
              variant='lead'
              className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'
            >
              Our comprehensive approach and proven track record make us the trusted choice for international students
            </Typography>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center group'>
              <div className='w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <Typography variant='h6' className='font-bold text-gray-800 mb-2'>Comprehensive Support</Typography>
              <Typography variant='paragraph' className='text-gray-600 text-sm'>
                End-to-end assistance from arrival to graduation and beyond
              </Typography>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
              </div>
              <Typography variant='h6' className='font-bold text-gray-800 mb-2'>Expert Team</Typography>
              <Typography variant='paragraph' className='text-gray-600 text-sm'>
                Experienced professionals who understand student challenges
              </Typography>
            </div>

            <div className='text-center group'>
              <div className='w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <Typography variant='h6' className='font-bold text-gray-800 mb-2'>Cost-Effective</Typography>
              <Typography variant='paragraph' className='text-gray-600 text-sm'>
                Free and affordable services to support your financial goals
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
            Ready to Start Your Journey with USAP?
          </Typography>
          <Typography
            variant='lead'
            className='text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8'
          >
            Join thousands of successful international students who have overcome challenges and achieved their dreams with our comprehensive support system.
          </Typography>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button className='px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
              Get Started Today
            </button>
            <Link to={'/about'} className='px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transform transition-all duration-300 hover:scale-105'>
              Learn More About USAP
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhyIsap;
