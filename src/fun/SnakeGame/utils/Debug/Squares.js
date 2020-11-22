/**
 * Return a `debug` to see the size of canvas (heigth).
 */
function SquareX(context, scale, x, y, color) {
  const maxSize = x/scale;
  let count = { x: 0, y: y || 0 };

  for (count.x; count.x < maxSize; count.x++) {
    console.log('O valor de count.x é: ' + count.x);
    context.fillStyle = color || '#FF79C6';
    context.fillRect(count.x, count.y, 1, 1);
  }
}

/**
 * Return a `debug` to see the size of canvas (width).
 */
function SquareY(context, scale, y, x, color) {
  const maxSize = y/scale;
  let count = { x: x || 0, y: 0 };

  for (count.y; count.y < maxSize; count.y++) {
    console.log('O valor de count.x é: ' + count.y);
    context.fillStyle = color || '#50FA7B';
    context.fillRect(count.x, count.y, 1, 1);
  }
}


export { SquareX, SquareY }
