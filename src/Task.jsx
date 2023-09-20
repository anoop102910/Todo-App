import React, { useState, useRef } from "react";
import { useDeleteTasksMutation, useUpdateTasksMutation } from "./api/apiSlice";

const Task = ({ task }) => {
  const [deleteTasks] = useDeleteTasksMutation();
  const [updateTasks] = useUpdateTasksMutation();

  const { content, complete, id } = task;

  const ref = useRef(null);
  let [editable, setEditable] = useState(false);
  let [value, setValue] = useState(content);

  const handleTaskDeletion = () => {
    deleteTasks(id);
  };

  const handleTaskUpdate = () => {
    if (value !== content) {
      updateTasks({ ...task, content: value });
    }
    setEditable(false);
  };

  const handleEditCancel = () => {
    setEditable(false);
    setValue(content);
  };

  const handleTaskComplete = () => {
    updateTasks({ ...task, complete: !complete }, id);
  };

  return (
    <div
      className="bg-white px-4 py-2 rounded-md w-full flex justify-between items-center shadow-md"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setEditable(false);
        }
      }}
    >
      <div className="flex">
        <input
          type="checkbox"
          checked={complete}
          onChange={handleTaskComplete}
          className="mr-4"
        />
        {complete ? (
          <strike className="inline-block py-1">{content}</strike>
        ) : (
          <input
            ref={ref}
            className="bg-white disabled:outine-none pl-1"
            type="text"
            value={value}
            disabled={!editable}
            autoFocus={editable}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        )}
      </div>

      {!complete &&
        (editable ? (
          <div className="flex gap-3">
            <button
              className="px-2 py-1 bg-blue-500 rounded-md text-sm text-white"
              onClick={handleTaskUpdate}
            >
              Save
            </button>
            <button
              className="px-2 py-1 bg-red-500 rounded-md text-sm text-white"
              onClick={() => {
                handleEditCancel();
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <button className="text-red-500 p-1" onClick={handleTaskDeletion}>
              <i className="fas fa-trash"></i>
            </button>
            <button
              className="text-green-500 p-1"
              onClick={() => {
                setEditable(true);
                ref.current.focus();
              }}
            >
              <i className="fas fa-edit"></i>
            </button>
          </div>
        ))}
    </div>
  );
};

export default Task;
