import React from "react";
import './styles.css'

interface ToDoListProps {
    items: { id: string; text: string }[];
    onDeleteTodo:(id:string)=>void
    
}
const ToDoList: React.FC<ToDoListProps> = props => {

  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
        <span>{todo.text}</span>
        <button className='delete' onClick={props.onDeleteTodo.bind(null, todo.id)}>X</button></li>
      ))}
    </ul>
  );
};
export default ToDoList;
