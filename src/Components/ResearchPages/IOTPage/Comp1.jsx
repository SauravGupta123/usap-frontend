import React from 'react'

function Comp1() {
    return (
        <div className='w-full h-auto Laptop-lg:h-[calc(100vh-(80px))] bg-[#EEEEEE] flex flex-col justify-evenly items-center pt-6 pb-4 space-y-4 px-4 Tablet:px-12 relative'>
            <div className='bg-[#599121] w-auto h-auto px-20 py-1 Tablet:py-3 font-poppins font-extrabold text-4xl text-[#FFFFFF] rounded-[50px] text-center'>
                <p className='font-poppins font-extrabold text-base Tablet:text-2xl'> Our Soil Health Kit</p>
                <p className='font-inter font-bold text-sm Tablet:text-lg text-[#E9DEDE]'>The Soil Sense an soil health measuring kit of SN Silos</p>
            </div>
            <div className=' flex flex-col items-center justify-center font-inter font-bold text-base Tablet:text-xl space-y-4'>
                <p className='text-center'>Remote Farming via Internet of Things and Machine Learning </p>
                <p>Agro-Tech Kit</p>
            </div>
            <div className='w-full flex flex-col Laptop-lg:flex-row justify-between items-start space-y-4 Laptop-lg:space-y-0'>
                <div className='w-full flex flex-col items-center justify-center space-y-4'>
                    <p className='bg-[#7BBB3B] text-[#FFFFFF] font-poppins font-bold text-base Tablet:text-lg rounded-[50px] p-4 w-[250px] text-center'>Physical Layer</p>
                    <div className='bg-[#D9D9D9] w-full  Laptop-lg:w-[250px] h-[33vh]'></div>
                </div>
                <img className="pt-4 hidden Laptop-lg:flex" src="/ResearchPages/IoTPageImages/Arrow.svg" alt="arrow" />
                <div className='w-full flex flex-col items-center justify-center space-y-4'>
                    <p className='bg-[#7BBB3B] text-[#FFFFFF] font-poppins font-bold text-base Tablet:text-lg rounded-[50px] p-4 w-[300px] text-center'>Data Modelling with ML</p>
                    <div className='bg-[#D9D9D9] w-full  Laptop-lg:w-[300px] h-[33vh]'></div>
                </div>
                <img className="pt-4 hidden Laptop-lg:flex" src="/ResearchPages/IoTPageImages/Arrow.svg" alt="arrow" />
                <div className='w-full flex flex-col items-center justify-center space-y-4'>
                    <p className='bg-[#7BBB3B] text-[#FFFFFF] font-poppins font-bold text-base Tablet:text-lg rounded-[50px] p-4 w-[250px] text-center'>Presentation layer </p>
                    <div className='bg-[#D9D9D9] w-full  Laptop-lg:w-[250px] h-[33vh]'></div>
                </div>


            </div>
            <p>Building a distributed system with IOT and Android App. Prediction of the precise value of weather and soil profile parameters needed for crop production</p>
            <img className="absolute -top-6 left-0 Laptop-lg:left-[20%] w-[100px] h-[100px] Tablet:h-[150px] Tablet:w-[150px]" src="/ResearchPages/IoTPageImages/image1.svg" alt="image1"/>
        </div>

    )
}

export default Comp1