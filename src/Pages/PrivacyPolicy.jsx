import React from 'react'
import NavBar from '../Components/HomePageComponents/NavBar'
import Footer from '../Components/HomePageComponents/Footer'

function PrivacyPolicy() {
  return (
    <div className="bg-[#f7f7fe]">
      <NavBar />
      <div className='bg-blu-300 h-[35vh] flex flex-col mt-5 justify-center space-y-5 pl-[8vw] border-y-2 border-solid border-[#ebebf0]'>
        <div className='flex justify-between w-[90%]'>
          <p className='text-sm font-semibold text-[#282c3f]'>Legal Rights</p>
        </div>
        <h1 className='text-5xl font-extrabold text-[#282c3f] capitalize'>Privacy Policy</h1>
      </div>
      <div className='w-[90%] pl-[8vw] py-16'>
        <h1 className="text-base font-bold leading-6 text-[#555770] mt-5">Privacy Policy for Universal Student Assistance Portal (USAP)</h1>
        
        <p className="text-sm font-light leading-6 text-[#555770] mt-4">
          Last Updated: November 04, 2024
        </p>

        <p className="text-sm font-light leading-6 text-[#555770] mt-4">
          Universal Student Assistance Portal (USAP) is committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, and share information about you through our website, mobile app, and any other services we provide. By using our app, you agree to this Privacy Policy.
        </p>

        <div className="mt-8">
          <h2 className="text-base font-bold leading-6 text-[#555770]">1. Introduction</h2>
          <p className="text-sm font-light leading-6 text-[#555770] mt-2">
            This Privacy Policy applies to the Universal Student Assistance Portal (USAP) and is available on the Google Play Store listing page for the USAP app, as well as within the app itself. It is a public, non-editable document accessible at all times through an active URL. USAP is committed to transparency regarding the collection and handling of your personal data in compliance with applicable privacy regulations and Google Play's User Data policy.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-base font-bold leading-6 text-[#555770]">2. Information We Collect</h2>
          <p className="text-sm font-light leading-6 text-[#555770] mt-2">
            USAP collects and processes personal and sensitive data for purposes of providing educational resources, assistance, and support to Indian students. The types of data collected may include:
          </p>
          <ul className="list-disc pl-6 mt-2 text-sm font-light leading-6 text-[#555770]">
            <li className="mt-2"><strong className="font-semibold">Personal Information</strong>: Information such as name, email address, phone number, or educational details, which is collected when you sign up, create a profile, or use features that require authentication.</li>
            <li className="mt-2"><strong className="font-semibold">Device Information</strong>: Details like device model, IP address, operating system, and app usage patterns to enhance our services and ensure compatibility.</li>
            <li className="mt-2"><strong className="font-semibold">Usage Data</strong>: Interaction data to analyze and improve app features, track performance, and troubleshoot issues.</li>
          </ul>
          <p className="text-sm font-light leading-6 text-[#555770] mt-2">
            We may also collect non-personal information, such as analytics and usage statistics, to improve our services.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-base font-bold leading-6 text-[#555770]">3. How We Use Your Information</h2>
          <p className="text-sm font-light leading-6 text-[#555770] mt-2">
            Your data is used to:
          </p>
          <ul className="list-disc pl-6 mt-2 text-sm font-light leading-6 text-[#555770]">
            <li>Provide, personalize, and improve our services.</li>
            <li>Respond to inquiries and support requests.</li>
            <li>Communicate with you about updates, features, and news related to USAP.</li>
            <li>Maintain security, verify identity, and prevent fraudulent activities.</li>
          </ul>
          <p className="text-sm font-light leading-6 text-[#555770] mt-2">
            We do not share your personal data with third parties except for service providers necessary to operate USAP and improve the user experience. All data sharing is governed by strict contractual obligations to safeguard your privacy.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-base font-bold leading-6 text-[#555770]">4. Data Retention and Deletion Policy</h2>
          <p className="text-sm font-light leading-6 text-[#555770] mt-2">
            USAP retains your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. You may request the deletion of your account and associated data by contacting us at the provided email address. Upon request, USAP will permanently delete your personal data within 30 days, unless specific legal obligations require otherwise.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-base font-bold leading-6 text-[#555770]">5. Security of Your Information</h2>
          <p className="text-sm font-light leading-6 text-[#555770] mt-2">
            We implement robust data security practices to protect your personal and sensitive data, including:
          </p>
          <ul className="list-disc pl-6 mt-2 text-sm font-light leading-6 text-[#555770]">
            <li>Encryption of sensitive data during transmission and storage.</li>
            <li>Access controls and regular audits to ensure data integrity and confidentiality.</li>
            <li>Compliance with standard data protection measures.</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-base font-bold leading-6 text-[#555770]">6. Contact Us</h2>
          <p className="text-sm font-light leading-6 text-[#555770] mt-2">
            If you have any questions or concerns regarding this Privacy Policy, or if you wish to exercise any of your data privacy rights, please reach out to us at:
          </p>
          <ul className="list-none mt-2 text-sm font-light leading-6 text-[#555770]">
            <li><strong className="font-semibold">Contact Email :</strong>info@isafrance.org
          </li>
            <li><strong className="font-semibold">Address</strong> : Paris, France</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy