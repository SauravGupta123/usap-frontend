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
    <div className="relative h-[33rem] flex flex-col my-6 bg-gradient-to-br from-[#3052c3] to-[#20398a] drop-shadow-xl border border-gray-300 rounded-xl w-full max-w-sm mx-auto transition-transform transform ">
      <div className="relative  m-3 overflow-hidden text-white rounded-md flex items-center justify-center">
        <img 
          src={image}
          alt="card-image" 
          className={`object-cover ${imgwidth} ${imgheight} rounded-md`} 
        />
      </div>
    <div className="p-4">
        <h6 className="mb-2 text-white text-center font-bold text-xl tracking-wide bg-gradient-to-r from-[#0297FF] to-[#00D1FF] p-2 rounded-full shadow-md">
          {title}
        </h6>
        <div 
          ref={contentRef}
          className={`overflow-hidden transition-all duration-250 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-20'}`}
        >
          <p className="font-normal text-white text-base Tablet:text-lg leading-relaxed">
            {showFullContent ? description : shortDescription}
          </p>
        </div>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <button 
          className="rounded-md bg-red-700 py-2 px-4 border border-transparent text-center text-sm text-white font-medium hover:bg-red-800"
          onClick={onExpandClick}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}

export default ServicesCards;