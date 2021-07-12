import Footer from "../footer/Footer";
import Button from "./Button";
import "./day19-style.css";

const Day19 = () => {
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
      <Footer />
    </div>
  );
};

export default Day19;
