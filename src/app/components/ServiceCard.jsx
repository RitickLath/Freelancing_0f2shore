import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="relative cursor-pointer md:max-w-[300px] lg:max-w-[350px] sm:max-w-[350px] p-4 rounded-lg mb-4 border border-gray-300 bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      {/* Icon positioned at the left-bottom corner */}
      <div className="absolute bottom-1 right-1  opacity-20">{icon}</div>
      {/* Title */}
      <h3 className="text-left text-lg font-semibold">{title}</h3>
      {/* Description */}
      <p className="text-left text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default ServiceCard;
