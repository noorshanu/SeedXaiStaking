/* eslint-disable @next/next/no-img-element */
import React from "react";

const ComingSoonCards: React.FC = () => {
  const cards = [
    {
      title: "FORTYTWO",
      description: "Natural language user interface deployment for onchain apps.",
      icon: "images/4rty.png",
      more: "images/forty.png",
    },
    {
      title: "TALUS",
      description:
        "Special-purpose L1 blockchain designed for building onchain multi-agent systems.",
      icon: "/images/block.png",
      more:"images/talus.png"
    },
    {
      title: "INTENTIFY",
      description: "Intent-centric OS for reliable autonomous AI agents.",
      icon: "images/intentify.png",
      more:"images/int.png"
    },
    {
      title: "OTOMATO",
      description:
        "Otomato brings Autonomous Agents to Web3, enabling seamless automation of complex workflows and cross-protocol strategies.",
      icon: "images/agent.png",
      more:"images/tom.png"
    },
  ];

  return (
    <div className=" py-16 px-6 relative">
           <img src="images/faq.png" alt="" className=" absolute top-0 left-0 right-0 h-full w-full overflow-hidden"/>
      <img src="images/faqleft.png" alt="" className=" absolute bottom-0 left-0 h-[500px]"/>
      <img src="images/faqright.png" alt="" className=" absolute top-0 right-0 h-[500px]"/>
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Deploy agents and agentic vaults
        </h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 h-full gap-6 relative z-50">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl  text-center flex flex-col items-center justify-between border border-gray-700 shadow-lg"
          >
            <img src={card.more} alt="" className="  "/>
            <div className=" ">
              <img src={card.icon} alt={`${card.title} Icon`} className="w-full h-full object-contain -mt-10" />
            </div>
            <h3 className="text-white text-2xl font-bold mb-2 -mt-6">{card.title}</h3>
            <p className="text-gray-400 text-lg mb-4 px-6 font-eculid">{card.description}</p>
            <button className="bg-gray-700 text-gray-200 text-sm font-medium px-4 py-2 my-4 rounded-lg">
              COMING SOON
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoonCards;
