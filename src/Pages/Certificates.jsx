import React from 'react'
import NavBar from '../Components/HomePageComponents/NavBar'
import UnderConstruction from '../Components/UnderConstruction'
import Footer from '../Components/HomePageComponents/Footer'

function Certificates() {
  return (
    <>
    <UnderConstruction />
    <NavBar />
    <div className='w-full h-auto m-auto'>
        <div className='w-[70%] m-auto flex flex-col items-center justify-center'>
        <img src="/Certificates/certificate-1.png" alt="cert-1"/>
        <img src="/Certificates/certificate-3.png" alt="cert-3"/>
        <img src="/Certificates/certificate.png" alt="cert-2"/>
        </div>
    </div>
    <Footer />
    </>
    
  )
}

export default Certificates