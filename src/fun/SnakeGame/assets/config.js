/*
  • CANVAS_SIZE: Will determine the area of the game.
      It's where the player will be able to play the
      game, the syntax and definition of the size is.

  • SCALE: Will determine the size of every square on
      the canvas. If the scale be changed, you need to
      change the texture size too to the same size too.
*/

const cfg = {
  /* GAME AREA AND GAMEPLAY CONFIGURATION */
  CANVAS_SIZE: [320, 320],
  SCALE: 34,
  SPEED: 100,

  /* SNAKE AND APPLE START COORDINATES*/
  SNAKE_START: [ [0, 0], [0, 1] ],
  APPLE_START: [8, 3],

  /* KEYBOARD MAP */
  DIRECTRIONS: {
    37: [-1, 0],  /* LEFT  */
    38: [0, -1],  /* UP    */
    39: [1, 0],   /* RIGHT */
    40: [0, 1]    /* DOWN  */
  }
}

export { cfg };
