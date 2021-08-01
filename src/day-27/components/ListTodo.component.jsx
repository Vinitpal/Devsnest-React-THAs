import React from "react";

import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import List from "./List.component";

const ListTodo = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <div className="todolist__container">
      <AnimatePresence>
        {todos.map((todo, index) => (
          <div key={index}>
            <List todo={todo} index={index} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ListTodo;
