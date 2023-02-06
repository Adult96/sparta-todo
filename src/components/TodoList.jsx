import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todo, setTodo, done, children }) {
  return (
    <>
      {children}
      <ul className='body'>
        {todo
          .filter(todo => done === todo.isDone)
          .map((item, key) => (
            <li key={key} className='todoItem'>
              <TodoItem item={item} setTodo={setTodo} />
            </li>
          ))}
      </ul>
    </>
  );
}
