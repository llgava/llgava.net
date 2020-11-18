/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { Container, ContactContainer } from './styles';

const iSize = 30;

function Footer() {
  return(
    <Container>
      <a href='https://twitter.com/llgava' target='_blank'><FaTwitter size={iSize} /></a>
      <a href='https://www.facebook.com/gava00' target='_blank'><FaFacebookF size={iSize} /></a>
      <a href='/#' target='_blank'><FaLinkedinIn size={iSize} /></a>
      <a href='https://github.com/llgava' target='_blank'><FaGithub size={iSize} /></a>

      <ContactContainer>
        <h4>hi at llgava dot net</h4>
        <p>Did you think it would be that easy?</p>
      </ContactContainer>
    </Container>
  );
}

export default Footer;
