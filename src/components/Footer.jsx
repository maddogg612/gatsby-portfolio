import React from 'react';
import Github from '../images/Contact/github.ico'
import Linkedin from '../images/Contact/linkedin.ico'
import Email from '../images/Contact/email.ico'
import styled from 'styled-components';

const ContactImages = styled.img`
width: 50px;
height: 50px;
margin: 10px
`

const ContactDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const FooterDiv = styled.div`
background-color: var(--color-dark);
color: var(--color-light);
`


const Footer = () => {
  return (
    <FooterDiv>
      <ContactDiv>
        <a
          href="https://github.com/maddogg612"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactImages src={Github} alt="github" className="contactimage" />
        </a>
        <a
          href="https://www.linkedin.com/in/gordon-hui-78453935/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactImages src={Linkedin} alt="linkedin" className="contactimage" />
        </a>
        <a href="email">
        <ContactImages src={Email} alt="email" className="contactimage" />
      </a>
      </ContactDiv>
    <p>© 2021 by Gordon Hui</p>
    </FooterDiv>
  )
}

export default Footer;