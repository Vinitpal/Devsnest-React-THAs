import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      {/* Logo */}
      <Link to="/day-30">
        <h2>React Redux Cart</h2>
      </Link>

      {/* On click -> show Cart Drawer */}
      <button
        className="btn btn-outline-primary btn-sm"
        style={{ fontSize: "1.5em" }}
      >
        <RiShoppingCartFill />
      </button>
    </div>
  );
};

export default NavBar;
