{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);
  // any로 쓰게되면 type 체크가 되지 않음

  //<> GENERIC 함수
  // GENERIC : 받는 param 에 따라 type이 정해짐
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      /* 
        undefined 같이 걸러짐 
        이유 : null과 undefined을 명확하게 구분해야 하는 경우가 아니라면,
        null이 undefined이 포함하는 의미
        값이 없는것 (null) 그리고 아직 정의되지 않는 것 
        (undefined) 이 두가지 경우 다, 값 없음! 으로 간주 하는거죠.
      */
      throw new Error('not valid number!');
    }
    return arg;
  }
  // ex
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
  const checknull = checkNotNull(undefined);
}
