/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
// Import required styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent: React.FC = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {" "}
          <div className="box2 rounded-lg border border-purple-600 p-6 shadow-lg hover:scale-105 transform transition duration-300">
            <img src="images/arma.png" alt="" className="mx-auto" />
            <h1 className="text-3xl uppercase font-bold text-white text-center mt-4">
              Arma
            </h1>
            <p className="text-gray-300 text-lg  text-center my-5 font-eculid">
              AI agent to earn yield on <br /> USDC across SEEDAI apps.
            </p>
            <button className="group font-eculid border bg-gray-800/60 hover:bg-gray-800/80 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto">
              EXPAND <FaArrowRightLong />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box2 rounded-lg border border-purple-600 p-6 shadow-lg hover:scale-105 transform transition duration-300">
            <img src="images/mod.png" alt="" className="mx-auto" />
            <h1 className="text-3xl uppercase font-bold text-white text-center mt-4">
              MODIUS
            </h1>
            <p className="text-gray-300 text-lg  text-center my-5 font-eculid">
              AI agent to manage LPs on <br />
              Balancer
            </p>
            <button className="group font-eculid border bg-gray-800/60 hover:bg-gray-800/80 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto">
              EXPAND <FaArrowRightLong />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box2 rounded-lg border border-purple-600 p-6 shadow-lg hover:scale-105 transform transition duration-300">
            <img src="images/ampl.png" alt="" className="mx-auto" />
            <h1 className="text-3xl uppercase font-bold text-white text-center mt-4">
              Amplifi
            </h1>
            <p className="text-gray-300 text-lg  text-center my-5 font-eculid">
              Bitcoin Abstraction Layer. <br /> Scaling bitcoin to billions
              AIFi.
            </p>
            <button className="group font-eculid border bg-gray-800/60 hover:bg-gray-800/80 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto">
              EXPAND <FaArrowRightLong />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="box2 rounded-lg border border-purple-600 p-6 shadow-lg hover:scale-105 transform transition duration-300">
            <img src="images/brain.png" alt="" className="mx-auto" />
            <h1 className="text-3xl uppercase font-bold text-white text-center mt-4">
              brain
            </h1>
            <p className="text-gray-300 text-lg  text-center my-5 font-eculid">
              Use natural language to <br /> execute transaction on mode
            </p>
            <button className="group font-eculid border bg-gray-800/60 hover:bg-gray-800/80 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 flex items-center gap-2 mx-auto">
              EXPAND <FaArrowRightLong />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
