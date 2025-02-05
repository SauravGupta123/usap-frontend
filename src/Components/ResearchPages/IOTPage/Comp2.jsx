import React from 'react'

function Comp2() {
    return (
        <div className='w-full h-auto bg-[#EEEEEE]  px-4 Tablet:px-12 py-12 flex flex-col justify-between space-y-20'>
            <div className='flex flex-col justify-start items-start space-y-6'>
                <div className='bg-[#7BBB3B] text-[#FFFFFF] font-poppins font-bold text-lg rounded-[50px] px-8 py-4 w-auto text-center'>About our IoT KIT</div>
                <div className='bg-gradient-to-r from-[#00B09B] to-[#96C93D] rounded-[32px] p-8 font-inter font-medium text-[#FFFFFF]'>
                    Sensors kits can be tailored for various applications, such as agriculture, environmental monitoring, home automation, robotics, or industrial processes. The sensors within a kit may measure parameters like temperature, humidity, light intensity, pressure, gas concentration, pH, electrical conductivity, motion, or other relevant factors depending on the intended use.
                </div>
            </div>
            <div className='flex flex-col justify-start items-start space-y-6'>
                <div className='bg-[#7BBB3B] text-[#FFFFFF] font-poppins font-bold text-lg rounded-[50px] px-8 py-4 w-auto text-center'>Benefits of IOT KIT</div>
                <div className='w-full bg-gradient-to-r from-[#00B09B] to-[#96C93D] rounded-[32px] p-4 font-inter font-medium text-[#FFFFFF] flex flex-col Tablet:flex-row justify-around items-center'>
                <img className='w-[90%] Tablet:w-auto' src="/ResearchPages/IoTPageImages/image2.svg" alt="image2" />
                <img  className='w-[90%] Tablet:w-auto'  src="/ResearchPages/IoTPageImages/image3.svg" alt="image3" />
                <img className='w-[90%] Tablet:w-auto' src="/ResearchPages/IoTPageImages/image4.svg" alt="image4" />
                </div>
            </div>
        </div>

    )
}

export default Comp2