import { useState } from 'react'
import TodoForm from './components/TodoForm';
import './App.css'
import Todo from './components/todo';
import Search from './components/search';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

const [search, setSearch] = useState('')

const addTodo = (text, category) => {
  const newTodos = [...todos,{
    id:Math.floor(Math.random() * 1000), 
    text,
    category,
    isCompleted: false
  }];

  setTodos(newTodos);
}

const removeTodo = (id) => {
  const newTodos = [...todos]
  const filteredTodos = newTodos.filter(todo => 
    todo.id !== id ? todo : null);
    setTodos(filteredTodos);
}

const completeTodo = (id) => {
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id? todo.isCompleted = ! todo.isCompleted :todo )

  setTodos(newTodos);
}





  return (


    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search
      search={search}
      setSearch={setSearch}
      />
      <div className='todo-list'>
        {todos
        .filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .map((todo) => (
         <Todo 
         key={todo.id} 
         todo={todo}
         removeTodo={removeTodo}
         completeTodo={completeTodo}
         />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
