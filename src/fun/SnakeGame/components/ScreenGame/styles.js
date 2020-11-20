import styled from 'styled-components';
import { cfg } from '../../assets/cfg';

export const Container = styled.div`
  background-color: red;

  canvas {
    width: ${`${cfg.CANVAS_SIZE[0]}px`};
    height: ${`${cfg.CANVAS_SIZE[1]}px`};
    border: 2px solid white;
  }
`;
