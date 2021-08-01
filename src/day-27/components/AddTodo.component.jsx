import React from "react";
import { useState } from "react";
import { addItem } from "../actions/index";
import { useDispatch } from "react-redux";

import { motion } from "framer-motion";

const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="add-todo"
    >
      <input
        type="text"
        placeholder="Add a todo ..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          if (item !== "") {
            dispatch(
              addItem({
                title: item,
                done: false,
                editing: false,
              })
            );
          }
          setItem("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </motion.button>

      {/* --- Clear All button --- */}
      {/* <button onClick={() => dispatch(clearList())}>Clear List</button> */}

      {/* --- Load From API button --- */}
      {/* <div>
        <button
          style={{ marginTop: "1rem" }}
          onClick={() => dispatch(loadTodo())}
        >
          Load Todo
        </button>
      </div> */}
    </motion.div>
  );
};

export default AddTodo;
