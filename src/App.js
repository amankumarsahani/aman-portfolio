import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';
import SkillsLogo from './components/SkillsLogo';
import Testimonials from './components/Testimonials';

// import components

const App = () => {
  return <div>
    <Header/>
    <Hero/>
    <SkillsLogo/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Services/>
    <Testimonials/>
    <div style={{height:'2000px'}}></div>
  </div>;
};

export default App;
