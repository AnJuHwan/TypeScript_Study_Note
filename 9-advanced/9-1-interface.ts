{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // object 형태로 둘다 가능 ★ : 둘다사용가능
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ★
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // Extends
  // ZPositionInterface 에 PositionInterface 추가
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // 오직 interface 들만 merged 가 가능하다.
  interface PositionInterface {
    z: number;
  }

  //   type PositionType = {}  : type은 불가능

  // Type aliases can use computed properties
  // Type 은 union type 구현가능 interface는 불가능
  type Person = {
    name: string;
    age: number;
  };

  // Name 은 Person 에 가지고 있는 name 이라는 type을 쓴다.
  type Name = Person['name']; //string

  type NumberType = number;
  type Direction = 'left' | 'right';

  /* 추가 정리 : type 은 어떤 data 를 담을 때 사용 하는 것이 좋고 ,
                interface 는 어떤한 규격을 통해서 구현을 할 때 사용 하는 것이 좋다. (class..)
  */
}
