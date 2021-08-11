import React from "react";
import "./day34.css";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";
import NoteContainer from "./components/NoteContainer";

const Day34 = () => {
  return (
    <Provider store={store}>
      <div className="day34 bg-dark text-light ">
        <Counter />
        <NoteContainer />
      </div>
    </Provider>
  );
};

export default Day34;
