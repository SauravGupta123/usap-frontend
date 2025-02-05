import React from 'react'

function Comp4() {
    return (
        <div className='w-full h-auto bg-[#EEEEEE] py-24 px-4 Laptop-lg:px-12 flex flex-col justify-between items-center space-y-6'>
            <div className='bg-[#1FBF1C] w-auto h-auto px-6 py-4 font-poppins font-extrabold text-base  Tablet:text-2xl text-[#FFFFFF] rounded-[20px] text-center'>
                PROS AND CONS OF  OUR DRONE
            </div>
            <div className=' w-full flex  flex-col Laptop-lg:flex-row justify-between items-center Laptop-lg:space-x-24 space-y-6 Laptop-lg:space-y-0'>
                <div className='w-full Laptop-lg:w-[50%] flex flex-col items-center justify-center'>
                    <p className='font-inter font-bold text-xl Tablet:text-2xl'>Pros:</p>
                    <div className='w-full bg-gradient-to-r from-[#96e8de] to-[#cff095] rounded-[32px] h-auto flex flex-col justify-between items-center space-y-6 p-6'>
                        <div className='flex flex-row justify-between items-center space-x-6 font-inter font-normal text-base'>
                            <img className="w-[100px] h-[100px]" src="/ResearchPages/DronePageImages/image-2.svg" alt="image-2" />
                            <p><b>1. Efficiency:</b> Drones can cover large areas quickly, providing comprehensive surveillance that might be challenging with manual methods.</p>
                        </div>
                        <div className='flex flex-row justify-between items-center space-x-6 font-inter font-normal text-base'>
                            <img className="w-[100px] h-[100px]"  src="/ResearchPages/DronePageImages/image-3.svg" alt="image-3" />
                            <p><b>2. Cost-Effective:</b> Compared to traditional aerial photography methods, drones are relatively affordable and can save costs on hiring manned aircraft.</p>
                        </div>
                        <div className='flex flex-row justify-between items-center space-x-6 font-inter font-normal text-base'>
                            <img className="w-[100px] h-[100px]"  src="/ResearchPages/DronePageImages/image-4.svg" alt="image-4" />
                            <p><b>3. Precision and Detail:</b> Drones offer high-resolution imagery that can capture fine details, helping to identify crop health issues, pests, and other problems early on.</p>
                        </div>
                    </div>
                </div>
               

                <div className='w-full Laptop-lg:w-[50%] flex flex-col items-center justify-center'>
                    <p className='font-inter font-bold text-xl Tablet:text-2xl'>Cons:</p>
                    <div className='w-full bg-gradient-to-r from-[#96e8de] to-[#cff095] rounded-[32px] h-auto flex flex-col justify-between items-center space-y-6 p-6'>
                    <div className='flex flex-row justify-between items-center space-x-6 font-inter font-normal text-base'>
                            <img  className="w-[100px] h-[100px]" src="/ResearchPages/DronePageImages/image-5.svg" alt="image-5" />
                            <p><b>1. Weather Dependency:</b> Drones are sensitive to weather conditions. Rain, strong winds, or low visibility can limit their usability.</p>
                        </div>
                        <div className='flex flex-row justify-between items-center space-x-6 font-inter font-normal text-base'>
                            <img className="w-[100px] h-[100px]"  src="/ResearchPages/DronePageImages/image-6.svg" alt="image-6" />
                            <p><b>2. Skill and Regulations:</b> Piloting drones requires some skill, and there might be regulations you need to follow depending on your location, such as obtaining permits or licenses.</p>
                        </div>
                        <div className='flex flex-row justify-between items-center space-x-6 font-inter font-normal text-base'>
                            <img  className="w-[100px] h-[100px]" src="/ResearchPages/DronePageImages/image-7.svg" alt="image-7" />
                            <p><b>3. Battery Life:</b> Drones typically have limited flight times due to battery constraints, which could require multiple flights for larger fields.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Comp4




