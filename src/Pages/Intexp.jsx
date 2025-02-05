import React from "react";
import Header from "../Components/Header";
import { Typography } from "@material-tailwind/react";
import banner from "../Assets/team3.png";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Footer from "../Components/Footer";
import Urcelkalenga from "../Assets/drive-download/Urcelkalenga.jpg";
import MehtabAlamSYED from "../Assets/drive-download/MehtabAlamSYED.jpg";

const Intexp = () => {
  return (
    <>
      <div className="">
        <Header />
        <div className="relative h-40 w-full">
          <img
            src={banner}
            alt="image1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black/50">
            <div className="flex flex-col items-center justify-center h-full mt-6">
              <Typography
                variant="h1"
                color="white"
                className="text-2xl md:text-3xl lg:text-4xl mb-4 opacity-90">
                Our France Research Experts
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-70">
                Our experts drive you further to your goals.
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-gray-100 flex flex-col items-center justify-center">
          <div className="w-[80%] flex items-center justify-between">
            <div className="w-[20rem] h-[30rem] flex flex-col items-center p-4 my-10 rounded-2xl z-10">
              <div className="w-full grid place-items-center">
                <img
                  src={Urcelkalenga}
                  alt=""
                  className="rounded-full border-[2px] border-black w-40 h-40 object-cover"
                />
              </div>
              <Typography
                variant="h6"
                color="black"
                className="py-1 font-bold text-[18px] text-center leading-[1.2] text-[#0B66C3]">
                Urcel kalenga
                <div className="mt-2 flex gap-2 justify-center">
                  <a
                    href="https://www.linkedin.com/in/urcel-kalenga-793467b5/"
                    target="_blank">
                    <FaLinkedinIn className="text-2xl cursor-pointer text-[#0B66C3]" />
                  </a>

                  <FaTwitter className="text-2xl cursor-pointer text-blue-500" />
                </div>
              </Typography>
              <div className="text-gray-800 text-[16px] -mt-[-10px] ml-10">
                <Typography variant="body1" className=" mb-2">
                  <strong>
                    {" "}
                    <b>Position:</b> Postdoctorate <br></br>
                    <b>Domain:</b> GIS and remote sensing<br></br>
                    <b>Country:</b>
                    France
                    <br></br>
                    <b>Expert Type:</b> Green Star
                  </strong>
                </Typography>
              </div>
            </div>
            <div className="w-[20rem] h-[30rem] flex flex-col items-center p-4 my-10 rounded-2xl z-10">
              <div className="w-full grid place-items-center">
                <img
                  src={MehtabAlamSYED}
                  alt="MehtabAlamSYED"
                  className="rounded-full border-[2px] border-black w-40 h-40 object-cover"
                />
              </div>
              <Typography
                variant="h6"
                color="black"
                className="py-1 font-bold text-[18px] text-center leading-[1.2] text-[#0B66C3]">
                Mehtab Alam SYED
              </Typography>
              <div className="mt-2 flex gap-2 justify-center">
                <a
                  href="https://www.linkedin.com/in/syed-mehtab-alam-b4564a30/"
                  target="_blank">
                  {" "}
                  <FaLinkedinIn className="text-2xl cursor-pointer text-[#0B66C3]" />
                </a>
                <FaTwitter className="text-2xl cursor-pointer text-blue-500" />
              </div>
              <div className="text-gray-800 text-[16px] -mt-[-10px] mb-2 ml-11">
                <b>Position:</b> PhD Candidate <br></br> <b>Domain:</b>{" "}
                Epidemiology (One Health), Text Mining, NLP, Information
                Retrieval<br></br>
                <b>Country:</b> France<br></br> <b>Expert Type:</b> Golden
              </div>
            </div>
            <div className="w-[20rem] h-[30rem] flex flex-col items-center p-4 my-10 rounded-2xl z-10">
              <div className="w-full grid place-items-center">
                <img
                  src={""}
                  alt=""
                  className="rounded-full border-[2px] border-black w-40 h-40 object-cover"
                />
              </div>
              <Typography
                variant="h6"
                color="black"
                className="py-1 font-bold text-[18px] text-center leading-[1.2] text-[#0B66C3]">
                Kartikey PANDEY
              </Typography>
              <div className="mt-2 flex gap-2 justify-center">
                <a
                  href="https://www.linkedin.com/in/urcel-kalenga-793467b5/"
                  target="_blank">
                  <FaLinkedinIn className="text-2xl cursor-pointer text-[#0B66C3]" />
                </a>
                <FaTwitter className="text-2xl cursor-pointer text-blue-500" />
              </div>

              <div className="text-gray-800 text-[16px] -mt-[-10px] ml-8 ">
                <b>Position:</b> PhD Candidate <br></br> <b>Domain:</b> Nano
                Science/Material Chemistry<br></br>
                <b>Country:</b> France <br></br> <b>Expertise Type:</b> Golden
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Intexp;
