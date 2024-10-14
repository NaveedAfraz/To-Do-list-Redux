import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: {
    todos: [],
    editValue : "",
  },
  reducers: {
    Addtodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    RemoveTodo: (state, action) => {
      const valueIndex = action.payload;
      const filtered = state.todos.filter(
        (todo, index) => index !== valueIndex
      );
      return {
        ...state,
        todos: filtered,
      };
    },
    Edit: (state, action) => {
      const valueIndex = action.payload;
      const filtered = state.todos.filter(
        (todo, index) => index == valueIndex
      );
      return {
        ...state,
        editValue: filtered,
      };
    },
    saveEdit:(state,action)=>{
      const { index, newValue } = action.payload;
      state.todos[index] = newValue; 
    }
  },
});
export const { Addtodo, RemoveTodo,Edit,saveEdit } = todolistSlice.actions;
export default todolistSlice.reducer;
