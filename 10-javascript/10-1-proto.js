{
  const x = {};
  const y = {};
  console.log(x);
  console.log(y);
  console.log(x.toString());
  console.log(x.__proto__ === y.__proto__);

  const array = [];
  console.log(array);

  console.clear();

  function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    /*
    this.makeCoffee = (shots) => {
      console.log('making...');
    };
    */
  }

  CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making..');
  };

  const machine1 = new CoffeeMachine(10);
  const machine2 = new CoffeeMachine(10);
  console.log(machine1);
  console.log(machine2);

  function LatteMachine(milk) {
    this.milk = milk;
  }
  LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
  // prototype을 이용하여 LatteMachine 은 CoffeeMachine 상속함

  const latteMachine = new LatteMachine(123);
  console.log(latteMachine);
  latteMachine.makeCoffee();

  // prototype : 코드를 재 사용하기 위해서 만든 아이 , 상속을 하기 위한 아이
}
