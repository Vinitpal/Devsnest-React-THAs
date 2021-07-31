import React, { useContext } from "react";
import { Button } from "reactstrap";
import Context from "../Context/AuthContext";

import Footer from "../../footer/Footer";

const Home = () => {
  const logger = useContext(Context);

  //   const toggleLogin = () => {
  //     logger.toggleLogin();
  //   };

  return (
    <div>
      <h1>Home</h1>
      <div>Login to acces Dashboard and Profile</div>
      <h4 className="mt-5">
        Disclaimer: Dont use bootstrap in React, prefer Tailwind!
      </h4>
      {
        logger.loading ? (
          <p className="my-4">Loading...</p>
        ) : logger.loggedIn ? (
          <Button
            className="my-4"
            color="danger"
            size="bg"
            onClick={logger.logout}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="my-4"
            color="primary"
            size="bg"
            onClick={logger.login}
          >
            Login
          </Button>
        )
        // <button onClick={logger.toggleLogin}>{logger.loggedIn ? "Logout" : "Login"}</button>
      }
      <Footer />
    </div>
  );
};

export default Home;
