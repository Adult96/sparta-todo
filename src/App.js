import { useReducer, useState } from 'react';
import './App.css';
import AddTodo from './components/addTodo/AddTodo';
import Navbar from './components/navbar/Navbar';
import TodoList from './components/todoList/TodoList';
import todoReducer from './reducer/todoReducer';

function App() {
  const [todo, setTodo] = useReducer(todoReducer, []);
  return (
    <>
      <Navbar />
      <AddTodo setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
