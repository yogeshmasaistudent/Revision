//src/Redux/stor.js 

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Reducers/todoSlice";
const store = configureStore({
    reducer:{
        todos:  todoReducer,    // Here we will write name of reducer 
    }
})

export default store;