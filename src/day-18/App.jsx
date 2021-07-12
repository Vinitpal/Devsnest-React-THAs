import Chess from "./chess-2/ChessBoard";
import CaloreiApp from "./calorieApp-2/CalorieApp";

import "./day18-style.css";
import Footer from "../footer/Footer";

const Day18 = () => {
  return (
    <div>
      <div className="day18">
        <Chess />
        <CaloreiApp />
      </div>
      <Footer />
    </div>
  );
};

export default Day18;
