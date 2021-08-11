import React, { useState } from "react";

import Todos from "./components/Todos";
import ToggleTheme from "./components/ToggleTheme";

import "./day33.css";
import ThemeContext from "./ThemeContext";
import TodoContext from "./TodosContext";

export interface TodoType {
  title: string;
  done: boolean;
}

const Day33 = () => {
  const [theme, setTheme] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <div
          className={
            theme ? "day33 bg-dark text-light" : "day33 bg-light text-dark"
          }
        >
          <Todos />
          <ToggleTheme />
        </div>
      </TodoContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Day33;
