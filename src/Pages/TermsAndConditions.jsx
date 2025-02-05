import React from 'react'
import Footer from '../Components/HomePageComponents/Footer'
import NavBar from '../Components/HomePageComponents/NavBar'
// import UnderConstruction from '../Components/UnderConstruction'

function TermsAndConditions() {
    return (
        <>
            <div className="bg-[#f7f7fe]">
                {/* <UnderConstruction /> */}
                <NavBar />
                <div className='bg-blu-300 h-[35vh] flex flex-col mt-5 justify-center space-y-5 pl-[8vw] border-y-2 border-solid border-[#ebebf0]'>
                    <div className='flex justify-between w-[90%]'>
                        <p className='text-sm font-semibold text-[#282c3f]'>Legal Rights</p>
                        {/* <a href='/legalRightsPDF/terms-&-conditions.pdf' target='_blank' className='text-sm font-light flex items-center gap-2 text-white bg-green-500 py-3 px-3 rounded-lg'>
                            Download PDF <img className="h-[20px] w-[20px]" src="/legalRightsPDF/download.png" alt="download" />
                        </a> */}
                    </div>
                    <h1 className='text-5xl font-extrabold text-[#282c3f] capitalize'>Terms & Conditions</h1>
                </div>
                <div className='w-[90%] pl-[8vw] py-16'>
                    <h1 className="text-base font-bold leading-6 text-[#555770] mt-5"> Terms and Conditions - ISA-F (Indian Student  Assistance Portal)  </h1>

                    <p className="text-sm font-light leading-6 text-[#555770]">These are the Terms & Conditions for ISA-F , accessible from https://ISA-Abroad.org/</p> <br /><br />


                    <p className="text-sm font-light leading-6 text-[#555770]">Thank you for visiting https://USAP.org/, the official
                        website of ISA-Abroad (Indian Student  Assistance Portal). By using our website
                        or engaging with our services, you agree to adhere to the following terms
                        and conditions. Please read them carefully. </p>
                    <br /><br />


                    <strong className='text-base font-semibold leading-6 text-[#555770]'>Acceptance of Terms</strong>: <br />

                    <p className="text-sm font-light leading-6 text-[#555770]">By accessing and using our website, you acknowledge that you have read,
                        understood, and agreed to be bound by these terms and conditions. If you
                        do not agree with any part of these terms, please refrain from using our
                        services.
                        If a service is not provided as promised.</p><br />
                    <br />

                    <strong className='text-base font-semibold leading-6 text-[#555770]'>Privacy Policy</strong>: <br />

                    <p className="text-sm font-light leading-6 text-[#555770]">We are committed to safeguarding your privacy. Our Privacy Policy
                        outlines how we collect, use, and protect your personal information.
                        Please review our Privacy Policy to understand our practices. </p>
                    <br />
                    <br />
                    <strong className='text-base font-semibold leading-6 text-[#555770]'>Use of the Website</strong>: <br />

                    <p className="text-sm font-light leading-6 text-[#555770]">You may use our website for personal, non-commercial purposes. You must
                        not use this website in any way that violates applicable laws or
                        regulations.  </p>
                    <br /><br />

                    <strong className='text-base font-semibold leading-6 text-[#555770]'>Intellectual Property</strong>: <br />

                    <p className="text-sm font-light leading-6 text-[#555770]">All content, including but not limited to text, graphics, logos, and
                        images, on this website is the intellectual property of USAP. You are
                        prohibited from reproducing, distributing, or modifying our content
                        without our explicit written consent. </p>
                    <br /><br />
                    <strong className='text-base font-semibold leading-6 text-[#555770]'>Third-Party Links</strong>: <br />

                    <p className="text-sm font-light leading-6 text-[#555770]">Our website may contain links to third-party websites. We are not
                        responsible for the content or practices of these external sites. Your
                        interactions with them are subject to their respective terms and
                        policies.</p>

                    <br />
                    <br />
                    <strong className='text-base font-semibold leading-6 text-[#555770]'>Limitation of Liability</strong>: <br />

                    <p className="text-sm font-light leading-6 text-[#555770]">USAP and its affiliates are not liable for any damages or losses
                        resulting from your use of our website. We strive to provide accurate and
                        up-to-date information, but we make no warranties or guarantees regarding
                        the accuracy, completeness, or timeliness of our content. </p>

                    <br />
                    <br />

                    <strong className='text-base font-semibold leading-6 text-[#555770]'>Contact Information</strong>: <br />

                    <p className="text-sm font-light leading-6 text-[#555770]">For any inquiries or concerns related to these terms and conditions,
                        please contact us at the following address:
                      USAP (Indian Student  Assistance Portal) 2637, First Floor, Unit-II, Naya
                        Bazar Delhi, North Delhi, DL 110006 India </p>

                    <br />
                    <br />
                    <strong className='text-base font-semibold leading-6 text-[#555770]'>Modifications</strong>: <br />

                    <p className="text-sm font-light leading-6 text-[#555770]">USAP reserves the right to update or modify these terms and conditions at
                        any time. It is your responsibility to check this page periodically for
                        any changes. Your continued use of our website signifies your acceptance
                        of the revised terms. </p>

                    <br />
                    <br />
                    <p className="text-sm font-light leading-6 text-[#555770]">By using https://ISA-Abroad.org/, you agree to abide by these
                        terms and conditions. We appreciate your cooperation and welcome your
                        feedback. Thank you for choosing USAP for your agro research needs. </p>


                </div>
                <Footer />
            </div>
        </>

    )
}

export default TermsAndConditions