"use client"
import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { SiBinance, } from "react-icons/si";

const StakingTable = () => {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const data = [
    {
      id: 1,
      icon: <FaDotCircle className="text-orange-500 text-2xl" />,
      name: "CAKE",
      periods: ["30D", "60D", "90D"],
      apr: "0.0075% ~ 0.019%",
      staked: "11,247.3 CAKE",
      usdValue: "$28,040.55",
      aprDetails: {
        "30D": "UP TO 0.085%",
        "60D": "UP TO 0.13%",
        "90D": "UP TO 0.21%",
      },
    },
    {
      id: 2,
      icon: <SiBinance className="text-yellow-500 text-2xl" />,
      name: "WBNB",
      periods: ["30D", "60D", "90D"],
      apr: "0.075% ~ 0.21%",
      staked: "117.304 WBNB",
      usdValue: "$30,550.31",
      aprDetails: {
        "30D": "UP TO 0.075%",
        "60D": "UP TO 0.11%",
        "90D": "UP TO 0.19%",
      },
    },
    {
      id: 3,
      icon: <SiBinance className="text-yellow-500 text-2xl" />,
      name: "WBNB",
      periods: ["30D", "60D", "90D"],
      apr: "0.075% ~ 0.21%",
      staked: "117.304 WBNB",
      usdValue: "$30,550.31",
      aprDetails: {
        "30D": "UP TO 0.075%",
        "60D": "UP TO 0.11%",
        "90D": "UP TO 0.19%",
      },
      
    },
    {
        id: 4,
        icon: <SiBinance className="text-yellow-500 text-2xl" />,
        name: "WBNB",
        periods: ["30D", "60D", "90D"],
        apr: "0.075% ~ 0.21%",
        staked: "117.304 WBNB",
        usdValue: "$30,550.31",
        aprDetails: {
          "30D": "UP TO 0.075%",
          "60D": "UP TO 0.11%",
          "90D": "UP TO 0.19%",
        },
        
      },

  ];

  const toggleRow = (id: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const connectWallet = () => {
    setIsWalletConnected(true);
    alert("Wallet connected successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-6 relative z-50">
    
      <div className="overflow-x-auto rounded-xl border border-purple-600  shadow-lg">
        <table className="table-auto w-full text-sm text-left text-gray-400 box2 rounded-lg  ">
          <thead className="box1 border-b border-[#DF6344] text-gray-200 uppercase py-4">
            <tr>
              <th scope="col" className="px-4 py-6 text-xl font-bold font-sf">Stakes</th>
              <th scope="col" className="px-4 py-6 text-xl font-bold font-sf">Stakes Period</th>
              <th scope="col" className="px-4 py-6 text-xl font-bold font-sf">APR</th>
              <th scope="col" className="px-4 py-6 text-xl font-bold font-sf">Total Staked</th>
              <th scope="col" className="px-4 py-6 text-xl font-bold font-sf">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <tr className="border-b border-[#6476E4] hover:bg-gray-800">
                  <td className="flex items-center px-4 py-3">
                    {item.icon}
                    <span className="ml-2 text-lg font-medium text-white">
                      {item.name}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {item.periods.map((period, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 border text-gray-200 px-2 py-1 rounded-full text-base mr-2"
                      >
                        {period}
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-3 text-white">{item.apr}</td>
                  <td className="px-4 py-3">
                    <p className="text-white">{item.staked}</p>
                    <p className="text-gray-500 text-xs">{item.usdValue}</p>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      className="text-blue-400 underline"
                      onClick={() => toggleRow(item.id)}
                    >
                      {expandedRows[item.id] ? "HIDE" : "DETAILS"}
                    </button>
                  </td>
                </tr>
                {expandedRows[item.id] && (
                  <tr className="bg-gray-700">
                    <td colSpan={5} className="px-4 py-4">
                      <div className="flex flex-col space-y-3">
                        <div className="flex space-x-6">
                          {Object.entries(item.aprDetails).map(([key, value]) => (
                            <div key={`${item.id}-${key}`} className="text-sm">
                              <span className="text-gray-300">{key} APR:</span>{" "}
                              <span className="text-blue-400">{value}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={connectWallet}
                          className={`${
                            isWalletConnected
                              ? "bg-green-500 cursor-not-allowed"
                              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                          } text-white px-6 py-2 rounded-md`}
                          disabled={isWalletConnected}
                        >
                          {isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StakingTable;
