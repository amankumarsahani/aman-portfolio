import React from "react";
import Image from "../assets/img/about.webp";

function About() {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[556px md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt={Image}
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg-block">
                Aman Kumar Sahani
              </h2>
              <p className="mb-4 text-accent">Full Stack Web Developer</p>
              <hr className="mb-6 opacity-5" />
              <p className="mb-6">
                I am a full stack web developer with experience in developing and deploying web
                applications. I have strong skills in languages such as HTML,
                CSS, JavaScript, and Python, and I am familiar with frameworks
                such as React and MERN Stack.<br/> I am a problem-solver at heart and
                enjoy the challenges that come with the full stack development
                process, from the back-end logic to the front-end user
                interface. I have worked on projects for clients in a variety of
                industries, including e-commerce, education and finance.
                
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
