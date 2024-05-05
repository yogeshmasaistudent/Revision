import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from '../Redux/Actions/todoAction';


function TodoForm() {
const [inputValue,SetInputValue] = useState("");
const dispatch = useDispatch();


 const handleChange = (e)=>{
  SetInputValue(e.target.value)
 }

 const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addTodo({id:Date.now(),Title:inputValue}));
    SetInputValue("")
 }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} placeholder="ADD TODO" onChange={handleChange} />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default TodoForm