import { useContext } from "react";
import TodoContext from "../TodosContext";
import { TodoContextType } from "../TodosContext";

interface TodoListProps {
  title: string;
  done: boolean;
  id: number;
}

const TodoList = ({ title, done, id }: TodoListProps) => {
  const { todos, setTodos } = useContext<TodoContextType>(TodoContext);

  return (
    <div className="card my-2 ">
      <div className="card-body bg-dark text-light d-flex justify-content-between align-items-center">
        <h2 className={`my-0 mx-2 ${done ? "completed" : ""}`}>{title}</h2>
        <div>
          <button
            className="btn btn-primary btn-sm mx-2"
            onClick={() => {
              const newTodos = [...todos];
              newTodos[id].done = !done;

              setTodos(newTodos);
            }}
          >
            Done
          </button>
          <button
            onClick={() => {
              setTodos(todos.filter((item, idx) => id !== idx));
            }}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
