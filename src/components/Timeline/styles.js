import styled from 'styled-components';

import Colors from '../../assets/styles/Colors.json';

const Container = styled.div`
  display: flex;

  ::before {
    content: '';
    width: 64px;
    height: 116px;
    border-bottom: 2px solid ${Colors.grey};
  }

  ::after {
    content: '';
    width: 0; 
    height: 0;
    margin-top: 100px;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 16px solid ${Colors.grey};
  }
`;

const ExperienceContainer = styled.ul`
  h4 {
    font-size: 20px;
    margin-top: -12px;
  }

  h4::before {
    content: '';
    margin-bottom: 8px;
    display: block;
    transform: rotateY(0deg) rotate(45deg);
    border: 2px solid ${Colors.grey};
    background-color: ${Colors.dark_grey};
    width: 16px;
    height: 16px;
  }
`;

const Experience = styled.div`
  padding: 0 128px 16px 0;
  border-bottom: 2px solid ${Colors.grey};
  max-height: 100px;
  height: 100px;

  li { font-size: 20px; }
`;



export { Container, ExperienceContainer, Experience };
