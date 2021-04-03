{
  // Array 두가지 방식
  const fruits: string[] = ["토마토", "바나나"];
  const scores: Array<number> = [1, 3, 4];

  function printArray(fruits: readonly string[]) {
    // fruits.push
    // readonly : Array 안에 수정 불가 읽기만 가능
    // readonly에는 Array<string> 사용 불가
  }

  // Tuple 두가지 Type 들어갈 수 있음
  // Tuple -> interface, type alias , class 대체 사용 권장
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  //   이와같이 index에 들어있는게 뭐인지 가독성이 떨어짐
  const [name, age] = student;
}
