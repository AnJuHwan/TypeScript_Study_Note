/*  ---조건--- 
1. 배열을 이용하지 않고 구현.
2. size - 1부터시작
3. 데이터가 없으면 null 표시
4. push 데이터 삽입 , pop 데이터 삭제
*/

interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}
