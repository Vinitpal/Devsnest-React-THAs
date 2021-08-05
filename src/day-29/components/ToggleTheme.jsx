import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleTheme } from "../actions/index";

const ToggleTheme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="toggle-theme">
      <button
        className={theme ? "btn btn-light" : "btn btn-dark"}
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        <i className="fa fa-adjust" />
        {theme ? " Light" : " Dark"}
      </button>
    </div>
  );
};

export default ToggleTheme;
