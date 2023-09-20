import React from "react";
import LoadingSpinner from "./LoadingSpinner"
import Task from "./Task";
import { useGetTasksQuery } from "./api/apiSlice";

const TodoList = () => {
  let { data: tasks,isError,isLoading } = useGetTasksQuery();


  if(isError){
    return (
      <div className="text-3xl font-bold text-red-700 ml-16 py-10 ">
        Some Error occured
      </div>
    )
  }

  if(isLoading){
    return(
      <>
      <LoadingSpinner/>
      </>
    )
  }
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-2">
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
