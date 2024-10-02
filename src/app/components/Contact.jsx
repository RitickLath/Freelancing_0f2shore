"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // WhatsApp link
  const handleWhatsApp = () => {
    const whatsappURL = `https://wa.me/yourNumber?text=Name: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  // Mailto link
  const handleMail = () => {
    const mailtoURL = `mailto:yourEmail@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
      email
    )}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(mailtoURL);
  };

  return (
    <div
      id="contact"
      className="bg-[#191615] px-7 sm:px-9 lg:px-28 border-b-[1px] border-[#282625] mt-12 flex flex-col md:flex-row justify-between items-center"
    >
      {/* Contact Form */}
      <div className="w-full md:w-1/2  text-white py-8">
        <h3 className="text-red-600 font-semibold">Contact Us</h3>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
          Partner with Us for <br /> Expert-Led Success
        </h1>

        {/* Input Fields */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 bg-[#282625] text-white rounded-md focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-[#282625] text-white rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Type your message..."
            className="w-full p-3 mb-4 bg-[#282625] text-white rounded-md focus:outline-none"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleMail}
            className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center"
          >
            <FaEnvelope className="mr-2" />
            Mail Me
          </button>

          <button
            onClick={handleWhatsApp}
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 flex items-center"
          >
            <FaWhatsapp className="mr-2" />
            WhatsApp Me
          </button>
        </div>
      </div>

      {/* Right Image (Only for md and lg screens) */}
      <div className="hidden md:block">
        <Image
          width={400}
          height={400}
          src="/images/ContactMe.png"
          alt="Collaboration"
        />
      </div>
    </div>
  );
};

export default Contact;
