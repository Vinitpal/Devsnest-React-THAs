import Footer from "../footer/Footer";
import Card from "./Card";
import Chess from "./chessBoard/Chess";
import "./day16-style.css";

const Day16 = () => {
  return (
    <div>
      <div className="day16">
        <Card />
        <Chess />
      </div>
      <Footer />
    </div>
  );
};

export default Day16;
