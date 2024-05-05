import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState, 
  reducers: {

    //  ADD Todo 
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    // Edit Todo
    EditTodo:(state,action)=>{
       const {id,newText} = action.payload;
       const TodoToEdit = state.todos.find((todo)=>todo.id==id);
       if(TodoToEdit){
        TodoToEdit.Title = newText;
       }

    },

    // DElete Todo 

    DeleteTodo:(state,action)=>{
        const ToDeleteId = action.payload;
      state.todos = state.todos.filter((todo)=>todo.id!==ToDeleteId);
    }

  },
});
export const { addTodo, EditTodo, DeleteTodo } = todoSlice.actions;
export default todoSlice.reducer;