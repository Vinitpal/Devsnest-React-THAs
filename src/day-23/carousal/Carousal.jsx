import "./carousal.css";
import useCarousal from "./useCarousal";

const slides = [
  {
    title: "Slide 1",
    color: "#a7a9be",
  },
  {
    title: "Slide 2",
    color: "#e53170",
  },
  {
    title: "Slide 3",
    color: "#FBA434",
  },
];

function Carousal() {
  const { offset, addItem } = useCarousal({
    total: slides.length,
    enabled: true,
    useLoaded: false,
    speed: 2000,
  });

  console.log(addItem);

  return (
    <div className="carousal">
      <h2>A carousal</h2>
      <div className="container">
        <div
          className="scroller"
          style={{
            transform: `translate3d(-${offset * 300}px,0,0)`,
            width: `${slides.length * 300}px`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className="slide"
              style={{ backgroundColor: slide.color }}
            >
              {slide.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousal;
