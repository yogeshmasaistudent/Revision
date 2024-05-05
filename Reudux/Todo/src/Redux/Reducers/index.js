import { combineReducers } from "redux";
import todoReducer from "./TodoReducer";

const rootReducer = combineReducers({
    todos:todoReducer,
    // If you add more you do it
})

export default rootReducer;