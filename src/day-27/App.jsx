import React from "react";
import "./day-27.css";

import store from "./store";
import { Provider } from "react-redux";

import { motion } from "framer-motion";

import AddTodo from "./components/AddTodo.component";
import ListTodo from "./components/ListTodo.component";

const Day27 = () => {
  return (
    <Provider store={store}>
      <div className="day27">
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          Hemlo
        </motion.h1>
        <motion.h3
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          Welcome to yet another todo list
        </motion.h3>
        <AddTodo />
        <ListTodo />
      </div>
    </Provider>
  );
};

export default Day27;
