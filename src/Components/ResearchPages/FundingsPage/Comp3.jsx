import React from 'react'

function Comp3() {
    return (
        <div className='w-full h-auto bg-[#EEEEEE] px-6 Laptop-lg:px-32 py-10  relative flex flex-col Tablet:flex-row justify-center items-center space-y-6 Tablet:space-y-0 Tablet:space-x-12'>
            <div className='h-[50vh]  absolute bottom-0 right-0 overflow-hidden'>
                <img src="/ResearchPages/FundingPageImages/image16.svg" alt="image16" />
            </div>
            <div className='flex flex-col space-y-6 w-full Tablet:w-[50%] Laptop-lg:w-[40%]'>
                <div className='bg-[#FFFFFF] rounded-[30px] pl-8 p-3 flex flex-col items-center  relative'>
                    <div className='w-[50px] h-[50px]  rounded-full bg-[#73DD58] font-inter font-bold flex items-center justify-center absolute top-12 -left-6'>
                        01
                    </div>
                    <p className='bg-[#C5F9A6] w-auto h-auto px-4 py-2 rounded-[20px] font-inter font-bold text-sm mb-2'>Educational Institution</p>
                    <p className='bg-[#C5F9A6] w-auto h-auto px-4 py-2 rounded-[20px] font-inter font-normal text-xs'>Approach your institution's administration or student affairs office to inquire about available funding for student organizations.</p>

                </div>
                <div className='bg-[#FFFFFF] rounded-[30px] pl-8 p-3 flex flex-col items-center  relative'>
                    <div className='w-[50px] h-[50px]  rounded-full bg-[#96F59F] font-inter font-bold flex items-center justify-center absolute top-12 -left-6'>
                        02
                    </div>
                    <p className='bg-[#C5F9A6] w-auto h-auto px-4 py-2 rounded-[20px] font-inter font-bold text-sm mb-2'>Corporate Sponsorship</p>
                    <p className='bg-[#C5F9A6] w-auto h-auto px-4 py-2 rounded-[20px] font-inter font-normal text-xs'>Explore partnerships with local agricultural companies or organizations that align with ISA-F's vision and may be interested in supporting your chapter's activities.</p>

                </div>
                <div className='bg-[#FFFFFF] rounded-[30px] pl-8 p-3 flex flex-col items-center justify-start  relative'>
                    <div className='w-[50px] h-[50px]  rounded-full bg-[#B4FCFC] font-inter font-bold flex items-center justify-center absolute top-12 -left-6'>
                        03
                    </div>
                    <p className='bg-[#C5F9A6] w-auto h-auto px-4 py-2 rounded-[20px] font-inter font-bold text-sm mb-2'>Government funding</p>
                    <p className='bg-[#C5F9A6] w-auto h-auto px-4 py-2 rounded-[20px] font-inter font-normal text-xs'>Government sponsorship is a valuable source of financial and logistical support for the ISA-F Student Chapter's initiatives in sustainable agriculture and AIML.</p>

                </div>
            </div>
            <div className='bg-[#FFFFFF] w-full Tablet:w-[50%] Laptop-lg:w-[35%] h-auto rounded-[20px] shadow-custom flex flex-col items-center justify-between py-4 px-8 z-10 space-y-2 '>
                <p className='font-inter font-bold text-lg text-[#599121]'>Benefits</p>
                <p className='font-inter font-normal text-base'>Funding opportunities empower innovation, driving progress, and societal betterment through financial support for research, education, and transformative projects.</p>
                <img className='h-[180px] w-[180px]' src="/ResearchPages/FundingPageImages/image17.svg" alt="image17" />
                <button className='w-auto h-auto px-6 py-4 bg-[#C5F9A6] rounded-[20px] font-inter font-bold text-lg'>Get Started</button>
            </div>
        </div>
    )
}

export default Comp3