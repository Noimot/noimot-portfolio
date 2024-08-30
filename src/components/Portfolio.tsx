import React from "react";
import { StarIcon } from "./shared/Star";
import Animate from "./shared/Animate";

const Portfolio = () => {
  return (
    <section className="mx-10 lg:mx-28 xl:mx-[150px] mt-44" id="portfolio">
      <div className="flex items-center gap-x-2 pb-1">
        <StarIcon color="#007591" />
        <p className="text-[#007591] leading-5 text-base font-bold">
          Portfolio
        </p>
        <StarIcon color="#007591" />
      </div>
      <h1 className="text-white font-bold tracking-[0.2px] leading-12 text-4xl uppercase">
        some of my recent works
      </h1>
      <div className="pt-8 space-y-7">
        {/* <div className="grid md:grid-cols-2 gap-7"> */}
        <Animate type="fade-up" className="grid md:grid-cols-2 gap-7">
          <img
            src="/icons/rese.png"
            alt=""
            className="w-full h-full object-fill rounded-xl"
          />
          <img
            src="/icons/alims-portfolio.png"
            alt=""
            className="w-full h-full object-fill rounded-xl"
          />
        </Animate>

        <Animate type="fade-up" className="grid md:grid-cols-2 gap-7">
          <img
            src="/icons/rese-storefront.png"
            alt=""
            className="w-full h-full object-fill rounded-xl"
          />
          <img
            src="/icons/pandamedical-chat-icon.png"
            alt=""
            className="w-full h-full object-fill rounded-xl"
          />
        </Animate>
        <Animate type="fade-up" className="grid md:grid-cols-2 gap-7">
          <img
            src="/icons/roppi-pay.png"
            alt=""
            className="w-full h-full object-fill rounded-xl"
          />
          <img
            src="/icons/rese-admin.png"
            alt=""
            className="w-full h-full object-fill rounded-xl"
          />
        </Animate>
        <Animate type="fade-down" className="grid md:grid-cols-2 gap-7">
          <img
            src="/icons/thembani-icon.png"
            alt=""
            className="w-full h-full object-fill rounded-xl"
          />
          
          <img
            src="/icons/recipe-app.png"
            alt=""
            className="w-full h-full object-fill rounded-xl"
          />
        </Animate>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
