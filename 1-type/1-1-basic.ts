{
  //number
  const num: number = -6;

  //string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  //undefined π©
  let name: undefined; // undefined λ§ λ¨λμ¬μ© X
  let age: number | undefined; // number | undefined
  age = undefined;
  age = 1;
  function find(): number | undefined {
    //findμμ return ν  μ μλ νμ
    return undefined;
  }

  //null π©
  let person: null; // nullλ§ λ¨λμ¬μ© X
  let person2: string | null;

  //unknown κ°λ₯νλ©΄ μ°μ§ μμ (μ΄λ€ νμμ΄ λ€μ΄μ¬μ§ λͺ¨λ₯Ό λ) π©
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;
  notSure = 1;

  //any κ°λ₯νλ©΄ μ°μ§ μμ (λ­λ μ§ λ€ λ€μ΄ μ¬ μ μμ) π©
  let anything: any = 0;
  anything = "hello";

  //void ν¨μμμ return νμ§ μμ λ μ¬μ©
  function print(): void {
    console.log("hello");
    return;
  }
  //   let unusable: void = undefined; π©

  //never return μ λ μν¨ λλΆλΆ Errorμ νΈμΆν΄μ€ λ μ¬μ©
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    /* while (true) {
    
    } */
    let nerverEnding: never; //π© μ¬μ©νλ κ²½μ° μμ
  }

  // objet π©
  let obj: object; // [1,4] λ°°μ΄λ κ°λ₯
  function accepSomeObject(obj: object) {}
  accepSomeObject({ name: "ellie" });
  accepSomeObject({ animal: "dog" });
}
