import React from 'react';
import About from './About'
import Projects from './Projects';
import Contact from './Contact'
import TechStack from './TechStack';

const Body = () => {
  return (
    <div>
    <About />
    <TechStack />
    <Projects />
    <Contact />
    </div>
  )
}

export default Body;