import Button from "./Button";
import "./day19-style.css";

const App = () => {
  const n = [1, 2, 3, 4];

  return (
    <div className="day-19">
      <h3>
        There are four counter component instances that each manage their own
        state
      </h3>
      <div className="buttons-div">
        {n.map((i) => (
          <Button key={i} />
        ))}
      </div>
    </div>
  );
};

export default App;
