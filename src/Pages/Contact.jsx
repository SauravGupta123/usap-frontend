import React from 'react'
import UnderConstruction from '../Components/UnderConstruction'
import NavBar from '../Components/HomePageComponents/NavBar'
import Footer from '../Components/HomePageComponents/Footer'
import {FaWhatsappSquare} from "react-icons/fa";
import { useState } from 'react';

function Contact() {
    const [fieldsValue, setFieldsValue] = useState({
        "name":"",
        "email":"",
        "phone":"",
        "message": "",
        })

        const handleChange = (e) =>
        {
            console.log("fields value object", fieldsValue);
    
            setFieldsValue({
                ...fieldsValue,
                [e.target.name]: e.target.value,
            })
            
        }
        const handleSubmit = (e) =>
        {
            console.log("fields value object", fieldsValue);
        }


  return (
  <>
  <UnderConstruction />
  <NavBar />
  <div className='bg-[#f7f9fc] w-full h-auto py-20'>
  <section className='bg-[#f7f7fe] w-[82vw] mx-auto mt-10'>
            <section className='h-[50vh] bg-white py-10 mb-5'>
                <div className='lg:w-[70vw] w-[82vw] h-full mx-auto bg-pin-300 flex lg:flex-row flex-col items-center justify-between'>
                    <div className='space-y-3'>
                        <h3 className='lg:text-3xl 2xl:text-4xl text-base text-center  sm:text-3xl font-bold lg:leading-[36px] leading-[5px] text-[#14142b]'>We would love to hear from you</h3>
                        <p className='sm:text-lg text-xs lg:text-lg font-light text-[#6b6b80] text-center'>Write to us or call us with your feedback or your queries</p>
                    </div>
                    <div className='lg:w-[30vw] h-full mt-5'>
                        <img src='/contactPageImages/contact_img.svg' height='100' width='100' className='h-full w-full' alt='' />
                    </div>
                </div>
            </section>
            <section className='bg-ble-300 w-[85vw] flex lg:flex-row flex-col justify-between mx-auto py-10'>
                <section className='bg-white lg:w-[64vw] flex lg:flex-row flex-col-reverse justify-between py-5 px-4 rounded-xl shadow-lg'>
                    <section className='bg-blu-300 lg:w-[28vw] py-4 mb-5 flex flex-col justify-center'>
                        <h5 className='text-xl font-semibold text-[#2A5267]'>We are at</h5>
                        <div className='flex gap-3 mt-6 '>
                            <img src='/contactPageImages/location.svg' height='30' width='30' alt='image' />
                            <div className='h-[70px]'>
                                <p className='lg:text-lg font-medium '>{`Registered address : 2637, FIRST FLOOR, UNIT-II, NAYA BAZAR DELHI North Delhi DL 110006 IN.`}</p>
                            </div>
                        </div>
                        <div className='bg-yello-300 h-[70vh] mt-7'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224083.66200929528!2d77.1732979524518!3d28.650518494253088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x830fcb13ad718313%3A0x14b5d48f3a7b17c3!2sSN%20Silos!5e0!3m2!1sen!2sin!4v1687766627431!5m2!1sen!2sin" className='w-full h-full' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </section>

                    <section className='bg-blu-300 lg:w-[28vw] py-4 mb-5 '>
                        <h5 className='text-xl font-semibold text-[#2A5267]'>Write to us</h5>
                        <div className='mt-6 flex h-[86vh] flex-col justify-between'>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor="" className='text-base font-light text-[#171717]'>Name</label>
                                <input type="text" name="name" id="nameField" onChange={handleChange} value={fieldsValue.name} placeholder='Enter your Name' className='bg-[#f3f3f6] border-[1px] border-solid border-[#d1d1db] rounded-lg h-[8vh] px-4'/>

                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor="" className='text-base font-light text-[#171717]'>Email</label>
                                <input type="email" name="email" id="mailField" onChange={handleChange} value={fieldsValue.email} placeholder='Enter your Email' className='bg-[#f3f3f6] border-[1px] border-solid border-[#d1d1db] rounded-lg h-[8vh] px-4'/>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor="" className='text-base font-light text-[#171717]'>Phone Number</label>
                                <input type="tel" name="phone" id="phoneNumField" onChange={handleChange} value={fieldsValue.phone} placeholder='Enter Phone Number' className='bg-[#f3f3f6] border-[1px] border-solid border-[#d1d1db] rounded-lg h-[8vh] px-4'/>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor="" className='text-base font-light text-[#171717]'>Message</label>
                                <textarea name="message" id="msgField" onChange={handleChange} value={fieldsValue.message} placeholder='Enter message here' className='bg-[#f3f3f6] border-[1px] border-solid border-[#d1d1db] rounded-lg h-[19vh] px-4 py-4'></textarea>
                            </div>
                            <button onClick={handleSubmit} type="submit" className='bg-[#2A5267] w-full h-[8vh] cursor-pointer outline-none text-white text-lg font-medium rounded-lg'>Send Message</button>
                        </div>
                    </section>
                </section>
                <section className='flex flex-col justify-around bg-yello-300 mb-5 mt-10 space-y-5 lg:space-y-0'>
                    <div className='lg:w-[20vw] h-[20vh] bg-white rounded-xl shadow-xl space-y-2 flex flex-col justify-center pl-5'>
                            <div className='flex gap-3'>
                                <img src='/contactPageImages/call-us.svg' height='20' width='20' alt='image' className='text-[#2A5267]'/>
                                <p className='text-base font-medium'>Call Us</p>
                            </div>

                            <div className='pl-8 flex gap-3 items-center'>
                                <a href='https://wa.me/917827154022?text='><FaWhatsappSquare className='cursor-pointer text-2xl text-[#2A5267]' /></a>
                                <a href="tel:+91 7582055751" className='text-base font-normal text-[#2A5267]'>+91 7582055751</a>
                            </div>
                    </div>
                    <div className='lg:w-[20vw] h-[20vh] bg-white rounded-xl shadow-xl space-y-2 flex flex-col justify-center pl-5'>
                            <div className='flex gap-3'>
                                <img src='/contactPageImages/email-us.svg' height='20' width='20' alt='image' />
                                <p className='text-base font-medium'>Email Us</p>
                            </div>
                            <div className='pl-8'><a href="mailto:info@snsilos.in" className='text-base font-normal text-[#2A5267]'>info@snsilos.in</a></div>
                    </div>
                    <div className='lg:w-[20vw] h-[20vh] bg-white rounded-xl shadow-xl space-y-2 flex flex-col justify-center pl-5'>
                            <div className='flex gap-3'>
                                <img src='/contactPageImages/Send.svg' height='20' width='20' alt='image' />
                                <p className='text-base font-medium'>Connect With Us</p>
                            </div>
                            <div className='pl-5  space-x-2  space-y-2 lg:space-y-0 lg:space-x-0'>
                                    <div className='flex bg-rd-300 justify-between items-center sm:w-[18vw] md:w-[18vw] lg:w-[13vw] w-[35vw] '>
                                    <a href="https://twitter.com/techland01" ><img src='/contactPageImages/twitter.svg' height='22' width='22' alt='image' /></a>
                                    <a href="https://www.facebook.com/techlandofficial1/" ><img src='/contactPageImages/logo-facebook.svg' height='10' width='10' alt='image' /></a>
                                    <a href="https://www.secure.instagram.com/techland_snsilos/" ><img src='/contactPageImages/instagram.png' height='22' width='22' alt='image' /></a>
                                    <a href="https://www.linkedin.com/company/techlandofficial1/" ><img src='/contactPageImages/logo-linkedin.svg' height='22' width='22' alt='image' /></a>
                                    </div>
                            </div>
                    </div>
                </section>
            </section>

        </section>
        </div>
  <Footer />
  </>
  )
}

export default Contact