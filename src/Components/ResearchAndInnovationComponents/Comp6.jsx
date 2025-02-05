import React from 'react'

import { Link } from 'react-router-dom'

function Comp6() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'auto', 
        });
      };
    return (
        <div className='w-full h-auto bg-gradient-to-b from-[#9CCC78] to-[#8BBB67]  flex flex-col items-center justify-center space-y-8 px-4 Laptop-lg:px-[70px] py-8'>
            <div className='w-auto h-[60px] px-6 bg-[#439835] rounded-[20px] font-inter font-bold text-xl Tablet:text-2xl text-[#FFFFFF] flex items-center justify-center'>Our Innovation</div>
            <div className='w-full  flex flex-col Laptop-lg:flex-row justify-around items-center  space-y-8 Laptop-lg:space-y-0 '>
                <div className='flex flex-col justify-around items-center space-y-6 w-full Tablet:w-[50%] Laptop-lg:w-[40%] object-cover bg-[#FFFFFF] rounded-3xl p-4'>
                    <div className='w-full h-[59px]  rounded-[20px] font-inter font-bold text-lg Laptop-lg:text-xl text-[#000000] flex items-center justify-center'>
                        Iot in Agriculture (SN KIT)
                    </div>
                    <div className='h-[250px] w-full overflow-hidden rounded-lg'>
                        <img className="w-full h-full object-cover" src="/ResearchAndInnovationImages/image-10.svg" alt="image10" />
                    </div>
                    <div className='w-full flex flex-row justify-between items-center px-4'>
                        <p className='font-inter font-bold text-base Tablet:text-lg text-[#000000]'>SN SILOS Agriculture Kit</p>
                        <Link to="/iot-page" className='w-auto h-auto px-4 py-2 rounded-[10px] bg-[#439835] font-semibold text-xs Tablet:text-base text-[#FFFFFF]' onClick={scrollToTop}>Know More</Link>
                    </div>

                </div>

                <div className='flex flex-col justify-around items-center space-y-6 w-full Tablet:w-[50%] Laptop-lg:w-[40%] object-cover bg-[#FFFFFF] rounded-3xl p-4'>
                    <div className='w-full h-[59px]  rounded-[20px] font-inter font-bold text-lg Laptop-lg:text-xl text-[#000000] flex items-center justify-center'>
                        Robotics and drones in Agriculture
                    </div>
                    <div className='h-[250px] w-full overflow-hidden rounded-lg'>
                        <img className="w-full h-full object-cover" src="/ResearchAndInnovationImages/image-11.svg" alt="image11" />
                    </div>
                    <div className='w-full flex flex-row justify-between items-center px-4'>
                    <p className='font-inter font-bold text-sm Tablet:text-lg text-[#000000]'>SN SILOS Agriculture Drone</p>
                    <Link to="/dronepage" className='w-auto h-auto px-4 py-2 rounded-[10px] bg-[#439835] text-[#FFFFFF] font-semibold text-xs Tablet:text-base' onClick={scrollToTop}>Know More</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Comp6