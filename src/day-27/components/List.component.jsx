import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { removeItem, itemDone } from "../actions/index";
import { motion } from "framer-motion";

import Edit from "./Edit.component";

const List = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <Edit index={index} setIsEditing={setIsEditing} />
      ) : (
        <motion.div
          initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
          animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
          exit={{
            x: "-60vw",
            scale: [1, 0],
            transition: { duration: 0.5 },
          }}
          className="todolist__item"
        >
          <h5
            style={{
              display: "inline-block",
              textDecoration: todo.done ? "line-through" : "",
              fontWeight: todo.done ? "normal" : "bold",
            }}
          >
            {todo.title}
          </h5>
          <div className="buttons">
            {/* Edit */}
            <i
              onClick={() => {
                setIsEditing(true);
              }}
              style={{ fontSize: "1rem", color: "#fff" }}
              className="fa-solid fa-pen"
            ></i>

            {/* Completed */}
            <i
              onClick={(e) => {
                dispatch(itemDone(index));
              }}
              style={{ color: "#0f0" }}
              className="fa-solid fa-check"
            ></i>

            {/* Delete */}
            <i
              onClick={(e) => {
                dispatch(removeItem(index));
              }}
              style={{ color: "#f00" }}
              className="fa-solid fa-xmark"
            ></i>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default List;
