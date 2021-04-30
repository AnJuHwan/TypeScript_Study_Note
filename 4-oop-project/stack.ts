{
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

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    get size() {
      return this._size;
    }
    push(value: string) {
      const node: StackNode = { value: value, next: this.head };
      this.head = node;
      this._size++;
    }

    // this.head == null 이면 null , undefined 다 같이 걸러짐
    pop(): string {
      // null == undefined 값체크가능 , null !== undefined Type자체는 다름
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl();
  stack.push('A 1');
  stack.push('B 2');
  stack.push('C 3');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
