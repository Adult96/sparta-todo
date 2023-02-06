import { useReducer } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import todoReducer from './reducer/todoReducer';

function App() {
  const [todo, setTodo] = useReducer(todoReducer, []);

  const handleSetTodo = todo => {
    setTodo(todo);
  };

  return (
    <>
      <Navbar />
      <AddTodo setTodo={setTodo} />
      <TodoList todo={todo} setTodo={handleSetTodo} done={false}>
        <p className='workTitle'>Working..🔥</p>
      </TodoList>
      <TodoList todo={todo} setTodo={handleSetTodo} done={true}>
        <p className='doneTitle'>Done..!🎉</p>
      </TodoList>
    </>
  );
}

export default App;
