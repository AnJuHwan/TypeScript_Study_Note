/**
 * Let's make a game 🕹
 */
// 스스로 만든 답안
type Direction = 'up' | 'down' | 'left' | 'right';
const position = {
  x: 0,
  y: 0,
};
function move(direction: Direction) {
  switch (direction) {
    case 'up':
      return position.y++;

    case 'down':
      return position.y--;

    case 'left':
      return position.x--;

    case 'right':
      return position.x++;

    default:
      throw new Error('Error');
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
/*
function move(direction: Direction) {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;

    case 'down':
      position.y -= 1;
      break;

    case 'left':
      position.x -= 1;
      break;

    case 'right':
      position.x += 1;
      break;

    default:
      throw new Error(`unknown direction : ${direction}`);
  }
}
영상의 답안 
*/
