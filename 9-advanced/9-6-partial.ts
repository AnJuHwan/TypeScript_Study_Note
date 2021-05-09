{
  // 부분적인 Type만 변경하고 싶을 때
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
    // todo를 복사해서 fieldsToUpdate 에 붙여쓴다.
  }
  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };

  const update = updateTodo(todo, { priority: 'low' });
  console.log(update);
}
