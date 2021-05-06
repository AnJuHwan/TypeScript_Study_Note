{
  interface Stack<V> {
    readonly size: number;
    push(value: V): void;
    pop(): V;
  }

  type StackNode<V> = {
    readonly value: V;
    readonly next?: StackNode<V>;
  };

  class StackImpl<V> implements Stack<V> {
    private _size: number = 0;
    private head?: StackNode<V>;

    get size() {
      return this._size;
    }
    push(value: V) {
      const node: StackNode<V> = { value: value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): V {
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
  // StackImpl 마우스 올려보면 unknown 타입인걸 확인 가능,
  // 가급적 unknown 은 사용하지 않는 것이 좋다.
  stack.push(1);
  stack.push('hello');
  stack.push(true);
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
