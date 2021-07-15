import React from "react";
import { Route, Switch } from "react-router-dom";

import Day16 from "./day-16/App";
import Day17 from "./day-17/App";
import Day18 from "./day-18/App";
import Day19 from "./day-19/App";
import Day20 from "./day-20/App";
import Day21 from "./day-21/App";
import Day22 from "./day-22/App";
import Day23 from "./day-23/App";
import Links from "./Links";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/day-16" component={Day16} />
        <Route path="/day-17" component={Day17} />
        <Route path="/day-18" component={Day18} />
        <Route path="/day-19" component={Day19} />
        <Route path="/day-20" component={Day20} />
        <Route path="/day-21" component={Day21} />
        <Route path="/day-22" component={Day22} />
        <Route path="/day-23" component={Day23} />
        <Route component={Links} />
      </Switch>
    </>
  );
};

export default App;
