import React from "react";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../constants/ServiceConst";

const Services = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-12">
      <h2 className="text-red-600 font-semibold">Solutions we provide!</h2>
      <div className="md:flex md:space-x-8 md:mt-2">
        <div className="">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7C7A7A]">
            Explore The{" "}
            <span className="text-[#191615]">Range of Services</span> <br /> we
            Offer
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-between w-full mt-6">
        {SERVICES.map((items, k) => (
          <ServiceCard
            key={k}
            title={items.title}
            description={items.description}
            icon={items.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
