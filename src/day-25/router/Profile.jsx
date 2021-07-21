import { useContext } from "react";
import Context from "../Context/AuthContext";
import { Route, Redirect } from "react-router-dom";

const ProfileContainer = () => {
  return (
    <div
      className=" card text-white  mb-3"
      style={{
        backgroundColor: "#242629",
        maxWidth: "18rem",
        borderRadius: "20px",
        boxShadow: " 0 7px 15px -10px #000",
      }}
    >
      <div className="card-header text-primary fs-4">Kirua</div>
      <div className="card-body">
        <div className="card-title fs-5 ">Sleepy Knight</div>
        <p className="card-text fs-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          autem.
        </p>
      </div>
    </div>
  );
};

const Profile = () => {
  const logger = useContext(Context);
  return (
    <div>
      <Route>
        <h1>Profile</h1>
        {logger.loggedIn ? <ProfileContainer /> : <Redirect to="/day-25" />}
      </Route>
    </div>
  );
};

export default Profile;
