import React, { useEffect, useState } from 'react';
import { Typography, Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import NavBar from '../Components/HomePageComponents/NavBar';
import Footer from '../Components/HomePageComponents/Footer';

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

const FAQs = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqData = [
        {
            question: "What is the Universal Student Assistance Portal (USAP)?",
            answer: "The Universal Student Assistance Portal (USAP) is a support platform tailored for International students in Abroad, offering assistance with administrative processes, scholarships, accommodation, career guidance, daily life, and more."
        },
        {
            question: "Who can use USAP?",
            answer: "Any International student planning to study or currently studying in Abroad can access USAP services. It covers students at all academic levels and institutions across Abroad."
        },

        {
            question: "Can USAP help with scholarships?",
            answer: "Yes, USAP provides guidance on scholarships available before admission, during your studies in Abroad, and for higher studies within Abroad. This includes scholarships for various academic levels and fields of study."
        },
        {
            question: "How can USAP assist with accommodation and domicile registration?",
            answer: "USAP offers help in finding student accommodation, navigating local housing laws, and completing the domicile registration process, ensuring students have a legal residential status."
        },
        {
            question: "Does USAP provide information on student loans and financing?",
            answer: "USAP connects students with foreign banks offering education loans and other financial solutions to manage tuition fees and living expenses during their studies."
        },
        {
            question: "What daily life services does USAP cover?",
            answer: "USAP supports students with essential services like opening a bank account, applying for CAF (housing allowance), understanding social security, using Navigo (public transport), OFFI registration, CVEC (student contribution), and accessing CROUS (student housing, food services)."
        },
        {
            question: "Are foreign language classes available through USAP?",
            answer: "Yes, USAP provides information about language classes and learning resources to help students improve their foreign language skills, which are essential for daily life and career opportunities in Abroad."
        },
        {
            question: "Does USAP offer career guidance and job search assistance?",
            answer: "USAP helps students with career advice, job search strategies, and access to resources for internships, part-time jobs, and full-time positions post-study."
        },
        {
            question: "Can USAP assist with entrepreneurship or starting a company?",
            answer: "USAP offers resources for students interested in entrepreneurship, including guidance on starting a business, legal requirements, and access to incubators or funding opportunities in Abroad."
        },
        {
            question: "How can I contact USAP for more information?",
            answer: "You can reach USAP through their official website, email support, or by visiting their offices (if applicable) for personalized guidance on any of the services mentioned."
        },
    ];
    

    return (
        <div className='flex flex-col items-center w-full'>
            <NavBar />

            <div className='w-auto px-[5rem] sm:px-[9rem] md:px-[12rem] lg:px-[16rem] h-[70px] sm:h-[80px] lg:h-[100px] bg-[#1E40AF] flex items-center justify-center rounded-[2rem] mb-12 relative top-16'>
                <Typography
                    variant='h1'
                    color='white'
                    className='text-center text-[28px] sm:text-[33px] lg:text-[40px] tracking-tighter font-bold'
                >
                    Frequently Asked Questions
                </Typography>
            </div>

            <div className='w-full px-4 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mt-20 mb-12'>
                {faqData.map((item, index) => (
                    <Accordion key={index} open={open === index + 1} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader
                            onClick={() => handleOpen(index + 1)}
                            className="border-b border-blue-gray-100 transition-colors hover:text-blue-500 relative pr-8" // Added relative and pr-8
                        >
                            <span className="mr-4">{item.question}</span>
                            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xl">
                                {open === index + 1 ? '-' : '+'}
                            </span>
                        </AccordionHeader>
                        <AccordionBody className="text-base font-normal">
                            {item.answer}
                        </AccordionBody>
                    </Accordion>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default FAQs;