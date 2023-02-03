import { useReducer, useState } from 'react';
import './App.css';
import AddTodo from './components/addTodo/AddTodo';
import Navbar from './components/navbar/Navbar';
import TodoList from './components/todoList/TodoList';
import todoReducer from './reducer/todoReducer';

function App() {
  const [todo, setTodo] = useReducer(todoReducer, [
    {
      id: 0,
      title: '리액트',
      comment: '어렵다',
      isDone: false,
    },
    {
      id: 1,
      title: '리액트',
      comment: '어렵다',
      isDone: true,
    },
  ]);
  console.log(todo);
  return (
    <>
      <Navbar />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
