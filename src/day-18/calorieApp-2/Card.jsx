const Card = ({ food, calorie }) => {
  return (
    <div className="card-wrapper">
      <div
        className="box"
        style={{
          backgroundColor:
            calorie > 50 ? "red" : calorie > 40 ? "orange" : "green",
        }}
      ></div>
      <div className="card">
        <h3>{food}</h3>
        <h4>
          you have consumed{" "}
          <span style={{ color: calorie > 50 ? "red" : "green" }}>
            {calorie}
          </span>{" "}
          cals today
        </h4>
        {/* <h5 style={{ display: calorie > 50 ? "block" : "none", color: "red" }}>
          Warning: too much calorie intake
        </h5> */}
      </div>
    </div>
  );
};

export default Card;
