import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";

const Accordian = ({ data }) => {
  const Icon = ({ id, open }) => {
    return (
      <div className="relative left-[19rem] -top-[4rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`${
            id === open ? "rotate-180" : ""
          } h-5 w-5 transition-transform`}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    );
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.8 },
  };

  return (
    <Accordion
      open={open === true}
      icon={<Icon open={open} id={true} />}
      animate={CUSTOM_ANIMATION}
      className={`w-[400px] rounded-lg px-4 bg-[#E3EEEF] bg-opacity-90`}>
      <AccordionHeader
        onClick={handleOpen}
        className={`flex flex-col items-start gap-2 p-4 rounded-sm border-b-0 transition-colors text-black ${
          open === true ? "text-blue-500 hover:text-blue-700" : ""
        }`}>
        {data.header}
        <span className="bg-[#85b968] w-16 h-1 mt-2"></span>
        <span className="font-normal text-[12px] mb-0">{data.title}</span>
      </AccordionHeader>
      <AccordionBody className="-mt-5 text-black p-4">
        {data.body}
      </AccordionBody>
    </Accordion>
  );
};

export default Accordian;
