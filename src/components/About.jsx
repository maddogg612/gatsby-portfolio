import React from 'react';
// import TechStack from './TechStack';
import {Container, Typography} from '@mui/material';

const About = () => {
  return (
    <Container className="aboutSection" id="aboutSection">

      <Typography variant='h2'>Hello, I am Gordon Hui.</Typography>
      <Typography variant='h5'> I am a full-stack software engineer. My work focuses on React/Redux stack on frontend and Node server design on the backend. I am trying to make life simplier one application at a time.</Typography>
      {/* <Typography variant='h5'>something eye opening here</Typography> */}

      {/* <TechStack/> */}
  
    </Container>
  )
}

export default About;