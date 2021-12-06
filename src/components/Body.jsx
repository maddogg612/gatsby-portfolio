import React from 'react';
import About from './About'
import Projects from './Projects';
import Contact from './Contact'
import {Container} from '@mui/material';

const Body = () => {
  return (
    <Container sx={{pt:'60px'}}>
    <About />
    <Projects />
    <Contact />
    </Container>
  )
}

export default Body;