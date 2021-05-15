'use strict';
var Car = /** @class */ (function () {
    function Car() {
        this.engine = 0;
    }
    Car.prototype.move = function () {
        var engine = this.engine + 1;
        console.log(engine);
        console.log('문자 engine');
    };
    return Car;
}());
var car = new Car();
car.move();
//# sourceMappingURL=main.js.map