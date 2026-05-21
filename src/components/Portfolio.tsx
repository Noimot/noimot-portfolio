import React from "react";
import { StarIcon } from "./shared/Star";
import Animate from "./shared/Animate";
import PortfolioCard from "./shared/PortfolioCard";
import { projects } from "../data/projects";

const Portfolio = () => {
  return (
    <section className="mx-10 lg:mx-28 xl:mx-[150px] mt-20" id="portfolio">
      <div className="flex items-center gap-x-2 pb-1">
        <StarIcon color="#007591" />
        <p className="text-[#007591] leading-5 text-base font-bold">
          Portfolio
        </p>
        <StarIcon color="#007591" />
      </div>
      <h1 className="text-[#1A1A2E] dark:text-white font-bold tracking-[0.2px] leading-12 text-4xl uppercase">
        some of my latest works
      </h1>
      <div className="pt-8 grid md:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <Animate type="fade-up" key={project.name} delay={index * 100}>
            <PortfolioCard
              paragraph={project.paragraph}
              name={project.name}
              bgImage={project.bgImage}
              link={project.link}
              skills={project.skills}
            />
          </Animate>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
