import React from 'react';
import Projects from './Projects';

function Portfolio() {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1000px]'>
    <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content:portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                My Latest Work
            </h2>
            <p className='mx-3'>As a full-stack web developer, I take pride in crafting innovative solutions. Here's a glimpse of my recent projects, showcasing my technical skills and passion for creating seamless digital experiences. Each project reflects my commitment to excellence and user-centric design. Explore my latest work below:</p>
        <Projects/>
        </div>
    </div>

    </section>
  )
}

export default Portfolio
