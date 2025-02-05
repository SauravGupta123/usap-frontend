import { Button } from '@material-tailwind/react';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import img3 from '../../Assets/final design.png';

function Comp1() {
  return (
    <div className='px-0 py-2 w-full h-[89vh] sm:h-[100vh] lg:h-fit sm:relative sm:px-4 bg-gradient-to-r from-transparent via-[#d9deff] to-transparent'>
      <div className='p-1 flex h-[40vh] sm:h-auto items-center justify-around sm:p-4'>
  <img
    className='w-[35vw] Laptop-lg:w-[29vw] h-[40vh] hidden sm:block'
    src='/HomePageImages/Comp1-Images/study1.png'
    alt='img1'
  />
  <img
    className='h-[32vh] w-full sm:h-[25vh] sm:w-auto sm:mr-[6rem] Laptop-lg:h-[45vh]'
    src='/HomePageImages/Comp1-Images/franceTower.png'
    alt='img3'
  />
  <img
    className='h-[25vh] Laptop-lg:h-[40vh] hidden sm:block -20 lg:relative md:right-[5.5rem]'
    src='/HomePageImages/Comp1-Images/study2.png'
    alt='img2'
  />
</div>

      <div class="h-auto sm:mt-10 flex items-center flex-col justify-center w-full">
        <div class="px-2 flex flex-wrap sm:flex-nowrap items-center justify-center sm:items-start sm:justify-between h-auto sm:p-4 font-medium text-center rounded-[32px] text-[#FFFFFF]">
          <a class="" href="/experts">
            <button class="align-middle select-none text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mt-2 w-auto p-2 sm:p-4 h-auto flex items-center justify-center bg-[#1E40AF] rounded-3xl font-poppins font-medium text-sm Mobile:text-base Tablet:text-xl Laptop-lg:text-xl" type="button">
              France Research Experts
            </button>
          </a>

          <div class="flex flex-col items-center justify-start">
            <div class="mt-4 mb-4 text-black leading-normal font-poppins font-medium text-2xl sm:text-xl Tablet:text-3xl Laptop-lg:text-4xl text-center">
              <p>Universal Student Assistance Portal</p>
              <p>(USAP)</p>
            </div>
            <p class="max-w-[800px] p-4 text-black hidden Tablet:flex text-base Tablet:text-xl font-poppins mt-4">
              USAP is a dedicated community focused on providing help and assistance to Indian students in Abroad. USAP makes students lives easier France so that they can focus on their professional carries and have successful job in France. USAP provides the students with the right guidance and direction, whether it is administrative support, securing scholarships, social integration, or career opportunities.
            </p>
          </div>

          <a class="" href="/research">
            <button class="align-middle select-none text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mt-4 w-auto p-2 sm:p-4 h-auto flex items-center justify-center bg-[#1E40AF] rounded-3xl text-[#FFFFFF] font-poppins font-medium text-sm Mobile:text-base Tablet:text-xl Laptop-lg:text-xl" type="button">
              Research and Innovation
            </button>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Comp1;