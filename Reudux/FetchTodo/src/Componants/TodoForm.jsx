import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Reducers/todoSlice';

function TodoForm() {
    const [IntputValue,SetInputValue] = useState("")
    const dispatch = useDispatch();
    const handleChange = (e)=>{
         SetInputValue(e.target.value);
    }

   const handleSubmit = (e)=>{
       e.preventDefault();
       dispatch(addTodo({id:Date.now(),title:IntputValue}));
       SetInputValue("");
   }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='ADD TODO' onChange={handleChange} value={IntputValue}/>
            <button>ADD</button>
        </form>
    </div>
  )
}

export default TodoForm