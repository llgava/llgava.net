/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { loadImage } from 'canvas';

import { Container } from './styles';
import { cfg } from '../../assets/config';
import { useInterval } from '../../hooks/useInterval';

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
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  /* START AND END GAME */
  function StartGame() {
    setSnake(cfg.SNAKE_START);
    setApple(cfg.APPLE_START);
    setDir([0, -1]);
    setSpeed(cfg.SPEED);
    setGameOver(false);
  }

  function EndGame() {
    setSpeed(null);
    setGameOver(true);
  }

  function GameLoop() {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (CollisionWall(newSnakeHead, snake)) EndGame();
    snakeCopy.pop();
    setSnake(snakeCopy);
  }

  /* GAMEPLAY */
  function MoveSnake({ keyCode }) {
    if (keyCode >= 37 && keyCode <= 40) setDir(cfg.DIRECTIONS[keyCode]);
  }

  function CollisionWall(snakeHead, snakeBody) {
    /* VALIDATE WHEN THE SNAKE HEAD HIT THE BORDER OF CANVAS */
    if(
      snakeHead[0] * cfg.SCALE >= cfg.CANVAS_SIZE.x ||
      snakeHead[0] < 0 ||
      snakeHead[1] * cfg.SCALE >= cfg.CANVAS_SIZE.y ||
      snakeHead[1] < 0
    ) return true;

    /* VALIDADE WHEN THE SNAKE HEAD HIT THEIR OWN BODY */
    for(const segment of snakeBody) {
      if(snakeHead === segment[0] && snakeHead[1] === segment[1]) return true;
    }
    
    return false;
  }

  function CollisionApple() {

  }

  useInterval(() => GameLoop(), speed);

  useEffect(() => {
    /* ASSETS CONTEXTS */
    const context = canvasRef.current.getContext("2d");
    context.setTransform(cfg.SCALE, 0, 0, cfg.SCALE, 0, 0);

    /*  SNAKE STYLE */
    loadImage(SnakeTexture).then(img => {
      context.clearRect(0, 0, cfg.CANVAS_SIZE.x, cfg.CANVAS_SIZE.y);
      snake.forEach(([x, y]) => context.drawImage(img, x, y, 1, 1));
    })

    /* APPLE STYLE */
    loadImage(Foods[FoodSelector]).then(img => {
      context.drawImage(img, apple[0], apple[1], 1, 1);
    })

  }, [snake, apple, gameOver]);

  return (
    <>
      <div
        role="button"
        tabIndex="0"
        onKeyDown={e => MoveSnake(e)}
      >
        <canvas
          ref={canvasRef}
          width={`${cfg.CANVAS_SIZE.x}px`}
          height={`${cfg.CANVAS_SIZE.y}px`}
        />
      </div>

      {gameOver && <p>Perdeu rapaz.</p>}
      <button onClick={() => StartGame()}>Iniciar jogo</button>
    </>
  );
}

export default ScreenGame;
