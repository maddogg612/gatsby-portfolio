import React from 'react';
import HeaderPic from '../images/favicon.png'
//import styled from 'styled-components';

// const HeaderDiv = styled.div`
// background-color: var(--color-dark);
// `


const Header = () => {
  return (
    
  <header className='header'>
    <div className='header-left'>
      <img src={HeaderPic} alt='mini headshot'/>
      <span>GH</span>
    </div>
    <div className="header-links">
      <a href="#aboutSection">About</a>
      <a href="#projects">Projects</a>
      <a href="resume">Resume</a>
    </div>
  </header>
  )
}

export default Header;