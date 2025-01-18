/* eslint-disable @next/next/no-img-element */
// components/EcosystemBenefits.tsx
import React from "react";


const EcosystemBenefits: React.FC = () => {




  return (
    <section className="py-16 px-6  relative">
       <img src="images/seedblur.png" alt="" className='absolute top-[-100px] left-[-200px]  ' />
      <div className="max-w-5xl mx-auto text-white">
        {/* Heading */}
        <h2 className=" text-2xl sm:text-4xl font-bold text-center mb-12">
          Who Benefits from the Seed AI Ecosystem?
        </h2>

        {/* Slider */}
    <div className=" matter px-8 py-12 rounded-2xl border border-gray-700">

      <div className=" flex  flex-col sm:flex-row justify-between items-center">
        <div>
          <img src="images/map.svg" alt=""  className=" mx-auto h-[300px] w-auto sm:h-[500px]"/>
        </div>

        <div>
          <h1 className="text-white text-5xl font-bold mb-8">Developers</h1>
          <p className="text-white text-xl font-eculid">
          Launch your AI agents with ease <br /> and earn rewards for your contributions. <br /> Access tools and resources to build <br /> efficiently.
          </p>

          <button className="bg-white text-black px-4 py-2 rounded-full mt-8">
            Contact Us
          </button>
        </div>

      </div>

    </div>
      </div>
    </section>
  );
};

export default EcosystemBenefits;
