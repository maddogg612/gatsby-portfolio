import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
background-color: var(--color-dark);
color: var(--color-light);
`


const Header = () => {
  return (
    <HeaderDiv>
    <h1>Gordon Hui or picture here</h1>
    <h1>About</h1>
    <h1>Technologies</h1>
    <h1>Projects</h1>
    <h1>Resume link </h1>
    </HeaderDiv>
  )
}

export default Header;