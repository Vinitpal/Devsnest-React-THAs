import Footer from "./footer/Footer";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div
      className="bg-dark text-light"
      style={{
        height: "100vh",
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
        <Link to="./day-26">Day 26</Link>
        <Link to="./day-27">Day 27</Link>
        <Link to="./day-28">Day 28</Link>
        <Link to="./day-29">Day 29</Link>
        <Link to="./day-30">Day 30</Link>
        <Link to="./day-33">Day 33</Link>
        <Link to="./day-34">Day 34</Link>
        <Link to="./day-35">Day 35</Link>
        <Footer />
      </div>
    </div>
  );
};

export default Links;
