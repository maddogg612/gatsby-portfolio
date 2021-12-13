//import { Link, Typography } from '@mui/material';
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
      <span>Gordon Hui</span>
    </div>
    <div className="header-links">
      <a href="https://drive.google.com/file/d/1me1rsMeqEo77X6GD58GMkGiLyNNlOgki/view?usp=sharing" target='_blank' rel='noreferrer'>Resume</a>
    </div>
  </header>
  )
}

export default Header;