import styled from 'styled-components';

import Colors from '../../../assets/styles/Colors.json';

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

  :hover {
    transform: translateY(-12px);
    border: 3px solid ${Colors.green};
  }

  :hover > svg { color: ${Colors.green}; }

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
`;

export { XPContainer };
