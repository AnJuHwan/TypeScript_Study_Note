{
  // Type Assertions  많이 쓰지 않음
  function jsStrFunc(): any {
    return 'hello';
  }
  // any Type을 사용해서 string , number Type 이 들어갈 수 있음.
  const result = jsStrFunc();
  // result.length 를 사용하려면 any 타입이라 length API를 사용 할 수 없음
  // (result as string) 사용하면 result는 string형태로 보고 length 등 string Type의 API를 사용가능 함
  // 만약에 jsStrFunc 함수에 return 2 숫자 형태를 넣게 된다면 undefined 가 나오게 됨.
  console.log((result as string).length);
  console.log((<string>result).length); // 위와 동일

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  // Type Error 이렇게 되면 다운됨.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers.push(2);  undefined 일 수도 있기 때문에 Error
  numbers!.push(2); //undefined가 아닌걸 확실할 때 씀
  // 하지만 안쓰는걸 추천함.
}
