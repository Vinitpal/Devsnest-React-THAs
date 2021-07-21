import { useContext } from "react";
import Context from "../Context/AuthContext";
import { Route, Redirect } from "react-router-dom";

import Carousel from "../Components/Carousel";

const DashboardWrapper = () => {
  return (
    <div>
      <h3>Welcome to the Dashboard</h3>
      <Carousel />
    </div>
  );
};

const Dashboard = () => {
  const logger = useContext(Context);

  return (
    <div>
      <Route>
        <h1>Dashboard</h1>
        {logger.loggedIn ? <DashboardWrapper /> : <Redirect to="/day-25" />}
      </Route>
    </div>
  );
};

export default Dashboard;
