import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edit, RemoveTodo, saveEdit } from "../redux/todolistReducer";

export const Display = ({ task, setTask }) => {
  const todosList = useSelector((state) => state.todolist.todos);
  const dispatch = useDispatch();
  const editted = useSelector((state) => state.todolist.editValue);
  const [editingIndex, setEditingIndex] = useState(null);
  const handleRemove = (index) => {
    dispatch(RemoveTodo(index));
  };
  const edithandle = (index) => {
    dispatch(Edit(index));
    setEditingIndex(index);
    console.log(index)
  };
  const savehandle = (index) => {
    dispatch(saveEdit({ index, newValue: task }));
    setTask("");
    setEditingIndex(null);
  };
  useEffect(() => {
    if (editted) {
      setTask(editted); // Update the input field with the edited value
    }
  }, [editted, setTask]);
  return (
    <div className="todos-container">
      {todosList.map((todo, index) => (
        <div className="todo-item" key={index}>
          <div>{todo}</div>
          <button className="remove-button" onClick={() => handleRemove(index)}>
            Remove
          </button>
          <button className="remove-button" onClick={() => edithandle(index)}>
            Edit
          </button>
          {editingIndex === index && (
            <button className="remove-button" onClick={() => savehandle(index)}>
              Save
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
