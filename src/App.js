import { useReducer } from 'react';
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
      <TodoList todo={todo} setTodo={setTodo} done={false}>
        <p className='workTitle'>Working..🔥</p>
      </TodoList>
      <TodoList todo={todo} setTodo={setTodo} done={true}>
        <p className='doneTitle'>Done..!🎉</p>
      </TodoList>
    </>
  );
}

export default App;
