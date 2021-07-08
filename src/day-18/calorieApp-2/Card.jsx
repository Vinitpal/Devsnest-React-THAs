const Card = ({ food, calorie }) => {
  return (
    <div className="card">
      <h1>{food}</h1>
      <h2 style={{ color: calorie > 50 ? "red" : "black" }}>
        you have consumed {calorie} cals today
      </h2>
      <h2 style={{ display: calorie > 50 ? "block" : "none", color: "red" }}>
        Warning: too much calorie intake
      </h2>
    </div>
  );
};

export default Card;
