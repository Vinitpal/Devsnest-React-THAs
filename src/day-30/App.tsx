import React from "react";
import ProductListing from "./components/screens/ProductListing";
import ProductDetails from "./components/screens/ProductDetails";
import NavBar from "./components/layout/NavBar";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./day30.css";
// import TemporaryDrawer from "./components/layout/Drawer";

const Day30 = () => {
  return (
    <div className="bg-dark day30">
      <Router>
        <NavBar />
        {/* Drawer Component - TODO*/}
        {/* <TemporaryDrawer /> */}
        <Switch>
          <Route exact path="/day-30/:id" component={ProductDetails} />
          <Route exact path="/day-30" component={ProductListing} />
        </Switch>
      </Router>
    </div>
  );
};

export default Day30;
