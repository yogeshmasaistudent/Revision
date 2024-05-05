import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    EditTodo: (state, action) => {
      const { id, newText } = action.payload;
      const UpdateTodo = state.todos.find((todo) => todo.id ==id);
      if (UpdateTodo) {
        UpdateTodo.title = newText;
      }
    },
  
    DeleteTodo:(state,action)=>{
        const id = action.payload;
        state.todos = state.todos.filter((todo)=>todo.id!==id);
    }


  },
});

export const { addTodo, EditTodo, DeleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
