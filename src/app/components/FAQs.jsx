import React from "react";
import FAQCard from "./FAQCard";
import { faq } from "../constants/FAQs";

const FAQs = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-28 flex flex-col md:flex-row justify-between p-6">
      {/* Left section for Title */}
      <div className="w-full md:w-1/2 mb-8">
        <h3 className="text-red-600 font-semibold">FAQs</h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Addressing Uncertainty,
          <br /> Ensuring Confidence
        </h1>
        {/* <h1 className="text-4xl font-bold mt-2">
          Guided by Expertise, <br /> Driven by Success
        </h1> */}
      </div>

      {/* Right section for FAQs */}
      <div className="w-full md:w-1/2">
        {faq.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
