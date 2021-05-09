// 기존에 있는 type 들을 이용하면서 조금 다른 형태로 변환 할 수 있는 것
{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  //   [1,2].map(item => item * item); // [1,4]
  type Optional<T> = {
    // [P in keyof T] : T안에 있는 key 값들을 P에 할당
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'hello',
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog',
  };

  animal.name = 'ellie';

  const video: ReadOnly<Video> = {
    title: 'hello',
    author: 'ellie',
    description: 'hello',
  };

  //   type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //     description?: string;
  //   };

  //   type VideoReadOnly = {
  //     readonly title?: string;
  //     readonly author?: string;
  //     readonly description?: string;
  //   };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: 'hello',
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
