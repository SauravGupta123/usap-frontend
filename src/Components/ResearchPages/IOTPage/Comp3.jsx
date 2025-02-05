import React from 'react'

function Comp3() {
    return (
        <div className='w-full h-auto  bg-[#EEEEEE]  px-4 Tablet:px-12 py-12 flex flex-col items-center justify-start space-y-6'>
            <div className='bg-[#1CB918] text-[#FFFFFF] font-poppins font-bold text-base Tablet:text-lg rounded-[50px] px-12 py-4 w-auto text-center'>Technology Used  in Kit</div>
            <div className=' w-full flex flex-col Tablet:flex-row justify-around items-start space-y-6 Tablet:space-y-0 Tablet:space-x-20 font-inter font-bold text-sm Tablet:text-base'>
                <div className=' flex flex-col space-y-6'>
                    <div className='flex flex-row justify-start items-center space-x-6'>
                        <img className='w-[100px] h-[100px]' src="/ResearchPages/IoTPageImages/image5.svg" alt="image5" />
                        <p>· Machine Learning for Soil Classification</p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-6'>
                        <img className='w-[100px] h-[100px]' src="/ResearchPages/IoTPageImages/image6.svg" alt="image6" />
                        <p>· Decision Support Systems</p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-6'>
                        <img className='w-[100px] h-[100px]' src="/ResearchPages/IoTPageImages/image7.svg" alt="image7" />
                        <p>· Data Analytics and Predictive Modeling</p>
                    </div>
                 
                </div>
                <div  className='flex flex-col space-y-6'>
                <div className='flex flex-row justify-start items-center space-x-6'>
                        <img className='w-[100px] h-[100px]' src="/ResearchPages/IoTPageImages/image8.svg" alt="image8" />
                        <p>· Remote Monitoring and Control</p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-6'>
                        <img className='w-[100px] h-[100px]' src="/ResearchPages/IoTPageImages/image9.svg" alt="image9" />
                        <p>· Wireless Sensor Networks</p>
                    </div>
                    <div className='flex flex-row justify-start items-center space-x-6'>
                        <img className='w-[100px] h-[100px]' src="/ResearchPages/IoTPageImages/image10.svg" alt="image10" />
                        <p>· Data Collection and Connectivity</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Comp3