import React from "react";
import { useRef } from "react";
import './styles.css'

type NewTodoProps={
    onAddTodo:(text:string)=>void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef=useRef<HTMLInputElement>(null)
    const todoSubmitHandler=(event: React.FormEvent)=>{
        event.preventDefault();

        const enteredText = textInputRef.current!.value;
        console.log(enteredText)
        props.onAddTodo(enteredText)
        textInputRef.current!.value=''
    }

    return (
<form onSubmit={todoSubmitHandler}>
    <div className="container">
        <label htmlFor="todo-text">Create a todo list</label>
        <input type="text" id="todo-text" placeholder='Add a todo' ref={textInputRef}/>
        </div>
        <button type="submit"> Add an item</button>
        </form>
    )
}
export default NewTodo;