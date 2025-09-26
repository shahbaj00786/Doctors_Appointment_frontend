import React from "react";
import { assets } from "../assets/assets";

export const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-sky-500 rounded-lg px-6 md:px-10">
      {/* ----------Left Side---------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10  m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 text-white">
          <img src={assets.group_profiles} />
          <p>
            Simple browse through our extensive<br/> list of trusted doctors,
          </p>
        </div>
        <a href="/doctors" className="flex items-center gap-2 px-8 py-3 bg-white rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 ">
          Book appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ----------------Right Side-------------- */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg"src={assets.header_img} alt="" />
      </div>
    </div>
  );
};
