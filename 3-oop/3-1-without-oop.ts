{
  //절차지향
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    // coffeeBeans 를 커피를 만든 만큼 줄임
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    // coffeeBeans = coffeeBeans-shots*BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
  console.log(coffeeBeans);
}
