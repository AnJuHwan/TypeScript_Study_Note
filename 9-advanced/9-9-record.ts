{
  // Record : 두개의 Type 을 묶어서 쓰고 싶을 때 사용
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  // Record <Key , Value>
  const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: 'about' },
    contact: { title: 'contact' },
  };

  type Product = 'cat' | 'dog';
  type NewProdict = Capitalize<Product>; // 'Cat' | 'Dog'
  // 앞 문자를 대문자로 바꿔줌
}
