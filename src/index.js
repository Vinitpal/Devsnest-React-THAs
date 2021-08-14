import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  // <BrowserRouter>
  <HashRouter>
    <App />
  </HashRouter>,
  // </BrowserRouter>,
  document.getElementById("root")
);
