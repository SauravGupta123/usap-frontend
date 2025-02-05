import React, { useEffect, useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Typography } from '@material-tailwind/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import NavBar from '../Components/HomePageComponents/NavBar';
import Footer from '../Components/HomePageComponents/Footer';
import comingSoon from '/HomePageImages/Comp4-Images/ComingSoon.jpg'

import gallery from '../Assets/gallery01.png';
import img1 from '../Assets/gallery/img1.jpg';
import img2 from '../Assets/gallery/img2.jpg';
import img3 from '../Assets/gallery/img3.jpg';
import img4 from '../Assets/gallery/img4.jpg';
import img5 from '../Assets/gallery/img5.jpg';
import img6 from '../Assets/gallery/img6.jpg';
import img7 from '../Assets/gallery/img7.jpg';

const photos = [
  // { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  // { src: img5 },
  { src: img6, },
  { src: img7}
];

const videos = [
  { src: 'https://www.youtube.com/embed/uWMGk9GJmRw', title: 'Play Video' },
  { src: 'https://www.youtube.com/embed/xisUplfGakg', title: 'Play Video' },
 
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <NavBar />
      <div className='bg-gray-100 min-h-screen'>
        <div className='mb-4'>
          <div className='w-full flex items-center justify-center relative mb-[8rem]'>
            <img
              src={gallery}
              alt='teamlogo'
              className='w-[9rem] sm:w-[11rem] lg:w-[15rem] z-10 absolute top-[2.5rem] sm:top-[2rem] md:top-[1.5rem] lg:top-[1rem] lg:left-[calc(50vw-25rem)] sm:left-[calc(50vw-17rem)] left-[calc(50vw-12.5rem)]'
            />
            <div className='w-auto px-[4rem] sm:px-[9rem] md:px-[12rem] lg:px-[16rem] h-[70px] sm:h-[80px] lg:h-[90px] bg-[#1E40AF] flex items-center justify-center rounded-[2rem] relative top-16'>
              <Typography
                variant='h1'
                color='white'
                className='ml-4 text-center text-[28px] sm:text-[33px] lg:text-[40px] lg:ml-0 tracking-tighter font-bold'
              >
                Our Gallery
              </Typography>
            </div>
          </div>
        </div>


        {/* Tab Structure */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <TabGroup>
            <TabList className="flex space-x-4 justify-center">
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full max-w-xs py-2 text-sm font-bold leading-5 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    selected ? 'bg-blue-600 text-white shadow' : 'bg-white text-black hover:bg-blue-100'
                  )
                }
              >
                Photos
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full max-w-xs py-2 text-sm font-bold leading-5 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    selected ? 'bg-blue-600 text-white shadow' : 'bg-white text-black hover:bg-blue-100'
                  )
                }
              >
                Videos
              </Tab>
            </TabList>

            <TabPanels className="mt-8">
              {/* Photos Tab */}
              {/* Photos Tab */}
              {/* Inside the Photos Tab */}
              <TabPanel>
                <div className="flex flex-wrap justify-center gap-2">
                  {photos.map((photo, index) => (
                    <div key={index} className="flex justify-center mb-2">
                      <div
                        className="relative overflow-hidden rounded-lg cursor-pointer"
                        style={{ width: photo.width || '300px', height: photo.height || '300px' }} // Apply custom or default dimensions
                        onClick={() => openModal(index)}
                      >
                        <img
                          src={photo.src}
                          alt="gallery image"
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>





              {/* Videos Tab */}
         {/* Videos Tab */}
<TabPanel className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7 w-full md:w-[80%]"> {/* Adjusted gap to 0 */}
    {videos.map((video, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className="relative w-[80%] h-[10rem]" style={{ paddingBottom: '56.25%', height: '0' }}> {/* Maintain 16:9 aspect ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={video.src}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Title hidden */}
      </div>
    ))}
  </div>
</TabPanel>
 


            </TabPanels>
          </TabGroup>
        </div>
      </div>

      {/* Modal for zoomed image */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <img
              src={photos[currentImageIndex].src}
              alt="gallery image"
              className="max-h-full max-w-full object-contain"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity"
            >
              <ChevronRight size={24} />
            </button>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Gallery;
