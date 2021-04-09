/**
 * Let's make a calculator 🧮
 */
type Calculator = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(calculator: Calculator, a: number, b: number): number {
  switch (calculator) {
    case 'add':
      return a + b;

    case 'substract':
      return a - b;

    case 'multiply':
      return a * b;

    case 'divide':
      return a / b;

    case 'remainder':
      return a % b;

    default:
      //   'Erorr Choice (add , substract , multiply , divide , remainder)';
      throw new Error('unknown command');
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
