import React from "react";
import { StarIcon } from "./shared/Star";
import Animate from "./shared/Animate";
import PortfolioCard from "./shared/PortfolioCard";

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
          <div className="shadow-custom p-4 rounded-md">
            <PortfolioCard
              paragraph="RESE provides digital infrastructure to enable real estate
              investment and sales transactions"
              name="Rese"
              bgImage="bg-rese"
              link='https://rese.africa/'
            />
          </div>
          <div className="shadow-custom p-4 rounded-md">
            <PortfolioCard
              paragraph="RESE storefront where storefront owners list properties and enable
              real estate investment and transactions"
              name="Rese Storefront"
              bgImage="bg-rese-storefront"
              link="http://dlight.dev.rese.africa/"
            />
          </div>
        </Animate>
        <Animate type="fade-up" className="grid md:grid-cols-2 gap-7">
          <div className="shadow-custom p-4 rounded-md">
            <PortfolioCard
              paragraph="Your one-stop shop is now at your fingertips. Beauty stores. Radiance at it's peak with a tap. Restaurant. Your favourite food, delivered fast."
              name="Roppi"
              bgImage="bg-roppi"
              link="https://admin.roppi.co/login"
            />
          </div>
          <div className="shadow-custom p-4 rounded-md">
            <PortfolioCard
              paragraph="The admin dashboard provides a comprehensive view of all storefront owner activities, including storefront operations, offer management, settings, and storefront configuration"
              name="Rese Admin"
              bgImage="bg-rese-admin"
              link="http://dlight.admin.dev.rese.africa/auth/login"
            />
          </div>
        </Animate>
        <Animate type="fade-down" className="grid md:grid-cols-2 gap-7">
          <div className="shadow-custom p-4 rounded-md">
            <PortfolioCard
              paragraph="The Thembani app is a bilingual loan application, written in: Portuguese and English"
              name="Thembani"
              bgImage="bg-thembani"
              link="https://thembani.netlify.app/login"
            />
          </div>
          <div className="shadow-custom p-4 rounded-md">
            <PortfolioCard
              paragraph="The app includes a search functionality to easily find recipes, and it leverages MongoDB Atlas for efficient data management, ensuring the system is scalable and secure."
              name="Recipe App"
              bgImage="bg-recipe-app"
              link="https://recipe-app-henna-theta.vercel.app/"
            />
          </div>
        </Animate>
        <Animate type="fade-up" className="grid md:grid-cols-2 gap-7">
          <div className="shadow-custom p-4 rounded-md">
            <PortfolioCard
              paragraph="Portfolio"
              name="Portfolio"
              bgImage="bg-alim"
              link="https://alims-portfolio.vercel.app/"
            />
          </div>
          <div className="shadow-custom p-4 rounded-md">
            <PortfolioCard
              paragraph="The PandaMedical app enables patients to schedule appointments with doctors and facilitates seamless communication between healthcare providers and patients."
              name="Pandamedical Chat"
              bgImage="bg-pandamedical"
            />
          </div>
        </Animate>
        <Animate type="fade-down" className="grid md:grid-cols-2 gap-7">
          <div className="shadow-custom p-4 rounded-md">
            <PortfolioCard
              paragraph="Empowering businesses with innovative, scalable, and user-friendly software solutions tailored to thrive in a digital world"
              name="Miatech"
              bgImage="bg-miatech"
              link="https://miatech.com.ng/"
            />
          </div>
        </Animate>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
