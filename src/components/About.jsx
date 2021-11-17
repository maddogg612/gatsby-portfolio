import React from 'react';
import TechStack from './TechStack';

const About = () => {
  return (
    <div className="aboutSection" id="aboutSection">
      <h1>
        {' '}
        Hi, I am <strong>Gordon Hui</strong>
      </h1>
      <p> full-stack developer & veterinarian</p>
      <p>my narriative goes here</p>

      <TechStack/>
    </div>
  )
}

export default About;