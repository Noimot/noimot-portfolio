import React from "react";
import AboutDetail from "../shared/AboutDetail";
import Button from "../shared/Button";
import { StarIcon } from "../shared/Star";

const About = () => {
  return (
    <main
      className="mx-10 lg:mx-28 xl:mx-[150px] relative mt-60 xs:mt-96 sm:mt-[420px] z-10"
      id="about"
    >
      <div className="absolute -top-[200px] xxs:-top-[250px] xs:-top-[300px] sm:-top-[400px] right-10 -z-10 mt-10">
        <img
          src="/icons/me.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <section className="px-4 sm:px-10 py-7 rounded-xl border border-solid border-[#596D73] bg-[#030E12]">
        <div>
          <div className="flex items-center gap-x-2 pb-1">
            <h1 className="text-white tracking-[0.2px] leading-12 font-bold xs:text-2xl sm:text-4xl uppercase">
              about me
            </h1>
          </div>

          <p className="text-[#C2D1D6] tracking-[0.09px] leading-6 text-base sm:text-lg pt-4">
            I'm a dedicated Frontend Developer with a passion for open source
            and continuous learning. I have experience working with HTML, CSS,
            JavaScript, React, Nuxt.js, Tailwind CSS, Nodejs, Mongodb and TypeScript.
          </p>
          <div className="mt-10">
            <h2 className="text-[#C2D1D6] tracking-[0.12px] leading-8 font-bold text-2xl capitalize">
              expertise
            </h2>
            <div className="mt-6 md:space-y-10 space-y-4">
              <div className="flex  gap-y-4 flex-col md:gap-x-2 md:flex-row">
                <AboutDetail text="Developing user-friendly and responsive web applications using HTML, CSS, JavaScript, React, Typescript, SASS, etc." />
                <AboutDetail text=" Collaborating with UX/UI designers to ensure the design and functionality of the web application meet user needs." />
                <AboutDetail text=" Writing clean and efficient code that adheres to industry standards and best practices." />
              </div>
              <div className="flex md:px-20 gap-y-4 flex-col md:gap-x-2 md:flex-row">
                <AboutDetail text="Converting designs into precise, accessible, and responsive web applications." />
                <AboutDetail text=" Testing the web application to ensure compatibility across devices and browsers." />
              </div>
              <div className="flex gap-y-4 flex-col md:gap-x-2 md:flex-row">
                <AboutDetail text=" Maintaining and updating the web application to ensure it remains current and functional." />
                <AboutDetail text="Staying up-to-date with emerging trends and technologies in frontend development." />
                <AboutDetail text="Open source enthusiast" />
              </div>
              <div className="w-fit">
                <a
                  href="https://docs.google.com/document/d/1beBYbp8eaEIc4XD90EEryASvY1HYO7kb/edit?usp=sharing&ouid=115464084756163808041&rtpof=true&sd=true"
                  target="_blank"
                >
                  <Button
                    type="button"
                    text="View Resume"
                    icon="/icons/arrow-down.svg"
                    className="hover:bg-[#8E07CD] hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
