'use strict';
class Car {
  engine = 0;
  move() {
    const engine = this.engine + 1;
    console.log(engine);
    console.log('문자 engine');
  }
}
const car = new Car();
car.move();
