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
import Day24 from "./day-24/App";
import Day25 from "./day-25/App";
import Day26 from "./day-26/App";
import Day27 from "./day-27/App";
import Day28 from "./day-28/App";
import Day29 from "./day-29/App";
import Day30 from "./day-30/App";
import Day33 from "./day-33/App";
import Day34 from "./day-34/App";
import Day35 from "./day-35/App";
import Links from "./Links";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/day-16" component={Day16} />
        <Route exact path="/day-17" component={Day17} />
        <Route exact path="/day-18" component={Day18} />
        <Route exact path="/day-19" component={Day19} />
        <Route exact path="/day-20" component={Day20} />
        <Route exact path="/day-21" component={Day21} />
        <Route exact path="/day-22" component={Day22} />
        <Route exact path="/day-23" component={Day23} />
        <Route exact path="/day-24" component={Day24} />
        <Route exact path="/day-25" component={Day25} />
        <Route exact path="/day-26" component={Day26} />
        <Route exact path="/day-27" component={Day27} />
        <Route exact path="/day-28" component={Day28} />
        <Route exact path="/day-29" component={Day29} />
        <Route exact path="/day-30" component={Day30} />
        <Route exact path="/day-33" component={Day33} />
        <Route exact path="/day-34" component={Day34} />
        <Route exact path="/day-35" component={Day35} />
        <Route exact path="/" component={Links} />
      </Switch>
    </>
  );
};

export default App;
