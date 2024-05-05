import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditTodo, DeleteTodo } from "../Redux/Reducers/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();


  const handleEdit = (id,newText)=>{
   dispatch(EditTodo({id,newText}))
  }

  const handleDelete = (id)=>{
    dispatch(DeleteTodo(id))
  }

  return (
    <div>
      <ul>
        {todos.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.Title}
              <button onClick={()=>handleEdit(ele.id,prompt("Update"))}>Edit</button>
              <button onClick={()=>handleDelete(ele.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
