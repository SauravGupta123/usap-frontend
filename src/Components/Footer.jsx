import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-blue-gray-100 pt-4">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="flex flex-col ">
            <Typography
              variant="small"
              className="mb-6 text-[12px] flex items-center justify-center w-[70%] text-blue-gray-900 tracking-widest">
              We, Universal Student Assistance Portal (USAP), a company that aims to provide a platform for International students in Abroad to connect, share, and grow.
            </Typography>
            <div className="flex items-center flex-wrap">
              <div className="flex items-center gap-4 px-4 py-2">
                <BiSolidPhoneCall className="text-xl cursor-pointer" />
                <div className="underline text-[12px] font-semibold">
                  +91-8987662772
                </div>
              </div>
              <div className="flex items-center gap-4 px-4 py-2">
                <MdEmail className="text-xl cursor-pointer" />
                <div className="underline text-[12px] font-semibold">
                  Email:support@soilsense.com
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-between gap-4">
            <div className="text-blue-gray-900 ">
              <div className="text-xl font-bold mb-1 hover:text-black">
                Useful Links
              </div>

              <div className="hover:text-black text-sm py-1">Blog</div>
              <div className="hover:text-black text-sm py-1">
                <div className="">
                  <div className="">
                    {" "}
                    {/* Added ml-auto for right alignment */}
                    <button
                      className="btn btn-secondary"
                      onClick={toggleDropdown}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen}>
                      Membership Brochure
                    </button>
                    {isDropdownOpen && (
                      <div
                        className=" mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical">
                        <a
                          href="https://drive.google.com/file/d/1-YVdBdV3eOm_WmtJrIlK3EHQEpgMpfcp/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem">
                          School
                        </a>
                        <a
                          href="https://drive.google.com/file/d/1-RJhAVRX4Ch3bsc9OA9H1y930xVtSn_u/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem">
                          College/University
                        </a>
                        <a
                          href="https://drive.google.com/file/d/1-RSomLasLtwq164KeL1Tb4CZdAoGO0SL/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem">
                          External Advisor
                        </a>
                        <a
                          href="https://drive.google.com/file/d/1-TgDmjh18k0BLYkzrFlFSoPbU7lvDzai/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem">
                          Global Research Expert
                        </a>
                        <a
                          href="https://drive.google.com/file/d/1-ZyXScbLSC1tLmw_ej26-mAVOHTNepwn/view?usp=drive_linkk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem">
                          Whole ISA-France Brochure
                        </a>

                        {/* Add more file links as needed */}
                      </div>
                    )}
                  </div>
                </div>
                {/* Rest of your component */}
              </div>
            </div>

            <div className=" text-blue-gray-900">
              <div className="text-xl font-bold mb-1 hover:text-black">
                Contact us
              </div>
              <div className="hover:text-black text-semibold text-sm">
                2637, FIRST FLOOR, UNIT-II, NAYA BAZAR DELHI North Delhi DL
                110006 IN
              </div>
              <div className="mt-4 relative right-20 flex gap-4 text-blue-gray-900 sm:justify-center">
                <a href="https://www.facebook.com/ISA-Foffical" target="_blank">
                  <FaFacebook className="text-2xl cursor-pointer" />
                </a>

                <a
                  href="https://www.linkedin.com/showcase/offical-largest-agro-research-foundation/"
                  target="_blank">
                  <FaLinkedin className="text-2xl cursor-pointer" />
                </a>

                <a href="https://www.youtube.com/@ISA-F-fr6wz" target="_blank">
                  <FaYoutube className="text-2xl cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex w-full flex-col items-center justify-center  py-4 md:flex-row md:justify-between">
          {/* <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            Copyright &copy; {currentYear}{" "}
            <a href="https://ISA-France.org" className="font-bold">
          ISA-France
            </a>
            . All Rights Reserved.
          </Typography> */}
          <div className="text-blue-gray-900 font-semibold">
            Powered By ISA-F
          </div>
          <div className="">
            <span className="text-blue-gray-900 font-semibold mx-4">
              Terms and Conditions
            </span>
            <span className="text-blue-gray-900 font-semibold mx-4">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
