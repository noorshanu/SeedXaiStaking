/* eslint-disable @next/next/no-img-element */
// components/CommunitySection.tsx
import React from "react";

const CommunitySection: React.FC = () => {
  return (
    <section className=" py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <img src="images/com.png" alt="community" className="mx-auto" />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          {/* Telegram Card */}
          <div className="box1 border border-purple-600 rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
            <div className=" flex  justify-between items-center gap-4">
       
              <div>
                <h3 className=" text-6xl font-bold mb-[3rem] sm:mb-[10rem]">Telegram</h3>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-6 rounded-full text-sm font-semibold hover:opacity-90"
                >
                  JOIN NOW
                </a>
              </div>

              <div>
                <div className="mb-4">
                  <img
                    src="images/tele.png"
                    alt="Telegram"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Discord Card */}
          <div className="box1 border border-purple-600 rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
            <div className=" flex  justify-between items-center gap-4">
       
              <div>
                <h3 className=" text-6xl font-bold mb-[3rem] sm:mb-[10rem]">Discord</h3>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-6 rounded-full text-sm font-semibold hover:opacity-90"
                >
                  JOIN NOW
                </a>
              </div>

              <div>
                <div className="mb-4">
                  <img
                    src="images/dis.png"
                    alt="Telegram"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* X Card */}
          <div className="box1 border border-purple-600 rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
            <div className=" flex  justify-between items-center gap-4">
       
              <div>
                <h3 className=" text-6xl font-bold mb-[3rem] sm:mb-[10rem]">X <span className=" text-3xl mb-4">(Previously Twitter)</span></h3>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-6 rounded-full text-sm font-semibold hover:opacity-90"
                >
                  JOIN NOW
                </a>
              </div>

              <div>
                <div className="mb-4">
                  <img
                    src="images/tweet.png"
                    alt="Telegram"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Medium Card */}
          <div className="box1 border border-purple-600 rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
            <div className=" flex  justify-between items-center gap-4">
       
              <div>
                <h3 className=" text-6xl font-bold mb-[3rem] sm:mb-[10rem]">Medium</h3>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-6 rounded-full text-sm font-semibold hover:opacity-90"
                >
                  JOIN NOW
                </a>
              </div>

              <div>
                <div className="mb-4">
                  <img
                    src="images/med.png"
                    alt="Telegram"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
