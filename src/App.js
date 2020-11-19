import React from 'react';

import { GlobalStyle } from './assets/styles/GlobalStyle';
import WelcomeMessage from './components/WelcomeMessage';
import Footer from './components/Footer';
import Timeline from './components/Timeline';

function App() {
  return (
    <>
      <GlobalStyle />

      <WelcomeMessage />
      <Timeline />
      <Footer />
    </>
  );
}

export default App;
