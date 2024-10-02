"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md mb-4 p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-md">{question}</h3>
        <span className="text-lg">{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQCard;
