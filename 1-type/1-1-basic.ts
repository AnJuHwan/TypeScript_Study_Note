{
  //number
  const num: number = -6;

  //string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  //undefined 💩
  let name: undefined; // undefined 만 단독사용 X
  let age: number | undefined; // number | undefined
  age = undefined;
  age = 1;
  function find(): number | undefined {
    //find에서 return 할 수 있는 타입
    return undefined;
  }

  //null 💩
  let person: null; // null만 단독사용 X
  let person2: string | null;

  //unknown 가능하면 쓰지 않음 (어떤 타입이 들어올지 모를 때) 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;
  notSure = 1;

  //any 가능하면 쓰지 않음 (뭐든지 다 들어 올 수 있음) 💩
  let anything: any = 0;
  anything = "hello";

  //void 함수에서 return 하지 않을 때 사용
  function print(): void {
    console.log("hello");
    return;
  }
  //   let unusable: void = undefined; 💩

  //never return 절때 안함 대부분 Error을 호출해줄 때 사용
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    /* while (true) {
    
    } */
    let nerverEnding: never; //💩 사용하는 경우 없음
  }

  // objet 💩
  let obj: object; // [1,4] 배열도 가능
  function accepSomeObject(obj: object) {}
  accepSomeObject({ name: "ellie" });
  accepSomeObject({ animal: "dog" });
}
