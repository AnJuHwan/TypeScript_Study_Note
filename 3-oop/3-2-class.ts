{
  //절차지향
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // Class 맴버변수에 접근 할 때는 this 를 붙여줘야 됨.

    static BEANS_GRAMM_PER_SHOT: number = 7; // static을 붙이면 class level
    // class level 은 object 만들어 질 때 마다 생성되지 않아서 메모리 낭비를 안함
    coffeeBeans: number = 0; // instance (object) level
    // instance (obj) level 은 object 만들어 질 때 마다 생성됨

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
      // this.coffeeBeans는 위에 맴버변수 ,
      // coffeeBeans 전달받은 값
      // 인자를 전달 32개가 들어감
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // class 레벨은 절대 변하지 않는 값이 있다면 class 레벨로 사용
    // CoffeeMaker.BEANS_GRAMM_PER_SHOT 는 class 레벨이기 때문에 Class 이름을 붙여줘야 됨.
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(32);
  maker2.makeCoffee(3); //static 이 아니면 class를 생성하고 다시 불러봐야댐
  console.log(maker2);

  //static 이면 그냥 바로 class에 접근하여 사용 가능
  const maker3 = CoffeeMaker.makeMachine(5);
  console.log(maker3);
}
