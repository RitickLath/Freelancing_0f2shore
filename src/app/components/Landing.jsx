import React from "react";

const Landing = () => {
  return (
    <div className="relative h-[70vh] md:h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/LandingPageVideo.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Black Film (Overlay) */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-white px-4 md:px-0">
          <h1 className="mb-2 md:mb-4 text-3xl md:text-6xl font-bold">
            OffshoreXports
          </h1>
          <h2 className="text-lg md:text-2xl font-normal">
            Expanding Horizons, Shipping Worldwide
          </h2>
          {/* Button */}
          <button className="mt-4 bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
