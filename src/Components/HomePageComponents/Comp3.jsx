
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaUserPlus, FaClipboardList, FaHandshake } from 'react-icons/fa';

const Comp3 = () => {
  const navigate = useNavigate();
  const handleWhatsAppClick = () => {
   
  };

  const steps = [
    {
      icon: <FaUserPlus className="w-6 h-6" />,
      title: "Create Account",
      description: "Create your account using Gmail"
    },
    {
      icon: <FaClipboardList className="w-6 h-6" />,
      title: "Generate Request", 
      description: "Generate your request by selecting its category"
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Get Connected",
      description: "USAP will contact you and arrange a meeting"
    }
  ];

  return (
    <div className="relative w-full py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-blue-100/30"></div>
      <div className="absolute top-5 sm:top-10 lg:top-20 right-5 sm:right-10 lg:right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-purple-200 rounded-full opacity-10 animate-bounce-slow"></div>
      <div className="absolute bottom-5 sm:bottom-10 lg:bottom-20 left-5 sm:left-10 lg:left-20 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-blue-200 rounded-full opacity-10 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 max-w-5xl mx-auto">
          
          {/* Main content centered */}
          <div className="w-full animate-fade-in text-center" style={{animationDelay: '0.1s'}}>
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-white/30 max-w-4xl mx-auto">
              
              {/* Badge */}
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full mb-6 sm:mb-8 shadow-lg transform transition-all duration-300 hover:scale-105">
                <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-center">
                  Free Support and Assistance
                </h2>
              </div>

              {/* Main Content */}
              <div className="space-y-6 sm:space-y-8">
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
                  Being a student abroad, if you need any kind of support and assistance, feel free to generate your request through the "Universal Student Assistance Portal (USAP)". It is completely free and transparent with the help of technology.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-blue-100 max-w-3xl mx-auto">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
                    Just follow three simple steps:
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {steps.map((step, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6 bg-white/70 rounded-xl border border-white/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg mb-4">
                          <div className="text-2xl sm:text-3xl">
                            {React.cloneElement(step.icon, { className: "w-8 h-8 sm:w-10 sm:h-10" })}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 text-lg sm:text-xl">{step.title}</h4>
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
                  At the end of the service, you can give your feedback to help us improve.
                </p>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
                  {/* Services Button */}
                  <button
                    onClick={() => navigate('/services')}
                    className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3 min-w-[160px]"
                  >
                    Our Services
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* WhatsApp Button */}
                  <button 
                    onClick={handleWhatsAppClick}
                    className="group bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3 min-w-[160px]"
                  >
                    <FaWhatsapp className="text-lg sm:text-xl" />
                    Join WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side image - removed as requested for center alignment */}
        
        </div>
      </div>
    </div>
  );
};

export default Comp3;
