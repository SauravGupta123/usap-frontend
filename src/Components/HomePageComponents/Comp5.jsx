import { Button } from '@material-tailwind/react';
import React from 'react';
import ChapterCard from '../../Pages/ChapterCard';
import cuimg from '../../Assets/cuimg.png';
import { NavLink } from 'react-router-dom';

const Comp5 = () => {
  const experts = [
    {
      name: "Kartikey Pandey",
      role: "PhD Candidate",
      specialization: "Nano Science / Material Chemistry",
      image: "/GlobalResearchExpertImages/kartikey.png",
      linkedin: "http://www.linkedin.com/in/kartikey-pandey-b00a4316b"
    },
    {
      name: "Urcel Kalenga",
      role: "PostDoc",
      specialization: "GIS and remote sensing",
      image: "/GlobalResearchExpertImages/urcel.jpg",
      linkedin: "https://www.linkedin.com/in/urcel-kalenga-793467b5/"
    },
    {
      name: "Mehtab Alam SYED",
      role: "PhD Student", 
      specialization: "Epidemiology (One Health), Text Mining, NLP, Information Retrieval",
      image: "/GlobalResearchExpertImages/Mehtab.jpg",
      linkedin: "https://www.linkedin.com/in/syed-mehtab-alam-b4564a30/"
    }
  ];

  return (
    <div className='relative w-full bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-r from-slate-100/30 to-blue-100/30'></div>
      <div className='absolute top-20 left-20 w-32 h-32 bg-slate-200 rounded-full opacity-10 animate-bounce-slow'></div>
      <div className='absolute bottom-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-10 animate-bounce-slow' style={{animationDelay: '1s'}}></div>
      
      {/* Research Experts Section */}
      <div className='relative z-10 py-16'>
        <div className='container mx-auto px-4'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in'>
            <div className='inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105'>
              <h2 className='font-bold text-xl lg:text-3xl'>
                Our France Research Experts
              </h2>
            </div>
          </div>

          {/* Expert Cards */}
          <div className='flex flex-col lg:flex-row items-center justify-center gap-8 mb-8 animate-slide-up' style={{animationDelay: '0.2s'}}>
            {experts.map((expert, index) => (
              <div key={index} className='group w-full max-w-sm backdrop-blur-sm bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl'>
                {/* Profile Image */}
                <div className='flex justify-center mb-6'>
                  <div className='relative'>
                    <div className='absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse'></div>
                    <div className='relative w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden bg-white'>
                      <img
                        className='w-full h-full object-cover'
                        src={expert.image}
                        alt={expert.name}
                      />
                    </div>
                  </div>
                </div>

                {/* Expert Info */}
                <div className='text-center space-y-3'>
                  <h3 className='text-white font-bold text-xl'>{expert.name}</h3>
                  <p className='text-blue-100 font-semibold text-lg'>{expert.role}</p>
                  <p className='text-blue-50 text-sm leading-relaxed min-h-[60px] flex items-center justify-center'>{expert.specialization}</p>
                  
                  {/* Location */}
                  <div className='flex items-center justify-center gap-2 py-2'>
                    <img src='/GlobalResearchExpertImages/France.svg' alt='France' className='w-6 h-6' />
                    <span className='text-white font-medium'>France</span>
                  </div>

                  {/* Contact Links */}
                  <div className='flex items-center justify-center gap-4 pt-4'>
                    <button className='p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110'>
                      <img src='/GlobalResearchExpertImages/Mail.svg' alt='Email' className='w-5 h-5' />
                    </button>
                    <a
                      href={expert.linkedin}
                      target='_blank'
                      className='p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110'
                    >
                      <img src='/GlobalResearchExpertImages/linkedin.svg' alt='LinkedIn' className='w-5 h-5' />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Read More Button */}
          <div className='text-center animate-slide-up' style={{animationDelay: '0.4s'}}>
            <NavLink to={'/experts'}>
              <button className='group bg-gradient-to-r from-slate-700 to-slate-800 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-3 mx-auto'>
                Read More
                <svg className='w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Universities Section */}
      <div className='relative z-10 py-16'>
        <div className='container mx-auto px-4'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in' style={{animationDelay: '0.6s'}}>
            <div className='inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105'>
              <h2 className='font-bold text-xl lg:text-3xl text-center'>
                Our Connected Universities and Colleges
              </h2>
            </div>
          </div>

          {/* University Cards */}
          <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-8 animate-slide-up' style={{animationDelay: '0.8s'}}>
            <div className='transform transition-all duration-300 hover:scale-105'>
              <ChapterCard title={'Chandigarh University'} imageUrl={cuimg} />
            </div>
            <div className='transform transition-all duration-300 hover:scale-105' style={{animationDelay: '0.1s'}}>
              <ChapterCard title={'Chandigarh University'} imageUrl={cuimg} />
            </div>
            <div className='transform transition-all duration-300 hover:scale-105' style={{animationDelay: '0.2s'}}>
              <ChapterCard title={'Chandigarh University'} imageUrl={cuimg} />
            </div>
          </div>

          {/* Read More Button */}
          <div className='text-center animate-slide-up' style={{animationDelay: '1s'}}>
            <NavLink to={'/chapter'}>
              <button className='group bg-gradient-to-r from-slate-700 to-slate-800 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-3 mx-auto'>
                Read More
                <svg className='w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp5;
