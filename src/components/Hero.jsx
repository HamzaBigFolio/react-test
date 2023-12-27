import React from "react";
import Header from "./Header";
import Heading from "./Heading";

const Hero = () => {
  return (
    <div className="max-w-[1350px] mx-auto grid md:grid-cols-2 overflow-hidden">
      <div className="left lg:px-4 px-5">
        <Header />
        <div className="flex flex-col gap-10 lg:gap-28">
          <div className="w-full lg:w-4/5 pt-5">
            <Heading
              as="h1"
              variant="primary"
              className="lg:mt-40"
              fontWeight={700}
            >
              WHERE COMFORT & LUXURY CONVERGE
            </Heading>
            <p className="lg:py-8 w-[80%] text-[#374151] text-base pt-[1rem]">
              We are committed to guiding you towards finding the perfect
              property and ensuring an exceptional real estate experience.
            </p>
            <div className="flex">
              <button className="mt-4 bg-[#FEDC71] hover:bg-black hover:text-white px-4 py-3 font-[300] ">
                Explore Property
              </button>
              <button className="mt-4 px-4 py-3 font-[300] flex items-center gap-1">
                Contact Us
                <img
                  src="/icons/link-arrow.svg"
                  className="w-[15px] hover:ml-[3px] duration-300"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="pb-4 lg:pb-0 flex items-center">
            <img
              className="w-12 aspect-square border-[2px] rounded-[50%]  border-white"
              src="/hero-customer.jpg"
              alt="customer-image"
            />
            <img
              className="w-12 aspect-square border-[2px] rounded-[50%]  border-white -ml-3"
              src="/hero-customer.jpg"
              alt="customer-image"
            />
            <img
              className="w-12 aspect-square border-[2px] rounded-[50%]  border-white -ml-3"
              src="/hero-customer.jpg"
              alt="customer-image"
            />
            <span class="mx-[1rem] font-[300] text-sm">
              12k+ Happy Home <br />
              Customers
            </span>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/home-hero.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
