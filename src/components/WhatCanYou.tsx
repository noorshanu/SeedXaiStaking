/* eslint-disable @next/next/no-img-element */
// components/TokenFeatures.tsx
import React from "react";

const TokenFeatures: React.FC = () => {
  return (
    <section className=" py-16 px-6 relative overflow-hidden">
        <img src="images/seedblur.png" alt="" className='absolute top-[-100px] left-[-200px]  ' />
        <img src="images/lineer.png" alt="" className='absolute bottom-[-150px] right-0 h-[200px] sm:h-auto  ' />
         <img src="images/grid.png" alt="" className="absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl font-bold text-center text-white pb-12">
          What You Can Do with the Token
        </h2>

        {/* Grid of Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10 sm:pt-20">
          <div className="flex flex-col items-start  text-white">
            {/* Icon */}
            <div className="mb-4">
              <img
                src="images/acc.svg"
                alt="access-features"
                className="w-12 h-12"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">Access Features</h3>
            {/* Description */}
            <p className="text-gray-300">
              Unlock premium AI agent  functionalities  <br />and analytics.
            </p>
          </div>

          <div className="flex flex-col items-start text-start text-white">
            {/* Icon */}
            <div className="mb-4">
              <img
                src="images/reward.svg"
                alt="access-features"
                className="w-12 h-12"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">Stake & Earn Rewards</h3>
            {/* Description */}
            <p className="text-gray-300">
            Secure the network while earning passive <br /> income.
            </p>
          </div>

          <div className="flex flex-col items-start text-start text-white">
            {/* Icon */}
            <div className="mb-4">
              <img
                src="images/gover.svg"
                alt="access-features"
                className="w-12 h-12"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">Governance</h3>
            {/* Description */}
            <p className="text-gray-300">
            Use your tokens to vote on decisions that <br />   shape the future of Seed AI.
            </p>
          </div>

          <div className="flex flex-col items-start text-start text-white mt-12">
            {/* Icon */}
            <div className="mb-4">
              <img
                src="images/share.svg"
                alt="access-features"
                className="w-12 h-12"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">Revenue Sharing</h3>
            {/* Description */}
            <p className="text-gray-300">
            Earn a share of platform revenue when <br /> you stake
            </p>
          </div>

                <div className="flex flex-col items-start text-start text-white mt-12">
            {/* Icon */}
            <div className="mb-4">
              <img
                src="images/dev.svg"
                alt="access-features"
                className="w-12 h-12"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">Developer Rewards</h3>
            {/* Description */}
            <p className="text-gray-300">
            Developers earn tokens by contributing new AI <br /> agents or improving the platform..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenFeatures;
