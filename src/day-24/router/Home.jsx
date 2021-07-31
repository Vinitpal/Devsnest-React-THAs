import React, { useContext } from "react";
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
      {
        logger.loading ? (
          "Loading..."
        ) : logger.loggedIn ? (
          <button onClick={logger.logout}>Logout</button>
        ) : (
          <button onClick={logger.login}>Login</button>
        )
        // <button onClick={logger.toggleLogin}>{logger.loggedIn ? "Logout" : "Login"}</button>
      }
      <Footer />
    </div>
  );
};

export default Home;
