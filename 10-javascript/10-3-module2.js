// import add, { print as printMessage } from './10-3-module.js';
import * as calculator from './10-3-module.js';
/* export된 모든 아이를 calculator로 정의하고 사용 가능.
    ex)calculator.print(); , calculator.add(1,2);
    변수도 가능 : calculator.number();
*/

// export default는 그냥 사용 가능하지만 export는 {}을 사용해서 정의 그대로 사용해야 함
// export 된 이름을 바꾸고 싶다면 as 를 사용해서 가능함.
console.log(calculator.add(1, 2));

calculator.print();
calculator.number;
console.log(calculator.number);
