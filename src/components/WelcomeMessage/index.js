import React from 'react';

import { Container } from './styles';

function WelcomeMessage() {
  return(
    <Container>
      <h1>Hi, I'm <span>Leonardo</span></h1>
      <h2>I write a few lines of <span>code</span></h2>
      <h2>and create some <span>UI/UX</span> too</h2>
    </Container>
  );
}

export default WelcomeMessage;
