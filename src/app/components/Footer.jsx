import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai"; // Gmail icon

const Footer = () => {
  return (
    <div className="bg-[#191615] text-white py-2 px-4 md:px-16">
      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-2 md:mb-0">
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-yellow-500 transition duration-300" />
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/+918595111194"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl hover:text-yellow-500 transition duration-300" />
          </a>
          {/* Gmail */}
          <a href="mailto:inquiries@offshorexports.com">
            <AiOutlineMail className="text-2xl hover:text-yellow-500 transition duration-300" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-yellow-500 transition duration-300" />
          </a>
          {/* Twitter (X) */}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-yellow-500 transition duration-300" />
          </a>
        </div>

        {/* Company Text */}
        <div className="text-center text-sm">
          <p>© 2024 Offshorexports. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
