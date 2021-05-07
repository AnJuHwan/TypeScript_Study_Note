{
  type Direction = 'up' | 'down' | 'left' | 'right' | 'he';
  const position = {
    x: 0,
    y: 0,
  };

  function move1(direction: Direction) {
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

      case 'he':
        position.x += 1;
        break;

      default:
        const invalid: never = direction;
        throw new Error(`unknown direction : ${invalid}`);
    }
  }
}
