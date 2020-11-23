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
  CANVAS_SIZE: { x: 306, y: 306 },
  SCALE: 34,
  SPEED: 135,

  /* SNAKE AND APPLE START COORDINATES*/
  SNAKE_START: [ [0, 7], [0, 8] ],
  APPLE_START: [0, 5],

  /* KEYBOARD MAP */
  DIRECTIONS: {
    37: [-1, 0],  /* LEFT  */
    38: [0, -1],  /* UP    */
    39: [1, 0],   /* RIGHT */
    40: [0, 1]    /* DOWN  */
  }
}

export { cfg };
