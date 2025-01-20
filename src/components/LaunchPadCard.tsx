/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { FaFire, FaHeart } from "react-icons/fa";

const LaunchpadCards = () => {
  const [search, setSearch] = useState("");
  const [chain, setChain] = useState("All Chains");
  const [status, setStatus] = useState("All Status");
  const [sort, setSort] = useState("No Sort");
  const [type, setType] = useState("All Types");

  const data = [
    {
      id: 1,
      icon: "images/jit.png", // Replace with your image URL
      name: "JACOBIAN AI",
      type: "Fair Launch",
      soft: "1 ETH",
      hard: "1 ETH",
      progress: 0.5, // 50%
      liquidity: "51%",
      lockup: "180 Days",
      saleStatus: "Upcoming",
      countdown: { days: 1, hours: 1, minutes: 50, seconds: 30 },
    },
    {
      id: 2,
      icon: "images/cow.png", // Replace with your image URL
      name: "JBOY",
      type: "1 TON = 555,555,555 JBOY",
      soft: "500 TON",
      hard: "2,000 TON",
      progress: 0.5, // 50%
      liquidity: "Manual Listing",
      lockup: "Unlocked",
      saleStatus: "Sale Live",
      countdown: { days: 1, hours: 1, minutes: 50, seconds: 30 },
    },
    {
      id: 3,
      icon: "images/tomy.png", // Replace with your image URL
      name: "WULFY",
      type: "1 SOL = 125,000,000 WULFY",
      soft: "1,250 SOL",
      hard: "5,000 SOL",
      progress: 0.5, // 50%
      liquidity: "22%",
      lockup: "🔥 Burned after liquidity is added.",
      saleStatus: "Upcoming",
      countdown: { days: 1, hours: 1, minutes: 50, seconds: 30 },
    },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Search Bar and Filters */}
      <div className="mb-6">
        <div className="flex justify-center flex-wrap items-center gap-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Type token symbol, address to find your launchpad"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" w-full sm:w-1/3 px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />

          {/* Dropdowns */}
          <select
            value={chain}
            onChange={(e) => setChain(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option>All Chains</option>
            <option>Ethereum</option>
            <option>Binance Smart Chain</option>
            <option>Polygon</option>
            <option>Solana</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option>All Status</option>
            <option>Upcoming</option>
            <option>Sale Live</option>
            <option>Ended</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option>No Sort</option>
            <option>Soft Cap</option>
            <option>Hard Cap</option>
            <option>Liquidity</option>
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option>All Types</option>
            <option>Fair Launch</option>
            <option>Presale</option>
            <option>Private Sale</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="flex justify-center flex-wrap -mx-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="w-[350px]  px-4 mb-6"
          >
            <div className="box2 border-purple-600 border text-gray-300 rounded-lg shadow-lg p-4 relative">
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.name}
                className="h-16 w-16  mb-3"
              />
              {/* Status */}
              <span
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm ${
                  item.saleStatus === "Sale Live"
                    ? "text-green-500 border border-green-500 "
                    : " text-yellow-500 border border-yellow-500"
                }`}
              >
                {item.saleStatus}
              </span>
              {/* Content */}
        <div className="flex justify-between  items-center">
        <h3 className="text-white text-lg font-bold  justify-between">
                {item.name}
              </h3>
              <p className="text-center text-sm">{item.type}</p>
        </div>
              <div className="my-4">
                <p className="mb-2 flex flex-col text-sm">
                  <span className="text-gray-400 text-xs font-eculid">Soft/Hard</span>
                  <span>
                    {item.soft} - {item.hard}
                  </span>
                </p>
                {/* Progress Bar */}
                <p className=" text-xs mt-1">Progress (50%)</p>
                <div className="relative h-2 w-full bg-gray-700 rounded-full mt-2">
                  <div
                    className="absolute h-full bg-[#01A71F] rounded-full"
                    style={{ width: `${item.progress * 100}%` }}
                  ></div>
                </div>
             <div className="flex justify-between text-xs text-gray-400 mt-2">
               <p >0 ETH</p>
               <p>1 ETH</p>
             </div>
              </div>
              <div className=" text-sm">
                <p className="text-gray-400 text-xs font-eculid flex justify-between">
                  Liquidity:{" "}
                  <span className="text-gray-100">{item.liquidity}</span>
                </p>
            
              </div>
              <div className="mt-2">
              <p className="text-gray-400 text-xs font-eculid flex justify-between">
                  Lockup:{" "}
                  <span className="text-gray-100">{item.lockup}</span>
                </p>
              </div>
              {/* Countdown */}
              <div className="mt-4 border-t border-gray-700 pt-4">
                <p className="text-sm">Sale Starts In</p>
                <div className="flex justify-start space-x-2 mt-2">
                  {Object.entries(item.countdown).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-1 px-2 border border-gray-700 rounded-md">
                      <span className="text-white text-lg font-bold">
                        {value.toString().padStart(2, "0")}
                      </span>
                      <p className="text-xs text-gray-400">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Footer */}
              <div className="flex justify-between items-center mt-6 border-t border-gray-700 pt-4">
                <button className="text-blue-400 underline">View</button>
                <button className="text-gray-500 hover:text-red-500">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchpadCards;
