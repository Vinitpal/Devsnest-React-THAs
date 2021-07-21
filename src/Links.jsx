import Footer from "./footer/Footer";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>Devsnest React THA's </h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="./day-16">Day 16</Link>
        <Link to="./day-17">Day 17</Link>
        <Link to="./day-18">Day 18</Link>
        <Link to="./day-19">Day 19</Link>
        <Link to="./day-20">Day 20</Link>
        <Link to="./day-21">Day 21</Link>
        <Link to="./day-22">Day 22</Link>
        <Link to="./day-23">Day 23</Link>
        <Link to="./day-24">Day 24</Link>
        <Link to="./day-25">Day 25</Link>
        <Footer />
      </div>
    </div>
  );
};

export default Links;
