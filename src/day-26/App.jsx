import React from "react";
import "./day26.css";
import store from "./store";
import Footer from "../footer/Footer";
import { Provider } from "react-redux";
import Input from "./Input.component";

const Day26 = () => {
  return (
    <Provider store={store}>
      <div className="day26">
        <Input />
        <Footer />
      </div>
    </Provider>
  );
};

export default Day26;
