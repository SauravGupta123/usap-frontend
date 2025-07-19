import React, { useState } from 'react';
import europeanPayLogo from '/HomePageImages/Comp4-Images/ComingSoon.jpg';
import infotech from '/HomePageImages/Comp4-Images/ComingSoon.jpg';
import pramitFoundationLogo from '/HomePageImages/Comp4-Images/ComingSoon.jpg';
import laxmibaiSeva from '/HomePageImages/Comp4-Images/ComingSoon.jpg';
import comingSoon from '/HomePageImages/Comp4-Images/ComingSoon.jpg';

function Comp4() {
  const [selectedPartner, setSelectedPartner] = useState('funding');

  const partnerCategories = [
    { id: 'funding', label: 'Funding Partners', icon: '💰' },
    { id: 'social', label: 'Social Partners', icon: '🤝' },
    { id: 'localOrganizations', label: 'Local Organizations', icon: '🏢' },
    { id: 'universities', label: 'Universities', icon: '🎓' }
  ];

  return (
    <div className='relative w-full py-16 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-100/30 to-blue-100/30'></div>
      <div className='absolute top-10 left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-10 animate-bounce-slow'></div>
      <div className='absolute bottom-20 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-10 animate-bounce-slow' style={{animationDelay: '1s'}}></div>
      
      <div className='relative z-10 container mx-auto px-4 py-8'>
        <div className='space-y-12 max-w-7xl mx-auto'>
          
          {/* Header Section */}
          <div className='text-center animate-fade-in'>
            <div className='inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full mb-8 shadow-xl transform transition-all duration-300 hover:scale-105'>
              <h2 className='font-bold text-2xl lg:text-3xl'>
                Our Partners
              </h2>
            </div>
            
            <p className='text-gray-700 text-lg lg:text-xl leading-relaxed font-medium max-w-4xl mx-auto'>
              We are proud to partner with some of the most innovative and reputable organizations. Together, we strive to deliver high-quality solutions and support for students worldwide.
            </p>
          </div>

          {/* Partner Category Buttons */}
          <div className='flex flex-wrap justify-center gap-4 animate-slide-up' style={{animationDelay: '0.2s'}}>
            {partnerCategories.map((category) => (
              <button
                key={category.id}
                className={`group flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  selectedPartner === category.id 
                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-xl' 
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white shadow-md border border-gray-200'
                }`}
                onClick={() => setSelectedPartner(category.id)}
              >
                <span className='text-xl'>{category.icon}</span>
                <span className='text-sm lg:text-base'>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Partners Display Section */}
          <div className='min-h-[300px] flex justify-center items-center animate-fade-in' style={{animationDelay: '0.4s'}}>
            <div className='backdrop-blur-sm bg-white/20 rounded-3xl p-8 shadow-xl border border-white/30 w-full max-w-4xl'>
              
              {selectedPartner === 'funding' && (
                <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                  <div className='group'>
                    <a href="https://european-pay.fr/" target='_blank' className='block'>
                      <div className='relative p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl'>
                        <img
                          className='h-[120px] w-auto mx-auto object-contain'
                          src={europeanPayLogo}
                          alt='European Pay'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      </div>
                    </a>
                  </div>
                  
                  <div className='group'>
                    <a href="https://soniconsultancy.in/" target='_blank' className='block'>
                      <div className='relative p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl'>
                        <img
                          className='h-[120px] w-auto mx-auto object-contain'
                          src={infotech}
                          alt='Infotech Solutions'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      </div>
                    </a>
                  </div>
                </div>
              )}

              {selectedPartner === 'social' && (
                <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                  <div className='group'>
                    <a href="https://pramitfoundation.soniconsultancy.in/" target='_blank' className='block'>
                      <div className='relative p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl'>
                        <img
                          className='h-[120px] w-auto mx-auto object-contain'
                          src={pramitFoundationLogo}
                          alt='Pramit Foundation'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      </div>
                    </a>
                  </div>
                  
                  <div className='group'>
                    <a href="https://www.facebook.com/LBJSSR" target='_blank' className='block'>
                      <div className='relative p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl'>
                        <img
                          className='h-[120px] w-auto mx-auto object-contain'
                          src={laxmibaiSeva}
                          alt='Laxmibai Seva'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      </div>
                    </a>
                  </div>
                </div>
              )}

              {(selectedPartner === 'localOrganizations' || selectedPartner === 'universities') && (
                <div className='flex flex-col items-center justify-center text-center space-y-6'>
                  <div className='relative p-8 bg-white rounded-2xl shadow-lg'>
                    <img
                      className='h-[120px] w-auto mx-auto object-contain'
                      src={comingSoon}
                      alt='Coming Soon'
                    />
                  </div>
                  <div className='space-y-3'>
                    <h3 className='text-2xl font-bold text-gray-800'>Exciting Partnerships Coming Soon!</h3>
                    <p className='text-gray-600 text-lg max-w-md'>
                      We are actively building relationships with amazing {selectedPartner === 'localOrganizations' ? 'local organizations' : 'universities'} to serve you better.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp4;