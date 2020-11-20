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
`;

export { Container, ContactContainer };
