import React from 'react';

function Comp1() {
  return (
    <div className='w-full h-auto Laptop-lg:h-[calc(100vh-(80px))] bg-[#EEEEEE] flex flex-col items-center justify-center space-y-12 relative   px-4 Laptop-lg:px-0 py-6'>
      <div className='bg-[#599121] rounded-[50px] h-[60px] Laptop-lg:h-[80px] px-8 overflow-hidden flex items-center justify-center'>
        <h1 className='font-poppins font-extrabold text-center text-xl Laptop-lg:text-3xl text-[#FFFFFF]'>
          Why to join ISAP Communities ?
        </h1>
      </div>
      <div className='w-full Laptop-lg:w-[70%] h-[70%] py-4 font-poppins font-semibold text-xl bg-[#7BBB3B] rounded-[50px] overflow-hidden flex flex-col items-center justify-center space-y-10'>
        <p className=' text-[#121212] pl-16 Laptop-lg:pl-0 text-[30px] '>
          Explore our diverse academic communities at ISA-F!
        </p>

        <div className='text-white pl-16 pr-4 flex flex-col space-y-8'>
          <p>
            Our community delves into thought-provoking research and
            discussions. For tech enthusiasts, our Technical Publications group
            offers a platform to share and learn about cutting-edge innovations.
          </p>

          <p>
            Don't miss the chance to be a part of a community that values your
            dreams and aspirations.
          </p>

          <p>
            Join USAP and embark on a transformative educational journey with
            peers who share your enthusiasm for personal development and
            lifelong learning.
          </p>
        </div>
      </div>
      <img
        className='absolute -left-10 Laptop-lg:left-12 Desktop:left-20 top-4 Laptop-lg:-top-14 Desktop:-top-14 h-[150px] w-[150px] Tablet:w-[200px] Tablet:h-[200px] Laptop-lg:h-[350px] Laptop-lg:w-[350px] '
        src='/CommunitiesPageImages/Image1.svg'
        alt='community'
      />
    </div>
  );
}

export default Comp1;
