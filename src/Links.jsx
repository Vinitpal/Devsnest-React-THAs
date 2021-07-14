import Footer from "./footer/Footer";

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
        <a href="./#/day-16">Day 16</a>
        <a href="./#/day-17">Day 17</a>
        <a href="./#/day-18">Day 18</a>
        <a href="./#/day-19">Day 19</a>
        <a href="./#/day-20">Day 20</a>
        <a href="./#/day-21">Day 21</a>
        <a href="./#/day-22">Day 22</a>
        <Footer />
      </div>
    </div>
  );
};

export default Links;
