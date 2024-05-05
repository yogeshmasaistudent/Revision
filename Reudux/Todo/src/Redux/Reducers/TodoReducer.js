// src/redux/reducers/todoReducer.js

const inisitalState = {
    todos:[],
}

const todoReducer = (state=inisitalState, action)=>{
   switch (action.type) {
     case "ADD_TODO":
       return {
         ...state,
         todos: [...state.todos, action.payload],
       };

     case "EDIT_TODO":
       return {
         ...state,
         todos: state.todos.map((todo) => {
           return (todo.id === action.payload.id
             ? { ...todo, Title: action.payload.newText }
             : todo)
         }),
       };

    //  case "EDIT_TODO":
    //    return {
    //      ...state,
    //      todos: state.todos.map((todo) =>
    //        todo.id === action.payload.id
    //          ? { ...todo, Title: action.payload.newText }
    //          : todo
    //      ),
    //    };

     case "DELETE_TODO":
       return {
         ...state,
         todos: state.todos.filter((todo) => {
           return todo.id !== action.payload;
         }),
       };
     default:
       return state;
   }
}
export default todoReducer;