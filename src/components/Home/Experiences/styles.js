import styled from 'styled-components';

import Colors from '../../../assets/styles/Colors.json';

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-flow : wrap
`;

const XPContainer = styled.ul`
  border-radius: 16px;
  margin: 0 15px;
  border: 3px solid ${Colors.grey};
  padding: 15px;
  width: 172px;
  height: 124px;
  transition: .3s ease-in-out;
  position:relative;
  cursor: default;

  :hover { transform: translateY(-12px); }
  :first-child { margin-left: 0; }
  :last-child { margin-right: 0; }

  h4 { margin-bottom: 10px; }

  svg {
    padding: 8px;
    border-radius: 12.5px;
    background-color: ${Colors.dark_grey};
    position: absolute;
    bottom: -16px;
    left: -16px;
  }

  /* RESPONSIVITY */
  @media only screen and (max-width: 1280px) {
    :last-child { margin: 30px 15px 0 0; }

    @media only screen and (max-width: 1024px) {
      :nth-child(4) { margin: 30px 15px 0 0; }
      :last-child { margin: 30px 15px; }

      @media only screen and (max-width: 720px) {
      :nth-child(3) { margin: 30px 15px 0 0; }
      :nth-child(4) { margin: 30px 15px 0 15px; }
      :last-child { margin: 30px 15px 0 0; }
    }
    }
  }
`;

export { Container, XPContainer };
