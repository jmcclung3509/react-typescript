import React from 'react';
import ToDoList from './components/ToDoList';
import NewTodo from './components/NewTodo';
import {useState } from 'react';
import {Todo} from './todo.models';
import './index.css'




const App: React.FC=()=> {
  // const todos = [{ id: 't1', text: "Finish the course" }];
  const [todos, setTodos] = useState<Todo[]>([])

  

  const todoAddHandler=(text:string)=>{
    console.log("Todo Added", text)
    setTodos(prevTodos=>[
      ...prevTodos, 
      {id: Math.random().toString(), text: text}
    ])
  
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
     <ToDoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
