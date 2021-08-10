import { createContext } from "react";

import { TodoType } from "./App";

export interface TodoContextType {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
}

const initialState: TodoContextType = {
  todos: [],
  // setTodos ka type me dikkat aa rha
  setTodos: (todos: TodoType[]) => {},
};

const TodoContext = createContext(initialState);
export default TodoContext;
