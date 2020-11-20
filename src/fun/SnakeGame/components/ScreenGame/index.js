import React, { useEffect } from 'react';

/* import { cfg } from '../../assets/cfg'; */

import { MoveSnake } from '../../mechanics/MoveSnake';
import { Container } from './styles';

function ScreenGame() {
  useEffect(() => {

  }, [/* snake, apple, gameOver */]);

  return(
    <Container
      role="button"
      tabIndex="0"
      onKeyDown={e => MoveSnake(e)}
    >
      <canvas
        /* ref={canvasRef} */
        
      >

      </canvas>
    </Container>
  );
}

export default ScreenGame;
