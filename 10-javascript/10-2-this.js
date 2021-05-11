{
  console.log(this);

  function simpleFunc() {
    console.log(this);
  }

  simpleFunc();
  console.clear();

  class Counter {
    count = 0;
    increase = function () {
      console.log(this);
    };
  }
  const counter = new Counter();
  counter.increase();

  //const caller = counter.increase;
  const caller = counter.increase.bind(counter);
  // bind : this 를 연결해줌
  caller(); //undefined

  class Bob {}
  const bob = new Bob();
  bob.run = counter.increase;
  bob.run(); // this : bob

  // function (함수) 는 window에서 접근 가능
  // ex ) window.simpleFunc
  // const , let 은 window에 등록 되지 않음
  // var은 window 객체에 등록이 됨
  // () => : arrow function을 쓰게되면 this가 유지됨
}
