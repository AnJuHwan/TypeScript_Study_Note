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

  const stack = new StackImpl<string>();
  stack.push('world');
  stack.push('hello');
  stack.push('wow');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>();
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
