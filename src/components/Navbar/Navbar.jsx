import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";

const Navbar = () => {

  const [theme, setTheme] = useState(localStorage.getItem("Theme"));

  const themeChanged = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("Theme", "dark")
    } else {
      setTheme("light");
      localStorage.setItem("Theme", "light")
    }
  };

  useEffect(() => {
    if (theme) {
      const body = document.querySelector("body");

      body.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <header className={style.header}>
      <p>Navbar</p>
      <button onClick={themeChanged}>Theme {theme}</button>
    </header>
  );
};

export default Navbar;
