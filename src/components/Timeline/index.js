import React from 'react';

import { Container, ExperienceContainer, Experience } from './styles';

function Timepne() {
  return (
    <Container>
      <ExperienceContainer>
        <Experience>
          <li>since I was born</li>
        </Experience>
        <h4>UI/UX</h4>
      </ExperienceContainer>

      <ExperienceContainer>
        <Experience>
          <li>started in 2013</li>
          <li>paused in 2019</li>
        </Experience>
        <h4>HTML and CSS</h4>
      </ExperienceContainer>

      <ExperienceContainer>
        <Experience>
          <li>started in 2017</li>
          <li>paused in 2020</li>
        </Experience>
        <h4>JavaScript</h4>
      </ExperienceContainer>

      <ExperienceContainer>
        <Experience>
          <li>started in 2014</li>
          <li>paused in 2017</li>
          <li>studying in 2020</li>
        </Experience>
        <h4>Java</h4>
      </ExperienceContainer>

      <ExperienceContainer>
        <Experience>
          <li>started in 2020</li>
          <li>studying in 2020</li>
        </Experience>
        <h4>TypeScript</h4>
      </ExperienceContainer>
    </Container>
  );
}

export default Timepne;
