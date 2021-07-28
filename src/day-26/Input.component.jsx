import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeEmail, changeUsername } from "./actions/index";

const Input = () => {
  const userName = useSelector((state) => state.onChange.userName);
  const email = useSelector((state) => state.onChange.email);

  // to use dispatch in react-redux we use useDispatch()
  const dispatch = useDispatch();

  return (
    <div className="input-container">
      <div className="data">
        <h1>Data</h1>
        <h2>
          Username: <span>{userName}</span>
        </h2>
        <h2>
          Email: <span>{email}</span>
        </h2>
      </div>
      <div className="input-area">
        <h1>Input</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => dispatch(changeUsername(e.target.value))}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => dispatch(changeEmail(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Input;
