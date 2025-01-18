/* eslint-disable @next/next/no-img-element */
import React from "react";


function Hero() {
  return (
    <div className="h-auto py-10 sm:py-0   flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative">
      <img
        src="images/hero.png"
        alt=""
        className=" absolute top-0 right-0 left-0 sm:left-[400px] bottom-0 h-auto sm:h-[700px]"
      />
      <img
        src="images/herobl.png"
        alt=""
        className="absolute left-0 bottom-0 z-50 sm:block hidden"
      />
      <div className="max-w-4xl mx-auto ">
        {/* Top label */}

        {/* Main heading */}
        <h1 className="text-4xl sm:text-8xl  font-bold text-white mt-20 mb-6">
          <span className="text-[#874DFF]">AI Agent</span> App Store
        </h1>

        {/* Subheading */}
        <div className="space-y-2 mb-[8rem]">
          <p className="text-gray-300 text-lg sm:text-xl font-eculid">
            Deploy AI Agents on Mode via partner applications.
          </p>
        </div>

        {/* CTA Button */}
       
      </div>
    </div>
  );
}

export default Hero;
