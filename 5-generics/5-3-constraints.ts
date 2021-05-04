{
  // 제네릭 조건
  /* 
    제네릭을 함수에서 쓸때는 항상 인자(employee:P 전달받는 값) 를
    전달하는 괄호 () 앞에다가 제네릭을 정의한다.
  */
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time!`);
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time!`);
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 안좋다.
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<P extends Employee>(employee: P): P {
    employee.pay();
    return employee;
  }

  /*  --- 함수 표현식 --- 
  const pay = <T extends Employee>(employee: T): T => {
    employee.pay();
    return employee;
  }; 
   */

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  ellie.workFullTime();
  bob.workPartTime();

  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);

  const obj = {
    name: 'ellie',
    age: 20,
  };

  const obj2 = {
    animal: 'dog',
  };

  console.log(getValue(obj, 'name')); // ellie
  console.log(getValue(obj, 'age')); // 20
  console.log(getValue(obj2, 'animal')); // dog

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    // getValue<T, K extends keyof T> --> K는 T(object) 안에 있는 key 여야됨.
    return obj[key];
  }
}
