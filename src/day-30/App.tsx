import React from "react";
// Screens
import ProductListing from "./components/screens/ProductListing";
import ProductDetails from "./components/screens/ProductDetails";
// Layout
import NavBar from "./components/layout/NavBar";

// store
import store from "./store";
import { Provider } from "react-redux";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// CSS
import "./day30.css";

const Day30 = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className="bg-dark day30">
          <NavBar />
          {/* Drawer Component - TODO */}

          <Switch>
            <Route exact path="/day-30/:id" component={ProductDetails} />
            <Route exact path="/day-30" component={ProductListing} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};

export default Day30;
