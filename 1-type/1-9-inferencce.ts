{
  // Type Inference
  // 타입을 생략하여도 타입을 추론 해줌.
  let text = 'hello';
  // text = 1; Error hello라고 string 이 선언 되었기 때문

  function print(message = 'hello') {
    console.log(message);
  }

  print('hello');

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
  //   result 는 x ,y number을 받았기 떄문에 number Type으로 추론됨
}
