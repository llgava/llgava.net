/**
 * Return a `debug` to see the size of canvas (width | X).
 */
function SquareX(context, scale, x, y, color) {
  const maxSizeX = x/scale;
  let count = {
    x: 0,
    y: y || 0
  };

  for (count.x; count.x < maxSizeX; count.x++) {
    context.fillStyle = color || '#FF79C6';
    context.fillRect(count.x, count.y, 1, 1);
  }

  console.log(`Was found ${count.x} squares at X position.`);
}

/**
 * Return a `debug` to see the size of canvas (heigth | Y).
 */
function SquareY(context, scale, y, x, color) {
  const maxSizeY = y/scale;
  let count = {
    x: x || 0,
    y: 0
  };

  for (count.y; count.y < maxSizeY; count.y++) {
    context.fillStyle = color || '#50FA7B';
    context.fillRect(count.x, count.y, 1, 1);
  }

  console.log(`Was found ${count.y} squares at Y position.`);
}


export { SquareX, SquareY }
