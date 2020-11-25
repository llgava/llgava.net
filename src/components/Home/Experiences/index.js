import React from 'react';
import { FaPalette, FaCube } from 'react-icons/fa';
import { SiHtml5, SiJavascript, SiJava, SiTypescript } from 'react-icons/si';

import { Container, XPContainer } from './styles';

const iSize = 25;

function Experiences() {
  return (
    <Container>
      <XPContainer>
        <h4>UI/UX</h4>
        <li>since I was born</li>
        <FaPalette size={iSize} />
      </XPContainer>

      <XPContainer>
        <h4>HTML and CSS</h4>
        <li>started in 2013</li>
        <li>paused in 2019</li>
        <SiHtml5 size={iSize} />
      </XPContainer>

      <XPContainer>
        <h4>JavaScript</h4>
        <li>started in 2017</li>
        <li>paused in 2020</li>
        <SiJavascript size={iSize} />
      </XPContainer>

      <XPContainer>
        <h4>Java</h4>
        <li>started in 2014</li>
        <li>paused in 2017</li>
        <li>studying in 2020</li>
        <SiJava size={iSize} />
      </XPContainer>

      <XPContainer>
        <h4>TypeScript</h4>
        <li>started in 2020</li>
        <li>studying in 2020</li>
        <SiTypescript size={iSize} />
      </XPContainer>

      <XPContainer>
        <h4>Minecraft Addons</h4>
        <li>started in 2020</li>
        <li>studying in 2020</li>
        <FaCube size={iSize} />
      </XPContainer>
    </Container>
  );
}

export default Experiences;
