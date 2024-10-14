import { configureStore } from "@reduxjs/toolkit";
import todolistReducer  from "./todolistReducer";

const store = configureStore({
  reducer : {
    todolist : todolistReducer
  }
})
export default store;