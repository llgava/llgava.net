import React from 'react';

import Routes from './routes';
import Footer from './components/Global/Footer';
import { GlobalStyle, PageContent } from './assets/styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />

      <PageContent>
        <Routes />
      </PageContent>
      <Footer />
    </>
  );
}

export default App;
