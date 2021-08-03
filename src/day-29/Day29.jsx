import React from "react";
import { useSelector } from "react-redux";
import Form from "./components/Form";
import ToggleTheme from "./components/ToggleTheme";
import WeatherContainer from "./components/WeatherContainer";

const Day29Container = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme ? "day29 bg-light" : "day29"}>
      <ToggleTheme />
      <Form />
      <WeatherContainer />
    </div>
  );
};

export default Day29Container;
