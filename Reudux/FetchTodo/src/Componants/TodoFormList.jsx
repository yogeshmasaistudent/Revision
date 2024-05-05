import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTodo, EditTodo } from '../Redux/Reducers/todoSlice';

function TodoFormList() {
    const todos = useSelector(state=>state.todos.todos);
    console.log(todos);
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
            {todos.map((ele)=>{
                return(
                    <li>{ele.title}
                     <button onClick={()=>handleEdit(ele.id,prompt("Enter Updated Todo"))}>Edit</button>
                     <button onClick={()=>handleDelete(ele.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default TodoFormList