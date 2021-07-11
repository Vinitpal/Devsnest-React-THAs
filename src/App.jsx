import React from "react";
import { Route, Switch } from "react-router-dom";

import Day16 from "./day-16/App";
import Day17 from "./day-17/App";
import Day18 from "./day-18/App";
import Day19 from "./day-19/App";
import Links from "./Links";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/day-16" component={Day16} />
        <Route path="/day-17" component={Day17} />
        <Route path="/day-18" component={Day18} />
        <Route path="/day-19" component={Day19} />
        <Route component={Links} />
      </Switch>
    </>
  );
};

export default App;
