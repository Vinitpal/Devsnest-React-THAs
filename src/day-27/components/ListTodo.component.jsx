import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../actions/index";

const ListTodo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="todolist__container">
      {todos.map((todo, index) => (
        <div className="todolist__item" key={index}>
          <h5 style={{ display: "inline-block" }}>{todo.title}</h5>
          <div className="buttons">
            <button
              onClick={(e) => {
                dispatch(removeItem(index));
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                dispatch(removeItem(index));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
