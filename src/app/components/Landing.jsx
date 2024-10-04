import Image from "next/image";
import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <div className="relative h-[70vh] md:h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="bg-black absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/Landingpage.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        poster="/images/Poster.jpeg"
      ></video>

      {/* Black Film (Overlay) */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navbar */}
      <nav className="bg-black bg-opacity-70 absolute top-0 left-0 w-full flex justify-between items-center px-4 py-3 md:py-4 lg:py-5 z-10 shadow-md">
        {/* Logo */}
        <Image
          className="w-[100px]"
          src="/images/logonav.png"
          width={120}
          height={80}
          alt="Company Logo"
        />
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 items-center px-6">
          <li>
            <Link
              href="#solution"
              className="text-white text-sm md:text-lg hover:text-yellow-500 transition duration-300"
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-white text-sm md:text-lg hover:text-yellow-500 transition duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <div className="text-white px-6 md:px-0">
          <h1 className="mb-2 md:mb-4 text-4xl md:text-6xl lg:text-7xl font-bold">
            OffshoreXports
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-normal mb-6">
            Expanding Horizons, Shipping Worldwide
          </h2>

          <Link
            href="#contact"
            className="bg-yellow-500 text-black font-semibold py-2 px-5 rounded-md md:rounded-lg text-sm md:text-base lg:text-lg hover:bg-yellow-600 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
