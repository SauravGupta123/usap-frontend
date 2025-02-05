import React, { useEffect } from 'react';
import Header from '../Components/Header';
// import CarouselComponent from '../Components/CarouselComponent';
import Home from '../Components/Home';
import NavBar from '../Components/HomePageComponents/NavBar';
import UnderConstruction from '../Components/UnderConstruction';
import Comp1 from '../Components/HomePageComponents/Comp1';
import Comp2 from '../Components/HomePageComponents/Comp2';
import Comp3 from '../Components/HomePageComponents/Comp3';
import Comp4 from '../Components/HomePageComponents/Comp4';
import Footer from '../Components/HomePageComponents/Footer';
import Comp5 from '../Components/HomePageComponents/Comp5';
import MobileApp from '../Components/MobileApp';
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='sm:w-full'>
      <NavBar />
      <Comp1 />
      <Comp3 />
      {/* <Comp5 /> */}
      <Comp2 />
      {/* <MobileApp/> */}
      <Comp4 />
      <Footer />
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <CarouselComponent /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
