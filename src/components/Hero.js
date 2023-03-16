import React from "react";
import mineImage from "../assets/img/banner-woman2.webp";

function Hero() {
  return (
    <div
      id=""
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:lg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">
              Hey, I'm Aman Kumar Sahani 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Lorem32Lorem32Lorem32Lorem32Lorem32Lorem32Lorem3
              2Lorem32Lorem32Lorem32Lorem32Lorem32
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md-btn-lg transition-all">Work with Me</button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={mineImage} alt={mineImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
