import React from "react";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import { ThemeContextType } from "../ThemeContext";

const ToggleTheme = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <button
      className={
        theme ? "btn-dark btn toggle-theme" : "btn-light btn toggle-theme"
      }
      onClick={() => {
        setTheme(!theme);
      }}
    >
      {theme ? "Dark" : "Light"}
    </button>
  );
};

export default ToggleTheme;
