import React from 'react'
import { Link } from 'react-router-dom';

function Comp8() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    };
    return (
        <div className='w-full h-auto bg-[#EEEEEE] flex flex-col items-center justify-center space-y-8 py-10 px-4 Laptop-lg:px-[70px]'>
            <div className='w-auto h-auto px-12 py-3 bg-[#439835] rounded-[20px] font-inter font-bold text-2xl text-[#FFFFFF] flex items-center justify-center'>Fundings  </div>
            <div className='w-full Laptop-lg:w-[80%] flex flex-col Tablet:flex-row items-center justify-center Tablet:space-x-14 Laptop-lg:space-x-28 space-y-8 Tablet:space-y-0 bg-[#FFFFFF] rounded-2xl shadow-xl '>
                <div className='w-full Tablet:w-[50%] h-[350px]  overflow-hidden rounded-lg'>
                    <img className="w-full h-full object-cover " src="/ResearchAndInnovationImages/image-14.svg" alt="image14" />
                </div>
                <div className='w-full Tablet:w-[50%] h-[350px] Laptop-lg:py-4 px-4 Tablet:px-0 flex flex-col space-y-6 font-inter font-bold text-lg text-[#000000] '>
                    <p>Funding  opportunities</p>
                    <p>How to Apply </p>
                    <p>Find funding partners </p>
                    <p>Managing a project </p>
                    <p>How projects are chosen for funding</p>
                    <p>Tender Opportunities for research and innovation</p>
                </div>

            </div>
            <Link to="/fundings" className='w-auto h-auto px-4 py-2 rounded-[10px] bg-[#439835] text-[#FFFFFF] font-semibold text-base' onClick={scrollToTop}>Know More</Link>
        </div>

    )
}

export default Comp8