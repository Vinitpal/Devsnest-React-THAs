import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./day-29.css";
import Day29Container from "./Day29";

const Day29 = () => {
  return (
    <Provider store={store}>
      <Day29Container />
    </Provider>
  );
};

export default Day29;
