import React from "react";
import selfImage from "../assets/img/banner01.png"

function Hero() {
  return (
    <div
      id="home"
      className="lg:h-[84vh] flex items-center bg-primary lg:bg-cover lg:lg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
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
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left "><i>
            "As a full-stack developer, my canvas is the digital world, and my code paints the portrait of seamless and impactful user journeys."
            </i></p>
            <div className="flex flex-com">
              <button className="btn btn-md bg-accent hover:bg-accent-hover md-btn-lg transition-all mr-3">Work with Me</button>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md-btn-lg transition-all">Download CV</button>

            </div>
            
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={selfImage} alt={selfImage} height={'80vh'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
