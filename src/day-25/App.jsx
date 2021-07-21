import "./day25.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";

import Home from "./router/Home";
import About from "./router/About";
import Dashboard from "./router/Dashboard";
import Profile from "./router/Profile";
import { AuthContext } from "./Context/AuthContext";

const Day25 = () => {
  return (
    <div className="day25">
      <Router>
        <Header />
        {/* <nav>
          <ul>
            <li>
              <Link to="/day-25">Home</Link>
            </li>
            <li>
              <Link to="/day-25/about">About</Link>
            </li>
            <li>
              <Link to="/day-25/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/day-25/profile">Profile</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <AuthContext>
            <Route exact path="/day-25" component={Home} />
            <Route path="/day-25/about" component={About} />
            <Route exact path="/day-25/dashboard" component={Dashboard} />
            <Route exact path="/day-25/profile" component={Profile} />
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
};
export default Day25;
