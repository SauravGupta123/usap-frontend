import React from 'react'
// import UnderConstruction from '../Components/UnderConstruction'
import NavBar from '../Components/HomePageComponents/NavBar'
import Footer from '../Components/HomePageComponents/Footer'


function RefundAndCancellation() {
  return (
    <div className="bg-[#f7f7fe]">
      {/* <UnderConstruction /> */}
      <NavBar />
      <div className='bg-blu-300 h-[35vh] flex flex-col mt-5 justify-center space-y-5 pl-[8vw] border-y-2 border-solid border-[#ebebf0]'>
        <div className='flex justify-between w-[90%]'>
          <p className='text-sm font-semibold text-[#282c3f]'>Legal Rights</p>
          {/* <a href='/legalRightsPDF/refund-cancellation-policy.pdf' target='_blank' className='text-sm font-light flex items-center gap-2 text-white bg-green-500 py-3 px-3 rounded-lg'>
            Download PDF <img className="h-[20px] w-[20px]" src="/legalRightsPDF/download.png" alt="download" />
          </a> */}
        </div>
        <h1 className='text-5xl font-extrabold text-[#282c3f] capitalize'>Refund & Cancellation Policy</h1>
      </div>
      <div className='w-[90%] pl-[8vw] py-16'>
        <h1 className="text-base font-bold leading-6 text-[#555770] mt-5">Refund & Cancellation Policy for Indian Student  Assistance Portal[USAP] </h1>

        <p className="text-sm font-light leading-6 text-[#555770]">This is the Refund & Cancellation Policy for USAP , accessible from https://ISA-France.org</p> <br /><br />

        <p className="text-sm font-light leading-6 text-[#555770]"><strong className='text-base font-semibold'>Refund Policy</strong>: <br />

          <br />

          <strong className='text-base font-semibold'>Refund Eligibility</strong>: <br />

          Customers may be eligible for a refund under the following circumstances:<br />
          If a purchased product is damaged or defective upon delivery.<br />
          If the product received does not meet the specifications and descriptions as
          outlined on our website.<br />
          If a service is not provided as promised.<br />
          <br />


          <strong className='text-base font-semibold'>Refund Process:</strong>: <br />

          To request a refund, customers must contact our customer support team within 24
          hours of the purchase or service delivery.<br />
          Customers may be required to provide proof of purchase or other supporting
          documentation.<br />
          Refunds will be processed within 24 hours after the request is approved.<br /> <br />
          <p className="text-sm font-light leading-6 text-[#555770]"><strong className='text-base font-semibold'>Cancellation Policy</strong>: <br />

            <br />
            <strong className='text-base font-semibold'>Cancellation Eligibility</strong>: <br />

            Customers may cancel an order or subscription under the following conditions:<br />
            Cancellation requests for product orders should be made within 2 days of the
            purchase.<br />
            Cancellation of subscription services should adhere to the terms outlined in the
            respective subscription agreement.
            <br />
            <br />
            <strong className='text-base font-semibold'>Cancellation Process</strong>: <br />

            To request a cancellation, customers must contact our customer support team.<br />
            Cancellation requests for subscriptions should follow the terms specified in the
            subscription agreement.

            <br />
            <br />
            <strong className='text-base font-semibold'>Cancellation Fees</strong>: <br />

            Cancellation fees may apply for certain services or products. The amount and
            conditions of these fees will be clearly communicated at the time of purchase.

            <br />
            <br />
            <strong className='text-base font-semibold'>Customer Responsibilities</strong>: <br />

            Customers may be required to return products in their original condition for
            eligibility for a refund.<br />
            Compliance with the specified cancellation process is the responsibility of the
            customer.

            <br />
            <br />
          </p>


        </p>
      </div>
      <Footer />
    </div>
  )
}

export default RefundAndCancellation