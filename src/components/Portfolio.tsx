import React from "react";
import { StarIcon } from "./shared/Star";

const Portfolio = () => {
  return (
    <section className="mx-10 lg:mx-28 xl:mx-[150px] mt-44" id="portfolio ">
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
      <div className="pt-8 space-y-10">
        <img
          src="/icons/rese-storefront.png"
          alt=""
          className="w-full h-full object-fill rounded-xl"
        />
        <div className="grid grid-cols-2 gap-x-5">
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
        </div>
        <img
          src="/icons/thembani.png"
          alt=""
          className="w-full h-full object-fill rounded-xl"
        />

        <div className="flex gap-x-5 w-full">
          <div className="h-1/2">
            <img
              src="/icons/roppi-pay.png"
              alt=""
              className="w-full h-full object-fill rounded-xl"
            />
          </div>
          <div className="h-1/2">
            <img
              src="/icons/rese-admin.png"
              alt=""
              className="w-full h-full object-fill rounded-xl"
            />
          </div>
        </div>
        <img
          src="/icons/pandamedical-chat.png"
          alt=""
          className="w-full h-full object-fill rounded-xl"
        />
      </div>
    </section>
  );
};

export default Portfolio;
