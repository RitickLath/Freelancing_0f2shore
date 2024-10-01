import Image from "next/image";
import React from "react";

const WhyUsCard = ({ image, title, description }) => {
  return (
    <div className="p-2 rounded-lg flex flex-col items-center mb-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      {/* Card Image */}
      <Image
        width={500}
        height={500}
        src={image}
        alt={title}
        className="w-full h-auto rounded-md object-cover mb-2"
      />
      <div>
        {/* Title */}
        <h3 className="text-left text-lg font-semibold">{title}</h3>
        {/* Description */}
        <p className="text-left text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
