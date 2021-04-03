{
  //JavaScript 💩
  /*
  function jsAdd(num1 + num2) {
    return num1 + num2;
  } 
  */

  //TypeScript
  function add(num1: number, num2: number): number {
    // number을 return 함
    return num1 + num2;
  }

  //JavaScript 💩
  /*
  function jsFetchNum(id) {
    // code..
    // code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  */

  //TypeScript
  function FetchNum(id: string): Promise<number> {
    // code..
    // code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //JavaScript => TypeScript
  //Optional parameter
  function printName(firstName: string, lastName?: string) {
    //string | undefined 라고 정의하면
    //printName("Ellie",undefind); 라고 정의 해줘야댐
    // firstName은 꼭 전달 해야되고 lastName은 선택
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Ellie");
  printName("Anna");

  //Default parameter
  function printMessage(message: string = "default message") {
    //기본값 설정
    console.log(message);
  }
  printMessage();

  //Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}
