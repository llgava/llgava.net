/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { loadImage } from 'canvas';

import { MoveSnake } from '../../mechanics/MoveSnake';
import { StartGame } from '../../mechanics/StartGame';
import { Container } from './styles';
import { cfg } from '../../assets/config';

/* TEXTURES */
import SnakeTexture from '../../assets/images/snake.png';
import BlueFood from '../../assets/images/blue-food.png';
import PinkFood from '../../assets/images/pink-food.png';
import PurpleFood from '../../assets/images/purple-food.png';

const Foods = [BlueFood, PinkFood, PurpleFood];
const FoodSelector = Math.floor(Math.random() * Foods.length);

function ScreenGame() {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(cfg.SNAKE_START);
  const [apple, setApple] = useState(cfg.APPLE_START);
  const [debug, setDebug] = useState(cfg.DEBUG_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    /* ASSETS CONTEXTS */
    const context = canvasRef.current.getContext("2d");
    context.setTransform(cfg.SCALE, 0, 0, cfg.SCALE, 0, 0);
    context.clearRect(0, 0, cfg.CANVAS_SIZE.x, cfg.CANVAS_SIZE.y);

    /* SNAKE STYLE */
    loadImage(SnakeTexture).then(img => {
      snake.forEach(([x, y]) => context.drawImage(img, x, y, 1, 1));
    })

    /* APPLE STYLE */
    loadImage(Foods[FoodSelector]).then(img => {
      context.drawImage(img, apple[0], apple[1], 1, 1);
    })
  }, [snake, apple, gameOver]);

  return (
    <Container
      role="button"
      tabIndex="0"
      onKeyDown={e => MoveSnake(e)}
    >
      <canvas
        ref={canvasRef}
        width={`${cfg.CANVAS_SIZE.x}px`}
        height={`${cfg.CANVAS_SIZE.y}px`}
      />

      {gameOver && <p>Perdeu rapaz.</p>}

      <button onClick={StartGame}>Iniciar jogo</button>
    </Container>
  );
}

export default ScreenGame;
