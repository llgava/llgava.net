import React from 'react';
import { FaPalette } from 'react-icons/fa';
import { SiHtml5, SiJavascript, SiJava, SiTypescript } from 'react-icons/si';

import { XPContainer } from './styles';

const iSize = 25;

function Experiences() {
  return (
    <div style={{ display: "flex" }}>
      <XPContainer>
        <li>since I was born</li>
        <FaPalette size={iSize} />
      </XPContainer>

      <XPContainer>
        <li>started in 2013</li>
        <li>paused in 2019</li>
        <SiHtml5 size={iSize} />
      </XPContainer>

      <XPContainer>
        <li>started in 2017</li>
        <li>paused in 2020</li>
        <SiJavascript size={iSize} />
      </XPContainer>

      <XPContainer>
        <li>started in 2014</li>
        <li>paused in 2017</li>
        <li>studying in 2020</li>
        <SiJava size={iSize} />
      </XPContainer>

      <XPContainer>
        <li>started in 2020</li>
        <li>studying in 2020</li>
        <SiTypescript size={iSize} />
      </XPContainer>
    </div>
  );
}

export default Experiences;