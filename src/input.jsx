import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addtodo } from "../redux/todolistReducer";


export const Input = ({ task, setTask }) => {
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state.todolist.todos);

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(Addtodo(task));
      setTask("");
    }
  };
  const handlekey = (e) => {
    if (e.key == "Enter" && task.trim()) {
      dispatch(Addtodo(task));
      setTask("");
    }
  };
  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  return (
    <div className="input-container">
      <input
        className="input-field"
        placeholder="Add task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => handlekey(e)}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};
