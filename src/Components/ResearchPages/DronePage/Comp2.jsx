import React from 'react'

function Comp2() {
    return (
        <div className='w-full h-auto flex flex-col justify-between items-center space-y-6 px-4 py-16'>
            <div className='bg-[#599121] w-auto h-auto p-4 font-poppins font-extrabold text-xl Tablet:text-2xl text-[#FFFFFF] rounded-[50px] text-center'>
                About our  Drones
            </div>
            <div className='bg-gradient-to-r from-[#96e8de] to-[#cff095] rounded-[32px] w-full Laptop-lg:w-[90%] h-auto px-4 Tablet:px-12 py-8 font-inter font-medium text-base Tablet:text-xl leadind-5'>

                The aim of using a drone for agricultural surveillance is to enhance farming practices and optimize crop management through efficient data collection and analysis. The primary objectives include:
                <br />
                <b> 1. Crop Health Monitoring:</b> Drones can capture high-resolution images and data to monitor the health of crops, identifying potential issues such as diseases, nutrient deficiencies, or pest infestations early on.
                <br />
                <b>2. Yield Estimation:</b> By analyzing imagery and data collected by drones, farmers can estimate crop yield more accurately, helping in planning harvest and post-harvest activities.
                <br />
                <b>3. Pest and Disease Detection:</b> Drones can detect signs of pests and diseases across large areas, enabling targeted interventions and reducing the need for widespread chemical applications.
                <br />
                <b>4. Irrigation Management:</b> Drones can identify areas with inconsistent irrigation or water stress, allowing farmers to adjust irrigation practices for optimal water use.

            </div>
        </div>
    )
}

export default Comp2