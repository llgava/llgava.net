const cfg = {
  CANVAS_SIZE: [320, 320],
  SNAKE_START: [
    [8, 7],
    [8, 8]
  ],

  APPLE_START: [8, 3],
  SCALE: 40,
  SPEED: 100,
  DIRECTRIONS: {
    37: [-1, 0],  /* LEFT  */
    38: [0, -1],  /* UP    */
    39: [1, 0],   /* RIGHT */
    40: [0, 1]    /* DOWN  */
  }
}

export { cfg };



/*
  The CANVAS_SIZE will determine the area of the game.
  It's where the player will be able to play the game, the
  syntax and definition of the size is: [width, height].
*/
