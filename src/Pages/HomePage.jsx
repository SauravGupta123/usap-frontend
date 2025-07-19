import React, { useEffect } from 'react';
import Header from '../Components/Header';
// import CarouselComponent from '../Components/CarouselComponent';

import NavBar from '../Components/HomePageComponents/NavBar';

import Comp1 from '../Components/HomePageComponents/Comp1';
import Comp2 from '../Components/HomePageComponents/Comp2';
import Comp3 from '../Components/HomePageComponents/Comp3';
import Comp4 from '../Components/HomePageComponents/Comp4';
import Footer from '../Components/HomePageComponents/Footer';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'>
      <NavBar />
      
      {/* Hero Section */}
      <section className='animate-fade-in'>
        <Comp1 />
      </section>
      
      {/* Services Section */}
      <section className='animate-slide-up' style={{animationDelay: '0.2s'}}>
        <Comp3 />
      </section>
      
      {/* About Section */}
      <section className='animate-slide-up' style={{animationDelay: '0.4s'}}>
        <Comp2 />
      </section>
      
      {/* Features Section */}
      <section className='animate-slide-up' style={{animationDelay: '0.6s'}}>
        <Comp4 />
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
