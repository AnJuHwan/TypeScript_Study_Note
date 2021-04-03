{
  // Type Aliases
  //   Type을 정의할 수 있음
  type Text = string;
  const name: Text = "hello";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    // object 형태로 지정하게 되면 obj안에 있는 키와 type만 사용 가능

    name: string;
    age: number;
  };
  const student: Student = {
    name: "JuHwan",
    age: 12,
  };

  // String Literal Types
  type Name = "name";
  let JuHwan: Name;
  // JuHwan = 'hello' Error
  JuHwan = "name";
  // 지정된 변수만 쓸 수 있음
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
  // const isCat: Boal = false; Error

  // 1-5 union.ts 에 사용하는 예시 나옴
}
