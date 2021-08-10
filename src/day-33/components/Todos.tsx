import React, { useState, useContext } from "react";

import TodoList from "./TodoList";
import TodoContext from "../TodosContext";
import { TodoContextType } from "../TodosContext";

const Todos = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const { todos, setTodos } = useContext<TodoContextType>(TodoContext);

  return (
    <div>
      <form>
        <div className="input-container d-flex justify-content-between align-items-center my-5 ">
          <input
            className="input-group w-75 px-2 py-1"
            type="text"
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if (newTodo) {
                setTodos([{ title: newTodo, done: false }, ...todos]);
              }
              setNewTodo("");
            }}
          >
            Add
          </button>
        </div>
      </form>

      <div className="todos">
        {todos.map((todo, index) => (
          <TodoList
            key={index}
            title={todo.title}
            done={todo.done}
            id={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
