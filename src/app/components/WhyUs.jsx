import React from "react";
import WhyUsCard from "./WhyUsCard";
import { WHY_CHOOSE_US } from "../constants/About";

const WhyUs = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-red-600 font-normal">Why OffShoreXports?</h2>
      <div className="md:flex md:space-x-8 md:mt-2">
        <div className="md:w-[50%] lg:w-[60%]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7C7A7A]">
            Why Choose <span className="text-[#191615]">OffShoreXports</span>{" "}
            for Your Exporting Needs?
          </h1>
        </div>
        <h2 className="text-lg md:font-medium text-[#7C7A7A] max-w-[600px] mt-3 md:mt-0 lg:mt-0 lg:self-center md:w-[50%]">
          Choose us for unparalleled expertise and a commitment to your success
          in global trade and business growth.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {WHY_CHOOSE_US.map((items, k) => (
          <WhyUsCard
            key={k}
            title={items.title}
            description={items.content}
            image={items.img}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
