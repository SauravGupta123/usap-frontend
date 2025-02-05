import React from 'react'

function Comp3() {
    return (
        <div className='w-full h-auto  bg-gradient-to-b from-[#1E40AF] to-[#3B82F6] flex flex-col justify-evenly items-center space-y-12 py-12 px-4 Tablet:px-0 '>
            <p className='font-poppins font-medium text-3xl text-[#FFFFFF]'>OUR HIGHLIGHTS</p>
            <div className='w-full flex flex-col Laptop-lg:flex-row justify-around items-center space-y-8 Laptop-lg:space-y-0'>
                <div className='flex flex-col items-center justify-center space-y-6   bg-[#FFFFFF] rounded-2xl pb-4 shadow-xl'>
                    <img src="/ResearchAndInnovationImages/image-5.svg" alt="image5" />
                    <p className='font-poppins font-medium text-lg text-[#000000] text-center'>Nexus Robotics develops <br /> and Robotic Weeders </p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-6 object-cover bg-[#FFFFFF] rounded-2xl pb-4 shadow-xl'>
                    <img src="/ResearchAndInnovationImages/image-6.svg" alt="image6" />
                    <p className='font-poppins font-medium text-lg text-[#000000] text-center'>Arva intelligence provides <br /> AI-powered crop planning </p>
                </div>

                <div className='flex flex-col items-center justify-center space-y-6 bg-[#FFFFFF] rounded-2xl pb-4 shadow-xl'>
                    <img src="/ResearchAndInnovationImages/image-7.svg" alt="image7" />
                    <p className='font-poppins font-medium text-lg text-[#000000] text-center'>Equinox’s Drones offers Drone <br /> Solutions for Farmers</p>
                </div>
            </div>
            <p className='font-poppins font-medium text-lg text-[#FFFFFF]'>And Many More Coming Soon</p>
        </div>
    )
}

export default Comp3