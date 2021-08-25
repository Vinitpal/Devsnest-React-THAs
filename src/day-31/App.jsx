import React from "react";
import { Link } from "react-router-dom";
import "./day31.css";

const Day31 = () => {
  return (
    <div className="bg-dark text-secondary d-flex flex-column justify-content-center align-items-center day31">
      <h1>I knew you would be here, Go to this link to see my day31 THA</h1>
      <Link to="https://rowdy-store.netlify.app/#/" className="link">
        This is clearly not a virus
      </Link>
    </div>
  );
};

export default Day31;
