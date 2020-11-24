import styled, { createGlobalStyle } from 'styled-components';

import Colors from './Colors.json';
import Background from '../images/background.png';
import PoppinsBold from '../fonts/Poppins-Bold.ttf';
import PoppinsRegular from '../fonts/Poppins-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  /* Texts, vector images and font */
  @font-face { font-family: 'Poppins Bold'; src: url(${PoppinsBold}); }
  @font-face { font-family: 'Poppins Regular'; src: url(${PoppinsRegular}); }

  p, h1, h2, h4, svg, li { color: ${Colors.light_grey}; }
  h1, h2, h4 { font-family: 'Poppins Bold'; }
  h1 span { color: ${Colors.green}; }
  h2 span { color: ${Colors.pink}; }
  h1 { font-size: 56px; }
  p, li { font-family: 'Poppins Regular'; }
  a, svg { transition: .3s ease-in-out; }
  a { text-decoration: none; }
  li { list-style: none; }

  h2 {
    line-height: 34px;
    font-size: 30px;
  }

  a:hover > svg { color: ${Colors.pink}; }

  /* Body and components */
  * {
    margin: 0;
    border: 0;
    padding: 0;
  }

  body, footer { max-width: 80%; }

  body {
    margin: 0 auto;
    background-position: center;
    background-image: url(${Background});
    background-color: ${Colors.dark_grey};
  }
`;

const PageContent = styled.div`
  position: absolute;
  top: 30%;
  transform: translateY(-30%);
`;

export { GlobalStyle, PageContent }
