import CardContainer from "./CardContainer";
import Instructions from "./Instructions";

const CalorieApp = () => {
  return (
    <div className="calorie-app">
      <Instructions />
      <h1>Calorie Read Only</h1>
      <CardContainer />
    </div>
  );
};

export default CalorieApp;
