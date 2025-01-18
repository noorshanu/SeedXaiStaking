/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Aboutus() {
  return (
    <section className=" text-white py-12">
    <div className=" mx-auto pl-4">
   
      <div className=' container mx-auto'>
      <h2 className="text-xl md:text-3xl font-bold text-start mb-8 lh-1_6">
        Seed AI is your gateway to smarter, secure, and self-driven <br />
        decentralized solutions. Discover, launch, and harness the power <br /> of AI agents in one unified platform.
      </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Left Card */}
        <div className='gradient-border shadow-lg ml-1 sm:ml-20'>
        <div className="box1 rounded-lg px-6 flex pt-4 pb-10  flex-col justify-between  ">
          <div>
            <h3 className="text-3xl sm:text-6xl font-bold lh-1_4 ">
              Transforming Web3 with Intelligent AI Agents
            </h3>
           
          </div>
          <div className="mt-6 ">
            <a
              href="#"
              className="bg-gradient-to-r from-purple-500 to-orange-400 text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition duration-300"
            >
              KNOW MORE
            </a>
          </div>
        </div>
        </div>
        {/* Right Card */}
        <div className="bg-center  shadow-lg overflow-hidden w-full">
          <img
            src="images/green.png" // Replace with the actual image URL
            alt="AI Visualization"
            className="  w-full h-auto"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Aboutus