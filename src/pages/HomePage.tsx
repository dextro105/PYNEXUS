import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Testimonials />
    </>
  );
};

export default HomePage;