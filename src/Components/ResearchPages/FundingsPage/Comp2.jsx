import React from 'react'

function Comp2() {
    return (
        <div className='w-full h-auto bg-[#EEEEEE] px-4 Laptop-lg:px-12 py-10'>
            <div className='bg-[#D2FFB8] h-full pb-8 px-4 Laptop-lg:px-20 flex flex-col items-center justify-start space-y-6 relative'>
                <img className='absolute top-[20%] ' src="/ResearchPages/FundingPageImages/Vector.svg" alt="vector" />
                <p className='font-inter font-bold text-xl text-[#599121] p-3 '>How it Works</p>
                <div className='w-full  flex flex-col Tablet:flex-row justify-around items-center z-10 space-y-6 Tablet:space-y-0 Tablet:space-x-6 Laptop-lg:space-x-12'>
                    <div className='w-full Tablet:w-[33%] h-auto Tablet:h-[500px] Laptop-lg:h-full flex flex-col items-center justify-between space-y-6 bg-[#FFFFFF] p-4 relative'>
                        <div className='w-[50px] h-[50px]  rounded-full bg-[#73DD58] font-inter font-bold flex items-center justify-center absolute -top-6'>
                            01
                        </div>
                        <p className='font-inter font-bold text-lg'>REGISTER & SEND REQUEST</p>
                        <p className='font-inter font-normal text-base'>To register and request funding, visit our website, complete your profile, select a relevant opportunity, submit a well-prepared application, and await review.</p>
                        <div className='w-auto h-auto p-4 rounded-full bg-[#73DD58] border-[1px] border-black'>
                            <img className="h-[60px] w-[60px]" src="/ResearchPages/FundingPageImages/image13.svg" alt="image13" />
                        </div>
                    </div>
                    <div className='w-full Tablet:w-[33%] h-auto Tablet:h-[500px] Laptop-lg:h-full flex flex-col items-center justify-between space-y-6 bg-[#FFFFFF] p-4 relative'>
                        <div className='w-[50px] h-[50px]  rounded-full bg-[#96F59F] font-inter font-bold flex items-center justify-center absolute -top-6'>
                            02
                        </div>
                        <p className='font-inter font-bold text-lg'>ADMIN VERIFY DETAILS</p>
                        <p className='font-inter font-normal text-base'>As an administrator, verify applicants' details by thoroughly reviewing their applications, credentials, and supporting documents to ensure eligibility and authenticity.</p>
                        <div className='w-auto h-auto p-4 rounded-full bg-[#96F59F] border-[1px] border-black'>
                            <img className="h-[60px] w-[60px]" src="/ResearchPages/FundingPageImages/image14.svg" alt="image14" />
                        </div>
                    </div>
                    <div className='w-full Tablet:w-[33%] h-auto Tablet:h-[500px] Laptop-lg:h-full flex flex-col items-center justify-between space-y-6 bg-[#FFFFFF] p-4 relative'>
                        <div className='w-[50px] h-[50px]  rounded-full bg-[#B4FCFC] font-inter font-bold flex items-center justify-center absolute -top-6'>
                            03
                        </div>
                        <p className='font-inter font-bold text-lg'>COMPLETE PROFILE</p>
                        <p className='font-inter font-normal text-base'>To complete your funding profile, provide comprehensive personal and project information, including qualifications, objectives, and expected outcomes, demonstrating your readiness for funding support.</p>
                        <div className='w-auto h-auto p-4 rounded-full bg-[#B4FCFC] border-[1px] border-black'>
                            <img className="h-[60px] w-[60px]" src="/ResearchPages/FundingPageImages/image15.svg" alt="image15" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp2