import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Reducers/todoSlice";


const store = configureStore({
    reducer:{
        todos:todoSlice,
    }
})

export default store;