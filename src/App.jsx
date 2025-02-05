import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Communities from './Pages/Communities';
import Membership from './Pages/Membership';
import TeamPage from './Pages/TeamPage';
import About from './Pages/About';
import Events from './Pages/Events';
import Gallery from './Pages/Gallery';
import  WhyUSAP from './Pages/WhyUsap.jsx';
import Login from './Pages/Login';
import Register from './Pages/Register';
import JoiningPage from './Pages/JoiningPage';
import Intexp from './Pages/Intexp';
import ResearchInnovation from './Pages/ResearchInnovation';
import { useState, useEffect } from 'react';
import GoogleSignIn from './Components/GoogleLogin';
import GlobalResearchExpert from './Pages/GlobalResearchExpert';
import ResearchAndInnovation from './Pages/ResearchAndInnovation';
import DashBoard from './Pages/DashBoard';
import Certificates from './Pages/Certificates';
import TermsAndConditions from './Pages/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundAndCancellation from './Pages/RefundAndCancellation';
import Contact from './Pages/Contact';
import DronePage from './Pages/DronePage';
import IOTPage from './Pages/IOTPage';
import IotPaper from './Components/ResearchPages/IOTPaper/IotPaper';
import JowerPaper from './Components/ResearchPages/JowerPaper/jowerPaper';
import Fundings from './Pages/Fundings';
import EditProfile from './Pages/EditProfile';
import axios from 'axios';
import PaymentSuccess from './Pages/PaymentSuccess';
import PaymentFailed from './Pages/PaymentFailed';
import './index.css';
import Services from './Pages/Services';
import AdditionalInfo from './Pages/AdditionalInfo';
import AdminPortal from './Pages/Admin/AdminPortal.jsx';
import ComingSoonPage from './Pages/ComingSoon.jsx';
import AdminLogin from './Pages/Admin/AdminLogin.jsx';
import SubAdminPortal from './Pages/Admin/SubAdminPortal.jsx';
import Faqs from './Components/Faqs.jsx';


const App = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const jwt = queryParams.get('jwt');
    // if (jwt) {
    //   axios
    //     .get('https://qaapis.largestagroresearch.org/user/login/success', {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${jwt}`,
    //       },
    //     })
    //     .then((response) => {
    //       setUser(response.data);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // }
    // console.log(jwt);
  }, [location.search]);

  return (
    <>

      <Routes>
        {/* <Route path="/create-order" element={<PaymentComponent />} /> */}
        {/* <Route path='/blog' element={<h1>Welcome to our Blog</h1>} /> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<Services />} />

        <Route path='/communities' element={<Communities />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='membership/application' element={<JoiningPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path="/experts" element={<Intexp />} /> */}
        {/* new route to global research expert page */}
        <Route path='/experts' element={<GlobalResearchExpert />} />
        <Route path='/WhyUSAP' element={< WhyUSAP />} />
        {/* <Route path="/research" element={<ResearchInnovation />} /> */}
        {/* new route to research and innovation page with new design */}
        <Route path='/research' element={<ResearchAndInnovation />} />
        <Route path='/profile' element={<DashBoard />} />


        <Route path='/research/jower-research-paper' element={<JowerPaper />} />
        <Route path='/research/iot-kit-paper' element={<IotPaper />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/terms-&-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route
          path='/refund-&-cancellation-policy'
          element={<RefundAndCancellation />}
        />
        <Route path='/admin/main/profile' element={<AdminPortal />} />
        <Route path='/admin/profile/:id' element={<SubAdminPortal />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dronepage' element={<DronePage />} />
        <Route path='/iot-page' element={<IOTPage />} />
        <Route path='/fundings' element={<Fundings />} />
        <Route path='/profile/edit' element={<EditProfile />} />
        <Route path='/payment/success' element={<PaymentSuccess />} />
        <Route path='/payment/failue' element={<PaymentFailed />} />
        <Route path='/additionalInfo' element={<AdditionalInfo />} />
        <Route path='/comingsoon' element={<ComingSoonPage/>} />
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/faqs' element={<Faqs/>} />
      </Routes>
    </>
  );
};

export default App;
