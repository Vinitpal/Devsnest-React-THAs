import React from "react";
import { IncCounter, DecCounter } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "../reducers";

const Counter = () => {
  const counter = useSelector((state: reducerType) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="d-flex counter-wrapper">
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch(IncCounter(2))}
      >
        +
      </button>
      <div>{counter}</div>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch(DecCounter(2))}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
