import React from "react";
import { ABOUT_OFFSHOREXPORTS } from "../constants/About";

const Hero = () => {
  return (
    <div className="p-3 px-7 py-16 md:px-8 lg:px-28 bg-[#191615] text-[#7C7A7A] flex flex-col md:flex-row lg:items-center">
      <div className="lg:w-1/2">
        <h1 className="font-semibold md:font-bold text-3xl lg:text-5xl mt-4 mb-3">
          Your Trusted Partner in <br />
          <span className="text-white">Global Trade</span>
        </h1>
        <h3 className="max-w-[500px]">{ABOUT_OFFSHOREXPORTS}</h3>
        {/* Get in Touch Button */}
        <button className="w-full max-w-[500px] sm:w-auto mt-4 px-6 py-3 sm:py-2 text-xl bg-[WHITE] text-black rounded-md font-semibold hover:bg-[#7C7A7A] transition duration-300">
          Get in Touch
        </button>
      </div>
      {/* Image for All Screens */}
      <div className="hidden md:flex lg:w-1/2 mt-4 lg:mt-0">
        <img
          src="/images/Globe.png" // Ensure the correct image extension
          alt="Global Trade"
          className="md:w-[300px] lg:w-[400px] h-auto rounded-md" // Responsive image
        />
      </div>
    </div>
  );
};

export default Hero;
