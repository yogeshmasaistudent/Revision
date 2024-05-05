import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditTodo, DeleteTodo } from "../Redux/Actions/todoAction";

function TodoList() {
    const todos = useSelector(state=>state.todos.todos);
    // console.log(todos)
    const dispatch = useDispatch();

const handleEdit = (id, newText) => {
  dispatch(EditTodo(id, newText));
};


const handleDelete = (id) => {
  dispatch(DeleteTodo(id));
};
  return (
    <div>
        <ul>
            {todos.map((ele)=>{
                return (
                  <li>
                    {ele.Title}
                    <button onClick={() => handleDelete(ele.id)}>Delete</button>

                    <button
                      onClick={() => {
                        const newText = prompt("Enter new text:");
                        if (newText !== null && newText.trim() !== "") {
                          handleEdit(ele.id, newText);
                        }
                      }}
                    >
                      Edit
                    </button>
                  </li>
                );
            })}
        </ul>
    </div>
  )
}

export default TodoList