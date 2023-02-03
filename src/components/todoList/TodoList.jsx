import React from 'react';
import TodoItem from '../todoItem/TodoItem';

export default function TodoList({ todo, setTodo }) {
  return (
    <>
      <p className='workTitle'>Working..🔥</p>
      <ul className='working'>
        {todo
          .filter(todo => !todo.isDone)
          .map((item, key) => (
            <li key={key} className='todoItem'>
              <TodoItem item={item} setTodo={setTodo} />
            </li>
          ))}
      </ul>
      <p className='doneTitle'>Done..!🎉</p>
      <ul className='done'>
        {todo
          .filter(todo => todo.isDone)
          .map((item, key) => (
            <li key={key} className='todoItem'>
              <TodoItem item={item} setTodo={setTodo} />
            </li>
          ))}
      </ul>
    </>
  );
}
