/* eslint-disable @next/next/no-img-element */
// components/EcosystemSection.tsx
import React from "react";

const EcosystemSection: React.FC = () => {
  return (
    <section className="py-16 px-6 text-white mt-4 relative ">
      <img src="images/seedblur.png" alt="" className='absolute top-[-100px] left-[-100px]  ' />
     
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-bold text-center mb-12">
          SeedAI Ecosystem For You
        </h2>

        <div className="space-y-12">
          {/* Developers Section */}
          <div className="border-t border-gray-600 pt-6 flex flex-col sm:flex-row">
            <h3 className="text-4xl font-semibold mb-4 mr-[12rem]">Developers</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Build and launch AI agents with our SDK and APIs
              </li>
              <li className="text-gray-300">
                List your agents on the marketplace and earn tokens for your contributions.
              </li>
            </ul>
          </div>

          {/* Users Section */}
          <div className="border-t border-gray-600 pt-6 flex flex-col sm:flex-row">
            <h3 className="text-4xl font-semibold mb-4 mr-[14rem]">For Users</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Explore the AI Marketplace to find agents that fit your needs.
              </li>
              <li className="text-gray-300">
                Use tokens to unlock advanced features and earn staking rewards.
              </li>
            </ul>
          </div>

          {/* AI Agents Section */}
          <div className="border-t border-gray-600 pt-6 flex flex-col sm:flex-row">
            <h3 className="text-4xl font-semibold mb-4 mr-[10rem]">For AI Agents</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Collaborate in the SeedVerse to learn, evolve, and deliver better results.
              </li>
              <li className="text-gray-300">
                Operate across blockchains and interact dynamically for smarter outcomes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
