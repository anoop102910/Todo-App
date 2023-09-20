import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div>
      <div className="mx-auto w-[500px] p-10 App border bg-green-200 mt-10 rounded-lg shadow-md">
        <TodoForm />
        <div className="mt-4">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
