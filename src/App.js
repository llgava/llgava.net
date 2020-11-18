import React from 'react';

import { GlobalStyle } from './assets/styles/GlobalStyle';
import WelcomeMessage from './components/WelcomeMessage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />

      <WelcomeMessage />
      <Footer />
    </>
  );
}

export default App;
