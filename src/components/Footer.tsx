/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiMediumFill } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white pt-12   relative ">
      <img
        src="images/footright.png"
        alt=""
        className=" absolute top-0 right-0 h-[70px]"
      />
      <div className="container mx-auto px-4">
        {/* Top Section */}

        {/* Links Section */}
        <div className="">
          {/* Logo */}
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
              <img
                src="images/logo.png"
                alt=""
                className=" w-[200px] mx-auto"
              />
            </div>
          </div>

          {/* Column Links */}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-2">
          <p className="text-sm text-[#C9C9C9] mb-2 lg:mb-0 font-eculid">
            © Copyright SEED AI 2024
          </p>
          <div className="flex space-x-6 text-gray-500 pb-2">
            <a href="#" className="hover:text-white">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaDiscord />
            </a>
            <a href="#" className="hover:text-white">
              <FaTelegramPlane />
            </a>
            <a href="#" className="hover:text-white">
              <RiMediumFill />
            </a>
          </div>
        </div>
      </div>
      <img
        src="images/footleft.png"
        alt=""
        className=" absolute bottom-0 left-0 h-[90px]"
      />
    </footer>
  );
};

export default Footer;
