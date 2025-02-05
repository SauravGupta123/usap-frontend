import React from 'react'

function Comp4() {
    return (
        <div className='w-full h-auto bg-[#C5F9A6] px-4 Tablet:px-12 py-12 flex flex-col justify-between items-start space-y-8'>
            <div className='w-auto h-auto py-2 px-20 bg-[#E6FFD6] font-inter font-bold text-lg rounded-[10px] mx-auto'>Types of kit</div>
            <div className='flex flex-col Tablet:flex-row justify-between items-center space-y-4 Tablet:space-y-0'>
                <div className='flex flex-col space-y-4 font-inter font-medium text-base'>
                    <b><u><p>1. Integrated 7-in-1 Sensor Kit</p></u></b>
                    <p>Typically includes sensors for electrical conductivity, humidity, nitrogen, potassium, phosphorus and moisture, pH, Electrical conductivity. Provides a holistic view of the environment, useful for various applications such as soil monitoring, smart home automation, and environmental research.</p>
                </div>
                <img src="/ResearchPages/IoTPageImages/image11.svg" alt="image11" />

                </div>
               
                    <div className='flex flex-col space-y-4 font-inter font-medium text-base'>
                        <b><u><p>2. Individual Kit:</p></u></b>
                        <p>· Capacitive soil moisture: Determine the moisture of the soil content<br />
                            · DHT22: Determine the temperature and the humidity of the soil content<br />
                            · NPK Sensor kit: Determine the phosphorus, potassium and nitrogen level of soil.<br />
                            · EC sensor: Determine the electrical conductivity<br />
                            · pH sensor: Determine the pH of the soil</p>
                    </div>
                    <img className='w-full h-full Tablet:h-[50%] Tablet:w-[50%] mx-auto' src="/ResearchPages/IoTPageImages/image12.svg" alt="image12" />
              
          
        </div>
    )
}

export default Comp4