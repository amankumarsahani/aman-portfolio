import React from 'react';
import About from './components/About';
import BackToTopBtn from './components/BackToTop';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
    <Contact/>
    <Footer/>
    <BackToTopBtn/>
  </div>;
};

export default App;
