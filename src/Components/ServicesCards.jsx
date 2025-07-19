import React, { useRef, useEffect, useState } from 'react';

function ServicesCards({ idx, title, description, image, imgwidth = 'w-56', imgheight = 'h-50', isExpanded, onExpandClick }) {
    console.log("key", idx, isExpanded);
  const contentRef = useRef(null);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      setShowFullContent(true);
    } else {
      const timer = setTimeout(() => setShowFullContent(false), 300); // Delay hiding content to allow for smooth transition
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  const shortDescription = description.slice(0, 100) + '...';

  return (
    <div className="group relative h-[32rem] flex flex-col my-6 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-white/20 rounded-2xl w-full max-w-sm mx-auto transition-all duration-300 hover:scale-105 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative m-4 overflow-hidden rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4 h-40">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl"></div>
        <img 
          src={image}
          alt="card-image" 
          className={`object-contain max-w-full max-h-full rounded-lg transition-transform duration-300 group-hover:scale-110 relative z-10`} 
        />
      </div>
      
      {/* Content Section */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-4 text-center">
          <h6 className="text-gray-800 font-bold text-lg lg:text-xl tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent p-2 rounded-xl">
            {title}
          </h6>
        </div>
        
        <div 
          ref={contentRef}
          className={`overflow-hidden transition-all duration-300 ease-in-out flex-grow ${isExpanded ? 'max-h-none' : 'max-h-20'}`}
        >
          <p className="font-normal text-gray-700 text-sm lg:text-base leading-relaxed">
            {showFullContent ? description : shortDescription}
          </p>
        </div>
      </div>
      
      {/* Button Section */}
      <div className="px-4 pb-4 pt-2 mt-auto">
        <button 
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-4 text-center text-sm font-semibold text-white hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          onClick={onExpandClick}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}

export default ServicesCards;