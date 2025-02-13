import React from "react";
import animateLogo from "../assets/images/animate-logo.svg";
import Button from "./shared/Button";
import { StarIcon } from "./shared/Star";

const Hero = () => {
  return (
    <div className="w-full bg-combined bg-contain bg-no-repeat bg-center sm:h-[calc(100vh-80px)] flex flex-col items-center justify-center pt-20 px-10 lg:px-28 xl:px-40 relative"
    style={{
      animation: 'backgroundTransition 10s infinite',
    }}
    >
      {/* <img src={animateLogo} alt="" /> */} 
      {/* <div className="absolute top-24 right-[45%] "> */}
        <div className="h-[200px] w-[200px] rounded-full flex items-center justify-center bg-[radial-gradient(circle,_rgb(0,0,0)_50%,_rgba(0,0,0,0)_66%)] animate-fadeIn">
        <img
          src="/icons/me.png"
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
        </div>
        
      {/* </div> */}
      <div>
        <div className="">
          <div className="flex items-center gap-x-2">
            <StarIcon color="#007591" />
            <p className="text-[#007591] leading-5 text-base font-bold">I am</p>
            <StarIcon color="#007591" />
          </div>
          <h1 className="uppercase text-white xxs:text-base sm:text-3xl md:text-5xl lg:text-[72px] lg:leading-[72px] tracking-[0.36px] font-bold text-center">
            noimot alabi, a seasoned{" "}
            <span className="text-[#8E07CD]">frontend developer</span>
          </h1>
        </div>
        <p className="text-[#C2D1D6] tracking-[0.08px] leading-6 text-center max-w-[671px] mx-auto">
          I build exceptional applications by focusing on user experience,
          accessibility, and aesthetics, with a deep understanding of the
          fundamental requirements for the product.{" "}
        </p>
      </div>
      <div className="mt-12">
        <a href="#contact">
          <Button type="button" text="become a client" icon="/icons/arrow.svg" className="hover:bg-[#8E07CD] hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-110"/>
        </a>
      </div>
    </div>
  );
};

export default Hero;
