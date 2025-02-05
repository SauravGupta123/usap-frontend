import React from 'react'

function Comp5() {
    return (
        <div className='w-full h-auto  bg-gradient-to-b from-[#8BBB67] to-[#9CCC78] relative '>
            <div className="absolute top-0 right-0 h-[200px] w-[200px] Laptop-lg:h-[350px] Laptop-lg:w-[350px] ">
                <img  src="/ResearchAndInnovationImages/image-8.svg" alt="image8" />
            </div>
            <div className="absolute bottom-0 left-0 w-[180px]  Laptop-lg:w-[350px] ">
                <img src="/ResearchAndInnovationImages/image-9.svg" alt="image9" />
            </div>
          <div className='flex flex-col items-left Tablet:items-center justify-evenly py-36 Tablet:py-28 px-4 Laptop-lg:px-0 space-y-6 '>
          <p className='font-inter font-bold text-3xl text-[#FFFFFF]'>WHO WE ARE?</p>
          <p className=' w-full Laptop-lg:w-[50%] font-inter font-bold text-lg text-[#FFFFFF] text-left Tablet:text-center'>USAP aims to enhance farming efficiency and productivity through research and development initiatives. By promoting collaboration and knowledge-sharing, ISA-F strives to create a platform for agricultural innovation and positive environmental impact. Join USAP in its mission to transform agriculture for a more sustainable future.</p>
          </div>

        </div>
    )
}

export default Comp5