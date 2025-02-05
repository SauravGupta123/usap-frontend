import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Footer({ hideJoinNow }) {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  return (
    <div className='w-full h-auto  sapce-y-10'>
      {!hideJoinNow && (
        <div className='bg-[#F8F8F8] w-full h-auto py-8  flex flex-col Tablet:flex-row justify-around items-center Tablet:space-x-12'>
          <p className='font-poppins font-normal text-lg Tablet:text-4xl'>
            Become a USAP Member For Free
          </p>
          <button onClick={() => {
            navigate('/register');
            window.scrollTo(0, 0); // This will scroll to the top of the page
          }} className='text-[#F8F8F8] bg-[#051731] w-[150px] Tablet:w-[200px] h-[40px] Tablet:h-[60px] rounded-[50px] font-bold text-base Tablet:text-2xl'>
            Join USAP
          </button>
        </div>
      )}
      <div className='bg-[#D9E0EA] w-full h-auto Laptop-sm:h-[75%] px-0 Laptop-sm:px-6 space-y-3 pb-8'>
        <div className='flex flex-col Laptop-sm:flex-row justify-between items-start Laptop-sm:space-x-8'>
          <div className='bg h-[80%] w-full Laptop-sm:w-[25%] px-6 flex flex-col items-center justify-center space-y-4 pb-8'>
            <img
              src='/HomePageImages/NavBarImages/ISAF.png'
              alt='logo'
              onClick={() => {
                navigate('/');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth', // Enables smooth scrolling
                });
              }}
            />
            <p className='font-poppins font-medium text-sm'>
              Indian Student  Assistance Portal (USAP), is a portal that aims to provide support and guidance for Indian students in France.
            </p>
            <div className='w-full flex flex-col items-start justify-center space-y-2'>
              <p className='font-poppins font-medium text-base '>Follow Us</p>
              <div className=' w-full flex flex-row  justify-start items-center space-x-3'>
               
                  <img
                    src='/HomePageImages/Comp5-Images/facebook.svg'
                    alt='logo'
                  />
             
               
                  <img
                    src='/HomePageImages/Comp5-Images/instagram.svg'
                    alt='logo'
                  />
          
                {/* <a href='https://www.youtube.com/@ISA-F-fr6wz' target='_blank'>
                  <img
                    src='/HomePageImages/Comp5-Images/youtube.svg'
                    alt='logo'
                  />
                </a> */}
               
                  {' '}
                  <img
                    src='/HomePageImages/Comp5-Images/linkedin.svg'
                    alt='logo'
                  />
            
                {/* <a href='https://twitter.com/ISA-F__' target='_blank'>
                  {' '}
                  <img
                    src='/HomePageImages/Comp5-Images/twitter.svg'
                    alt='logo'
                  />
                </a> */}
              </div>
            </div>
          </div>
          <div className='flex flex-col Tablet:flex-row w-full justify-center Tablet:justify-around items-center Tablet:items-start px-6 Tablet:px-0'>
            <div className='w-full Tablet:w-[15%] h-[80%] space-y-4 flex flex-col items-start justify-start mt-6'>
              <div className='space-y-4'>
                <p className='text-black font-poppins font-bold text-lg Tablet:text-xl'>
                  Useful Links
                </p>
                <div className='border-1 bg-black w-full h-[1px]'></div>
              </div>
              <div className='font-poppins font-bold text-sm Tablet:text-base text-black justify-center items-start flex flex-col space-y-4'>
                <Link

                  to='/faqs'

                  rel='noopener noreferrer'
                >

                  Frequently Asked Questions
                </Link>
                <button>Memberships</button>
                {/* <Link to='/certificates' onClick={scrollToTop}> */}
                <Link to='/comingsoon' onClick={scrollToTop}>
                  Certificates
                </Link>
              </div>
            </div>
            <div className='w-full Tablet:w-[20%] h-[80%] space-y-4 flex flex-col items-start justify-start mt-6'>
              <div className='space-y-4'>
                <p className='text-black font-poppins font-bold  text-lg Tablet:text-xl'>
                  Brouchers & Info
                </p>
                <div className='border-1 bg-black w-full h-[1px]'></div>
              </div>
              <div className='font-poppins font-bold text-sm Tablet:text-base text-black justify-center items-start flex flex-col space-y-4'>
                {/* <a
                
                  href='https://drive.google.com/file/d/1-YVdBdV3eOm_WmtJrIlK3EHQEpgMpfcp/view?usp=drive_link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  School Chapter
                </a> */}
                <Link

                  to='/comingsoon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  School Chapter
                </Link>
                {/* <a
                  href='https://drive.google.com/file/d/1-RJhAVRX4Ch3bsc9OA9H1y930xVtSn_u/view?usp=drive_link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  College / University Chapter
                </a> */}
                <Link

                  to='/comingsoon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  College / University Chapter
                </Link>
                {/* <a
                  href='https://drive.google.com/file/d/1-TgDmjh18k0BLYkzrFlFSoPbU7lvDzai/view?usp=drive_link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Global Research Experts
                </a> */}
                <Link

                  to='/comingsoon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  External Advisor
                </Link>
                {/* <a
                  href='https://drive.google.com/file/d/1-RSomLasLtwq164KeL1Tb4CZdAoGO0SL/view?usp=drive_link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  External Advisor
                </a> */}
                {/* <a
                  href='https://drive.google.com/file/d/1-ZyXScbLSC1tLmw_ej26-mAVOHTNepwn/view?usp=drive_linkk'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                ISA-F Common Info
                </a> */}

              </div>
            </div>

            <div className='w-full Tablet:w-[30%] h-[80%] space-y-3 flex flex-col items-start justify-start mt-6'>
              <div className='space-y-4'>
                <p className='text-black font-poppins font-bold  text-lg Tablet:text-xl'>
                  Reach Out
                </p>
                <div className='border-1 bg-black w-full h-[1px]'></div>
              </div>
              <p className='font-poppins font-bold text-sm Tablet:text-base text-black'>
                Contact us for inquiries or any questions to the mail id below:
              </p>

              {/* <div className='bg-[#237AFF] w-[80%] rounded-[40px] flex flex-row justify-start items-center overflow-hidden'> */}
              {/* <input
                  type='text'
                  className='bg-[#2F2F2F] w-[75%] h-[40px] text-black px-6'
                />
                <img
                  className='px-4'
                  src='/HomePageImages/Comp5-Images/search-arrow.svg'
                  alt='search'
                /> */}
              <section className="contactInfo flex flex-col gap-2">



                <div className='flex gap-3'>
                  <a href="mailto:info@isafrance.org" className='flex items-center gap-3'>
                    <img src="/HomePageImages/Comp5-Images/gmail.png" className='w-4 h-4 inline self-center' alt="gmail" />
                    <p className='font-poppins font-bold text-sm Tablet:text-base text-black'>
                     test@gmail.com
                    </p>
                  </a>
                </div>
                {/* </div> */}
                <div className='flex flex-row items-center justify-start text-black space-x-2'>
                  <img
                    className='h-[20px] w-[20px]'
                    src='/HomePageImages/Comp5-Images/phone.png'
                    alt='phone'
                  />
                  <p>
                    <b>+91 XXXXXXXXX</b>
                  </p>
                </div>
                <div className="flex gap-3">
                  <img src="/HomePageImages/Comp5-Images/location.png" className='w-4 h-4 inline self-center' alt="location" />
                  <p className='font-poppins font-bold text-sm Tablet:text-base  text-black'>
                    Paris, France
                  </p>

                </div>

              </section>
            </div>
          </div>
        </div>

        <div className='bg-[#BEBEBF] border-1 w-full h-[1px]'></div>
        <div className=' w-full flex flex-col Laptop-lg:flex-row justify-center Laptop-lg:justify-between items-center px-4 pb-4 text-sm Tablet:text-base space-y-4'>
          <div className='w-full Laptop-lg:w-[40%] flex flex-col justify-between items-center Laptop-lg:items-start'>
            <div className='flex flex-row justify-start items-center space-x-4'>
              <img
                className='w-[25px] h-[25px]'
                src='/HomePageImages/Comp5-Images/copyright.svg'
                alt='copyright'
              />
              <p className='text-black '>
                Copyright: Universal Student  Assistance Portal
              </p>
            </div>
            <p className='text-black px-8 Tablet:px-0'>
              Design and Developed by:<span className='ml-1 text-red-800'>Saurav Gupta</span>
            </p>
          </div>

          <div className='text-black w-full Laptop-lg:w-[60%] flex flex-col Tablet:flex-row justify-around items-start Tablet:items-center space-x-0 Tablet:space-x-6 Laptop-lg:space-x-12'>
            {/* <Link to='/contact' onClick={scrollToTop}> */}
            {/* <Link to='/comingsoon' onClick={scrollToTop}>
                Contact
              </Link> */}
            
            <Link to='/terms-&-conditions' onClick={scrollToTop}>
              {/* <Link to='/comingsoon' onClick={scrollToTop}> */}
              Terms & Conditions
            </Link>
            <Link to='/privacy-policy' onClick={scrollToTop}>
              {/* <Link to='/comingsoon' onClick={scrollToTop}> */}
              Privacy Policy
            </Link>
            <Link to='/refund-&-cancellation-policy' onClick={scrollToTop}>
              {/* <Link to='/comingsoon' onClick={scrollToTop}> */}
              Refund & Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
