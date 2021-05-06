// https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts
Array;
[1, 2].map;

type Student = {
  passed: boolean;
};
const Students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: true },
];
const result = Students.every((Students) => {
  return Students.passed;
});
console.log(result);
/*
 every 함수는 모두다 true 이면 true을 반환, 하나라도 false이면 false를 반환
*/

// 두가지 다른 every
class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

// animal is Cat : aniaml안에 Cat만 return 하는 함수
function isCat(animal: Animal): animal is Cat {
  // animal 은 Cat이라고 캐스팅을 하고 isCat undefined 가 아니라면 Cat을 return
  return (animal as Cat).isCat !== undefined;
}
// animals.every 돌면서 Cat인지 확인 ()안에는 콜백함수 전달
animals.every<Cat>(isCat);

console.log(animals.every<Cat>(isCat));
// 배열안에 Cat만 있는지 확인
