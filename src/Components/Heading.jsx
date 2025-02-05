import React from "react";

const Heading = ({ main, redMain, subheading, tagline }) => {
  return (
    <div className="w-full px-4">
      <div className="text-center mx-auto mb-12 lg:mb-16 max-w-[510px]">
        <span className="font-semibold uppercase text-blue-900 tracking-wide mb-2 block">
          {tagline}
        </span>


        <h2
          className="
          mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl
                  "
        >
          {main} <span className="text-red-500 ">{redMain}</span>
        </h2>
        <p className="mt-3 text-base text-slate-700">{subheading}</p>
      </div>
    </div>
  );
};

export default Heading;
