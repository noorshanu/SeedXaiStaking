/* eslint-disable @next/next/no-img-element */
"use client";
import EcosystemBenefits from "@/components/EcosystemBenefits";
import Footer from "@/components/Footer";
import Ecosystem from "@/components/HomeScreen/Ecosystem";
import Navbar from "@/components/Navbar";
import WhatCanYou from "@/components/WhatCanYou";
import React from "react";

function page() {
  return (
    <>
      <div>
        <main className=" relative">
        <img src="images/hero.png" alt=""  className=' absolute top-[-400px] right-0 left-0 sm:left-[400px] bottom-0 h-auto sm:h-[700px]'/>
          <div>
            <img src="images/grid.png" alt="" className="absolute top-0" />
          </div>
          <Navbar />
          <div className="max-w-7xl mx-auto">
            <div className="headerm px-6 py-16 rounded-2xl mt-12 mx-2 sm:mx-0">
              <h1 className=" text-center text-4xl sm:text-8xl font-semibold lh-1_3">
                Building the Future of Decentralized AI
              </h1>

              <p className=" text-center text-xl sm:text-2xl font-semibold lh-1_2 mt-5">
                Seed AI is your gateway to smarter, secure, and self-driven{" "}
                <br />
                decentralized solutions. Discover, launch, and harness the power
                of <br /> AI agents in one unified platform.
              </p>
            </div>
            </div>
            <div className="mt-2 sm:mt-[10rem]">
              <Ecosystem />
            </div>

            <div className="matter px-10  my-14 rounded-xl border-purple-600 border-2 max-w-7xl mx-auto">
              <div className="headerm px-2 pb-2 border-b rounded-b-2xl max-w-xl mx-auto">
                <h1 className=" text-center text-4xl sm:text-6xl font-bold lh-1_3">
                  The Seed AI Token
                </h1>
              </div>
              <h1 className=" text-center text-4xl sm:text-6xl text-[#A77DFF] font-bold lh-1_3 mt-12">
                Why the Token Matters?
              </h1>

              <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
                <div className="w-full sm:w-1/2">
                  <p className=" text-xl sm:text-[38px] font-bold lh-1_3">
                    The Seed AI token is central to everything we do. It powers
                    the platform and connects users, developers, and businesses
                    in a single, seamless ecosystem.
                  </p>
                </div>
                <div className="w-full sm:w-1/2">
                  <img
                    src="images/token.svg"
                    alt="token"
                    className=" mx-auto h-[250px] w-auto sm:h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <WhatCanYou/>
            </div>
            <div>
              <EcosystemBenefits/>
            </div>
          
          <Footer />
        </main>
      </div>
    </>
  );
}

export default page;
