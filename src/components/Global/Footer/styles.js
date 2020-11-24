import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  align-items: center;
  bottom: 0;
  padding: 30px 0;
  position: absolute;
  width: 100%;

  a { margin: 0 5px; }
  a:first-child { margin-left: 0; }
  a:last-child { margin-right: 0; }
`;

const ContactContainer = styled.div`
  margin-left: auto;

  h4 { text-align: right; }
  h4:nth-child(2) { display: none; }

  @media only screen and (max-width: 550px) {
    h4, p { display: none; }
    h4:nth-child(2) { display: block; }
  }
`;

export { Container, ContactContainer };
