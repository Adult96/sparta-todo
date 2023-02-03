export default function todoReducer(todo, action) {
  switch (action.type) {
    case 'add':
      const { title, comment } = action;
      return [
        ...todo,
        {
          id: todo.length - 1,
          title,
          comment,
          isDone: false,
        },
      ];
    case 'delete':
      return todo.filter(v => v.id !== action.id);
    case 'complete':
      const { id, isDone } = action.item;
      return todo.map(v => (v.id === id ? { ...v, isDone: !isDone } : v));
    default:
      throw new Error('tpye 에러 발생');
  }
}
