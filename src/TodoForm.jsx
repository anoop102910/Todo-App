import React, { useState } from "react";
import { useAddTasksMutation } from "./api/apiSlice";
import { nanoid } from "@reduxjs/toolkit";
const TodoForm = () => {
  const [addTasks] = useAddTasksMutation();
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.length !== 0) {
      addTasks({id:nanoid(),content:task,complete:false})
      setTask("");
    }
  };
  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold mb-4">Todo List</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div className="flex mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded-l outline-none"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-r"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
